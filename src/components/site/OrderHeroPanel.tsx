import { motion } from "framer-motion";
import { ArrowRight, Clock, CreditCard, Star } from "lucide-react";
import type { ReactNode } from "react";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.72.888.817 0 2.15-.515 2.464-1.34.13-.33.13-.63.093-.99-.06-.15-.302-.235-.53-.35zM16.06 26.65c-2.06 0-4.084-.588-5.83-1.677l-4.183 1.34 1.36-4.05a10.98 10.98 0 0 1-1.923-6.207c0-6.088 4.955-11.042 11.042-11.042 6.088 0 11.042 4.954 11.042 11.042 0 6.087-4.954 11.042-11.042 11.042l.534.552zm0-24.194c-7.253 0-13.152 5.9-13.152 13.152 0 2.317.61 4.588 1.774 6.588L2 32l7.938-2.542c1.94 1.06 4.132 1.62 6.365 1.62h.005c7.253 0 13.152-5.9 13.152-13.152 0-3.514-1.367-6.815-3.85-9.298-2.483-2.482-5.785-3.85-9.3-3.85l-.25-.322z" />
    </svg>
  );
}

function HashiIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 4.5 9.75 19.5" />
      <path d="M16 4.5 14.25 19.5" />
      <path d="M7.25 4.5h3.5" />
      <path d="M13.25 4.5h3.5" />
    </svg>
  );
}

const TRUST_ITEMS = [
  { icon: Star, label: SITE.rating.label },
  { icon: Clock, label: SITE.deliveryTime },
  { icon: CreditCard, label: SITE.payment.short },
] as const;

type ChannelCardProps = {
  href: string;
  label: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  kanji: string;
  variant: "primary" | "secondary";
  delay?: number;
};

function ChannelCard({
  href,
  label,
  title,
  subtitle,
  icon,
  kanji,
  variant,
  delay = 0,
}: ChannelCardProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex min-h-[112px] items-center justify-between overflow-hidden rounded-3xl border px-6 py-5 transition-all duration-500 sm:px-7 sm:py-6",
        isPrimary
          ? "border-primary/30 bg-gradient-to-br from-primary to-[color-mix(in_oklab,var(--primary)_65%,black)] text-primary-foreground shadow-[0_20px_50px_-10px_var(--crimson)] hover:border-primary/50 hover:shadow-[0_30px_70px_-10px_var(--crimson)]"
          : "border-white/15 bg-white/[0.06] text-white backdrop-blur-md hover:border-white/30 hover:bg-white/[0.09]",
      )}
    >
      <span
        className="pointer-events-none absolute -right-2 -top-4 select-none font-jp text-[5rem] leading-none text-white/[0.06]"
        aria-hidden="true"
      >
        {kanji}
      </span>

      <div className="relative flex min-w-0 items-center gap-4 text-left">
        <div
          className={cn(
            "grid h-14 w-14 shrink-0 place-items-center rounded-2xl",
            isPrimary ? "bg-white/15" : "border border-white/15 bg-white/[0.08] text-primary",
          )}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <div
            className={cn(
              "text-[10px] font-semibold tracking-[0.28em] uppercase",
              isPrimary ? "text-primary-foreground/80" : "text-white/55",
            )}
          >
            {label}
          </div>
          <div className="mt-1 font-display text-xl leading-tight sm:text-2xl">{title}</div>
          <div
            className={cn(
              "mt-1 text-xs tracking-wide",
              isPrimary ? "text-primary-foreground/75" : "text-white/50",
            )}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <ArrowRight
        className={cn(
          "relative shrink-0 transition-transform duration-500 group-hover:translate-x-1",
          isPrimary ? "text-primary-foreground" : "text-white/80",
        )}
      />
    </motion.a>
  );
}

export function OrderHeroPanel() {
  return (
    <div className="flex w-full flex-col gap-5 xl:gap-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2 xl:gap-4">
        <ChannelCard
          href={SITE.whatsappOrderUrl}
          label="Preferido"
          title="Pedir no WhatsApp"
          subtitle="Resposta rápida · pedido personalizado"
          icon={<WhatsAppIcon className="size-7" />}
          kanji="話"
          variant="primary"
          delay={0.45}
        />
        <ChannelCard
          href={SITE.deliveryUrl}
          label={`Delivery · ${SITE.payment.short}`}
          title="Cardápio online"
          subtitle="138 pratos · peça em poucos toques"
          icon={<HashiIcon className="size-7" />}
          kanji="箸"
          variant="secondary"
          delay={0.55}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-2.5 xl:flex-nowrap xl:justify-center xl:gap-3"
      >
        {TRUST_ITEMS.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3.5 py-2 text-[10px] font-semibold tracking-[0.16em] text-white/75 uppercase backdrop-blur-md xl:shrink-0 xl:px-4"
          >
            <item.icon className="size-3.5 shrink-0 text-primary" />
            {item.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
