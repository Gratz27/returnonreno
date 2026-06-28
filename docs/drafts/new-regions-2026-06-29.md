# Draft: 10 new cities for `app/lib/regions.js` — 29 Jun 2026

Weekly content-growth task, option (a). Adding cities is the highest-leverage lever:
each new city generates **28 new region pages** (one per project), plus new league-table
rows and sitemap entries. The sitemap has been flat at 560 URLs since the 25 Jun build —
no cities have been added since. These 10 cities take the roster from **22 → 32 regions**,
i.e. ~560 → **~840 pages** (28 projects × 30 region rows + home/hub/guides/trust).

**Status: DRAFT for review — not pasted into `regions.js`, not deployed.**

## Selection rationale
- Fills the biggest gaps: more US metros (the core market, where RSMeans data is strongest),
  a second Scottish/northern + South West UK city, two more Canadian metros, and an AU city.
- `costMult` is **relative to the US national average (1.00)** and grounded in 2026 cost-index
  data (sources below), then calibrated to sit sensibly against the existing same-country anchors
  already in the file (e.g. UK: London 1.05 / Manchester 0.90; AU: Sydney 1.10 / Melbourne 1.02;
  CA: Toronto 1.05 / Vancouver 1.12).
- `fx` **deliberately matches the existing same-currency rows** (GBP 0.79, CAD 1.37, AUD 1.52)
  so conversions stay consistent across cities of the same currency. See the FX note at the bottom —
  all rows have drifted vs. spot and should be refreshed together as a separate task.

## Data basis for each costMult
| City | 2026 cost-index basis | costMult chosen |
|---|---|---|
| Washington, DC | RSMeans CCI ~113 (13% above US avg) | 1.13 |
| Philadelphia, PA | RSMeans CCI ~115 (15% above US avg) | 1.15 |
| Minneapolis, MN | RSMeans CCI ~107 (7% above US avg) | 1.07 |
| Austin, TX | RSMeans CCI ~89 (11% below US avg) | 0.89 |
| Dallas, TX | RSMeans CCI ~87 (13% below US avg) | 0.87 |
| Glasgow, UK | Scotland/North ~10–15% below UK avg; in-model peer to Manchester (0.90) | 0.89 |
| Bristol, UK | South West — above the northern cities, below London/SE | 0.95 |
| Calgary, CA | ~$185–280/sqft vs Toronto ~$210–290; just below Toronto (1.05) | 0.97 |
| Montreal, CA | ~$150–215/sqft — cheapest major CA metro, well below Toronto | 0.90 |
| Brisbane, AU | Elevated (post-flood + 2032 Olympics trades demand); above Melbourne (1.02), below Sydney (1.10) | 1.05 |

## Paste-ready JS objects
Append these inside the `REGIONS` array in `app/lib/regions.js` (before the closing `];`).
Grouped US-first then by country to match the existing ordering.

```js
  // --- US metros (added 29 Jun 2026) ---
  { slug: "washington-dc", label: "Washington, DC", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.13,
    blurb: "Washington, DC sits well above the national average, with strong demand for skilled trades, a high cost of living, and historic-district and permitting requirements all adding to renovation budgets." },
  { slug: "philadelphia", label: "Philadelphia, PA", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.15,
    blurb: "Philadelphia runs noticeably above the national average, reflecting union labour, older row-home stock that complicates work, and city permitting that can lengthen project timelines." },
  { slug: "minneapolis", label: "Minneapolis, MN", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.07,
    blurb: "Minneapolis sits modestly above the national average, with a short building season concentrating demand on trades and cold-climate construction standards adding to costs." },
  { slug: "austin", label: "Austin, TX", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 0.89,
    blurb: "Austin runs below the national average thanks to lower labour rates and lighter regulation, though rapid growth has been steadily narrowing that affordability advantage." },
  { slug: "dallas", label: "Dallas, TX", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 0.87,
    blurb: "Dallas–Fort Worth is one of the more affordable large US markets, with competitive trades, low overheads, and looser permitting keeping renovation costs below the national average." },
  // --- UK (added 29 Jun 2026) ---
  { slug: "glasgow-uk", label: "Glasgow, UK", country: "United Kingdom", currency: "GBP", sym: "£", fx: 0.79, costMult: 0.89,
    blurb: "Glasgow is one of the UK's more affordable major cities to renovate, with Scottish labour rates and overheads sitting well below London and the South East, broadly in line with the northern English cities." },
  { slug: "bristol-uk", label: "Bristol, UK", country: "United Kingdom", currency: "GBP", sym: "£", fx: 0.79, costMult: 0.95,
    blurb: "Bristol is the priciest city in the South West, running above the northern cities but still below London — strong demand and a tight trades market keep costs near the UK average." },
  // --- Canada (added 29 Jun 2026) ---
  { slug: "calgary-ca", label: "Calgary, CA", country: "Canada", currency: "CAD", sym: "C$", fx: 1.37, costMult: 0.97,
    blurb: "Calgary sits just below Toronto on cost, with renovation pricing influenced by the energy sector's pull on skilled trades and material freight from larger supply hubs." },
  { slug: "montreal-ca", label: "Montreal, CA", country: "Canada", currency: "CAD", sym: "C$", fx: 1.37, costMult: 0.90,
    blurb: "Montreal is the most affordable of Canada's big metros for renovation, with lower labour rates than Toronto or Vancouver, though permitting and language-of-trade logistics can add time." },
  // --- Australia (added 29 Jun 2026) ---
  { slug: "brisbane-au", label: "Brisbane, AU", country: "Australia", currency: "AUD", sym: "A$", fx: 1.52, costMult: 1.05,
    blurb: "Brisbane has climbed above Melbourne on renovation cost, with post-flood rebuilding, interstate migration, and 2032 Olympics infrastructure all competing for the same pool of licensed trades." },
```

## FX note (separate from this task)
Spot rates as of late June 2026 have drifted from the hard-coded values currently in
`regions.js` (which all new rows match for consistency): GBP ~0.76 (file 0.79),
EUR ~0.86 (file 0.92), CAD ~1.40 (file 1.37), AUD ~1.45 (file 1.52), NZD ~1.77 (file 1.65).
This affects **every** row, not just the new ones, so it should be handled as the existing
"periodic FX-rate refresh in regions.js" roadmap item rather than piecemeal here.

## Sources
- RSMeans City Cost Index 2026 — https://www.rsmeans.com/rsmeans-city-cost-index ; relative-cost summary via https://roofobservations.com/relative-construction-costs-by-state/
- UK regional construction cost per m² 2026 — https://rapidqs.co.uk/construction-cost-per-m-uk-2026-by-building-type-and-region/ ; https://costmodelling.com/building-costs
- Canada per-sqft by city 2026 — https://bhumicalculator.com/countries/canada/construction-cost-per-square-foot ; Statistics Canada building construction price indexes Q1 2026 — https://www150.statcan.gc.ca/n1/daily-quotidien/260428/dq260428b-eng.htm
- Australia city renovation costs 2026 — https://site.co-architecture.com/advice/home-renovation-cost-brisbane/
- FX rates June 2026 — https://www.ofx.com/en-us/forex-news/historical-exchange-rates/monthly-average-rates/
