/**
 * Matchday case-study copy. Final text, meant to read verbatim — no em
 * dashes by design. Live demo confirmed at https://matchday-ma.vercel.app.
 * Mobile screenshot is pending (author is sending it separately) — the
 * Screens section is built to accept it without a layout change.
 */
export const matchday = {
  liveUrl: "https://matchday-ma.vercel.app" as string | null,
  liveLabel: "Matchday",

  hero: {
    eyebrow: "02 / MATCHDAY · Sports · Product design · SaaS",
    title: "Matchday",
    standfirst:
      "A squad management tool for grassroots and semi-pro football teams, keeping the squad, their form and the next lineup in one place.",
    intro:
      "Built for coaches and team managers who are still tracking players in group chats and notebooks.",
    meta: [
      { label: "Role", value: "Product Designer · Builder" },
      { label: "Platform", value: "Web" },
      { label: "Tools", value: "Figma · Next.js · Supabase · Claude Code" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Amateur teams don't lack software. They lack software built for a Saturday morning. Existing tools assume a club administrator with a laptop and time to fill in forms. Real managers are deciding a lineup on a phone, ten minutes before kick off, with two players who just said they can't make it.",
      "So the whole product is organised around three questions a coach asks every week: who is available, who is playing well, and what does the eleven look like.",
    ],
  },

  decisions: {
    heading: "What I decided, and why",
    items: [
      {
        lead: "Tap to swap, not drag.",
        body: "The formation builder works by selection. Tap a player, then tap another one or someone on the bench, and they swap. Drag targets are unforgiving on a phone at the side of a pitch, which is where most of this actually gets used.",
      },
      {
        lead: "Form as a single number.",
        body: "Each player carries one form rating so a coach can scan the squad instead of reading it. The detail behind the number sits one tap deeper rather than crowding the list.",
      },
      {
        lead: "Position colour as structure.",
        body: "Goalkeeper, defence, midfield and attack each get a consistent colour, so the pitch view is readable at a glance and the squad list and the formation feel like the same system rather than two screens.",
      },
      {
        lead: "Dark mode as a first class case.",
        body: "Evening fixtures and floodlit pitches are normal, so both themes were designed together instead of one being inverted from the other.",
      },
    ],
    changedHeading: "Two decisions I changed",
    changed: [
      {
        lead: "Goals and assists, dropped and then put back.",
        body: "I cut goals tracking early to keep the first version focused on availability and lineups. That was wrong. Form ratings without goals leave a coach with an opinion and no record behind it, so a match events table went in and goals and assists came back.",
      },
      {
        lead: "Every squad size, not just eleven.",
        body: "Matchday started as an eleven a side tool. Most of the teams it is actually for play five and seven a side. Supporting 5, 7, 9 and 11 meant rebuilding the formation data around format rather than treating eleven as the default, including hand placing pitch coordinates for seven new formations. It was the right amount of work for a decision that changed who could use the product at all.",
      },
    ],
  },

  fixes: {
    heading: "What I caught and fixed",
    intro:
      "Before either coach saw it, I ran the app as if I were a stranger to it. Five things came out of that pass, and none of them would have survived a first session with a real user.",
    selfFound: [
      "The sidebar showed a hardcoded name instead of the signed in coach",
      "Unfinished pages were reachable by typing the URL directly, even though nothing linked to them",
      "The invite screen was populated with fake placeholder data that looked real",
      "The squad progress target still assumed eleven a side, so it was wrong for every other format",
      "Copy still referred to goals tracking as unavailable after it had been added back",
    ],
    coachesIntro:
      "Then two coaches used it with their actual squads, one of them running a five a side team, and found two things I had not.",
    coachFound: [
      {
        lead: "Formations did not persist.",
        body: "A coach would set a lineup, leave the screen and come back to find it gone. The kind of bug that is invisible when you are testing a screen and obvious when you are using the app on a Saturday.",
      },
      {
        lead: "Player availability did not update reliably.",
        body: "The single thing the product exists to do, and it was the thing real use broke first.",
      },
    ],
    featureRequest:
      "Both were fixed. They also asked for custom formations, which was a feature request rather than a bug, and the more useful signal of the two: they were already trying to use it for a shape I hadn't anticipated. It isn't built yet.",
    closing:
      "The five I found came from checking my own work properly. The two I missed came from putting it in front of someone who had a match to organise. Both are necessary and neither replaces the other.",
  },

  screens: {
    heading: "Screens",
    visualPassCaption:
      "An early version had gradient borders, glow effects and generated avatars, which is what AI assisted work looks like when nobody decides otherwise. Those came out.",
    landingHeading: "The landing page decision",
    landingBody:
      "The landing page uses a note from me explaining what the product is for, in the place where a SaaS page usually puts testimonials. There were no users yet, so there were no testimonials, and inventing them was not an option.",
  },

  role: {
    heading: "Role and stack",
    body: "Product design and engineering. Research, information architecture, UI, design system, and the build. Next.js and Tailwind, Supabase for database and auth with row level security, a schema covering clubs, players, matches, ratings and match events, a format aware formation builder for 5, 7, 9 and 11 a side, and goals and assists tracking. Responsive, light and dark, mobile first. Deployed and in use.",
    verification:
      "Row level security was tested by signing in as two different coaches and confirming neither could see the other's squad, with both a positive and a negative case rather than assuming the policy worked.",
  },
} as const;
