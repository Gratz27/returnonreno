import Link from "next/link";

export const metadata = {
  title: "Kitchen vs Bathroom Remodel: Which Has the Better ROI?",
  description:
    "Kitchen vs bathroom remodel compared on cost and resale ROI. A minor kitchen recoups ~85%, a midrange bathroom ~74% — here's when each is worth it.",
  alternates: { canonical: "/guides/kitchen-vs-bathroom-roi/" },
  openGraph: { url: "/guides/kitchen-vs-bathroom-roi/" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Kitchen vs bathroom remodel: which has the better ROI?",
    datePublished: "2026-06-26", dateModified: "2026-06-26",
    author: { "@type": "Organization", name: "Return on Reno" },
    publisher: { "@type": "Organization", name: "Return on Reno" },
    mainEntityOfPage: "https://returnonreno.com/guides/kitchen-vs-bathroom-roi/",
  };
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span className="kicker">Guide · 2026</span>
      <h1 className="title">Kitchen vs bathroom remodel: which has the better ROI?</h1>
      <p className="byline">By the Return on Reno team · Reviewed June 2026 · ~6 min read</p>

      <p>If you can only do one, which pays back better at resale — the kitchen or the bathroom? The short answer: a <strong>minor kitchen remodel</strong> usually edges out a bathroom remodel on return, but the bathroom wins on lower cost and lower risk. The trap to avoid in both rooms is going &ldquo;major.&rdquo;</p>

      <blockquote><strong>Quick verdict:</strong> minor kitchen remodel ≈ 85% recouped · midrange bathroom remodel ≈ 74% · major kitchen ≈ 50% · bathroom addition ≈ 50%. Smaller, cosmetic updates beat full gut-jobs in both rooms.</blockquote>

      <h2>The numbers, side by side</h2>
      <div className="tablecard">
        <table>
          <thead><tr><th>Project</th><th className="num">Typical cost</th><th className="num">Recouped</th></tr></thead>
          <tbody>
            <tr><td><Link href="/cost/minor-kitchen-remodel/">Minor kitchen remodel</Link></td><td className="num">$27,000</td><td className="num"><span className="pill p-good">~85%</span></td></tr>
            <tr><td><Link href="/cost/bathroom-remodel/">Bathroom remodel (midrange)</Link></td><td className="num">$25,000</td><td className="num"><span className="pill p-mid">~74%</span></td></tr>
            <tr><td><Link href="/cost/major-kitchen-remodel/">Major kitchen remodel</Link></td><td className="num">$80,000</td><td className="num"><span className="pill p-low">~50%</span></td></tr>
            <tr><td><Link href="/cost/bathroom-addition/">Bathroom addition</Link></td><td className="num">$60,000</td><td className="num"><span className="pill p-low">~50%</span></td></tr>
          </tbody>
        </table>
      </div>
      <p className="hint" style={{ color: "var(--muted)" }}>National midrange averages; ROI varies by market. Run your own figures in the <Link href="/">calculator</Link>.</p>

      <h2>Why the minor kitchen usually wins</h2>
      <p>The kitchen is the room buyers judge a house by, so a refresh that makes it feel current pays off — refacing or repainting cabinets, new hardware, an updated countertop, and one or two appliances, <em>without</em> moving walls or plumbing. Because the cost stays moderate while the visual impact is high, the recoup rate lands around 85%. Push it to a full <Link href="/cost/major-kitchen-remodel/">major remodel</Link> — custom cabinets, new layout, premium everything — and the cost roughly triples while the recoup rate falls to about half.</p>

      <h2>When the bathroom is the smarter call</h2>
      <p>A <Link href="/cost/bathroom-remodel/">midrange bathroom remodel</Link> recoups a little less (~74%) but costs less and carries less risk: it's a smaller, more contained project, and a clean, modern bathroom removes a common buyer objection. If your kitchen is already decent and a bathroom is dated or the home is short on bathrooms, the bathroom is the better spend. Note that a whole new <Link href="/cost/bathroom-addition/">bathroom addition</Link> is a different animal — it adds function but only recoups about half its cost.</p>

      <h2>How to choose</h2>
      <ul>
        <li><strong>Selling within ~2 years?</strong> Fix whichever room is most dated, keep it <em>minor/midrange</em>, and use neutral, timeless finishes.</li>
        <li><strong>Staying long term?</strong> ROI matters less — do the room you'll use most, and enjoy it.</li>
        <li><strong>Tight budget?</strong> The bathroom is cheaper to bring up to standard; the minor kitchen returns a touch more per dollar.</li>
        <li><strong>Either way:</strong> resist scope creep. The jump from &ldquo;minor&rdquo; to &ldquo;major&rdquo; is where ROI collapses.</li>
      </ul>

      <div className="cta">
        <h3>Compare them for your home</h3>
        <p>Use Compare mode to put a kitchen and bathroom side by side, or enter your own quote.</p>
        <Link className="btn btn-white" href="/">Open the calculator →</Link>
      </div>

      <p className="note" style={{ color: "var(--muted)" }}>Methodology: figures are national midrange &ldquo;Cost vs. Value&rdquo; averages compiled from published remodeling data, adjusted for finish, scope and region. Planning estimates, not appraisals or quotes. Sources: Remodeling/JLC Cost vs Value, NAR Remodeling Impact Report. Reviewed by the Return on Reno research team, June 2026. General information, not financial or real-estate advice.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
