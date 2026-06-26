// Typical labour share of total project cost, by project. Materials = the rest.
// Rough industry norms — labour-heavy trades (paint, landscaping) high; material-heavy
// (windows, solar, doors) lower. Default 0.5 for anything not listed.

const LABOR_PCT = {
  "interior-repaint": 0.8,
  "curb-appeal-landscaping": 0.7,
  "hardwood-floor-refinishing": 0.7,
  "asphalt-roof-replacement": 0.6,
  "whole-home-cosmetic-refresh": 0.6,
  "new-hardwood-flooring": 0.5,
  "bathroom-remodel": 0.5,
  "bathroom-addition": 0.5,
  "vinyl-siding-replacement": 0.5,
  "manufactured-stone-veneer": 0.5,
  "wood-deck-addition": 0.5,
  "basement-loft-conversion": 0.5,
  "garage-conversion": 0.5,
  "attic-insulation": 0.5,
  "inground-pool-installation": 0.5,
  "fence-installation": 0.5,
  "driveway-replacement": 0.5,
  "ev-charger-installation": 0.5,
  "composite-deck-addition": 0.45,
  "primary-suite-addition": 0.45,
  "sunroom-addition": 0.45,
  "minor-kitchen-remodel": 0.4,
  "major-kitchen-remodel": 0.4,
  "hvac-replacement": 0.4,
  "entry-door-replacement": 0.4,
  "garage-door-replacement": 0.35,
  "vinyl-window-replacement": 0.35,
  "solar-panel-installation": 0.3,
};

export function laborPctFor(slug) {
  return LABOR_PCT[slug] != null ? LABOR_PCT[slug] : 0.5;
}

export function splitOf(costUSD, slug) {
  const pct = laborPctFor(slug);
  const labor = costUSD * pct;
  return { pct, labor, materials: costUSD - labor };
}
