import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFigure, CaseStudyFigureGrid } from "@/components/case-study/CaseStudyFigure";
import { ProseItem, ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container, Rule } from "@/components/primitives";
import { stash } from "@/lib/case-studies/stash";

export const metadata: Metadata = {
  title: "Stash — Adams Oche",
  description:
    "A savings and payments app concept for young professionals across Nigeria and Ghana, saving toward specific goals and pooling money with a group. A design and frontend concept on mock data. Case study by Adams Oche.",
  openGraph: {
    title: "Stash — Adams Oche",
    description:
      "A savings and payments app concept for young professionals across Nigeria and Ghana, saving toward specific goals and pooling money with a group.",
    type: "article",
  },
};

export default function StashCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          eyebrow={stash.hero.eyebrow}
          title={stash.hero.title}
          standfirst={stash.hero.standfirst}
          intro={stash.hero.intro}
          meta={stash.hero.meta}
          liveUrl={stash.liveUrl}
          liveLabel={stash.liveLabel}
        />

        <Container>
          <p className="mx-auto -mt-10 mb-4 max-w-[680px] text-sm leading-relaxed text-ink/55">
            {stash.hero.concept}
          </p>
        </Container>

        <Rule />

        {/* -------------------------------------------------------------- Problem */}
        <ProseSection heading={stash.problem.heading}>
          {stash.problem.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------ Decisions */}
        <ProseSection heading={stash.decisions.heading}>
          {stash.decisions.items.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------- Caught and fixed */}
        <ProseSection heading={stash.fixes.heading}>
          {stash.fixes.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <CaseStudyFigureGrid
          images={[
            {
              src: "/case-studies/stash/stash-v1-hero.png",
              width: 1892,
              height: 876,
              alt: stash.fixes.beforeAlt,
            },
            {
              src: "/case-studies/stash/stash-design-system.png",
              width: 1280,
              height: 1698,
              alt: stash.fixes.afterAlt,
            },
          ]}
          max="1100px"
        />

        <ProseSection className="pt-0 md:pt-0">
          <p className="font-medium text-ink">{stash.fixes.fixedHeading}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">{stash.fixes.fixed}</p>
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------- Screens */}
        <ProseSection heading={stash.screens.heading} className="pb-0 md:pb-0">
          <ProseP>{stash.screens.intro}</ProseP>
          {stash.screens.flows.map((flow) => (
            <ProseItem key={flow.label} lead={flow.label}>
              {flow.body}
            </ProseItem>
          ))}
        </ProseSection>

        <CaseStudyFigureGrid
          images={[
            {
              src: "/case-studies/stash/stash-goals-list.png",
              width: 475,
              height: 904,
              alt: "The Goals list: MacBook Pro, Detty December and Emergency Fund, each with a horizontal progress bar filled from real contributions.",
            },
            {
              src: "/case-studies/stash/stash-pools-list.png",
              width: 475,
              height: 904,
              alt: "The Pools list: three active pools with member avatar stacks and progress bars, each showing the total pooled against its target.",
            },
            {
              src: "/case-studies/stash/stash-pool-detail.png",
              width: 475,
              height: 904,
              alt: "A single pool's detail screen: five members listed by name and initials, each with their contribution amount and share of the pool.",
            },
          ]}
          caption={stash.screens.flowScreensCaption}
          max="900px"
        />

        <CaseStudyFigure
          image={{
            src: "/case-studies/stash/stash-screens.png",
            width: 4603,
            height: 2508,
            alt: "All 19 Stash screens: onboarding, home, savings goals, send money, group pools, and profile and settings.",
          }}
          max="1360px"
        />

        <Container>
          <div className="pb-14 md:pb-16">
            <div className="mx-auto max-w-[680px] pt-6">
              <h3 className="font-display text-xl tracking-[-0.02em]">
                {stash.screens.landingHeading}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                {stash.screens.landingBody}
              </p>
            </div>
          </div>
        </Container>

        <Rule />

        {/* -------------------------------------------------------- Role & stack */}
        <ProseSection heading={stash.role.heading} className="pb-20 md:pb-28">
          <ProseP>{stash.role.body}</ProseP>

          <div className="border-t border-rule pt-6">
            <h3 className="font-display text-xl tracking-[-0.02em]">
              {stash.role.differentlyHeading}
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/60">
              {stash.role.differentlyBody}
            </p>
          </div>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
