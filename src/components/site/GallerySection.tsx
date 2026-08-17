import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/site/Lightbox";
import { Reveal, Stagger, StaggerItem, SectionEyebrow } from "@/components/site/Reveal";
import { GALLERY_PHOTOS, GALLERY_PREVIEW_COUNT } from "@/data/gallery";
import { cn } from "@/lib/utils";

/** Mosaico editorial — 6 fotos na preview (12 colunas) */
const PREVIEW_LAYOUT = [
  "md:col-span-8 md:row-span-2",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
] as const;

type GallerySectionProps = {
  preview?: boolean;
  dark?: boolean;
  showCta?: boolean;
  className?: string;
};

function GalleryTile({
  photo,
  dark,
  onOpen,
  className,
}: {
  photo: { src: string; label: string };
  dark?: boolean;
  onOpen: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl border text-left transition-all duration-500",
        "aspect-[4/5] sm:aspect-[5/6]",
        dark
          ? "border-white/10 hover:border-primary/35"
          : "border-border/60 hover:border-primary/30",
        className,
      )}
      aria-label={`Ampliar foto: ${photo.label}`}
    >
      <img
        src={photo.src}
        alt={photo.label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute right-4 bottom-4 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/40 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:border-primary/40 group-hover:text-primary">
        <ZoomIn className="size-3.5" />
      </span>
    </button>
  );
}

export function GallerySection({
  preview = false,
  dark = false,
  showCta = false,
  className,
}: GallerySectionProps) {
  const photos = preview ? GALLERY_PHOTOS.slice(0, GALLERY_PREVIEW_COUNT) : GALLERY_PHOTOS;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Stagger
        className={cn(
          preview
            ? "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-12 md:grid-rows-[220px_220px_200px] md:gap-4 lg:grid-rows-[240px_240px_220px]"
            : "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5",
          className,
        )}
      >
        {photos.map((photo, index) => (
          <StaggerItem
            key={photo.label}
            className={cn("min-h-0", preview ? (PREVIEW_LAYOUT[index] ?? "md:col-span-4") : "")}
          >
            <GalleryTile
              photo={photo}
              dark={dark}
              onOpen={() => setLightboxIndex(index)}
              className={cn(
                preview && index === 0 && "md:aspect-auto md:h-full md:min-h-0",
                preview && index > 0 && "md:aspect-auto md:h-full",
              )}
            />
          </StaggerItem>
        ))}
      </Stagger>

      {showCta && preview && (
        <Reveal delay={0.12} className="mt-8 flex justify-center">
          <Button asChild variant={dark ? "ghostLight" : "premium"} size="lg">
            <Link to="/galeria">
              Ver galeria completa <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      )}

      <Lightbox
        images={photos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndex={setLightboxIndex}
      />
    </>
  );
}

export function GallerySectionHeader({
  dark = false,
  preview = false,
}: {
  dark?: boolean;
  preview?: boolean;
}) {
  return (
    <div className="text-center md:text-left">
      <Reveal>
        <SectionEyebrow>{preview ? "Galeria" : "Momentos Ontake"}</SectionEyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl",
            dark && "heading-dark text-white",
          )}
        >
          {preview ? (
            <>
              Sabores e detalhes
              <br />
              <span className={dark ? "italic text-gradient-red" : "italic text-primary"}>
                da nossa cozinha.
              </span>
            </>
          ) : (
            <>
              A casa em imagens
              <br />
              <span className={dark ? "italic text-gradient-red" : "italic text-primary"}>
                e em cada prato.
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {!preview && (
        <Reveal delay={0.08}>
          <p
            className={cn(
              "mx-auto mt-5 max-w-2xl text-base leading-relaxed md:mx-0 lg:text-lg",
              dark ? "text-white/60" : "text-muted-foreground",
            )}
          >
            Uma seleção de fotos dos pratos, combinados e bastidores do Ontake Sushi em Monte
            Carmelo.
          </p>
        </Reveal>
      )}
    </div>
  );
}
