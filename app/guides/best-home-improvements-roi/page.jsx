import Link from "next/link";
import { PROJECTS, calc } from "../../lib/projects";
import { fmtMoney } from "../../lib/format";

export const metadata = {
  title: "Which Home Improvements Add the Most Value in 2026?",
  description:
    "A data-backed ranking of which home improvements add the most resale value in 2026 — and which quietly lose money. Compare 15 projects by ROI.",
  alternates: { canonical: "/guides/best-home-improvements-roi/" },
};

export default function Article() {
  const rows = PROJECTS.map((p) => ({ p, ...calc(p) })).sort((a, b) => b.roi - a.roi);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Which home improvements add the most value in 2026?",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    author: { "@type": "Organization", name: "Return on Reno" },
    publisher: { "@type": "Organization", name: "Return on Reno" },
    mainEntityOfPage: "https://returnonreno.com/guides/best-home-improvements-roi/",
    image: "https://returnonreno.com/og-image.png",
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span className="kicker">RENOVATION ROI · 2026</span>
      <h1 className="title">Which home improvements add the most value in 2026?</h1>
      <p className="byline">By the Return on Reno team · Reviewed June 2026 · ~8 min read</p>

      <p>Almost every guide to &ldquo;value-adding renovations&rdquo; tells you to remodel your kitchen and bathroom. The data
        tells a more uncomfortable story: the projects that recoup the <em>most</em> of their cost are usually the small,
        unglamorous ones — a new garage door, a fresh front door, tidier siding — while the big interior overhauls everyone
        dreams about tend to return the <em>least</em> per dollar spent.</p>

      <p>That gap between cost and recovered value is the single most important number in any renovation decision. Below we
        rank 15 common projects by how much of their cost typically comes back at resale. Every figure is reflected live in
        our <Link href="/">free renovation cost &amp; ROI calculator</Link>.</p>

      <blockquote><strong>The one-line version:</strong> curb appeal and condition beat square footage and luxury. Buyers pay
        a premium for a home that looks cared-for from the street and move-in ready inside — not for the most expensive
        version of any single room.</blockquote>

      <h2>The 2026 renovation ROI league table</h2>
      <p>The share of a project&apos;s cost typically reflected back in resale value, for a midrange finish. Near or above 100%
        effectively pays for itself; under 50% is mostly a lifestyle purchase.</p>
      <div className="tablecard">
        <table>
          <thead><tr><th>Project</th><th className="num">Typical cost</th><th className="num">Recouped</th></tr></thead>
          <tbody>
            {rows.map(({ p, cost, roi }) => {
              const cls = roi >= 80 ? "p-good" : roi >= 55 ? "p-mid" : "p-low";
              return (
                <tr key={p.slug}>
                  <td><Link href={`/cost/${p.slug}/`}>{p.name}</Link></td>
                  <td className="num">{fmtMoney(cost)}</td>
                  <td className="num"><span className={`pill ${cls}`}>~{Math.round(roi)}%</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2>Why the small exterior projects win</h2>
      <ul>
        <li><strong>First impressions are priced in.</strong> Curb appeal sets a buyer&apos;s expectation before they walk
          through the door. Replacing a garage door, front door, or worn siding upgrades the very first thing every buyer and
          appraiser sees.</li>
        <li><strong>Low cost, high visibility.</strong> ROI is a ratio. These projects cost little but change a lot of what&apos;s
          visible, so even a modest bump in perceived value covers the spend.</li>
        <li><strong>They fix &ldquo;condition,&rdquo; which buyers reward.</strong> Most buyers are paying to avoid hassle. New
          fixtures and a tidy exterior signal a home that won&apos;t surprise them with bills.</li>
      </ul>

      <h2>Where the money quietly disappears</h2>
      <p>A major kitchen remodel, a bathroom addition, and especially a primary-suite addition all recoup around half their
        cost. That&apos;s not a reason never to do them — it&apos;s a reason to do them with your eyes open. Big additions add square
        footage you pay full price for but only partly recover, and upscale finishes recoup a smaller percentage than
        midrange ones.</p>

      <div className="cta">
        <h3>See the numbers for your project</h3>
        <p>Pick any of these 15 projects, set your finish level and region, and get an instant cost and ROI estimate.</p>
        <Link className="btn btn-white" href="/cost/">Browse project cost guides →</Link>
      </div>

      <h2>Renovate to sell, or to stay?</h2>
      <p>If you&apos;re selling within a couple of years, favour the top of the table: high-recoup, broadly appealing,
        curb-appeal projects, and don&apos;t out-spend your neighbourhood. If you&apos;re staying long term, ROI matters far less —
        spend on the rooms you live in, just go in knowing the resale math so a &ldquo;lifestyle&rdquo; project doesn&apos;t
        masquerade as an &ldquo;investment.&rdquo;</p>

      <h2>Methodology &amp; sources</h2>
      <p className="note" style={{ color: "var(--muted)" }}>
        Cost figures are national midrange averages compiled from published &ldquo;Cost vs. Value&rdquo; remodeling data and
        adjusted for finish level and region. &ldquo;Recouped&rdquo; reflects the share of project cost typically returned as
        added resale value. These are planning benchmarks, not appraisals or quotes, and lean toward US/UK/Canada/Australia
        mid-markets. Reviewed June 2026. General information, not financial or real-estate advice.
      </p>

      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
