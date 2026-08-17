/**
 * Sono case-study copy. Final text, meant to read verbatim — no em dashes
 * by design. The dashboard mockup shows "sono.so/kaito-live-demo", which
 * 404s — that's placeholder text in the design, not the real deployed URL.
 * The confirmed live demo is https://sono-six.vercel.app/.
 */
export const sono = {
  liveUrl: "https://sono-six.vercel.app/" as string | null,
  liveLabel: "Sono",

  hero: {
    eyebrow: "01 / SONO · Product design · Product development · Creator tools",
    title: "Sono",
    standfirst:
      "Storefront and checkout software that helps independent music producers sell beats directly to their own audience.",
    intro:
      "Producers upload beats, set licensing options, take payments and deliver purchases from one storefront instead of handling each step by hand.",
    meta: [
      { label: "Role", value: "Product Designer · Builder" },
      { label: "Platform", value: "Web" },
      { label: "Tools", value: "Figma · Next.js · Supabase · Paystack · Claude Code" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Independent producers already have an audience. What they don't have is anything that works after someone decides to buy. There is no cart, no proof of payment before a file gets sent, and no license the buyer can point to later. Most of it happens over DMs and bank transfers, and the producer keeps track of it in their head.",
    ],
    paymentsParagraph: {
      before:
        "Getting paid is its own problem. The largest platform in the category pays producers through PayPal, which West African producers cannot use to receive money. Producers have publicly ",
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
      "I designed Sono as a marketplace first. Buyers landed on a feed of trending beats, browsed by genre, searched, added beats to a cart and kept what they bought in a library. On sign up you picked whether you were a producer or an artist. The whole shape of it assumed that the hard part was helping buyers find beats.",
      "Then I looked again at who would actually use it. I talked to a producer who had tried selling on BeatStars. He found it hard to get noticed there, and said he didn't feel like the software was built for someone like him.",
      "That pointed the opposite way from where I was going. He was invisible because he was one of thousands in a ranked feed. Another feed would have given him the same problem with a different logo. Producers like him already have people who listen to them. What they don't have is a way to sell to those people directly.",
      "So I cut the marketplace out.",
    ],
    cutHeading: "What came out:",
    cutItems: [
      "Search, trending, and browse by genre. Nothing on Sono is discoverable. A storefront is reached only by a link the producer shares.",
      "The cart. One beat, one license, one checkout.",
      "Buyer accounts and the purchase library. A buyer is now an email attached to one order, and they get back to their file through a private link.",
      "The producer or artist role choice at sign up. Only producers have accounts.",
    ],
    v1ScreensCaption:
      "Sono v1, designed in Figma. Home feed, beat detail, cart and library. Almost none of this survived.",
    brandSheetCaption:
      "The v1 identity, dark navy with a bright blue accent and Montserrat Alternates. The shipped product moved to a lighter, quieter system on an 8px grid.",
  },

  decisions: {
    heading: "What I decided, and why",
    items: [
      {
        lead: "Four licenses, and one that has no price.",
        body: "Basic, Premium and Unlimited check out immediately. Exclusive shows Request Quote instead of a price, because buying out full rights to a beat is a negotiation and pricing it up front would misrepresent what the buyer is agreeing to.",
      },
      {
        lead: "Checkout that never leaves the page.",
        body: "Payment happens in an overlay on the producer's own storefront. Sending a buyer to a different branded page in the middle of paying breaks the impression that they are buying from the producer, which is the entire point of the product.",
      },
      {
        lead: "Producers get paid directly.",
        body: "Payments split at the point of sale through Paystack Subaccounts, with a flat 5% platform fee. Money reaches the producer's own account rather than sitting in a Sono balance waiting on a payout schedule.",
      },
      {
        lead: "No buyer account, ever.",
        body: "Making someone sign up to receive a file they already paid for adds a step that serves the platform and not the buyer.",
      },
    ],
  },

  fixes: {
    heading: "What I caught and fixed",
    items: [
      {
        lead: "Checkout was silently leaving the page.",
        body: "The in page overlay was a deliberate decision, and the tests reported it working. It wasn't. Under some conditions Paystack Inline fell back to a full page redirect, so buyers were being sent off the storefront in the middle of paying. I found it by watching the browser address bar during a real checkout rather than trusting the passing test.",
      },
      {
        lead: "A storage policy that read correctly and wasn't.",
        body: "Beat files sit in a private bucket and should only be reachable through a signed URL. The access policy looked right on review, but name in the policy resolved to producers.name instead of storage.objects.name, so it was matching against the wrong table. Two migrations failed to fix it before I stopped guessing and read pg_policies directly.",
      },
      {
        lead: "Unpublished beats were purchasable.",
        body: "Draft and archived beats never appear on a storefront, but nothing on the server checked beat.status at checkout, so a producer could buy their own unpublished work through a direct link. The rule existed in the interface and not in the place that mattered.",
      },
    ],
    closing:
      "Every one of these got traced back to a cause rather than patched at the surface. The habit behind them is the same: check the thing itself, not the report that says the thing is fine.",
  },

  screens: {
    heading: "Screens",
    caption:
      "Sono runs as a working demo on free infrastructure in Paystack test mode. Every screen works. Only the money is fake.",
  },

  role: {
    heading: "Role and stack",
    body: "Product design and engineering. Planning documents, design system, UI, and the full build. Next.js on Vercel, Supabase for database, auth and file storage with row level security, Paystack Subaccounts and Split Payments, license PDFs generated per tier and delivered through signed URLs with a short expiry, Resend for transactional email. Built with Claude Code.",
  },
} as const;
