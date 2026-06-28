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
    deep: {
      intro: [
        "A bathroom remodel is one of the most-searched renovation costs — and one of the most variable. In 2026 the national average lands around $16,500, but the realistic range runs from about $3,200 for a small cosmetic refresh to $30,000+ for a full or primary-bath gut renovation. Most projects work out to roughly $150–$400 per square foot.",
        "The figure shown above reflects a mid-to-upscale full-bath remodel — in line with the higher end of national “Cost vs. Value” data — so a simple update of an existing bathroom usually costs less. The biggest single lever is whether you move the plumbing: keeping the toilet, tub and sink where they are can save thousands, because labour alone is typically 40–60% of a bathroom budget.",
      ],
      table: {
        caption: "Bathroom remodel cost by size & scope (2026)",
        col: "Scope",
        rows: [
          { type: "Half / small bath (cosmetic refresh)", range: "$3,200–$7,000", note: "New vanity, toilet, fixtures and paint; no layout change." },
          { type: "Small full bath (5×8, mid-range)", range: "$7,200–$15,000", note: "New tub or shower, tile, vanity and lighting." },
          { type: "Standard full bath (mid-range)", range: "$16,000–$28,000", note: "Full fixtures, tiling and some layout updates." },
          { type: "Primary / master bath (mid-range)", range: "$29,000–$50,000", note: "Larger footprint, double vanity, walk-in shower or soaking tub." },
          { type: "High-end / spa renovation", range: "$51,000–$80,000+", note: "Premium finishes, heated floors, custom glass and stone." },
        ],
      },
      drivers: [
        { factor: "Size & layout", detail: "A bigger room means more tile, more fixtures and more labour — square footage is the starting point for any estimate." },
        { factor: "Moving plumbing", detail: "Relocating the toilet, shower or sink can add thousands; keeping the existing layout is the single biggest saving." },
        { factor: "Tile & finishes", detail: "Material choice swings the budget widely — porcelain and stone, glass enclosures and custom vanities all add up fast." },
        { factor: "Labour", detail: "Typically 40–60% of the total. In 2026 licensed plumbers run about $85–$175/hr and electricians about $60–$145/hr." },
        { factor: "Hidden issues", detail: "Water damage behind tile, old wiring or non-standard sizing can surface mid-project — budget a 10–15% contingency." },
      ],
      faqs: [
        { q: "What's the average bathroom remodel cost in 2026?", a: "About $16,500 nationally, with most homeowners spending between $8,000 and $45,000 depending on the bathroom's size, the finish level and local labour rates." },
        { q: "Does a bathroom remodel add value?", a: "Yes — an updated bathroom recoups roughly 74% of its cost on average and removes one of the most common buyer objections. It's one of the more reliable resale projects, though it rarely pays for itself outright." },
        { q: "How can I cut the cost?", a: "Keep the existing layout so you don't move plumbing, reglaze the tub rather than replacing it, choose mid-range tile over stone, and do the cosmetic work (paint, hardware, mirror, lighting) yourself where you can." },
        { q: "Should I remodel or add a bathroom?", a: "Remodelling an existing bathroom returns more per dollar. Adding a brand-new bathroom costs more and recoups a smaller share — see the bathroom addition cost guide to compare." },
      ],
      related: [
        { href: "/cost/bathroom-addition/", label: "Bathroom addition cost" },
        { href: "/guides/kitchen-vs-bathroom-roi/", label: "Kitchen vs bathroom: which has better ROI?" },
        { href: "/cost/whole-home-cosmetic-refresh/", label: "Whole-home cosmetic refresh cost" },
      ],
    },
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
    deep: {
      intro: [
        "A new garage door is one of the cheapest exterior upgrades you can make — and the single best-returning project in this whole index, routinely recouping more than it costs at resale. For a standard insulated steel door, most homeowners pay roughly $1,000–$1,800 installed in 2026; a double-wide door runs about $1,800–$3,200, while premium wood, glass or custom carriage-style doors can reach $5,000–$6,000 or more.",
        "The figure shown above reflects an upscale 16×7 ft door — the basis for national “Cost vs. Value” resale data — so treat it as the higher end of a typical replacement rather than the floor. Because the door is large, street-facing and the first thing buyers see, it punches far above its price on curb appeal, which is why it recoups more of its cost than almost anything else you can do.",
      ],
      table: {
        caption: "Garage door cost by material (installed, 2026)",
        col: "Material",
        rows: [
          { type: "Steel (insulated)", range: "$800–$2,500", note: "Most popular — best balance of price, durability and insulation." },
          { type: "Aluminum", range: "$600–$2,900", note: "Lightweight and rust-resistant; good for coastal or humid areas." },
          { type: "Wood / wood-composite", range: "$1,500–$5,000", note: "Premium carriage-house look; needs periodic refinishing." },
          { type: "Glass / full-view", range: "$700–$4,500", note: "Modern aluminium-and-glass; price climbs with the glazing." },
        ],
      },
      drivers: [
        { factor: "Single vs double", detail: "A double-wide door uses far more material and a longer install — roughly $1,800–$3,200 versus $1,000–$1,800 for a single." },
        { factor: "Insulation", detail: "Insulated double- or triple-layer doors cost more upfront but cut energy loss on attached garages and run quieter." },
        { factor: "Material & style", detail: "Steel is the value pick; wood, glass and custom carriage doors add a premium of hundreds to thousands." },
        { factor: "Hardware & opener", detail: "New tracks, springs, a smart opener and keypad can add $150–$600+." },
        { factor: "Labour & removal", detail: "Installation labour typically runs $250–$600, including hauling away the old door." },
      ],
      faqs: [
        { q: "Why does a garage door have such a high ROI?", a: "It is large, highly visible from the street, and cheap relative to the lift it gives curb appeal — and it signals a well-maintained home. National Cost vs. Value data consistently ranks garage-door replacement at or near the top for share of cost recouped." },
        { q: "Is an insulated door worth it?", a: "For an attached or heated garage, yes — it reduces energy loss and noise and is what buyers expect. For a detached, unheated garage the payback is smaller, so a basic door can make sense." },
        { q: "Single or double — which should I replace?", a: "Replace what you already have. Matching the existing opening avoids structural changes; widening or adding an opening adds significant cost." },
        { q: "Can I just repair the panels instead?", a: "Dented sections can sometimes be replaced individually, but a full replacement is what drives the resale value, energy savings and the “new” look buyers respond to." },
      ],
      related: [
        { href: "/cost/entry-door-replacement/", label: "Entry door replacement cost" },
        { href: "/cost/curb-appeal-landscaping/", label: "Curb-appeal landscaping cost" },
        { href: "/cost/manufactured-stone-veneer/", label: "Manufactured stone veneer cost" },
      ],
    },
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
