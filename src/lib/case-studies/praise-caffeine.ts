/**
 * Praise Caffeine case-study copy. The text is drawn from the client's brand
 * guide. Client permission to show the work is confirmed, and the role is
 * logo design only. No em dashes by design.
 */
export const praiseCaffeine = {
  hero: {
    title: "Praise Caffeine",
    standfirst:
      "Logo and identity for a platform that gives BPOC gospel artists in Canada a place to worship freely.",
    meta: [
      { label: "Client", value: "Praise Caffeine, Regina, Saskatchewan" },
      { label: "Role", value: "Logo design" },
      { label: "Delivered", value: "Primary stamp, reversed stamp, horizontal wordmark" },
    ],
  },

  hero_image: {
    src: "/brand/pc-stamp.jpg",
    width: 1200,
    height: 1200,
    alt: "The Praise Caffeine primary stamp: a coffee cup with a soundwave rising from it, inside a double circle.",
  },

  brief: {
    heading: "The brief",
    paragraphs: [
      "Praise Caffeine is a platform for BPOC gospel artists of every worship tradition. Its tagline is “Fuelled by Praise.” It keeps a permanent, freely accessible YouTube archive of the music.",
      "The client asked for a vintage coffeehouse stamp: a coffee cup with a soundwave rising from it in place of steam. That direction says legitimacy, archive and permanence, which fits a mission about preserving cultural worship traditions. The soundwave makes the music connection immediate.",
    ],
  },

  logo: {
    heading: "The logo",
    intro:
      "The guide asks for three versions: a primary stamp, a reversed stamp for dark backgrounds, and a horizontal wordmark for banners and wide formats.",
    duo: [
      {
        src: "/brand/pc-stamp-dark.jpg",
        alt: "The reversed stamp on a dark brown background.",
        caption: "Reversed stamp",
      },
      {
        src: "/brand/pc-icon.jpg",
        alt: "The icon mark on its own, a cup and soundwave in a circle.",
        caption: "Icon mark",
      },
    ],
    wordmark: {
      src: "/brand/pc-word.jpg",
      alt: "The horizontal wordmark: the icon on the left, PRAISE CAFFEINE stacked on the right.",
      caption: "Horizontal wordmark",
    },
  },

  colour: {
    heading: "Colour",
    body: "An earth-tone palette. Saddle Brown and Terracotta lead, Wheat Cream and Parchment give light backgrounds room, and Deep Espresso carries text.",
    swatches: [
      { name: "Saddle Brown", hex: "#8B4513" },
      { name: "Terracotta", hex: "#C1691E" },
      { name: "Crimson", hex: "#B80C09" },
      { name: "Warm Sand", hex: "#E8A87C" },
      { name: "Wheat Cream", hex: "#F5DEB3" },
      { name: "Deep Espresso", hex: "#2C1810" },
      { name: "Parchment", hex: "#F9F5EF" },
    ],
  },
} as const;
