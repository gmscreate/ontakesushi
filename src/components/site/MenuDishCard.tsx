import { Badge } from "@/components/ui/badge";
import { isMenuItemDestaque, type MenuItem } from "@/data/menu";
import { SITE, formatMenuPrice } from "@/data/site";
import { cn, productCardAspect } from "@/lib/utils";

type MenuDishCardProps = {
  item: MenuItem;
  className?: string;
};

export function MenuDishCard({ item, className }: MenuDishCardProps) {
  const price = formatMenuPrice(item);

  return (
    <a
      href={SITE.deliveryUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "card-lux group relative flex h-full flex-col overflow-hidden rounded-3xl",
        className,
      )}
      aria-label={`Pedir ${item.name} no delivery`}
    >
      <div className={cn("relative overflow-hidden", productCardAspect)}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-5">
          <div className="flex flex-wrap gap-1.5">
            {isMenuItemDestaque(item) && (
              <Badge className="rounded-full bg-primary text-[10px] tracking-widest uppercase shadow-lg">
                Destaque
              </Badge>
            )}
            {item.tags?.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="rounded-full bg-white/90 text-[10px] tracking-widest uppercase text-foreground"
              >
                {t}
              </Badge>
            ))}
          </div>
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[9px] font-semibold tracking-[0.3em] uppercase text-white/90 backdrop-blur-md">
            {item.category}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-end justify-between gap-4">
            <h3 className="min-w-0 flex-1 font-display text-2xl leading-tight text-white drop-shadow-md">
              {item.name}
            </h3>
            <div className="shrink-0 text-right">
              {price.prefix && (
                <span className="mb-1 block text-[9px] font-medium tracking-[0.22em] text-white/55 uppercase">
                  {price.prefix}
                </span>
              )}
              {price.value === "Consulte" ? (
                <span className="font-display text-lg font-semibold tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                  Consulte
                </span>
              ) : (
                <span className="inline-flex items-baseline gap-1 font-display tabular-nums text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                  <span className="text-sm font-medium text-white/80">R$</span>
                  <span className="text-[1.75rem] leading-none font-semibold tracking-tight">
                    {price.value}
                  </span>
                </span>
              )}
            </div>
          </div>
          <div className="mt-3 h-px w-10 bg-primary transition-all duration-500 group-hover:w-20" />
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/75">
            {item.description}
          </p>
        </div>
      </div>
    </a>
  );
}
