import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Return on Reno — a free, independent renovation cost and resale-ROI calculator.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <article>
      <h1 className="title">About Return on Reno</h1>
      <p className="byline">Last updated June 2026</p>

      <p>Return on Reno is a free tool that answers a question most renovation advice skips: not just <em>what will this
        cost?</em> but <em>how much of that cost do I get back?</em> We built it because almost every other calculator stops at
        the price tag, leaving homeowners to guess at the part that actually matters — the return.</p>

      <h2>What we do</h2>
      <p>Our <Link href="/">calculator</Link> estimates the cost of common home improvement projects and pairs each one with a
        realistic resale-value figure: estimated cost, value added at resale, percentage of cost recouped (ROI), and net cost
        after resale — in seconds, no sign-up. We also publish guides like <Link href="/guides/best-home-improvements-roi/">which
        home improvements add the most value</Link>.</p>

      <h2>Where our numbers come from</h2>
      <p>Cost and ROI figures are built from published national &ldquo;Cost vs. Value&rdquo; remodeling averages and adjusted
        for finish level, scope, currency and region. They are planning benchmarks, not appraisals or quotes, and lean toward
        US, UK, Canadian and Australian mid-markets. See our methodology on the calculator page.</p>

      <h2>Our principles</h2>
      <ul>
        <li><strong>Free and accessible.</strong> The core calculator is always free, no account required.</li>
        <li><strong>Honest about limits.</strong> Estimates are estimates — we say where they&apos;re weakest and when to get a
          local professional involved.</li>
        <li><strong>Independent.</strong> Cost and ROI figures aren&apos;t influenced by advertisers or affiliate partners. See our{" "}
          <Link href="/affiliate-disclosure/">affiliate disclosure</Link>.</li>
      </ul>

      <h2>A note on advice</h2>
      <p>Everything here is general information to help you plan. It is not financial, legal, tax, or professional real-estate
        advice. Before spending money, get written quotes from licensed local contractors.</p>

      <p>Questions or corrections welcome — see our <Link href="/contact/">contact page</Link>.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
