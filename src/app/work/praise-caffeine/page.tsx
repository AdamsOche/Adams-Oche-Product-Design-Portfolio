import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ColumnFigure } from "@/components/case-study/CaseStudyFigure";
import { ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container } from "@/components/primitives";
import { praiseCaffeine as pc } from "@/lib/case-studies/praise-caffeine";

export const metadata: Metadata = {
  title: "Praise Caffeine · Adams Oche",
  description: `${pc.hero.standfirst} Case study by Adams Oche.`,
  openGraph: {
    title: "Praise Caffeine · Adams Oche",
    description: pc.hero.standfirst,
    type: "article",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Adams Oche, Product Designer · Builder",
        type: "image/png",
      },
    ],
  },
};

export default function PraiseCaffeineCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          title={pc.hero.title}
          standfirst={pc.hero.standfirst}
          meta={pc.hero.meta}
          backHref="/#brand"
        />

        <Container>
          <ColumnFigure image={pc.hero_image} priority />
        </Container>

        <ProseSection heading={pc.brief.heading}>
          {pc.brief.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <ProseSection heading={pc.logo.heading}>
          <ProseP>{pc.logo.intro}</ProseP>
          <div className="grid grid-cols-1 gap-3.5 pt-2 min-[560px]:grid-cols-2">
            {pc.logo.duo.map((item) => (
              <ColumnFigure
                key={item.src}
                image={{ src: item.src, alt: item.alt, width: 1200, height: 1200 }}
                caption={item.caption}
              />
            ))}
          </div>
          <ColumnFigure
            className="pt-2"
            image={{ ...pc.logo.wordmark, width: 1200, height: 1200 }}
            caption={pc.logo.wordmark.caption}
          />
        </ProseSection>

        <ProseSection heading={pc.colour.heading} className="pb-6 md:pb-6">
          <ProseP>{pc.colour.body}</ProseP>
          <ul className="grid grid-cols-4 gap-2 pt-2 min-[560px]:grid-cols-7">
            {pc.colour.swatches.map((s) => (
              <li key={s.hex} className="text-[11px] leading-[1.3] text-muted">
                <span
                  aria-hidden="true"
                  className="mb-1.5 block aspect-square rounded-lg border border-rule"
                  style={{ backgroundColor: s.hex }}
                />
                <b className="block font-medium text-ink">{s.name}</b>
                {s.hex}
              </li>
            ))}
          </ul>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
