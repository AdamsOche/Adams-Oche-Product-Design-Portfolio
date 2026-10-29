/**
 * WKND case-study copy. No em dashes by design.
 * WKND is a concept and has not launched, so this page reports no results.
 * It swaps "What I caught and fixed" for the sponsors and "what I still need
 * to test" sections on purpose, since there is nothing live to catch bugs in.
 * The proposed tests are proposals: none have been run.
 */
export const wknd = {
  liveUrl: null as string | null,
  liveLabel: "WKND",
  brandColor: "#3629b7",
  brandTextColor: "#ffffff",

  hero: {
    eyebrow: "04 / WKND · Consumer · Product design · Mobile",
    title: "WKND",
    standfirst:
      "A mobile concept for finding things to do in Abuja and making plans with friends.",
    intro:
      "The first version of WKND was mostly an event catalogue. I redesigned it around the whole process of making a weekend plan: finding something nearby, deciding what to do, getting friends involved and booking a place.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Platform", value: "Mobile" },
      { label: "Tools", value: "Figma · Claude Code" },
      { label: "Status", value: "Concept, not launched" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Abuja has places to go and things to do, but finding an activity is only part of making a plan. You still have to decide what works, get your friends interested and book before the opportunity passes.",
      "I went back through the first version of WKND and found a few things getting in the way. People had to create an account and complete a quiz before seeing any events. Inviting friends meant sending them to a chat that required an app install, and the Memories section depended on photos without giving people a clear way to add them.",
    ],
  },

  redesign: {
    heading: "The redesign",
    items: [
      {
        title: "The home screen changes through the week",
        paragraphs: [
          "Early in the week, the home screen encourages people to organise their Saturday. On Friday, it sends the reminder they've chosen. On Saturday, it puts available activities and bookings first, instead of treating every visit like a search for events.",
        ],
      },
      {
        title: "People can look around before signing up",
        paragraphs: [
          "In the first version, people had to register and answer questions before they could see what was available. I moved registration to the point where someone is ready to reserve an activity.",
        ],
      },
      {
        title: "Friends don't need the app to join a plan",
        paragraphs: [
          "Friends can open a web link, respond to the plan and let the host see who's coming without installing WKND. That removes a step, and makes invitations easier to send to people who don't use the app.",
        ],
      },
      {
        title: "Payment problems get clear answers",
        paragraphs: [
          "The checkout flow explains what happens when a payment fails, a reservation hold expires or an event is cancelled. In each case the screen leads with the payment status and what happens next, so people know whether they've been charged.",
        ],
      },
      {
        title: "Memories asks for photos",
        paragraphs: [
          "The original Memories section had no clear way for people to contribute photos. In the redesign, WKND asks attendees to add a photo after an event, with one prompt in the evening.",
        ],
      },
    ],
  },

  changes: {
    heading: "What changed",
    paragraphs: [
      "Onboarding went from ten screens to four. Instead of completing a quiz before seeing any activities, people choose their location and interests, then move into the app.",
      "The first version gave every event similar weight. The home screen now gives more attention to the current stage of the week, and event pages make time, location and price easier to find.",
      "The full redesign covers onboarding, weekly discovery, event details, checkout, invitations, sponsorships and Memories.",
    ],
  },

  screens: {
    heading: "Screens",
    figures: [
      {
        src: "/case-studies/wknd/wknd-onboarding.png",
        alt: "Four onboarding screens: a welcome with the number of weekends left this year, where you are, interests, and a handoff with a countdown to Saturday.",
        caption:
          "Onboarding. Four screens, with the account requested later, at Reserve.",
      },
      {
        src: "/case-studies/wknd/wknd-week.png",
        alt: "Four screens of the week: an empty Wednesday, a plan on Thursday, the Saturday list, and the event page with the Reserve button.",
        caption:
          "The week. The home screen changes by day, and the event page shows time, place and price.",
      },
      {
        src: "/case-studies/wknd/wknd-checkout.png",
        alt: "Four checkout screens: the checkout with a ten minute hold, the payment method sheet, the booked confirmation, and a failed payment that explains what happened to the money.",
        caption:
          "Checkout. A reservation hold, payment method, confirmation and a failed payment screen.",
      },
      {
        src: "/case-studies/wknd/wknd-share.png",
        alt: "Four sharing screens: the share sheet, a friend's web page, an answered plan, and the host's guest list.",
        caption:
          "Sharing. A friend responds on a web page without installing the app, and the host sees who is coming.",
      },
      {
        src: "/case-studies/wknd/wknd-sponsors.png",
        alt: "Four sponsored screens: a perk under the plan, a sponsored event row, the perk page, and the redeem code, using brand colours on the card only.",
        caption:
          "Sponsors. Brand colours appear on sponsored cards only, and each one is labelled as sponsored.",
      },
    ],
  },

  sponsors: {
    heading: "Making room for sponsors",
    paragraphs: [
      "WKND would need a business model to become a real product, so I explored how sponsored activities and brand offers could fit into the experience.",
      "I used Bolt, inDrive, Chowdeck, Pizza Hut and Chicken Republic as examples. These are illustrative concepts, not actual partnerships.",
      "Sponsored content is labelled, appears sparingly and never takes priority over a user's plan. Brand colours are used on the sponsored cards, while the rest of the interface keeps WKND's own look. I also checked the colour combinations for readability, and some brand colours needed adjusting to keep enough contrast.",
    ],
  },

  validation: {
    heading: "What I still need to test",
    intro:
      "WKND is a concept and hasn't launched, so I have no usage data. These are proposed tests, not research I've already done.",
    tests: [
      {
        lead: "People decide their weekend plans during the week.",
        body: "Interview eight people in Abuja about their last four weekends, and note when each plan was made.",
      },
      {
        lead: "Friends will respond to a link without installing the app.",
        body: "Share links for real plans, and count how many invited friends respond.",
      },
      {
        lead: "Operators can provide live availability, reservation holds and refunds.",
        body: "Speak to five event operators, and find out which of those they can offer.",
      },
    ],
  },

  role: {
    heading: "My role",
    paragraphs: [
      "I worked on the project from the initial audit through to the redesigned interface. I reviewed the first version, mapped the main user flows, made the product decisions and designed 44 screens across eight flows, including edge cases such as cancellations, sold-out events and payment failures.",
      "I also created the design system, covering colours, typography and interface components, and documented the changes from the original experience.",
      "I used Figma for the designs and Claude Code to build and refine the interface.",
    ],
  },
} as const;
