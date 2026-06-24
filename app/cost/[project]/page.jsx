import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, calc } from "../../lib/projects";
import { REGIONS } from "../../lib/regions";
import { fmtMoney } from "../../lib/format";
import Calculator from "../../components/Calculator";

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
  const roiPill = roi >= 80 ? "p-good" : roi >= 55 ? "p-mid" : "p-low";

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

      <div className="tablecard">
        <table>
          <tbody>
            <tr><td>Typical national cost</td><td className="num"><strong>{fmtMoney(cost)}</strong></td></tr>
            <tr><td>Typical range</td><td className="num">{fmtMoney(cost * 0.85)} – {fmtMoney(cost * 1.15)}</td></tr>
            <tr><td>Resale value added</td><td className="num">{fmtMoney(valueAdded)}</td></tr>
            <tr><td>Cost recouped (ROI)</td><td className="num"><span className={`pill ${roiPill}`}>{Math.round(roi)}%</span></td></tr>
            <tr><td>Net cost after resale</td><td className="num">{net < 0 ? "+" + fmtMoney(-net) + " gain" : fmtMoney(net)}</td></tr>
          </tbody>
        </table>
      </div>

      <h2>What a {p.name.toLowerCase()} typically includes</h2>
      <ul>
        {p.includes.map((i) => <li key={i}>{i}</li>)}
      </ul>

      <blockquote><strong>Pro tip:</strong> {p.tip}</blockquote>

      <h2>{p.name} cost by region</h2>
      <p>Costs vary by market. These are midrange estimates adjusted for regional price levels — always confirm with local quotes.</p>
      <div className="tablecard">
        <table>
          <thead><tr><th>Location</th><th className="num">Estimated cost</th><th className="num">Recouped</th></tr></thead>
          <tbody>
            {REGIONS.map((rg) => {
              const c = calc(p, "midrange", 1, rg.costMult);
              return (
                <tr key={rg.slug}>
                  <td><Link href={`/cost/${p.slug}/${rg.slug}/`}>{rg.label}</Link></td>
                  <td className="num">{fmtMoney(c.cost, rg.sym, rg.fx)}</td>
                  <td className="num">{Math.round(c.roi)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2>Estimate your own {p.name.toLowerCase()}</h2>
      <p>Adjust the finish level, scope and currency to get a figure for your situation.</p>
      <Calculator initialProject={p.slug} />

      <h2>Methodology</h2>
      <p className="note" style={{ color: "var(--muted)" }}>
        Figures are national midrange &ldquo;Cost vs. Value&rdquo; averages adjusted for finish, scope and region. They are
        planning estimates, not quotes or appraisals, and lean toward US/UK/Canada/Australia mid-markets. Reviewed June 2026.
        This is general information, not financial or real-estate advice.
      </p>

      <div className="cta">
        <h3>Compare every project by ROI</h3>
        <p>See how the {p.name.toLowerCase()} stacks up against 14 other renovations.</p>
        <Link className="btn btn-white" href="/cost/">Browse all project costs →</Link>
      </div>
    </article>
  );
}
