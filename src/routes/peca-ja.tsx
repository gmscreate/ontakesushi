import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  MapPin,
  CreditCard,
  Truck,
  ArrowRight,
  Phone,
  Navigation,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem, SectionEyebrow } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { OrderHeroPanel } from "@/components/site/OrderHeroPanel";
import { WaveSection } from "@/components/site/WaveSection";
import { SITE, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cn, cardGridItemStretch, cardGridStretch, darkSurfaceCard } from "@/lib/utils";
import pecaJaHero from "@/assets/peca-ja-hero.png";

export const Route = createFileRoute("/peca-ja")({
  head: () =>
    pageMeta({
      title: pageTitle("Peça Já"),
      description: `Peça agora ${SITE.name}. WhatsApp, delivery online e retirada no salão em ${SITE.city}.`,
      path: "/peca-ja",
    }),
  component: PecaJaPage,
});

type InfoItem = {
  icon: LucideIcon;
  kanji: string;
  watermark: string;
  title: string;
  desc: string;
  tag: string;
};

const INFO_ITEMS: InfoItem[] = [
  {
    icon: Clock,
    kanji: "時",
    watermark: "時",
    title: "Horário",
    desc: `${SITE.hours.dinner}\n${SITE.hours.lunch}`,
    tag: "Funcionamento",
  },
  {
    icon: MapPin,
    kanji: "域",
    watermark: "届",
    title: "Área de entrega",
    desc: `Entregamos com embalagem térmica em ${SITE.deliveryArea}. Confirme taxa e prazo pelo WhatsApp antes de finalizar.`,
    tag: "Cobertura",
  },
  {
    icon: CreditCard,
    kanji: "払",
    watermark: "信",
    title: "Pagamento",
    desc: SITE.payment.summary,
    tag: "Formas aceitas",
  },
  {
    icon: Truck,
    kanji: "配",
    watermark: "届",
    title: "Entrega Premium",
    desc: `Embalagem térmica, montagem cuidadosa e prazo de ${SITE.deliveryTime} até a sua porta.`,
    tag: "Entrega cuidada",
  },
];

function InfoCard({ item, index }: { item: InfoItem; index: number }) {
  const Icon = item.icon;

  return (
    <article className="card-lux group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 md:p-8">
      <span
        className="pointer-events-none absolute -right-1 -top-3 select-none font-jp leading-none text-primary/[0.07] transition-transform duration-700 group-hover:scale-110"
        style={{ fontSize: "4.5rem" }}
        aria-hidden="true"
      >
        {item.watermark}
      </span>

      <div className="relative flex items-center gap-3">
        <span className="font-jp text-2xl text-primary">{item.kanji}</span>
        <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-primary/50" />
        <span className="text-[10px] font-semibold tracking-[0.32em] text-muted-foreground">
          0{index + 1}
        </span>
      </div>

      <div className="relative mt-6 flex items-start justify-between gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 text-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_36px_-8px_var(--crimson)]">
          <Icon className="size-5" />
        </div>
        <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-semibold tracking-[0.26em] text-primary uppercase">
          {item.tag}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-xl leading-tight transition-colors group-hover:text-primary md:text-2xl">
        {item.title}
      </h3>
      <p className="relative mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
        {item.desc}
      </p>

      <div className="relative mt-6 h-px w-10 bg-primary/80 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />
    </article>
  );
}

