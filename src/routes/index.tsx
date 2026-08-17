import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf,
  Award,
  Star,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ArrowRight,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Stagger, StaggerItem, SectionEyebrow } from "@/components/site/Reveal";
import { WaveSection } from "@/components/site/WaveSection";
import { PageHero } from "@/components/site/PageHero";
import { PremiumCTA } from "@/components/site/PremiumCTA";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { Marquee } from "@/components/site/Marquee";
import { Differentials } from "@/components/site/Differentials";
import { FeaturedDishes } from "@/components/site/FeaturedDishes";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SITE, FAQ, pageTitle, yearsInBusiness } from "@/data/site";
import { pageMeta } from "@/lib/seo";

import hero from "@/assets/home-hero.png";
import story from "@/assets/story.jpg";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = pageMeta({
      title: pageTitle(`${SITE.tagline} em ${SITE.city}`),
      description: SITE.description,
      path: "/",
    });
    return {
      ...seo,
      meta: [...seo.meta, { property: "og:type", content: "website" }],
    };
  },
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <Differentials />
      <FeaturedDishes />
      <StorySection />
      <PremiumCTA
        eyebrow="Reserve seu momento"
        title={
          <>
            Uma mesa reservada. Uma <span className="italic text-primary">experiência</span>{" "}
            inesquecível.
          </>
        }
        subtitle="Peça agora pelo WhatsApp e receba a Ontake com toda a elegância da nossa casa."
        secondaryLabel="Ver cardápio"
        secondaryHref="/cardapio"
      />
      <Testimonials />
      <FAQSection />
      <MapSection />
      <FinalCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */
