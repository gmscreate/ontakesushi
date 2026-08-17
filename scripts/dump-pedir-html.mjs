import fs from "node:fs";

const res = await fetch("https://pedir.delivery/ontakesushi");
const html = await res.text();
fs.writeFileSync(".tmp-pedir.html", html);

const patterns = [
  "cardapio.multipedidos",
  "api.multipedidos",
  "images.multipedidos",
  "execute-api",
  "cardapio.json",
  "/products/",
  "/images/",
];

for (const p of patterns) {
  const idx = html.indexOf(p);
  if (idx >= 0) {
    console.log("\n===", p, "===");
    console.log(html.slice(Math.max(0, idx - 80), idx + 120));
  }
}
