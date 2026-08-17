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
  { label: "What I do", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export type Project = {
  index: string;
  slug: string;
  name: string;
  oneLiner: string;
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
      "Storefront and checkout software for independent music producers to sell beats directly to their own audience.",
    tags: ["Product design", "Product build", "Checkout & licensing", "Design system"],
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
      "Squad and lineup management for amateur football teams — built for the ten minutes before kickoff, on a phone, at the side of a pitch.",
    tags: ["Product design", "Product build", "Supabase backend", "Design system"],
    status:
      "Tested live by two coaches with their real squads, one managing a 5-a-side team.",
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
      "A personal finance concept for saving toward goals, sending money, and pooling funds with friends — built for a Nigerian and Ghanaian context.",
    tags: ["Product design", "Brand identity", "Design system", "Next.js marketing site"],
    status:
      "A design and frontend concept on mock data — 19 app screens plus a marketing site built in Next.js. Not a live backend product.",
    href: "/work/stash",
    image: "/work/stash-screens.png",
    imageWidth: 4603,
    imageHeight: 2508,
    imageAlt:
      "The Stash app laid out across 19 screens — onboarding, savings goals, transfers and group pools — in the deep indigo base, with the accent colour reserved for amounts.",
  },
];

export const services = [
  {
    label: "Product design",
    body: "Problem framing, information architecture, interaction and interface design — down to the states nobody asks for until they're missing.",
  },
  {
    label: "Build in code",
    body: "Designs taken all the way to a working product in real source code, written with AI coding agents. Next.js, Tailwind, Supabase, Paystack — bugs root-caused rather than patched over.",
  },
  {
    label: "Design systems & identity",
    body: "Type scales, colour roles, components and brand marks, set up once so a product stays coherent as it grows past the first ten screens.",
  },
];

export const process = [
  {
    number: "01",
    label: "Understand",
    body: "Start with the situation the product actually lives in — a producer with an audience and no way to take payment, a coach picking a lineup ten minutes before kickoff. The constraint is the brief.",
  },
  {
    number: "02",
    label: "Decide",
    body: "Make the calls explicitly and write down why. Tap to swap instead of drag. One link instead of a catalog. Every decision is a trade, and the reasoning is worth more later than the outcome.",
  },
  {
    number: "03",
    label: "Build",
    body: "Take it into real code — schema, states, edge cases, the design system holding it together. Building it is what surfaces the parts of the design that were only true in Figma.",
  },
  {
    number: "04",
    label: "Catch and fix",
    body: "Check the thing itself, not the test that says it passed. A checkout that silently redirected, a security policy that read correctly and wasn't, a formation that didn't persist — all found by looking.",
  },
];