function HeroSection() {
  return (
    <PageHero
      eyebrow={`${SITE.locationLabel} · Est. ${SITE.established}`}
      image={hero}
      imageAlt={`${SITE.name} — sushi em ${SITE.city}`}
      imagePosition="center 40%"
      stamp="御岳"
      kanji="御"
      title={
        <>
          A arte
          <br />
          <span className="font-normal text-white/95 italic">do sushi</span>
          <br />
          <span className="relative inline-block">
            em cada peça.
            <span className="absolute -bottom-2 left-0 h-[3px] w-24 bg-primary" />
          </span>
        </>
      }
      subtitle={
        <>
          Ingredientes selecionados, técnica milenar e a acolhida de uma casa familiar em{" "}
          {SITE.city}. Bem-vindo ao {SITE.name}.
        </>
      }
      footer={
        <div className="mx-auto grid max-w-xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-3 lg:max-w-3xl">
          {[
            { icon: Star, label: SITE.rating.label, sub: "Clientes satisfeitos" },
            { icon: Award, label: "Família fundadora", sub: `${yearsInBusiness()}+ anos` },
            { icon: Leaf, label: "Ingredientes", sub: "seleção diária" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <s.icon className="size-4 shrink-0 text-primary" />
              <div>
                <div className="text-xs font-semibold tracking-wider text-white uppercase">
                  {s.label}
                </div>
                <div className="text-[11px] text-white/60">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}

/* ---------------- Featured Dishes (dark, editorial vitrines) ---------------- */
/* ---------------- Story (light, editorial with red hanko block) ---------------- */
function StorySection() {
  return (
    <WaveSection>
      <div className="mx-auto grid max-w-7xl section-split px-page md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={story}
                alt={`Fundadores ${SITE.name}`}
                loading="lazy"
                className="h-[620px] w-full object-cover"
              />
            </div>
            {/* Red hanko block overlapping */}
            <div className="absolute -bottom-8 -left-6 hidden bg-primary p-8 text-primary-foreground shadow-elevated md:block">
              <div className="font-jp text-3xl">御</div>
              <div className="mt-3 font-display text-lg italic">Desde {SITE.established}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase opacity-80">
                {yearsInBusiness()}+ anos
              </div>
            </div>
            {/* Hairline decorative frame */}
            <div
              className="pointer-events-none absolute -right-6 -top-6 hidden h-full w-full border border-border md:block"
              style={{ zIndex: -1 }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionEyebrow>Nossa história</SectionEyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.05] sm:text-5xl">
            Uma casa nascida do
            <br />
            <span className="italic text-primary">amor pela culinária japonesa.</span>
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground font-light">
            <p>
              O Ontake começou como sonho de uma família apaixonada pela precisão da culinária
              japonesa e pelo calor das mesas compartilhadas.
            </p>
            <p>
              Hoje somos referência em sushi em {SITE.city}, unindo tradição, técnica e a curadoria
              dos melhores ingredientes de cada estação.
            </p>
          </div>
          <div className="mt-12">
            <Button asChild variant="premium" size="lg">
              <Link to="/sobre">
                Conheça nossa história <ArrowRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </WaveSection>
  );
}

/* ---------------- Testimonials (light) ---------------- */
function Testimonials() {
  const reviews = [
    {
      name: "Filipe M.",
      role: "Cliente Ontake",
      date: "Google",
      text: "Atendimento impecável e comida deliciosa. Podem ir sem medo!",
    },
    {
      name: "Andressa M.",
      role: "Cliente Ontake",
      date: "Google",
      text: "Boa localização, atendimento bem atencioso, música no volume ambiente e agradável. Comida com qualidade e deliciosa!",
    },
    {
      name: "Giovana S. G.",
      role: "Cliente Ontake",
      date: "Google",
      text: "Muito bom! Atendimento bom, atenciosos e comida boa!",
    },
  ];

  return (
    <WaveSection>
      <div className="mx-auto max-w-7xl px-page">
        <div className="grid section-intro lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow>Avaliações</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[3.25rem]">
                O que dizem
                <br />
                <span className="italic text-primary">sobre a casa.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="section-header">
            <TestimonialsCarousel
              reviews={reviews}
              score={SITE.rating.score}
              scoreLabel={SITE.rating.reviews}
            />
          </div>
        </Reveal>
      </div>
    </WaveSection>
  );
}

/* ---------------- FAQ (dark) ---------------- */
function FAQSection() {
  return (
    <WaveSection variant="dark">
      <div className="mx-auto grid section-intro max-w-6xl px-page md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-dark mt-6 text-white sm:text-5xl">
              Tudo o que você
              <br />
              <span className="italic text-gradient-red">precisa saber.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/55">
              Não encontrou o que procurava? Fale com a gente pelo WhatsApp. Respondemos em minutos.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="md:col-span-7">
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-border border-y border-border"
          >
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-0 px-1">
                <AccordionTrigger className="py-6 text-left text-base font-medium hover:no-underline hover:text-primary">
                  <span className="flex items-center gap-5">
                    <span className="font-jp text-lg text-primary">
                      {["一", "二", "三", "四", "五"][i]}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-10 text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </WaveSection>
  );
}

/* ---------------- Map ---------------- */
function MapSection() {
  return (
    <WaveSection>
      <div className="mx-auto grid max-w-7xl section-split px-page md:grid-cols-[1fr_1.4fr] md:items-center">
        <Reveal>
          <SectionEyebrow>Visite a casa</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">
            Onde nos
            <br />
            <span className="italic text-primary">encontrar.</span>
          </h2>
          <ul className="mt-10 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />{" "}
              <div>
                <div className="font-medium">Endereço</div>
                <div className="text-muted-foreground">{SITE.address.full}</div>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" />{" "}
              <div>
                <div className="font-medium">Horário</div>
                <div className="text-muted-foreground">
                  {SITE.hours.dinner}
                  <br />
                  {SITE.hours.lunch}
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" />{" "}
              <div>
                <div className="font-medium">Contato</div>
                <div className="text-muted-foreground">
                  <a href={SITE.phoneUrl} className="transition-colors hover:text-foreground">
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="mt-10">
            <Button asChild variant="premium" size="lg">
              <a href={SITE.address.directionsUrl} target="_blank" rel="noreferrer">
                <Navigation className="size-4" /> Como chegar
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-sm border border-border shadow-elevated">
            <iframe
              title={`Mapa ${SITE.name}`}
              src={SITE.address.embedUrl}
              width="100%"
              height="520"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </WaveSection>
  );
}

/* --- small util --- */
function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}
