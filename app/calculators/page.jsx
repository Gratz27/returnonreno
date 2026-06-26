import Link from "next/link";

export const metadata = {
  title: "Home Renovation Calculators",
  description:
    "Free tools to plan and fund a renovation: a budget calculator, a home-equity borrowing estimate, and a renovation-loan payment calculator.",
  alternates: { canonical: "/calculators/" },
};

const TOOLS = [
  { slug: "renovation-budget", title: "Renovation budget calculator", blurb: "How much should you spend? A sensible range based on your home's value, with an over-improvement check." },
  { slug: "home-equity", title: "Home equity & borrowing power", blurb: "How much could you borrow against your home to fund a renovation?" },
  { slug: "renovation-loan", title: "Renovation loan payment", blurb: "Monthly payment, total repaid, and interest on a renovation loan." },
];

export default function CalculatorsHub() {
  return (
    <article>
      <span className="kicker">Tools</span>
      <h1 className="title">Home renovation calculators</h1>
      <p className="lead">Plan and fund your project — then see what it's worth with the main <Link href="/">renovation ROI calculator</Link>.</p>

      <div className="cardgrid" style={{ marginTop: 22 }}>
        {TOOLS.map((t) => (
          <Link key={t.slug} className="cardlink" href={`/calculators/${t.slug}/`}>
            <b>{t.title}</b>
            <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 5 }}>{t.blurb}</div>
          </Link>
        ))}
      </div>

      <div className="cta">
        <h3>Know the return, too</h3>
        <p>See how much of any project's cost you recoup at resale.</p>
        <Link className="btn btn-white" href="/">Open the ROI calculator →</Link>
      </div>
    </article>
  );
}
