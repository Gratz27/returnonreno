import Link from "next/link";

export default function Header() {
  return (
    <header className="site">
      <div className="wrap-wide">
        <Link className="brand" href="/">
          <div className="logo">R</div>
          <div>
            <h1>Return on Reno</h1>
            <span>Renovation cost &amp; resale-value calculator</span>
          </div>
        </Link>
        <nav className="top">
          <Link href="/">Calculator</Link>
          <Link href="/cost/">Project costs</Link>
          <Link href="/guides/best-home-improvements-roi/">Best ROI projects</Link>
          <Link href="/about/">About</Link>
        </nav>
      </div>
    </header>
  );
}
