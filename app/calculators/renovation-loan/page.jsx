import Link from "next/link";
import RenoLoanCalc from "../../components/RenoLoanCalc";

export const metadata = {
  title: "Renovation Loan Payment Calculator",
  description:
    "Work out the monthly payment, total repaid, and total interest on a renovation loan from the amount, interest rate, and term.",
  alternates: { canonical: "/calculators/renovation-loan/" },
  openGraph: { url: "/calculators/renovation-loan/" },
};

export default function Page() {
  return (
    <article>
      <span className="kicker">Calculator</span>
      <h1 className="title">Renovation loan payment calculator</h1>
      <p className="lead">Estimate the monthly payment and total interest on a loan used to fund your renovation.</p>

      <RenoLoanCalc />

      <h2>What this tells you</h2>
      <p>Enter the loan amount, interest rate (APR), and term, and the calculator works out the fixed monthly payment for a standard amortising loan, plus the total you&apos;ll repay and how much of that is interest. A longer term lowers the monthly payment but raises the total interest; a higher rate raises both.</p>
      <p>Before borrowing, it&apos;s worth checking two things: how much you could borrow (the <Link href="/calculators/home-equity/">home-equity calculator</Link>), and whether the project earns its keep (the <Link href="/">ROI calculator</Link> shows how much you recoup at resale).</p>

      <p className="note" style={{ color: "var(--muted)" }}>A standard amortising-loan estimate for planning. Actual rates, fees, and terms vary by lender and credit. Not a loan offer or financial advice.</p>
    </article>
  );
}
