import fs from "node:fs";
import path from "node:path";
import { polishDescription, polishProductName } from "./menu-text-polish.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const MENU_SOURCE_URL = "https://cardapio.multipedidos.com.br/ontakesushi/cardapio.json";
const MENU_PATH = path.join(ROOT, "src/data/menu.ts");

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

function inferFromPrice(name, price) {
  const upper = stripHtml(name).toUpperCase();
  return upper.includes("MONTE") || upper.includes("A PARTIR") || price === 0;
}

function inferTags(name, category) {
  const tags = [];
  const upper = stripHtml(name).toUpperCase();
  if (category === "Barato do Dia" && /BARATO DO DIA/i.test(name)) tags.push("promoção");
  if (upper.includes("NOVO") || upper.includes("NOVIDADE")) tags.push("novidade");
  return tags.length ? tags : undefined;
}

function detectBaratoWeekday(name) {
  const plain = stripHtml(name).toLowerCase();
  const match = plain.match(/\(([^)]+)\)/);
  if (!match) return null;
  const token = match[1]
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (const [key, weekday] of Object.entries(BARATO_WEEKDAY)) {
    const normalizedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (token === normalizedKey) return weekday;
  }
  return null;
}

function readExistingImages() {
  const source = fs.readFileSync(MENU_PATH, "utf8");
  const images = {};
  for (const match of source.matchAll(/id: "(mp-\d+)"[\s\S]*?image: "([^"]+)"/g)) {
    images[match[1]] = match[2];
  }
  return images;
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

const existingImages = readExistingImages();
const response = await fetch(MENU_SOURCE_URL, { headers: { "Cache-Control": "no-cache" } });
const data = await response.json();
const categories = Object.values(data.cardapio.menu.general || {});

const items = [];
const categoriesInMenu = [];
const categoriesSeen = new Set();
const baratoByWeekday = {};

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
    const image = existingImages[id] || `/menu/${id}.jpg`;

    if (/barato do dia/i.test(rawName)) {
      const weekday = detectBaratoWeekday(rawName);
      if (weekday) baratoByWeekday[weekday] = id;
    }

    if (!categoriesSeen.has(mapped)) {
      categoriesSeen.add(mapped);
      categoriesInMenu.push(mapped);
    }

    items.push({
      id,
      name,
      description,
      price,
      fromPrice: fromPrice || undefined,
      category: mapped,
      image,
      tags,
      featured,
    });
  }
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

fs.writeFileSync(MENU_PATH, output);
console.log(`Polished ${items.length} menu texts.`);
