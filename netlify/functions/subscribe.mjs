// Opt-in handler: adds the subscriber to a Resend audience and emails the
// Renovation Budget Worksheet. Posted to from the home-page opt-in form.
//
// Required env vars (Netlify → Site settings → Environment variables):
//   RESEND_API_KEY      – your Resend API key
//   RESEND_AUDIENCE_ID  – (optional) Resend audience to add contacts to
// The sending domain (returnonreno.com) must be verified in Resend first.

const FROM = "Return on Reno <hello@returnonreno.com>";
const WORKSHEET_URL = "https://returnonreno.com/renovation-budget-worksheet.xlsx";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const redirect = (path) => new Response(null, { status: 303, headers: { Location: path } });

  let email = "";
  let honeypot = "";
  try {
    const form = await req.formData();
    email = String(form.get("email") || "").trim().toLowerCase();
    honeypot = String(form.get("company") || "").trim();
  } catch {
    return redirect("/?subscribe=error#optin");
  }

  if (honeypot) return redirect("/subscribed/"); // silently drop bots
  if (!EMAIL_RE.test(email)) return redirect("/?subscribe=invalid#optin");

  const KEY = process.env.RESEND_API_KEY;
  const AUDIENCE = process.env.RESEND_AUDIENCE_ID;
  if (!KEY) {
    console.error("subscribe: RESEND_API_KEY not set");
    return redirect("/subscribed/");
  }
  const headers = { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" };

  try {
    if (AUDIENCE) {
      await fetch(`https://api.resend.com/audiences/${AUDIENCE}/contacts`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, unsubscribed: false }),
      });
    }
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: FROM,
        to: [email],
        subject: "Your free Renovation Budget Worksheet",
        html: `
          <p>Thanks for signing up!</p>
          <p>Here's your <strong>Renovation Budget Worksheet</strong> — use it to plan costs, compare contractor quotes, and track how much you'll get back at resale:</p>
          <p><a href="${WORKSHEET_URL}" style="display:inline-block;background:#0f8a6a;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:bold">Download the worksheet (.xlsx)</a></p>
          <p>Or copy this link: <a href="${WORKSHEET_URL}">${WORKSHEET_URL}</a></p>
          <p>Happy planning,<br>The Return on Reno team</p>
          <hr>
          <p style="font-size:12px;color:#777">You're receiving this because you requested the worksheet at returnonreno.com.</p>`,
      }),
    });
  } catch (e) {
    console.error("subscribe: Resend error", e);
  }

  return redirect("/subscribed/");
};
