import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "The terms governing use of Return on Reno, including disclaimers that the site is not professional advice.",
  alternates: { canonical: "/terms/" },
};

export default function Terms() {
  return (
    <article>
      <h1 className="title">Terms of Service</h1>
      <p className="byline">Last updated June 2026</p>

      <p>These Terms govern your use of returnonreno.com (the &ldquo;Site&rdquo;), operated by Return on Reno. By using the
        Site, you agree to these Terms. If you do not agree, please do not use the Site.</p>

      <h2>1. What the Site is</h2>
      <p>Return on Reno provides free informational tools and content — principally a renovation cost and resale-value (ROI)
        calculator and related guides — for general planning purposes only.</p>

      <h2>2. Not professional advice</h2>
      <p>The Site does not provide financial, investment, legal, tax, real-estate, appraisal, or construction advice. Figures
        and content are general information, not a substitute for professional advice. <strong>Before any financial or
        renovation decision, obtain written quotes from licensed contractors and advice from appropriate local
        professionals.</strong> You are solely responsible for your decisions.</p>

      <h2>3. Estimates and accuracy</h2>
      <p>All cost and ROI figures are planning estimates from national averages adjusted by your inputs. They are not quotes,
        appraisals, or guarantees, and actual results vary widely. We do not warrant that any figure is accurate, complete, or
        applicable to your situation. The calculator runs in your browser; we do not store your inputs.</p>

      <h2>4. Acceptable use &amp; intellectual property</h2>
      <p>Use the Site lawfully; do not disrupt it, attempt unauthorised access, or scrape/republish substantial content
        without permission. The Site&apos;s text, design, calculators, and graphics are owned by us or our licensors. You may use
        the Site for personal, non-commercial planning, and may quote briefly with attribution and a link.</p>

      <h2>5. Advertising, affiliates &amp; third-party links</h2>
      <p>The Site is supported by advertising and affiliate/referral links; we may earn commissions at no extra cost to you
        (see our <Link href="/affiliate-disclosure/">disclosure</Link> and <Link href="/privacy/">privacy policy</Link>). We
        are not responsible for third-party sites we link to.</p>

      <h2>6. Disclaimer &amp; limitation of liability</h2>
      <p>The Site is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by law, we
        will not be liable for any indirect, incidental, special, or consequential damages, or loss of profits or savings,
        arising from your use of (or reliance on) the Site. Where liability cannot be excluded, it is limited to the maximum
        extent permitted by law.</p>

      <h2>7. Changes &amp; governing law</h2>
      <p>We may modify the Site or these Terms at any time; continued use means you accept the changes. These Terms are
        governed by the laws of the jurisdiction in which the operator is established. <em>(Operator: set your specific
        country/state before relying on this.)</em></p>

      <h2>8. Contact</h2>
      <p>Questions? <strong>hello@returnonreno.com</strong> or the <Link href="/contact/">contact page</Link>.</p>

      <p className="note"><b>Please note:</b> these Terms are a general template, not legal advice. Review and adapt them —
        especially governing law and consumer-protection requirements — for the jurisdictions you operate in and serve.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
