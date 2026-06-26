import Link from "next/link";

export const metadata = {
  title: "Does a Pool Add Value to Your Home?",
  description:
    "A pool adds real value but rarely pays for itself — national data shows ~50–55% recouped. It's the most location-dependent project there is. Here's the honest math.",
  alternates: { canonical: "/guides/does-a-pool-add-value/" },
  openGraph: { url: "/guides/does-a-pool-add-value/" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Does a pool add value to your home?",
    datePublished: "2026-06-26", dateModified: "2026-06-26",
    author: { "@type": "Organization", name: "Return on Reno" },
    publisher: { "@type": "Organization", name: "Return on Reno" },
    mainEntityOfPage: "https://returnonreno.com/guides/does-a-pool-add-value/",
  };
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span className="kicker">Guide · 2026</span>
      <h1 className="title">Does a pool add value to your home?</h1>
      <p className="byline">By the Return on Reno team · Reviewed June 2026 · ~6 min read</p>

      <p>Yes — an inground pool adds real resale value. No — it almost never pays for itself, and in the wrong climate it can even put buyers off. It's the most <strong>location-dependent</strong> project in the whole renovation playbook.</p>

      <blockquote><strong>The honest math:</strong> a ~$45,000 inground pool typically adds around $25,000 of resale value — roughly <strong>55% recouped</strong> nationally, leaving ~$20,000 of net cost. Build a pool for how you'll enjoy it, not as an investment.</blockquote>

      <h2>What the data says</h2>
      <p>The National Association of Realtors puts inground-pool cost recovery at about 56%, and most sources land in the 40–60% range. In percentage terms, a pool tends to add roughly 5–8% to a home's value — real, but well short of what it costs to build. See the live figures on our <Link href="/cost/inground-pool-installation/">inground pool cost page</Link>.</p>

      <h2>Climate changes everything</h2>
      <p>This is the part generic calculators miss. In warm &ldquo;Sun Belt&rdquo; markets — much of Florida, Arizona, Texas, Southern California, and most of Australia — a well-kept pool is closer to expected, can recoup 65%+ and add 7–10% to value. In cold climates with a three-to-four-month swim season, buyers often see a pool as a maintenance, insurance and safety burden, so it recoups far less and can be a net negative. A pool's worth is decided by your zip code as much as your spend.</p>

      <h2>What helps (and hurts) a pool's value</h2>
      <ul>
        <li><strong>Helps:</strong> a warm climate; a well-maintained pool with current safety features (fence, cover, alarm); a design that fits the yard and leaves usable lawn.</li>
        <li><strong>Hurts:</strong> a neglected or aging pool (it subtracts value and flags inspection/insurance issues); a pool that swallows the entire backyard; an above-ground pool (≈0% added value).</li>
      </ul>

      <h2>So should you build one?</h2>
      <p>If you'll genuinely use it for years and you're in a warm market, the lifestyle value can justify the net cost — and you'll recover more of it at sale than a buyer in a cold climate would. If you're installing it mainly to raise the sale price, the numbers don't support it; your money goes further on <Link href="/guides/best-home-improvements-roi/">higher-ROI projects</Link> like doors, a minor kitchen refresh, or curb appeal.</p>

      <div className="cta">
        <h3>See the pool numbers for your situation</h3>
        <p>Enter your own quote, adjust the finish level, and see the net cost after resale.</p>
        <Link className="btn btn-white" href="/cost/inground-pool-installation/">Pool cost &amp; ROI →</Link>
      </div>

      <p className="note" style={{ color: "var(--muted)" }}>Methodology: figures are national midrange estimates adjusted for finish, scope and region; pools are highly climate-dependent, so treat the national figure as a starting point. Sources: NAR Remodeling Impact Report, Opendoor and Redfin pool-value analyses, Remodeling/JLC Cost vs Value. Reviewed by the Return on Reno research team, June 2026. General information, not financial or real-estate advice.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
