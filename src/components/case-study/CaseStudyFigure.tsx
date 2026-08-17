import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/primitives";

type ImageSpec = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Case-study images intentionally break out of the narrow prose measure —
 * dense screens are unreadable at column width. `width`/`max` cap how wide
 * the figure runs inside the page container; a full storefront shot can go
 * near the container's edge, a 3-up grid usually wants less.
 */
export function CaseStudyFigure({
  image,
  caption,
  priority = false,
  max = "1200px",
}: {
  image: ImageSpec;
  caption?: ReactNode;
  priority?: boolean;
  max?: string;
}) {
  return (
    <Container>
      <figure className="py-6 md:py-8" style={{ maxWidth: max, marginInline: "auto" }}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-auto w-full rounded-xl border border-rule"
          sizes="(min-width: 1200px) 1200px, 92vw"
          priority={priority}
        />
        {caption ? (
          <figcaption className="mx-auto mt-4 max-w-[62ch] text-sm leading-relaxed text-ink/55">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Container>
  );
}

/** Two or three images side by side, still capped to the same breakout width. */
export function CaseStudyFigureGrid({
  images,
  caption,
  max = "1200px",
}: {
  images: ImageSpec[];
  caption?: ReactNode;
  max?: string;
}) {
  return (
    <Container>
      <figure className="py-6 md:py-8" style={{ maxWidth: max, marginInline: "auto" }}>
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
              className="h-auto w-full rounded-xl border border-rule"
              sizes="(min-width: 1200px) 400px, 92vw"
            />
          ))}
        </div>
        {caption ? (
          <figcaption className="mx-auto mt-4 max-w-[62ch] text-sm leading-relaxed text-ink/55">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Container>
  );
}
