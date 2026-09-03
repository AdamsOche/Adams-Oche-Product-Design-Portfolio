# Project rules

Personal portfolio for Adams Oche, product designer and builder, Abuja. Next.js on Netlify at adamsoche.netlify.app.

Everything below has been violated in a previous build of this site. None of it is inferable from the current codebase, because it has all been fixed. That is exactly why it is written down.

---

## Non-negotiables

### 1. No fabricated content

No testimonials, user counts, revenue figures, ratings, download numbers or "trusted by" logos unless they are real and verifiable. There is no placeholder version of this rule. Placeholders ship.

A previous version of the Stash landing page carried "12,000+ active savers", a 4.8 star rating, generated avatars and a badge reading "Now live in Nigeria & Ghana", for a product that does not exist.

The real, usable facts are: two coaches tested Matchday with their actual squads, one running a five a side team; Stash is 19 screens; Sono runs in Paystack test mode.

### 2. None of this was no-code

Real source code was written for all three projects, primarily with Claude Code. Never describe any of it as "no-code". Never list Bubble, Webflow or Lovable as a tool used on Sono, Matchday or Stash.

A previous draft listed Sono's tools as "Figma · Lovable · No-code" and called it a no-code build. The site identity read "Product Designer · No-code Builder". Both are wrong and both hid the most valuable part of the work.

Correct tool lines:
- Sono: Figma · Next.js · Supabase · Paystack · Claude Code
- Matchday: Figma · Next.js · Supabase · Claude Code
- Stash: Figma · Next.js · Tailwind

NativeWind is not on any tools line. It is a React Native library and these are web apps.

Site identity is **Product Designer · Builder**. Not "Engineer", which overclaims. Not "AI-assisted Builder", which makes the tool the headline.

### 3. Sono is not a marketplace

It is one producer's own storefront, reached only by a link the producer shares. No browsing, no discovery, no cross-producer catalog. The product does not have these and the site must never imply it does.

The word "marketplace" may appear **only** in Sono's case study, in the pivot section, describing what the first version was and what got removed. Nowhere else: not in page titles, meta descriptions, OG tags, category tags, nav labels, alt text or body copy.

Grep before every deploy:

```bash
grep -ri "marketplace" src/ public/
```

Expect exactly the known hits in Sono's pivot section. Anything else is a regression.

### 4. Real contact details

- Email: adamsemma04@gmail.com
- LinkedIn: https://www.linkedin.com/in/adams-oche-aa5599250/
- Behance: https://www.behance.net/adamsoche
- X: https://x.com/AdamsOche9

No `href="#"` anywhere. No example.com. A previous build shipped `hello@example.com` on the primary call to action, so the one thing the whole page existed to do was broken.

---

## Case study structure

All three share one skeleton, in this order:

1. Problem
2. What I decided, and why
3. What I caught and fixed
4. Screens
5. Role and stack

Section 3 is the differentiator and the thing most portfolios leave out. Do not sand it into polished conclusions. It carries the checkout that silently redirected, the storage policy that read correctly and wasn't, the formation that didn't persist.

Sono's section 2 carries the pivot: it was designed as a marketplace, and search, browsing, the cart, buyer accounts and the role choice were all removed after a conversation with a producer who had tried selling on BeatStars. That is the strongest single passage on the site. Do not compress it.

Stash is deliberately shorter than the other two. There is no backend and no users. Padding it to match the others is the tell.

---

## Voice

Plain and direct. Short sentences. The site should sound like a person typing, not like marketing copy.

Specifically banned, because they read as machine-written:

- Em dashes. Use commas, full stops, or restructure the sentence. Do not replace every em dash with a comma either, that just trades one uniform tic for another.
- "It's not just X, it's Y" constructions
- Rule-of-three flourishes
- Words doing no work: seamless, robust, elevate, leverage, delightful, magical

State facts and let them carry. "Two coaches used it with their real squads and found two bugs I hadn't" beats any adjective available.

---

## Design direction

Warm off-white background, near-black text. **No accent colour in the site chrome.** All colour comes from the embedded product screenshots. Do not introduce a brand accent.

- Two column sections: short heading left, body right
- Full bleed hairline dividers between sections
- Black pill primary button, outlined pill secondary
- Letterspaced uppercase eyebrows for metadata
- Case study body copy at a narrow measure, roughly 65 to 70 characters, with images breaking out to full width

Out, permanently: gradient text, gradient borders, glow and blur halos, stock or generated avatars, and any person-image standing in for a real person. These were stripped out of Stash once already and must not return.

Numbering is allowed only where order carries real information. Project cards are numbered. Sections are not, because Contact is not step five of anything.

Accessibility floor: WCAG AA contrast on all text including muted text and eyebrows, visible keyboard focus, responsive to mobile, `prefers-reduced-motion` respected.

---

## Pre-deploy checklist

- [ ] `grep -ri "marketplace" src/ public/` returns only Sono's pivot section
- [ ] `grep -ri "no-code\|Bubble\|Webflow\|Lovable\|example.com\|hello@" src/ public/` returns nothing
- [ ] No em dashes in rendered copy
- [ ] Every number and quote on the site is real
- [ ] Sono labelled as test mode, Stash labelled as concept on mock data
- [ ] All four contact links resolve
- [ ] og:image present on every route, twitter:card is summary_large_image
- [ ] Lighthouse color-contrast scores 1 on all routes
