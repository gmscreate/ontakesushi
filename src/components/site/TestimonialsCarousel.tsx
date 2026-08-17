import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type Review = {
  name: string;
  role: string;
  text: string;
  date: string;
  initials?: string;
};

function reviewInitials(review: Review) {
  return (
    review.initials ??
    review.name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
  );
}

function StarRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-0.5 text-primary/90", className)}>
      {Array.from({ length: 5 }).map((_, k) => (
        <Star key={k} className="size-3.5 fill-current" />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const initials = reviewInitials(review);

  return (
    <article className="group relative flex h-full flex-col border-t border-border/70 pt-7 transition-colors duration-500 hover:border-primary/40 lg:pt-8">
      <div className="flex items-center justify-between gap-4">
        <span className="font-jp text-lg text-primary/70">{["一", "二", "三"][index] ?? "口"}</span>
        <StarRow />
      </div>

      <p className="relative mt-5 flex-1 font-display text-xl leading-snug text-foreground/90 sm:text-[1.35rem] lg:mt-6 lg:text-[1.45rem] lg:leading-[1.35]">
        {review.text}
      </p>

      <div className="relative mt-8 flex items-center gap-3 lg:mt-10">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border/80 bg-muted/30 font-display text-xs uppercase text-primary/90 transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-foreground">{review.name}</div>
          <div className="text-xs text-muted-foreground">{review.role}</div>
        </div>
        <span className="text-[10px] tracking-[0.2em] text-muted-foreground/70 uppercase">
          {review.date}
        </span>
      </div>
    </article>
  );
}

function RatingBadge({ score, label }: { score: string; label: string }) {
  return (
    <div className="inline-flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/50 px-5 py-4 backdrop-blur-sm sm:min-w-[220px]">
      <div className="flex items-center gap-3">
        <StarRow className="[&_svg]:size-4" />
        <span className="font-display text-3xl leading-none text-foreground">{score}</span>
        <span className="pb-0.5 text-sm text-muted-foreground">/ 5</span>
      </div>
      <p className="max-w-[16rem] text-xs leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}

function TestimonialsMobileCarousel({ reviews }: { reviews: Review[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, [paused, reviews.length]);

  return (
    <div
      className="lg:hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40 px-6 py-8 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ReviewCard review={reviews[i]} index={i} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {reviews.map((_, k) => (
          <button
            key={k}
            type="button"
            onClick={() => setI(k)}
            aria-label={`Avaliação ${k + 1}`}
            aria-current={k === i}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              k === i ? "w-7 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsCarousel({
  reviews,
  score,
  scoreLabel,
}: {
  reviews: Review[];
  score: string;
  scoreLabel: string;
}) {
  if (reviews.length === 0) return null;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-10">
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Vozes de clientes que confiam na casa Ontake — experiências no salão e no delivery.
        </p>
        <RatingBadge score={score} label={scoreLabel} />
      </div>

      <TestimonialsMobileCarousel reviews={reviews} />

      <div className="hidden gap-8 lg:grid lg:grid-cols-3 lg:gap-10 xl:gap-12">
        {reviews.map((review, index) => (
          <ReviewCard key={review.name} review={review} index={index} />
        ))}
      </div>
    </div>
  );
}
