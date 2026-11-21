import Image from "next/image";
import { ProseItem, ProseP, ProseSection } from "@/components/case-study/Prose";
import { stashRedesign as r } from "@/lib/case-studies/stash-redesign";

/** Same breakout the other case-study figures use. */
const breakout = "ml-[50%] w-[min(1060px,calc(100vw-32px))] -translate-x-1/2";

const phoneImg = "block h-auto w-full rounded-xl border border-rule";

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-4 font-display text-xl tracking-[-0.02em]">{children}</h3>;
}

function Side({
  label,
  image,
}: {
  label: string;
  image: { src: string; width: number; height: number; alt: string };
}) {
  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <figcaption className="mb-2 text-[13px] text-muted">{label}</figcaption>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 560px) 300px, 80vw"
        className={phoneImg}
      />
    </figure>
  );
}

/** The redesign section, added below the original Stash case study. */
export function StashRedesign() {
  return (
    <ProseSection heading={r.heading} id="redesign">
      {r.brief.map((p) => (
        <ProseP key={p}>{p}</ProseP>
      ))}

      <SubHeading>{r.pairsHeading}</SubHeading>
      <div className="space-y-9 pt-2">
        {r.pairs.map((pair) => (
          <div key={pair.name}>
            <p className="mb-3 font-medium text-ink">{pair.name}</p>
            <div className="grid grid-cols-1 gap-6 min-[560px]:grid-cols-2">
              <Side label={r.beforeLabel} image={pair.before} />
              <Side label={r.afterLabel} image={pair.after} />
            </div>
          </div>
        ))}
      </div>

      <SubHeading>{r.addedHeading}</SubHeading>
      <ProseP>{r.addedIntro}</ProseP>
      <ul className={`${breakout} grid grid-cols-2 gap-x-4 gap-y-6 py-2 min-[560px]:grid-cols-4`}>
        {r.added.map((s) => (
          <li key={s.name}>
            <Image
              src={s.src}
              alt={s.alt}
              width={362}
              height={741}
              sizes="(min-width: 1092px) 200px, (min-width: 560px) 33vw, 50vw"
              className={phoneImg}
            />
            <p className="mt-2 text-[13px] text-muted">{s.name}</p>
          </li>
        ))}
      </ul>

      <SubHeading>{r.prototypeHeading}</SubHeading>
      <ProseP>{r.prototypeIntro}</ProseP>
      <div className={`${breakout} py-2`}>
        <iframe
          src={r.prototypeHref}
          title={r.prototypeTitle}
          loading="lazy"
          className="block h-[900px] w-full rounded-xl border border-rule bg-card"
        />
      </div>
      <p>
        {/* A plain anchor: this is a static file, not a Next route. */}
        <a
          href={r.prototypeHref}
          target="_blank"
          rel="noopener"
          className="text-[15px] text-accent underline underline-offset-[3px] hover:decoration-2"
        >
          {r.prototypeLinkText}
        </a>
      </p>

      <SubHeading>{r.changedHeading}</SubHeading>
      {r.changed.map((item) => (
        <ProseItem key={item.lead} lead={item.lead}>
          {item.body}
        </ProseItem>
      ))}
    </ProseSection>
  );
}