function PecaJaPage() {
  return (
    <>
      <PageHero
        eyebrow="Peça agora"
        image={pecaJaHero}
        imageAlt={`Peça agora ${SITE.name}`}
        imagePosition="center 45%"
        stamp="注文"
        kanji="注"
        actionsFirst
        title={
          <>
            Sua experiência
            <br />
            <span className="italic font-normal text-white/95">a um clique</span>
            <span className="relative inline-block">
              .
              <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-primary" />
            </span>
          </>
        }
        subtitle="Escolha WhatsApp ou cardápio online. Preparamos cada pedido com o cuidado da casa, da montagem à entrega. Monte Carmelo e região, ou retirada no salão."
      >
        <OrderHeroPanel />
      </PageHero>

      {/* Info blocks */}
      <WaveSection>
        <div className="mx-auto max-w-7xl px-page">
          <Reveal className="section-intro text-center md:text-left">
            <SectionEyebrow>Informações do pedido</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl leading-[1.05] sm:text-4xl">
              Tudo o que você precisa
              <br />
              <span className="italic text-primary">antes de pedir.</span>
            </h2>
          </Reveal>

          <Stagger
            className={cn(
              "section-header grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
              cardGridStretch,
            )}
          >
            {INFO_ITEMS.map((item, index) => (
              <StaggerItem key={item.title} className={cardGridItemStretch}>
                <InfoCard item={item} index={index} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </WaveSection>

      {/* Cardápio quick access */}
      <section className="relative overflow-hidden section-sm">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={pecaJaHero}
            alt=""
            className="h-full w-full object-cover opacity-[0.08]"
            loading="lazy"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-background/95 to-muted/50" />
        <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-45" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-page">
          <Reveal>
            <Card className="card-lux flex flex-col items-center gap-8 p-10 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
                  Cardápio
                </div>
                <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                  Explore a carta
                  <br />
                  <span className="italic text-primary">completa</span> da casa.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Combinados, temakis, sashimis, pokés e mais. Filtre por categoria e envie direto
                  pelo WhatsApp.
                </p>
              </div>
              <Button asChild variant="premium" size="xl">
                <Link to="/cardapio">
                  Ver cardápio <ArrowRight />
                </Link>
              </Button>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Localização */}
      <WaveSection
        variant="dark-solid"
        className="text-white"
        background={
          <>
            <div className="pointer-events-none absolute inset-0 z-0 bg-noise" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-radial-crimson opacity-35" />
          </>
        }
        contentClassName="z-10 mx-auto grid max-w-7xl section-split px-page md:grid-cols-[1fr_1.4fr] md:items-center"
      >
        <Reveal className="text-center md:text-left">
          <SectionEyebrow>Localização</SectionEyebrow>
          <h2 className="heading-dark mt-6 text-white sm:text-5xl">
            Visite a <span className="italic text-gradient-red">casa Ontake</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60 md:mx-0">
            Retire no salão ou combine seu pedido com uma visita à casa em {SITE.city}.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              { icon: MapPin, label: "Endereço", value: SITE.address.full },
              {
                icon: Clock,
                label: "Horário",
                value: `${SITE.hours.dinner}\n${SITE.hours.lunch}`,
              },
              { icon: Phone, label: "Contato", value: SITE.phone, href: SITE.phoneUrl },
            ].map((row) => (
              <div
                key={row.label}
                className={cn(darkSurfaceCard, "flex items-start gap-4 rounded-2xl p-5 text-left")}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                  <row.icon className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold tracking-[0.28em] text-primary uppercase">
                    {row.label}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-sm leading-relaxed text-white/75">
                    {"href" in row && row.href ? (
                      <a href={row.href} className="transition-colors hover:text-white">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 flex w-full flex-nowrap items-center justify-center gap-3 sm:gap-4 [&_a]:whitespace-nowrap">
            <Button asChild variant="hero" size="lg">
              <a href={SITE.address.directionsUrl} target="_blank" rel="noreferrer">
                <Navigation /> Como chegar
              </a>
            </Button>
            <Button asChild variant="ghostLight" size="lg">
              <a href={SITE.whatsappOrderUrl} target="_blank" rel="noreferrer">
                <MessageCircle /> Pedir e retirar
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-elevated">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <iframe
              title={`Mapa ${SITE.name}`}
              src={SITE.address.embedUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0 block grayscale-[0.15] contrast-[1.05]"
            />
            <div className="absolute bottom-4 left-4 z-20 rounded-full border border-white/15 bg-ink/75 px-4 py-2 text-[10px] tracking-[0.28em] text-white/80 uppercase backdrop-blur-md">
              {SITE.locationLabel}
            </div>
          </div>
        </Reveal>
      </WaveSection>

      {/* CTA */}
      <WaveSection>
        <div className="mx-auto max-w-4xl px-page text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.4em] text-primary uppercase">
              <span className="h-px w-10 bg-primary" />
              Último passo
              <span className="h-px w-10 bg-primary" />
            </div>
            <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Pronto para <span className="italic text-primary">provar</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-light leading-relaxed text-muted-foreground">
              Nossa equipe está online agora, pronta para receber seu pedido.
            </p>
            <div className="mt-10">
              <Button asChild variant="hero" size="xl">
                <a href={SITE.whatsappOrderUrl} target="_blank" rel="noreferrer">
                  <MessageCircle /> Iniciar pedido
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </WaveSection>
    </>
  );
}
