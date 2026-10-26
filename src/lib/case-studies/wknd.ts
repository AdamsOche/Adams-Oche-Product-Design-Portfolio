/**
 * WKND case-study copy. No em dashes by design.
 * WKND is a concept and has not launched, so this page reports no results.
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
      "A mobile app that helps people in Abuja turn a free weekend into a plan, and get their friends to say yes.",
    intro:
      "Built for people who keep meaning to do something on Saturday and end up at home. I redesigned it from a first version that was a catalogue of events.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Platform", value: "Mobile" },
      { label: "Tools", value: "Figma · Claude" },
      { label: "Status", value: "Concept, not launched" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Abuja does not lack things to do. People lack a plan. A weekend is decided on weekdays and lived on Saturday, and most of the deciding dies in a group chat that nobody answers until Saturday morning, when it is too late to book anything.",
      "I started by auditing the first version of WKND, which showed every event on offer. It asked for an account and a quiz before it showed a single event, sent friends to a chat they could only join by installing the app, and had no way to ask for the photo that would have filled its Memories grid.",
      "So the redesign starts from one question: what are we doing this weekend, and who is coming?",
    ],
  },

  decisions: {
    heading: "What I decided, and why",
    items: [
      {
        lead: "Time is the interface.",
        body: "The home screen changes with the day of the week. From Monday to Thursday it counts down to Saturday and asks for a plan. On Friday there is one reminder, at the time you chose. On Saturday it shows what is on and your ticket, with nothing else in the way.",
      },
      {
        lead: "Ask for the account last.",
        body: "Sign up moved from the first screen to Reserve. People see the value first and only commit when there is a plan to lose.",
      },
      {
        lead: "A link instead of a chat.",
        body: "A friend answers a plan on a web page with one tap and no install, and the host sees who is in. The first version needed an installed app before anyone could say yes, which was the biggest wall in it.",
      },
      {
        lead: "Money first when it fails.",
        body: "Cancellations, expired holds and refunds all lead with what happened to the payment. Trust is built on the worst Saturday, not the best one.",
      },
      {
        lead: "Close the loop.",
        body: "After the event the app asks for a photo once, in the evening, and counts the weekend either way. That is what makes Memories fill up.",
      },
    ],
    changedHeading: "What changed from the first version",
    changed: [
      {
        lead: "Ten screens became four.",
        body: "The first version asked for an account, then a quiz about indoors or outdoors, effort and budget, before showing an event. The redesign shows a welcome, where you are, a few interests and a handoff with the countdown already running.",
      },
      {
        lead: "A catalogue became a plan.",
        body: "Every event used to look the same, in small type, with nothing to say whether the weekend was close or planned. Now the first thing you see is your plan, or the lack of one.",
      },
    ],
  },

  sponsors: {
    heading: "Sponsors that belong in the plan",
    intro:
      "A product like this needs a way to earn, so I designed how brands could appear without taking over the plan. The examples use Bolt, inDrive, Chowdeck, Pizza Hut and Chicken Republic as stand ins, with typed wordmarks and their colours. They are concept examples, and no partnership exists.",
    rules: [
      "Every sponsored item says Sponsored in plain text and names the brand",
      "One per screen, never above your plan and never the first item in a list",
      "Real or not at all: a sponsored event has a real time, place and price, and a perk can actually be redeemed",
      "Brand colour sits on the card, while the buttons stay WKND's",
      "Never a notification, so the Friday reminder stays trustworthy",
    ],
    closing:
      "The brand colours made the cards easier to tell apart and more fun to look at. They also meant checking every pairing for contrast, and one of them, Pizza Hut's red, only works for large text.",
  },

  validation: {
    heading: "What is still a hypothesis",
    intro:
      "WKND has not launched, so there are no results here and I would rather not invent any. The design rests on five beliefs, and each one has a test.",
    beliefs: [
      {
        lead: "People decide on weekdays, not on Saturday morning.",
        body: "The whole week structure depends on it. Test: interview eight people in Abuja about their last four weekends and when each plan was made.",
      },
      {
        lead: "Friends will answer a link without installing anything.",
        body: "It replaces the chat and the friends list. Test: send twenty real links for real plans and count how many get an answer.",
      },
      {
        lead: "One Friday reminder brings people back.",
        body: "It is the only push the app sends on its own. Test: give a clickable prototype and real notifications to ten people for two weekends.",
      },
      {
        lead: "Operators can give live availability and refunds.",
        body: "Holds, places left and refund timing depend on it. Test: talk to five operators about how they take bookings and what they can promise.",
      },
      {
        lead: "People add a photo when asked once, in the evening.",
        body: "Memories only works if photos get in. Test: pilot the prompt at one event and count how many add a photo within a day.",
      },
    ],
    closing:
      "Until those tests run, the design is a strong hypothesis, not a proven one. I set no success targets yet, because a number picked before there is a baseline has nothing to be compared to.",
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

  role: {
    heading: "Role and approach",
    body: "Product design from the first audit to the interface. I audited the first version, wrote the insight and five principles, mapped the user flow, and designed 44 screens across eight flows, from first launch to a saved memory, plus the edge cases such as rain, a cancelled event and a sold out one. I also built the design system, ten colours and two typefaces, and a before and after against the first version.",
    verification:
      "Every pair of colours in the interface was measured for contrast, and text that failed was changed rather than argued with.",
  },
} as const;
