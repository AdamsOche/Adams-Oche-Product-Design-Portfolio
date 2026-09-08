import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/primitives";
import type { Project } from "@/lib/site";

export function ProjectRow({
  project,
  reversed = false,
}: {
  project: Project;
  /** Alternates the image to the left and text to the right. */
  reversed?: boolean;
}) {
  const textClass = reversed
    ? "md:col-span-5 md:col-start-8 md:order-2 lg:col-span-4 lg:col-start-9"
    : "md:col-span-5 md:col-start-1 md:order-1 lg:col-span-4";

  const imageClass = reversed
    ? "md:col-span-7 md:col-start-1 md:order-1"
    : "md:col-span-7 md:col-start-6 md:order-2";

  return (
    <article>
      <Container>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 py-16 md:grid-cols-12 md:items-center md:py-20">
          <div className={textClass}>
            <Eyebrow>
              {project.index} / {project.name.toUpperCase()}
            </Eyebrow>
            <h3 className="mt-6 font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-6 max-w-[34ch] font-display text-2xl leading-[1.2] tracking-[-0.02em] sm:text-[1.75rem]">
              {project.oneLiner}
            </p>

            {project.detail ? (
              <div className="mt-6 max-w-[42ch] space-y-4 text-[0.9375rem] leading-relaxed text-ink/70">
                {project.detail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {project.status ? (
              <p className="mt-6 max-w-[42ch] text-[0.9375rem] leading-relaxed text-ink/60">
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

          <div className={imageClass}>
            {project.logoMark ? (
              <Image
                src={project.logoMark.src}
                alt={project.logoMark.alt}
                width={project.logoMark.width}
                height={project.logoMark.height}
                className="mb-4 h-14 w-14 rounded-lg border border-rule sm:h-16 sm:w-16"
              />
            ) : null}
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                className="h-auto w-full rounded-xl border border-rule"
                sizes="(min-width: 1024px) 750px, (min-width: 768px) 56vw, 100vw"
                priority={project.index === "01"}
              />
            ) : (
              <div
                role="presentation"
                className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-ink/20 bg-paper-sunk"
              >
                <Eyebrow>{project.name} screenshot: pending capture</Eyebrow>
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}
