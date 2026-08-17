const res = await fetch("https://cardapio.multipedidos.com.br/ontakesushi/cardapio.json");
const data = await res.json();
const cats = Object.values(data.cardapio.menu.general || {});

const profile =
  "https://images.multipedidos.com.br/profiles/51ccb312dd558d0d15824f4a49b0f5c76a7d5fb4860bac4bba5d93f37d511ed9.jpg";

async function check(url) {
  const r = await fetch(url, { method: "HEAD" });
  return r.status;
}

const noImg = [];
const shortImg = [];
for (const c of cats) {
  for (const p of c.products || []) {
    if (!p.available) continue;
    const hash = p.image;
    if (!hash || hash.length < 20) {
      noImg.push({
        id: p.id,
        cat: c.name,
        name: String(p.name)
          .replace(/<[^>]+>/g, "")
          .trim(),
        hash,
      });
    } else if (hash.length < 40) {
      shortImg.push({
        id: p.id,
        name: String(p.name)
          .replace(/<[^>]+>/g, "")
          .trim(),
        hash,
      });
    }
  }
}

console.log("no image hash:", noImg.length);
console.log("short hash:", shortImg.length, shortImg.slice(0, 5));

// test sample URLs
const tests = [
  profile,
  "https://images.multipedidos.com.br/products/595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e.jpg",
  "https://images.multipedidos.com.br/products/hKpIkw60ytdbmjPk76z5.jpg",
  "https://images.multipedidos.com.br/products/JIdgM0e6EyWLBMZSUiVN9ARxt1dSFuejkG75IoYsOKvA31DzpTvwylmtFQ4bHZns.jpg",
];
for (const url of tests) console.log(url, await check(url));

// category order from delivery
console.log("\nDelivery category order:");
for (const c of cats) {
  const avail = (c.products || []).filter((p) => p.available).length;
  if (avail) console.log(`${c.name} (${avail}) order:${c.order ?? c.position ?? "?"}`);
}
