import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem, SectionEyebrow } from "@/components/site/Reveal";
import { WaveSection } from "@/components/site/WaveSection";
import { MENU, type MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

const FEATURED_ORDER = [
  "mp-255994",
  "mp-261216",
  "mp-591419",
  "mp-256120",
  "mp-280430",
  "mp-256011",
  "mp-548677",
  "mp-1254746",
] as const;

const FEATURED = FEATURED_ORDER.map((id) => MENU.find((item) => item.id === id)).filter(
  (item): item is MenuItem => Boolean(item),
);

/** Bento 12 colunas — hero à esquerda, demais peças equilibradas */
const MOSAIC_LAYOUT = [
  "md:col-span-6 md:row-span-2",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
] as const;

function FeaturedPhoto({
  item,
  index,
  className,
  compact = false,
  hero = false,
}: {
  item: MenuItem;
  index: number;
  className?: string;
  compact?: boolean;
  hero?: boolean;
}) {
  return (
    <Link
      to="/cardapio"
      className={cn(
        "group relative block min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-[#141414]",
        "shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)] transition-all duration-500",
        "hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.95)]",
        className,
      )}
      aria-label={`Ver ${item.name} no cardápio`}
    >
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4 sm:p-5">
        <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[9px] font-semibold tracking-[0.24em] text-white/90 uppercase backdrop-blur-md">
          {item.category}
        </span>
        <span className="font-jp text-sm text-white/20">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              className={cn(
                "font-display leading-tight text-white",
                hero || compact
                  ? "line-clamp-2 text-xl sm:text-2xl"
                  : "line-clamp-2 text-base lg:text-lg",
              )}
            >
              {item.name}
            </h3>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_var(--crimson)] transition-transform duration-500 group-hover:scale-110">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedDishes() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const syncActiveSlide = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.clientWidth === 0) return;
    setActiveSlide(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  return (
    <WaveSection variant="dark-solid">
      <div className="mx-auto max-w-7xl px-page">
        <div className="section-intro flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow>Produtos em destaque</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-dark mt-6 text-white">
                Os favoritos
                <br />
                <span className="italic text-gradient-red">da casa Ontake.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/55 md:mx-0">
                Seleção dos pratos mais pedidos. Clique em qualquer um para ver no cardápio.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="shrink-0">
            <Button asChild variant="ghostLight" size="lg">
              <Link to="/cardapio">
                Ver cardápio completo <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="section-header mt-2 md:hidden">
          <div
            ref={scrollRef}
            onScroll={syncActiveSlide}
            className={cn(
              "-mx-6 flex snap-x snap-mandatory overflow-x-auto px-6 pb-2",
              "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            {FEATURED.map((item, index) => (
              <div key={item.id} className="min-w-[88%] shrink-0 snap-center pr-4 last:pr-0">
                <FeaturedPhoto
                  item={item}
                  index={index}
                  hero={index === 0}
                  compact
                  className="aspect-[4/5] w-full"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-1.5">
              {FEATURED.map((item, index) => (
                <span
                  key={item.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeSlide === index ? "w-6 bg-primary" : "w-1.5 bg-white/25",
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-[10px] tracking-[0.28em] text-white/35 uppercase">
              Deslize para ver mais
            </p>
          </div>
        </div>

        <Stagger className="section-header mt-2 hidden gap-4 md:grid md:grid-cols-12 md:auto-rows-[200px] md:gap-4 lg:auto-rows-[220px] lg:gap-5 xl:auto-rows-[240px]">
          {FEATURED.map((item, index) => (
            <StaggerItem key={item.id} className={cn("min-h-0", MOSAIC_LAYOUT[index])}>
              <FeaturedPhoto
                item={item}
                index={index}
                hero={index === 0}
                className="h-full min-h-[200px]"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </WaveSection>
  );
}
