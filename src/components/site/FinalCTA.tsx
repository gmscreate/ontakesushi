import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, CreditCard, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { WaveSection } from "@/components/site/WaveSection";
import { SITE } from "@/data/site";
import { cardGridItemStretch, cardGridStretch, cn } from "@/lib/utils";
import interior from "@/assets/interior.jpg";

const TRUST_ITEMS = [
  {
    icon: Star,
    label: SITE.rating.label,
    detail: SITE.rating.reviews,
  },
  {
    icon: Clock,
    label: "Horários",
    detail: `${SITE.hours.dinner} · ${SITE.hours.lunch}`,
  },
  {
    icon: CreditCard,
    label: "Pagamento",
    detail: SITE.payment.short,
  },
] as const;

export function FinalCTA() {
  return (
    <WaveSection
      variant="dark-solid"
      size="lg"
      aria-labelledby="final-cta-heading"
      background={
        <>
          <img
            src={interior}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
          <div className="pointer-events-none absolute inset-0 bg-radial-crimson opacity-35" />
        </>
      }
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <span
          className="font-jp leading-none text-white/[0.035]"
          style={{ fontSize: "min(42vw, 28rem)" }}
          aria-hidden="true"
        >
          御
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-page">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
              <span className="h-px w-10 bg-primary" />
              Sua mesa nos espera
              <span className="h-px w-10 bg-primary" />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="mt-8 inline-block font-jp text-4xl text-primary sm:text-5xl">
              御岳
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 id="final-cta-heading" className="heading-dark mt-6 text-white md:text-7xl">
              Uma noite que começa
              <br />
              <span className="relative inline-block italic text-gradient-red">
                na primeira mordida
                <span className="absolute -bottom-2 left-1/2 h-[3px] w-20 -translate-x-1/2 bg-primary/80 sm:left-0 sm:translate-x-0" />
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-white/65 sm:text-lg">
              Reserve sua mesa ou peça a sua experiência Ontake em casa. Estamos prontos para
              recebê-lo em {SITE.city}.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <a href={SITE.whatsappOrderUrl} target="_blank" rel="noreferrer">
                  <MessageCircle /> Peça no WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghostLight" size="xl">
                <Link to="/cardapio">
                  Ver cardápio <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Stagger className={cn("mt-16 grid gap-4 sm:grid-cols-3", cardGridStretch)}>
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.label} className={cardGridItemStretch}>
                <div className="glass-dark group flex h-full flex-col rounded-2xl border border-white/10 p-5 text-left transition-colors duration-500 hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-primary transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-primary/10">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.28em] text-white/80 uppercase">
                      {item.label}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">{item.detail}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </WaveSection>
  );
}
