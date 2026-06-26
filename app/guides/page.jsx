import Link from "next/link";

export const metadata = {
  title: "Renovation ROI Guides",
  description:
    "Plain-English guides to renovation cost and resale value: which projects pay back, kitchen vs bathroom ROI, whether a pool adds value, and a renovate-to-sell checklist.",
  alternates: { canonical: "/guides/" },
};

const GUIDES = [
  { slug: "best-home-improvements-roi", title: "Which home improvements add the most value in 2026?", blurb: "Every project ranked by resale ROI — and why small exterior fixes beat big interior overhauls." },
  { slug: "renovation-roi-index", title: "The 2026 Renovation ROI Index", blurb: "Our full data reference: every project's cost, value added, and % recouped. Free to cite and embed." },
  { slug: "kitchen-vs-bathroom-roi", title: "Kitchen vs bathroom remodel: which has the better ROI?", blurb: "Head-to-head on cost, recoup rate, and when each is worth doing." },
  { slug: "does-a-pool-add-value", title: "Does a pool add value to your home?", blurb: "The honest answer: it adds value, but rarely pays for itself — and it's the most location-dependent project there is." },
  { slug: "renovate-to-sell-checklist", title: "Renovating to sell: a room-by-room ROI checklist", blurb: "What to do (and skip) before listing, ordered by return." },
];

export default function GuidesHub() {
  return (
    <article>
      <span className="kicker">Guides</span>
      <h1 className="title">Renovation ROI guides</h1>
      <p className="lead">Straight, data-backed answers on what renovations cost and how much you actually get back at resale.</p>

      <div className="cardgrid" style={{ marginTop: 22 }}>
        {GUIDES.map((g) => (
          <Link key={g.slug} className="cardlink" href={`/guides/${g.slug}/`}>
            <b>{g.title}</b>
            <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 5 }}>{g.blurb}</div>
          </Link>
        ))}
      </div>

      <div className="cta">
        <h3>Run your own numbers</h3>
        <p>Compare every project by ROI, split a budget across projects, or enter your own quote.</p>
        <Link className="btn btn-white" href="/">Open the calculator →</Link>
      </div>
    </article>
  );
}
