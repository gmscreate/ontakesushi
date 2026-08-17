import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = path.resolve(import.meta.dirname, "..");
const menuPath = path.join(ROOT, "src/data/menu.ts");
const menuTs = fs.readFileSync(menuPath, "utf8");

const hashFile = (filePath) =>
  crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");

const items = [
  ...menuTs.matchAll(
    /{\s*id: "(mp-[^"]+)"[\s\S]*?name: "([^"]+)"[\s\S]*?category: "([^"]+)"[\s\S]*?image: "([^"]+)"/g,
  ),
].map((m) => ({ id: m[1], name: m[2], category: m[3], image: m[4] }));

const missingFile = [];
const fallbackPath = [];
const genericPhoto = [];

const fallbackHash = fs.existsSync(path.join(ROOT, "public/menu/_fallback.jpg"))
  ? hashFile(path.join(ROOT, "public/menu/_fallback.jpg"))
  : null;

for (const item of items) {
  const filePath = path.join(ROOT, "public", item.image.replace(/^\//, ""));
  if (!fs.existsSync(filePath)) {
    missingFile.push(item);
    continue;
  }
  if (item.image.includes("_fallback")) {
    fallbackPath.push(item);
    continue;
  }
  if (fallbackHash && hashFile(filePath) === fallbackHash) {
    genericPhoto.push(item);
  }
}

console.log("Total menu items:", items.length);
console.log("Missing image files:", missingFile.length);
missingFile.forEach((x) => console.log(`- ${x.id} | ${x.name} | ${x.category} | ${x.image}`));

console.log("\nUsing fallback path:", fallbackPath.length);
fallbackPath.forEach((x) => console.log(`- ${x.id} | ${x.name}`));

console.log("\nGeneric photo (same as fallback/logo):", genericPhoto.length);
genericPhoto.forEach((x) => console.log(`- ${x.id} | ${x.name} | ${x.category}`));

const res = await fetch("https://cardapio.multipedidos.com.br/ontakesushi/cardapio.json");
const data = await res.json();
const remote = [];
function walk(o) {
  if (!o || typeof o !== "object") return;
  if (o.name && Array.isArray(o.products)) {
    for (const p of o.products) {
      remote.push({
        id: `mp-${p.id}`,
        name: p.name,
        category: o.name,
        hasImage: Boolean(p.image),
      });
    }
  }
  for (const v of Object.values(o)) {
    if (typeof v === "object") walk(v);
  }
}
walk(data.cardapio);

const localIds = new Set(items.map((i) => i.id.replace("mp-", "")));
const noRemoteImage = remote.filter((p) => localIds.has(p.id.replace("mp-", "")) && !p.hasImage);
console.log("\nNo image on delivery API:", noRemoteImage.length);
noRemoteImage.forEach((x) => console.log(`- ${x.id} | ${x.name} | ${x.category}`));
