import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import { SITE } from "@/data/site";

const YEAR = 2026;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.72.888.817 0 2.15-.515 2.464-1.34.13-.33.13-.63.093-.99-.06-.15-.302-.235-.53-.35zM16.06 26.65c-2.06 0-4.084-.588-5.83-1.677l-4.183 1.34 1.36-4.05a10.98 10.98 0 0 1-1.923-6.207c0-6.088 4.955-11.042 11.042-11.042 6.088 0 11.042 4.954 11.042 11.042 0 6.087-4.954 11.042-11.042 11.042l.534.552zm0-24.194c-7.253 0-13.152 5.9-13.152 13.152 0 2.317.61 4.588 1.774 6.588L2 32l7.938-2.542c1.94 1.06 4.132 1.62 6.365 1.62h.005c7.253 0 13.152-5.9 13.152-13.152 0-3.514-1.367-6.815-3.85-9.298-2.483-2.482-5.785-3.85-9.3-3.85l-.25-.322z" />
    </svg>
  );
}

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/galeria", label: "Galeria" },
  { to: "/peca-ja", label: "Peça Já" },
  { to: "/linkbio", label: "Link na Bio" },
] as const;

const LEGAL_LINKS = [
  { to: "/privacidade", label: "Privacidade" },
  { to: "/termos", label: "Termos de uso" },
] as const;

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/linkbio") return null;

  return (
    <footer className="dark section-dark-solid border-t border-white/10 text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-[0.14]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-24 hidden select-none justify-center overflow-hidden md:flex">
        <span className="font-jp leading-none text-white/[0.02]" style={{ fontSize: "18rem" }}>
          御
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-page pt-14 pb-8 md:pt-16">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.35em] text-primary uppercase">
              Peça agora
            </p>
            <p className="mt-2 font-display text-2xl text-white sm:text-3xl">
              Sua mesa ou delivery em <span className="italic text-gradient-red">{SITE.city}</span>.
            </p>
          </div>
          <Button asChild variant="hero" size="lg" className="shrink-0">
            <a href={SITE.whatsappOrderUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5 shrink-0" /> WhatsApp
            </a>
          </Button>
        </div>

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="flex flex-col items-center text-center md:col-span-5">
            <Logo link size="md" />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              {SITE.description}
            </p>

            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] tracking-[0.28em] text-white/70 uppercase">
              Est. {SITE.established}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="outline" size="icon">
                <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon className="size-4" />
                </a>
              </Button>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs tracking-wide text-white/55 transition-colors hover:text-primary"
              >
                @{SITE.instagramHandle}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-5 text-[10px] font-semibold tracking-[0.32em] text-white/80 uppercase">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.deliveryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-white/60 transition-colors hover:text-primary"
                >
                  <span className="h-px w-0 bg-primary transition-all group-hover:w-4" />
                  Delivery online
                  <ArrowUpRight className="size-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-5 text-[10px] font-semibold tracking-[0.32em] text-white/80 uppercase">
              Contato
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: Clock,
                  label: "Horário",
                  value: `${SITE.hours.dinner}\n${SITE.hours.lunch}`,
                },
                {
                  icon: MapPin,
                  label: "Endereço",
                  value: `${SITE.address.street}\n${SITE.address.neighborhood}, ${SITE.address.city} - ${SITE.address.state}`,
                },
                { icon: Phone, label: "Telefone", value: SITE.phone, href: SITE.phoneUrl },
                { icon: Mail, label: "E-mail", value: SITE.email, href: `mailto:${SITE.email}` },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                    <row.icon className="size-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold tracking-[0.24em] text-primary uppercase">
                      {row.label}
                    </div>
                    <div className="mt-1 whitespace-pre-line text-sm leading-relaxed text-white/65">
                      {row.href ? (
                        <a href={row.href} className="transition-colors hover:text-white">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/45 md:mt-14 md:flex-row md:text-left">
          <p>
            © {YEAR} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
            <span aria-hidden="true">·</span>
            <p>
              {SITE.locationLabel} · {SITE.payment.short}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
