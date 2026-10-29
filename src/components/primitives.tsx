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
    <div className={`mx-auto w-full max-w-[752px] px-4 ${className}`}>
      {children}
    </div>
  );
}

/** Dashed divider between sections, held to the column. */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <Container className={className}>
      <div role="presentation" className="border-t border-dashed border-ink/20" />
    </Container>
  );
}

/** Small outlined pill used as a section label. Renders a real heading. */
export function SectionPill({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h2" | "h3" | "p";
  className?: string;
}) {
  return (
    <Tag
      className={`inline-block rounded-full border border-rule bg-card px-3.5 py-[5px] text-[13px] font-normal leading-normal text-[#4a463e] ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Required on every image that shows a kit: the kit photos carry a real
 * sportswear logo, so each is labelled as a concept. Place inside a
 * `relative` wrapper.
 */
export function ConceptBadge() {
  return (
    <span className="absolute left-3 top-3 z-[1] rounded-full bg-card/90 px-2.5 py-[3px] text-[11px] leading-normal text-ink">
      Concept mockup
    </span>
  );
}

/** Small muted tag list, e.g. "Product design". */
export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="mt-3.5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="rounded-md bg-ink/5 px-[9px] py-[3px] text-xs text-[#5a564e]">
          {tag}
        </li>
      ))}
    </ul>
  );
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
