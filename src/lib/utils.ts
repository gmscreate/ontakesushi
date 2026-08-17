import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Ink card for dark sections — hex bg avoids --card / oklch issues in preview */
export const darkSurfaceCard =
  "border border-white/10 bg-[#141414] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/35";

/** Equal-height card grids — pair grid + item classes in the same section */
export const cardGridStretch = "items-stretch";
export const cardGridItemStretch = "h-full";

/** Menu / product card image ratio (matches cardápio) */
export const productCardAspect = "aspect-[4/5]";
