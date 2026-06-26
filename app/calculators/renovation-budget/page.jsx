import Link from "next/link";
import RenoBudgetCalc from "../../components/RenoBudgetCalc";

export const metadata = {
  title: "Renovation Budget Calculator",
  description:
    "How much should you spend on a renovation? Get a sensible budget range from your home's value, plus a check for over-improving.",
  alternates: { canonical: "/calculators/renovation-budget/" },
  openGraph: { url: "/calculators/renovation-budget/" },
};

export default function Page() {
  return (
    <article>
      <span className="kicker">Calculator</span>
      <h1 className="title">Renovation budget calculator</h1>
      <p className="lead">A sensible spending range for your renovation, based on your home&apos;s value — with a check for over-improving.</p>

      <RenoBudgetCalc />

      <h2>How much should you spend on a renovation?</h2>
      <p>A common rule of thumb is to keep a whole-home renovation in the region of <strong>5–15% of your home&apos;s value</strong>: around 5% for a light refresh, ~10% for a typical update, and up to 15% for an ambitious one. Per-room, kitchens can justify up to about 15% of home value and bathrooms roughly 5–10%.</p>
      <p>The bigger risk is <em>over-improving</em>: once a project pushes past ~20% of your home&apos;s value, you&apos;re increasingly likely to spend more than your local market will pay back. A $150,000 kitchen in a $400,000 neighbourhood simply can&apos;t be appraised back.</p>
      <p>Budget is only half the question — the other half is how much you recoup. See which projects pay back best in the <Link href="/">ROI calculator</Link> and the <Link href="/guides/best-home-improvements-roi/">best-value projects guide</Link>.</p>

      <p className="note" style={{ color: "var(--muted)" }}>These are general planning ranges, not a recommendation for your specific home or finances. Confirm with a local agent and contractor quotes. Not financial advice.</p>
    </article>
  );
}
