import type { Metadata } from "next";
import { Inter_Tight, Newsreader } from "next/font/google";
import "./globals.css";
import { identity } from "@/lib/site";

const displayFace = Inter_Tight({
  variable: "--font-display-face",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const serifFace = Newsreader({
  variable: "--font-serif-face",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adamsoche.netlify.app"),
  title: `${identity.name} · ${identity.title}`,
  description:
    "Adams Oche is a product designer and builder in Abuja, Nigeria. Storefront and checkout software for independent music producers, squad management for amateur football teams, and concepts for personal finance and weekend planning.",
  openGraph: {
    title: `${identity.name} · ${identity.title}`,
    description:
      "Product designer and builder in Abuja. Selected work: Sono, Matchday, Stash and WKND.",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displayFace.variable} ${serifFace.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
