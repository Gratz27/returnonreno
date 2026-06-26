import Calculator from "./components/Calculator";
import HeroArt from "./components/HeroArt";

export const metadata = {
  title: "Renovation Cost & ROI Calculator",
  description:
    "Estimate what a home renovation costs and how much you get back at resale. Free, no sign-up — compare dozens of projects by ROI.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <section className="hero hero-wrap">
        <div className="hero-text">
          <span className="badge">● Free · No sign-up · Updated 2026</span>
          <h1>What will your renovation cost — and how much do you get back?</h1>
          <p>
            Estimate the price of a home improvement project <strong>and</strong> how much of that cost you
            recoup in added resale value. Most calculators only tell you the spend. This one tells you the{" "}
            <em>return</em>.
          </p>
        </div>
        <div className="hero-art"><HeroArt /></div>
      </section>

      {/* AdSense Auto Ads (loaded in layout) place units automatically — no manual ad slots needed. */}

      <Calculator initialProject="minor-kitchen-remodel" shareable />

      <section className="optin" id="optin">
        <h3>Get your free Renovation Budget Worksheet</h3>
        <p className="lead" style={{ margin: "0 auto", maxWidth: 520 }}>
          A printable spreadsheet to plan costs, track quotes, and compare ROI across projects — emailed to you instantly.
        </p>
        {/* Posts to a Netlify function that adds the contact to Resend and emails the worksheet. */}
        <form action="/.netlify/functions/subscribe" method="post">
          <input type="email" name="email" placeholder="you@email.com" aria-label="Email address" required />
          {/* Honeypot */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} />
          <button className="btn btn-primary" type="submit">Send it</button>
        </form>
        <p className="hint" style={{ marginTop: 10 }}>No spam. Unsubscribe any time.</p>
      </section>

      <h2 className="sec" id="methodology">How we calculate this</h2>
      <div className="card note" style={{ color: "var(--muted)" }}>
        <p><b>Cost benchmarks</b> come from national &ldquo;Cost vs. Value&rdquo; remodeling averages, adjusted by finish
          level, project scope, and region. They are planning estimates, not quotes.</p>
        <p><b>Cost recouped (ROI)</b> is the share of project cost typically reflected in a home&apos;s resale value.
          Smaller exterior and cosmetic upgrades recoup the most; large additions and ultra-luxury work recoup the least.
          A few projects (like garage and entry doors) recoup over 100% — national Cost-vs-Value data shows they often add
          more resale value than they cost.</p>
        <p style={{ margin: 0 }}><b>Net cost after resale</b> = estimated cost − estimated resale value added. Always confirm
          with a local agent and 2–3 contractor quotes. Last reviewed June 2026.</p>
      </div>
    </>
  );
}
