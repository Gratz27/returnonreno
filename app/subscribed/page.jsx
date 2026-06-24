import Link from "next/link";

export const metadata = {
  title: "You're subscribed",
  description: "Thanks — your Renovation Budget Worksheet is on its way.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/subscribed/" },
};

export default function Subscribed() {
  return (
    <article>
      <h1 className="title">✓ Check your inbox</h1>
      <p>Thanks for signing up! We&apos;ve emailed your <strong>Renovation Budget Worksheet</strong> to the address you
        provided. If it doesn&apos;t arrive in a few minutes, check your spam folder.</p>
      <p>
        You can also <a href="/renovation-budget-worksheet.xlsx">download the worksheet directly</a> in the meantime.
      </p>
      <p style={{ marginTop: 24 }}>
        <Link className="btn btn-primary" href="/">← Back to the calculator</Link>
      </p>
    </article>
  );
}
