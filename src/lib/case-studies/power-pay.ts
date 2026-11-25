/**
 * Power Pay case-study copy. A concept, not a live product.
 * The per-screen copy lives in components/case-study/PowerPayScreens.tsx.
 * The prototype link is a placeholder until there is a public URL:
 * set prototypeHref below and pass it to <PowerPayScreens prototypeUrl=... />.
 */
export const powerPay = {
  /** null = no prototype yet. The page shows a "coming soon" line, not a dead link. */
  prototypeHref: null as string | null,

  hero: {
    tag: "Case study · Concept project",
    title: "Power Pay: buy power, and it loads itself",
    standfirst:
      "A concept app that sends prepaid electricity units straight into your meter, so there is no token to copy and nothing to type into the box.",
    meta: [
      { label: "Type", value: "Concept, not a live product" },
      { label: "Scope", value: "Product design, 28 screens in five flows" },
      { label: "Platform", value: "Mobile app" },
      { label: "Data", value: "Sample meters, names and amounts" },
    ],
  },

  note: {
    label: "Read this first",
    body: "This is a concept I designed myself. It is not a live product and it is not connected to a real meter or payment provider. The meter numbers, names and naira amounts in the screens are sample data.",
  },

  screens: {
    label: "Screens",
    heading: "28 screens, five flows",
    intro:
      "Each screen has a short note on why it is the way it is. Tap a phone to see it larger.",
  },

  prototype: {
    label: "Prototype",
    placeholder: "The interactive prototype link is coming soon.",
  },
} as const;
