import Link from "next/link";
import { Container, Eyebrow } from "@/components/primitives";
import { contact, identity, nav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="group flex flex-col gap-1.5">
            <span className="font-display text-lg leading-none tracking-[-0.02em]">
              {identity.name}
            </span>
            <Eyebrow as="span" className="text-ink/45">
              {identity.title}
            </Eyebrow>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/60 transition-colors duration-200 hover:text-ink motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={`mailto:${contact.email}`}
            className="hidden shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-medium leading-none text-paper transition-colors duration-200 hover:bg-ink/85 motion-reduce:transition-none sm:inline-flex"
          >
            Get in touch
          </Link>

          <Link
            href="#contact"
            className="text-sm text-ink/60 transition-colors hover:text-ink motion-reduce:transition-none sm:hidden"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
