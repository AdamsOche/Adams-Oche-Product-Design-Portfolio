import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/primitives";

/**
 * The shared case-study reading column: heading + body copy held to a
 * ~65-70 character measure. Images intentionally use CaseStudyFigure
 * instead, which is allowed to run wider than this column.
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
      <div id={id} className={`py-14 md:py-16 ${className}`}>
        <div className="mx-auto max-w-[680px]">
          {heading ? (
            <h2 className="font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              {heading}
            </h2>
          ) : null}
          <div className={heading ? "mt-8 space-y-6" : "space-y-6"}>{children}</div>
        </div>
      </div>
    </Container>
  );
}

export function ProseP({ children }: { children: ReactNode }) {
  return <p className="text-lg leading-relaxed text-ink/75">{children}</p>;
}

/** A bold lead sentence followed by explanatory copy — the decision/fix list pattern. */
export function ProseItem({
  lead,
  children,
}: {
  lead: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-rule pt-6">
      <p className="text-lg leading-relaxed text-ink/85">
        <strong className="font-semibold text-ink">{lead}</strong>{" "}
        <span className="text-ink/75">{children}</span>
      </p>
    </div>
  );
}

export function ProseEyebrow({ children }: { children: ReactNode }) {
  return <Eyebrow className="text-ink/45">{children}</Eyebrow>;
}
