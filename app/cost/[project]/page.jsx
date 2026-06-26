import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, calc } from "../../lib/projects";
import { REGIONS } from "../../lib/regions";
import { fmtMoney } from "../../lib/format";
import { tierOf, verdictFor } from "../../lib/roi";
import Calculator from "../../components/Calculator";
import ProjectIcon from "../../components/ProjectIcon";
import CostSplit from "../../components/CostSplit";

// One static page per project at build time.
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ project: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.project);
  if (!p) return {};
  const { cost, roi } = calc(p);
  return {
    title: `${p.name} Cost & ROI (2026)`,
    description: `How much does a ${p.name.toLowerCase()} cost? Typical ${fmtMoney(cost)}, recouping about ${Math.round(roi)}% at resale. Regional estimates and a free calculator.`,
    alternates: { canonical: `/cost/${p.slug}/` },
    openGraph: { url: `/cost/${p.slug}/` },
  };
}

export default function ProjectCostPage({ params }) {
  const p = getProject(params.project);
  if (!p) notFound();

  const { cost, roi, valueAdded, net } = calc(p);
  const t = tierOf(roi);
  const v = verdictFor(roi);
  const meterW = Math.min(Math.round(roi), 100);

  // FAQ structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much does a ${p.name.toLowerCase()} cost?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A midrange ${p.name.toLowerCase()} typically costs around ${fmtMoney(cost)} nationally, ranging roughly ${fmtMoney(cost * 0.85)}–${fmtMoney(cost * 1.15)} depending on finish, scope and location.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the ROI of a ${p.name.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `It recoups about ${Math.round(roi)}% of its cost at resale on average, adding roughly ${fmtMoney(valueAdded)} in value for a ${fmtMoney(cost)} project.`,
        },
      },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <span className="kicker">PROJECT COST GUIDE · 2026</span>
      <h1 className="title">{p.name}: cost &amp; ROI</h1>
      <p className="byline">
        <Link href="/cost/">All projects</Link> · Reviewed June 2026
      </p>

      <p>{p.blurb}</p>

      {p.roiNote && (
        <p className="note" style={{ borderLeft: "4px solid var(--accent)" }}>
          <strong>Worth knowing:</strong> {p.roiNote}
        </p>
      )}

      <div className="result" style={{ marginTop: 18 }}>
        <div className="proj-head">
          <span className="proj-emblem"><ProjectIcon slug={p.slug} size={24} /></span>
          <span className="label">Typical national cost</span>
        </div>
        <div className="cost">{fmtMoney(cost)}</div>
        <div className="range">Typical range {fmtMoney(cost * 0.85)} – {fmtMoney(cost * 1.15)}</div>
        <span className={`verdict-pill vp-${t}`}>{v.pill}</span>
        <div className="meter">
          <div className="meter-top"><span className="k">Cost recouped at resale</span><span className="pct">{Math.round(roi)}%</span></div>
          <div className="meter-track"><div className={`meter-fill mf-${t}`} style={{ width: `${meterW}%` }} /></div>
          <div className="meter-caption">{v.text}</div>
        </div>
        <div className="result-stats">
          <div className="s"><div className="k">Resale value added</div><div className="v">{fmtMoney(valueAdded)}</div></div>
          <div className="s"><div className="k">{net < 0 ? "Net value gain" : "Net cost after resale"}</div><div className="v">{net < 0 ? "+" + fmtMoney(-net) : fmtMoney(net)}</div></div>
        </div>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
          <div className="label">Cost breakdown</div>
          <CostSplit costUSD={cost} slug={p.slug} fmt={(u) => fmtMoney(u)} />
        </div>
      </div>
      <p className="hint" style={{ color: "var(--muted)", fontSize: 13, marginTop: -6 }}>
        {net < 0
          ? "“Net value gain” means this project typically adds more resale value than it costs."
          : "“Net cost after resale” = project cost − resale value added. It's the part you don't recoup at sale, not a loss — most renovations cost more than they return, with the difference buying you the use and enjoyment of the upgrade."}
      </p>

      <h2>What a {p.name.toLowerCase()} typically includes</h2>
      <ul>
        {p.includes.map((i) => <li key={i}>{i}</li>)}
      </ul>

      <blockquote><strong>Pro tip:</strong> {p.tip}</blockquote>

      <h2>{p.name} cost by region</h2>
      <p>Costs vary by market. These are midrange estimates adjusted for regional price levels — always confirm with local quotes.</p>
      {(() => {
        const groups = {};
        REGIONS.forEach((rg) => { (groups[rg.country] = groups[rg.country] || []).push(rg); });
        const row = (rg) => {
          const c = calc(p, "midrange", 1, rg.costMult);
          return (
            <tr key={rg.slug}>
              <td><Link href={`/cost/${p.slug}/${rg.slug}/`}>{rg.label}</Link></td>
              <td className="num">{fmtMoney(c.cost, rg.sym, rg.fx)}</td>
              <td className="num">{Math.round(c.roi)}%</td>
            </tr>
          );
        };
        return (
          <>
            {Object.entries(groups).map(([country, list]) => (
              <div key={country} className="region-group">
                <div className="region-country">{country}</div>
                <div className="region-chips">
                  {list.map((rg) => {
                    const c = calc(p, "midrange", 1, rg.costMult);
                    return (
                      <Link key={rg.slug} className="region-chip" href={`/cost/${p.slug}/${rg.slug}/`}>
                        <span className="rc-city">{rg.label}</span>
                        <span className="rc-cost">{fmtMoney(c.cost, rg.sym, rg.fx)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
            <details className="disc-d">
              <summary>Full cost-by-location table (with ROI)</summary>
              <div className="dd-body">
                <table>
                  <thead><tr><th>Location</th><th className="num">Estimated cost</th><th className="num">Recouped</th></tr></thead>
                  <tbody>{REGIONS.map(row)}</tbody>
                </table>
              </div>
            </details>
          </>
        );
      })()}

      <h2>Estimate your own {p.name.toLowerCase()}</h2>
      <p>Adjust the finish level, scope and currency to get a figure for your situation.</p>
      <Calculator initialProject={p.slug} />

      <h2>Methodology</h2>
      <p className="note" style={{ color: "var(--muted)" }}>
        Figures are national midrange &ldquo;Cost vs. Value&rdquo; averages adjusted for finish, scope and region. They are
        planning estimates, not quotes or appraisals, and lean toward US/UK/Canada/Australia mid-markets.
        {roi >= 100 && " A recoup above 100% means national data shows this project typically adds more resale value than it costs — it's a genuine figure, but local results vary, so confirm with quotes."}
        {" "}Reviewed June 2026. This is general information, not financial or real-estate advice.
      </p>

      <div className="cta">
        <h3>Compare every project by ROI</h3>
        <p>See how the {p.name.toLowerCase()} stacks up against 14 other renovations.</p>
        <Link className="btn btn-white" href="/cost/">Browse all project costs →</Link>
      </div>
    </article>
  );
}
