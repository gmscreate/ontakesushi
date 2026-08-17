import type { LucideIcon } from "lucide-react";
import { Leaf, Award, HeartHandshake, Truck } from "lucide-react";
import { Reveal, Stagger, StaggerItem, SectionEyebrow } from "@/components/site/Reveal";
import { WaveSection } from "@/components/site/WaveSection";
import { SITE } from "@/data/site";
import { cardGridItemStretch, cardGridStretch, cn } from "@/lib/utils";

type Differential = {
  icon: LucideIcon;
  kanji: string;
  watermark: string;
  title: string;
  desc: string;
  tag: string;
};

const ITEMS: Differential[] = [
  {
    icon: Leaf,
    kanji: "一",
    watermark: "鮮",
    title: "Ingredientes Frescos",
    desc: "Peixe selecionado diariamente e insumos importados curados para cada serviço.",
    tag: "Seleção diária",
  },
  {
    icon: Award,
    kanji: "二",
    watermark: "匠",
    title: "Qualidade Premium",
    desc: "Técnicas tradicionais e padrão rigoroso assinados pela família Ontake.",
    tag: "Padrão da casa",
  },
  {
    icon: HeartHandshake,
    kanji: "三",
    watermark: "心",
    title: "Atendimento Único",
    desc: "Cada mesa e cada pedido recebem cuidado individual, do primeiro ao último detalhe.",
    tag: "Hospitalidade",
  },
  {
    icon: Truck,
    kanji: "四",
    watermark: "届",
    title: "Delivery Elegante",
    desc: `Embalagens térmicas premium para preservar cada peça em ${SITE.deliveryArea}.`,
    tag: "Entrega cuidada",
  },
];

function DifferentialCard({ item, index }: { item: Differential; index: number }) {
  const Icon = item.icon;

  return (
    <article className="card-lux group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-700 sm:p-7 lg:p-6 xl:p-7">
      <span
        className="pointer-events-none absolute -right-1 -top-3 select-none font-jp leading-none text-primary/[0.06] transition-transform duration-700 group-hover:scale-110"
        style={{ fontSize: "4.5rem" }}
        aria-hidden="true"
      >
        {item.watermark}
      </span>

      <div className="relative flex items-center gap-3">
        <span className="font-jp text-2xl text-primary xl:text-3xl">{item.kanji}</span>
        <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-primary/50" />
        <span className="text-[10px] font-semibold tracking-[0.35em] text-muted-foreground">
          0{index + 1}
        </span>
      </div>

      <div className="relative mt-5 flex items-start justify-between gap-3 lg:mt-6">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 text-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_36px_-8px_var(--crimson)]">
          <Icon className="size-5" />
        </div>
        <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[8px] font-semibold tracking-[0.24em] text-primary uppercase xl:px-3 xl:text-[9px]">
          {item.tag}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-lg leading-tight transition-colors group-hover:text-primary lg:text-xl xl:mt-6">
        {item.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.desc}
      </p>

      <div className="relative mt-5 h-px w-10 bg-primary/80 transition-all duration-500 group-hover:w-full group-hover:bg-primary lg:mt-6" />
    </article>
  );
}

export function Differentials() {
  return (
    <WaveSection>
      <div className="mx-auto max-w-7xl px-page">
        <div className="grid section-intro lg:grid-cols-12 lg:items-end lg:gap-x-10 xl:gap-x-14">
          <div className="lg:col-span-5 xl:col-span-6">
            <Reveal>
              <SectionEyebrow>Nossos diferenciais</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                Um padrão que se sente
                <br />
                <span className="italic text-primary">em cada detalhe.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
            <p className="max-w-md text-base font-light leading-relaxed text-muted-foreground lg:max-w-none lg:text-lg xl:pb-1">
              Do grão de arroz à temperatura da água, cada elemento é curado para respeitar a
              herança japonesa e dialogar com o paladar de {SITE.city}.
            </p>
          </Reveal>
        </div>

        <Stagger
          className={cn(
            "section-header grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6",
            cardGridStretch,
          )}
        >
          {ITEMS.map((item, index) => (
            <StaggerItem key={item.title} className={cn("min-h-0", cardGridItemStretch)}>
              <DifferentialCard item={item} index={index} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </WaveSection>
  );
}
