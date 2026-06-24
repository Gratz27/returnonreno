# Email setup — Resend (matches PetCost)

The opt-in and contact forms post to Netlify serverless functions that send email via **Resend** (which delivers through Amazon SES), exactly like petcost-calculator.com.

- `netlify/functions/subscribe.mjs` — adds the subscriber to a Resend audience and emails the Renovation Budget Worksheet, then redirects to `/subscribed/`.
- `netlify/functions/contact.mjs` — emails the contact message to `hello@returnonreno.com` (reply-to = the visitor), then redirects to `/contact-success/`.

## 1. Verify returnonreno.com in Resend
In the Resend dashboard → **Domains → Add Domain → returnonreno.com**. Resend will show records to add. Add them in **Netlify DNS** (since DNS is delegated to Netlify). They mirror PetCost's setup:

| Type | Host/Name | Value | Notes |
|------|-----------|-------|-------|
| TXT | `resend._domainkey` | `p=…` (long key) | **Unique to your domain — copy it from Resend, do NOT reuse PetCost's.** |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | SPF for the SES send subdomain |
| MX  | `send` | `feedback-smtp.us-east-1.amazonses.com` (priority 10) | Bounce/feedback path |

These live on the `send.returnonreno.com` subdomain and the `resend._domainkey` selector — they do **not** conflict with your root Namecheap Private Email records (different host/selector). Your existing root DMARC (`_dmarc`, `p=none`) already covers Resend.

Wait for Resend to show the domain as **Verified** before expecting delivery.

## 2. Set environment variables in Netlify
Site settings → **Environment variables**:

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | yes | Your Resend API key (server-side only — never commit it) |
| `RESEND_AUDIENCE_ID` | optional | Resend audience to add opt-in subscribers to. Omit to just email the worksheet. |
| `NEXT_PUBLIC_GA_ID` | optional | GA4 measurement ID (e.g. `G-XXXXXXXXXX`) |

Redeploy after setting them.

## 3. How it flows
1. Visitor submits the home-page opt-in → `POST /.netlify/functions/subscribe` → Resend adds contact + emails worksheet → redirect to `/subscribed/`.
2. Visitor submits the contact form → `POST /.netlify/functions/contact` → Resend emails you → redirect to `/contact-success/`.
3. Both forms include a hidden `company` honeypot; the functions silently drop submissions that fill it.

## 4. Test after deploy
- Submit the opt-in with your own email → you should receive the worksheet email and land on `/subscribed/`.
- Submit the contact form → the message should arrive at `hello@returnonreno.com`.
- If nothing arrives: check the function logs in Netlify → Functions, confirm `RESEND_API_KEY` is set, and that the domain shows **Verified** in Resend.
