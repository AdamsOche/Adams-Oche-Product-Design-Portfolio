/**
 * Sono case-study copy. No em dashes by design. The dashboard mockup shows
 * "sono.so/kaito-live-demo", which 404s: that's placeholder text in the
 * design, not the real deployed URL. The confirmed live demo is
 * https://sono-six.vercel.app/.
 *
 * "Marketplace" is only used in the pivot section, where it describes the
 * first version. Paystack stays out of the Tools badge and the stack
 * sentence, but is still named where the copy describes what happened
 * (the petition, the payment split, the checkout bug).
 */
export const sono = {
  liveUrl: "https://sono-six.vercel.app/" as string | null,
  liveLabel: "Sono",
  brandColor: "#0e7490",
  brandTextColor: "#ffffff",

  hero: {
    eyebrow: "01 / SONO · Product design · Product development · Creator tools",
    title: "Sono",
    standfirst:
      "Storefront and checkout software that helps independent music producers sell beats directly to their own audience.",
    intro:
      "Producers upload beats, set license options, take payments and deliver purchases from one storefront instead of handling each step by hand.",
    meta: [
      { label: "Role", value: "Product Designer · Builder" },
      { label: "Platform", value: "Web" },
      { label: "Tools", value: "Figma · Next.js · Supabase · Claude Code" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Independent producers already have an audience, but nothing that works once someone decides to buy. There is no cart, no proof of payment before a file is sent, and no license the buyer can point to later. Most of it happens over DMs and bank transfers, and the producer keeps track of it themselves.",
    ],
    paymentsParagraph: {
      before:
        "Getting paid is a separate problem. The largest platform in the category pays producers through PayPal, which West African producers cannot use to receive money. Producers have publicly ",
      linkText: "petitioned",
      linkHref: "https://www.thepetitionsite.com/832/695/552/acceptable-means-of-payment-in-west-africa/",
      after:
        " BeatStars to support Paystack or Flutterwave instead, describing how they end up routing sales through middlemen abroad who take a cut. BeatStars is not the merchant in those sales, so it has no way to fix this for them.",
    },
    secondarySource: {
      label:
        "BeatStars feature request board, producers asking for payout methods other than PayPal:",
      href: "https://ideas16310beatstars.ideas.aha.io/ideas/PROD-I-365",
    },
  },

  pivot: {
    heading: "The first version was a marketplace",
    paragraphs: [
      "I designed Sono as a marketplace first. Buyers landed on a feed of trending beats, browsed by genre, searched, added beats to a cart and kept what they bought in a library. On sign up you chose whether you were a producer or an artist. The design assumed the hard part was helping buyers find beats.",
      "Then I talked to a producer who had tried selling on BeatStars. He found it hard to get noticed there, and said he didn't feel the software was built for someone like him.",
      "That changed how I saw the problem. In a ranked feed with thousands of other producers he was hard to find, and another feed would have had the same issue. He already had people who listened to his music. What he needed was a way to sell to them directly.",
      "I removed the marketplace and built the product around the producer's own storefront.",
    ],
    cutHeading: "What I removed:",
    cutItems: [
      "Search, trending and browse by genre. A buyer now reaches a storefront only through a link the producer shares.",
      "The cart. Each purchase is one beat, one license and one checkout.",
      "Buyer accounts and the purchase library. A buyer is an email attached to one order, and gets their file through a private link.",
      "The producer or artist choice at sign up. Only producers have accounts.",
    ],
    v1ScreensCaption:
      "Sono v1, designed in Figma: home feed, beat detail, cart and library. Most of this was removed in the storefront version.",
    identityCaption:
      "The first logo was a soundwave in a circle, in navy and bright blue, set in Montserrat Alternates. The second is an abstract mark of four shapes meeting in a square with a star-shaped gap between them. It no longer refers to music, which matches a product that now handles selling, not discovery.",
    brandCaption:
      "The same mark applied to a street billboard, a cap and a tote bag.",
  },

  decisions: {
    heading: "What I decided, and why",
    items: [
      {
        lead: "Four license tiers, one by quote.",
        body: "Basic, Premium and Unlimited check out immediately. Exclusive shows Request Quote instead of a price, because buying out full rights to a beat is negotiated, and a fixed price would misrepresent what the buyer is agreeing to.",
      },
      {
        lead: "Checkout stays on the producer's page.",
        body: "Payment opens in an overlay on the producer's own storefront, so buyers aren't sent to a differently branded page while they pay.",
      },
      {
        lead: "Producers are paid directly.",
        body: "Payments are split at the point of sale using Paystack subaccounts, with a flat 5% platform fee. The money goes to the producer's own account instead of sitting in a Sono balance waiting on a payout schedule.",
      },
      {
        lead: "No buyer account.",
        body: "Buyers don't have to sign up to receive a file they have already paid for.",
      },
    ],
  },

  fixes: {
    heading: "What I caught and fixed",
    items: [
      {
        lead: "Checkout was leaving the page.",
        body: "Checkout was meant to stay in an overlay on the storefront, and the automated tests passed. In a real checkout, though, Paystack Inline sometimes fell back to a full-page redirect, which sent the buyer away mid-payment. I found it by watching the browser address bar during a manual run, and fixed it.",
      },
      {
        lead: "A storage policy was matching the wrong table.",
        body: "Beat files are kept in a private bucket and should only be reachable through a signed URL. The access policy looked right on review, but name in the policy resolved to producers.name instead of storage.objects.name. Two migrations didn't fix it. I found the cause by reading pg_policies directly.",
      },
      {
        lead: "Unpublished beats could be bought.",
        body: "Draft and archived beats don't appear on a storefront, but the server wasn't checking beat.status at checkout. A producer could buy their own unpublished beat through a direct link. The rule only existed in the interface, so I added the check on the server.",
      },
    ],
  },

  screens: {
    heading: "Screens",
    caption:
      "The demo supports the main storefront and checkout flows. Payments run in test mode.",
  },

  role: {
    heading: "Role and stack",
    body: "Product design and engineering: planning documents, design system, UI and the full build. The app runs on Next.js and Vercel, with Supabase for the database, auth and file storage, using row level security. License PDFs are generated for each tier and delivered through signed URLs that expire after a short time, and Resend sends the transactional email. Built with Claude Code.",
  },
} as const;
