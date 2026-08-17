import { createFileRoute, Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Heart,
  Leaf,
  Target,
  Eye,
  Compass,
  ArrowRight,
  MessageCircle,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem, SectionEyebrow } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { SITE, FOUNDERS, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cardGridItemStretch, cardGridStretch, cn, darkSurfaceCard } from "@/lib/utils";

import founders from "@/assets/founders.png";

import sobreHero from "@/assets/sobre-hero.png";
import interior from "@/assets/interior.jpg";
import { GallerySection, GallerySectionHeader } from "@/components/site/GallerySection";
import { WaveSection } from "@/components/site/WaveSection";

type ValueCard = {
  icon: LucideIcon;
  kanji: string;
  watermark: string;
  title: string;
  desc: string;
  tag: string;
};

const PHILOSOPHY: ValueCard[] = [
  {
    icon: Heart,
    kanji: "心",
    watermark: "道",
    title: "Nossa Filosofia",
    tag: "Essência",
    desc: "Servir com verdade. Cada visita é única e merece ser tratada como tal, do salão ao delivery.",
  },
  {
    icon: Award,
    kanji: "匠",
    watermark: "質",
    title: "Nossa Qualidade",
    tag: "Padrão Ontake",
    desc: "Seleção rigorosa e preparo artesanal. Nada sai da cozinha sem o cuidado da família Ontake.",
  },
  {
    icon: Leaf,
    kanji: "鮮",
    watermark: "源",
    title: "Ingredientes",
    tag: "Origem",
    desc: "Peixe fresco de parceiros de confiança, arroz japonês, wasabi verdadeiro e importados selecionados.",
  },
];

const MVV: ValueCard[] = [
  {
    icon: Target,
    kanji: "使",
    watermark: "命",
    title: "Missão",
    tag: "Propósito",
    desc: "Oferecer uma experiência japonesa memorável em cada mesa, do primeiro ao último detalhe.",
  },
  {
    icon: Eye,
    kanji: "望",
    watermark: "光",
    title: "Visão",
    tag: "Futuro",
    desc: `Ser referência em gastronomia japonesa contemporânea em ${SITE.city} e região.`,
  },
  {
    icon: Compass,
    kanji: "値",
    watermark: "信",
    title: "Valores",
    tag: "Princípios",
    desc: "Tradição, excelência, respeito, hospitalidade e paixão pela cozinha.",
  },
];

function DarkValueCard({ item, index }: { item: ValueCard; index: number }) {
  return <LightValueCard item={item} index={index} tone="dark" />;
}

