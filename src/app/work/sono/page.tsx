import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFigure, CaseStudyFigureGrid } from "@/components/case-study/CaseStudyFigure";
import { ProseItem, ProseP, ProseSection } from "@/components/case-study/Prose";
import { Rule } from "@/components/primitives";
import { sono } from "@/lib/case-studies/sono";

export const metadata: Metadata = {
  title: "Sono — Adams Oche",
  description:
    "Storefront and checkout software that helps independent music producers sell beats directly to their own audience. Case study by Adams Oche.",
  openGraph: {
    title: "Sono — Adams Oche",
    description:
      "Storefront and checkout software that helps independent music producers sell beats directly to their own audience.",
    type: "article",
  },
};

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="underline decoration-ink/30 underline-offset-4 transition-colors duration-200 hover:decoration-ink motion-reduce:transition-none"
    >
      {children}
    </Link>
  );
}

export default function SonoCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          eyebrow={sono.hero.eyebrow}
          title={sono.hero.title}
          standfirst={sono.hero.standfirst}
          intro={sono.hero.intro}
          meta={sono.hero.meta}
          liveUrl={sono.liveUrl}
          liveLabel={sono.liveLabel}
        />

        <Rule />

        {/* -------------------------------------------------------------- Problem */}
        <ProseSection heading={sono.problem.heading}>
          {sono.problem.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
          <ProseP>
            {sono.problem.paymentsParagraph.before}
            <InlineLink href={sono.problem.paymentsParagraph.linkHref}>
              {sono.problem.paymentsParagraph.linkText}
            </InlineLink>
            {sono.problem.paymentsParagraph.after}
          </ProseP>
          <p className="break-words text-sm leading-relaxed text-ink/50">
            {sono.problem.secondarySource.label}{" "}
            <InlineLink href={sono.problem.secondarySource.href}>
              {sono.problem.secondarySource.href}
            </InlineLink>
          </p>
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------- The v1 pivot */}
        <ProseSection heading={sono.pivot.heading}>
          {sono.pivot.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}

          <div>
            <p className="font-medium text-ink">{sono.pivot.cutHeading}</p>
            <ul className="mt-4 space-y-4">
              {sono.pivot.cutItems.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/75">
                  <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ProseSection>

        <CaseStudyFigureGrid
          images={[
            {
              src: "/work/sono-v1-home-feed.png",
              width: 1440,
              height: 1024,
              alt: "Sono v1 home feed: a browse-and-discover buyer landing page with trending beats and popular genres.",
            },
            {
              src: "/work/sono-v1-beat-detail.png",
              width: 1440,
              height: 1239,
              alt: "Sono v1 beat detail page with three license tiers and an Add to cart button.",
            },
            {
              src: "/work/sono-v1-role-select.png",
              width: 1440,
              height: 1024,
              alt: "Sono v1 sign up flow asking a new user to choose between a Producer or Artist role.",
            },
          ]}
          caption={sono.pivot.v1ScreensCaption}
        />

        <CaseStudyFigure
          image={{
            src: "/work/sono-v1-artist-flow.png",
            width: 5285,
            height: 1854,
            alt: "The full v1 buyer journey end to end: home feed, beat details, choosing a license, cart, payment, processing and a delivered download in the library.",
          }}
          max="1360px"
        />

        <CaseStudyFigureGrid
          images={[
            {
              src: "/case-studies/sono/sono-v1-brand-sheet.png",
              width: 1536,
              height: 1024,
              alt: "The Sono v1 brand sheet: a dark navy base, a bright blue accent circle mark, and Montserrat Alternates as the display face.",
            },
            {
              src: "/case-studies/sono/sono-v2-lockup-cyan-on-dark.png",
              width: 2000,
              height: 2000,
              alt: "The Sono v2 lockup: a cyan wordmark on black, with a mark of four shapes meeting in a square around a star-shaped gap.",
            },
          ]}
          caption={sono.pivot.identityCaption}
          max="900px"
        />

        <Rule />

        {/* ------------------------------------------------------------ Decisions */}
        <ProseSection heading={sono.decisions.heading}>
          {sono.decisions.items.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------- Caught and fixed */}
        <ProseSection heading={sono.fixes.heading}>
          {sono.fixes.items.map((item) => (
            <ProseItem key={item.lead} lead={item.lead}>
              {item.body}
            </ProseItem>
          ))}
          <p className="pt-2 text-lg leading-relaxed text-ink/75">{sono.fixes.closing}</p>
        </ProseSection>

        <Rule />

        {/* ------------------------------------------------------------- Screens */}
        <ProseSection heading={sono.screens.heading} className="pb-0 md:pb-0">
          <ProseP>{sono.screens.caption}</ProseP>
        </ProseSection>

        <CaseStudyFigure
          image={{
            src: "/work/sono-storefront.png",
            width: 1896,
            height: 877,
            alt: "Sono's public storefront: a beat card showing Basic and Premium license tiers priced in naira.",
          }}
          max="1360px"
        />
        <CaseStudyFigure
          image={{
            src: "/work/sono-dashboard.png",
            width: 1907,
            height: 882,
            alt: "The producer dashboard, showing revenue, sales and download counts, the storefront link, and recent orders.",
          }}
          max="1360px"
        />
        <CaseStudyFigure
          image={{
            src: "/work/sono-beats.png",
            width: 1896,
            height: 877,
            alt: "The Beats management table, listing every beat with its status, price range and sales count.",
          }}
          max="1360px"
        />
        <CaseStudyFigure
          image={{
            src: "/work/sono-orders.png",
            width: 1892,
            height: 877,
            alt: "The Orders table, filterable by beat and date range, showing buyer email, amount, status and delivery.",
          }}
          max="1360px"
        />

        <Rule />

        {/* -------------------------------------------------------- Role & stack */}
        <ProseSection heading={sono.role.heading} className="pb-20 md:pb-28">
          <ProseP>{sono.role.body}</ProseP>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
