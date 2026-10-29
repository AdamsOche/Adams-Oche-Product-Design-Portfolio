import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFigure, CaseStudyFigureGrid } from "@/components/case-study/CaseStudyFigure";
import { ProseItem, ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container, Rule } from "@/components/primitives";
import { heroImageFor } from "@/lib/site";
import { matchday } from "@/lib/case-studies/matchday";

export const metadata: Metadata = {
  title: "Matchday · Adams Oche",
  description:
    "A squad management tool that helps football coaches check player availability and organise their squad and lineup before a match. Case study by Adams Oche.",
  openGraph: {
    title: "Matchday · Adams Oche",
    description:
      "A squad management tool that helps football coaches check player availability and organise their squad and lineup before a match.",
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

export default function MatchdayCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          title={matchday.hero.title}
          standfirst={matchday.hero.standfirst}
          intro={matchday.hero.intro}
          meta={matchday.hero.meta}
          liveUrl={matchday.liveUrl}
          liveLabel={matchday.liveLabel}
          brandColor={matchday.brandColor}
          brandTextColor={matchday.brandTextColor}
          heroImage={heroImageFor("matchday")}
        />

        <Rule />

        {/* -------------------------------------------------------------- Problem */}
        <ProseSection heading={matchday.problem.heading}>
          {matchday.problem.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------ Decisions */}
        <ProseSection heading={matchday.decisions.heading}>
          {matchday.decisions.items.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}

          <div className="pt-6">
            <p className="font-medium text-ink">{matchday.decisions.changedHeading}</p>
            <div className="mt-6 space-y-6">
              {matchday.decisions.changed.map((item) => (
                <ProseItem key={item.lead} lead={item.lead}>
                  {item.body}
                </ProseItem>
              ))}
            </div>
          </div>
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------- Caught and fixed */}
        <ProseSection heading={matchday.fixes.heading}>
          <ProseP>{matchday.fixes.intro}</ProseP>

          <ul className="space-y-4">
            {matchday.fixes.selfFound.map((item) => (
              <li key={item} className="flex gap-3 font-serif text-lg leading-[1.6] text-[#3f3b34]">
                <span
                  aria-hidden="true"
                  className="mt-3 h-1 w-1 shrink-0 rounded-full bg-ink/40"
                />
                {item}
              </li>
            ))}
          </ul>

          <ProseP>{matchday.fixes.coachesIntro}</ProseP>

          {matchday.fixes.coachFound.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}

          <p className="font-serif text-lg leading-[1.6] text-[#3f3b34]">{matchday.fixes.featureRequest}</p>
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------- Screens */}
        <ProseSection heading={matchday.screens.heading} className="pb-0 md:pb-0" />

        <CaseStudyFigureGrid
          images={[
            {
              src: "/case-studies/matchday/matchday-squad-overview-light.png",
              width: 1567,
              height: 904,
              alt: "Matchday squad overview in light mode: form ratings and availability status across the squad, with team stats at the top.",
            },
            {
              src: "/case-studies/matchday/matchday-squad-overview-dark.png",
              width: 1567,
              height: 904,
              alt: "The same squad overview in dark mode, designed alongside the light version, not inverted from it.",
            },
          ]}
          max="1360px"
        />

        <CaseStudyFigure
          image={{
            src: "/case-studies/matchday/matchday-formation-builder.png",
            width: 1567,
            height: 904,
            alt: "The Matchday formation builder: tap a player, then tap another player or someone on the bench to swap them, with a bench panel and formation switcher.",
          }}
          caption={matchday.screens.formationCaption}
          max="1360px"
        />

        <Container>
          <figure className="py-6 md:py-8">
            <Image
              src="/case-studies/matchday/matchday-formation-builder-mobile.png"
              alt="The Matchday formation builder on a phone: the formation switcher with a custom formation, and the pitch with eleven players placed in a 4-3-3."
              width={828}
              height={1654}
              sizes="(min-width: 768px) 320px, 80vw"
              className="h-auto w-full max-w-[320px] rounded-xl border border-rule"
            />
            <figcaption className="mt-2 max-w-[62ch] text-[13px] leading-relaxed text-muted">
              {matchday.screens.mobileCaption}
            </figcaption>
          </figure>
        </Container>

        <Container>
          <div className="pb-14 md:pb-16">
            <div className="mx-auto max-w-[680px] pt-6">
              <h3 className="font-display text-xl tracking-[-0.02em]">
                {matchday.screens.landingHeading}
              </h3>
              <p className="mt-4 font-serif text-lg leading-[1.6] text-[#3f3b34]">
                {matchday.screens.landingBody}
              </p>
            </div>
          </div>
        </Container>

        <Rule />

        {/* -------------------------------------------------------- Role & stack */}
        <ProseSection heading={matchday.role.heading} className="pb-6 md:pb-6">
          <ProseP>{matchday.role.body}</ProseP>
          <p className="border-t border-rule pt-6 text-[13px] leading-relaxed text-muted">
            {matchday.role.verification}
          </p>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
