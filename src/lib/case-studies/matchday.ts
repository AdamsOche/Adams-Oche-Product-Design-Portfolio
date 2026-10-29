/**
 * Matchday case-study copy. No em dashes by design. Live demo confirmed at
 * https://matchday-ma.vercel.app.
 *
 * Root causes for the two coach-reported bugs aren't recorded in the project files, so the copy
 * says what happened and that both were fixed, and nothing more.
 */
export const matchday = {
  liveUrl: "https://matchday-ma.vercel.app" as string | null,
  liveLabel: "Matchday",
  brandColor: "#00cc6a",
  brandTextColor: "#14120f",

  hero: {
    eyebrow: "02 / MATCHDAY · Sports · Product design · SaaS",
    title: "Matchday",
    standfirst:
      "A squad management tool that helps football coaches check player availability and organise their squad and lineup before a match.",
    intro:
      "Built for coaches and team managers who track players in group chats and notebooks.",
    meta: [
      { label: "Role", value: "Product Designer · Builder" },
      { label: "Platform", value: "Web, responsive" },
      { label: "Tools", value: "Figma · Next.js · Supabase · Claude Code" },
    ],
  },

  problem: {
    heading: "The problem",
    paragraphs: [
      "Most squad management tools assume a club administrator with a laptop and time to fill in forms. A grassroots coach is more likely to be sorting out the lineup on their phone shortly before kickoff, after a few players have dropped out.",
      "The product is organised around three questions a coach asks every week: who is available, who is playing well, and what the lineup looks like.",
    ],
  },

  decisions: {
    heading: "What I decided, and why",
    items: [
      {
        lead: "Tap to swap instead of drag.",
        body: "In the formation builder you tap a player, then tap another player or someone on the bench, and they swap. Drag targets are hard to hit on a phone, and a phone is where I expected most of the use.",
      },
      {
        lead: "One form rating per player.",
        body: "A single number lets a coach scan the squad quickly. The detail behind it is one tap away instead of crowding the list.",
      },
      {
        lead: "Consistent position colours.",
        body: "Goalkeepers, defenders, midfielders and attackers each have their own colour, used in both the squad list and the formation view.",
      },
      {
        lead: "Light and dark themes.",
        body: "Many fixtures are played in the evening, so I designed both themes together.",
      },
    ],
    changedHeading: "Two decisions I changed",
    changed: [
      {
        lead: "Goals and assists were removed, then added back.",
        body: "I removed goals tracking early to keep the first version focused on availability and lineups. I added it back with a match events table, because form ratings without goals and assists gave a coach nothing to check them against.",
      },
      {
        lead: "Support for every squad size.",
        body: "Matchday started as an eleven-a-side tool, but most of the teams it is for play five or seven a side. I rebuilt the formation data around match format and added 5, 7, 9 and 11 a side, including pitch coordinates for seven new formations that I placed by hand.",
      },
    ],
  },

  fixes: {
    heading: "Testing and fixes",
    intro:
      "Before the coach tests, I went through the app as if I had never seen it and fixed these issues:",
    selfFound: [
      "The sidebar showed a hardcoded name instead of the signed in coach",
      "Unfinished pages could be reached by typing the URL, even though nothing linked to them",
      "The invite screen showed placeholder data that looked real",
      "The squad progress target still assumed eleven a side, so it was wrong for other formats",
      "Some copy still described goals tracking as unavailable after it had been added back",
    ],
    coachesIntro:
      "Two coaches then used Matchday with their real squads, one of them running a five-a-side team. They found two problems my own checks had missed, both in the core of the product:",
    coachFound: [
      {
        lead: "Formations didn't save.",
        body: "A coach would set a lineup, leave the screen and find it gone when they came back.",
      },
      {
        lead: "Player availability didn't always update.",
        body: "Availability is the main thing Matchday is for, so this was the most important fix.",
      },
    ],
    featureRequest:
      "Both were fixed after the tests. The coaches also asked for custom formations. That is a feature request, not a bug, and it showed them trying to use Matchday for a setup I hadn't planned for. I have since added custom formations to the formation builder.",
  },

  screens: {
    heading: "Screens",
    formationCaption:
      "The formation builder, with the bench panel and formation switcher.",
    mobileCaption: "The formation builder on a phone.",
    landingHeading: "The landing page",
    landingBody:
      "The landing page has a short note from me explaining what the product is for, in the place where many SaaS pages put testimonials. Matchday had no users at that point, so there were no testimonials to show and I didn't invent any. An early version also had gradient borders, glow effects and generated avatars, which I removed.",
  },

  role: {
    heading: "Role and stack",
    body: "Product design and engineering: research, information architecture, UI, design system and the build. Matchday is a responsive web app, designed mobile-first, with light and dark themes. It is built with Next.js and Tailwind, with Supabase for the database and auth using row level security. The schema covers clubs, players, matches, ratings and match events, and the app includes a formation builder for 5, 7, 9 and 11 a side and goals and assists tracking. It is deployed, and two coaches tested it with their squads.",
    verification:
      "I tested row level security by signing in as two different coaches and confirming that neither could see the other's squad, checking both that access was allowed and that it was blocked.",
  },
} as const;
