import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/primitives";
import type { Project } from "@/lib/site";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article>
      <Container>
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5 lg:col-span-4">
            <Eyebrow className="text-ink/45">
              {project.index} / {project.name.toUpperCase()}
            </Eyebrow>
            <h3 className="mt-6 font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              {project.name}
            </h3>
          </div>

          <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
            <p className="max-w-[36ch] font-display text-2xl leading-[1.2] tracking-[-0.02em] sm:text-[1.75rem]">
              {project.oneLiner}
            </p>

            {project.status ? (
              <p className="mt-6 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink/60">
                {project.status}
              </p>
            ) : null}

            <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-ink/20 px-3.5 py-1.5 text-xs leading-none text-ink/65"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <Link
              href={project.href}
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium"
            >
              <span className="underline decoration-ink/30 underline-offset-4 transition-colors duration-200 group-hover:decoration-ink motion-reduce:transition-none">
                Read the case study
              </span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Images break out of the text measure — the product supplies the colour. */}
      <Container>
        <div className="pb-16 md:pb-20">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={2400}
              height={1500}
              className="h-auto w-full rounded-xl"
              sizes="(min-width: 768px) 90vw, 100vw"
              priority={project.index === "01"}
            />
          ) : (
            <div
              role="presentation"
              className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-ink/20 bg-paper-sunk"
            >
              <Eyebrow className="text-ink/35">
                {project.name} screenshot — pending capture
              </Eyebrow>
            </div>
          )}
        </div>
      </Container>
    </article>
  );
}
