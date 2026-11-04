import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { PlazaFigure } from "@/components/case-study/PlazaFigure";
import { ProseP, ProseSection } from "@/components/case-study/Prose";
import { Container, Eyebrow } from "@/components/primitives";
import { plazaBoard as plaza } from "@/lib/case-studies/plaza-board";

export const metadata: Metadata = {
  title: "Plaza Board · Adams Oche",
  description:
    "A concept for a plaza management tool, built from public research with no interviews and invented data. Floor-plan board, rent tracking and a caretaker app.",
  openGraph: {
    title: "Plaza Board · Adams Oche",
    description:
      "Concept for a plaza management tool. Floor-plan board, rent tracking and a caretaker app.",
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

const listClass =
  "max-w-[54ch] list-disc space-y-2 pl-5 font-serif text-lg leading-[1.6] text-[#3f3b34] marker:text-muted";

const cardClass = "rounded-[14px] border border-rule bg-card p-5";

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="max-w-[28ch] text-balance font-display text-[26px] font-medium leading-[1.15] tracking-[-0.025em]">
      {children}
    </h3>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h4 className="font-display text-lg font-medium tracking-[-0.015em]">{children}</h4>;
}

function CardBody({ children }: { children: ReactNode }) {
  return <p className="mt-2 font-serif text-base leading-[1.55] text-[#3f3b34]">{children}</p>;
}

export default function PlazaBoardCaseStudy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <CaseStudyHero
          tag={plaza.hero.tag}
          title={plaza.hero.title}
          standfirst={plaza.hero.standfirst}
          meta={plaza.hero.meta}
        />

        {/* Do not remove or soften: this honesty is deliberate. */}
        <Container>
          <aside
            aria-label={plaza.note.label}
            className="mt-2 rounded-[14px] border border-ink/40 bg-card p-5"
          >
            <Eyebrow>{plaza.note.label}</Eyebrow>
            <p className="mt-3 max-w-[54ch] font-serif text-lg leading-[1.6] text-[#3f3b34]">
              {plaza.note.body}
            </p>
          </aside>
        </Container>

        <ProseSection heading={plaza.problem.label}>
          <H3>{plaza.problem.heading}</H3>
          {plaza.problem.paragraphs.map((p) => (
            <ProseP key={p}>{p}</ProseP>
          ))}
        </ProseSection>

        <ProseSection heading={plaza.exists.label}>
          <H3>{plaza.exists.heading}</H3>
          <ProseP>{plaza.exists.intro}</ProseP>
          <div
            role="region"
            aria-label="Comparison of existing tools, scrolls sideways on small screens"
            tabIndex={0}
            className="overflow-x-auto rounded-[14px] border border-rule bg-card"
          >
            <table className="w-full min-w-[560px] border-collapse text-left text-sm leading-[1.5]">
              <thead>
                <tr className="border-b border-rule">
                  {plaza.exists.columns.map((c) => (
                    <th key={c} scope="col" className="px-4 py-3 text-xs font-medium text-muted">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plaza.exists.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-rule align-top last:border-b-0">
                    <th scope="row" className="px-4 py-3 font-medium">
                      {row[0]}
                    </th>
                    <td className="px-4 py-3 text-[#3f3b34]">{row[1]}</td>
                    <td className="px-4 py-3 text-[#3f3b34]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ProseP>{plaza.exists.outro}</ProseP>
        </ProseSection>

        <ProseSection heading={plaza.people.label}>
          <H3>{plaza.people.heading}</H3>
          <div className="grid grid-cols-1 gap-3.5 min-[560px]:grid-cols-2">
            {plaza.people.cards.map((c) => (
              <div key={c.title} className={cardClass}>
                <CardTitle>{c.title}</CardTitle>
                <CardBody>{c.body}</CardBody>
              </div>
            ))}
          </div>
          <p className="max-w-[54ch] text-[13px] leading-relaxed text-muted">{plaza.people.note}</p>
        </ProseSection>

        <ProseSection heading={plaza.directions.label}>
          <H3>{plaza.directions.heading}</H3>
          <ProseP>{plaza.directions.intro}</ProseP>
          <div className="grid grid-cols-1 gap-3.5 min-[560px]:grid-cols-3">
            {plaza.directions.cards.map((c) => (
              <div
                key={c.title}
                className={`${cardClass} ${"chosen" in c && c.chosen ? "border-ink/60" : ""}`}
              >
                <p className="text-xs text-muted">{c.tag}</p>
                <div className="mt-1">
                  <CardTitle>{c.title}</CardTitle>
                </div>
                <CardBody>{c.body}</CardBody>
              </div>
            ))}
          </div>
          <ProseP>{plaza.directions.outro}</ProseP>
        </ProseSection>

        <ProseSection heading={plaza.decisions.label}>
          <H3>{plaza.decisions.heading}</H3>
          <ul className={listClass}>
            {plaza.decisions.items.map((item) => (
              <li key={item.lead}>
                <strong className="font-display font-semibold text-ink">{item.lead}</strong>{" "}
                {item.body}
              </li>
            ))}
          </ul>
        </ProseSection>

        <ProseSection heading={plaza.review.label}>
          <H3>{plaza.review.heading}</H3>
          <ProseP>{plaza.review.intro}</ProseP>
          <ul className={listClass}>
            {plaza.review.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ProseSection>

        <ProseSection heading={plaza.screens.label} id="screens">
          <H3>{plaza.screens.heading}</H3>
          {/* Breakout, same width as the other case studies' screens. */}
          <div className="ml-[50%] w-[min(1060px,calc(100vw-32px))] -translate-x-1/2 space-y-7 py-2">
            <PlazaFigure
              wide
              file={plaza.screens.building.file}
              alt={plaza.screens.building.alt}
              caption={plaza.screens.building.caption}
            />
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              {plaza.screens.grid.map((s) => (
                <PlazaFigure key={s.file} file={s.file} alt={s.alt} caption={s.caption} />
              ))}
            </div>
          </div>
          <ProseP>
            {/* A plain anchor on purpose: this is a static file, not a Next route. */}
            <a
              href={plaza.prototypeHref}
              className="text-accent underline underline-offset-[3px] hover:decoration-2"
            >
              {plaza.screens.linkText}
            </a>
            . {plaza.screens.afterLink}
          </ProseP>
        </ProseSection>

        <ProseSection heading={plaza.limits.label}>
          <H3>{plaza.limits.heading}</H3>
          <ul className={listClass}>
            {plaza.limits.items.map((item) => (
              <li key={item.body}>
                {"lead" in item ? (
                  <strong className="font-display font-semibold text-ink">{item.lead}</strong>
                ) : null}
                {"lead" in item ? " " : null}
                {item.body}
              </li>
            ))}
          </ul>
        </ProseSection>

        <ProseSection heading={plaza.sources.label} className="pb-6 md:pb-6">
          <ul className="max-w-[54ch] list-disc space-y-1.5 pl-5 text-[15px] leading-[1.55] text-muted marker:text-muted">
            {plaza.sources.items.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink underline underline-offset-[3px] hover:decoration-2"
                >
                  {s.text}
                </a>
              </li>
            ))}
          </ul>
        </ProseSection>
      </main>

      <SiteFooter />
    </>
  );
}
