# Return on Reno — Setup Guide & Learnings from PetCost
**Prepared for:** Darren · 24 June 2026

This document does two things: (1) captures what PetCost-Calculator.com is doing — so we copy what works and improve what doesn't — and (2) gives you an exact, ordered checklist to stand up returnonreno.com correctly the first time. Your locked-in choices: **Netlify DNS** (delegate from Namecheap), **both** business email and website-form email, **reuse your existing AdSense account**, and **architecture recommendation** (covered in Part C).

---

# PART A — Learnings from PetCost (verified from the live site & DNS)

## What PetCost is doing right (replicate)
- **Hosting + DNS in one place.** The domain's nameservers are delegated to **Netlify DNS** (`dns1–4.p07.nsone.net`). Netlify manages the site records *and* the email records together — fewer places to make a mistake. We'll do the same.
- **Email on Namecheap Private Email.** Incoming mail uses `mx1/mx2.privateemail.com`. Sending is authenticated with a full trio: **SPF** (`v=spf1 include:spf.privateemail.com ~all`), **DKIM** (`default._domainkey`, valid RSA key), and **DMARC** (`v=DMARC1; p=none;`). This is a solid, deliverable email setup.
- **AdSense is live and approved.** `ads.txt` exists and reads `google.com, pub-3275113356221002, DIRECT, f08c47fec0942fa0`. That means **you already have an approved publisher account** — returnonreno can ride on it rather than starting a fresh application.
- **Clean SEO hygiene.** Proper `robots.txt` (allow all, disallow `/api/`, sitemap linked), `sitemap.xml`, canonical tags, `meta robots index,follow`, full Open Graph + Twitter cards, and a dedicated **methodology** page. We've already matched most of this on returnonreno.
- **Real trust & E-E-A-T signals.** About, How It Works, Contact, Privacy, **Terms of Service**, Methodology, an affiliate disclosure in the footer, named testimonials with locations/dates, multi-country pricing, and social profiles (Facebook, Instagram, TikTok, Pinterest).
- **Scale via programmatic pages.** This is the big one. PetCost isn't one calculator — it's **300+ breed pages**, regional/city cost pages (`/costs/us/new-york`, `/costs/uk/london`…), tools, guides, a blog, and an annual report. That page volume is almost certainly the engine behind its rankings.
- **Monetization stack layered correctly.** Display ads (AdSense) + affiliate (pet insurance, disclosed) + a free **PDF lead magnet** ("2026 Pet Cost Data Summary") to capture email + multiple free tools. Several income streams, not one.
- **Built on Next.js** (`/_next/image` confirms it), which is what makes the programmatic page generation and image optimization practical.

## What to improve on (don't just copy)
- **DMARC is `p=none` with no reporting.** That's monitor-only and collects no reports. For returnonreno, start at `p=none` **with a `rua` reporting address**, then tighten to `p=quarantine` after a couple of weeks of clean sending. (Details in Part B.)
- **DKIM key is per-domain — never copy PetCost's.** returnonreno must generate its **own** DKIM key in Namecheap Private Email. Copying PetCost's public key would break, not help, deliverability.
- **Don't launch thin.** PetCost ranks because of scale. returnonreno today is one calculator + one article. Going live is fine, but **the plan must include programmatic expansion** (per-project cost pages, city pages, comparison pages, guides) or it risks "Crawled – currently not indexed" and a slow/declined AdSense review for the new site.
- **Image licensing.** PetCost pulls hero images from Unsplash (free licence). Fine, but for a commercial brand consider owned or properly-licensed images so you're never exposed.

## Mistakes this lets us avoid
1. Splitting DNS between Namecheap and Netlify (a classic source of broken email/SSL). → Use Netlify DNS for everything.
2. Forgetting `ads.txt` (AdSense shows "earnings at risk"). → File created, ready to deploy.
3. Applying for a brand-new AdSense account and waiting/risking rejection. → Add the site to your existing account.
4. Launching a one-page site and wondering why it won't index or monetize. → Expansion plan baked in (Part C).
5. Copying email DNS values blindly (DKIM). → Generate returnonreno's own key.

---

# PART B — Step-by-step setup (in order)

> Do these top to bottom. Where a step needs a value, I've given the exact record. **Bold = type it exactly.** Items marked *(unique)* must come from your own account, not copied from PetCost.

## Step 1 — Deploy the site to Netlify
1. Put all the returnonreno files in one folder: `index.html`, `best-home-improvements-roi.html`, `about.html`, `affiliate-disclosure.html`, `privacy.html`, `contact.html`, `style.css`, `favicon.*`, `apple-touch-icon.png`, `og-image.png`, **`ads.txt`**, **`robots.txt`**, **`sitemap.xml`**.
2. In Netlify → **Add new site → Deploy manually** → drag the folder in. You'll get a `*.netlify.app` URL. Confirm the site loads and the calculator works.
3. (Recommended for scaling later — see Part C — connect a Git repo instead of drag-drop, so deploys are automatic. Fine to start with drag-drop.)

