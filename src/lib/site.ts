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
    image: "/work/sono-storefront.png",
    imageWidth: 1896,
    imageHeight: 877,
    imageAlt:
      "Sono's producer-facing site: a beat card showing Basic and Premium license tiers priced in naira.",
  },
  {
    index: "02",
    slug: "matchday",
    name: "Matchday",
    oneLiner:
      "Squad and lineup management for amateur football teams. Built for the ten minutes before kickoff, on a phone, at the side of a pitch.",
    tags: ["Product design", "Product build", "Supabase", "Design system"],
    status:
      "Two coaches tested it with their real squads. One of those tests exposed a formation bug that my own testing hadn't caught.",
    href: "/work/matchday",
    image: "/work/matchday-squad-overview.png",
    imageWidth: 1892,
    imageHeight: 872,
    imageAlt:
      "Matchday in dark mode: a squad overview with form ratings shown as single numbers and position colour running through the player list.",
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
