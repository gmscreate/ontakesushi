import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { MenuDishCard } from "@/components/site/MenuDishCard";
import { PageHero } from "@/components/site/PageHero";
import { MenuFilters } from "@/components/site/MenuFilters";
import { MENU, type MenuCategory } from "@/data/menu";
import { SITE, pageTitle } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { cardGridStretch, cn } from "@/lib/utils";
import cardapioHero from "@/assets/cardapio-hero.png";

export const Route = createFileRoute("/cardapio")({
  head: () =>
    pageMeta({
      title: pageTitle("Cardápio"),
      description: `Cardápio completo ${SITE.name}: temakis, nigiris, sashimis, hot rolls, pokés e mais em ${SITE.city}.`,
      path: "/cardapio",
    }),
  component: CardapioPage,
});

function CardapioPage() {
  const [active, setActive] = useState<MenuCategory | "Todos">("Todos");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    return MENU.filter((m) => {
      const okCat = active === "Todos" || m.category === active;
      const okQ =
        !query || (m.name + " " + m.description).toLowerCase().includes(query.toLowerCase());
      return okCat && okQ;
    });
  }, [active, query]);

  return (
    <>
      <PageHero
        eyebrow="Cardápio"
        image={cardapioHero}
        imageAlt={`Cardápio ${SITE.name}`}
        imagePosition="center 40%"
        stamp="味"
        kanji="味"
        title={
          <>
            A carta da
            <br />
            <span className="italic font-normal text-white/95">casa Ontake</span>
            <span className="relative inline-block">
              .
              <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-primary" />
            </span>
          </>
        }
        subtitle="Do executivo do meio-dia ao combinado da casa. Filtre por categoria ou busque pelo prato."
      />

      {/* Filtros */}
      <section className="border-b border-border/50 bg-background pt-8 md:pt-10 lg:pt-12 xl:border-b-0 xl:bg-transparent xl:pb-10">
        <div className="mx-auto max-w-7xl px-page pb-3 md:pb-4">
          <MenuFilters
            active={active}
            query={query}
            resultCount={items.length}
            onActiveChange={setActive}
            onQueryChange={setQuery}
          />
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background section-sm">
        <div className="mx-auto max-w-7xl px-page">
          <AnimatePresence mode="wait">
            {items.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mx-auto max-w-md py-24 text-center"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-card">
                  <Sparkles className="size-6 text-muted-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl">Nenhum prato encontrado</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tente ajustar sua busca ou explorar outra categoria.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`${active}-${query}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
                  cardGridStretch,
                )}
              >
                {items.map((d, i) => (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.24) }}
                    className="min-h-0"
                  >
                    <MenuDishCard item={d} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
