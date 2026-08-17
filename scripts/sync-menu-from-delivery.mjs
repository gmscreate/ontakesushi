import fs from "node:fs";
import path from "node:path";
import { polishDescription, polishProductName } from "./menu-text-polish.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const MENU_SOURCE_URL = "https://cardapio.multipedidos.com.br/ontakesushi/cardapio.json";
const IMG_BASE = "https://images.multipedidos.com.br";
const MENU_IMAGES_DIR = path.join(ROOT, "public/menu");

const CATEGORY_MAP = {
  "BARATO DO DIA": "Barato do Dia",
  Entradas: "Entradas",
  COMBOS: "Combos",
  EXECUTIVOS: "Executivos",
  Porções: "Porções",
  RISOTO: "Risotos",
  Massas: "Massas",
  Yakissoba: "Yakissoba",
  Uramaki: "Uramaki",
  HOT: "Hot",
  TEMAKI: "Temaki",
  NIGUIRI: "Niguiri",
  joys: "Joys",
  "SASHIMIS 2 UNIDADE": "Sashimis",
  "POKE  HAVAINO": "Pokés",
  SALADA: "Saladas",
  SUSHIRRITO: "Sushirrito",
  Sobremesas: "Sobremesas",
  Bebidas: "Bebidas",
  MOQUECA: "Moquecas",
  TOPOKKI: "Topokki",
  ONIGUIRI: "Oniguiri",
  CALDO: "Caldos",
  Extra: "Extras",
  "OVO DE SUSHI": "Entradas",
  "TEMAKI MONTAGEM": "Temaki",
  "Posta de Salmão": "Entradas",
  ROLHA: "Extras",
};

const BARATO_WEEKDAY = {
  terça: "terça-feira",
  terca: "terça-feira",
  quarta: "quarta-feira",
  quinta: "quinta-feira",
  sexta: "sexta-feira",
  sábado: "sábado",
  sabado: "sábado",
};

