// Small line-icon per project, keyed off the slug. Inherits color via currentColor.

const CAT = {
  "minor-kitchen-remodel": "kitchen",
  "major-kitchen-remodel": "kitchen",
  "bathroom-remodel": "bath",
  "bathroom-addition": "bath",
  "primary-suite-addition": "home",
  "wood-deck-addition": "deck",
  "composite-deck-addition": "deck",
  "garage-door-replacement": "door",
  "entry-door-replacement": "door",
  "vinyl-window-replacement": "window",
  "vinyl-siding-replacement": "wall",
  "manufactured-stone-veneer": "wall",
  "asphalt-roof-replacement": "roof",
  "basement-loft-conversion": "home",
  "whole-home-cosmetic-refresh": "home",
  "interior-repaint": "paint",
  "hardwood-floor-refinishing": "floor",
  "new-hardwood-flooring": "floor",
  "curb-appeal-landscaping": "plant",
  "attic-insulation": "flame",
  "hvac-replacement": "flame",
  "solar-panel-installation": "sun",
  "inground-pool-installation": "pool",
  "garage-conversion": "door",
  "fence-installation": "deck",
  "driveway-replacement": "floor",
  "sunroom-addition": "window",
  "ev-charger-installation": "flame",
};

const PATHS = {
  home: <><path d="M3 11l9-7 9 7" /><path d="M5 10v9h14v-9" /></>,
  kitchen: <><rect x="4" y="5" width="16" height="15" rx="2" /><line x1="4" y1="10" x2="20" y2="10" /><circle cx="8" cy="7.5" r="1" /><circle cx="12" cy="7.5" r="1" /></>,
  bath: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" />,
  door: <><rect x="6" y="3" width="12" height="18" rx="1" /><circle cx="14.5" cy="12" r="1" /></>,
  deck: <><rect x="3" y="5" width="18" height="14" rx="1" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="3" y1="14.5" x2="21" y2="14.5" /></>,
  window: <><rect x="4" y="4" width="16" height="16" rx="1" /><line x1="12" y1="4" x2="12" y2="20" /><line x1="4" y1="12" x2="20" y2="12" /></>,
  wall: <><rect x="3" y="5" width="18" height="14" rx="1" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="9" y1="5" x2="9" y2="12" /><line x1="15" y1="12" x2="15" y2="19" /></>,
  roof: <><path d="M3 13L12 5l9 8" /><line x1="6" y1="13" x2="6" y2="19" /><line x1="18" y1="13" x2="18" y2="19" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4.5" /><line x1="12" y1="19.5" x2="12" y2="22" /><line x1="2" y1="12" x2="4.5" y2="12" /><line x1="19.5" y1="12" x2="22" y2="12" /></>,
  pool: <><path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><line x1="6" y1="4" x2="6" y2="12" /></>,
  flame: <path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 .5 1.5 1.5 1.8 2.5 1-1-1.5-1.2-3.7-1.5-5.5z" />,
  plant: <><path d="M12 21v-7" /><path d="M12 14c0-5 3-8 8-8 0 5-3 8-8 8z" /><path d="M12 16c0-3-2-5-6-5 0 3 2 5 6 5z" /></>,
  paint: <><rect x="6" y="4" width="12" height="5" rx="1" /><path d="M12 9v3H8v3" /><rect x="6.5" y="15" width="3" height="5" rx="1" /></>,
  floor: <><rect x="3" y="6" width="18" height="12" rx="1" /><line x1="9" y1="6" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="18" /><line x1="3" y1="12" x2="21" y2="12" /></>,
};

export default function ProjectIcon({ slug, size = 20 }) {
  const cat = CAT[slug] || "home";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[cat]}
    </svg>
  );
}
