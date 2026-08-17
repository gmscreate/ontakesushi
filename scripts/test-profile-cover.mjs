const profile = "51ccb312dd558d0d15824f4a49b0f5c76a7d5fb4860bac4bba5d93f37d511ed9";
const cover = "90023adfa75bbffa8f902638f0df26cf89ee3ebfdb36b546e8feb7527b3224c6";
const urls = [
  `https://images.multipedidos.com.br/profiles/${profile}.jpg`,
  `https://images.multipedidos.com.br/covers/${cover}.jpg`,
  `https://images.multipedidos.com.br/covers/${cover}/lg_${cover}.jpg`,
];

for (const url of urls) {
  const r = await fetch(url);
  const buf = Buffer.from(await r.arrayBuffer());
  console.log(r.status, buf.length, buf.slice(0, 4).toString("hex"), url);
}