function stripHtml(value) {
  return String(value || "")
    .replace(/^"+|"+$/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeName(value) {
  return stripHtml(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function productRemoteUrl(hash, profilePic) {
  if (hash && hash.length >= 20) {
    return `${IMG_BASE}/products/${hash}/lg_${hash}.jpg`;
  }
  if (profilePic) {
    return `${IMG_BASE}/profiles/${profilePic}.jpg`;
  }
  return `${IMG_BASE}/profiles/51ccb312dd558d0d15824f4a49b0f5c76a7d5fb4860bac4bba5d93f37d511ed9.jpg`;
}

function inferFromPrice(name, price) {
  const upper = normalizeName(name);
  return upper.includes("MONTE") || upper.includes("A PARTIR") || price === 0;
}

function inferTags(name, category) {
  const tags = [];
  const upper = normalizeName(name);
  if (category === "Barato do Dia" && /BARATO DO DIA/i.test(name)) tags.push("promoção");
  if (upper.includes("NOVO") || upper.includes("NOVIDADE")) tags.push("novidade");
  return tags.length ? tags : undefined;
}

function detectBaratoWeekday(name) {
  const plain = stripHtml(name).toLowerCase();
  for (const [key, weekday] of Object.entries(BARATO_WEEKDAY)) {
    if (plain.includes(`(${key})`) || plain.includes(`(${key})`)) return weekday;
    if (plain.includes(` ${key}`) || plain.includes(`— ${key}`)) return weekday;
  }
  const match = plain.match(/\(([^)]+)\)/);
  if (match) {
    const token = match[1]
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    for (const [key, weekday] of Object.entries(BARATO_WEEKDAY)) {
      const normalizedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (token === normalizedKey) return weekday;
    }
  }
  return null;
}

async function downloadImage(url, dest) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("image")) {
    throw new Error(`Not an image (${contentType})`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  return buffer.length;
}

async function downloadBatch(tasks, concurrency = 8) {
  let index = 0;
  let ok = 0;
  let fail = 0;

  async function worker() {
    while (index < tasks.length) {
      const current = tasks[index++];
      try {
        const bytes = await downloadImage(current.url, current.dest);
        ok++;
        if (ok % 20 === 0) console.log(`  downloaded ${ok}/${tasks.length}...`);
        current.bytes = bytes;
      } catch (error) {
        fail++;
        console.warn(`  skip ${current.id}: ${error.message}`);
        current.failed = true;
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return { ok, fail };
}

const response = await fetch(MENU_SOURCE_URL, {
  headers: { "Cache-Control": "no-cache" },
});
if (!response.ok) {
  throw new Error(`Failed to fetch menu (${response.status})`);
}
const data = await response.json();
const profilePic = data.cardapio?.info?.profile_pic;
const categories = Object.values(data.cardapio.menu.general || {});

fs.mkdirSync(MENU_IMAGES_DIR, { recursive: true });

const fallbackDest = path.join(MENU_IMAGES_DIR, "_fallback.jpg");
if (!fs.existsSync(fallbackDest)) {
  await downloadImage(productRemoteUrl(null, profilePic), fallbackDest);
}

const items = [];
const categoriesInMenu = [];
const categoriesSeen = new Set();
const baratoByWeekday = {};
const downloadTasks = [];

for (const category of categories) {
  const mapped = CATEGORY_MAP[category.name];
  if (!mapped) continue;

  for (const product of category.products || []) {
    if (!product.available) continue;

    const rawName = stripHtml(product.name);
    const rawDescription = stripHtml(product.description);
    const id = `mp-${product.id}`;
    const name = polishProductName(rawName, id);
    const description = polishDescription(rawDescription, rawName, id);
    const price = Number(product.price) || 0;
    const fromPrice = inferFromPrice(rawName, price);
    const tags = inferTags(rawName, mapped);
    const featured = product.featured ? true : undefined;
    const remoteUrl = productRemoteUrl(product.image, profilePic);
    const localImage = `/menu/${id}.jpg`;

    if (/barato do dia/i.test(rawName)) {
      const weekday = detectBaratoWeekday(rawName);
      if (weekday) baratoByWeekday[weekday] = id;
    }

    downloadTasks.push({
      id,
      url: remoteUrl,
      dest: path.join(MENU_IMAGES_DIR, `${id}.jpg`),
    });

    if (!categoriesSeen.has(mapped)) {
      categoriesSeen.add(mapped);
      categoriesInMenu.push(mapped);
    }

    items.push({
      id,
      name,
      description: description || name,
      price,
      fromPrice: fromPrice || undefined,
      category: mapped,
      image: localImage,
      tags,
      featured,
    });
  }
}

console.log(`Downloading ${downloadTasks.length} menu photos...`);
const { ok, fail } = await downloadBatch(downloadTasks);
console.log(`Photos: ${ok} ok, ${fail} failed.`);

for (const item of items) {
  const dest = path.join(MENU_IMAGES_DIR, `${item.id}.jpg`);
  if (!fs.existsSync(dest)) {
    item.image = "/menu/_fallback.jpg";
  }
}

function serializeItem(item) {
  const parts = [
    `id: "${item.id}"`,
    `name: ${JSON.stringify(item.name)}`,
    `description: ${JSON.stringify(item.description)}`,
    `price: ${item.price}`,
  ];
  if (item.fromPrice) parts.push("fromPrice: true");
  parts.push(`category: ${JSON.stringify(item.category)}`);
  parts.push(`image: ${JSON.stringify(item.image)}`);
  if (item.tags?.length) parts.push(`tags: ${JSON.stringify(item.tags)}`);
  if (item.featured) parts.push("featured: true");
  return `  { ${parts.join(", ")} }`;
}

let currentCategory = "";
const body = items
  .map((item) => {
    let prefix = "";
    if (item.category !== currentCategory) {
      currentCategory = item.category;
      prefix = `\n  /* -------- ${currentCategory} -------- */\n`;
    }
    return `${prefix}${serializeItem(item)},`;
  })
  .join("\n");

const baratoEntries = Object.entries(baratoByWeekday)
  .sort(([a], [b]) => a.localeCompare(b, "pt-BR"))
  .map(([day, id]) => `  "${day}": "${id}",`)
  .join("\n");

const output = `export type MenuCategory =
${categoriesInMenu.map((name) => `  | ${JSON.stringify(name)}`).join("\n")};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  fromPrice?: boolean;
  category: MenuCategory;
  image: string;
  tags?: string[];
  featured?: boolean;
};

export const CATEGORIES: MenuCategory[] = [
  ${categoriesInMenu.map((name) => JSON.stringify(name)).join(", ")},
];

export const MENU: MenuItem[] = [
${body}
];

const BARATO_DIA_BY_WEEKDAY: Record<string, string> = {
${baratoEntries}
};

const SITE_TIMEZONE = "America/Sao_Paulo";

export function getWeekdayInSiteTimezone(date = new Date()) {
  return date.toLocaleDateString("pt-BR", { timeZone: SITE_TIMEZONE, weekday: "long" });
}

export function isTodaysBaratoDoDia(item: MenuItem, date = new Date()) {
  if (item.category !== "Barato do Dia") return false;
  const todayId = BARATO_DIA_BY_WEEKDAY[getWeekdayInSiteTimezone(date)];
  return todayId === item.id;
}

export function isMenuItemDestaque(item: MenuItem, date = new Date()) {
  if (item.category === "Barato do Dia") return isTodaysBaratoDoDia(item, date);
  return item.featured === true;
}
`;

fs.writeFileSync(path.join(ROOT, "src/data/menu.ts"), output);
console.log(`Synced ${items.length} items across ${categoriesInMenu.length} categories.`);
