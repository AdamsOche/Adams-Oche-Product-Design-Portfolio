/**
 * Stash case-study copy. Sourced from the author's final overview/problem/
 * approach/design-language/flows text, restructured into the site's shared
 * five-section skeleton (problem, decisions, caught & fixed, screens, role).
 *
 * No live URL: nothing in the local source repos (stash-app, stash-landing)
 * or Downloads pointed to a real deployment, so liveUrl stays null rather
 * than guessing — same discipline as the placeholder text that turned out
 * to be fake for Sono.
 *
 * The "caught and fixed" section didn't exist in the author's draft — Stash
 * is mock data, so there's no bug tracker to pull from. It's built instead
 * from a real, already-documented fact: the marketing site's first pass
 * used gradient borders, glow effects, fabricated stats (12K+ "active
 * savers", a 4.8 rating) and fake named testimonials, all stripped in a
 * deliberate refinement pass. The "before" screenshots for that pass
 * (Stash hero, Stash landing 1-8) are otherwise unusable anywhere on this
 * site — they're exactly the fabricated-content pattern the project bans —
 * so they only appear here, explicitly labeled as the discarded version.
 */
export const stash = {
  liveUrl: null as string | null,
  liveLabel: "Stash",

  hero: {
    eyebrow: "03 / STASH · Personal finance concept · Product design · Brand & UI",
    title: "Stash",
    standfirst:
      "A savings and payments app concept for young professionals across Nigeria and Ghana who save with intent, toward a MacBook, a December trip, rent, a wedding contribution, but are underserved by banking apps built for older, more formal use cases.",
    intro:
      "I designed and built the full product: 19 mobile screens covering onboarding, savings goals, peer-to-peer transfers, and group savings pools, plus a marketing landing page to introduce it.",
    concept:
      "Stash is a design and frontend concept, not a live product: nineteen screens and a marketing site, built in real code, running on mock data rather than a connected backend.",
    meta: [
      { label: "Role", value: "Product Designer · Builder, solo" },
      { label: "Platform", value: "Mobile app concept · Marketing site" },
      { label: "Tools", value: "Figma · Next.js · TypeScript · Tailwind · Zustand · Framer Motion" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Most fintech apps in the region treat saving as a static balance and sending money as a form to fill out. Neither matches how people actually save, toward specific, named things, often with other people's help. Group contributions (rent splits, event funds, “aso-ebi” pools) are still coordinated over WhatsApp and spreadsheets.",
      "I wanted to design something that made goal-based saving and group pooling first-class, not bolted-on features.",
    ],
  },

  decisions: {
    heading: "What I decided, and why",
    items: [
      {
        lead: "Goals, Send, and Pools as equal peers.",
        body: "Everything in the information architecture flows from the three jobs people actually hire a savings app for: save toward something specific, move money to someone instantly, pool money with a group. Goals, Send and Pools sit alongside Home in the bottom nav, rather than burying pooled savings three menus deep the way most banking apps do.",
      },
      {
        lead: "Every screen backed by real interaction logic.",
        body: "Creating a goal actually writes to state and shows up on the home dashboard. Adding money to a goal updates its progress ring in real time. Inviting members to a pool actually adds them to that pool's member list. A prototype that only looks right falls apart the moment you click past the first screen, and I wanted this to hold up under real use, not just a walkthrough.",
      },
      {
        lead: "Gold means money, and only money.",
        body: "Dark navy base, violet as the primary action colour, gold reserved for money-positive moments: reaching a goal, a completed transfer, a milestone. Gold is used deliberately rarely. If everything is gold, nothing reads as a win.",
      },
      {
        lead: "Progress is a shape before it's a number.",
        body: "Circular rings on goals, horizontal bars on pools, because glancing at a shape is faster than reading a percentage, and the whole point of the app is to make saving feel tangible.",
      },
    ],
  },

  fixes: {
    heading: "What I caught and fixed",
    paragraphs: [
      "The first pass at the marketing site had gradient borders, glow effects, and stock-style avatars, the visual signature of anything built quickly with AI assistance. It also leaned on invented social proof: a made-up active-user count, a star rating, fake named testimonials with fake handles and cities, exactly the kind of unverifiable claim this project doesn't allow anywhere else.",
      "Looking at it again next to the actual product, none of it held up. Stash doesn't have users yet, so it doesn't get a user count. Stock photos undercut a product built around specific, named goals and people you actually know. Gradients and glow are decoration standing in for a decision that hadn't been made yet.",
    ],
    fixedHeading: "What replaced it",
    fixed:
      "Every invented number, borrowed face, and gradient came out. What's left is the system in the design tokens: a fixed dark-navy and violet base, gold pulled back to the moments money actually moves, real interaction states instead of static comps. Fewer ingredients, used more deliberately.",
    beforeAlt:
      "The pre-refinement Stash marketing hero: gradient headline text, a fabricated \"12,000+ active savers\" stat, a 4.8 star rating, stock photo avatars, and a \"Now live in Nigeria & Ghana\" badge. Discarded — shown here only as the before state.",
    afterAlt:
      "The Stash design system: colour tokens (navy base, violet actions, gold reserved for milestones), type scale, and component scaffolds that replaced the first pass.",
  },

  screens: {
    heading: "Screens",
    intro:
      "Nineteen screens across three core flows, each backed by real state rather than a static comp.",
    flows: [
      {
        label: "Goals",
        body: "Set a target, an emoji, and a savings rhythm (weekly, monthly, manual, or auto-save), then track it with a concentric progress ring that fills as contributions land. Hitting 100% triggers a dedicated celebration screen rather than just updating a number.",
      },
      {
        label: "Send",
        body: "Search a contact or pick from recents, enter an amount on a full-screen numpad, confirm with a fee breakdown, done. Three taps, no bank details, because the fastest transfers are the ones you don't think about.",
      },
      {
        label: "Pools",
        body: "Create a group pool, invite contacts, set a target and due date. Every member's contribution is visible to the whole group in real time, which is the actual point: group saving breaks down when people can't see who's paid.",
      },
    ],
    landingHeading: "The landing page",
    landingBody:
      "A separate marketing site introduces the product with a dark, editorial layout, a floating cluster of real UI cards (balance, a goal in progress, a pool, a live transaction) in the hero instead of a static phone screenshot, because the interface itself is the pitch. Copy stays short and confident throughout: no feature-explainer paragraphs, just what the product does and why it's different.",
  },

  role: {
    heading: "Role and stack",
    body: "Solo: product design, UI design, and front-end build. Next.js, TypeScript, Tailwind, Zustand for state, Framer Motion for transitions.",
    differentlyHeading: "What I'd do differently",
    differentlyBody:
      "Given more time, I'd want real backend-connected balances tying Send and Pool contributions back to a single wallet figure instead of three independently-mocked numbers, and a proper login flow with real session persistence rather than a mocked auth store. Both are solvable. They just weren't the point of this pass, which was proving out the interaction design end to end.",
  },
} as const;
