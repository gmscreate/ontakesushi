import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { WaveSection } from "@/components/site/WaveSection";
import { SITE } from "@/data/site";

function CtaLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const internal = href.startsWith("/");
  if (internal) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export function PremiumCTA({
  eyebrow = "Faça seu pedido",
  title,
  subtitle,
  primaryLabel = "Peça no WhatsApp",
  primaryHref = SITE.whatsappOrderUrl,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <WaveSection
      size="sm"
      variant="dark-solid"
      background={
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
          <div className="pointer-events-none absolute inset-0 bg-radial-crimson opacity-60" />
        </>
      }
    >
      <div className="mx-auto max-w-5xl px-page text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            {eyebrow}
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <CtaLink href={primaryHref}>
                <MessageCircle /> {primaryLabel}
              </CtaLink>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button asChild variant="ghostLight" size="xl">
                <CtaLink href={secondaryHref}>
                  {secondaryLabel} <ArrowRight />
                </CtaLink>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </WaveSection>
  );
}
