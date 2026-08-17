import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-500 group-hover:[&_svg:last-child:not(:only-child)]:translate-x-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_20px_-8px_var(--crimson)] hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-[0_12px_32px_-10px_var(--crimson)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:-translate-y-0.5 hover:bg-destructive/90",
        outline:
          "border border-border bg-card/80 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_8px_24px_-10px_var(--crimson)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium:
          "bg-primary text-primary-foreground btn-glow btn-shine shadow-[0_10px_30px_-10px_var(--crimson)] hover:-translate-y-0.5 hover:shadow-[0_22px_45px_-12px_var(--crimson)]",
        hero: "bg-gradient-to-br from-primary via-primary to-[color-mix(in_oklab,var(--primary)_65%,black)] text-primary-foreground btn-glow btn-shine shadow-[0_20px_40px_-10px_var(--crimson)] hover:-translate-y-1 hover:shadow-[0_28px_55px_-12px_var(--crimson)]",
        ghostLight:
          "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_12px_40px_-20px_rgba(255,255,255,0.2)]",
        redOutline:
          "border border-primary/45 bg-primary/[0.04] text-primary hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_12px_32px_-12px_var(--crimson)]",
        iconCircle:
          "rounded-full bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_var(--crimson)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_14px_32px_-8px_var(--crimson)] active:scale-[0.98]",
        filter:
          "shrink-0 rounded-full border border-border bg-background/85 text-muted-foreground backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-[0_8px_24px_-10px_var(--crimson)]",
        whatsapp:
          "rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.55)] ring-1 ring-white/20 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_20px_50px_-8px_rgba(37,211,102,0.75)] active:scale-[0.98]",
        linkBio:
          "h-auto w-full justify-start rounded-2xl border border-border bg-card/70 px-6 py-5 text-sm font-medium tracking-wide backdrop-blur-xl hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-elevated",
        linkBioPrimary:
          "h-auto w-full justify-start rounded-2xl bg-gradient-to-br from-primary to-[color-mix(in_oklab,var(--primary)_65%,black)] px-6 py-5 text-sm font-medium tracking-wide text-primary-foreground btn-glow btn-shine shadow-[0_15px_40px_-10px_var(--crimson)] hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-10px_var(--crimson)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-xl px-4 text-xs tracking-wide",
        lg: "h-14 px-8 text-[15px] tracking-wide",
        xl: "h-16 px-10 text-sm tracking-[0.18em] uppercase",
        icon: "h-11 w-11 rounded-full p-0",
        iconLg: "h-14 w-14 rounded-full p-0",
        pill: "h-9 rounded-full px-5 text-xs tracking-[0.14em] uppercase",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
