export const contact = {
  email: "adamsemma04@gmail.com",
  linkedin: "https://www.linkedin.com/in/adams-oche-aa5599250/",
  behance: "https://www.behance.net/adamsoche",
  x: "https://x.com/AdamsOche9",
} as const;

export const social = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: "adams-oche", href: contact.linkedin },
  { label: "Behance", value: "adamsoche", href: contact.behance },
  { label: "X", value: "@AdamsOche9", href: contact.x },
] as const;

export const identity = {
  name: "Adams Oche",
  title: "Product Designer · Builder",
  location: "Abuja, Nigeria",
} as const;

// Homepage-relative so these still resolve when clicked from a case study route.
export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Brand", href: "/#brand" },
  { label: "About", href: "/#about" },
  { label: "Bookshelf", href: "/bookshelf" },
] as const;

export type Project = {
  index: string;
  slug: string;
  name: string;
  oneLiner: string;
  /** Extra narrative paragraphs, rendered between the one-liner and tags. */
  detail?: string[];
  tags: string[];
  status?: string;
  href: string;
  /** Path under /public. Left null until a real capture is dropped in. */
  image: string | null;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  /** Optional small square logo mark, shown alongside the screenshot. */
  logoMark?: { src: string; width: number; height: number; alt: string };
  /** Tint behind the screenshot on the homepage card. Defaults to brandColor. */
  panelColor?: string;
  /** The product's own primary color, used for its "Visit" button. */
  brandColor: string;
  /** Text color for brandColor, chosen for WCAG AA contrast against it. */
  brandTextColor: string;
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "sono",
    name: "Sono",
    oneLiner:
      "Storefront and checkout software for independent music producers who want to sell beats directly to their audience.",
    detail: [
      "I first designed Sono as a place where buyers browse and search for beats. Then I spoke to a producer who had tried selling on BeatStars. He couldn't get noticed there, and a feed like that didn't suit someone who already had an audience.",
      "So I removed the feed, search and cart and rebuilt Sono around a single storefront link that the producer shares with their own audience.",
    ],
    tags: ["Product design", "Product build", "Checkout", "Design system"],
    status:
      "The demo supports the main storefront and checkout flows. Payments run in test mode.",
    href: "/work/sono",
    image: "/work/sono-home-dashboard.png",
    imageWidth: 1897,
    imageHeight: 880,
    imageAlt:
      "Sono's marketing homepage, with a producer's live dashboard card showing revenue, sales, downloads and recent orders.",
    logoMark: { src: "/work/sono-mark.png", width: 300, height: 300, alt: "The Sono logo mark." },
    brandColor: "#0e7490",
    brandTextColor: "#ffffff",
  },
  {
    index: "02",
    slug: "matchday",
    name: "Matchday",
    oneLiner:
      "A squad management tool that helps football coaches check player availability and organise their squad and lineup before a match.",
    tags: ["Product design", "Product build", "Formation builder", "Design system"],
    status:
      "Two coaches tested it with their real squads. Their feedback led to fixes for formations not saving and player availability not updating reliably.",
    href: "/work/matchday",
    image: "/work/matchday-squad-overview.png",
    imageWidth: 1892,
    imageHeight: 872,
    imageAlt:
      "Matchday in dark mode: a squad overview with form ratings shown as single numbers and position colour running through the player list.",
    logoMark: { src: "/work/matchday-mark.png", width: 300, height: 300, alt: "The Matchday logo mark." },
    brandColor: "#00cc6a",
    brandTextColor: "#14120f",
  },
  {
    index: "03",
    slug: "stash",
    name: "Stash",
    oneLiner:
      "A personal finance concept for young adults in West Africa, covering savings goals, group pools and sending money.",
    tags: ["Product design", "Brand identity", "Design system", "Next.js"],
    status:
      "Design and frontend concept built with Next.js. Uses mock data and has no live backend.",
    href: "/work/stash",
    image: "/work/stash-screens.png",
    imageWidth: 4603,
    imageHeight: 2508,
    imageAlt:
      "The Stash app laid out across 19 screens (onboarding, savings goals, transfers and group pools) in the deep indigo base, with the accent colour reserved for amounts.",
    // A touch deeper than the design system's #7B5CF6 swatch: that exact
    // shade sits just under 4.5:1 against white text, this clears it.
    // The indigo clashes with WKND's next to it, so the card panel is gold.
    panelColor: "#e9b949",
    brandColor: "#6d4fe0",
    brandTextColor: "#ffffff",
  },
  {
    index: "04",
    slug: "wknd",
    name: "WKND",
    oneLiner:
      "A mobile concept for finding things to do in Abuja and making plans with friends.",
    detail: [
      "I redesigned an event catalogue around planning the weekend: a home screen that changes through the week, invitations friends can answer from a web link, checkout, and sponsored offers.",
    ],
    tags: ["Product design", "Mobile", "User flows", "Design system"],
    status:
      "A concept across 44 screens and eight flows. Not launched, so the case study reports no results.",
    href: "/work/wknd",
    image: "/case-studies/wknd/wknd-week.png",
    imageWidth: 3080,
    imageHeight: 1472,
    imageAlt:
      "Four WKND screens: an empty Wednesday, a plan on Thursday, the Saturday list, and an event page with a Reserve button.",
    logoMark: { src: "/work/wknd-mark.png", width: 300, height: 300, alt: "The WKND logo mark." },
    brandColor: "#3629b7",
    brandTextColor: "#ffffff",
  },
];

export const stack = {
  tools: ["Figma", "Next.js", "TypeScript", "Supabase", "Tailwind", "Claude Code"],
  disciplines: [
    "Product design",
    "UI design",
    "Design systems",
    "Brand identity",
    "Frontend",
  ],
} as const;

export function getProject(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}

/** The project's hero screenshot on its panel colour, for the case-study header. */
export function heroImageFor(slug: string) {
  const p = getProject(slug);
  if (!p.image) return undefined;
  return {
    src: p.image,
    width: p.imageWidth,
    height: p.imageHeight,
    alt: p.imageAlt,
    color: p.panelColor ?? p.brandColor,
  };
}

export type BrandWork = {
  slug: string;
  name: string;
  chip: string;
  oneLiner: string;
  tags: string[];
  href: string;
  /** Images shown on the homepage card. */
  images: { src: string; alt: string; width: number; height: number }[];
  /** Kit images show a real sportswear logo, so they carry a "Concept mockup" badge. */
  conceptMockup?: boolean;
};

export const brandWork: BrandWork[] = [
  {
    slug: "praise-caffeine",
    name: "Praise Caffeine",
    chip: "Client work",
    oneLiner:
      "Logo and identity for a platform that gives BPOC gospel artists in Canada a place to worship freely.",
    tags: ["Logo", "Brand identity"],
    href: "/work/praise-caffeine",
    images: [
      { src: "/brand/pc-word.jpg", alt: "Praise Caffeine horizontal logo.", width: 1200, height: 1200 },
      {
        src: "/brand/pc-stamp-dark.jpg",
        alt: "Praise Caffeine circular stamp on a dark background.",
        width: 1200,
        height: 1200,
      },
    ],
  },
  {
    slug: "the-six-league",
    name: "The Six League",
    chip: "Independent concept",
    oneLiner: "A fictional football league built around the identity of five clubs.",
    tags: ["Brand identity", "Club crests", "Kit concepts"],
    href: "/work/the-six-league",
    conceptMockup: true,
    images: [
      {
        src: "/brand/six-sheet.jpg",
        alt: "The Six League identity sheet: a kit, the eagle crest, and a flag on dark green.",
        width: 1200,
        height: 1200,
      },
    ],
  },
];
