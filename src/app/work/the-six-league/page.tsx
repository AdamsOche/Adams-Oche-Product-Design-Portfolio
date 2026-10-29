import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ColumnFigure } from "@/components/case-study/CaseStudyFigure";
import { ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container } from "@/components/primitives";
import { theSixLeague as six } from "@/lib/case-studies/the-six-league";

export const metadata: Metadata = {
  title: "The Six League · Adams Oche",
  description:
    "A fictional football league concept built around the identity of five clubs. Brand identity case study by Adams Oche.",
  openGraph: {
    title: "The Six League · Adams Oche",
    description:
      "A fictional football league concept built around the identity of five clubs.",
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

export default function SixLeagueCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          title={six.hero.title}
          standfirst={six.hero.standfirst}
          meta={six.hero.meta}
          backHref="/#brand"
        />

        <Container>
          <ColumnFigure image={six.hero_image} badge priority />
        </Container>

        <ProseSection heading={six.project.heading}>
          {six.project.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <ProseSection heading={six.clubs.heading}>
          <ProseP>{six.clubs.body}</ProseP>
          <div className="grid grid-cols-1 gap-3.5 pt-2 min-[560px]:grid-cols-2">
            {six.clubs.items.map((item, i) => (
              <ColumnFigure
                key={item.src}
                badge
                className={i === six.clubs.items.length - 1 ? "min-[560px]:col-span-2" : ""}
                image={{ src: item.src, alt: item.alt, width: 1200, height: 1200 }}
                caption={item.caption}
              />
            ))}
          </div>
        </ProseSection>

        <ProseSection heading={six.kit.heading}>
          {six.kit.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <ProseSection heading={six.approach.heading} className="pb-6 md:pb-6">
          {six.approach.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
