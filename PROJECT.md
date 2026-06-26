# Return on Reno — Project Hub

**The single source of truth for this site.** Read this first before any work. Last updated: 25 June 2026.

---

## 1. What this is
**Return on Reno** (returnonreno.com) is a free renovation **cost + resale-ROI calculator**. The differentiator vs. other cost calculators: it shows not just what a project costs, but how much of that you recoup at resale (and the net cost / value gain). Built to scale to PetCost-style page volume via programmatic SEO.

- **Live site:** https://returnonreno.com
- **Status:** Live, auto-deploying, monetisation + email funnel wired. Submitted to Google Search Console (domain verified, sitemap submitted) and AdSense (site added, ads.txt live) — awaiting Google indexing/review.
- **Owner:** Darren (Gratz27)

## 2. Stack & architecture
| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router), React 18 |
| Output | **Static export** (`output: 'export'` → `out/`) — fully prerendered HTML |
| Styling | Plain CSS (`app/globals.css`), single accent theme |
| Hosting | Netlify (auto-build from GitHub) |
| Serverless | Netlify Functions (`netlify/functions/`) for email |
| DNS | **Netlify-managed** (nameservers delegated from Namecheap to NS1) |
| Repo | https://github.com/Gratz27/returnonreno (branch `main`) |

**Why static export:** ~560 content pages prerender to static HTML — great SEO, cheap hosting, no server needed. Email needs a server, so that's handled by Netlify Functions (which coexist with the static export).

## 3. The programmatic engine (how the site scales)
Pages are generated from two data files — **edit data, not pages**:
- `app/lib/projects.js` — the renovation projects (28 and growing — the weekly content task adds more). Each has `slug, name, baseUSD, roi, blurb, includes[], tip`, and optional `roiNote`.
- `app/lib/regions.js` — currencies + regions/cities (currently 22). Each has cost multiplier + a unique `blurb`.

This generates: 24 project pages + (24 × 22 =) 528 region pages + guides/trust pages ≈ **600+ pages and growing**, plus the auto sitemap. Add one project or one city → new pages, league-table rows, and sitemap entries appear everywhere automatically.

Routes:
- `/` — home (hero + calculator)
- `/cost/` — project hub
- `/cost/[project]/` — per-project cost & ROI guide
- `/cost/[project]/[region]/` — per-project, per-city guide
- `/guides/best-home-improvements-roi/` — flagship article
- `/about/ /contact/ /privacy/ /terms/ /affiliate-disclosure/` — trust pages
- `/subscribed/ /contact-success/` — form success pages (noindex)
- `app/sitemap.js` + `app/robots.js` — auto-generated

## 4. Operational facts (access points)
> Secrets live in Netlify env vars and the respective dashboards — **never commit keys**. This lists *where* things are, not the secrets themselves.

| Thing | Detail |
|---|---|
| Domain registrar | Namecheap (returnonreno.com) |
| DNS | Netlify DNS (NS1 nameservers) — **all records, incl. email, managed here** |
| Hosting / deploys | Netlify, connected to GitHub repo, auto-deploy on push to `main` |
| Build command | `npm run build` · publish dir `out` (see `netlify.toml`) |
| Mailbox (incoming + reply) | Namecheap **Private Email** — `hello@`, `privacy@returnonreno.com` (MX `privateemail.com`; SPF/DKIM `default`/DMARC) |
| Transactional sending | **Resend** (verified domain; DKIM `resend._domainkey`; `send` subdomain SPF + MX via Amazon SES) |
| Ads | Google AdSense Auto Ads, publisher `ca-pub-3275113356221002` (`public/ads.txt`, meta tag in layout) |
| Analytics | GA4 via `NEXT_PUBLIC_GA_ID` env var (gated — only loads if set) |
| Lead magnet | `public/renovation-budget-worksheet.xlsx` (emailed by the subscribe function) |

