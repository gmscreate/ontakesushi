import { useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.72.888.817 0 2.15-.515 2.464-1.34.13-.33.13-.63.093-.99-.06-.15-.302-.235-.53-.35zM16.06 26.65c-2.06 0-4.084-.588-5.83-1.677l-4.183 1.34 1.36-4.05a10.98 10.98 0 0 1-1.923-6.207c0-6.088 4.955-11.042 11.042-11.042 6.088 0 11.042 4.954 11.042 11.042 0 6.087-4.954 11.042-11.042 11.042l.534.552zm0-24.194c-7.253 0-13.152 5.9-13.152 13.152 0 2.317.61 4.588 1.774 6.588L2 32l7.938-2.542c1.94 1.06 4.132 1.62 6.365 1.62h.005c7.253 0 13.152-5.9 13.152-13.152 0-3.514-1.367-6.815-3.85-9.298-2.483-2.482-5.785-3.85-9.3-3.85l-.25-.322z" />
    </svg>
  );
}

export function DeliveryIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="17.5" r="2" />
      <circle cx="18.5" cy="17.5" r="2" />
      <path d="M8 17.5h7.2" />
      <path d="M15.2 17.5 17.8 12H14l-1 5.5" />
      <path d="M14 12 16.2 8h3.3" />
      <path d="M8 17.5 9.8 10.5H7.4" />
      <rect x="9.4" y="6.4" width="5.2" height="3.2" rx="0.6" />
    </svg>
  );
}

const fabMotion = {
  initial: { opacity: 0, scale: 0.6, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const mobileFabButtonClassName =
  "size-14 justify-center rounded-full p-0 [&_svg]:size-9 sm:size-auto sm:h-11 sm:justify-start sm:px-4 sm:py-3 sm:[&_svg]:size-6";

const mobileFabIconClassName = "size-9 shrink-0 sm:size-6";

export const deliveryButtonClassName =
  "group gap-2 rounded-full px-4 py-3 shadow-[0_16px_40px_-10px_var(--crimson)] hover:scale-[1.03] sm:[&_svg]:size-6";

export function WhatsAppFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/linkbio") return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8 md:gap-2">
      <motion.a
        href={SITE.whatsappOrderUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Pedir pelo WhatsApp"
        {...fabMotion}
        transition={{ ...fabMotion.transition, delay: 1 }}
        className={cn(
          buttonVariants({ variant: "whatsapp", size: "default" }),
          mobileFabButtonClassName,
          "group gap-2",
        )}
      >
        <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className={mobileFabIconClassName} />
        <span className="hidden text-sm font-semibold tracking-wide sm:inline">WhatsApp</span>
      </motion.a>

      <motion.a
        href={SITE.deliveryUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Pedir delivery online"
        {...fabMotion}
        transition={{ ...fabMotion.transition, delay: 1.15 }}
        className={cn(
          buttonVariants({ variant: "premium", size: "default" }),
          deliveryButtonClassName,
          mobileFabButtonClassName,
        )}
      >
        <DeliveryIcon className={mobileFabIconClassName} />
        <span className="hidden text-sm font-semibold tracking-wide sm:inline">Delivery</span>
      </motion.a>
    </div>
  );
}
