import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { GallerySection, GallerySectionHeader } from "@/components/site/GallerySection";
import { WaveSection } from "@/components/site/WaveSection";
import { SITE, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import galeriaHero from "@/assets/gallery/galeria-hero.png";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    ...pageMeta({
      title: pageTitle("Galeria"),
      description: `Fotos dos pratos, combinados e ambiente do ${SITE.name} em ${SITE.city}.`,
      path: "/galeria",
    }),
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeria"
        image={galeriaHero}
        imageAlt={`Pratos e combinados do ${SITE.name}`}
        imagePosition="58% 42%"
        stamp="写"
        kanji="写"
        title={
          <>
            A cozinha
            <br />
            <span className="italic font-normal text-white/95">em cada foto</span>
            <span className="relative inline-block">
              .
              <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-primary" />
            </span>
          </>
        }
        subtitle="Combinados, hot rolls, sashimis e detalhes da experiência Ontake — no salão e no delivery."
      />

      <WaveSection>
        <div className="mx-auto max-w-7xl px-page">
          <div className="section-intro">
            <GallerySectionHeader />
          </div>
          <div className="section-header">
            <GallerySection />
          </div>
        </div>
      </WaveSection>
    </>
  );
}
