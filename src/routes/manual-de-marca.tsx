import { createFileRoute } from "@tanstack/react-router";
import { BrandManual } from "@/components/site/BrandManual";
import { SITE, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/manual-de-marca")({
  head: () => {
    const seo = pageMeta({
      title: pageTitle("Manual de Marca"),
      description: `Manual de marca do ${SITE.name}: logotipo, paleta, tipografia, sistema gráfico e aplicações em embalagens.`,
      path: "/manual-de-marca",
    });
    return {
      ...seo,
      meta: [...seo.meta, { name: "robots", content: "noindex, nofollow" }],
    };
  },
  component: BrandManual,
});
