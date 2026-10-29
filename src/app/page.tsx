import Image from "next/image";
import Link from "next/link";
import { ProjectCard, cardClass } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ConceptBadge, Container, Rule, SectionPill, TagList } from "@/components/primitives";
import { brandWork, contact, identity, projects, social, stack } from "@/lib/site";

const heroLinks = ["Behance", "LinkedIn", "X", "Email"] as const;

const bodyText = "max-w-[52ch] font-serif text-lg leading-[1.6] text-[#3f3b34]";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ---------------------------------------------------------------- Intro */}
        <Container>
          <section className="pt-11">
            <div className="grid grid-cols-[84px_1fr] items-center gap-[18px] min-[560px]:grid-cols-[112px_1fr] min-[560px]:gap-7">
              <Image
                src="/profile-pic.png"
                alt="An illustrated portrait of Adams Oche."
                width={400}
                height={400}
                priority
                className="h-[84px] w-[84px] rounded-full bg-card min-[560px]:h-28 min-[560px]:w-28"
              />
              <div>
                <p className="text-[clamp(1.5rem,4vw,2rem)] font-medium leading-none tracking-[-0.03em]">
                  {identity.name}
                </p>
                <p className="mt-2.5 text-[13px] text-muted">{identity.title}</p>
              </div>
            </div>

            <h1 className="mt-9 max-w-[16ch] font-display text-[clamp(2.1rem,6.4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.04em]">
              I design products and{" "}
              <em className="font-serif font-normal italic">build</em> them.
            </h1>

            <p className="mt-[22px] max-w-[46ch] font-serif text-[19px] leading-normal text-[#4a463e]">
              I&rsquo;m Adams, a product designer and builder in Abuja. I work on
              digital products from the first idea through interface design and
              implementation.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {heroLinks.map((label) => {
                const item = social.find((s) => s.label === label)!;
                const external = item.href.startsWith("http");
                return (
                  <li key={label}>
                    <Link
                      href={item.href}
                      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                      className="inline-flex items-center rounded-full border border-rule bg-card px-3.5 py-[7px] text-[13px] transition-colors hover:border-ink motion-reduce:transition-none"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </Container>

        <Rule className="mt-14" />

        {/* ------------------------------------------------------------------ Work */}
        <Container>
          <section id="work" className="pt-10">
            <SectionPill className="mb-5">Work</SectionPill>
            <p className="mb-[22px] max-w-[50ch] font-serif text-[17px] text-[#4a463e]">
              Four products I&rsquo;ve designed and built.
            </p>
            <div className="flex flex-col gap-5">
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} priority={i === 0} />
              ))}
            </div>
          </section>
        </Container>

        <Rule className="mt-14" />

        {/* ----------------------------------------------------------------- Brand */}
        <Container>
          <section id="brand" className="pt-10">
            <SectionPill className="mb-5">Brand and identity</SectionPill>
            <div className="flex flex-col gap-5">
              {brandWork.map((work) => (
                <Link key={work.slug} href={work.href} className={cardClass}>
                  <div className="relative">
                    {work.conceptMockup ? <ConceptBadge /> : null}
                    <div className={work.images.length > 1 ? "grid grid-cols-2" : ""}>
                      {work.images.map((img) => (
                        <Image
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          sizes="(min-width: 768px) 360px, 50vw"
                          className={`block w-full ${work.images.length > 1 ? "aspect-square object-cover" : "h-auto"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-[18px]">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-xl font-medium tracking-[-0.02em]">{work.name}</h3>
                      <span className="rounded-full border border-rule px-2.5 py-0.5 text-xs text-muted">
                        {work.chip}
                      </span>
                    </div>
                    <p className="mt-2 font-serif text-base leading-normal text-[#4a463e]">
                      {work.oneLiner}
                    </p>
                    <TagList tags={work.tags} />
                    <span className="mt-3.5 block text-[13px] font-medium text-accent">
                      Read the case study <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href={contact.behance}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-[18px] inline-block text-[13px] text-accent hover:underline"
            >
              All brand work on Behance <span aria-hidden="true">&rarr;</span>
            </Link>
          </section>
        </Container>

        <Rule className="mt-14" />

        {/* ----------------------------------------------------------------- About */}
        <Container>
          <section id="about" className="pt-10">
            <SectionPill className="mb-5">About</SectionPill>
            <div className="space-y-4">
              <p className={bodyText}>
                I&rsquo;m a product designer and builder based in Abuja. I work
                across product design and frontend development, from figuring out
                what a product needs to building the interface.
              </p>
              <p className={bodyText}>
                I use Figma to explore and refine ideas, then build and test them
                to see how they work beyond the design file.
              </p>
            </div>
          </section>
        </Container>

        <Rule className="mt-14" />

        {/* ------------------------------------------------------------------ Stack */}
        <Container>
          <section id="stack" className="space-y-6 pt-10">
            <div>
              <SectionPill className="mb-3.5">Stack</SectionPill>
              <p className="font-serif text-[17px] text-[#4a463e]">{stack.tools.join(" · ")}</p>
            </div>
            <div>
              <SectionPill className="mb-3.5">Disciplines</SectionPill>
              <p className="font-serif text-[17px] text-[#4a463e]">
                {stack.disciplines.join(" · ")}
              </p>
            </div>
          </section>
        </Container>

        <Rule className="mt-14" />

        {/* ------------------------------------------------------- Outside work */}
        <Container>
          <section id="outside-work" className="pt-10">
            <SectionPill className="mb-5">A few things I care about</SectionPill>
            <div className="space-y-4">
              <p className={bodyText}>
                I&rsquo;ve been running since 2019, and it&rsquo;s become one of the
                things I genuinely enjoy making time for.
              </p>
              <p className={bodyText}>
                I love playing football and follow Arsenal far too closely. When
                I&rsquo;m not doing either, I&rsquo;m probably playing Call of Duty
                or an adventure game.
              </p>
              <p className={bodyText}>
                Somewhere in between all of that, I&rsquo;m usually building something too.
              </p>
            </div>
          </section>
        </Container>

        <Rule className="mt-14" />

        {/* --------------------------------------------------------------- Contact */}
        <Container>
          <section id="contact" className="pt-10">
            <div className="flex flex-wrap items-center gap-[18px] rounded-[14px] border border-rule bg-card px-5 py-[18px] shadow-[0_1px_2px_rgba(26,24,20,.04),0_8px_24px_-16px_rgba(26,24,20,.18)]">
              <Image
                src="/profile-pic.png"
                alt=""
                width={112}
                height={112}
                className="h-14 w-14 flex-none rounded-full"
              />
              <div className="min-w-[200px] flex-1">
                <h2 className="text-base font-medium">Let&rsquo;s talk.</h2>
                <p className="mt-0.5 font-serif text-[15px] text-[#4a463e]">
                  Open to product design roles, product teams, and interesting freelance work.
                </p>
              </div>
              <Link
                href={`mailto:${contact.email}`}
                className="whitespace-nowrap rounded-full bg-ink px-[18px] py-2.5 text-[13px] font-medium text-paper transition-colors hover:bg-[#38342d] motion-reduce:transition-none"
              >
                Email me
              </Link>
            </div>
            <p className="mt-3.5 text-[13px] font-medium text-ink">{contact.email}</p>
          </section>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
