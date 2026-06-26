"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { PROJECTS, TIERS, calc } from "../lib/projects";
import { CURRENCIES } from "../lib/regions";
import { tierOf, verdictFor } from "../lib/roi";
import ProjectIcon from "./ProjectIcon";
import CostSplit from "./CostSplit";

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

export default function Calculator({ initialProject = "minor-kitchen-remodel", shareable = false }) {
  const [mode, setMode] = useState("single");
  const [tier, setTier] = useState("midrange");
  const [currencyCode, setCurrencyCode] = useState("USD");
  // single mode
  const [projectId, setProjectId] = useState(initialProject);
  const [scope, setScope] = useState(1);
  const [homeValue, setHomeValue] = useState("");
  const [customCost, setCustomCost] = useState("");
  // compare mode
  const [budget, setBudget] = useState("");
  const [selected, setSelected] = useState(() => {
    const second = initialProject === "garage-door-replacement" ? "bathroom-remodel" : "garage-door-replacement";
    return [initialProject, second];
  });
  // ui
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  const cur = CURRENCIES.find((c) => c.code === currencyCode);
  const project = PROJECTS.find((p) => p.slug === projectId) || PROJECTS[0];

  // read shared state from the URL (home page only)
  useEffect(() => {
    if (!shareable || typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    if (![...sp].length) return;
    if (sp.get("m") === "compare") setMode("compare");
    if (CURRENCIES.find((c) => c.code === sp.get("cur"))) setCurrencyCode(sp.get("cur"));
    if (TIERS[sp.get("tier")]) setTier(sp.get("tier"));
    if (PROJECTS.find((p) => p.slug === sp.get("p"))) setProjectId(sp.get("p"));
    const s = parseFloat(sp.get("scope"));
    if (!isNaN(s)) setScope(Math.min(1.6, Math.max(0.6, s)));
    if (sp.get("hv")) setHomeValue(sp.get("hv"));
    if (sp.get("cc")) setCustomCost(sp.get("cc"));
    if (sp.get("b")) setBudget(sp.get("b"));
    const sel = (sp.get("sel") || "").split(",").filter((x) => PROJECTS.find((p) => p.slug === x)).slice(0, 4);
    if (sel.length) setSelected(sel);
  }, [shareable]);

  function shareUrl() {
    const p = new URLSearchParams();
    p.set("m", mode);
    p.set("cur", currencyCode);
    p.set("tier", tier);
    if (mode === "single") {
      p.set("p", projectId);
      if (scope !== 1) p.set("scope", String(scope));
      if (homeValue) p.set("hv", homeValue);
      if (customCost) p.set("cc", customCost);
    } else {
      if (budget) p.set("b", budget);
      p.set("sel", selected.join(","));
    }
    return `${window.location.origin}${window.location.pathname}?${p.toString()}`;
  }
  function copyShare() {
    try {
      navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) { /* clipboard unavailable */ }
  }

  // ---- single-mode result (custom cost overrides the benchmark) ----
  const base = useMemo(() => calc(project, tier, scope, cur.region), [project, tier, scope, cur]);
  const cc = parseFloat(customCost);
  const usingCustom = !isNaN(cc) && cc > 0;
  const costUSD = usingCustom ? cc / cur.fx : base.cost;
  const roi = base.roi;
  const r = { cost: costUSD, roi, valueAdded: costUSD * (roi / 100), net: costUSD - costUSD * (roi / 100) };

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

  // ---- compare-mode computation ----
  const budgetNum = parseFloat(budget);
  const budgetUSD = !isNaN(budgetNum) && budgetNum > 0 ? budgetNum / cur.fx : 0;
  const chosen = selected.map((slug) => {
    const p = PROJECTS.find((x) => x.slug === slug) || PROJECTS[0];
    const c = calc(p, tier, 1, cur.region);
    return { p, roi: c.roi };
  });
  const per = chosen.length ? budgetUSD / chosen.length : 0;
  const cmpRows = chosen.map((x) => ({ ...x, alloc: per, value: per * (x.roi / 100) }));
  const cmpValue = cmpRows.reduce((s, x) => s + x.value, 0);
  const blendedRoi = budgetUSD > 0 ? (cmpValue / budgetUSD) * 100 : 0;
  const best = chosen.slice().sort((a, b) => b.roi - a.roi)[0];
  const bt = tierOf(blendedRoi);

  function toggleSel(slug) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 4 ? [...prev, slug] : prev));
  }

  return (
    <>
      <section className="card" id="calc">
        <div className="seg" role="group" aria-label="Calculator mode" style={{ marginBottom: 16 }}>
          <button type="button" className={mode === "single" ? "on" : ""} onClick={() => setMode("single")}>Single project</button>
          <button type="button" className={mode === "compare" ? "on" : ""} onClick={() => setMode("compare")}>Compare / split budget</button>
        </div>

        {mode === "single" ? (
          <>
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
          </>
        ) : (
          <>
            <label htmlFor="budget">Your budget <span className="hint">(in {cur.code})</span></label>
            <input type="number" id="budget" placeholder="e.g. 50000" min="0" value={budget}
              onChange={(e) => setBudget(e.target.value)} />
            <label style={{ marginTop: 16 }}>Projects to compare <span className="hint">(pick up to 4)</span></label>
            <input type="search" className="picker-search" placeholder="Search projects…" value={search}
              onChange={(e) => setSearch(e.target.value)} aria-label="Search projects" />
            <div className="picker-grid">
              {picks.map((p) => (
                <button key={p.slug} type="button" aria-pressed={selected.includes(p.slug)}
                  className={`chip${selected.includes(p.slug) ? " on" : ""}`} onClick={() => toggleSel(p.slug)}>
                  <span className="chip-ic"><ProjectIcon slug={p.slug} size={18} /></span>
                  <span className="chip-nm">{p.name}</span>
                </button>
              ))}
            </div>
          </>
        )}

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

        {mode === "single" && (
          <>
            <div style={{ marginTop: 16 }}>
              <label htmlFor="scope">Project scope / size <span className="hint">(smaller ↔ larger than a typical job)</span></label>
              <div className="rangeRow">
                <input type="range" id="scope" min="0.6" max="1.6" step="0.05" value={scope}
                  onChange={(e) => setScope(parseFloat(e.target.value))} disabled={usingCustom} />
                <span className="scopeVal">{Math.round(scope * 100)}%</span>
              </div>
            </div>
            <div style={{ marginTop: 16 }}>
              <label htmlFor="customCost">Got a quote? Enter your own cost <span className="hint">(optional — overrides the benchmark)</span></label>
              <input type="number" id="customCost" placeholder={`e.g. ${Math.round(base.cost * cur.fx)}`} min="0"
                value={customCost} onChange={(e) => setCustomCost(e.target.value)} />
            </div>
            <div style={{ marginTop: 16 }}>
              <label htmlFor="homeValue">Your home&apos;s current value <span className="hint">(optional — refines the resale picture)</span></label>
              <input type="number" id="homeValue" placeholder="e.g. 450000" min="0"
                value={homeValue} onChange={(e) => setHomeValue(e.target.value)} />
            </div>
          </>
        )}
      </section>

      {mode === "single" ? (
        <>
          <section className="result reveal-in" aria-live="polite">
            <div className="label">Estimated cost{usingCustom ? " (your quote)" : ""}</div>
            <div className="cost">{fmtK(animCost, cur)}</div>
            <div className="range">{usingCustom ? "Using your entered cost." : `Typical range ${fmtK(r.cost * 0.85, cur)} – ${fmtK(r.cost * 1.15, cur)}`}{hvNote}</div>
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

            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
              <div className="label">Cost breakdown</div>
              <CostSplit costUSD={r.cost} slug={project.slug} fmt={(u) => fmtK(u, cur)} />
            </div>

            <div className="actions">
              <a className="btn btn-primary" href={`/cost/${project.slug}/`}>Full {project.name.toLowerCase()} guide →</a>
              {shareable && <button type="button" className="btn btn-ghost" onClick={copyShare}>{copied ? "Link copied ✓" : "Copy share link"}</button>}
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
      ) : (
        <>
          <section className="result reveal-in" aria-live="polite">
            <div className="label">Splitting {budgetUSD > 0 ? fmtK(budgetUSD, cur) : "your budget"} equally across {chosen.length || 0} project{chosen.length === 1 ? "" : "s"}</div>
            <div className="cost">{Math.round(blendedRoi)}%</div>
            <div className="range">Blended cost recouped at resale</div>
            <span className={`verdict-pill vp-${bt}`}>{verdictFor(blendedRoi).pill}</span>

            <div className="meter">
              <div className="meter-top">
                <span className="k">Total resale value added</span>
                <span className="pct">{fmtK(cmpValue, cur)}</span>
              </div>
              <div className="meter-track">
                <div className={`meter-fill mf-${bt}`} style={{ width: `${Math.min(Math.round(blendedRoi), 100)}%` }} />
              </div>
              <div className="meter-caption">
                {chosen.length === 0 ? "Pick some projects above to compare." :
                  best ? `Putting it all into ${best.p.name.toLowerCase()} (${Math.round(best.roi)}%) returns the most — splitting dilutes your return toward the lower-ROI picks.` : ""}
              </div>
            </div>

            <div className="cmp-list">
              {cmpRows.map((x) => {
                const rt = tierOf(x.roi);
                const w = Math.min(Math.round(x.roi / maxRoi * 100), 100);
                return (
                  <div key={x.p.slug} className="cmp-row">
                    <div className="cmp-head">
                      <span className="cmp-ic"><ProjectIcon slug={x.p.slug} size={16} /></span>
                      <a className="nm" href={`/cost/${x.p.slug}/`}>{x.p.name}</a>
                      <span className="v">{Math.round(x.roi)}%</span>
                    </div>
                    <span className="bar"><span className={`bf-${rt}`} style={{ width: `${w}%` }} /></span>
                    <div className="cmp-sub">Spend {fmtK(x.alloc, cur)} → adds {fmtK(x.value, cur)} in value</div>
                  </div>
                );
              })}
            </div>

            <div className="actions">
              {shareable && <button type="button" className="btn btn-ghost" onClick={copyShare}>{copied ? "Link copied ✓" : "Copy share link"}</button>}
            </div>
          </section>

          <div className="sticky-result">
            <div className="sr-left">
              <div className="sr-cost">{Math.round(blendedRoi)}%</div>
              <div className="sr-sub">blended ROI · {chosen.length} project{chosen.length === 1 ? "" : "s"}</div>
            </div>
            <a className="btn btn-primary sr-btn" href="#calc">Adjust →</a>
          </div>
        </>
      )}
    </>
  );
}
