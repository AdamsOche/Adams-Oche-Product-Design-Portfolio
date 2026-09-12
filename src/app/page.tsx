import Image from "next/image";
import Link from "next/link";
import { ProjectRow } from "@/components/ProjectRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Container, Eyebrow, Pill, Rule, TwoCol } from "@/components/primitives";
import { contact, projects, social, stack } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ---------------------------------------------------------------- Hero */}
        <section className="pt-20 pb-20 md:pt-28 md:pb-28">
          <Container>
            <h1 className="max-w-[16ch] font-display text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.94] tracking-[-0.04em]">
              I design products, and <em className="italic">build</em> them.
            </h1>

            <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
              <div className="md:col-span-7 md:col-start-6 space-y-5">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  I&rsquo;m Adams, a product designer and builder in Abuja. I take
                  products from the first problem to the interface, the system
                  underneath, and a working build.
                </p>
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  Three products so far: Sono, checkout software for music producers;
                  Matchday, a squad tool used by real football coaches; and Stash, a
                  finance concept.
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
              <TwoCol heading="Selected work" eyebrow="Work">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  Three products. The first one I designed twice, because the first
                  version was wrong.
                </p>
              </TwoCol>
            </div>
          </Container>

          {projects.map((project, i) => (
            <div key={project.slug}>
              <Rule />
              <ProjectRow project={project} reversed={i % 2 === 1} />
            </div>
          ))}
        </section>

        <Rule />

        {/* ---------------------------------------------------------------- Stack */}
        <section id="stack" className="scroll-mt-24">
          <Container>
            <div className="py-10 md:py-12">
              <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-12">
                <div className="md:col-span-5 lg:col-span-4">
                  <Eyebrow>Stack</Eyebrow>
                </div>
                <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
                  <p className="text-[0.9375rem] leading-relaxed text-ink/70">
                    {stack.tools.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-12">
                <div className="md:col-span-5 lg:col-span-4">
                  <Eyebrow>Disciplines</Eyebrow>
                </div>
                <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
                  <p className="text-[0.9375rem] leading-relaxed text-ink/70">
                    {stack.disciplines.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Rule />

        {/* ----------------------------------------------------------------- About */}
        <section id="about" className="scroll-mt-24">
          <Container>
            <div className="py-16 md:py-20">
              <TwoCol
                heading="About"
                media={
                  <Image
                    src="/profile-pic.png"
                    alt="An illustrated portrait of Adams Oche."
                    width={400}
                    height={400}
                    className="h-20 w-20 rounded-full sm:h-24 sm:w-24"
                  />
                }
              >
                <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed text-ink/70">
                  <p>
                    I&rsquo;m a product designer and builder based in Abuja. I like
                    figuring out what a product needs, designing how it should work, and
                    then building it into something people can actually use.
                  </p>
                  <p>
                    Building has become a big part of how I design. It&rsquo;s easy for
                    something to make sense in Figma. Building and testing it is usually
                    where you find out whether it actually makes sense.
                  </p>
                </div>
              </TwoCol>
            </div>
          </Container>
        </section>

        <Rule />

        {/* ------------------------------------------------------ Outside work */}
        <section id="outside-work" className="scroll-mt-24">
          <Container>
            <div className="py-14 md:py-16">
              <div className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-12">
                <div className="md:col-span-5 lg:col-span-4">
                  <Eyebrow>A few things I care about</Eyebrow>
                </div>
                <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6 space-y-4 text-[0.9375rem] leading-relaxed text-ink/70">
                  <p>
                    I&rsquo;ve been running since 2019, and it&rsquo;s become one of the
                    things I genuinely enjoy making time for.
                  </p>
                  <p>
                    I love playing football and follow Arsenal far too closely. When
                    I&rsquo;m not doing either, I&rsquo;m probably playing Call of Duty
                    or an adventure game.
                  </p>
                  <p>Somewhere in between all of that, I&rsquo;m usually building something too.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Rule />

        {/* --------------------------------------------------------------- Contact */}
        <section id="contact" className="scroll-mt-24">
          <Container>
            <div className="py-20 md:py-28">
              <TwoCol heading={<>Let&rsquo;s talk.</>} eyebrow="Contact">
                <p className="max-w-[62ch] text-lg leading-relaxed text-ink/70">
                  Open to product design roles, product teams, and interesting
                  freelance work.
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
                        <Eyebrow>{item.label}</Eyebrow>
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
