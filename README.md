# Return on Reno — Next.js site

> 📌 **Start with [`PROJECT.md`](./PROJECT.md)** — the project hub (status, access points, how to work on it). See also [`docs/MAINTENANCE.md`](./docs/MAINTENANCE.md) and [`docs/ROADMAP.md`](./docs/ROADMAP.md).

A Next.js (App Router) version of Return on Reno, built to scale to hundreds of pages the way PetCost does. The calculator is a React component; cost pages are **generated programmatically** from data files. Output is a fully static site (`output: 'export'`) that deploys to Netlify.

## What's here

```
app/
  layout.jsx                       Site shell (header/footer, global metadata, favicon/OG)
  globals.css                      All styling
  page.jsx                         Home (hero + calculator + opt-in + methodology)
  components/
    Calculator.jsx                 The interactive calculator (client component)
    Header.jsx, Footer.jsx
  lib/
    projects.js                    ← EDIT THIS to add/adjust projects (drives everything)
    regions.js                     ← EDIT THIS to add currencies/cities
    format.js                      money formatting helper
  cost/
    page.jsx                       Hub: all project cost guides
    [project]/page.jsx             Generated page per project        (15 pages)
    [project]/[region]/page.jsx    Generated page per project×region (135 pages)
  guides/best-home-improvements-roi/page.jsx   Flagship article
  about/ contact/ privacy/ terms/ affiliate-disclosure/   Trust pages
  sitemap.js                       Auto-generates sitemap.xml (all pages)
  robots.js                        Auto-generates robots.txt
public/
  ads.txt                          Your AdSense publisher line
  favicon.*, apple-touch-icon.png, og-image.png
```

Current scale: **15 projects × 9 regions = 135 region pages**, plus 15 project pages, plus static pages ≈ **158 pages** — all from these templates and data files.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy (Netlify)

```bash
npm run build    # produces ./out  (fully static)
```

- **Netlify via Git (recommended):** push this folder to a GitHub repo, then in Netlify → Add new site → Import from Git. `netlify.toml` already sets build command `npm run build` and publish dir `out`. Every push auto-deploys.
- **Netlify drag-drop:** run `npm run build` locally and drag the `out/` folder into Netlify.
- Domain, DNS, email, and AdSense setup are in `../SETUP-GUIDE-and-PETCOST-LEARNINGS.md`.

## How to scale (the whole point)

**Add a project:** append one object to `PROJECTS` in `app/lib/projects.js`. You instantly get a new calculator entry, a `/cost/<slug>/` page, a `/cost/<slug>/<region>/` page for every region, sitemap entries, and league-table rows.

**Add a city/region:** append one object to `REGIONS` in `app/lib/regions.js`. Every project gains a new regional page automatically. (e.g. adding 20 cities → 15 × 29 = 435 region pages.)

This is exactly how PetCost reaches 300+ pages: data in, pages out. Use AI to expand the data files (more projects, more cities, richer per-page copy) — just keep each page's content genuinely useful and verified to stay on the right side of Google's quality guidelines.

## Wiring up the forms (before launch)

- **Contact form** (`app/contact/page.jsx`) is already set up for **Netlify Forms** (`data-netlify`, hidden `form-name`, honeypot). After deploy, set the notification email in Netlify → Forms to `hello@returnonreno.com`.
- **Email opt-in** (`app/page.jsx`) is a placeholder `<form>` — point it at MailerLite/Beehiiv and connect the lead-magnet delivery.

## Notes / next steps

- The calculator's currency FX rates and the cost/ROI benchmarks live in `lib/` — update periodically.
- Consider per-page Open Graph images later (currently all pages share `/og-image.png`).
- Add more guides under `app/guides/<slug>/page.jsx` to strengthen content depth for AdSense and rankings.
- A full production build wasn't run in the authoring environment (no package registry access there); run `npm install && npm run build` locally to confirm, then deploy. All data/logic modules were syntax- and logic-checked.
```
