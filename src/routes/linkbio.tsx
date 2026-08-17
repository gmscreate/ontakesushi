import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Instagram, BookOpen, Utensils, History, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { DeliveryIcon, WhatsAppIcon, deliveryButtonClassName } from "@/components/site/WhatsAppFab";
import { cn } from "@/lib/utils";
import { SITE, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import galleryBg from "@/assets/gallery/gallery-01.png";

export const Route = createFileRoute("/linkbio")({
  head: () => {
    const seo = pageMeta({
      title: pageTitle("Links"),
      description: `Todos os links do ${SITE.name} em um só lugar.`,
      path: "/linkbio",
    });
    return {
      ...seo,
      meta: [...seo.meta, { name: "robots", content: "index,follow" }],
    };
  },
  component: LinkBioPage,
});

const PRIMARY_LINKS = [
  { href: SITE.whatsappOrderUrl, label: "Peça no WhatsApp", kind: "whatsapp" as const },
  { href: SITE.deliveryUrl, label: "Delivery online", kind: "delivery" as const },
];

const SECONDARY_LINKS = [
  { href: "/cardapio", label: "Ver cardápio", icon: Utensils, external: false },
  { href: SITE.address.directionsUrl, label: "Como chegar", icon: MapPin, external: true },
  { href: "/sobre", label: "Nossa história", icon: History, external: false },
  { href: "/", label: "Site completo", icon: BookOpen, external: false },
] as const;

const SOCIAL_LINKS = [
  { href: SITE.instagramUrl, label: "Instagram", icon: Instagram },
  { href: SITE.whatsappUrl, label: "WhatsApp", icon: WhatsAppIcon },
  { href: SITE.address.directionsUrl, label: "Como chegar", icon: MapPin },
] as const;

const fadeUp = (delay: number) => ({
  initial: { y: 18, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
});

function LinkBioPage() {
  return (
    <div className="dark relative min-h-[100svh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src={galleryBg}
          alt=""
          className="h-full w-full scale-105 object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/70 to-black/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-[0.12]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-md flex-col items-center px-page py-14 sm:py-16">
        <motion.div {...fadeUp(0.05)} className="text-center">
          <Logo size="xl" />
          <p className="mt-3 text-xs text-white/45">{SITE.hours.dinner}</p>
        </motion.div>

        <div className="mt-10 w-full space-y-3">
          {PRIMARY_LINKS.map((link, i) => {
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                {...fadeUp(0.2 + i * 0.08)}
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                className={cn(
                  buttonVariants({
                    variant: link.kind === "whatsapp" ? "whatsapp" : "premium",
                    size: "default",
                  }),
                  "h-14 w-full justify-start rounded-2xl px-5",
                  link.kind === "delivery" && deliveryButtonClassName,
                  link.kind === "whatsapp" &&
                    "rounded-2xl px-5 shadow-[0_16px_40px_-10px_rgba(37,211,102,0.45)]",
                )}
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                  {link.kind === "delivery" ? (
                    <DeliveryIcon className="size-5" />
                  ) : (
                    <WhatsAppIcon className="size-5" />
                  )}
                </div>
                <span className="text-sm font-semibold tracking-wide">{link.label}</span>
                <ArrowUpRight className="ml-auto size-4 opacity-60" />
              </motion.a>
            );
          })}
        </div>

        <motion.div {...fadeUp(0.38)} className="mt-8 w-full">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] tracking-[0.28em] text-white/40 uppercase">Explorar</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-2.5">
            {SECONDARY_LINKS.map((link, i) => {
              const Icon = link.icon;
              const className = cn(
                buttonVariants({ variant: "ghostLight", size: "default" }),
                "h-auto min-h-[3.25rem] w-full justify-start rounded-2xl border-white/10 bg-white/[0.04] px-4 py-3.5 text-white hover:bg-white/[0.08]",
              );

              const content = (
                <>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                    <Icon className="size-4" />
                  </div>
                  <span className="text-sm font-medium tracking-wide text-white/90">
                    {link.label}
                  </span>
                  <ArrowUpRight className="ml-auto size-4 text-white/35" />
                </>
              );

              return link.external ? (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  {...fadeUp(0.42 + i * 0.05)}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -1 }}
                  className={className}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={link.label}
                  {...fadeUp(0.42 + i * 0.05)}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -1 }}
                >
                  <Link to={link.href} className={className}>
                    {content}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp(0.68)} className="mt-6 flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <Icon className="size-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.p
          {...fadeUp(0.72)}
          className="mt-auto pt-10 text-center text-[11px] tracking-[0.12em] text-white/35"
        >
          © {SITE.name} · {SITE.locationLabel}
        </motion.p>
      </div>
    </div>
  );
}
