import Link from "next/link";
import BrandMark from "./BrandMark";

export default function Header() {
  return (
    <header className="site">
      <div className="brandstrip" aria-hidden="true" />
      <div className="wrap-wide">
        <Link className="brand" href="/">
          <span className="logo"><BrandMark size={22} /></span>
          <span className="brand-tx">
            <span className="brand-name">Return on <span className="bn-accent">Reno</span></span>
            <span className="brand-sub">Renovation cost &amp; resale-value calculator</span>
          </span>
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
