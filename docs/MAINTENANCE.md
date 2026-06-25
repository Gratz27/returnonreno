# Maintenance Schedule & Checklists

Keeps Return on Reno healthy, accurate, and growing without drifting. Cadences below are the recommendation; the ✅-marked ones can be **automated as scheduled tasks** (see PROJECT.md → ask the assistant to set them up).

---

## Weekly
- ✅ **Site health check** — homepage + a sample of project/region pages load (200), `sitemap.xml`, `robots.txt`, `ads.txt` all serve; SPF/DKIM/DMARC + Resend DNS records still resolve. *(Fully automatable — uses page fetches + DNS lookups.)*
- ✅ **Indexing check** — review Google Search Console: new pages indexed? any "Crawled – not indexed" / coverage errors? *(Needs GSC access.)*
- ✅ **Content growth** — publish/expand: add 1–2 cities or a project to the data files, or draft one new guide. *(Assistant can draft + propose data edits.)*
- **Subscribers** — glance at Resend audience / opt-ins; sanity-check the worksheet email still sends.

## Monthly
- ✅ **Performance review** — GA4 traffic (top pages, sources, trend) + AdSense revenue/RPM; note wins and weak pages. *(Needs GA4 + AdSense access.)*
- **Freshness** — bump "Reviewed [month]" dates on pages that are still accurate; flag any cost/ROI figure that looks stale.
- ✅ **Dependency & security** — `npm outdated` / `npm audit`; update Next/React patch versions; redeploy and confirm green. *(Assistant can run + report; apply with care.)*
- **Monetisation** — is the affiliate/lead offer live and converting? Test the links (no broken/again-mis-targeted shortlinks).

## Quarterly
- **Data refresh** — re-check cost benchmarks & ROI figures against latest Cost-vs-Value / NAR data; update `projects.js`. Refresh FX rates in `regions.js`.
- **SEO/keyword review** — what's ranking, what's not; find content gaps; plan the next batch of programmatic pages or guides.
- **Competitor scan** — what are other renovation-cost sites doing; any positioning gaps to claim.
- **Email hygiene** — once sending is clean, tighten DMARC `p=none` → `p=quarantine`; review deliverability (mail-tester).

## As-needed
- After any data/code change: **push → confirm Netlify deploy is green** → spot-check the affected page (cache-bust with `?v=test`).
- New high-value project/city ideas → add to `docs/ROADMAP.md`.

---

## Quick-reference checklists

**Add a new city/region**
1. Append an object to `REGIONS` in `app/lib/regions.js` (slug, label, country, currency, sym, fx, costMult, blurb).
2. Push → confirm green → spot-check `/cost/<any-project>/<new-city>/`.

**Add a new project**
1. Append an object to `PROJECTS` in `app/lib/projects.js` (slug, name, baseUSD, roi, blurb, includes, tip; optional roiNote).
2. Push → confirm green → spot-check `/cost/<new-project>/` and the home league table.

**Health-check (manual)**
- `https://returnonreno.com/` 200 · `/sitemap.xml` · `/robots.txt` · `/ads.txt`
- DNS: `resend._domainkey`, `send` MX/SPF, root SPF/DKIM/DMARC all resolve
- Submit a test opt-in → worksheet email arrives (check spam)
