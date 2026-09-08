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
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
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
  /** The product's own primary color, used for its "Read the case study" button. */
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
      "I designed Sono as a browsable storefront first, open to anyone searching for beats. Then I spoke to a producer who had tried selling on BeatStars. He couldn't get noticed there, and that open, browse-and-discover model didn't make much sense for someone who already had an audience.",
      "So I scrapped the feed, search and cart and rebuilt the product around one thing: a producer sharing one link with their audience.",
    ],
    tags: ["Product design", "Product build", "Checkout", "Design system"],
    status:
      "Runs as a working demo on free infrastructure in Paystack test mode. Every screen works; only the currency isn't real.",
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
      "Squad and lineup management for amateur football teams. Built for the ten minutes before kickoff, on a phone, at the side of a pitch.",
    tags: ["Product design", "Product build", "Formation builder", "Design system"],
    status:
      "Built to handle every squad size a real team plays, from five-a-side to eleven.",
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
      "A personal finance concept for saving toward goals, sending money, and pooling funds with friends, designed for a Nigerian and Ghanaian context.",
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
    brandColor: "#6d4fe0",
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
