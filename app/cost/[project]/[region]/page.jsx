import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, calc } from "../../../lib/projects";
import { REGIONS, getRegion } from "../../../lib/regions";
import { fmtMoney } from "../../../lib/format";
import Calculator from "../../../components/Calculator";

// One static page per project × region combination.
export function generateStaticParams() {
  const params = [];
  for (const p of PROJECTS) {
    for (const r of REGIONS) {
      params.push({ project: p.slug, region: r.slug });
    }
  }
  return params;
}

export function generateMetadata({ params }) {
  const p = getProject(params.project);
  const r = getRegion(params.region);
  if (!p || !r) return {};
  const c = calc(p, "midrange", 1, r.costMult);
  return {
    title: `${p.name} Cost in ${r.label} (2026)`,
    description: `How much does a ${p.name.toLowerCase()} cost in ${r.label}? About ${fmtMoney(c.cost, r.sym, r.fx)}, recouping ~${Math.round(c.roi)}% at resale.`,
    alternates: { canonical: `/cost/${p.slug}/${r.slug}/` },
    openGraph: { url: `/cost/${p.slug}/${r.slug}/` },
  };
}

export default function ProjectRegionPage({ params }) {
  const p = getProject(params.project);
  const r = getRegion(params.region);
  if (!p || !r) notFound();

  const c = calc(p, "midrange", 1, r.costMult);
  const nat = calc(p);
  const diff = Math.round((r.costMult - 1) * 100);
  const roiPill = c.roi >= 80 ? "p-good" : c.roi >= 55 ? "p-mid" : "p-low";

  return (
    <article>
      <span className="kicker">{r.country.toUpperCase()} · 2026</span>
      <h1 className="title">{p.name} cost in {r.label}</h1>
      <p className="byline">
        <Link href={`/cost/${p.slug}/`}>{p.name}</Link> · <Link href="/cost/">All projects</Link> · Reviewed June 2026
      </p>

      <p>
        In {r.label}, a midrange {p.name.toLowerCase()} typically costs around{" "}
        <strong>{fmtMoney(c.cost, r.sym, r.fx)}</strong>
        {diff !== 0 && (
          <> — about {Math.abs(diff)}% {diff > 0 ? "above" : "below"} the national average, reflecting local labour and material prices</>
        )}
        . On average it recoups about {Math.round(c.roi)}% of its cost at resale.
      </p>

      {r.blurb && <p>{r.blurb}</p>}

      <div className="tablecard">
        <table>
          <tbody>
            <tr><td>Estimated cost in {r.label}</td><td className="num"><strong>{fmtMoney(c.cost, r.sym, r.fx)}</strong></td></tr>
            <tr><td>Typical range</td><td className="num">{fmtMoney(c.cost * 0.85, r.sym, r.fx)} – {fmtMoney(c.cost * 1.15, r.sym, r.fx)}</td></tr>
            <tr><td>Resale value added</td><td className="num">{fmtMoney(c.valueAdded, r.sym, r.fx)}</td></tr>
            <tr><td>Cost recouped (ROI)</td><td className="num"><span className={`pill ${roiPill}`}>{Math.round(c.roi)}%</span></td></tr>
            <tr><td>National average (for comparison)</td><td className="num">{fmtMoney(nat.cost)}</td></tr>
          </tbody>
        </table>
      </div>

      <h2>What&apos;s included</h2>
      <ul>{p.includes.map((i) => <li key={i}>{i}</li>)}</ul>
      <blockquote><strong>Pro tip:</strong> {p.tip}</blockquote>

      <h2>Estimate your {p.name.toLowerCase()} in {r.label}</h2>
      <Calculator initialProject={p.slug} />

      <h2>Other locations</h2>
      <div className="cardgrid">
        {REGIONS.filter((x) => x.slug !== r.slug).slice(0, 6).map((x) => (
          <Link key={x.slug} className="cardlink" href={`/cost/${p.slug}/${x.slug}/`}>
            <b>{p.name} in {x.label}</b>
          </Link>
        ))}
      </div>

      <p className="note" style={{ color: "var(--muted)" }}>
        Regional figures apply a local cost adjustment to national midrange averages and are planning estimates only —
        confirm with local contractor quotes. Not financial or real-estate advice. Reviewed June 2026.
      </p>
    </article>
  );
}
