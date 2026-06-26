import Link from "next/link";
import HomeEquityCalc from "../../components/HomeEquityCalc";

export const metadata = {
  title: "Home Equity & Borrowing Power Calculator",
  description:
    "Estimate how much you could borrow against your home to fund a renovation — based on your home value, mortgage balance, and loan-to-value.",
  alternates: { canonical: "/calculators/home-equity/" },
  openGraph: { url: "/calculators/home-equity/" },
};

export default function Page() {
  return (
    <article>
      <span className="kicker">Calculator</span>
      <h1 className="title">Home equity &amp; borrowing power</h1>
      <p className="lead">A quick estimate of how much you could borrow against your home to fund a renovation.</p>

      <HomeEquityCalc />

      <h2>How home-equity borrowing works</h2>
      <p>Your <strong>equity</strong> is your home&apos;s value minus what you still owe on the mortgage. Lenders will usually let you borrow up to a <strong>loan-to-value (LTV)</strong> limit — often 80–90% — across your existing mortgage plus any new borrowing. So your available headroom is roughly <em>(home value × LTV) − mortgage balance</em>.</p>
      <p>Renovations are commonly funded with a home-equity loan, a home-equity line of credit (HELOC), or a cash-out refinance. Each has different rates and terms — estimate the repayments with the <Link href="/calculators/renovation-loan/">renovation loan calculator</Link>, and check the project pays back with the <Link href="/">ROI calculator</Link>.</p>

      <p className="note" style={{ color: "var(--muted)" }}>An estimate only. Actual borrowing limits depend on the lender, your income, credit, and product. This is not a loan offer or financial advice.</p>
    </article>
  );
}
