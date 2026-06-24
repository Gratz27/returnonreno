import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "What Return on Reno collects, how cookies and third-party advertising work, and your choices.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <article>
      <h1 className="title">Privacy policy</h1>
      <p className="byline">Last updated June 2026</p>

      <p>This policy explains what information Return on Reno collects on returnonreno.com, how we use it, and your choices.
        Questions? <Link href="/contact/">Contact us</Link>.</p>

      <h2>The short version</h2>
      <ul>
        <li>The calculator runs in your browser. The numbers you type are <strong>not</strong> sent to or stored by us.</li>
        <li>We use analytics and third-party advertising that may use cookies.</li>
        <li>If you join our email list, we use your address only to send what you asked for. Unsubscribe any time.</li>
      </ul>

      <h2>Information we collect</h2>
      <p>If you subscribe or contact us, we collect your email address and any details you include. The calculator performs
        all math locally in your browser — your inputs are not transmitted to or saved by us. Like most sites, we and our
        providers automatically collect standard technical data (approximate location from IP, device/browser type, pages
        viewed, referrer) via cookies and similar technologies.</p>

      <h2>Cookies and advertising</h2>
      <p>We use cookies for analytics and advertising. Third-party vendors, <strong>including Google</strong>, may use cookies
        to serve ads based on your prior visits to this and other sites. You can opt out of personalised advertising via{" "}
        <a href="https://www.google.com/settings/ads" rel="nofollow noopener" target="_blank">Google Ads Settings</a> and{" "}
        <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">aboutads.info/choices</a>{" "}
        (or <a href="https://www.youronlinechoices.eu/" rel="nofollow noopener" target="_blank">youronlinechoices.eu</a> in the
        EU). Most browsers also let you block or delete cookies.</p>

      <h2>Analytics, affiliates &amp; email</h2>
      <p>We use a web analytics service to measure traffic in aggregate. Some outbound links are affiliate links; the
        destination sites set their own cookies under their own policies (see our{" "}
        <Link href="/affiliate-disclosure/">affiliate disclosure</Link>). If you opt in to email, we store your address with
        our email provider only to send what you requested; every email has an unsubscribe link.</p>

      <h2>Your rights &amp; children</h2>
      <p>Depending on where you live (e.g. GDPR or CCPA), you may have rights to access, correct, or delete your data. To make
        a request, <Link href="/contact/">contact us</Link>. The site is intended for adults and we do not knowingly collect
        data from children under 13.</p>

      <h2>Changes &amp; contact</h2>
      <p>We may update this policy and will revise the date above. Questions: <strong>privacy@returnonreno.com</strong>.</p>

      <p className="note"><b>Please note:</b> this policy is a general template for an ad- and affiliate-supported site, not
        legal advice. Before launch, review it against the actual advertising, analytics, and email tools you use, and the
        laws of the markets you serve.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
