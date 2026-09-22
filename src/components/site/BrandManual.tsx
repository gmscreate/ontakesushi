import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Award, Crown, Mountain, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import bagStudio from "@/assets/brand/bag-studio.png";
import restaurant from "@/assets/brand/restaurant.png";
import flatlay from "@/assets/brand/brand-flatlay.png";
import packagingHero from "@/assets/brand/packaging-hero.png";
import colorStudy from "@/assets/brand/color-study.png";

const INK = "#1A1A1A";
const RED = "#EC3237";
const GOLD = "#C9A227";
const KRAFT = "#C6956A";

const COLORS = [
  { name: "Preto", hex: INK, role: "Base / contraste", ink: "#FFFFFF" },
  { name: "Vermelho", hex: RED, role: "Assinatura do logotipo", ink: "#FFFFFF" },
  { name: "Branco", hex: "#FFFFFF", role: "Fundo / respiro", ink: INK, bordered: true },
  { name: "Champagne", hex: GOLD, role: "Detalhes / sofisticação", ink: INK },
  { name: "Kraft", hex: KRAFT, role: "Material / apoio", ink: INK },
] as const;

const PILLARS: {
  icon: LucideIcon;
  kanji: string;
  watermark: string;
  tag: string;
  title: string;
  text: string;
}[] = [
  {
    icon: Mountain,
    kanji: "伝",
    watermark: "山",
    tag: "Origem",
    title: "Tradição",
    text: "A montanha e o sol como origem da marca.",
  },
  {
    icon: Award,
    kanji: "質",
    watermark: "匠",
    tag: "Padrão",
    title: "Qualidade",
    text: "Ingrediente, preparo e acabamento no mesmo nível.",
  },
  {
    icon: Sparkles,
    kanji: "心",
    watermark: "味",
    tag: "Vivência",
    title: "Experiência",
    text: "Cada entrega continua a mesa da casa.",
  },
  {
    icon: Crown,
    kanji: "雅",
    watermark: "華",
    tag: "Acabamento",
    title: "Sofisticação",
    text: "Preto, vermelho, kraft e champagne em equilíbrio.",
  },
];

const RULES = [
  { title: "Logo", text: "Uso consistente e preservação da área de proteção." },
  { title: "Cores", text: "Preto, vermelho, branco, kraft e champagne como base." },
  { title: "Padrão", text: "Elementos gráficos minimalistas." },
  { title: "Fotografia", text: "Gastronomia premium, luz quente e composição sofisticada." },
  { title: "Embalagem", text: "Aplicação consistente em todos os pontos de contato." },
] as const;

const CHAPTERS = [
  { href: "#essencia", label: "Essência" },
  { href: "#logotipo", label: "Logotipo" },
  { href: "#cores", label: "Cores" },
  { href: "#tipografia", label: "Tipografia" },
  { href: "#sistema", label: "Sistema" },
  { href: "#embalagens", label: "Embalagens" },
  { href: "#aplicacoes", label: "Aplicações" },
  { href: "#sacola", label: "Sacola" },
] as const;

function Chapter({
  id,
  index,
  title,
  lede,
  tone = "light",
}: {
  id?: string;
  index: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <header id={id} className="scroll-mt-8 max-w-3xl">
      <div className="flex items-center gap-4 text-[11px] font-semibold tracking-[0.35em] text-primary uppercase">
        <span>{index}</span>
        <span className="h-px w-10 bg-primary sm:w-14" />
      </div>
      <h2
        className={cn(
          "mt-5 font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl xl:text-[3.5rem]",
          dark ? "text-white" : "text-[#1A1A1A]",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed",
            dark ? "text-white/65" : "text-[#1A1A1A]/65",
          )}
        >
          {lede}
        </p>
      ) : null}
    </header>
  );
}

