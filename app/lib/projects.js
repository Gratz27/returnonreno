// Single source of truth for every renovation project.
// Add an object here and new calculator entries + programmatic pages appear automatically.
//
// baseUSD = typical national midrange cost (USD). roi = % of cost recouped at resale (midrange).
// The `blurb`, `includes`, and `tip` fields give each generated page unique, non-thin content.

export const PROJECTS = [
  {
    slug: "minor-kitchen-remodel", name: "Minor kitchen remodel", baseUSD: 27000, roi: 85,
    blurb: "A cosmetic kitchen update — refacing or repainting cabinets, new hardware, an updated countertop, and one or two appliances — rather than a full tear-out. It's the highest-return kitchen project because it refreshes the room buyers care about without the runaway cost of gutting it.",
    includes: ["Cabinet refacing or repainting", "New countertops (laminate or entry-level stone)", "Updated sink, faucet and hardware", "One or two new appliances", "Fresh paint and lighting"],
    tip: "Resist the urge to expand scope. The moment a 'minor' remodel becomes a 'major' one, the ROI roughly halves.",
  },
  {
    slug: "major-kitchen-remodel", name: "Major kitchen remodel", baseUSD: 80000, roi: 50,
    blurb: "A full kitchen overhaul: new custom cabinets, stone countertops, a reconfigured layout, and a full appliance suite. It transforms the space but recoups only about half its cost, so it's best justified by years of your own enjoyment, not resale.",
    includes: ["New custom or semi-custom cabinetry", "Stone countertops and tile backsplash", "Full appliance suite", "Layout changes and new flooring", "Electrical, plumbing and lighting updates"],
    tip: "Don't out-spec your neighbourhood — a luxury kitchen in a mid-market street can't be supported by local comparable sales.",
  },
  {
    slug: "bathroom-remodel", name: "Bathroom remodel", baseUSD: 25000, roi: 74,
    blurb: "Updating an existing bathroom with new fixtures, tiling, vanity and lighting. A clean, modern bathroom removes a common buyer objection and returns a solid share of its cost.",
    includes: ["New vanity, sink and faucet", "Tub or shower replacement", "Tiling and waterproofing", "Toilet, lighting and ventilation", "Fresh paint and fittings"],
    tip: "Neutral, timeless finishes appeal to the widest pool of buyers and age better than bold trends.",
  },
  {
    slug: "bathroom-addition", name: "Bathroom addition", baseUSD: 60000, roi: 50,
    blurb: "Adding a new bathroom where none existed, often by converting existing space. Useful for homes short on bathrooms, but the build cost means only about half is recovered at resale.",
    includes: ["Framing and structural work", "Full plumbing rough-in", "Fixtures, tiling and waterproofing", "Ventilation and electrical", "Finishes and fittings"],
    tip: "Adding a bathroom to a one-bath home tends to return more than adding a fourth to a three-bath home.",
  },
  {
    slug: "primary-suite-addition", name: "Primary (master) suite addition", baseUSD: 165000, roi: 48,
    blurb: "A large addition adding a primary bedroom and en-suite. The biggest-ticket project here, and among the lowest recovery rates — you pay full price for square footage buyers only partly value.",
    includes: ["Foundation and structural build", "Bedroom, walk-in closet and en-suite", "HVAC extension", "Windows, insulation and finishes", "Permits and professional fees"],
    tip: "Only pursue this if you'll live with it for years; as a pure resale play the math rarely works.",
  },
  {
    slug: "wood-deck-addition", name: "Wood deck addition", baseUSD: 17000, roi: 83,
    blurb: "Adding usable outdoor living space with a wood deck. Strong return because it's relatively inexpensive and broadly desirable — and, notably, it out-recoups a pricier composite deck.",
    includes: ["Footings and framing", "Pressure-treated or cedar decking", "Railings and stairs", "Sealing and finishing"],
    tip: "Wood beats composite on ROI: buyers rarely pay back the composite premium even though it lasts longer for you.",
  },
  {
    slug: "composite-deck-addition", name: "Composite deck addition", baseUSD: 24000, roi: 68,
    blurb: "A low-maintenance composite deck. More durable and lower-upkeep than wood for you, but the higher upfront cost means a smaller share comes back at resale.",
    includes: ["Footings and framing", "Composite decking boards", "Railings and stairs", "Hidden fasteners and trim"],
    tip: "Choose composite for your own convenience, not for resale — wood typically returns a higher percentage.",
  },
  {
    slug: "garage-door-replacement", name: "Garage door replacement", baseUSD: 4500, roi: 160,
    blurb: "Swapping an old garage door for a modern, insulated one. Consistently the single best-returning project: cheap, highly visible from the street, and a strong signal that the home is maintained.",
    includes: ["New insulated garage door", "Hardware and tracks", "Opener compatibility check", "Removal and disposal of old door"],
    tip: "If you do only one thing before selling, do this — it routinely recoups more than it costs.",
  },
  {
    slug: "entry-door-replacement", name: "Entry door replacement (steel)", baseUSD: 2400, roi: 150,
    blurb: "Replacing the front door with a new steel or quality insulated unit. Tiny cost, outsized impact on first impressions, and one of the highest recovery rates of any project.",
    includes: ["New steel or insulated entry door", "Weatherstripping and hardware", "Fitting and sealing", "Paint or finish"],
    tip: "Pair with fresh paint and tidy landscaping for a curb-appeal upgrade that costs little and shows a lot.",
  },
  {
    slug: "vinyl-window-replacement", name: "Vinyl window replacement", baseUSD: 21000, roi: 67,
    blurb: "Replacing old windows with energy-efficient vinyl units. Improves comfort, energy bills and appearance; recovers a fair share, with the rest paid back through running-cost savings while you live there.",
    includes: ["New vinyl, double-glazed windows", "Removal of old units", "Flashing, sealing and trim", "Disposal and clean-up"],
    tip: "Energy-efficiency ratings increasingly matter to buyers — keep the paperwork to show off the savings.",
  },
  {
    slug: "vinyl-siding-replacement", name: "Vinyl siding replacement", baseUSD: 19000, roi: 80,
    blurb: "Re-cladding the exterior with new vinyl siding. A big visual refresh of the whole house for a moderate cost, returning a strong share at resale.",
    includes: ["Removal of old cladding", "New vinyl siding and trim", "House wrap / moisture barrier", "Soffits and fascia as needed"],
    tip: "A uniform, clean exterior reads as 'well maintained' and lifts the value of everything behind it.",
  },
  {
    slug: "manufactured-stone-veneer", name: "Manufactured stone veneer", baseUSD: 11000, roi: 150,
    blurb: "Adding a band of manufactured stone veneer to the front façade. Delivers a premium, photogenic curb-appeal jump for relatively little money — and recoups more than it costs.",
    includes: ["Surface prep and moisture barrier", "Manufactured stone veneer", "Mortar and finishing", "Trim and sealing"],
    tip: "It photographs beautifully, which matters because most buyers meet your home online first.",
  },
  {
    slug: "asphalt-roof-replacement", name: "Asphalt roof replacement", baseUSD: 30000, roi: 56,
    blurb: "Replacing an aging asphalt-shingle roof. More a 'condition' fix than a value-add — buyers expect a sound roof, so it protects your sale price more than it lifts it.",
    includes: ["Tear-off of old shingles", "Underlayment and flashing", "New asphalt shingles", "Ridge venting and clean-up"],
    tip: "A roof at end-of-life can sink a sale; replacing it mainly removes a negotiating lever from buyers.",
  },
  {
    slug: "basement-loft-conversion", name: "Basement / loft conversion", baseUSD: 70000, roi: 70,
    blurb: "Converting an unfinished basement or loft into usable living space. Adds functional square footage at a lower cost than building new, with a respectable return.",
    includes: ["Insulation, framing and drywall", "Flooring and lighting", "Egress / safety compliance", "Heating and ventilation"],
    tip: "Finishing existing space is far more cost-effective than adding new square footage from scratch.",
  },
  {
    slug: "whole-home-cosmetic-refresh", name: "Whole-home cosmetic refresh", baseUSD: 40000, roi: 75,
    blurb: "A broad cosmetic update across the home — paint, flooring, fixtures and fittings — without structural change. A reliable way to make a dated house feel move-in ready before listing.",
    includes: ["Interior repainting throughout", "New flooring in key rooms", "Updated lighting and fixtures", "Minor repairs and detailing"],
    tip: "Move-in-ready homes sell faster and attract stronger offers than ones buyers must 'fix first'.",
  },
  {
    slug: "interior-repaint", name: "Interior repaint (whole home)", baseUSD: 5000, roi: 80,
    blurb: "Repainting the home's interior in fresh, neutral tones. One of the cheapest, highest-impact updates before a sale — it instantly makes a home feel cleaner, brighter and better maintained.",
    includes: ["Wall and ceiling prep and patching", "Premium neutral paint throughout", "Trim, doors and skirting", "Two coats and clean-up"],
    tip: "Stick to warm neutrals. Bold or dated colours shrink your buyer pool; neutrals let buyers picture their own furniture.",
  },
  {
    slug: "hardwood-floor-refinishing", name: "Hardwood floor refinishing", baseUSD: 3000, roi: 100,
    blurb: "Sanding and resealing existing hardwood floors. Among the very best returns in the home — for a modest cost you restore a premium feature buyers love, often recouping the full spend.",
    includes: ["Sanding back to bare wood", "Stain (optional) and sealing", "Multiple finish coats", "Edge and corner detailing"],
    tip: "Refinishing existing wood beats replacing it on ROI almost every time — restore before you rip out.",
  },
  {
    slug: "new-hardwood-flooring", name: "New hardwood flooring", baseUSD: 6000, roi: 85,
    blurb: "Installing new hardwood flooring to replace carpet or worn surfaces. A desirable, durable upgrade that returns strongly and broadens a home's appeal.",
    includes: ["Removal of old flooring", "Solid or engineered hardwood", "Underlay and fitting", "Trim, transitions and finishing"],
    tip: "Engineered hardwood gives a similar look for less and handles humidity better — a smart cost/return balance.",
  },
  {
    slug: "curb-appeal-landscaping", name: "Curb-appeal landscaping", baseUSD: 8000, roi: 90,
    blurb: "Upgrading the front yard — planting, beds, lawn, edging and lighting — to lift the home's first impression. Strong return because curb appeal shapes every buyer's expectation before they step inside.",
    includes: ["Lawn renewal and edging", "Planting beds and shrubs", "Mulch, borders and pathways", "Outdoor lighting"],
    tip: "Mature, tidy planting reads as a cared-for home. Keep it low-maintenance so it still looks great on viewing day.",
  },
  {
    slug: "attic-insulation", name: "Attic insulation (fiberglass)", baseUSD: 2500, roi: 110,
    blurb: "Adding fiberglass insulation in the attic. Cheap, invisible, and one of the few projects that reliably recoups more than it costs — buyers and appraisers value lower energy bills and comfort.",
    includes: ["Air sealing gaps and penetrations", "Fiberglass batt or blown-in insulation", "Ventilation checks", "Disposal of old material"],
    tip: "Keep the energy-bill savings and any efficiency rating documents — they make the value tangible to buyers.",
  },
  {
    slug: "hvac-replacement", name: "HVAC system replacement", baseUSD: 10000, roi: 60,
    blurb: "Replacing an aging furnace, heat pump or AC system. More a condition-and-comfort fix than a value-add — a modern, efficient system removes a major buyer worry and protects your sale price.",
    includes: ["Removal of old equipment", "New high-efficiency furnace / heat pump / AC", "Ductwork checks and adjustments", "Thermostat and commissioning"],
    tip: "An end-of-life system is a negotiating lever for buyers; replacing it mainly protects your price rather than lifting it.",
  },
  {
    slug: "solar-panel-installation", name: "Solar panel installation", baseUSD: 25000, roi: 65,
    blurb: "Installing rooftop solar. The resale uplift varies widely by market and whether the system is owned (not leased), but owned solar can add value and strongly appeals to energy-conscious buyers.",
    includes: ["System design and permitting", "Panels, inverter and mounting", "Electrical tie-in and metering", "Inspection and commissioning"],
    tip: "Owned systems add resale value; leased ones can complicate a sale. Buy, don't lease, if resale matters to you.",
  },
  {
    slug: "inground-pool-installation", name: "Inground pool installation", baseUSD: 45000, roi: 55,
    blurb: "Adding an inground swimming pool. A pool does add real resale value, but national data shows it typically recoups only about half its cost — so it's best thought of as a lifestyle purchase that adds some value, not an investment that pays for itself.",
    includes: ["Excavation and shell", "Plumbing, filtration and pump", "Decking and surround", "Safety fencing and finishing"],
    tip: "Install a pool for how you'll enjoy it, not for profit. In a warm market it recoups more; in cooler climates with short swim seasons it recoups far less and can even deter buyers.",
    roiNote: "Pools are the most climate-dependent project here. In warm 'Sun Belt' markets (and much of Australia) a well-kept pool can recoup 65%+ and add 7–10% to home value; in cold climates it often recoups far less and can be a net negative. The figure shown is a national average — adjust your expectations to your local market.",
  },
  {
    slug: "garage-conversion", name: "Garage conversion to living space", baseUSD: 22000, roi: 70,
    blurb: "Converting a garage into a bedroom, office or living room. A cost-effective way to add usable square footage without a full addition, with a respectable return — but only where buyers don't prize covered parking.",
    includes: ["Insulation, framing and drywall", "Flooring, heating and lighting", "Windows and door changes", "Electrical and finishing"],
    tip: "Check what your market values more — extra living space or a garage. In car-dependent areas, keeping the garage can be worth more.",
  },
  {
    slug: "fence-installation", name: "Fence installation", baseUSD: 4500, roi: 50,
    blurb: "Installing a new perimeter or yard fence — typically wood or vinyl. It adds privacy, security and a defined yard that families and pet owners value, but as a resale play it returns only a moderate share of its cost.",
    includes: ["Layout, post holes and footings", "Wood, vinyl or metal fence panels", "Gates and hardware", "Staining or sealing (wood)", "Old-fence removal and disposal"],
    tip: "Vinyl and cedar tend to recoup the most because buyers value low upkeep; a tidy, well-maintained fence matters more to value than the material itself.",
    roiNote: "Fence ROI is wide — roughly 30–70% of cost depending on material, neighbourhood norms and condition (national midrange ≈ 50%). It returns more in family- and pet-oriented suburbs and where fenced yards are expected, and less where they aren't the norm. A new fence rarely pays for itself, but a sagging or rotten one can actively cost you at sale.",
  },
  {
    slug: "driveway-replacement", name: "Driveway replacement (concrete)", baseUSD: 7000, roi: 65,
    blurb: "Tearing out and repouring a worn or cracked driveway, usually in concrete (asphalt is cheaper but shorter-lived). More a curb-appeal-and-condition fix than a value-add — a cracked driveway is a visible negotiating lever for buyers, so replacing it mainly protects your price.",
    includes: ["Removal and disposal of the old surface", "Sub-base grading and preparation", "New concrete (or asphalt) pour", "Edging, jointing and finishing", "Curing and sealing"],
    tip: "If the existing driveway is only stained or lightly cracked, resurfacing or sealing is far more cost-effective than a full replacement — fix before you rip out.",
    roiNote: "Industry estimates put driveway ROI at roughly 50–80% of cost (national midrange ≈ 65%). Concrete costs more upfront than asphalt but lasts decades with little upkeep. Most of the value is in removing a buyer objection rather than commanding a premium.",
  },
  {
    slug: "sunroom-addition", name: "Sunroom addition", baseUSD: 50000, roi: 50,
    blurb: "Adding a glassed-in sunroom or three/four-season room to extend living space toward the garden. It's a lifestyle upgrade buyers enjoy, but a national average recoups only about half its cost — a four-season, fully insulated room returns more than a three-season or screened one.",
    includes: ["Foundation or reinforced slab", "Framing and large glazed walls/roof", "Insulation and climate control (four-season)", "Flooring, electrical and lighting", "Permits and professional fees"],
    tip: "A four-season room that ties into the home's heating and finishes reads as real living space and returns more; a three-season or screened room is cheaper but recoups noticeably less.",
    roiNote: "National data puts sunroom recovery at roughly 49–55% of cost (midrange ≈ 50%), though it varies widely — four-season rooms outperform three-season and screened ones. Like a pool, treat it as a lifestyle purchase that adds some value, not an investment that pays for itself.",
  },
  {
    slug: "ev-charger-installation", name: "EV charger installation (Level 2)", baseUSD: 1800, roi: 100,
    blurb: "Installing a home Level 2 (240V) EV charging point in the garage or driveway. Cheap relative to most projects and increasingly expected by EV-owning buyers — on average it roughly recoups its cost, and it can differentiate your listing where electric vehicles are common.",
    includes: ["240V circuit and dedicated breaker", "Level 2 charger / wall connector", "Conduit and wiring run", "Permit and electrical inspection", "Panel-capacity check (upgrade if needed)"],
    tip: "Mount the hardwired unit and keep the install tidy and inspected — a clean, permitted Level 2 point reads as a feature; a dangling portable cord does not. Factor the 30% federal tax credit into your real net cost.",
    roiNote: "Resale impact is highly market-dependent: in EV-heavy states (CA, WA, CO, parts of NY) the value boost is most pronounced, while in low-EV areas it mainly differentiates the listing rather than lifting price. A typical $800–$2,000 install can recoup most or all of its cost on average, but a panel upgrade ($1,500–$4,000 extra) changes that math — the figure shown excludes major panel work.",
  },
];

export const TIERS = {
  budget:   { label: "Budget",   costMult: 0.6, roiAdj: 6 },
  midrange: { label: "Midrange", costMult: 1.0, roiAdj: 0 },
  upscale:  { label: "Upscale",  costMult: 1.9, roiAdj: -13 },
};

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

// Cost/ROI calc shared by the calculator and the programmatic pages.
export function calc(project, tierKey = "midrange", scope = 1, regionMult = 1) {
  const t = TIERS[tierKey];
  const cost = project.baseUSD * t.costMult * scope * regionMult;
  const roi = Math.max(8, Math.min(160, project.roi + t.roiAdj));
  const valueAdded = cost * (roi / 100);
  return { cost, roi, valueAdded, net: cost - valueAdded };
}
