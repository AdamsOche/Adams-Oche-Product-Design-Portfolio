import Link from "next/link";
import { ProjectRow } from "@/components/ProjectRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Container, Eyebrow, Pill, Rule, TwoCol } from "@/components/primitives";
import { contact, process, projects, services, social } from "@/lib/site";

const heroCategories = ["Product design", "Build in code", "Design systems"];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ---------------------------------------------------------------- Hero */}
        <section className="pt-20 pb-20 md:pt-28 md:pb-28">
          <Container>
            <Eyebrow className="text-ink/45">
              {heroCategories.join("  /  ")}
            </Eyebrow>

            <h1 className="mt-10 max-w-[16ch] font-display text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.94] tracking-[-0.04em]">
              I design products, then <em className="italic">build</em> them.
            </h1>

            <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-6">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  I&rsquo;m Adams Oche, a product designer and builder in Abuja. I take
                  work from framing the problem through interface and design system to a
                  product that actually runs &mdash; writing real source code with AI
                  coding agents rather than handing off a file and hoping.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Pill href="#work">See selected work</Pill>
                  <Pill href={`mailto:${contact.email}`} variant="secondary">
                    Email me
                  </Pill>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Rule />

        {/* ---------------------------------------------------------- Selected work */}
        <section id="work" className="scroll-mt-24">
          <Container>
            <div className="py-16 md:py-20">
              <TwoCol heading="Selected work" eyebrow="01 / Work">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  Three products, each carried from the problem through to something you
                  can open. Two of them run; the third is a design and frontend concept,
                  and is labelled as one.
                </p>
              </TwoCol>
            </div>
          </Container>

          {projects.map((project) => (
            <div key={project.slug}>
              <Rule />
              <ProjectRow project={project} />
            </div>
          ))}
        </section>

        <Rule />

        {/* ------------------------------------------------------------- What I do */}
        <section id="services" className="scroll-mt-24">
          <Container>
            <div className="py-16 md:py-20">
              <TwoCol heading="What I do" eyebrow="02 / Services">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  More than just screens. The useful part is moving between product
                  thinking, interface design and the code that makes it real &mdash;
                  because the seams between those three are where products usually break.
                </p>
              </TwoCol>

              <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
                {services.map((service) => (
                  <div key={service.label} className="border-t border-rule pt-6">
                    <Eyebrow className="text-ink/45">{service.label}</Eyebrow>
                    <p className="mt-5 max-w-[46ch] leading-relaxed text-ink/70">
                      {service.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Rule />

        {/* --------------------------------------------------------------- Process */}
        <section id="process" className="scroll-mt-24">
          <Container>
            <div className="py-16 md:py-20">
              <TwoCol heading="How the work goes" eyebrow="03 / Process">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  Four steps, in this order, on every project. The last one is the part
                  most portfolios leave out.
                </p>
              </TwoCol>

              <ol className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                {process.map((step) => (
                  <li key={step.number} className="border-t border-rule pt-6">
                    <Eyebrow className="text-ink/45">
                      {step.number} &mdash; {step.label}
                    </Eyebrow>
                    <p className="mt-5 max-w-[42ch] text-[0.9375rem] leading-relaxed text-ink/70">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <Rule />

        {/* ----------------------------------------------------------------- About */}
        <section id="about" className="scroll-mt-24">
          <Container>
            <div className="py-16 md:py-20">
              <TwoCol heading="About" eyebrow="04 / About">
                <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed text-ink/70">
                  <p>
                    I&rsquo;m Adams, a product designer and builder based in Nigeria. I
                    work across product thinking, interface design and the source code
                    underneath &mdash; planning docs and design systems on one end, a
                    Supabase schema and a payment flow on the other.
                  </p>
                  <p>
                    That range is deliberate. Building a design is the fastest way to find
                    out which parts of it were only true in Figma: the state you forgot,
                    the table that&rsquo;s unreadable at column width, the checkout that
                    quietly does the wrong thing while its test still passes.
                  </p>
                  <p>Based in Abuja, working with teams anywhere.</p>
                </div>
              </TwoCol>
            </div>
          </Container>
        </section>

        <Rule />

        {/* --------------------------------------------------------------- Contact */}
        <section id="contact" className="scroll-mt-24">
          <Container>
            <div className="py-20 md:py-28">
              <TwoCol heading={<>Let&rsquo;s talk.</>} eyebrow="05 / Contact">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  Open to product design roles and freelance work. The fastest way to
                  reach me is email.
                </p>

                <Link
                  href={`mailto:${contact.email}`}
                  className="mt-10 block font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.03em] underline decoration-ink/25 underline-offset-[0.15em] transition-colors duration-200 hover:decoration-ink motion-reduce:transition-none"
                >
                  {contact.email}
                </Link>

                <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
                  {social
                    .filter((item) => item.label !== "Email")
                    .map((item) => (
                      <li key={item.label} className="border-t border-rule pt-5">
                        <Eyebrow className="text-ink/45">{item.label}</Eyebrow>
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-3 inline-flex items-center gap-2 text-[0.9375rem] underline decoration-ink/25 underline-offset-4 transition-colors duration-200 hover:decoration-ink motion-reduce:transition-none"
                        >
                          {item.value}
                          <span aria-hidden="true">&#8599;</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </TwoCol>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
