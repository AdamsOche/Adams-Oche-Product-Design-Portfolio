/**
 * Stash redesign section copy. First person, plain, no em dashes.
 * Source: stash-handoff/HANDOFF.md. Alt text describes what each PNG shows.
 *
 * Ask Stash and "How I built this" come from the updated handoff. The "How I
 * built this" text is Adams's draft: one line about the old Send flow was
 * changed because the old flow already had a confirm step and a receipt.
 *
 * Left out on purpose: the old landing-page gallery (it shows the discarded
 * invented stats the existing "What I caught and fixed" section already
 * explains), the old overview sheet and the old design-system sheet (both
 * are already on the page).
 */
const BASE = "/case-studies/stash/redesign";

export const stashRedesign = {
  heading: "The redesign",
  prototypeHref: "/projects/stash-redesign/",
  prototypeTitle: "Stash redesign prototype",

  brief: [
    "After the first version, I redesigned Stash. The earlier look was near-black with purple and yellow accents. I wanted money figures that read at a glance in daylight, and goals you could recognise without reading a label.",
    "Below, I explain how I built it. Then come the screens I changed most, before and after, the rest of the new screens, a small assistant I added, and a clickable prototype.",
  ],

  builtHeading: "How I built this",
  built: [
    {
      lead: "The direction was mine.",
      body: "I started from my old dark purple Stash and set the brief: light and bold, like Perq. I chose to keep colour but give each colour a job. I asked for a send flow that starts with a New person option, and a redesigned receipt screen. I asked for a colour test because the app uses a lot of colour. When mint headers read badly with black text, I called for white. I asked for lighter slider borders across the app. For the assistant, I picked the gradient style from two references and ruled out blue because it isn't in Stash's palette.",
    },
    {
      lead: "Where AI helped.",
      body: "I used Claude to build the clickable prototype as one HTML file, run a polish pass against a UI checklist, run contrast and colour-blind checks, and draft the assistant's four screens. It was fast at producing and testing options. It was not the one deciding what Stash should feel like.",
    },
    {
      lead: "What I checked myself.",
      body: "Every screen in the prototype is clickable, so I walked each flow by hand. The Ask Stash answers are scripted, not a live model. I designed what it says, how it shows its numbers, when it admits it doesn't know, and how it asks before moving money.",
    },
    {
      lead: "Where AI didn't belong.",
      body: "The pools and savings flows have no AI in them. They didn't need it.",
    },
  ],

  pairsHeading: "Before and after",
  beforeLabel: "Before",
  afterLabel: "After",
  pairs: [
    {
      name: "Home",
      before: {
        src: `${BASE}/before/home.png`,
        width: 475,
        height: 904,
        alt: "The old Stash home screen on a near-black background: total balance, four quick actions and three savings goals as thin purple progress bars.",
      },
      after: {
        src: `${BASE}/after/home.png`,
        width: 362,
        height: 741,
        alt: "The new Stash home screen on warm cream: a violet card showing the amount saved so far, quick actions for top up, send and new pool, and savings goals as coloured jars.",
      },
    },
    {
      name: "Goals list",
      before: {
        src: `${BASE}/before/goals.png`,
        width: 475,
        height: 904,
        alt: "The old Goals screen: a total saved card and goals listed with an emoji, a percentage and a thin progress bar on a dark background.",
      },
      after: {
        src: `${BASE}/after/goals.png`,
        width: 362,
        height: 741,
        alt: "The new Goals screen: a total saved card, then Lagos rent, Owambe wardrobe and New laptop, each with a coloured jar, its amount, a landing date and a percentage.",
      },
    },
    {
      name: "Goal detail",
      before: {
        src: `${BASE}/before/goal-detail-hd.png`,
        width: 390,
        height: 844,
        alt: "The old goal detail screen for MacBook Pro: a large circular progress ring at 68 percent, saved, target and left amounts, a target date and a list of contributions.",
      },
      after: {
        src: `${BASE}/after/goal-detail.png`,
        width: 724,
        height: 1480,
        alt: "The new goal detail screen for Lagos rent: a coral header with a jar filled to 71 percent, tabs to switch goal, amounts to go and the landing date, quick add amounts and an Add button.",
      },
    },
    {
      name: "New goal",
      before: {
        src: `${BASE}/before/new-goal-hd.png`,
        width: 390,
        height: 844,
        alt: "The old new goal screen: step one of three, a goal name field, category tiles, a target amount and a row of emoji.",
      },
      after: {
        src: `${BASE}/after/newgoal.png`,
        width: 362,
        height: 741,
        alt: "The new goal form: a jar preview with the number of weeks, a goal name, a target, a weekly amount stepper, a colour choice and a Create goal button.",
      },
    },
    {
      name: "Goal reached",
      before: {
        src: `${BASE}/before/success-hd.png`,
        width: 390,
        height: 844,
        alt: "The old goal reached screen: a trophy in a ring of confetti dots, Goal reached for MacBook Pro, a Goal Achiever badge, and Share achievement and Start a new goal buttons.",
      },
      after: {
        src: `${BASE}/after/success.png`,
        width: 362,
        height: 741,
        alt: "The new goal reached screen on marigold yellow with confetti and a jar, reading Lagos rent, sorted, with a button to move the money to a bank.",
      },
    },
    {
      name: "Pools list",
      before: {
        src: `${BASE}/before/pools.png`,
        width: 475,
        height: 904,
        alt: "The old Pools screen: three pools with member avatars, progress bars and the amount pooled, on a dark background.",
      },
      after: {
        src: `${BASE}/after/pools.png`,
        width: 362,
        height: 741,
        alt: "The new Pools screen: one pool being collected with a count of members paid, and one finished pool marked Done.",
      },
    },
    {
      name: "Pool detail",
      before: {
        src: `${BASE}/before/pool-detail.png`,
        width: 475,
        height: 904,
        alt: "The old pool detail screen for Detty December: the total pooled, then five members listed with their share and contribution.",
      },
      after: {
        src: `${BASE}/after/pool.png`,
        width: 362,
        height: 741,
        alt: "The new pool detail screen for the Owambe fund: a card showing seven of nine paid, a row of nine dots, and a list of who still has to pay with a Pay button and a Nudge button.",
      },
    },
    {
      name: "Send",
      before: {
        src: `${BASE}/before/send-hd.png`,
        width: 390,
        height: 844,
        alt: "The old Send to Amaka screen: the recipient, an amount of 15,000 naira, a note field and a numpad.",
      },
      after: {
        src: `${BASE}/after/send.png`,
        width: 362,
        height: 741,
        alt: "The new Send screen: recipients along the top including a New option, a large amount, the balance, fee and daily limit, and a numpad.",
      },
    },
    {
      name: "Receipt",
      before: {
        src: `${BASE}/before/receipt.png`,
        width: 300,
        height: 610,
        alt: "The old Sent screen: a check mark, the amount sent to Amaka Obi and a receipt with reference and time, above Share receipt and Send again buttons.",
      },
      after: {
        src: `${BASE}/after/receipt.png`,
        width: 362,
        height: 741,
        alt: "The new receipt on a mint green header: amount sent, recipient, fee, total, reference and date, with a Share receipt button.",
      },
    },
  ],

  addedHeading: "More screens from the redesign",
  addedIntro: "The rest of the redesigned screens. The empty, loading and failed-transfer states are new.",
  added: [
    {
      name: "Top up",
      src: `${BASE}/after/topup.png`,
      alt: "Top up wallet: Transfer, Card and USSD options, an amount and a numpad.",
    },
    {
      name: "Sign up",
      src: `${BASE}/after/signup.png`,
      alt: "The sign-up screen asking only for a first name and a phone number, with a Send code button.",
    },
    {
      name: "Welcome",
      src: `${BASE}/after/welcome.png`,
      alt: "The welcome screen on violet with a jar and the line Fill a jar every Friday, and a Get started button.",
    },
    {
      name: "Empty home",
      src: `${BASE}/after/empty.png`,
      alt: "The home screen for a new user with nothing saved: a No jars yet message and a Create your first goal button.",
    },
    {
      name: "Loading",
      src: `${BASE}/after/loading.png`,
      alt: "The home screen while loading, shown as soft grey placeholder blocks.",
    },
    {
      name: "Failed transfer",
      src: `${BASE}/after/failed.png`,
      alt: "A failed transfer on a coral header saying the transfer didn't go through, with a note that the money is still in the wallet and a Try again button.",
    },
  ],

  askHeading: "Ask Stash",
  askIntro: [
    "Ask Stash is a small assistant I added to show how I design for AI, not just with it. It only sees what happens in Stash: your jars, pools and transfers. It does not see your bank.",
    "The answers in the prototype are scripted, not from a live model. I designed what it says and how it says it.",
  ],
  ask: [
    {
      name: "Ask",
      src: `${BASE}/after/ask-ask.png`,
      alt: "The Ask Stash start screen on a deep violet gradient: Hello, Tolu, what do you want to know, a note that it only sees Stash jars, pools and transfers, three suggested questions and a field to ask in your own words.",
      caption: "It says up front what it can see. There are three suggested questions, or you can type your own.",
    },
    {
      name: "Answer",
      src: `${BASE}/after/ask-answer.png`,
      alt: "An Ask Stash answer to Am I on track for rent: Yes, rent is full about 6 weeks early, then a table of the numbers it used, and a note on the assumption it made.",
      caption: "The answer comes first. Then the exact numbers it used, and the assumption it made.",
    },
    {
      name: "Unsure",
      src: `${BASE}/after/ask-unsure.png`,
      alt: "An Ask Stash reply to a December spending question, marked Not sure yet: it says it can't give a number because there are only three weeks of data, and offers two things it can do.",
      caption: "When it can't know, it says so. It gives the reason and offers two things it can do.",
    },
    {
      name: "Act",
      src: `${BASE}/after/ask-act.png`,
      alt: "An Ask Stash suggestion to move 30,000 naira from the wallet into the New laptop jar, with the wallet and jar figures after the move, a Move button and a Not now link.",
      caption: "It proposes moving money to the jar that is furthest behind. Nothing moves until you tap, then it confirms and offers Undo.",
    },
  ],
  askStyle:
    "The assistant is the one dark, gradient part of the app, on purpose. It should read as a different mode from the cream money screens. It has a deep violet to ink gradient, a big greeting, glass tiles, an orb and a marigold send button. The chat screens put the question in a gradient header, over a cream answer sheet.",
  askRulesHeading: "The rules behind it",
  askRules: [
    { lead: "Show your working.", body: "The answer comes with the numbers it used and the assumption it made." },
    { lead: "Admit uncertainty in words.", body: "A Not sure yet label says it, so it doesn't rely on colour alone." },
    { lead: "Ask before acting.", body: "Nothing moves until you tap." },
    { lead: "Make every action reversible.", body: "After a move, it confirms and offers Undo." },
  ],

  prototypeHeading: "Try the redesign",
  prototypeIntro: "This is the redesigned version, running in the page. Tap through it.",
  prototypeLinkText: "Open the prototype full screen",

  changedHeading: "What changed and why",
  changed: [
    {
      lead: "Dark purple to light and bold.",
      body: "The old UI was near-black with purple and yellow accents. The new one sits on warm cream with ink text, so money figures read at a glance in daylight.",
    },
    {
      lead: "Colour has jobs.",
      body: "Violet is the main action. Marigold is progress and highlights. Coral is attention. Mint is money in and success. Each goal gets one colour, so a jar is recognisable without reading its label.",
    },
    {
      lead: "Goals show as jars, not rings and thin bars.",
      body: "Progress is a fill level. You can read it from across a table.",
    },
    {
      lead: "Send starts from one row of people.",
      body: "Recipients sit along the top, including a New option. The amount screen shows your balance, the fee and your daily limit.",
    },
    {
      lead: "States are designed.",
      body: "Empty, loading and failed-transfer screens now exist.",
    },
    {
      lead: "One type family.",
      body: "Plus Jakarta Sans throughout, in place of mixed weights and sizes.",
    },
    {
      lead: "Checked for colour accessibility.",
      body: "I audited text contrast and ran a colour-blind simulation, so no state relies on colour alone.",
    },
  ],
} as const;
