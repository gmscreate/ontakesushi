import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "h-14",
  md: "h-28",
  lg: "h-32",
  xl: "h-36",
} as const;

type LogoProps = {
  className?: string;
  imgClassName?: string;
  size?: keyof typeof sizes;
  link?: boolean;
};

export function Logo({ className, imgClassName, size = "sm", link = false }: LogoProps) {
  const image = (
    <img
      src={logo}
      alt={SITE.name}
      className={cn("w-auto object-contain", sizes[size], imgClassName)}
      loading="eager"
      decoding="async"
    />
  );

  if (!link) {
    return <span className={cn("inline-flex shrink-0 items-center", className)}>{image}</span>;
  }

  return (
    <Link
      to="/"
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90",
        className,
      )}
      aria-label={`${SITE.name}, início`}
    >
      {image}
    </Link>
  );
}
