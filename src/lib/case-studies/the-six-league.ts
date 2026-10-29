/**
 * The Six League case-study copy. The text is the owner's own. Every image
 * that shows a kit carries a "Concept mockup" badge, because the kit photos
 * show a real sportswear logo. No em dashes by design.
 */
export const theSixLeague = {
  hero: {
    title: "The Six League",
    standfirst: "A football league, built from the ground up.",
    meta: [
      { label: "Project type", value: "Independent concept project" },
      { label: "Role", value: "Brand identity and visual design" },
      {
        label: "Scope",
        value:
          "Brand identity, club crests, visual systems, football kit concepts, graphic patterns, flags, and kit detailing",
      },
    ],
  },

  hero_image: {
    src: "/brand/six-sheet.jpg",
    width: 1200,
    height: 1200,
    alt: "The Six League identity sheet: a kit, the eagle crest, and a flag on dark green.",
  },

  project: {
    heading: "The project",
    paragraphs: [
      "The Six League is a fictional football league concept built around the identity of five clubs: Abuja Regents FC, Lagos Knights FC, Ibadan FC, Port Harcourt Tide FC, and Kano Atlas FC.",
      "The brief was to give each club its own character while making the league feel like one connected world. That meant looking beyond individual logos and jerseys to build a visual identity that could carry across club crests, kit designs, colors, patterns, flags, and the smaller details that make a football club feel real.",
    ],
  },

  clubs: {
    heading: "One league. Five identities.",
    body: "Each club needed a visual language of its own. The identities draw from different names, places, and personalities, with distinct color palettes, graphic elements, and kit details. At the same time, the clubs share a consistent level of craft and a common visual framework that ties the league together.",
    items: [
      {
        src: "/brand/ar.jpg",
        alt: "Abuja Regents crest, kit and flag.",
        caption: "Abuja Regents FC",
      },
      {
        src: "/brand/lagos.jpg",
        alt: "Lagos Knights crest, kit and flag.",
        caption: "Lagos Knights FC",
      },
      {
        src: "/brand/ibadan.jpg",
        alt: "Ibadan FC crest, kit and flag.",
        caption: "Ibadan FC",
      },
      {
        src: "/brand/kano.jpg",
        alt: "Kano Atlas crest, kit and flag.",
        caption: "Kano Atlas FC",
      },
      {
        src: "/brand/ph.jpg",
        alt: "Port Harcourt Tide crest, kit and flag.",
        caption: "Port Harcourt Tide FC",
      },
    ],
  },

  kit: {
    heading: "From crest to kit",
    paragraphs: [
      "The work extended from the league's visual direction into individual club identities and home and away jerseys. Crests, patterns, flag designs, and embroidered badge details helped carry each identity across the wider kit system.",
      "The goal was to make the concepts feel like more than designs on a screen, like pieces of a football culture that could exist beyond the pitch.",
    ],
  },

  approach: {
    heading: "The approach",
    paragraphs: [
      "I explored visual directions and used AI as part of the creative process to develop and present the identities and kit concepts. The focus remained on building distinct club personalities and bringing them together into a coherent league.",
    ],
  },
} as const;
