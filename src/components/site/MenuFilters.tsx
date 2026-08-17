import { useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MENU, CATEGORIES, type MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";

type FilterValue = MenuCategory | "Todos";

type MenuFiltersProps = {
  active: FilterValue;
  query: string;
  resultCount: number;
  onActiveChange: (value: FilterValue) => void;
  onQueryChange: (value: string) => void;
};

export function MenuFilters({
  active,
  query,
  resultCount,
  onActiveChange,
  onQueryChange,
}: MenuFiltersProps) {
  const counts = useMemo(() => {
    const map = new Map<FilterValue, number>();
    map.set("Todos", MENU.length);
    for (const item of MENU) {
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const hasFilters = active !== "Todos" || query.length > 0;

  function clearFilters() {
    onActiveChange("Todos");
    onQueryChange("");
  }

  const allCategories = ["Todos", ...CATEGORIES] as const;
  const splitAt = Math.ceil(allCategories.length / 2);
  const categoryRows = [allCategories.slice(0, splitAt), allCategories.slice(splitAt)] as const;

  const title =
    active === "Todos" ? (
      <>
        Toda a <span className="italic font-normal text-foreground/75">carta</span>
      </>
    ) : (
      active
    );

  function CategoryTab({
    category,
    compact = false,
  }: {
    category: FilterValue;
    compact?: boolean;
  }) {
    const isActive = active === category;
    const count = counts.get(category) ?? 0;

    return (
      <button
        type="button"
        role="tab"
        aria-selected={isActive}
        onClick={() => onActiveChange(category)}
        className={cn(
          "group relative shrink-0 text-left transition-colors",
          compact ? "px-2.5 py-2 sm:px-3" : "px-3 py-3 sm:px-4",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80",
        )}
      >
        <span className="block text-[10px] font-medium tracking-[0.12em] uppercase xl:text-[11px] xl:tracking-[0.14em]">
          {category}
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[9px] tabular-nums tracking-normal transition-colors xl:mt-1 xl:text-[10px]",
            isActive
              ? "text-primary/80"
              : "text-muted-foreground/50 group-hover:text-muted-foreground",
          )}
        >
          {count}
        </span>
        <span
          aria-hidden
          className={cn(
            "absolute inset-x-2.5 bottom-0 h-px origin-left bg-primary transition-transform duration-500 sm:inset-x-3 xl:inset-x-4",
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50 group-hover:bg-primary/40",
          )}
        />
      </button>
    );
  }

  return (
    <div className="space-y-3 xl:space-y-8">
      <div className="flex items-center justify-between gap-3 border-b border-border/40 pb-3 xl:items-end xl:gap-5 xl:pb-6">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
            <h2 className="font-display text-3xl leading-none text-foreground sm:text-4xl xl:text-5xl">
              {title}
            </h2>
            <span className="text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase tabular-nums">
              · {resultCount} {resultCount === 1 ? "prato" : "pratos"}
            </span>
          </div>
          {query && (
            <p className="mt-1 truncate text-[11px] text-muted-foreground">
              Buscando por “{query}”
            </p>
          )}
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="shrink-0 text-[11px] font-medium text-primary transition-colors hover:text-primary/80"
          >
            Limpar
          </button>
        )}
      </div>

      <div className="relative max-w-xl">
        <Search className="pointer-events-none absolute left-0 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground/70 xl:size-4" />
        <Input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Buscar prato ou ingrediente"
          className="h-9 rounded-none border-0 border-b border-border/70 bg-transparent px-0 pl-6 pr-7 text-sm shadow-none placeholder:text-muted-foreground/60 focus-visible:border-primary/50 focus-visible:ring-0 xl:h-11 xl:pl-7 xl:pr-8"
        />
        {query && (
          <button
            type="button"
            aria-label="Limpar busca"
            onClick={() => onQueryChange("")}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-3.5 xl:size-4" />
          </button>
        )}
      </div>

      <div className="relative -mx-6 px-6 xl:mx-0 xl:px-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent lg:hidden" />

        <div
          role="tablist"
          aria-label="Categorias do cardápio"
          className="border-b border-border/40"
        >
          <div className="flex gap-0 overflow-x-auto [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
            {allCategories.map((category) => (
              <CategoryTab key={category} category={category} compact />
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-col">
            {categoryRows.map((row, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-wrap gap-x-1",
                  index === 0 && "border-b border-border/30 pb-px",
                )}
              >
                {row.map((category) => (
                  <CategoryTab key={category} category={category} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
