import { closeSync, existsSync, openSync, readSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";

const SCREENS_DIR = "projects/plaza-board/screens";

/** Width and height from a PNG's IHDR chunk, or null if the file is absent or not a PNG. */
function pngSize(file: string): { width: number; height: number } | null {
  const full = path.join(process.cwd(), "public", SCREENS_DIR, file);
  if (!existsSync(full)) return null;
  const buf = Buffer.alloc(24);
  const fd = openSync(full, "r");
  try {
    readSync(fd, buf, 0, 24, 0);
  } finally {
    closeSync(fd);
  }
  if (buf.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

/**
 * One Plaza Board screenshot. Until the PNG exists in
 * public/projects/plaza-board/screens/ it shows a dashed placeholder
 * instead of a broken image. Checked when the page renders.
 */
export function PlazaFigure({
  file,
  alt,
  caption,
  wide = false,
}: {
  wide?: boolean;
  file: string;
  alt: string;
  caption: ReactNode;
}) {
  const size = pngSize(file);
  return (
    <figure>
      {size ? (
        <Image
          src={`/${SCREENS_DIR}/${file}`}
          alt={alt}
          width={size.width}
          height={size.height}
          sizes={
            wide
              ? "(min-width: 1092px) 1060px, 100vw"
              : "(min-width: 1092px) 520px, (min-width: 640px) 50vw, 100vw"
          }
          className="block h-auto w-full rounded-xl border border-rule"
        />
      ) : (
        <div
          role="img"
          aria-label={`Screenshot not added yet: ${alt}`}
          className="grid min-h-[240px] place-items-center rounded-xl border border-dashed border-ink/50 bg-card px-5 text-center text-[13px] text-muted"
        >
          Add screenshot: screens/{file}
        </div>
      )}
      <figcaption className="mt-2 max-w-[54ch] text-[13px] leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
