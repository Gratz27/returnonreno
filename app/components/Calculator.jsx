"use client";

import { useState, useMemo } from "react";
import { PROJECTS, TIERS, calc } from "../lib/projects";
import { CURRENCIES } from "../lib/regions";

function fmtK(usd, c) {
  let v = usd * c.fx;
  v = Math.round(v / 100) * 100;
  return c.sym + v.toLocaleString("en-US");
}
function roiClass(r) {
  return r >= 80 ? "p-good" : r >= 55 ? "p-mid" : "p-low";
}

export default function Calculator({ initialProject = "minor-kitchen-remodel" }) {
  const [projectId, setProjectId] = useState(initialProject);
  const [tier, setTier] = useState("midrange");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [scope, setScope] = useState(1);
  const [homeValue, setHomeValue] = useState("");

  const cur = CURRENCIES.find((c) => c.code === currencyCode);
  const project = PROJECTS.find((p) => p.slug === projectId);

  const r = useMemo(
    () => calc(project, tier, scope, cur.region),
    [project, tier, scope, cur]
  );

  const league = useMemo(() => {
    return PROJECTS.map((p) => ({ p, ...calc(p, tier, 1, cur.region) })).sort(
      (a, b) => b.roi - a.roi
    );
  }, [tier, cur]);

  let verdict;
  if (r.roi >= 100) verdict = "💚 Pays for itself — national Cost-vs-Value data shows this typically adds more resale value than it costs.";
  else if (r.roi >= 90) verdict = "💚 Excellent return — this upgrade nearly pays for itself at resale.";
  else if (r.roi >= 70) verdict = "✅ Strong return — most of your spend comes back in added value.";
  else if (r.roi >= 50) verdict = "🟡 Moderate return — about half comes back; the rest buys enjoyment.";
  else verdict = "🔶 Lifestyle upgrade — low resale payback, so do it for how you'll live, not for profit.";
  const hv = parseFloat(homeValue);
  if (!isNaN(hv) && hv > 0) verdict += `  This project is about ${((r.cost / hv) * 100).toFixed(0)}% of your home's value.`;

  return (
    <>
      <section className="card" id="calc">
        <div className="grid">
          <div>
            <label htmlFor="project">Project type</label>
            <select id="project" value={projectId} onChange={(e) => setProjectId(e.target.value)}>
              {PROJECTS.map((p) => (
                <option key={p.slug} value={p.slug}>{p.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="currency">Currency &amp; region <span className="hint">(adjusts benchmark costs)</span></label>
            <select id="currency" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}>
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <label>Quality / finish level</label>
          <div className="seg" role="group" aria-label="Quality level">
            {Object.entries(TIERS).map(([key, t]) => (
              <button key={key} type="button" className={tier === key ? "on" : ""} onClick={() => setTier(key)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <label htmlFor="scope">Project scope / size <span className="hint">(smaller ↔ larger than a typical job)</span></label>
          <div className="rangeRow">
            <input type="range" id="scope" min="0.6" max="1.6" step="0.05" value={scope}
              onChange={(e) => setScope(parseFloat(e.target.value))} />
            <span className="scopeVal">{Math.round(scope * 100)}%</span>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <label htmlFor="homeValue">Your home&apos;s current value <span className="hint">(optional — refines the resale picture)</span></label>
          <input type="number" id="homeValue" placeholder="e.g. 450000" min="0"
            value={homeValue} onChange={(e) => setHomeValue(e.target.value)} />
        </div>
      </section>

      <section className="result" aria-live="polite">
        <div className="big">Estimated project cost</div>
        <p className="cost">{fmtK(r.cost, cur)}</p>
        <div className="sub">Typical range: {fmtK(r.cost * 0.85, cur)} – {fmtK(r.cost * 1.15, cur)}</div>
        <div className="metrics">
          <div className="metric"><div className="k">Resale value added</div><div className="v">{fmtK(r.valueAdded, cur)}</div></div>
          <div className="metric"><div className="k">Cost recouped (ROI)</div><div className="v">{Math.round(r.roi)}%</div></div>
          <div className="metric">
            <div className="k">{r.net < 0 ? "Net value gain" : "Net cost after resale"}</div>
            <div className="v">{r.net < 0 ? "+" + fmtK(-r.net, cur) : fmtK(r.net, cur)}</div>
          </div>
        </div>
        <div className="verdict">{verdict}</div>
        {r.net < 0 && (
          <div className="sub" style={{ marginTop: 8 }}>
            ℹ️ A recoup above 100% means this project typically adds more resale value than it costs, based on national Cost-vs-Value data. Local results vary — always confirm with quotes.
          </div>
        )}
        <div className="actions">
          <a className="btn btn-white" href={`/cost/${project.slug}/`}>Read the full {project.name.toLowerCase()} cost guide →</a>
        </div>
      </section>

      <h2 className="sec">Renovation ROI league table</h2>
      <p className="lead">Every project ranked by how much of its cost you typically recoup at resale, at your selected finish level and region. Your current selection is highlighted.</p>
      <div className="tablecard">
        <table>
          <thead><tr><th>Project</th><th className="num">Est. cost</th><th className="num">Value added</th><th className="num">Recouped</th></tr></thead>
          <tbody>
            {league.map((row) => (
              <tr key={row.p.slug} className={row.p.slug === projectId ? "activeRow" : ""}>
                <td><a href={`/cost/${row.p.slug}/`}>{row.p.name}</a></td>
                <td className="num">{fmtK(row.cost, cur)}</td>
                <td className="num">{fmtK(row.valueAdded, cur)}</td>
                <td className="num"><span className={`pill ${roiClass(row.roi)}`}>{Math.round(row.roi)}%</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
