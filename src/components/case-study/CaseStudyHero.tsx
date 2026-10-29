import Image from "next/image";
import Link from "next/link";
import { Container, Pill } from "@/components/primitives";

type MetaItem = { label: string; value: string };

/**
 * Shared header for every case study: back link, title, standfirst, an
 * optional intro line, the metadata grid, and the hero image on its panel.
 * `liveUrl` is nullable on purpose so a fake or dead link never ships. The
 * `eyebrow` strings in the data files are no longer rendered here.
 */
export function CaseStudyHero({
  title,
  standfirst,
  intro,
  meta,
  liveUrl,
  liveLabel,
  brandColor,
  brandTextColor,
  heroImage,
  backHref = "/#work",
}: {
  title: string;
  standfirst: string;
  intro?: string;
  meta: readonly MetaItem[];
  liveUrl?: string | null;
  liveLabel?: string;
  /** The product's own primary color and a WCAG AA-safe text color for it. */
  brandColor?: string;
  brandTextColor?: string;
  heroImage?: { src: string; width: number; height: number; alt: string; color: string };
  backHref?: string;
}) {
  return (
    <Container>
      <div className="pb-4 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href={backHref} className="text-[13px] text-muted transition-colors hover:text-ink">
            <span aria-hidden="true">&larr;</span> All work
          </Link>

          {liveUrl && brandColor && brandTextColor ? (
            <Pill
              href={liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              variant="brand"
              style={{ backgroundColor: brandColor, color: brandTextColor }}
              className="gap-1.5 px-4 py-2 text-[13px]"
            >
              Visit {liveLabel}
              <span aria-hidden="true">&rarr;</span>
            </Pill>
          ) : null}
        </div>

        <h1 className="mt-[18px] font-display text-[clamp(2.2rem,7vw,3.4rem)] font-medium leading-none tracking-[-0.035em]">
          {title}
        </h1>

        <p className="mt-[18px] max-w-[44ch] font-serif text-xl leading-[1.45] text-[#4a463e]">
          {standfirst}
        </p>

        {intro ? (
          <p className="mt-3.5 max-w-[54ch] font-serif text-[17px] leading-[1.55] text-[#4a463e]">
            {intro}
          </p>
        ) : null}

        <dl className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-6 gap-y-3.5 border-t border-dashed border-ink/20 pt-[18px]">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs text-muted">{item.label}</dt>
              <dd className="mt-0.5 text-sm">{item.value}</dd>
            </div>
          ))}
        </dl>

        {heroImage ? (
          <div
            className="mt-6 rounded-xl p-[clamp(16px,4vw,32px)]"
            style={{ backgroundColor: heroImage.color }}
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              className="block h-auto w-full rounded-md"
              sizes="(min-width: 768px) 656px, 100vw"
              priority
            />
          </div>
        ) : null}
      </div>
    </Container>
  );
}
