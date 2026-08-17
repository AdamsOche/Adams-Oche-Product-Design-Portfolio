import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFigure, CaseStudyFigureGrid } from "@/components/case-study/CaseStudyFigure";
import { ProseItem, ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container, Eyebrow, Rule } from "@/components/primitives";
import { matchday } from "@/lib/case-studies/matchday";

export const metadata: Metadata = {
  title: "Matchday — Adams Oche",
  description:
    "A squad management tool for grassroots and semi-pro football teams, keeping the squad, their form and the next lineup in one place. Case study by Adams Oche.",
  openGraph: {
    title: "Matchday — Adams Oche",
    description:
      "A squad management tool for grassroots and semi-pro football teams, keeping the squad, their form and the next lineup in one place.",
    type: "article",
  },
};

export default function MatchdayCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          eyebrow={matchday.hero.eyebrow}
          title={matchday.hero.title}
          standfirst={matchday.hero.standfirst}
          intro={matchday.hero.intro}
          meta={matchday.hero.meta}
          liveUrl={matchday.liveUrl}
          liveLabel={matchday.liveLabel}
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
              <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/75">
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

          <p className="text-lg leading-relaxed text-ink/75">{matchday.fixes.featureRequest}</p>
          <p className="pt-2 text-lg leading-relaxed text-ink/75">{matchday.fixes.closing}</p>
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
              alt: "The same squad overview in dark mode, designed alongside the light version rather than inverted from it.",
            },
          ]}
          max="1360px"
        />

        <CaseStudyFigure
          image={{
            src: "/case-studies/matchday/matchday-formation-builder.png",
            width: 1567,
            height: 904,
            alt: "The Matchday formation builder: tap a player then tap another to swap them, with a bench panel and formation switcher.",
          }}
          caption={matchday.screens.visualPassCaption}
          max="1360px"
        />

        <Container>
          <figure className="mx-auto max-w-[900px] py-6 md:py-8">
            <div
              role="presentation"
              className="flex aspect-[9/16] w-full max-w-[320px] items-center justify-center rounded-xl border border-dashed border-ink/20 bg-paper-sunk"
            >
              <Eyebrow className="px-6 text-center text-ink/35">
                Mobile view — pending capture
              </Eyebrow>
            </div>
            <figcaption className="mt-4 max-w-[62ch] text-sm leading-relaxed text-ink/55">
              The tap to swap argument rests on phone use, so a phone width screen belongs here.
              Coming once it&rsquo;s captured.
            </figcaption>
          </figure>
        </Container>

        <Container>
          <div className="pb-14 md:pb-16">
            <div className="mx-auto max-w-[680px] pt-6">
              <h3 className="font-display text-xl tracking-[-0.02em]">
                {matchday.screens.landingHeading}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                {matchday.screens.landingBody}
              </p>
            </div>
          </div>
        </Container>

        <Rule />

        {/* -------------------------------------------------------- Role & stack */}
        <ProseSection heading={matchday.role.heading} className="pb-20 md:pb-28">
          <ProseP>{matchday.role.body}</ProseP>
          <p className="border-t border-rule pt-6 text-[0.9375rem] leading-relaxed text-ink/55">
            {matchday.role.verification}
          </p>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
