"use client";

import { useState } from "react";
import { fmtPlain, SYMBOLS } from "../lib/money";

export default function RenoBudgetCalc() {
  const [sym, setSym] = useState("$");
  const [val, setVal] = useState("");
  const [plan, setPlan] = useState("");

  const v = parseFloat(val) || 0;
  const low = v * 0.05, typ = v * 0.10, high = v * 0.15;
  const planNum = parseFloat(plan) || 0;
  const planPct = v > 0 ? (planNum / v) * 100 : 0;

  let verdict = null;
  if (planNum > 0 && v > 0) {
    if (planPct <= 15) verdict = { cls: "high", pill: "Within range", txt: `At ${Math.round(planPct)}% of your home's value, that's within a sensible range.` };
    else if (planPct <= 20) verdict = { cls: "mid", pill: "On the high side", txt: `At ${Math.round(planPct)}% of your home's value, that's on the high side — make sure the work suits your local market.` };
    else verdict = { cls: "low", pill: "Over-improving risk", txt: `At ${Math.round(planPct)}% of your home's value, you risk over-improving — you may not recoup it at resale.` };
  }

  return (
    <>
      <section className="card">
        <div className="grid">
          <div>
            <label htmlFor="b-cur">Currency</label>
            <select id="b-cur" value={sym} onChange={(e) => setSym(e.target.value)}>
              {SYMBOLS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="b-val">Your home&apos;s value</label>
            <input id="b-val" type="number" min="0" placeholder="e.g. 450000" value={val} onChange={(e) => setVal(e.target.value)} />
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <label htmlFor="b-plan">Planned spend <span className="hint">(optional — checks for over-improving)</span></label>
          <input id="b-plan" type="number" min="0" placeholder="e.g. 60000" value={plan} onChange={(e) => setPlan(e.target.value)} />
        </div>
      </section>

      <section className="result" aria-live="polite">
        <div className="label">Sensible renovation budget</div>
        <div className="cost">{v > 0 ? `${fmtPlain(low, sym)} – ${fmtPlain(high, sym)}` : "—"}</div>
        <div className="range">{v > 0 ? `Typical around ${fmtPlain(typ, sym)} (10% of your home's value)` : "Enter your home value to see a range."}</div>
        {verdict && <span className={`verdict-pill vp-${verdict.cls}`}>{verdict.pill}</span>}
        {verdict && <div className="meter-caption" style={{ marginTop: 10 }}>{verdict.txt}</div>}
        <div className="result-stats" style={{ marginTop: 16 }}>
          <div className="s"><div className="k">Conservative (5%)</div><div className="v">{v > 0 ? fmtPlain(low, sym) : "—"}</div></div>
          <div className="s"><div className="k">Ambitious (15%)</div><div className="v">{v > 0 ? fmtPlain(high, sym) : "—"}</div></div>
        </div>
        <div className="sub" style={{ marginTop: 10 }}>Rule of thumb: kitchens can justify up to ~15% of home value, bathrooms ~5–10%. Avoid spending more than your local market supports.</div>
      </section>
    </>
  );
}
