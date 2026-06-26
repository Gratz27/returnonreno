"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { PROJECTS, TIERS, calc } from "../lib/projects";
import { CURRENCIES } from "../lib/regions";
import { tierOf, verdictFor } from "../lib/roi";
import ProjectIcon from "./ProjectIcon";

function fmtK(usd, c) {
  let v = usd * c.fx;
  v = Math.round(v / 100) * 100;
  return c.sym + v.toLocaleString("en-US");
}

function useCountUp(target, duration = 550) {
  const [val, setVal] = useState(target);
  const prevRef = useRef(target);
  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const from = prevRef.current;
    if (reduce || from === target) { setVal(target); prevRef.current = target; return; }
    let raf;
    const start = performance.now();
    const diff = target - from;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - t, 3);
      setVal(from + diff * e);
      if (t < 1) raf = requestAnimationFrame(tick);
      else prevRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

export default function Calculator({ initialProject = "minor-kitchen-remodel" }) {
  const [projectId, setProjectId] = useState(initialProject);
  const [tier, setTier] = useState("midrange");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [scope, setScope] = useState(1);
  const [homeValue, setHomeValue] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const cur = CURRENCIES.find((c) => c.code === currencyCode);
  const project = PROJECTS.find((p) => p.slug === projectId);

  const r = useMemo(() => calc(project, tier, scope, cur.region), [project, tier, scope, cur]);
  const league = useMemo(
    () => PROJECTS.map((p) => ({ p, ...calc(p, tier, 1, cur.region) })).sort((a, b) => b.roi - a.roi),
    [tier, cur]
  );

  const animCost = useCountUp(r.cost);
  const animRoi = useCountUp(r.roi);
  const t = tierOf(r.roi);
  const v = verdictFor(r.roi);
  const meterW = Math.min(Math.round(r.roi), 100);
  const maxRoi = league[0] ? league[0].roi : 100;
  const rows = showAll ? league : league.slice(0, 6);

  const hv = parseFloat(homeValue);
  const hvNote = !isNaN(hv) && hv > 0 ? ` That's about ${Math.round((r.cost / hv) * 100)}% of your home's value.` : "";

  const q = search.trim().toLowerCase();
  const picks = q ? PROJECTS.filter((p) => p.name.toLowerCase().includes(q)) : PROJECTS;

  return (
    <>
      <section className="card" id="calc">
        <label>Choose a project</label>
        <input type="search" className="picker-search" placeholder="Search projects…" value={search}
          onChange={(e) => setSearch(e.target.value)} aria-label="Search projects" />
        <div className="picker-grid" role="listbox" aria-label="Project">
          {picks.map((p) => (
            <button key={p.slug} type="button" role="option" aria-selected={p.slug === projectId}
              className={`chip${p.slug === projectId ? " on" : ""}`} onClick={() => setProjectId(p.slug)}>
              <span className="chip-ic"><ProjectIcon slug={p.slug} size={18} /></span>
              <span className="chip-nm">{p.name}</span>
            </button>
          ))}
          {picks.length === 0 && <div className="sub" style={{ padding: "8px 4px" }}>No projects match “{search}”.</div>}
        </div>

        <div style={{ marginTop: 16 }}>
          <label htmlFor="currency">Currency &amp; region <span className="hint">(adjusts benchmark costs)</span></label>
          <select id="currency" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}>
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: 16 }}>
          <label>Quality / finish level</label>
          <div className="seg" role="group" aria-label="Quality level">
            {Object.entries(TIERS).map(([key, tt]) => (
              <button key={key} type="button" className={tier === key ? "on" : ""} onClick={() => setTier(key)}>
                {tt.label}
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

      <section className="result reveal-in" aria-live="polite">
        <div className="label">Estimated cost</div>
        <div className="cost">{fmtK(animCost, cur)}</div>
        <div className="range">Typical range {fmtK(r.cost * 0.85, cur)} – {fmtK(r.cost * 1.15, cur)}{hvNote}</div>
        <span className={`verdict-pill vp-${t}`}>{v.pill}</span>

        <div className="meter">
          <div className="meter-top">
            <span className="k">Cost recouped at resale</span>
            <span className="pct">{Math.round(animRoi)}%</span>
          </div>
          <div className="meter-track">
            <div className={`meter-fill mf-${t}`} style={{ width: `${meterW}%` }} />
          </div>
          <div className="meter-caption">{v.text}</div>
        </div>

        <div className="result-stats">
          <div className="s">
            <div className="k">Resale value added</div>
            <div className="v">{fmtK(r.valueAdded, cur)}</div>
          </div>
          <div className="s">
            <div className="k">{r.net < 0 ? "Net value gain" : "Net cost after resale"}</div>
            <div className="v">{r.net < 0 ? "+" + fmtK(-r.net, cur) : fmtK(r.net, cur)}</div>
          </div>
        </div>
        <div className="sub" style={{ marginTop: 10 }}>
          {r.net < 0
            ? "“Net value gain” = resale value added beyond what the project costs."
            : "“Net cost” = cost − resale value added: the part you don't recoup at sale, not a loss."}
        </div>

        <div className="actions">
          <a className="btn btn-primary" href={`/cost/${project.slug}/`}>Full {project.name.toLowerCase()} guide →</a>
        </div>
      </section>

      <h2 className="sec">How it compares</h2>
      <p className="lead">Every project ranked by how much of its cost you recoup at resale, at your settings. Your pick is highlighted.</p>
      <div className="roi-list reveal-in">
        {rows.map((row) => {
          const rt = tierOf(row.roi);
          const w = Math.round((row.roi / maxRoi) * 100);
          return (
            <div key={row.p.slug} className={`roi-row${row.p.slug === projectId ? " me" : ""}`}>
              <a className="nm" href={`/cost/${row.p.slug}/`}>{row.p.name}</a>
              <span className="bar"><span className={`bf-${rt}`} style={{ width: `${w}%` }} /></span>
              <span className="v">{Math.round(row.roi)}%</span>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <button type="button" className="btn btn-ghost" onClick={() => setShowAll((s) => !s)}>
          {showAll ? "Show fewer" : `Show all ${league.length} projects`}
        </button>
        <div className="roi-legend">
          <span><span className="dot" style={{ background: "var(--roi-high)" }} /> strong</span>
          <span><span className="dot" style={{ background: "var(--roi-mid)" }} /> moderate</span>
          <span><span className="dot" style={{ background: "var(--roi-low)" }} /> low payback</span>
        </div>
      </div>

      <div className="sticky-result">
        <div className="sr-left">
          <div className="sr-cost">{fmtK(r.cost, cur)}</div>
          <div className="sr-sub">{Math.round(r.roi)}% recouped · {project.name}</div>
        </div>
        <a className="btn btn-primary sr-btn" href={`/cost/${project.slug}/`}>Full guide →</a>
      </div>
    </>
  );
}
