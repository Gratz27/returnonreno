import Link from "next/link";

export const metadata = {
  title: "Renovating to Sell: A Room-by-Room ROI Checklist",
  description:
    "What to do (and skip) before listing your home, ordered by return. Focus on curb appeal and condition, keep interiors minor, and avoid the low-ROI traps.",
  alternates: { canonical: "/guides/renovate-to-sell-checklist/" },
  openGraph: { url: "/guides/renovate-to-sell-checklist/" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Renovating to sell: a room-by-room ROI checklist",
    datePublished: "2026-06-26", dateModified: "2026-06-26",
    author: { "@type": "Organization", name: "Return on Reno" },
    publisher: { "@type": "Organization", name: "Return on Reno" },
    mainEntityOfPage: "https://returnonreno.com/guides/renovate-to-sell-checklist/",
  };
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span className="kicker">Guide · 2026</span>
      <h1 className="title">Renovating to sell: a room-by-room ROI checklist</h1>
      <p className="byline">By the Return on Reno team · Reviewed June 2026 · ~7 min read</p>

      <p>When you're renovating to sell rather than to live, the goal changes: spend the least to remove buyer objections and make the home photograph well. That means leading with condition and curb appeal, keeping interior work <em>minor</em>, and skipping the projects that don't pay back. Here's the checklist, ordered by return.</p>

      <blockquote><strong>Rule of thumb:</strong> the highest-ROI fixes are cheap and visible from the street. Save the big interior dreams for the buyer.</blockquote>

      <h2>1. The exterior &amp; front door (do first — highest ROI)</h2>
      <ul>
        <li><Link href="/cost/garage-door-replacement/">Garage door</Link> and <Link href="/cost/entry-door-replacement/">entry door</Link> — the best-returning projects of all; modern, clean doors signal a maintained home.</li>
        <li>Tidy <Link href="/cost/vinyl-siding-replacement/">siding</Link> / a fresh coat of exterior paint, and <Link href="/cost/curb-appeal-landscaping/">curb-appeal landscaping</Link> — first impressions get priced in.</li>
        <li>A sound roof and gutters — buyers expect it; an end-of-life <Link href="/cost/asphalt-roof-replacement/">roof</Link> is a negotiating lever you want to remove.</li>
      </ul>

      <h2>2. Paint &amp; floors (cheap, high-impact)</h2>
      <ul>
        <li><Link href="/cost/interior-repaint/">Repaint</Link> throughout in warm neutrals — the single cheapest way to make a home feel cared-for.</li>
        <li>Refinish existing <Link href="/cost/hardwood-floor-refinishing/">hardwood</Link> rather than replacing it — one of the best returns in the house.</li>
      </ul>

      <h2>3. Kitchen &amp; bathrooms (keep them minor)</h2>
      <ul>
        <li>A <Link href="/cost/minor-kitchen-remodel/">minor kitchen refresh</Link> (cabinet fronts, hardware, counters, a couple of appliances) — not a gut job.</li>
        <li>Update a dated <Link href="/cost/bathroom-remodel/">bathroom</Link> with neutral, timeless finishes. See <Link href="/guides/kitchen-vs-bathroom-roi/">kitchen vs bathroom ROI</Link> if you can only do one.</li>
      </ul>

      <h2>4. Spend with caution</h2>
      <ul>
        <li><Link href="/cost/major-kitchen-remodel/">Major kitchen remodels</Link>, <Link href="/cost/bathroom-addition/">bathroom additions</Link>, <Link href="/cost/primary-suite-addition/">suite additions</Link> — they recoup ~half; only worth it if the home is genuinely under-spec for its street.</li>
        <li><Link href="/guides/does-a-pool-add-value/">Pools</Link> and ultra-luxury finishes — lifestyle spends, not resale plays.</li>
        <li><strong>Don't over-improve for the neighbourhood</strong> — a kitchen worth more than the comps can't be appraised back.</li>
      </ul>

      <h2>5. The 10–15% rule</h2>
      <p>Be cautious once any single project passes roughly 10–15% of your home's current value — beyond that you're likely over-improving relative to the local market. The <Link href="/">calculator</Link> shows each project as a percentage of your home value if you enter it.</p>

      <div className="cta">
        <h3>Build your pre-sale plan</h3>
        <p>Use Compare mode to split your renovation budget across the highest-ROI fixes.</p>
        <Link className="btn btn-white" href="/">Open the calculator →</Link>
      </div>

      <p className="note" style={{ color: "var(--muted)" }}>Methodology: ROI rankings reflect national midrange &ldquo;Cost vs. Value&rdquo; data adjusted for finish, scope and region. Local buyer preferences vary — confirm with a local agent. Sources: Remodeling/JLC Cost vs Value, NAR Remodeling Impact Report. Reviewed by the Return on Reno research team, June 2026. General information, not financial or real-estate advice.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
