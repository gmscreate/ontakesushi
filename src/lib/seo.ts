import { SITE } from "@/data/site";

export const OG_IMAGE_PATH = "/og-image.png";

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = SITE.siteUrl.replace(/\/$/, "");
  return base ? `${base}${normalized}` : normalized;
}

export function pageMeta({
  title,
  description,
  path,
  ogImage = OG_IMAGE_PATH,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(ogImage);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
