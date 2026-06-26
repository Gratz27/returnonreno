# Roadmap / Improvement Backlog

Living list of what to build next. Roughly priority-ordered. Move done items to PROJECT.md changelog.

## Now (get found + earning)
- [ ] **Google Search Console** — add domain property (DNS TXT), submit `sitemap.xml`, request indexing for home + key pages.
- [ ] **AdSense** — add returnonreno.com as a site for review (account already approved; ads.txt + Auto Ads in place).
- [ ] **GA4** — confirm `NEXT_PUBLIC_GA_ID` set and recording.
- [ ] **Real affiliate/lead offer** — replace placeholder CTA with a disclosed contractor-quote or retailer affiliate.

## Design / UX (see docs/DESIGN-AUDIT.md for full direction)
- [ ] **Phase 1 — visual lift:** new colour + type + spacing system; warm background; league table → horizontal ROI bars (top 6 + "show all 24"); result module redesign (split bar + recoup gauge + count-up + verdict pill); mobile collapses for regional table / methodology / "what's included".
- [ ] **Phase 2 — engagement:** visual project picker (icon chips) + per-project icons; motion pass (count-ups, bar fills, transitions, scroll reveal); sticky mobile result/CTA bar.
- [ ] **Phase 3 — identity:** hero illustration / brand motif; richer project-page heroes; city selector/map for regional data.

## Content (the growth engine)
- [ ] Expand cities: add 15–30 more (UK regional, AU/NZ, more US metros) → multiplies page count.
- [ ] Add projects: fence, driveway/paving, sunroom, smart-home/EV charger, loft conversion variants.
- [ ] Supporting guides: "kitchen vs bathroom ROI", "renovate to sell vs stay", "highest-ROI exterior upgrades", "how much to spend vs home value".
- [ ] Per-page OG images (currently all share one).

## Accuracy / model
- [ ] **Climate-aware ROI** for pools (and maybe decks/HVAC): warm regions higher, cold lower — pools are highly location-dependent.
- [ ] Periodic FX-rate refresh in `regions.js` (rates are hard-coded estimates).
- [ ] Annual cost-data review vs Cost-vs-Value / NAR.

## Trust / E-E-A-T
- [ ] Named author/about with credentials or methodology depth.
- [ ] Add a "last reviewed" automation or visible data sources.

## Email / funnel
- [ ] Welcome sequence in Resend (not just the worksheet).
- [ ] Tighten DMARC to `p=quarantine` after warm-up.

## Distribution
- [ ] Pinterest (renovation/home audience skews well there) + a few seed pins.
- [ ] Embeddable calculator widget for backlinks.
- [ ] A "[year] renovation ROI index" data study as a link magnet.

## Tech
- [ ] Monthly dependency updates (Next/React).
- [ ] Consider per-project FAQ schema expansion for richer SERP features.

## Found in monthly SEO review — 26 Jun 2026
- [ ] **Fix stale "15 projects" copy (quick win, accuracy).** Home, `/cost/`, and the flagship guide still say "15+ projects" / "Compare 15 projects" / "rank 15 common projects" / "Pick any of these 15 projects," but the site now generates **24** projects (the league tables already list all 24). Update the meta descriptions and guide body to "24" (or wire to a dynamic count) so copy matches content — a freshness/trust signal and avoids an obvious mismatch for users and reviewers.
- [ ] **Add 2–3 high-intent comparison/decision guides.** The single flagship guide is strong; add sibling guides targeting searchable, commercial-intent queries and internally link them: "Kitchen vs bathroom remodel: which has better ROI?", "Does a pool add value to a home?", and "Renovating to sell: a room-by-room ROI checklist." These reuse existing data, deepen topical authority, and give the calculator more entry points.
- [ ] **Add FAQPage structured data to project pages.** Each `/cost/[project]/` page already has Q&A-style content (what's included, net-cost explanation, methodology). Marking it up as FAQPage schema can win SERP rich results across all 24 project pages at once — high leverage for a programmatic site.
- Note: sitemap flat at 560 URLs (24 projects × 22 regions + home + hub + guide + 5 trust pages) — unchanged since the 25 Jun build, as expected with no new projects/cities. The "expand cities / add projects" roadmap items above remain the main growth lever.
