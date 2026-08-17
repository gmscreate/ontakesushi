const jsUrl = "https://pedir.delivery/main.e1e2993dbb15a839.js?release=1786833409";
const js = await (await fetch(jsUrl)).text();
console.log("js size", js.length);

const needles = [
  "images.multipedidos",
  "products/",
  "profiles/",
  "getProductImage",
  "productImage",
  "imageUrl",
  "IMAGE",
];

for (const needle of needles) {
  let idx = 0;
  let count = 0;
  while ((idx = js.indexOf(needle, idx)) >= 0 && count < 3) {
    console.log("\n---", needle, count, "---");
    console.log(js.slice(Math.max(0, idx - 60), idx + 100));
    idx += needle.length;
    count++;
  }
}
