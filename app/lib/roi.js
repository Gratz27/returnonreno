// Shared ROI presentation helpers (used by the calculator and project pages).

export function tierOf(roi) {
  return roi >= 80 ? "high" : roi >= 55 ? "mid" : "low";
}

export function verdictFor(roi) {
  if (roi >= 100) return { pill: "Pays for itself", text: "National Cost-vs-Value data shows this typically adds more resale value than it costs." };
  if (roi >= 80) return { pill: "Strong return", text: "Most of your spend comes back in added value at resale." };
  if (roi >= 55) return { pill: "Moderate return", text: "About half comes back; the rest buys the use and enjoyment." };
  return { pill: "Lifestyle upgrade", text: "Low resale payback — do it for how you'll live, not for profit." };
}
