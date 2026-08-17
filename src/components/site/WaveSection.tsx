import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionSize = "sm" | "default" | "lg";
type WaveVariant = "light" | "dark" | "dark-solid";

const sizeClass: Record<SectionSize, string> = {
  sm: "section-sm",
  default: "section",
  lg: "section-lg",
};

export function WaveBackdrop({ variant = "light" }: { variant?: WaveVariant }) {
  if (variant === "light") {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-background to-muted/40" />
        <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-80" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </>
    );
  }

  return (
    <>
      {variant === "dark-solid" && (
        <div className="pointer-events-none absolute inset-0 bg-black" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-seigaiha opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </>
  );
}

type WaveSectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  contentClassName?: string;
  size?: SectionSize;
  variant?: WaveVariant;
  background?: ReactNode;
};

export function WaveSection({
  children,
  className,
  contentClassName,
  size = "default",
  variant = "light",
  background,
  ...props
}: WaveSectionProps) {
  const isDark = variant !== "light";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "light" && "bg-background",
        variant === "dark" && "dark section-dark text-foreground",
        variant === "dark-solid" && "dark section-dark-solid text-foreground",
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {background}
      <WaveBackdrop variant={variant} />
      <div className={cn("relative", contentClassName)}>{children}</div>
    </section>
  );
}
