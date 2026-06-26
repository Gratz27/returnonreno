"use client";

import { useState } from "react";
import { fmtPlain, SYMBOLS } from "../lib/money";

export default function HomeEquityCalc() {
  const [sym, setSym] = useState("$");
  const [val, setVal] = useState("");
  const [owed, setOwed] = useState("");
  const [ltv, setLtv] = useState(80);

  const v = parseFloat(val) || 0;
  const o = parseFloat(owed) || 0;
  const equity = Math.max(0, v - o);
  const borrowable = Math.max(0, v * (ltv / 100) - o);
  const ltvNow = v > 0 ? (o / v) * 100 : 0;

  return (
    <>
      <section className="card">
        <div className="grid">
          <div>
            <label htmlFor="e-cur">Currency</label>
            <select id="e-cur" value={sym} onChange={(e) => setSym(e.target.value)}>
              {SYMBOLS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="e-val">Home value</label>
            <input id="e-val" type="number" min="0" placeholder="e.g. 450000" value={val} onChange={(e) => setVal(e.target.value)} />
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <label htmlFor="e-owed">Mortgage balance owed</label>
          <input id="e-owed" type="number" min="0" placeholder="e.g. 250000" value={owed} onChange={(e) => setOwed(e.target.value)} />
        </div>
        <div style={{ marginTop: 14 }}>
          <label htmlFor="e-ltv">Max loan-to-value <span className="hint">({ltv}% — lenders typically allow 80–90%)</span></label>
          <div className="rangeRow">
            <input id="e-ltv" type="range" min="50" max="95" step="1" value={ltv} onChange={(e) => setLtv(parseFloat(e.target.value))} />
            <span className="scopeVal">{ltv}%</span>
          </div>
        </div>
      </section>

      <section className="result" aria-live="polite">
        <div className="label">You could borrow up to</div>
        <div className="cost">{v > 0 ? fmtPlain(borrowable, sym) : "—"}</div>
        <div className="range">{v > 0 ? `at ${ltv}% loan-to-value, after your existing mortgage` : "Enter your figures to estimate."}</div>
        <div className="result-stats" style={{ marginTop: 16 }}>
          <div className="s"><div className="k">Current equity</div><div className="v">{v > 0 ? fmtPlain(equity, sym) : "—"}</div></div>
          <div className="s"><div className="k">You owe</div><div className="v">{v > 0 ? Math.round(ltvNow) + "% of value" : "—"}</div></div>
        </div>
        <div className="sub" style={{ marginTop: 10 }}>An estimate of borrowing power for a renovation (e.g. a home-equity loan or line of credit). Lenders vary and assess income and credit — this is not a loan offer or financial advice.</div>
      </section>
    </>
  );
}
