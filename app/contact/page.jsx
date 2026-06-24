import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Return on Reno with questions, corrections, or partnership ideas.",
  alternates: { canonical: "/contact/" },
};

// This form posts to a Netlify serverless function that sends the message via
// Resend to hello@returnonreno.com (reply-to = the visitor). The "company" field
// is a honeypot; the function ignores submissions that fill it.
export default function Contact() {
  return (
    <article>
      <h1 className="title">Contact us</h1>
      <p className="byline">We read every message.</p>

      <p>Found a figure that looks off for your market, have a question about the calculator, or want to talk about a
        partnership? We&apos;d like to hear from you.</p>

      <h2>Email</h2>
      <ul>
        <li>General &amp; feedback: <strong>hello@returnonreno.com</strong></li>
        <li>Privacy requests: <strong>privacy@returnonreno.com</strong></li>
      </ul>

      <h2>Send a message</h2>
      <form
        method="POST"
        action="/.netlify/functions/contact"
        className="note"
        style={{ display: "block" }}
      >
        {/* Honeypot — hidden from people, catches bots */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }} />
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="name">Your name</label>
          <input id="name" type="text" name="name" required
            style={{ width: "100%", padding: "11px 12px", border: "1px solid var(--line)", borderRadius: 10, fontSize: 15 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="email">Your email</label>
          <input id="email" type="email" name="email" required
            style={{ width: "100%", padding: "11px 12px", border: "1px solid var(--line)", borderRadius: 10, fontSize: 15 }} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={5}
            style={{ width: "100%", padding: "11px 12px", border: "1px solid var(--line)", borderRadius: 10, fontSize: 15, fontFamily: "inherit" }} />
        </div>
        <button className="btn btn-primary" type="submit">Send message</button>
      </form>

      <p>You can also read our <Link href="/about/">About page</Link> to learn how we put our figures together.</p>
      <p className="updated">Last reviewed: June 2026 · Return on Reno</p>
    </article>
  );
}
