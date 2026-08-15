import Link from "next/link";
import { Container, Eyebrow, Rule } from "@/components/primitives";
import { identity, social } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Rule />
      <Container>
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl leading-none tracking-[-0.02em]">
              {identity.name}
            </p>
            <Eyebrow className="mt-3 text-ink/45">
              {identity.title} — {identity.location}
            </Eyebrow>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {social.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-ink/60 underline decoration-ink/25 underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink motion-reduce:transition-none"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
