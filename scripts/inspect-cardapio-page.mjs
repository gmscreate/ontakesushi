const pageRes = await fetch("https://cardapio.multipedidos.com.br/ontakesushi");
const html = await pageRes.text();
const cookie = pageRes.headers.getSetCookie?.()?.join("; ") ?? "";
console.log("cookie len", cookie.length);

const scriptMatches = [...html.matchAll(/src="([^"]+\.js)"/g)].map((m) => m[1]);
console.log("scripts", scriptMatches);

if (scriptMatches[0]) {
  const jsUrl = scriptMatches[0].startsWith("http")
    ? scriptMatches[0]
    : `https://cardapio.multipedidos.com.br${scriptMatches[0]}`;
  const js = await (await fetch(jsUrl)).text();
  const imagePatterns = [...js.matchAll(/images\.multipedidos[^"'`]{0,120}/g)]
    .map((m) => m[0])
    .slice(0, 20);
  console.log("image patterns in bundle", imagePatterns);
}

const hash = "595f5c6dd77fcdd9ceb1f4cc0662bec046be3ed345762425db5f7c30c8b8a62e";
const headers = {
  Referer: "https://cardapio.multipedidos.com.br/ontakesushi",
  Origin: "https://cardapio.multipedidos.com.br",
  Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
};
if (cookie) headers.Cookie = cookie;

const imageRes = await fetch(`https://images.multipedidos.com.br/products/${hash}.jpg`, {
  headers,
});
const buf = Buffer.from(await imageRes.arrayBuffer());
console.log(
  "image fetch",
  imageRes.status,
  imageRes.headers.get("content-type"),
  buf.length,
  buf.slice(0, 4).toString("hex"),
);
