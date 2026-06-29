import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "outline" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  children: ReactNode;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-night";

const variants: Record<Variant, string> = {
  gold: "bg-gold-gradient text-night shadow-gold hover:shadow-[0_0_55px_-6px_rgba(240,192,96,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-celeste/40 bg-celeste/[0.06] text-white hover:border-celeste/70 hover:bg-celeste/[0.12] hover:-translate-y-0.5",
  ghost: "text-subtext hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

export function Button({
  href,
  variant = "gold",
  size = "md",
  external,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isInternal = href.startsWith("/") && !external;

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
