import Link from "next/link";

export const metadata = {
  title: "Message sent",
  description: "Thanks — your message has been received.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/contact-success/" },
};

export default function ContactSuccess() {
  return (
    <article>
      <h1 className="title">✓ Thanks — your message is on its way</h1>
      <p>We&apos;ve received your message and will get back to you within a few business days at the email you provided.</p>
      <p>
        In the meantime, why not <Link href="/">run your numbers in the calculator</Link> or read{" "}
        <Link href="/guides/best-home-improvements-roi/">which home improvements add the most value</Link>?
      </p>
      <p style={{ marginTop: 24 }}>
        <Link className="btn btn-primary" href="/">← Back to the calculator</Link>
      </p>
    </article>
  );
}
