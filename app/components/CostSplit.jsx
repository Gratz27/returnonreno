import { splitOf } from "../lib/split";

// Presentational labour/materials split. `fmt` formats a USD amount to a string.
export default function CostSplit({ costUSD, slug, fmt }) {
  const { pct, labor, materials } = splitOf(costUSD, slug);
  const lp = Math.round(pct * 100);
  return (
    <div className="split">
      <div className="split-bar">
        <span className="split-labor" style={{ width: `${lp}%` }} />
        <span className="split-mat" style={{ width: `${100 - lp}%` }} />
      </div>
      <div className="split-legend">
        <span><span className="dot" style={{ background: "var(--accent)" }} /> Labour ≈ {fmt(labor)} ({lp}%)</span>
        <span><span className="dot" style={{ background: "#c2cec8" }} /> Materials ≈ {fmt(materials)} ({100 - lp}%)</span>
      </div>
    </div>
  );
}
