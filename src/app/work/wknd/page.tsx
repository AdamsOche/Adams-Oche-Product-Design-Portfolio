import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFigure } from "@/components/case-study/CaseStudyFigure";
import { ProseItem, ProseP, ProseSection } from "@/components/case-study/Prose";
import { Rule } from "@/components/primitives";
import { wknd } from "@/lib/case-studies/wknd";

export const metadata: Metadata = {
  title: "WKND · Adams Oche",
  description:
    "A mobile app for finding things to do in Abuja and making plans with friends. Case study by Adams Oche.",
  openGraph: {
    title: "WKND · Adams Oche",
    description:
      "A mobile app for finding things to do in Abuja and making plans with friends.",
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

export default function WkndCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          eyebrow={wknd.hero.eyebrow}
          title={wknd.hero.title}
          standfirst={wknd.hero.standfirst}
          intro={wknd.hero.intro}
          meta={wknd.hero.meta}
          liveUrl={wknd.liveUrl}
          liveLabel={wknd.liveLabel}
          brandColor={wknd.brandColor}
          brandTextColor={wknd.brandTextColor}
        />

        <Rule />

        {/* -------------------------------------------------------------- Problem */}
        <ProseSection heading={wknd.problem.heading}>
          {wknd.problem.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------ Redesign */}
        <ProseSection heading={wknd.redesign.heading}>
          {wknd.redesign.items.map((item) => (
            <div key={item.title} className="space-y-4 border-t border-rule pt-6">
              <h3 className="font-display text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              {item.paragraphs.map((p) => (
                <ProseP key={p}>{p}</ProseP>
              ))}
            </div>
          ))}
        </ProseSection>

        <Rule />

        {/* -------------------------------------------------------------- Changed */}
        <ProseSection heading={wknd.changes.heading}>
          {wknd.changes.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------- Screens */}
        <ProseSection heading={wknd.screens.heading} className="pb-0 md:pb-0" />

        {wknd.screens.figures.map((fig) => (
          <CaseStudyFigure
            key={fig.src}
            image={{
              src: fig.src,
              width: 3080,
              height: 1472,
              alt: fig.alt,
            }}
            caption={fig.caption}
            max="1360px"
          />
        ))}

        <Rule />

        {/* ------------------------------------------------------------ Sponsors */}
        <ProseSection heading={wknd.sponsors.heading}>
          {wknd.sponsors.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <Rule />

        {/* ---------------------------------------------------------- To test */}
        <ProseSection heading={wknd.validation.heading}>
          <ProseP>{wknd.validation.intro}</ProseP>

          {wknd.validation.tests.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}

          <p className="pt-2 text-lg leading-relaxed text-ink/75">
            {wknd.validation.closing}
          </p>
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------------ Role */}
        <ProseSection heading={wknd.role.heading} className="pb-20 md:pb-28">
          {wknd.role.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
