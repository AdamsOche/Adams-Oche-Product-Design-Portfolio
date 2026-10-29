import Link from "next/link";
import { nav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[752px] items-center justify-end gap-4 px-4 min-[560px]:gap-[22px]"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[13px] text-muted transition-colors duration-200 hover:text-ink motion-reduce:transition-none ${
              item.label === "About" ? "hidden min-[560px]:inline" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="rounded-full bg-ink px-4 py-[9px] text-[13px] font-medium leading-normal text-paper transition-colors duration-200 hover:bg-[#38342d] motion-reduce:transition-none"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
