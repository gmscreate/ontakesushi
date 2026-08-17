import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type LightboxImage = { src: string; label: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onIndex]);

  if (!mounted || index === null || !images[index]) return null;

  const current = images[index];

  return createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[200] flex flex-col bg-black/92 p-4 backdrop-blur-md sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={current.label}
        onClick={onClose}
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Fechar"
            onClick={onClose}
            className="absolute -top-1 right-0 z-10 border-white/15 bg-black/60 text-white hover:bg-black/80 sm:top-0"
          >
            <X className="size-5" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="iconLg"
            aria-label="Foto anterior"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + images.length) % images.length);
            }}
            className="absolute top-1/2 -left-1 z-10 hidden -translate-y-1/2 border-white/15 bg-black/60 text-white hover:bg-black/80 sm:flex md:-left-4"
          >
            <ChevronLeft className="size-5" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="iconLg"
            aria-label="Próxima foto"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index + 1) % images.length);
            }}
            className="absolute top-1/2 -right-1 z-10 hidden -translate-y-1/2 border-white/15 bg-black/60 text-white hover:bg-black/80 sm:flex md:-right-4"
          >
            <ChevronRight className="size-5" />
          </Button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-0 flex-1 flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex max-h-[min(78vh,820px)] w-full items-center justify-center">
              <img
                src={current.src}
                alt={current.label}
                className="max-h-[min(78vh,820px)] max-w-full rounded-xl object-contain shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)]"
              />
            </div>
            <figcaption className="mt-4 shrink-0 text-center">
              <p className="font-display text-lg text-white sm:text-xl">{current.label}</p>
              <p className="mt-1 text-[10px] tracking-[0.28em] text-white/45 uppercase">
                {index + 1} / {images.length}
              </p>
            </figcaption>
          </motion.figure>

          <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Foto anterior"
              onClick={(e) => {
                e.stopPropagation();
                onIndex((index - 1 + images.length) % images.length);
              }}
              className="border-white/15 bg-black/60 text-white"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Próxima foto"
              onClick={(e) => {
                e.stopPropagation();
                onIndex((index + 1) % images.length);
              }}
              className="border-white/15 bg-black/60 text-white"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
