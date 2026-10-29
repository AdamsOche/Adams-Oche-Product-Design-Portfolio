import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Container } from "@/components/primitives";
import { books } from "@/lib/books";

export const metadata: Metadata = {
  title: "Bookshelf · Adams Oche",
  description: "Bookshelf. Adams Oche.",
  openGraph: {
    title: "Bookshelf · Adams Oche",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Adams Oche, Product Designer · Builder",
        type: "image/png",
      },
    ],
  },
};

const tile =
  "relative aspect-[2/3] overflow-hidden rounded-[3px_6px_6px_3px] shadow-[0_6px_10px_-6px_rgba(26,24,20,.5)]";

export default function Bookshelf() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <Container>
          <div className="pb-8 pt-5">
            <Link href="/" className="text-[13px] text-muted transition-colors hover:text-ink">
              <span aria-hidden="true">&larr;</span> Home
            </Link>
            <h1 className="mt-[18px] font-display text-[clamp(2.2rem,7vw,3.4rem)] font-medium leading-none tracking-[-0.035em]">
              Bookshelf
            </h1>

            <ul className="mt-7 grid grid-cols-3 gap-x-3 gap-y-[22px] min-[560px]:grid-cols-6">
              {books.map((book) => (
                <li key={book.title}>
                  {book.cover ? (
                    <div className={tile}>
                      <Image
                        src={book.cover}
                        alt={`${book.title}, by ${book.author}`}
                        width={360}
                        height={540}
                        sizes="(min-width: 560px) 110px, 30vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      role="img"
                      aria-label={`${book.title}, by ${book.author}`}
                      className={`${tile} flex flex-col justify-between px-2 py-2.5 shadow-[inset_3px_0_0_rgba(0,0,0,.25),0_6px_10px_-6px_rgba(26,24,20,.5)]`}
                      style={{ backgroundColor: book.bg, color: book.fg }}
                    >
                      <span className="text-[clamp(10px,1.7vw,13px)] font-semibold leading-[1.1] tracking-[-0.01em] [overflow-wrap:anywhere]">
                        {book.title}
                      </span>
                      <span className="text-[clamp(8px,1.2vw,10px)] opacity-85">{book.author}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
