import type { ReactNode } from "react";
import { Container, SectionPill } from "@/components/primitives";

/**
 * The shared case-study reading column: a pill heading and body copy held
 * to 54 characters. Images use CaseStudyFigure, which breaks out wider.
 */
export function ProseSection({
  heading,
  children,
  className = "",
  id,
}: {
  heading?: ReactNode;
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <Container>
      <div id={id} className={`py-10 md:py-11 ${className}`}>
        {heading ? <SectionPill className="mb-4">{heading}</SectionPill> : null}
        <div className="space-y-3.5">{children}</div>
      </div>
    </Container>
  );
}

export function ProseP({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-[54ch] font-serif text-lg leading-[1.6] text-[#3f3b34]">{children}</p>
  );
}

/** A bold lead sentence followed by explanatory copy, the decision/fix list pattern. */
export function ProseItem({
  lead,
  children,
}: {
  lead: ReactNode;
  children: ReactNode;
}) {
  return (
    <p className="max-w-[54ch] font-serif text-lg leading-[1.6] text-[#3f3b34]">
      <strong className="font-display font-semibold text-ink">{lead}</strong> {children}
    </p>
  );
}
