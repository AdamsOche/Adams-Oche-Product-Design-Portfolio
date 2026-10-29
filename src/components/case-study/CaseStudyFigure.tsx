import Image from "next/image";
import type { ReactNode } from "react";
import { ConceptBadge, Container } from "@/components/primitives";

type ImageSpec = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Screens break out of the 720px column. The transform leaves the box in
 * flow, so height is preserved; the page clips the sideways overflow.
 */
const breakout = "ml-[50%] w-[min(1060px,calc(100vw-32px))] -translate-x-1/2";

const captionClass = "mt-2 text-[13px] leading-relaxed text-muted";

const imageClass = "h-auto w-full rounded-xl border border-rule";

/** `max` is kept for call-site compatibility; the breakout width is fixed by the design. */
export function CaseStudyFigure({
  image,
  caption,
  priority = false,
}: {
  image: ImageSpec;
  caption?: ReactNode;
  priority?: boolean;
  max?: string;
}) {
  return (
    <Container>
      <figure className={`my-4 md:my-5 ${breakout}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={imageClass}
          sizes="(min-width: 1092px) 1060px, 100vw"
          priority={priority}
        />
        {caption ? <figcaption className={captionClass}>{caption}</figcaption> : null}
      </figure>
    </Container>
  );
}

/** Two or three images side by side, on the same breakout width. */
export function CaseStudyFigureGrid({
  images,
  caption,
}: {
  images: ImageSpec[];
  caption?: ReactNode;
  max?: string;
}) {
  return (
    <Container>
      <figure className={`my-4 md:my-5 ${breakout}`}>
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${images.length >= 3 ? "lg:grid-cols-3" : ""}`}
        >
          {images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={imageClass}
              sizes="(min-width: 1092px) 340px, 92vw"
            />
          ))}
        </div>
        {caption ? <figcaption className={captionClass}>{caption}</figcaption> : null}
      </figure>
    </Container>
  );
}

/** A square image held to the 720px column, optionally badged as a concept mockup. */
export function ColumnFigure({
  image,
  caption,
  badge = false,
  priority = false,
  className = "",
}: {
  image: ImageSpec;
  caption?: ReactNode;
  badge?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative">
        {badge ? <ConceptBadge /> : null}
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={imageClass}
          sizes="(min-width: 768px) 720px, 100vw"
          priority={priority}
        />
      </div>
      {caption ? <figcaption className={captionClass}>{caption}</figcaption> : null}
    </figure>
  );
}
