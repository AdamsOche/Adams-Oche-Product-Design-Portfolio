/**
 * Stash case-study copy, restructured into the site's shared case-study
 * skeleton (problem, decisions, caught & fixed, screens, role). No em dashes.
 *
 * No live URL: nothing in the local source repos (stash-app, stash-landing)
 * or Downloads pointed to a real deployment, so liveUrl stays null.
 *
 * The "caught and fixed" section is built from a real, documented fact: the
 * marketing site's first pass used gradient borders, glow effects, invented
 * stats (12K+ "active savers", a 4.8 rating) and fake named testimonials,
 * all removed in a refinement pass. The "before" screenshots for that pass
 * (Stash hero, Stash landing 1-8) only appear in this section, labelled as
 * the discarded version.
 *
 * There is no standalone Send screenshot. The full 19-screen image includes
 * the Send screens, so the caption points to it.
 */
export const stash = {
  liveUrl: null as string | null,
  liveLabel: "Stash",
  // A touch deeper than the design system's #7B5CF6 swatch, for AA contrast
  // against white text (see src/lib/site.ts for the same note).
  brandColor: "#6d4fe0",
  brandTextColor: "#ffffff",

  hero: {
    eyebrow: "03 / STASH · Personal finance concept · Product design · Brand & UI",
    title: "Stash",
    standfirst:
      "A personal finance concept for young adults in West Africa, covering savings goals, group pools and sending money.",
    intro:
      "I designed 19 mobile screens covering onboarding, savings goals, peer-to-peer transfers and group pools, plus a marketing landing page.",
    concept:
      "Stash is a design and frontend concept, not a live product: nineteen screens and a marketing site, built in real code, running on mock data with no connected backend.",
    meta: [
      { label: "Role", value: "Product Designer · Builder, solo" },
      { label: "Platform", value: "Mobile app concept · Marketing site" },
      { label: "Tools", value: "Figma · Next.js · TypeScript · Tailwind · Zustand · Framer Motion" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Many savings apps show saving as a single balance and sending money as a form. People often save toward specific things, sometimes with other people's help. Group contributions such as rent splits, event funds and aso-ebi pools are still organised over WhatsApp and spreadsheets.",
      "I wanted goal-based saving and group pooling to be core features of the app, not add-ons.",
    ],
  },

  decisions: {
    heading: "What I decided, and why",
    items: [
      {
        lead: "Goals, Send and Pools sit in the main navigation.",
        body: "I organised the app around three things people use a savings app for: saving toward something specific, sending money to someone, and pooling money with a group. Goals, Send and Pools sit alongside Home in the bottom navigation, so pooled savings aren't buried in menus.",
      },
      {
        lead: "Screens run on real interaction logic.",
        body: "Creating a goal writes to state and shows up on the home dashboard. Adding money updates the goal's progress ring, and inviting someone to a pool adds them to its member list. I built it this way so the prototype can be tested by clicking through it, not just viewed as a walkthrough.",
      },
      {
        lead: "Gold marks savings milestones and successful transactions.",
        body: "The base is dark navy, with violet for primary actions. Gold is only used when money goes the right way: reaching a goal, completing a transfer or hitting a milestone. I kept it rare so those moments stand out.",
      },
      {
        lead: "Goals and pools show progress differently.",
        body: "Goals use a circular progress ring and pools use horizontal bars. Both show progress as a shape, which is quicker to read at a glance than a percentage.",
      },
    ],
  },

  fixes: {
    heading: "What I caught and fixed",
    paragraphs: [
      "The first version of the marketing site had gradient borders, glow effects and stock-style avatars. It also had invented social proof: a made-up active-user count, a star rating, and fake named testimonials with fake handles and cities.",
      "Stash has no users yet, so it shouldn't show a user count, and the testimonials couldn't be real. I removed all of it, along with the gradients and stock photos, which didn't suit a product built around specific goals and people you know.",
    ],
    fixedHeading: "What replaced it",
    fixed:
      "The page now relies on the design system: a dark navy and violet base, gold only for money moments, and real interface states in place of static mockups.",
    beforeAlt:
      "The pre-refinement Stash marketing hero: gradient headline text, a fabricated \"12,000+ active savers\" stat, a 4.8 star rating, stock photo avatars, and a \"Now live in Nigeria & Ghana\" badge. Discarded. Shown here only as the before state.",
    afterAlt:
      "The Stash design system: colour tokens (navy base, violet actions, gold reserved for milestones), type scale, and component scaffolds that replaced the first pass.",
  },

  screens: {
    heading: "Screens",
    intro:
      "Nineteen screens across three flows. In the prototype each one runs on app state, not a static mockup.",
    flows: [
      {
        label: "Goals",
        body: "Set a target, an emoji and a savings rhythm (weekly, monthly, manual or auto-save), then track progress on a circular ring that fills as contributions are added. Reaching 100% opens a celebration screen.",
      },
      {
        label: "Send",
        body: "Search for a contact or pick one from recents, enter an amount on a full-screen numpad and confirm with a fee breakdown. Sending takes three taps and doesn't ask for bank details.",
      },
      {
        label: "Pools",
        body: "Create a group pool, invite contacts, and set a target and due date. Every member's contribution is visible to the whole group, so people can see who has paid.",
      },
    ],
    flowScreensCaption:
      "The Goals and Pools screens: progress bars filled from contributions, and each member's share shown by name. The Send screens are in the full set of 19 below.",
    landingHeading: "The landing page",
    landingBody:
      "A separate marketing site introduces the product. The hero shows a cluster of UI cards (a balance, a goal in progress, a pool and a recent transaction) instead of a phone screenshot. The copy is short and covers what the product does and why it's different.",
  },

  role: {
    heading: "Role and stack",
    body: "Solo: product design, UI design, and front-end build. Next.js, TypeScript, Tailwind, Zustand for state, Framer Motion for transitions.",
    differentlyHeading: "What I'd do differently",
    differentlyBody:
      "With more time, I'd connect balances to a backend so Send and Pool contributions feed a single wallet figure instead of three separate mock numbers, and add a proper login flow with session persistence in place of the mocked auth store. These weren't the goal of this pass, which was working out the interaction design end to end.",
  },
} as const;
