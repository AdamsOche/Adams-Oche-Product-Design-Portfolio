import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Page gutter. Everything except the hairline dividers sits inside this. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14 ${className}`}>
      {children}
    </div>
  );
}

/** Full-bleed hairline divider between sections. */
export function Rule({ className = "" }: { className?: string }) {
  return <div role="presentation" className={`h-px w-full bg-rule ${className}`} />;
}

/** Letterspaced small-caps eyebrow for metadata: `01 / SONO`, `ROLE`, `TOOLS`. */
export function Eyebrow({
  children,
  className = "",
  as: Tag = "p",
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "h2" | "h3" | "div" | "dt";
}) {
  return (
    <Tag
      className={`font-sans text-[0.6875rem] font-medium uppercase tracking-[0.18em] leading-none text-ink/65 ${className}`}
    >
      {children}
    </Tag>
  );
}

type PillProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "brand";
};

/**
 * Black pill primary, outlined pill secondary, or `brand`: an unstyled fill
 * for callers passing their own `style={{ backgroundColor, color }}` (each
 * project's own product color). `brand` darkens on hover via a filter
 * instead of a background-color class, so it works with any inline color.
 */
export function Pill({ variant = "primary", className = "", children, ...rest }: PillProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium leading-none transition-[filter,background-color,border-color] duration-200 motion-reduce:transition-none";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-ink/85"
      : variant === "secondary"
        ? "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5"
        : "hover:brightness-90";

  return (
    <Link className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/**
 * Two-column section layout: short heading left, body copy right.
 * Collapses to a single stacked column below `md`.
 */
export function TwoCol({
  heading,
  eyebrow,
  media,
  children,
  className = "",
  id,
}: {
  heading: ReactNode;
  eyebrow?: ReactNode;
  /** Optional small visual (e.g. an avatar), rendered above the heading. */
  media?: ReactNode;
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-12 ${className}`}
    >
      <div className="md:col-span-5 lg:col-span-4">
        {media ? <div className="mb-6">{media}</div> : null}
        {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
        <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
      </div>
      {children ? (
        <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
          {children}
        </div>
      ) : null}
    </div>
  );
}