**Netlify environment variables** (Site config → Environment variables):
- `RESEND_API_KEY` — required (email won't send without it)
- `RESEND_AUDIENCE_ID` — optional (adds opt-ins to a Resend audience)
- `NEXT_PUBLIC_GA_ID` — optional (GA4, e.g. `G-XXXXXXXXXX`)

## 5. Email flow
- **Opt-in:** home form → `POST /.netlify/functions/subscribe` → Resend adds contact + emails the worksheet → redirect `/subscribed/`.
- **Contact:** contact form → `POST /.netlify/functions/contact` → Resend emails `hello@` (reply-to visitor) → redirect `/contact-success/`.
- Both have a hidden `company` honeypot the functions drop. Auth: SPF + DKIM + DMARC all aligned (DMARC currently `p=none`; tighten to `quarantine` once warm).

## 6. How to work on it
```bash
# local dev
npm install
npm run dev          # http://localhost:3000

# deploy = commit + push (Netlify auto-builds)
git add -A && git commit -m "..." && git push
```
- **Always verify the build is green in Netlify → Deploys after pushing.** A failed build keeps the last good deploy live (this has bitten us — e.g. the app/-icon favicon change).
- Favicons live in `public/` and are referenced in `app/layout.jsx` with `?v=N` cache-busting. Do **not** move them to the `app/` icon convention (it broke the static-export build).
- After deploy, public pages may be CDN/cache-stale for a short while — append `?v=test` to bust when verifying.

## 7. Key docs (this folder)
- `PROJECT.md` — this file (start here)
- `docs/MAINTENANCE.md` — recurring maintenance schedule & checklists
- `docs/ROADMAP.md` — improvement backlog / what's next
- `docs/DESIGN-AUDIT.md` — visual/UX audit + redesign direction (Jun 2026)
- `docs/SETUP-GUIDE-and-PETCOST-LEARNINGS.md` — original infra setup + PetCost learnings
- `docs/EMAIL-RESEND-SETUP.md` — Resend + DNS email setup
- `docs/website-opportunity-strategy.md` — the original strategy/opportunity report

## 8. Known open items (as of 25 Jun 2026)
- [x] **Google Search Console** — domain property verified (DNS TXT), `sitemap.xml` submitted (560 URLs). ⏳ Awaiting Google to crawl/index over coming weeks — monitor Coverage. *(Note: submit the sitemap path as `sitemap.xml`, not the root URL.)*
- [x] **AdSense** — site `returnonreno.com` added; `ads.txt` live with publisher line `pub-3275113356221002`. ⏳ Awaiting Google review (days–2 weeks) + ads.txt crawl → "Authorized".
- [ ] Confirm `NEXT_PUBLIC_GA_ID` is set (GA4 live)
- [ ] Email warm-up; later tighten DMARC to `p=quarantine`
- [ ] Replace placeholder affiliate/lead offer with a real, disclosed one
- [ ] Grow content (more cities, projects, guides) — see ROADMAP

## 9. Changelog (high level)
- **26 Jun 2026** — Competitor audit; Tier 1 calculator tools (compare/split-budget mode, custom-quote override, shareable links); Guides hub + 3 new guides + Renovation ROI Index data study; embeddable widget (/embed.html); nav adds Guides; project counts made dynamic.
- **26 Jun 2026** — Visual redesign (see docs/DESIGN-AUDIT.md): Phase 1 warm palette + Fraunces/Inter type, result module + ROI bars, mobile collapses; Phase 2 icon-chip project picker, motion, sticky mobile bar; Phase 3 hero illustration, visual project-page heroes, country-grouped regional cost chips.
- **25 Jun 2026** — Submitted to Google Search Console (domain verified via DNS TXT, sitemap.xml submitted) and AdSense (site added; ads.txt confirmed live). Awaiting Google indexing/review. Added project hub (PROJECT/MAINTENANCE/ROADMAP) + 4 scheduled maintenance tasks.
- **25 Jun 2026** — Refined pool ROI to NAR ~55% + climate note; clarified "net cost after resale" wording site-wide.
- **25 Jun 2026** — Wired forms to Resend (functions); favicon cache-bust fix; built budget worksheet; relabelled >100% ROI as "net value gain".
- **24 Jun 2026** — AdSense Auto Ads + GA4 + ads.txt; removed ad placeholders; OG fixes.
- **24 Jun 2026** — Expanded to 24 projects × 22 regions (~560 pages).
- **24 Jun 2026** — Built Next.js programmatic scaffold; migrated from static HTML MVP.
