const hashes = [
  "MC6xgQ6bSJXYp7sdlnx2TDEy5GbzhecGIjLmOKUhuVsuBFXZk3acRRSt4zMygwZr",
  "595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e",
];

const bases = [
  "https://images.multipedidos.com.br/products/",
  "https://cdn.multipedidos.com.br/products/",
  "https://cardapio.multipedidos.com.br/storage/products/",
];

for (const base of bases) {
  for (const hash of hashes) {
    for (const ext of [".jpg", ".jpeg", ".webp", ""]) {
      const url = `${base}${hash}${ext}`;
      const r = await fetch(url, {
        headers: {
          Referer: "https://cardapio.multipedidos.com.br/ontakesushi",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
      });
      const ct = r.headers.get("content-type") || "";
      if (r.status === 200 && ct.includes("image")) {
        console.log("OK", url, ct);
      }
    }
  }
}

// Try cardapio image endpoint patterns from network
const endpoints = [
  "https://cardapio.multipedidos.com.br/api/products/1219343/image",
  "https://cardapio.multipedidos.com.br/ontakesushi/products/1219343/image",
  "https://api.pedir.delivery/ontakesushi/products/1219343/image",
  "https://pedir.delivery/api/ontakesushi/products/1219343/image",
];
for (const url of endpoints) {
  const r = await fetch(url);
  console.log(url, r.status, r.headers.get("content-type"));
}
