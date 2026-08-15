import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { identity } from "@/lib/site";

/**
 * PLACEHOLDER TYPE STACK.
 * One tight neo-grotesque at display sizes with true italics for hero emphasis.
 * Swap both families here once the exact family/weights are pulled from the
 * live site's computed styles — nothing else in the codebase names a font.
 */
const displayFace = Inter_Tight({
  variable: "--font-display-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFace = Inter({
  variable: "--font-sans-face",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${identity.name} — Product Designer & Builder`,
  description:
    "Adams Oche is a product designer and builder in Abuja, Nigeria. Storefront and checkout software for independent music producers, squad management for amateur football teams, and a personal finance concept.",
  openGraph: {
    title: `${identity.name} — Product Designer & Builder`,
    description:
      "Product design taken through to working software. Selected work: Sono, Matchday and Stash.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFace.variable} ${sansFace.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
