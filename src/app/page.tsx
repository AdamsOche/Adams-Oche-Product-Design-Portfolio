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
    "A mobile app that helps people in Abuja turn a free weekend into a plan, and get their friends to say yes. Case study by Adams Oche.",
  openGraph: {
    title: "WKND · Adams Oche",
    description:
      "A mobile app that helps people in Abuja turn a free weekend into a plan, and get their friends to say yes.",
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

        {/* ------------------------------------------------------------ Decisions */}
        <ProseSection heading={wknd.decisions.heading}>
          {wknd.decisions.items.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}

          <div className="pt-6">
            <p className="font-medium text-ink">{wknd.decisions.changedHeading}</p>
            <div className="mt-6 space-y-6">
              {wknd.decisions.changed.map((item) => (
                <ProseItem key={item.lead} lead={item.lead}>
                  {item.body}
                </ProseItem>
              ))}
            </div>
          </div>
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
          <ProseP>{wknd.sponsors.intro}</ProseP>

          <ul className="space-y-4">
            {wknd.sponsors.rules.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/75">
                <span
                  aria-hidden="true"
                  className="mt-3 h-1 w-1 shrink-0 rounded-full bg-ink/40"
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-lg leading-relaxed text-ink/75">{wknd.sponsors.closing}</p>
        </ProseSection>

        <Rule />

        {/* ---------------------------------------------------------- Hypothesis */}
        <ProseSection heading={wknd.validation.heading}>
          <ProseP>{wknd.validation.intro}</ProseP>

          {wknd.validation.beliefs.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}

          <p className="pt-2 text-lg leading-relaxed text-ink/75">
            {wknd.validation.closing}
          </p>
        </ProseSection>

        <Rule />

        {/* -------------------------------------------------------- Role & approach */}
        <ProseSection heading={wknd.role.heading} className="pb-20 md:pb-28">
          <ProseP>{wknd.role.body}</ProseP>
          <p className="border-t border-rule pt-6 text-[0.9375rem] leading-relaxed text-ink/65">
            {wknd.role.verification}
          </p>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
