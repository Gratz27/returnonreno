// Regions drive both the currency selector and the programmatic /cost/[project]/[region] pages.
// Add a region here and a new page is generated for every project automatically
// (projects × regions = your page count). costMult scales the national-average cost.
// `blurb` gives each regional page unique, non-thin context.

export const REGIONS = [
  { slug: "national-average", label: "US National Average", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.00,
    blurb: "These are the US national midrange averages — a useful baseline before adjusting for your specific city, where labour and material costs can swing the total by 30% or more." },
  { slug: "new-york", label: "New York, NY", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.30,
    blurb: "New York is one of the most expensive renovation markets in the US, driven by high labour rates, building regulations, co-op and condo rules, and the logistics of working in dense urban buildings." },
  { slug: "los-angeles", label: "Los Angeles, CA", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.22,
    blurb: "Renovation costs in Los Angeles run well above the national average, reflecting California labour rates, permitting, and strong demand for skilled trades." },
  { slug: "chicago", label: "Chicago, IL", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.10,
    blurb: "Chicago sits modestly above the national average, with seasonal scheduling and union labour influencing project pricing." },
  { slug: "houston", label: "Houston, TX", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 0.98,
    blurb: "Houston is close to the national average and often slightly below, helped by a competitive contractor market and lighter regulatory overhead than coastal cities." },
  { slug: "phoenix", label: "Phoenix, AZ", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 0.97,
    blurb: "Phoenix tends to track just below the national average, though rapid population growth has pushed up demand for trades in recent years." },
  { slug: "miami", label: "Miami, FL", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.08,
    blurb: "Miami runs above the national average, with hurricane-code requirements and strong demand adding to renovation costs, especially for exterior and structural work." },
  { slug: "seattle", label: "Seattle, WA", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.22,
    blurb: "Seattle is a high-cost market, reflecting elevated labour rates, a tight contractor schedule, and strict permitting and energy codes." },
  { slug: "denver", label: "Denver, CO", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.08,
    blurb: "Denver costs sit above the national average, pushed up by sustained construction demand across the Front Range." },
  { slug: "atlanta", label: "Atlanta, GA", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 0.98,
    blurb: "Atlanta is near the national average, with a deep pool of contractors keeping pricing competitive for most projects." },
  { slug: "boston", label: "Boston, MA", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.26,
    blurb: "Boston is among the pricier US markets, with high labour costs, older housing stock that complicates work, and demanding permitting." },
  { slug: "san-francisco", label: "San Francisco, CA", country: "United States", currency: "USD", sym: "$", fx: 1.00, costMult: 1.38,
    blurb: "San Francisco is one of the most expensive renovation markets in the country, driven by very high labour rates, strict permitting, and challenging logistics." },
  { slug: "london-uk", label: "London, UK", country: "United Kingdom", currency: "GBP", sym: "£", fx: 0.79, costMult: 1.05,
    blurb: "London is the UK's priciest renovation market, with high labour demand, period properties, parking and access constraints, and planning rules all adding cost." },
  { slug: "manchester-uk", label: "Manchester, UK", country: "United Kingdom", currency: "GBP", sym: "£", fx: 0.79, costMult: 0.90,
    blurb: "Manchester is more affordable than the South East, with competitive trades and lower overheads keeping renovation costs below the London benchmark." },
  { slug: "birmingham-uk", label: "Birmingham, UK", country: "United Kingdom", currency: "GBP", sym: "£", fx: 0.79, costMult: 0.88,
    blurb: "Birmingham is one of the more cost-effective major UK cities for renovation, with a good supply of trades and lower labour rates than the South East." },
  { slug: "edinburgh-uk", label: "Edinburgh, UK", country: "United Kingdom", currency: "GBP", sym: "£", fx: 0.79, costMult: 0.98,
    blurb: "Edinburgh costs run close to the UK average, though tenement and listed-building work can add complexity and expense to many projects." },
  { slug: "dublin-ie", label: "Dublin, IE", country: "Ireland", currency: "EUR", sym: "€", fx: 0.92, costMult: 1.08,
    blurb: "Dublin renovation costs are elevated, reflecting strong construction demand, a tight labour market, and higher material prices than much of Ireland." },
  { slug: "toronto-ca", label: "Toronto, CA", country: "Canada", currency: "CAD", sym: "C$", fx: 1.37, costMult: 1.05,
    blurb: "Toronto is Canada's busiest renovation market, with high demand for trades and permitting timelines that can lift overall project costs." },
  { slug: "vancouver-ca", label: "Vancouver, CA", country: "Canada", currency: "CAD", sym: "C$", fx: 1.37, costMult: 1.12,
    blurb: "Vancouver is among Canada's most expensive markets, with high labour rates and material costs reflecting strong demand and a limited supply of trades." },
  { slug: "sydney-au", label: "Sydney, AU", country: "Australia", currency: "AUD", sym: "A$", fx: 1.52, costMult: 1.10,
    blurb: "Sydney is Australia's costliest renovation market, with high labour demand, strict council approvals, and access challenges in dense suburbs." },
  { slug: "melbourne-au", label: "Melbourne, AU", country: "Australia", currency: "AUD", sym: "A$", fx: 1.52, costMult: 1.02,
    blurb: "Melbourne sits near the Australian average, with a large contractor base helping keep pricing competitive relative to Sydney." },
  { slug: "auckland-nz", label: "Auckland, NZ", country: "New Zealand", currency: "NZD", sym: "NZ$", fx: 1.65, costMult: 1.08,
    blurb: "Auckland is New Zealand's most expensive renovation market, with high material import costs and strong demand for builders adding to project totals." },
];

// Currency-only options for the homepage calculator (region cost level applied separately).
export const CURRENCIES = [
  { code: "USD", label: "$ USD — United States", sym: "$", fx: 1.00, region: 1.00 },
  { code: "GBP", label: "£ GBP — United Kingdom", sym: "£", fx: 0.79, region: 0.95 },
  { code: "EUR", label: "€ EUR — Eurozone", sym: "€", fx: 0.92, region: 0.95 },
  { code: "CAD", label: "$ CAD — Canada", sym: "C$", fx: 1.37, region: 0.90 },
  { code: "AUD", label: "$ AUD — Australia", sym: "A$", fx: 1.52, region: 1.05 },
  { code: "NZD", label: "$ NZD — New Zealand", sym: "NZ$", fx: 1.65, region: 1.05 },
];

export function getRegion(slug) {
  return REGIONS.find((r) => r.slug === slug);
}
