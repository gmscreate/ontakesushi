import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, UtensilsCrossed, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { DeliveryIcon, deliveryButtonClassName } from "@/components/site/WhatsAppFab";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

const links = [
  { to: "/", label: "Home", kanji: "家", hint: "Início" },
  { to: "/sobre", label: "Sobre Nós", kanji: "縁", hint: "Nossa história" },
  { to: "/cardapio", label: "Cardápio", kanji: "味", hint: "A carta da casa" },
  { to: "/peca-ja", label: "Peça Já", kanji: "注", hint: "Delivery e WhatsApp" },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.72.888.817 0 2.15-.515 2.464-1.34.13-.33.13-.63.093-.99-.06-.15-.302-.235-.53-.35zM16.06 26.65c-2.06 0-4.084-.588-5.83-1.677l-4.183 1.34 1.36-4.05a10.98 10.98 0 0 1-1.923-6.207c0-6.088 4.955-11.042 11.042-11.042 6.088 0 11.042 4.954 11.042 11.042 0 6.087-4.954 11.042-11.042 11.042l.534.552zm0-24.194c-7.253 0-13.152 5.9-13.152 13.152 0 2.317.61 4.588 1.774 6.588L2 32l7.938-2.542c1.94 1.06 4.132 1.62 6.365 1.62h.005c7.253 0 13.152-5.9 13.152-13.152 0-3.514-1.367-6.815-3.85-9.298-2.483-2.482-5.785-3.85-9.3-3.85l-.25-.322z" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (pathname === "/linkbio") return null;

  const onDark = true;

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "dark fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 border-b border-white/10 bg-black/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md backdrop-saturate-100"
            : "border-b border-transparent bg-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-page">
          <Logo link size="sm" />

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors",
                    active
                      ? onDark
                        ? "text-white"
                        : "text-foreground"
                      : onDark
                        ? "text-white/70 hover:text-white"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-primary"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="premium" size="default" className={deliveryButtonClassName}>
              <a href={SITE.deliveryUrl} target="_blank" rel="noreferrer">
                <DeliveryIcon className="size-6 shrink-0" />
                <span className="text-sm font-semibold tracking-wide">Peça agora</span>
              </a>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghostLight"
            size="icon"
            aria-label="Abrir menu"
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.button
              type="button"
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-hidden border-l border-white/[0.06] bg-black shadow-[0_0_80px_-20px_rgba(0,0,0,0.95)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-seigaiha opacity-[0.08]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-black"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 top-24 font-jp text-[9rem] leading-none text-white/[0.03] select-none"
              >
                御
              </div>

              <div className="relative flex flex-1 flex-col overflow-y-auto p-6 pb-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                      <span className="h-px w-8 bg-primary" />
                      Menu
                    </div>
                    <div className="mt-4">
                      <Logo size="sm" />
                    </div>
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-white/45">
                      <MapPin className="size-3.5 shrink-0 text-primary/80" />
                      {SITE.locationLabel}
                    </p>
                  </div>

                  <Button
                    type="button"
                    variant="ghostLight"
                    size="icon"
                    aria-label="Fechar"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </Button>
                </div>

                <nav className="mt-8 flex flex-col gap-2">
                  {links.map((l, i) => {
                    const active = pathname === l.to;
                    return (
                      <motion.div
                        key={l.to}
                        initial={{ x: 24, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          to={l.to}
                          className={cn(
                            "group relative flex items-center gap-4 overflow-hidden rounded-2xl border px-4 py-4 transition-all duration-500",
                            active
                              ? "border-primary/40 bg-primary/10 shadow-[0_12px_40px_-20px_var(--crimson)]"
                              : "border-white/[0.05] bg-black hover:border-white/10 hover:bg-white/[0.03]",
                          )}
                        >
                          <span
                            className={cn(
                              "font-jp text-lg leading-none transition-colors",
                              active ? "text-primary" : "text-white/35 group-hover:text-primary/80",
                            )}
                          >
                            {l.kanji}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div
                              className={cn(
                                "font-display text-2xl leading-none transition-colors",
                                active ? "text-white" : "text-white/90 group-hover:text-white",
                              )}
                            >
                              {l.label}
                            </div>
                            <div className="mt-1 text-[11px] text-white/40">{l.hint}</div>
                          </div>
                          <ArrowUpRight
                            className={cn(
                              "size-4 shrink-0 transition-all duration-500",
                              active
                                ? "text-primary"
                                : "text-white/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70",
                            )}
                          />
                          {active && (
                            <span
                              className="absolute inset-y-0 left-0 w-1 bg-primary"
                              aria-hidden
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-6 space-y-3">
                  <Button asChild variant="premium" size="lg" className="h-12 w-full">
                    <a href={SITE.whatsappOrderUrl} target="_blank" rel="noreferrer">
                      <WhatsAppIcon className="size-5 shrink-0" />
                      Peça no WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="redOutline"
                    size="lg"
                    className="h-12 w-full border-white/10 bg-black text-white hover:text-white"
                  >
                    <a href={SITE.deliveryUrl} target="_blank" rel="noreferrer">
                      <UtensilsCrossed className="size-4" />
                      Pedir online
                      <ArrowUpRight className="size-4 opacity-60" />
                    </a>
                  </Button>
                </div>

                <div className="mt-auto pt-8">
                  <div className="rounded-2xl border border-white/[0.05] bg-black p-4">
                    <div className="flex items-start gap-3 text-xs leading-relaxed text-white/50">
                      <Clock className="mt-0.5 size-4 shrink-0 text-primary/80" />
                      <div>
                        <div className="font-medium text-white/75">{SITE.hours.dinner}</div>
                        <div className="mt-1">{SITE.hours.lunch}</div>
                      </div>
                    </div>
                    <div className="mt-3 h-px bg-white/8" />
                    <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                      <span className="text-white/45">{SITE.rating.label}</span>
                      <a
                        href={SITE.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        @{SITE.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