## Step 2 — Add the domain and delegate DNS to Netlify
1. Netlify → your site → **Domain management → Add a domain** → enter **returnonreno.com**.
2. Choose **"Set up Netlify DNS"** (this matches PetCost). Netlify will show **4 nameservers** like `dns1.p0X.nsone.net` … `dns4.p0X.nsone.net`. Copy them.
3. In **Namecheap → Domain List → returnonreno.com → Manage → Nameservers** → choose **Custom DNS** → paste the 4 Netlify nameservers → save.
4. Wait for delegation (often <1 hr, can be up to 24–48 hr). Once active, Netlify auto-creates the apex + www records for the site — **you don't add A records manually.**

> From here on, **all DNS records (site verification + email) are added in Netlify → Domains → returnonreno.com → DNS panel**, not at Namecheap.

## Step 3 — HTTPS, primary domain & redirects
1. Netlify → Domain management → set **returnonreno.com (apex) as the primary domain** (PetCost uses the apex; our canonical tags already point to the apex, so keep them consistent).
2. Ensure **www → apex redirect** is on (Netlify does this automatically when both are listed).
3. Netlify → **HTTPS → Verify / Provision certificate** (Let's Encrypt). Turn on **Force HTTPS** once issued.

## Step 4 — Email INCOMING (Namecheap Private Email)
1. In Namecheap, **purchase Private Email** for returnonreno.com (this is the same product PetCost uses; pick the mailbox tier you need — one mailbox is enough to start).
2. Create the mailbox(es): **hello@returnonreno.com** (and optionally **privacy@returnonreno.com**, which your privacy/contact pages reference).
3. Namecheap will display the required mail records. Because DNS lives at **Netlify**, you add them **in the Netlify DNS panel** (Namecheap's "auto-configure" only works when DNS is at Namecheap). Add these **MX records** (host = `@` / root):

| Type | Host | Value | Priority |
|------|------|-------|----------|
| MX | @ | **mx1.privateemail.com** | 10 |
| MX | @ | **mx2.privateemail.com** | 10 |

4. (Optional but nice — client auto-config, mirrors Private Email defaults): CNAME `mail` → `privateemail.com`, and the Private Email SRV records for `_autodiscover`, `_submission`, `_imaps` if Namecheap lists them. Not required for mail to work.

## Step 5 — Email OUTGOING & deliverability (SPF, DKIM, DMARC)
Add these **TXT records in Netlify DNS**. These authenticate mail sent **from your Private Email mailbox** so it lands in inboxes, not spam — this is "replicate PetCost's outgoing solution."

| Type | Host | Value | Notes |
|------|------|-------|-------|
| TXT | @ | **v=spf1 include:spf.privateemail.com ~all** | Same as PetCost — authorizes Private Email to send. |
| TXT | **default._domainkey** | **v=DKIM1; k=rsa; p=⟨YOUR-OWN-KEY⟩** | *(unique)* Generate in Namecheap Private Email → Mailbox/Domain settings → **DKIM**. **Do not** copy PetCost's key. |
| TXT | **_dmarc** | **v=DMARC1; p=none; rua=mailto:dmarc@returnonreno.com; fo=1** | Start monitoring. After ~2 weeks of clean sends, tighten to `p=quarantine`. (Improvement over PetCost's bare `p=none`.) |

**Important on DKIM:** in Namecheap Private Email, enable DKIM for the domain — it gives you a record with selector `default`. Add it exactly as shown to Netlify DNS. If Private Email shows a different selector, use that selector name as the host (`<selector>._domainkey`).

## Step 6 — Website AUTOMATED email (contact form + opt-in)
You chose **both**, so wire the site's forms to actually send. Two clean options:

**A) Contact form notifications → Netlify Forms (easiest).**
1. On `contact.html`, change the `<form>` to a Netlify form: add `name="contact"` and `data-netlify="true"` (and a hidden `form-name` field). Netlify auto-detects it on deploy.
2. Netlify → Forms → set **notification email** to `hello@returnonreno.com`. Submissions now arrive in your Private Email inbox. (Free tier covers low volume.)
3. *I can make this exact HTML edit for you on request.*

**B) Email opt-in / lead magnet → an email service provider (ESP).**
1. Use **MailerLite** or **Beehiiv** (both have free tiers; this mirrors how PetCost delivers its PDF lead magnet).
2. Create the list + a welcome automation that delivers the **Renovation Budget Worksheet**.
3. Replace the placeholder opt-in form on `index.html` with the ESP's embed/endpoint.
4. **Deliverability tip:** send the lead magnet from `hello@returnonreno.com` and, in the ESP, authenticate the domain (the ESP will give you extra DKIM/CNAME records — add them in Netlify DNS too). This keeps automated mail aligned with your SPF/DKIM/DMARC.

## Step 7 — AdSense (reuse your existing account)
1. **`ads.txt` is ready** with your existing publisher line — it deploys at the site root automatically. Verify it loads at `https://returnonreno.com/ads.txt` after deploy.
2. In **AdSense → Sites → Add site → returnonreno.com.** Because the account is already approved, this is a site-level review, not a new-account review — but Google still wants real content, so do Step 8 and add a few more pages first (Part C).
3. Add the AdSense script to each page's `<head>` (or use Auto ads). On `index.html` the three `<div class="adslot">` placeholders are where manual units go — keep ads **below** the calculator.
4. After approval, confirm AdSense shows **ads.txt: Authorized**.

## Step 8 — SEO hygiene (replicate PetCost)
1. **`robots.txt` and `sitemap.xml` are ready** — they deploy at the root. Confirm both load.
2. **Google Search Console:** add **returnonreno.com** as a *Domain property* (verify with a TXT record in Netlify DNS — quick, since DNS is at Netlify). Submit `sitemap.xml`. Request indexing for the homepage and the article.
3. **Google Analytics 4:** create a property, add the GA4 tag to each page `<head>`.
4. **Bing Webmaster Tools** (optional, easy win): add + submit sitemap.
5. Keep the sitemap updated as you add pages (a framework will automate this — Part C).

## Step 9 — Final verification checklist
- [ ] Site loads on `https://returnonreno.com` with valid SSL; www redirects to apex
- [ ] `ads.txt`, `robots.txt`, `sitemap.xml` all load at the root
- [ ] Favicon shows in the browser tab; OG image previews correctly (test at **opengraph.xyz**)
- [ ] Send a test email **to** hello@returnonreno.com (incoming works)
- [ ] Send a test email **from** hello@returnonreno.com to a Gmail/Outlook address; check it's not in spam
- [ ] Run the sending address through **mail-tester.com** — aim for 9–10/10 (confirms SPF/DKIM/DMARC)
- [ ] Contact form submission arrives in your inbox; opt-in adds a subscriber and delivers the worksheet
- [ ] GSC property verified, sitemap submitted; GA4 recording traffic
- [ ] AdSense site added; ads.txt authorized

---

# PART C — Architecture recommendation (you asked me to advise)

**Recommendation: adopt PetCost's stack — Next.js on Netlify — and port the current static MVP into it before you scale past ~10 pages.**

Why:
- **PetCost proves the model.** Its rankings come from hundreds of programmatically generated pages (breeds, cities, comparisons). returnonreno's durable traffic will come the same way: per-project cost pages ("kitchen remodel cost"), **city/region pages** ("renovation costs in [city]"), **"X vs Y"** comparisons, and guides. You cannot hand-maintain hundreds of static HTML files without errors.
- **Maximum learning transfer.** Same stack means you can reuse PetCost's patterns — page templates, data-driven generation, sitemap automation, image optimization, deploy config — instead of inventing them again. That's the single biggest accelerator available to you.
- **Netlify-native.** Next.js deploys cleanly on Netlify (PetCost already does), so the hosting/DNS/email work in this guide carries over unchanged.

Pragmatic path so you don't lose momentum:
1. **Launch now** on the static MVP (this guide gets you live, indexed, and email-ready today).
2. **In parallel, scaffold a Next.js app** that reuses the current design (the calculator becomes a React component; the article and trust pages become content pages). The calculator logic ports over directly.
3. **Build the page-generation engine**: a data file of projects × regions → generated cost pages, comparison pages, and an auto-sitemap. This is where AI speeds you up enormously.
4. **Cut over** the domain to the Next.js deploy once it has more pages than the static site, then keep adding programmatic pages.

> Alternative: **Astro** is simpler than Next.js and excellent for content/SEO, embedding the calculator as an "island." It's a great fit *technically*. I still recommend **Next.js** here purely because it matches PetCost — reusing your own proven setup beats a marginally simpler tool you'd have to learn from scratch. If you'd rather optimize for simplicity over learning-transfer, say so and I'll plan the Astro route.

---

# PART D — Files created for you (deploy these now)
- **`ads.txt`** — your existing AdSense publisher line, ready for the root.
- **`robots.txt`** — allow all, disallow `/api/`, sitemap linked (mirrors PetCost).
- **`sitemap.xml`** — lists all six current pages.

### A couple of gaps to close (PetCost has them, we don't yet)
- **Terms of Service page** — PetCost has `/terms`; we should add one (good for AdSense + liability). I can draft it.
- **Worksheet lead magnet** — needed before the opt-in does anything. I can build the Renovation Budget Worksheet next.
- **More content pages** — for the AdSense site review and rankings (Part C). I can draft the next 3–4 articles.

*Note: the DNS values for site records are auto-managed by Netlify; the email values above are exact except DKIM, which must be your own. This guide reflects PetCost's live configuration as of 24 June 2026; if Namecheap's Private Email setup screen shows slightly different hostnames, follow what it shows and keep the structure above.*
