# Adams Oche — Portfolio

Personal portfolio for Adams Oche, product designer and builder (Abuja, NG).

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS
**Hosting:** Netlify, deployed via GitHub git integration on pushes to `master`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — routes (homepage, case studies under `work/`)
- `src/components/` — shared UI, including `case-study/` primitives used by
  every case study page
- `src/lib/` — site content and per-project case-study copy
- `public/work/`, `public/case-studies/` — processed images referenced by
  components (kebab-case, real dimensions tracked alongside)
- `public/Portfolio pics/` — raw source screenshots, working material for
  case studies not yet built

See [AGENTS.md](AGENTS.md) for content rules and the pre-deploy checklist.
