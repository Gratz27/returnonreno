"use client";

import { useState } from "react";
import { fmtPlain, SYMBOLS } from "../lib/money";

export default function RenoLoanCalc() {
  const [sym, setSym] = useState("$");
  const [amount, setAmount] = useState("");
  const [apr, setApr] = useState("7.5");
  const [years, setYears] = useState("10");

  const P = parseFloat(amount) || 0;
  const r = (parseFloat(apr) || 0) / 100 / 12;
  const n = Math.max(1, Math.round((parseFloat(years) || 0) * 12));
  let M = 0;
  if (P > 0) M = r > 0 ? (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : P / n;
  const total = M * n;
  const interest = total - P;

  return (
    <>
      <section className="card">
        <div className="grid">
          <div>
            <label htmlFor="l-cur">Currency</label>
            <select id="l-cur" value={sym} onChange={(e) => setSym(e.target.value)}>
              {SYMBOLS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="l-amt">Loan amount</label>
            <input id="l-amt" type="number" min="0" placeholder="e.g. 40000" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
        </div>
        <div className="grid" style={{ marginTop: 14 }}>
          <div>
            <label htmlFor="l-apr">Interest rate (APR %)</label>
            <input id="l-apr" type="number" min="0" step="0.1" placeholder="e.g. 7.5" value={apr} onChange={(e) => setApr(e.target.value)} />
          </div>
          <div>
            <label htmlFor="l-yrs">Term (years)</label>
            <input id="l-yrs" type="number" min="1" step="1" placeholder="e.g. 10" value={years} onChange={(e) => setYears(e.target.value)} />
          </div>
        </div>
      </section>

      <section className="result" aria-live="polite">
        <div className="label">Monthly payment</div>
        <div className="cost">{P > 0 ? fmtPlain(M, sym) : "—"}</div>
        <div className="range">{P > 0 ? `over ${n} months` : "Enter a loan amount to estimate."}</div>
        <div className="result-stats" style={{ marginTop: 16 }}>
          <div className="s"><div className="k">Total repaid</div><div className="v">{P > 0 ? fmtPlain(total, sym) : "—"}</div></div>
          <div className="s"><div className="k">Total interest</div><div className="v">{P > 0 ? fmtPlain(interest, sym) : "—"}</div></div>
        </div>
        <div className="sub" style={{ marginTop: 10 }}>A standard amortising-loan estimate. Actual rates and terms vary by lender and credit — not a loan offer or financial advice.</div>
      </section>
    </>
  );
}
