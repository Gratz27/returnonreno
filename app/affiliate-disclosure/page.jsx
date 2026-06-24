import Link from "next/link";

export const metadata = {
  title: "Affiliate & Advertising Disclosure",
  description: "How Return on Reno is funded: affiliate, advertising, and lead-referral disclosure in plain English.",
  alternates: { canonical: "/affiliate-disclosure/" },
};

export default function AffiliateDisclosure() {
  return (
    <article>
      <h1 className="title">Affiliate &amp; advertising disclosure</h1>
      <p className="byline">Last updated June 2026</p>

      <p>Return on Reno is free to use. To keep it that way, the site earns money in a few transparent ways. Here it is in
        plain English.</p>

      <h2>Affiliate links</h2>
      <p>Some links are affiliate links. If you click one and buy or sign up, we may earn a commission — <strong>at no extra
        cost to you</strong>. Your price is the same whether you use our link or go direct.</p>

      <h2>Lead referrals</h2>
      <p>Some links connect you with local contractors or providers (e.g. quote-request forms). If you request a quote through
        one, we may receive a referral fee. You&apos;re never obligated to use them, and it costs you nothing.</p>

      <h2>Display advertising</h2>
      <p>We display ads from third-party networks. These networks and their partners may use cookies to show relevant ads —
        see our <Link href="/privacy/">privacy policy</Link> for details and choices.</p>

      <h2>Our promise on independence</h2>
      <p><strong>Our cost estimates and ROI figures are never influenced by advertisers or affiliate partners.</strong> We
        don&apos;t inflate a project&apos;s return because a partner benefits, and we don&apos;t recommend a service simply because it pays.
        When we point you toward something, it&apos;s because we think it&apos;s genuinely useful.</p>

      <p className="note">In line with U.S. FTC guidance on endorsements, we disclose our affiliate and advertising
        relationships clearly and up front, both here and in the site footer.</p>

      <p>Questions about a specific link? <Link href="/contact/">Get in touch</Link>.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
