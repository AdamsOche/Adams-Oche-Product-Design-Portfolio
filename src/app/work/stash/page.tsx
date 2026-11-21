import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFigure, CaseStudyFigureGrid } from "@/components/case-study/CaseStudyFigure";
import { StashRedesign } from "@/components/case-study/StashRedesign";
import { ProseItem, ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container, Rule } from "@/components/primitives";
import { heroImageFor } from "@/lib/site";
import { stash } from "@/lib/case-studies/stash";

export const metadata: Metadata = {
  title: "Stash · Adams Oche",
  description:
    "A personal finance concept for young adults in West Africa, covering savings goals, group pools and sending money. A design and frontend concept on mock data. Case study by Adams Oche.",
  openGraph: {
    title: "Stash · Adams Oche",
    description:
      "A personal finance concept for young adults in West Africa, covering savings goals, group pools and sending money.",
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

export default function StashCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          title={stash.hero.title}
          standfirst={stash.hero.standfirst}
          intro={stash.hero.intro}
          meta={stash.hero.meta}
          liveUrl={stash.liveUrl}
          liveLabel={stash.liveLabel}
          brandColor={stash.brandColor}
          brandTextColor={stash.brandTextColor}
          heroImage={heroImageFor("stash")}
        />

        <Container>
          <p className="mb-4 mt-2 text-[13px] leading-relaxed text-muted">
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

        <div className="h-12" />

        <Rule />

        {/* ----------------------------------------------------------- Redesign */}
        <StashRedesign />

        <Rule />

        {/* -------------------------------------------------------- Role & stack */}
        <ProseSection heading={stash.role.heading} className="pb-6 md:pb-6">
          <ProseP>{stash.role.body}</ProseP>

          <div className="border-t border-rule pt-6">
            <h3 className="font-display text-xl tracking-[-0.02em]">
              {stash.role.differentlyHeading}
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              {stash.role.differentlyBody}
            </p>
          </div>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
