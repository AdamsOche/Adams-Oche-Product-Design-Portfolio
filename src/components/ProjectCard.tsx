import Image from "next/image";
import Link from "next/link";
import { TagList } from "@/components/primitives";
import type { Project } from "@/lib/site";

export const cardClass =
  "block overflow-hidden rounded-[14px] border border-rule bg-card text-inherit no-underline shadow-[0_1px_2px_rgba(26,24,20,.04),0_8px_24px_-16px_rgba(26,24,20,.18)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-[3px] hover:shadow-[0_1px_2px_rgba(26,24,20,.05),0_16px_32px_-16px_rgba(26,24,20,.3)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={project.href} className={cardClass}>
      <div
        className="p-[clamp(16px,4vw,32px)]"
        style={{ backgroundColor: project.panelColor ?? project.brandColor }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            className="block h-auto w-full rounded-md"
            sizes="(min-width: 768px) 656px, 100vw"
            priority={priority}
          />
        ) : null}
      </div>
      <div className="px-5 pb-5 pt-[18px]">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-xl font-medium tracking-[-0.02em]">{project.name}</h3>
          <span className="text-[13px] font-medium text-accent">
            Read the case study <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
        <p className="mt-2 font-serif text-base leading-normal text-[#4a463e]">{project.oneLiner}</p>
        {project.status ? (
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{project.status}</p>
        ) : null}
        <TagList tags={project.tags} />
      </div>
    </Link>
  );
}
