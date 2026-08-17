import Link from "next/link";
import { Container, Eyebrow } from "@/components/primitives";

type MetaItem = { label: string; value: string };

/**
 * Shared header for every case study: `01 / SONO` eyebrow, title, standfirst,
 * the ROLE / PLATFORM / TOOLS metadata row, and a `Visit [project] →` link.
 * `liveUrl` is nullable on purpose so a fake or dead link never ships. When a
 * project's demo link isn't confirmed yet, the link is simply omitted.
 */
export function CaseStudyHero({
  eyebrow,
  title,
  standfirst,
  meta,
  liveUrl,
  liveLabel,
}: {
  eyebrow: string;
  title: string;
  standfirst: string;
  meta: readonly MetaItem[];
  liveUrl: string | null;
  liveLabel: string;
}) {
  return (
    <Container>
      <div className="pt-14 pb-16 md:pt-20 md:pb-20">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <Eyebrow className="text-ink/45">{eyebrow}</Eyebrow>

          {liveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-ink/30 underline-offset-4 transition-colors duration-200 hover:decoration-ink motion-reduce:transition-none"
            >
              Visit {liveLabel}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : null}
        </div>

        <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.03em]">
          {title}
        </h1>

        <p className="mt-8 max-w-[42ch] text-xl leading-[1.35] text-ink/70 sm:text-2xl">
          {standfirst}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-x-10">
          {meta.map((item) => (
            <div key={item.label}>
              <Eyebrow as="dt" className="text-ink/45">
                {item.label}
              </Eyebrow>
              <dd className="mt-2 max-w-[28ch] text-[0.9375rem] leading-snug text-ink/80">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
