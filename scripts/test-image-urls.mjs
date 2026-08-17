const urls = [
  "https://cardapio.multipedidos.com.br/images/products/595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e.jpg",
  "https://cardapio.multipedidos.com.br/ontakesushi/image/595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e",
  "https://api.multipedidos.com.br/images/products/595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e.jpg",
  "https://images.multipedidos.com.br/products/595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e",
  "https://images.multipedidos.com.br/products/595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e.webp",
  "https://images.multipedidos.com.br/profiles/51ccb312dd558d0d15824f4a49b0f5c76a7d5fb4860bac4bba5d93f37d511ed9.jpg",
];

for (const url of urls) {
  try {
    const r = await fetch(url, {
      headers: {
        Referer: "https://pedir.delivery/ontakesushi",
        Origin: "https://pedir.delivery",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      },
    });
    const buf = Buffer.from(await r.arrayBuffer());
    console.log(
      r.status,
      r.headers.get("content-type"),
      buf.length,
      buf.slice(0, 4).toString("hex"),
      url.split("/").slice(-2).join("/"),
    );
  } catch (e) {
    console.log("ERR", url, e.message);
  }
}
