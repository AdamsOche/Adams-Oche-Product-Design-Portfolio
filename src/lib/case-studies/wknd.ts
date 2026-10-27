/**
 * WKND case-study copy. No em dashes by design.
 * WKND is a concept and has not launched, so this page reports no results.
 * It swaps "What I caught and fixed" for the sponsors and "what I still need
 * to test" sections on purpose, since there is nothing live to catch bugs in.
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
      "A mobile app for finding things to do in Abuja and making plans with friends.",
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
      "I wanted to make the experience more useful before asking people to commit to it.",
    ],
  },

  redesign: {
    heading: "The redesign",
    items: [
      {
        title: "The app changes through the week",
        paragraphs: [
          "I designed the home screen around when people are likely to make plans, so it isn't the same screen every day. Early in the week, it encourages them to organise their Saturday. On Friday, it sends the reminder they've chosen. On Saturday, it puts available activities and bookings first.",
          "The idea is to make the app useful at each stage of the weekend, instead of treating every visit like a search for events.",
        ],
      },
      {
        title: "You can look around before signing up",
        paragraphs: [
          "In the first version, people had to register and answer questions before they could see what was available. I moved registration to the point where someone is ready to reserve an activity.",
          "That way, people can understand what WKND offers before deciding to create an account.",
        ],
      },
      {
        title: "Friends don't need the app to join a plan",
        paragraphs: [
          "I changed the invitation flow so friends could open a web link, respond to the plan and let the host see who's coming without installing WKND.",
          "This removes an extra step from the process. It also makes the invitation easier to share with people who don't use the app.",
        ],
      },
      {
        title: "Payment problems need clear answers",
        paragraphs: [
          "I designed the checkout flow to explain what happens when a payment fails, a reservation hold expires or an event is cancelled. These are situations where people need to know whether they've been charged and what happens next.",
          "The screens put the payment status and next steps up front, so people don't have to work it out for themselves.",
        ],
      },
      {
        title: "Memories needs a way to collect photos",
        paragraphs: [
          "The original Memories section had no clear way for people to contribute photos. In the redesign, WKND asks attendees to add a photo after an event, with one prompt in the evening.",
          "It's a small addition, but the feature depends on people actually sharing their photos. Without that, there's not much to look back on.",
        ],
      },
    ],
  },

  changes: {
    heading: "What changed",
    paragraphs: [
      "The redesign reduced the initial onboarding from ten screens to four. Instead of completing a quiz before seeing any activities, people choose their location and interests, then move into the app.",
      "I also moved the experience away from a catalogue where every event had similar weight. The home screen now gives more attention to the current stage of the week, while event pages make details such as time, location and price easier to find.",
      "The wider redesign covers onboarding, weekly discovery, event details, checkout, invitations, sponsorships and Memories.",
    ],
  },

  screens: {
    heading: "Screens",
    figures: [
      {
        src: "/case-studies/wknd/wknd-onboarding.png",
        alt: "Four onboarding screens: a welcome with the number of weekends left this year, where you are, interests, and a handoff with a countdown to Saturday.",
        caption:
          "Onboarding. Four screens, with the account deferred until Reserve.",
      },
      {
        src: "/case-studies/wknd/wknd-week.png",
        alt: "Four screens of the week: an empty Wednesday, a plan on Thursday, the Saturday list, and the event page with the Reserve button.",
        caption:
          "The week. Home changes with the day, and the event page leads with facts you can decide on.",
      },
      {
        src: "/case-studies/wknd/wknd-checkout.png",
        alt: "Four checkout screens: the checkout with a ten minute hold, the payment method sheet, the booked confirmation, and a failed payment that explains what happened to the money.",
        caption:
          "Checkout. The hold, the payment method, and a failure screen that starts with the money.",
      },
      {
        src: "/case-studies/wknd/wknd-share.png",
        alt: "Four sharing screens: the share sheet, a friend's web page, an answered plan, and the host's guest list.",
        caption:
          "Sharing. A friend answers on a web page with no install, and the host sees who is in.",
      },
      {
        src: "/case-studies/wknd/wknd-sponsors.png",
        alt: "Four sponsored screens: a perk under the plan, a sponsored event row, the perk page, and the redeem code, using brand colours on the card only.",
        caption:
          "Sponsors. Brand colour on the card, WKND indigo on the buttons, and always labelled.",
      },
    ],
  },

  sponsors: {
    heading: "Making room for sponsors",
    paragraphs: [
      "WKND would need a business model if it were to become a real product, so I explored how sponsored activities and brand offers could fit into the experience.",
      "I used Bolt, inDrive, Chowdeck, Pizza Hut and Chicken Republic as examples. These are illustrative concepts, not actual partnerships.",
      "I kept sponsored content labelled, limited how often it appears and made sure it wouldn't take priority over a user's plan. Brand colours are used on the sponsored cards, while the main interface keeps WKND's own visual identity.",
      "I also checked the colour combinations for readability. Some brand colours needed adjustments to maintain enough contrast.",
    ],
  },

  validation: {
    heading: "What I still need to test",
    intro:
      "WKND is a concept and hasn't launched, so I don't have usage data to show whether these changes would work. There are a few assumptions I'd want to test before treating the redesign as successful.",
    tests: [
      {
        lead: "When people make plans:",
        body: "I'd speak to eight people in Abuja about their last four weekends to understand when they decided what to do.",
      },
      {
        lead: "Whether friends respond to a link:",
        body: "I'd share links for real plans and track how many invited friends respond without installing the app.",
      },
      {
        lead: "Whether a Friday reminder helps:",
        body: "I'd test the reminder over two weekends and see whether it brings people back to the app.",
      },
      {
        lead: "Whether booking details are realistic:",
        body: "I'd speak to five event operators about availability, reservation holds and refunds.",
      },
      {
        lead: "Whether people share photos:",
        body: "I'd test the post-event prompt at an activity and measure how many attendees add a photo within a day.",
      },
    ],
    closing:
      "These are proposed tests, not research I've already completed. They would help me find out which parts of the redesign solve real problems and which need another look.",
  },

  role: {
    heading: "My role",
    paragraphs: [
      "I worked on the project from the initial audit through to the redesigned interface. I reviewed the first version, mapped the main user flows, made the product decisions and designed 44 screens across eight flows, including edge cases such as cancellations, sold-out events and payment failures.",
      "I also created the design system, covering colours, typography and interface components, and documented the changes from the original experience.",
      "I used Figma to work through the designs and Claude Code to build and refine the interface. Working across both helped me evaluate the screens as part of one connected experience, not as separate designs.",
    ],
  },
} as const;
