const res = await fetch("https://pedir.delivery/ontakesushi", {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  },
});
const html = await res.text();
console.log("html size", html.length);

const urls = new Set();
for (const match of html.matchAll(/https?:\/\/[^"'\\s<>]+/g)) urls.add(match[0]);
for (const match of html.matchAll(/\/api\/[^"'\\s<>]+/g)) urls.add(match[0]);

const interesting = [...urls].filter(
  (u) =>
    u.includes("cardapio") ||
    u.includes("multipedidos") ||
    u.includes("api") ||
    u.includes("image") ||
    u.includes(".json"),
);
console.log("interesting urls", interesting.slice(0, 40));

const nextData = html.match(/__NEXT_DATA__[^>]*>([\s\S]*?)<\/script>/);
if (nextData) console.log("next data snippet", nextData[1].slice(0, 500));

const inlineJson = [...html.matchAll(/cardapio\.json[^"'\\s]*/g)].map((m) => m[0]);
console.log("cardapio json refs", inlineJson);
