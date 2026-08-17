import { useReducedMotion } from "framer-motion";
import { SITE } from "@/data/site";

type MarqueeItem = {
  label: string;
  highlight?: boolean;
  kanji?: string;
  accent?: boolean;
};

const ITEMS: MarqueeItem[] = [
  { label: SITE.name, kanji: "御岳", highlight: true },
  { label: SITE.tagline },
  { label: `Est. ${SITE.established}`, accent: true },
  { label: SITE.city, kanji: "岳" },
  { label: "Sushi Artesanal", kanji: "寿司" },
  { label: "Delivery Premium" },
  { label: "Ingredientes de Origem", kanji: "鮮" },
  { label: SITE.rating.label, accent: true },
];

function MarqueeTrack({ items }: { items: MarqueeItem[] }) {
  const reducedMotion = useReducedMotion();
  const loop = [...items, ...items];

  if (reducedMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-1" aria-hidden="true">
        {items.map((item) => (
          <MarqueeSegment key={item.label} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="marquee-track marquee-track--editorial" aria-hidden="true">
      {loop.map((item, i) => (
        <MarqueeSegment key={`${item.label}-${i}`} item={item} />
      ))}
    </div>
  );
}

function MarqueeSegment({ item }: { item: MarqueeItem }) {
  const { label, highlight, kanji, accent } = item;

  return (
    <span className="mx-5 inline-flex shrink-0 items-center gap-3 sm:mx-7 sm:gap-4 md:mx-10 md:gap-5">
      {kanji ? (
        <span className="grid h-8 w-8 place-items-center rounded-md border border-primary/20 bg-primary/5 font-jp text-sm text-primary md:h-9 md:w-9 md:text-base">
          {kanji}
        </span>
      ) : (
        <span className="h-4 w-px bg-primary/25" />
      )}
      <span
        className={`whitespace-nowrap font-display text-lg italic sm:text-xl md:text-3xl ${
          highlight ? "text-foreground" : accent ? "text-primary" : "text-foreground/60"
        }`}
      >
        {label}
      </span>
    </span>
  );
}

export function Marquee() {
  return (
    <section
      className="marquee-band group relative overflow-hidden border-y border-border bg-white"
      aria-label="Destaques Ontake Sushi"
    >
      <div className="marquee-mask relative py-5 md:py-7">
        <div className="overflow-hidden">
          <MarqueeTrack items={ITEMS} />
        </div>
      </div>
    </section>
  );
}
