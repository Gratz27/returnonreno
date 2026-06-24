import Link from "next/link";
import { PROJECTS, calc } from "../lib/projects";
import { fmtMoney } from "../lib/format";

export const metadata = {
  title: "Renovation Project Costs & ROI",
  description:
    "Browse cost and resale-ROI guides for 15+ home renovation projects — kitchens, bathrooms, decks, additions, exterior upgrades and more.",
  alternates: { canonical: "/cost/" },
};

export default function CostHub() {
  const rows = PROJECTS.map((p) => ({ p, ...calc(p) })).sort((a, b) => b.roi - a.roi);
  return (
    <article>
      <span className="kicker">PROJECT COST GUIDES</span>
      <h1 className="title">Renovation project costs &amp; ROI</h1>
      <p className="lead">
        Pick a project for a full cost breakdown, regional estimates, and how much you typically recoup at resale.
        Ranked by return on investment.
      </p>

      <div className="cardgrid">
        {rows.map(({ p, cost, roi }) => (
          <Link key={p.slug} className="cardlink" href={`/cost/${p.slug}/`}>
            <b>{p.name}</b>
            <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 4 }}>
              Typical cost {fmtMoney(cost)} · recoups ~{Math.round(roi)}%
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
