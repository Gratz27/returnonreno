import Link from "next/link";
import { PROJECTS, calc } from "../../lib/projects";
import { tierOf } from "../../lib/roi";
import { fmtMoney } from "../../lib/format";

export const metadata = {
  title: "The 2026 Renovation ROI Index",
  description:
    "A free data reference ranking every home renovation project by resale ROI — typical cost, value added, and % recouped. Cite it or embed our calculator.",
  alternates: { canonical: "/guides/renovation-roi-index/" },
  openGraph: { url: "/guides/renovation-roi-index/" },
};

export default function Page() {
  const rows = PROJECTS.map((p) => ({ p, ...calc(p) })).sort((a, b) => b.roi - a.roi);
  const max = rows[0] ? rows[0].roi : 100;
  const pill = (roi) => (roi >= 80 ? "p-good" : roi >= 55 ? "p-mid" : "p-low");

  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "The 2026 Renovation ROI Index",
    datePublished: "2026-06-26", dateModified: "2026-06-26",
    author: { "@type": "Organization", name: "Return on Reno" },
    publisher: { "@type": "Organization", name: "Return on Reno" },
    mainEntityOfPage: "https://returnonreno.com/guides/renovation-roi-index/",
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span className="kicker">Data reference · 2026</span>
      <h1 className="title">The 2026 Renovation ROI Index</h1>
      <p className="byline">By the Return on Reno team · Reviewed June 2026</p>

      <p>How much of each renovation's cost comes back at resale, ranked. These are national midrange figures from &ldquo;Cost vs. Value&rdquo; remodeling data — a quick reference for which projects pay back and which are lifestyle spends. Figures are <strong>free to cite with a link</strong>, and you can <Link href="/guides/renovation-roi-index/#embed">embed our live calculator</Link> on your own site.</p>

      <h2>Projects ranked by cost recouped</h2>
      <div className="roi-list" style={{ marginTop: 8 }}>
        {rows.map(({ p, roi }) => {
          const w = Math.round((roi / max) * 100);
          return (
            <div key={p.slug} className="roi-row">
              <Link className="nm" href={`/cost/${p.slug}/`}>{p.name}</Link>
              <span className="bar"><span className={`bf-${tierOf(roi)}`} style={{ width: `${w}%` }} /></span>
              <span className="v">{Math.round(roi)}%</span>
            </div>
          );
        })}
      </div>
      <div className="roi-legend" style={{ marginTop: 8 }}>
        <span><span className="dot" style={{ background: "var(--roi-high)" }} /> strong (≥80%)</span>
        <span><span className="dot" style={{ background: "var(--roi-mid)" }} /> moderate (55–79%)</span>
        <span><span className="dot" style={{ background: "var(--roi-low)" }} /> low payback (&lt;55%)</span>
      </div>

      <h2>Full table</h2>
      <div className="tablecard">
        <table>
          <thead><tr><th>Project</th><th className="num">Typical cost</th><th className="num">Value added</th><th className="num">Recouped</th></tr></thead>
          <tbody>
            {rows.map(({ p, cost, valueAdded, roi }) => (
              <tr key={p.slug}>
                <td><Link href={`/cost/${p.slug}/`}>{p.name}</Link></td>
                <td className="num">{fmtMoney(cost)}</td>
                <td className="num">{fmtMoney(valueAdded)}</td>
                <td className="num"><span className={`pill ${pill(roi)}`}>{Math.round(roi)}%</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="embed">Cite or embed</h2>
      <p>Using this data? A link to <Link href="/">returnonreno.com</Link> is appreciated. To put the live, interactive calculator on your own page, paste this snippet:</p>
      <div className="note" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 13, overflowX: "auto" }}>
        &lt;iframe src=&quot;https://returnonreno.com/embed.html&quot; width=&quot;100%&quot; height=&quot;640&quot; style=&quot;border:1px solid #e7ede9;border-radius:14px&quot; title=&quot;Renovation ROI calculator&quot; loading=&quot;lazy&quot;&gt;&lt;/iframe&gt;
      </div>

      <div className="cta">
        <h3>Run the interactive version</h3>
        <p>Compare projects, split a budget, or enter your own quote.</p>
        <Link className="btn btn-white" href="/">Open the calculator →</Link>
      </div>

      <p className="note" style={{ color: "var(--muted)" }}>Methodology: national midrange &ldquo;Cost vs. Value&rdquo; averages compiled from published remodeling data, adjusted for finish, scope and region. Planning estimates, not appraisals or quotes; ROI varies by local market. Sources: Remodeling/JLC Cost vs Value, NAR Remodeling Impact Report. Reviewed by the Return on Reno research team, June 2026.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
