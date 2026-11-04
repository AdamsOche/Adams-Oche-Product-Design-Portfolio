/**
 * Plaza Board case-study copy, kept word for word from plaza-case-study.html.
 * It is a concept built from public research: no interviews, invented data.
 * The "Read this first" note must stay.
 */
export const plazaBoard = {
  prototypeHref: "/projects/plaza-board/",

  hero: {
    tag: "Case study · Concept project",
    title: "Plaza Board: one screen for a whole building",
    standfirst:
      "A concept for plaza owners who want to see which shops are let, empty, under repair or behind on rent, without walking the building.",
    meta: [
      { label: "Type", value: "Concept, not a live product" },
      { label: "Scope", value: "Product design and a working prototype" },
      { label: "Platforms", value: "Owner web app, caretaker mobile view" },
      { label: "Basis", value: "Public research. No interviews." },
    ],
  },

  note: {
    label: "Read this first",
    body: "This is a concept I designed and prototyped myself. I did not interview any owners, caretakers or tenants. The problem comes from public articles and competitor sites, listed at the end. All names, units and naira figures are invented. Tamarind Plaza is not a real building.",
  },

  problem: {
    label: "The problem",
    heading: "An owner should not have to walk the building to know its state",
    paragraphs: [
      "A plaza is many small businesses under one roof. The owner keeps asking the same questions: which units are let, which are empty, which are shut for repairs, and who hasn't paid?",
      "I assume, and would need to test, that many owners answer this from a notebook, a spreadsheet or a caretaker's messages. That works until the building grows or the owner isn't on site.",
      "Rent timing makes it worse. Landlords in Nigeria commonly collect a year's rent at once, partly to cut vacancy and default risk. So a due date can sit a year away, then be weeks late before anyone notices.",
    ],
  },

  exists: {
    label: "What exists",
    heading: "The gap I found",
    intro: "I looked at what already exists. None of it puts the building itself on the main screen.",
    columns: ["Tool", "Built for", "Where it stops short for this job"],
    rows: [
      [
        "OurProperty NG",
        "Nigerian owners and agents. Unit tracking, rent and service charge collection, maintenance requests.",
        "A general all-in-one. I found no visual building view or caretaker-first flow.",
      ],
      [
        "Chainels",
        "Shopping centres and retail parks with property teams.",
        "Built for managed malls, not a single owner with a caretaker.",
      ],
      [
        "Residential rental apps",
        "Renters in Lagos and Abuja.",
        "Not about commercial units at all.",
      ],
      [
        "Notebook, spreadsheet, chat",
        "Probably most small owners.",
        "No overview, no reminders, depends on one person remembering.",
      ],
    ],
    outro:
      "Property dashboards on Dribbble mostly look the same: KPI tiles, a donut chart, a house photo. The floor-plan designs I found were for buyers browsing apartments, not for someone managing the building.",
  },

  people: {
    label: "Who it is for",
    heading: "Two people, two jobs",
    cards: [
      {
        title: "The owner",
        body: "Wants the state of the building without making a call. Needs overdue rent, open repairs and empty units in one place.",
      },
      {
        title: "The caretaker",
        body: "Is on site and sees changes first: a shop closes, a tenant leaves, a pipe bursts. Needs to log it in seconds on a phone.",
      },
    ],
    note: "These are assumptions, not findings. Testing them is the first thing I'd do.",
  },

  directions: {
    label: "Directions",
    heading: "Three looks, one choice",
    intro: "I drew the same floor plan three ways to compare the feel.",
    cards: [
      {
        tag: "A",
        title: "Departures board",
        body: "Dark and dense, like an airport board. Fast to read, but cold and technical for an owner.",
      },
      {
        tag: "B · chosen",
        title: "Architect's drawing",
        body: "Thin ink lines, drafting grid, hatching for repairs, dashed outline for empty units. Calm and precise, and it makes the building the hero.",
        chosen: true,
      },
      {
        tag: "C",
        title: "Shop fascia",
        body: "Bold colour blocks like shop signs. Friendly and easy to read, but harder to keep looking premium.",
      },
    ],
    outro:
      "I chose B. The product is a plan of a building, and an architect's sheet is how people already picture a plan. It also looks nothing like the usual dashboard.",
  },

  decisions: {
    label: "Decisions",
    heading: "Choices that shaped the screens",
    items: [
      {
        lead: "The plan is the home screen.",
        body: "No KPI tiles. Each unit shows its code, size, tenant and status. Status never depends on colour alone: occupied is filled, vacant is dashed, under repair is hatched, overdue is red with the days late.",
      },
      {
        lead: "A needs-attention list instead of charts.",
        body: "Overdue rent, open repairs and rent due within 30 days. Each item opens its unit.",
      },
      {
        lead: "Rent follows the paid-until date.",
        body: "This suits annual rent. A unit goes overdue when that date passes, and a bar shows how much of the paid period is used.",
      },
      {
        lead: "A separate caretaker view.",
        body: "A short list where a status changes in two taps. The owner's plan updates straight away.",
      },
      {
        lead: "A rail with counts.",
        body: "It becomes a bottom tab bar on phones. Badges show overdue rent and open repairs from any screen.",
      },
    ],
  },

  review: {
    label: "UX review",
    heading: "What I changed after reviewing my own work",
    intro: "My first version had status filters that looked dead. I reviewed it and fixed:",
    items: [
      "Filter buttons had no hover or selected state. They now fill when selected, show a tick, and a chip lets you clear the filter.",
      "A filter could hide matches on the other floor. Floor tabs now show the match count.",
      "Setting a unit to vacant wipes the tenant, and a payment is easy to record by mistake. Both now have Undo.",
      "Keyboard focus jumped away on every refresh. It now stays on the control you used.",
      "Status buttons were small for touch. They're taller.",
    ],
  },

  screens: {
    label: "Screens",
    heading: "The prototype",
    building: {
      file: "building-desktop.png",
      alt: "Building view on desktop: floor plan, occupancy bar and needs-attention list",
      caption:
        "Building view. The plan, the occupancy bar that doubles as a filter, and the list of what needs attention today.",
    },
    grid: [
      {
        file: "unit-detail.png",
        alt: "Unit detail with rent progress and history",
        caption:
          "Unit detail. Status, tenant, rent period progress and a history of payments and repairs.",
      },
      {
        file: "building-mobile.png",
        alt: "Building view on mobile with bottom tab bar",
        caption: "Mobile. The plan shows three units per row and the rail becomes a bottom tab bar.",
      },
      {
        file: "rent.png",
        alt: "Rent and dues table",
        caption: "Rent and dues, earliest due first.",
      },
      {
        file: "caretaker.png",
        alt: "Caretaker app status list",
        caption: "Caretaker app. A unit's status changes in two taps.",
      },
    ],
    linkText: "Open the interactive prototype",
    afterLink: "Try recording a payment on G04 and watch the plan and the list update.",
  },

  limits: {
    label: "Limits",
    heading: "What this is not, and what I would do next",
    items: [
      { body: "It has no users, so I can't claim it solves the problem. It's a design response to a problem I read about." },
      { body: "The prototype keeps data in the page only. Nothing is saved and no reminder is sent." },
      { lead: "Next:", body: "interview a few owners and caretakers about how they track units today." },
      { lead: "Next:", body: "run a short usability test with five people and fix where they hesitate." },
      { lead: "Next:", body: "build it for real: saved data, sign-in, and WhatsApp or SMS reminders." },
    ],
  },

  sources: {
    label: "Sources",
    items: [
      {
        text: "Estate Intel: why landlords in Nigeria collect yearly rent",
        href: "https://estateintel.com/4-reasons-why-landlords-collect-yearly-rent-from-tenants-in-nigeria",
      },
      {
        text: "Techpoint Africa: Nigerian proptech startups",
        href: "https://techpoint.africa/insight/nigeria-housing-problem-proptech-startups/",
      },
      {
        text: "OurProperty NG listing",
        href: "https://peerpush.com/p/ourproperty-ng-or-all-in-one-software",
      },
      {
        text: "Chainels: retail property management",
        href: "https://getchainels.com/en/retail",
      },
    ],
  },
} as const;