function LightValueCard({
  item,
  index,
  className,
  tone = "light",
}: {
  item: ValueCard;
  index: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  const Icon = item.icon;
  const dark = tone === "dark";

  return (
    <article
      className={cn(
        "card-premium group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 md:p-9",
        dark && darkSurfaceCard,
        className,
      )}
    >
      <span
        className="pointer-events-none absolute -right-2 -top-4 select-none font-jp leading-none text-primary/[0.06] transition-transform duration-700 group-hover:scale-110"
        style={{ fontSize: "5rem" }}
        aria-hidden="true"
      >
        {item.watermark}
      </span>

      <div className="relative flex items-center gap-4">
        <span className="font-jp text-3xl text-primary">{item.kanji}</span>
        <span
          className={cn(
            "h-px flex-1 transition-colors duration-500 group-hover:bg-primary/50",
            dark ? "bg-white/10" : "bg-border",
          )}
        />
        <span
          className={cn(
            "text-[10px] font-semibold tracking-[0.35em]",
            dark ? "text-white/40" : "text-muted-foreground",
          )}
        >
          0{index + 1}
        </span>
      </div>

      <div className="relative mt-8 flex items-start justify-between gap-4">
        <div
          className={cn(
            "grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-primary transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-[0_0_36px_-8px_var(--crimson)]",
            dark
              ? "border border-white/10 bg-white/[0.04] group-hover:bg-primary/10"
              : "border border-black/[0.08] bg-gradient-to-br from-neutral-50 to-neutral-100/90 group-hover:bg-primary/[0.06]",
          )}
        >
          <Icon className="size-6" />
        </div>
        <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-semibold tracking-[0.28em] text-primary uppercase">
          {item.tag}
        </span>
      </div>

      <h3
        className={cn(
          "relative mt-8 font-display text-2xl leading-tight transition-colors group-hover:text-primary",
          dark && "text-white",
        )}
      >
        {item.title}
      </h3>
      <p
        className={cn(
          "relative mt-4 flex-1 text-sm leading-relaxed",
          dark ? "text-white/60" : "text-muted-foreground",
        )}
      >
        {item.desc}
      </p>

      <div className="relative mt-8 h-px w-12 bg-primary/80 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />
    </article>
  );
}

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageMeta({
      title: pageTitle("Sobre"),
      description: `Conheça a história, filosofia e a família por trás do ${SITE.name} em ${SITE.city}.`,
      path: "/sobre",
    }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow={`Nossa casa · Est. ${SITE.established}`}
        image={sobreHero}
        imageAlt={`Pratos ${SITE.name}`}
        imagePosition="center"
        stamp="家"
        kanji="家"
        title={
          <>
            Tradição
            <br />
            <span className="italic font-normal text-white/95">em movimento</span>
            <span className="relative inline-block">
              .
              <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-primary" />
            </span>
          </>
        }
        subtitle="A história de uma casa familiar que carrega a técnica milenar japonesa com o afeto brasileiro."
      />

      <WaveSection
        variant="dark-solid"
        className="text-white"
        background={
          <>
            <img
              src={interior}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
          </>
        }
      >
        <div className="mx-auto max-w-7xl px-page">
          <div className="text-center">
            <Reveal>
              <SectionEyebrow>Os fundadores</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-dark mt-6 text-white">
                A família por trás
                <br />
                <span className="italic text-gradient-red">de cada peça</span>.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="section-header">
            <article
              className={cn(
                darkSurfaceCard,
                "mx-auto max-w-5xl overflow-hidden rounded-2xl hover:translate-y-0 sm:rounded-3xl",
              )}
            >
              <div className="grid md:grid-cols-2 md:items-stretch">
                <figure className="relative aspect-[5/6] w-full overflow-hidden bg-black sm:aspect-[4/5] md:aspect-auto md:h-full md:min-h-[22rem] lg:min-h-[26rem]">
                  <img
                    src={founders}
                    alt={`${FOUNDERS.names}, fundadores do ${SITE.name}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-[center_12%]"
                  />
                </figure>
                <div className="flex min-w-0 flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
                  <div className="font-jp text-xl text-primary sm:text-2xl">御</div>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-white sm:mt-4 sm:text-3xl md:text-4xl">
                    {FOUNDERS.names}
                  </h3>
                  <div className="mt-2 text-[10px] font-semibold tracking-[0.28em] text-primary uppercase sm:mt-3 sm:tracking-[0.3em]">
                    {FOUNDERS.role}
                  </div>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-white/60 sm:mt-6 sm:space-y-4 md:text-base">
                    {FOUNDERS.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </WaveSection>

      <WaveSection variant="dark" className="text-white">
        <div className="mx-auto max-w-7xl px-page">
          <div className="grid section-intro md:grid-cols-12 md:items-end">
            <div className="text-center md:col-span-5 md:text-left">
              <Reveal>
                <SectionEyebrow>O que nos guia</SectionEyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="heading-dark mt-6 text-white">
                  Filosofia
                  <br />
                  <span className="italic text-gradient-red">da casa.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
              <p className="mx-auto max-w-md text-center text-sm leading-relaxed text-white/55 md:mx-0 md:text-left md:text-base">
                Três pilares que orientam cada prato, cada atendimento e cada detalhe da experiência
                Ontake em {SITE.city}.
              </p>
            </Reveal>
          </div>

          <Stagger
            className={cn("section-header grid gap-6 md:grid-cols-3 lg:gap-8", cardGridStretch)}
          >
            {PHILOSOPHY.map((item, index) => (
              <StaggerItem key={item.title} className={cardGridItemStretch}>
                <DarkValueCard item={item} index={index} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </WaveSection>

      <WaveSection>
        <div className="mx-auto max-w-7xl px-page">
          <div className="text-center">
            <Reveal>
              <SectionEyebrow>Missão, visão e valores</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">
                O que nos move
                <br />
                <span className="italic text-primary">todos os dias.</span>
              </h2>
            </Reveal>
          </div>

          <Stagger
            className={cn("section-header grid gap-6 md:grid-cols-3 lg:gap-8", cardGridStretch)}
          >
            {MVV.map((item, index) => (
              <StaggerItem key={item.title} className={cardGridItemStretch}>
                <LightValueCard item={item} index={index} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </WaveSection>

      <WaveSection variant="dark" className="text-white">
        <div className="mx-auto max-w-7xl px-page">
          <div className="section-intro text-center md:text-left">
            <GallerySectionHeader preview dark />
          </div>

          <div className="section-header">
            <GallerySection preview dark showCta />
          </div>
        </div>
      </WaveSection>

      <WaveSection size="lg">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span
            className="font-jp leading-none text-foreground/[0.03]"
            style={{ fontSize: "min(40vw, 24rem)" }}
            aria-hidden="true"
          >
            家
          </span>
        </div>

        <div className="mx-auto max-w-4xl px-page text-center">
          <Reveal>
            <SectionEyebrow>Visite a casa</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="mt-8 inline-block font-jp text-4xl text-primary sm:text-5xl">
              御岳
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Venha viver a experiência
              <br />
              <span className="italic text-primary">Ontake</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              Conheça nossa história no salão, explore o cardápio ou peça agora. A casa em{" "}
              {SITE.city} está pronta para recebê-lo.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <a href={SITE.whatsappOrderUrl} target="_blank" rel="noreferrer">
                  <MessageCircle /> Peça no WhatsApp
                </a>
              </Button>
              <Button asChild variant="redOutline" size="xl">
                <Link to="/cardapio">
                  Ver cardápio <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="redOutline" size="xl">
                <Link to="/peca-ja">Peça já</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  label: "Onde estamos",
                  value: SITE.address.full,
                  href: SITE.address.directionsUrl,
                },
                {
                  icon: Moon,
                  label: "Jantar",
                  value: SITE.hours.dinner,
                },
                {
                  icon: Sun,
                  label: "Almoço",
                  value: SITE.hours.lunch,
                },
              ].map((row) => {
                const Icon = row.icon;
                const inner = (
                  <>
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-[9px] font-semibold tracking-[0.26em] text-primary uppercase">
                        {row.label}
                      </span>
                    </div>
                    <p className="mt-3 text-left text-sm leading-relaxed text-muted-foreground">
                      {row.value}
                    </p>
                  </>
                );

                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-border/70 bg-card/60 p-4 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/25"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={row.label}
                    className="group rounded-2xl border border-border/70 bg-card/60 p-4 text-left backdrop-blur-sm transition-all duration-500 hover:border-primary/25"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-[10px] tracking-[0.28em] text-muted-foreground/70 uppercase">
              {SITE.locationLabel} · {SITE.payment.short}
            </p>
          </Reveal>
        </div>
      </WaveSection>
    </>
  );
}
