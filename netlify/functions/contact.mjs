// Contact handler: emails the message via Resend to hello@returnonreno.com,
// with reply-to set to the visitor. Posted to from the contact-page form.
//
// Required env var: RESEND_API_KEY. Sending domain must be verified in Resend.

const FROM = "Return on Reno <hello@returnonreno.com>";
const TO = "hello@returnonreno.com";

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const redirect = (path) => new Response(null, { status: 303, headers: { Location: path } });

  let name = "", email = "", message = "", honeypot = "";
  try {
    const form = await req.formData();
    name = String(form.get("name") || "").trim();
    email = String(form.get("email") || "").trim();
    message = String(form.get("message") || "").trim();
    honeypot = String(form.get("company") || "").trim();
  } catch {
    return redirect("/contact/?error=1");
  }

  if (honeypot) return redirect("/contact-success/"); // drop bots
  if (!email || !message) return redirect("/contact/?error=1");

  const KEY = process.env.RESEND_API_KEY;
  if (!KEY) {
    console.error("contact: RESEND_API_KEY not set");
    return redirect("/contact-success/");
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New contact message from ${name || email}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name) || "(not given)"}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      }),
    });
  } catch (e) {
    console.error("contact: Resend error", e);
  }

  return redirect("/contact-success/");
};
