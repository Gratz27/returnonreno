import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap-wide">
        <div className="links">
          <Link href="/">Calculator</Link>
          <Link href="/cost/">Project costs</Link>
          <Link href="/guides/best-home-improvements-roi/">Best ROI projects</Link>
          <Link href="/about/">About</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/affiliate-disclosure/">Affiliate disclosure</Link>
        </div>
        <div>© 2026 Return on Reno. Cost and ROI figures are planning estimates based on national
          remodeling averages and are not financial advice, an appraisal, or a contractor quote.</div>
      </div>
    </footer>
  );
}
