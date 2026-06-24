# RenoReturn — Deploy & Next Steps

You have a working, self-contained `index.html`. No build step, no dependencies. Open it in any browser to preview it right now.

## Files to deploy (keep them together in one folder)
- `index.html` — the calculator (home page)
- `best-home-improvements-roi.html` — flagship article
- `about.html`, `affiliate-disclosure.html`, `privacy.html`, `contact.html` — trust/legal pages
- `style.css` — shared styling for the article and trust pages
- `favicon.svg`, `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png` — the custom house+return-arrow icon
- `og-image.png` — the 1200×630 social share image

**Before you apply to AdSense / publish:** set up real inboxes for `hello@returnonreno.com` and `privacy@returnonreno.com` (or change those addresses), connect the contact and email-opt-in forms to a provider, and have a quick read of the privacy policy against the actual ad/analytics/email tools you end up using (it's a solid template, not legal advice).

All icon/OG paths in the HTML are root-relative (e.g. `/favicon.svg`, `https://returnonreno.com/og-image.png`), so they resolve correctly once these files sit at the site root on returnonreno.com.

## 1. Get it live in 10 minutes (free)
1. Go to **netlify.com** (or vercel.com) and sign up free.
2. Drag the folder containing all the files above onto the Netlify "deploy" area. You'll get a live URL instantly (e.g. `returnonreno.netlify.app`).
3. In Netlify → Domain settings, add `returnonreno.com` and update the nameservers/records at Namecheap to point to Netlify. DNS can take a few hours to propagate.
4. After it's live, test the share image at **opengraph.xyz** or by pasting your URL into a draft social post.

## 2. What to customize before you promote it
The file has clearly-labelled placeholders. Replace these:
- **Brand name/logo** — search `RenoReturn` and the logo letter `R` in the file; change to your name.
- **`<link rel="canonical">`** and the canonical URL — set to your real domain.
- **Ad slots** — three `<div class="adslot">` blocks. Once approved by AdSense/Ezoic, paste their code in place of these. Keep ads *below* the calculator, never on top of it.
- **Affiliate slot** — the `.affiliate` box. Replace `href="#"` with a real, relevant, *disclosed* affiliate/lead link (contractor-quote service, home-improvement retailer, financing). Keep the `rel="sponsored nofollow"`.
- **Email opt-in** — the `#optin` form is a placeholder. Connect it to MailerLite or Beehiiv (both have free tiers) so you actually capture subscribers, then deliver the "Renovation Budget Worksheet" (a simple spreadsheet you can make next).
- **Trust pages** — the footer links (About, Privacy, Contact, Affiliate disclosure) point to `#`. Create real pages — **AdSense will reject you without them.** About should say who's behind the site and your approach.

## 3. Verify the data is right for your audience
The cost/ROI defaults are US national "Cost vs Value" averages, adjusted by tier/region. They're credible benchmarks but:
- Sanity-check a few against local sources for your main market.
- The methodology section already discloses they're estimates — keep that honesty; it protects trust and AdSense standing.

## 4. First 10 content pages to add (this is what makes it rank)
A single calculator is "thin" and risks an AdSense rejection. Surround it with genuine, helpful content. Each of these is a page targeting a real search:
1. *Which home improvements add the most value? (2026)* — built around your league table.
2. *Minor vs major kitchen remodel: which is worth it?*
3. *Bathroom remodel cost & ROI: what you'll actually get back.*
4. *Do garage/entry door replacements really have the best ROI?*
5. *Renovating to sell vs renovating to stay.*
6. *How much should you spend renovating relative to home value?*
7. *Deck vs patio: cost and return compared.*
8. *Are home additions ever worth it?*
9. *Renovation budgeting: a step-by-step worksheet (links the opt-in).*
10. *Cost vs Value explained: how resale ROI is calculated.*

I can draft any of these with you — AI-drafted, you fact-check and add real perspective (that human layer is what survives Google's 2026 quality bar).

## 5. Launch checklist (week 1)
- [ ] Deploy + custom domain live
- [ ] Brand, canonical, trust pages done
- [ ] Google Search Console + GA4 connected; sitemap submitted; request indexing
- [ ] AdSense application submitted (after 5–8 real content pages exist)
- [ ] Email tool connected to the opt-in
- [ ] 1 affiliate/lead offer placed and disclosed
- [ ] Calculator embeddable version shared with 2–3 relevant sites (backlinks)

## Notes
- Currency FX rates in the file are approximate and hard-coded — fine for planning estimates; update occasionally.
- The calculator already includes FAQ + WebApplication structured data for SEO.
- This is a starting asset, not financial advice; encourage users to get local quotes (the file already does).
