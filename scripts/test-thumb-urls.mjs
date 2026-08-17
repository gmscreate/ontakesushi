const hash = "595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e";
const base = "https://images.multipedidos.com.br/products";
const urls = [
  `${base}/${hash}/thumb_${hash}.jpg`,
  `${base}/${hash}/lg_${hash}.jpg`,
  `${base}/${hash}/${hash}.jpg`,
  `${base}/${hash}.jpg`,
];

for (const url of urls) {
  const r = await fetch(url);
  const buf = Buffer.from(await r.arrayBuffer());
  console.log(
    r.status,
    r.headers.get("content-type"),
    buf.length,
    buf.slice(0, 4).toString("hex"),
    url,
  );
}
