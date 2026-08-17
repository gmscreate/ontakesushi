import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  imageAlt?: string;
  kanji?: string;
  stamp?: string;
  children?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  showScrollHint?: boolean;
  imagePosition?: string;
  /** Desktop HD: actions column left, copy column right */
  actionsFirst?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  kanji = "御",
  stamp = "御岳",
  children,
  actions,
  footer,
  showScrollHint = true,
  imagePosition = "center",
  actionsFirst = false,
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="dark relative min-h-[100svh] w-full overflow-hidden bg-ink text-foreground xl:min-h-[1080px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none">
        <span
          className="font-jp leading-none text-white/[0.04]"
          style={{ fontSize: "min(48vw, 36rem)" }}
        >
          {kanji}
        </span>
      </div>

      <motion.div
        style={{ y, scale }}
        className="absolute inset-y-0 right-0 z-10 w-full md:w-[62%] lg:w-[58%]"
      >
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10 md:from-ink md:via-ink/35 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/80" />
          <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className={cn(
          "relative z-20 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-page pt-28 pb-20",
          "md:pt-32 md:pb-24 xl:min-h-[1080px] xl:pt-36 xl:pb-28",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "w-full",
            children &&
              cn(
                "grid gap-10 lg:gap-12 xl:items-center",
                actionsFirst
                  ? "xl:grid-cols-[minmax(360px,1.05fr)_minmax(0,1fr)] xl:gap-14 2xl:gap-20"
                  : "xl:grid-cols-[minmax(0,1.12fr)_minmax(300px,420px)] xl:items-end",
              ),
          )}
        >
          <div
            className={cn(
              children && (actionsFirst ? "order-1 xl:order-2 xl:justify-self-end" : "max-w-2xl"),
              actionsFirst && "w-full max-w-xl xl:text-right",
              !children && "max-w-2xl",
            )}
          >
            <div
              className={cn(
                "mb-8 flex items-center gap-4",
                actionsFirst && "xl:flex-row-reverse xl:justify-end",
              )}
            >
              <span className="h-px w-10 bg-primary sm:w-14" />
              <span className="text-[10px] tracking-[0.35em] text-white/70 uppercase sm:tracking-[0.4em]">
                {eyebrow}
              </span>
            </div>

            <h1
              className={cn(
                "font-display text-[2.75rem] leading-[0.95] text-white sm:text-6xl md:text-[5.5rem] xl:text-[6.25rem]",
                actionsFirst && "2xl:text-[6.75rem]",
              )}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={cn(
                  "mt-8 max-w-lg text-base font-light leading-relaxed text-white/70 sm:mt-10 sm:text-lg xl:max-w-xl",
                  actionsFirst && "xl:ml-auto",
                )}
              >
                {subtitle}
              </p>
            )}

            {actions && (
              <div
                className={cn(
                  "mt-10 flex flex-wrap items-center gap-5 sm:mt-12",
                  actionsFirst && "xl:justify-end",
                )}
              >
                {actions}
              </div>
            )}
          </div>

          {children && (
            <div className={cn("w-full", actionsFirst ? "order-2 xl:order-1" : "xl:pb-1")}>
              {children}
            </div>
          )}
        </motion.div>

        {!actionsFirst && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute right-6 top-28 z-0 hidden lg:block lg:right-10 xl:right-12 xl:top-1/2 xl:-translate-y-1/2"
          >
            <div className="grid h-24 w-24 place-items-center rounded-md border-[3px] border-primary bg-primary/10 backdrop-blur-sm xl:h-28 xl:w-28">
              <span className="font-jp text-3xl text-primary xl:text-4xl">{stamp}</span>
            </div>
          </motion.div>
        )}

        {footer && <div className="mt-16 w-full border-t border-white/10 pt-8">{footer}</div>}
      </motion.div>

      {showScrollHint && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/45"
          aria-hidden="true"
        >
          <ChevronDown className="size-6" />
        </motion.div>
      )}
    </section>
  );
}
