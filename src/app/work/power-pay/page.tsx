import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import PowerPayScreens from "@/components/case-study/PowerPayScreens";
import { ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container, Eyebrow } from "@/components/primitives";
import { powerPay } from "@/lib/case-studies/power-pay";

export const metadata: Metadata = {
  title: "Power Pay · Adams Oche",
  description:
    "A concept app that sends prepaid electricity units straight into your meter, so there is no token to copy and nothing to type into the box. Case study by Adams Oche.",
  openGraph: {
    title: "Power Pay · Adams Oche",
    description:
      "A concept app that sends prepaid electricity units straight into your meter, so there is no token to copy and nothing to type into the box.",
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

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="max-w-[28ch] text-balance font-display text-[26px] font-medium leading-[1.15] tracking-[-0.025em]">
      {children}
    </h3>
  );
}

export default function PowerPayCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          tag={powerPay.hero.tag}
          title={powerPay.hero.title}
          standfirst={powerPay.hero.standfirst}
          meta={powerPay.hero.meta}
        />

        <Container>
          <aside
            aria-label={powerPay.note.label}
            className="mt-2 rounded-[14px] border border-ink/40 bg-card p-5"
          >
            <Eyebrow>{powerPay.note.label}</Eyebrow>
            <p className="mt-3 max-w-[54ch] font-serif text-lg leading-[1.6] text-[#3f3b34]">
              {powerPay.note.body}
            </p>
          </aside>
        </Container>

        <ProseSection heading={powerPay.screens.label} id="screens">
          <H3>{powerPay.screens.heading}</H3>
          <ProseP>{powerPay.screens.intro}</ProseP>
          {/* Breakout, wider than the reading column, like the other case studies' screens. */}
          <div className="ml-[50%] w-[min(1180px,calc(100vw-32px))] -translate-x-1/2 overflow-clip rounded-[14px] border border-rule py-0">
            <PowerPayScreens
              {...(powerPay.prototypeHref ? { prototypeUrl: powerPay.prototypeHref } : {})}
            />
          </div>
        </ProseSection>

        <ProseSection heading={powerPay.prototype.label} className="pb-6 md:pb-6">
          {powerPay.prototypeHref ? (
            <ProseP>
              <a
                href={powerPay.prototypeHref}
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent underline underline-offset-[3px] hover:decoration-2"
              >
                Open the interactive prototype
              </a>
            </ProseP>
          ) : (
            <ProseP>{powerPay.prototype.placeholder}</ProseP>
          )}
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
