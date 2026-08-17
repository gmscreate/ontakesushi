const res = await fetch("https://pedir.delivery/ontakesushi");
const html = await res.text();
const imgs = [...html.matchAll(/https:\/\/images\.multipedidos\.com\.br\/[^"'\\s<>]+/g)].map(
  (m) => m[0],
);
console.log("html images unique", new Set(imgs).size);
for (const img of [...new Set(imgs)].slice(0, 30)) console.log(img);

const scriptUrls = [...html.matchAll(/https?:\/\/[^"'\\s]+\.js/g)].map((m) => m[0]);
console.log("\nscript urls", scriptUrls.slice(0, 10));

const jsonUrls = [...html.matchAll(/https?:\/\/[^"'\\s]+\.json/g)].map((m) => m[0]);
console.log("\njson urls", [...new Set(jsonUrls)]);