function Shot({
  src,
  alt,
  caption,
  priority = false,
  tone = "light",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure className="min-w-0">
      <div
        className={cn(
          "overflow-hidden rounded-2xl",
          dark ? "border border-white/10 bg-black" : "border border-black/10 bg-[#F3EFE8]",
        )}
      >
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {caption ? (
        <figcaption
          className={cn(
            "mt-4 text-sm leading-relaxed",
            dark ? "text-white/60" : "text-[#1A1A1A]/60",
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Alphabet({ className }: { className?: string }) {
  const rows = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789"];
  return (
    <div className={cn("space-y-3", className)}>
      {rows.map((row) => (
        <p key={row} className="flex flex-wrap gap-x-[0.35em] gap-y-1">
          {row.split("").map((char, i) => (
            <span key={`${row}-${i}`}>{char}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

function ElementCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
      <div className="grid min-h-40 flex-1 place-items-center p-6 sm:min-h-48">{children}</div>
      <p className="border-t border-white/10 px-5 py-4 text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase">
        {label}
      </p>
    </article>
  );
}

export function BrandManual() {
  return (
    <div className="overflow-x-hidden bg-background text-[#1A1A1A]">
      <section className="dark relative h-[100svh] max-h-[100svh] min-h-[100svh] w-full overflow-hidden bg-black text-white xl:h-[1080px] xl:max-h-[min(100svh,1080px)] xl:min-h-[min(100svh,1080px)]">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none">
          <span
            className="font-jp leading-none text-white/[0.04]"
            style={{ fontSize: "min(48vw, 36rem)" }}
          >
            印
          </span>
        </div>

        <div className="absolute inset-y-0 right-0 z-10 h-full w-full md:w-[62%] xl:w-[58%]">
          <img
            src={packagingHero}
            alt="Família de embalagens Ontake Sushi: sacola kraft, caixas pretas, sleeve e envelope de hashis"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10 md:via-black/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-20" />
        </div>

        <div className="relative z-20 flex h-full w-full flex-col justify-center px-page py-8 sm:py-12 xl:py-16 [@media(max-height:760px)]:py-6">
          <div className="w-full max-w-xl md:max-w-[36%] xl:max-w-[40%]">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 shrink-0 bg-primary sm:w-14" />
              <p className="text-[10px] tracking-[0.28em] text-white/70 uppercase sm:tracking-[0.4em]">
                Manual de marca
              </p>
            </div>
            <h1 className="mt-5 sm:mt-8 [@media(max-height:760px)]:mt-4">
              <Logo imgClassName="h-20 w-auto max-w-full sm:h-28 md:h-40 xl:h-52 2xl:h-60 [@media(max-height:760px)]:h-16 [@media(max-height:760px)]:sm:h-24 [@media(max-height:760px)]:xl:h-36" />
            </h1>
            <p className="mt-5 max-w-full text-base leading-relaxed font-light text-white/70 sm:mt-8 sm:text-lg [@media(max-height:760px)]:mt-3">
              Identidade Visual &amp; Sistema de Marca
            </p>
            <nav
              aria-label="Seções do manual"
              className="mt-6 flex max-w-full flex-wrap gap-x-4 gap-y-2 sm:gap-x-5 sm:gap-y-3 xl:mt-10 [@media(max-height:760px)]:mt-4"
            >
              {CHAPTERS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[10px] font-semibold tracking-[0.22em] text-white/55 uppercase transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="essencia"
              index="02"
              title="A essência da Ontake"
              lede="Mais que sushi, uma experiência."
            />
          </Reveal>
          <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4 xl:gap-6">
            {PILLARS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05} className="h-full">
                  <article className="card-lux group relative flex h-full min-h-64 min-w-0 flex-col overflow-hidden rounded-3xl p-6 sm:p-8 xl:min-h-72">
                    <span
                      className="pointer-events-none absolute top-2 right-2 font-jp text-[4.25rem] leading-none text-primary/[0.07] transition-transform duration-700 select-none group-hover:scale-110 sm:text-[5.5rem]"
                      aria-hidden="true"
                    >
                      {item.watermark}
                    </span>

                    <div className="relative flex items-center gap-3">
                      <span className="font-jp text-2xl text-primary xl:text-3xl">
                        {item.kanji}
                      </span>
                      <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-primary/50" />
                      <span className="text-[10px] font-semibold tracking-[0.35em] text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>

                    <div className="relative mt-6 flex items-start justify-between gap-3">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 text-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_36px_-8px_var(--crimson)]">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-semibold tracking-[0.24em] text-primary uppercase">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="relative mt-6 font-display text-3xl leading-tight text-[#1A1A1A] transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                    <div className="relative mt-6 h-px w-10 bg-primary/80 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="logotipo"
              index="03"
              title="Logotipo"
              lede="O conjunto oficial une wordmark, sol vermelho e montanha. A proporção não se altera."
            />
          </Reveal>

          <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#1A1A1A] p-5 sm:p-8 xl:p-12">
                <p className="text-[10px] font-semibold tracking-[0.32em] text-primary uppercase">
                  Versão principal · fundo escuro
                </p>
                <div className="relative mt-6 border border-dashed border-primary/70 p-8 sm:p-14 xl:p-16">
                  <span className="absolute top-0 left-0 size-3 border-t border-l border-primary" />
                  <span className="absolute top-0 right-0 size-3 border-t border-r border-primary" />
                  <span className="absolute bottom-0 left-0 size-3 border-b border-l border-primary" />
                  <span className="absolute right-0 bottom-0 size-3 border-r border-b border-primary" />
                  <img
                    src={logo}
                    alt="Logotipo Ontake Sushi em branco sobre preto"
                    className="mx-auto block h-auto w-full max-w-md xl:max-w-lg"
                  />
                </div>
                <p className="mt-5 text-center text-[10px] tracking-[0.28em] text-white/45 uppercase">
                  Área de proteção
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <Shot
                src={bagStudio}
                alt="Logotipo em preto aplicado na sacola kraft"
                caption="Aplicação sobre fundo claro: wordmark preto no kraft, com sol e montanha preservados."
              />
              <ul className="space-y-4 rounded-2xl border border-black/10 bg-background p-6 text-sm leading-relaxed text-[#1A1A1A]/75 sm:p-8 xl:p-10">
                <li>Não distorcer, inclinar ou recolorir o conjunto.</li>
                <li>Manter respiro ao redor do logotipo, equivalente à margem tracejada.</li>
                <li>No preto, o wordmark permanece branco. No kraft, permanece preto.</li>
                <li>O símbolo — sol e montanha — não se separa do nome na versão principal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="cores"
              index="04"
              title="Paleta de cores"
              lede="Cinco cores. O vermelho é o do logotipo. O champagne entra apenas como destaque."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:mt-16 xl:grid-cols-5 xl:gap-5">
            {COLORS.map((color) => (
              <article
                key={color.hex}
                className={cn(
                  "flex min-h-56 flex-col justify-end rounded-2xl p-5 sm:min-h-64 sm:p-6",
                  "bordered" in color && color.bordered && "border border-black/10",
                )}
                style={{ background: color.hex, color: color.ink }}
              >
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase opacity-80 sm:tracking-[0.28em]">
                  {color.role}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-none xl:text-[clamp(1.35rem,1.5vw,1.75rem)]">
                  {color.name}
                </h3>
                <p className="mt-3 text-sm tracking-[0.18em]">{color.hex}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 lg:mt-14">
            <Shot
              src={colorStudy}
              alt="Estudo de cores de destaque do Ontake Sushi, com champagne, verde, bege, vinho e terracota"
              caption="Estudo de cor de destaque. A paleta oficial permanece enxuta: preto, vermelho, branco, kraft e champagne."
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="tipografia"
              index="05"
              title="Tipografia"
              lede="As mesmas famílias já usadas no site. Display para títulos, Inter para texto, Noto Serif JP como acento."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 xl:mt-16 xl:grid-cols-2 xl:gap-8">
            <article className="rounded-2xl border border-black/10 bg-background p-6 sm:p-10 xl:p-14">
              <p className="text-[10px] font-semibold tracking-[0.32em] text-primary uppercase">
                Display / headline
              </p>
              <p className="mt-2 text-sm text-[#1A1A1A]/55">Playfair Display</p>
              <p className="mt-8 font-display text-5xl leading-none text-[#1A1A1A] sm:text-6xl">
                Ontake
              </p>
              <Alphabet className="mt-8 font-display text-2xl text-[#1A1A1A] sm:text-3xl" />
            </article>
            <article className="rounded-2xl border border-black/10 bg-white p-6 sm:p-10 xl:p-14">
              <p className="text-[10px] font-semibold tracking-[0.32em] text-primary uppercase">
                Body / text
              </p>
              <p className="mt-2 text-sm text-[#1A1A1A]/55">Inter</p>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[#1A1A1A]/80">
                Mais que sushi, uma experiência. Uma identidade criada para cada detalhe da casa.
              </p>
              <Alphabet className="mt-8 text-xl text-[#1A1A1A] sm:text-2xl" />
              <div className="mt-10 border-t border-black/10 pt-6">
                <p className="text-[10px] font-semibold tracking-[0.32em] text-primary uppercase">
                  Acento
                </p>
                <p className="mt-2 text-sm text-[#1A1A1A]/55">Noto Serif JP</p>
                <p className="mt-4 font-jp text-4xl text-[#1A1A1A]">御岳</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark relative overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="sistema"
              index="06"
              title="Sistema gráfico"
              tone="dark"
              lede="Poucos elementos, sempre os mesmos: sol, montanha minimalista, linha champagne e o kraft como matéria."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mt-16">
            <ElementCard label="Sol">
              <span className="block size-24 rounded-full" style={{ background: RED }} />
            </ElementCard>
            <ElementCard label="Montanha">
              <svg
                viewBox="0 0 160 120"
                className="h-24 w-auto max-w-full sm:h-28"
                aria-hidden="true"
              >
                <circle cx="80" cy="72" r="34" fill={RED} />
                <path d="M16 108 L80 24 L144 108 Z" fill="#F4EFE6" />
                <path d="M80 40 L64 70 L80 60 L96 74 L80 40 Z" fill={INK} />
              </svg>
            </ElementCard>
            <ElementCard label="Linha champagne">
              <span className="block h-px w-32" style={{ background: GOLD }} />
            </ElementCard>
            <ElementCard label="Traço">
              <span
                className="block h-3 w-36"
                style={{
                  background: GOLD,
                  borderRadius: "40% 60% 55% 45%",
                  opacity: 0.9,
                }}
              />
            </ElementCard>
            <ElementCard label="Kraft">
              <span className="block h-20 w-28 rounded-xl" style={{ background: KRAFT }} />
            </ElementCard>
            <ElementCard label="Preto fosco">
              <span className="block h-20 w-28 rounded-xl border border-white/15 bg-[#0E0E0E]" />
            </ElementCard>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/50">
            O diagrama da montanha apenas nomeia o símbolo. A versão oficial é o logotipo completo,
            sem variação ilustrada.
          </p>
          <div className="mt-10">
            <Shot
              src={flatlay}
              alt="Sistema aplicado: sacola, caixa preta, sleeve kraft, adesivo e envelope de hashis"
              tone="dark"
              caption="Padrão de embalagem: bambu em champagne nas laterais pretas, sol e montanha no centro."
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="embalagens"
              index="07"
              title="Sistema de embalagens"
              lede="Uma família só: sacola kraft, caixas pretas, sleeve, adesivo, envelope de hashis e pote de shoyu."
            />
          </Reveal>
          <div className="mt-12 lg:mt-16">
            <Shot
              src={packagingHero}
              alt="Composição principal das embalagens Ontake sobre bancada de pedra"
              caption="Peça principal. Sacola, caixas e envelope no mesmo contraste de kraft, preto, vermelho e champagne."
            />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Shot
              src={flatlay}
              alt="Linha completa de embalagens em fundo claro"
              caption="Visão de conjunto: sacola, caixa, sleeve, adesivo e hashis."
            />
            <Shot
              src={restaurant}
              alt="Caixa preta aberta com sushi ao lado da sacola kraft"
              caption="A embalagem aberta, no ponto de consumo."
            />
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="aplicacoes"
              index="08"
              title="Aplicações da marca"
              lede="A identidade no estúdio e no salão. Mesma proporção, mesma paleta, materiais diferentes."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Shot
                src={bagStudio}
                alt="Sacola kraft em estúdio, com logotipo e lateral preta"
                caption="Estúdio. Frente da sacola e padrão lateral."
              />
            </div>
            <div className="lg:col-span-5">
              <Shot
                src={restaurant}
                alt="Embalagens Ontake em ambiente de restaurante"
                caption="Ambiente. Luz quente e a caixa aberta."
              />
            </div>
            <div className="lg:col-span-5">
              <Shot
                src={flatlay}
                alt="Detalhes de material, acabamento e símbolo em adesivo"
                caption="Detalhe. Materiais, acabamento e símbolo."
              />
            </div>
            <div className="lg:col-span-7">
              <Shot
                src={packagingHero}
                alt="Família de embalagens aplicada no balcão"
                caption="Delivery. Caixas, sleeve e envelope de hashis."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-7xl px-page">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <Chapter
                  id="sacola"
                  index="09"
                  title="Sacola kraft"
                  lede="Aplicação da identidade em papel kraft, combinando material natural, contraste e sofisticação."
                />
              </Reveal>
              <dl className="mt-10 space-y-5">
                {[
                  ["Frente", "Logotipo central, wordmark preto sobre o kraft."],
                  ["Lateral", "Painel preto com folhas de bambu em champagne."],
                  ["Símbolo", "Sol vermelho e montanha branca, sem alteração."],
                  ["Relação", "Kraft, preto, vermelho e dourado no mesmo objeto."],
                ].map(([term, detail]) => (
                  <div key={term} className="border-t border-black/10 pt-5">
                    <dt className="text-[10px] font-semibold tracking-[0.28em] text-primary uppercase">
                      {term}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-7">
              <Shot
                src={bagStudio}
                alt="Sacola kraft sem alças com o logotipo Ontake Sushi e lateral preta"
                caption="Sacola sem alças. A lateral preta carrega o bambu; a frente carrega o logotipo."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section dark relative overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl px-page">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <Chapter
                  id="premium"
                  index="10"
                  title="Embalagens premium"
                  tone="dark"
                  lede="Caixas pretas foscas, símbolo em vermelho e branco, bambu em champagne. O acabamento é parte da marca."
                />
              </Reveal>
              <ul className="mt-10 space-y-4 text-sm leading-relaxed text-white/65">
                <li className="flex gap-4">
                  <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                  Logo e símbolo aplicados sem contorno extra.
                </li>
                <li className="flex gap-4">
                  <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                  Vermelho reservado ao sol. Champagne reservado ao detalhe.
                </li>
                <li className="flex gap-4">
                  <span className="mt-2 h-px w-6 shrink-0 bg-primary" />O preto fosco é o campo. O
                  kraft aparece no sleeve e no envelope.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <Shot
                src={restaurant}
                alt="Caixa preta fosca aberta, com logotipo, bambu dourado e sushi"
                tone="dark"
                caption="Preto fosco, filete champagne e o símbolo na tampa e na lateral."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-page">
          <Reveal>
            <Chapter
              id="consistencia"
              index="11"
              title="Consistência visual"
              lede="Cinco regras para qualquer ponto de contato, do adesivo ao salão."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mt-16 xl:gap-5">
            {RULES.map((rule, i) => (
              <article
                key={rule.title}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-black/10 bg-background p-6 sm:p-8"
              >
                <span className="text-[10px] font-semibold tracking-[0.28em] text-primary uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-3xl leading-none text-[#1A1A1A]">
                  {rule.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/65">{rule.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark relative overflow-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-[0.12]" />
        <div className="relative mx-auto max-w-7xl px-page py-20 sm:py-28 xl:py-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-primary sm:w-14" />
              <p className="text-[10px] tracking-[0.35em] text-white/70 uppercase sm:tracking-[0.4em]">
                12 — Galeria
              </p>
            </div>
            <h2 className="mt-6 max-w-5xl font-display text-4xl leading-[0.95] text-white sm:mt-8 sm:text-6xl xl:text-7xl 2xl:text-[5.5rem]">
              Mais que sushi.
              <span className="mt-2 block italic">Uma experiência.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Uma identidade criada para transformar cada detalhe em parte da experiência Ontake.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <Shot
                src={packagingHero}
                alt="Composição final das embalagens Ontake Sushi"
                tone="dark"
              />
            </div>
            <div className="grid gap-6 lg:col-span-4">
              <Shot src={bagStudio} alt="Sacola kraft Ontake Sushi" tone="dark" />
              <Shot src={restaurant} alt="Caixa e sacola no salão Ontake" tone="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
