# Design Audit & Visual Direction — Return on Reno

**Brief:** the tool is genuinely useful but looks static, utilitarian and information-dense — especially on mobile. Make it inviting, visually engaging, and easy to absorb on a phone, without losing the trust/credibility the data gives it.

**Audit date:** 26 June 2026

---

## 1. Verdict (the honest read)
The site *works* and is trustworthy, but it presents like a spreadsheet wearing a light-grey suit. One flat accent colour, system fonts, white card after white card, and — the real culprit — **giant data tables dumped at full length on every page** (a 24-row league table and, on project pages, a 22-row regional table). On desktop it's tolerable; on mobile it's a wall of numbers you scroll past rather than play with. Nothing moves, nothing delights, nothing pulls the eye to the one number that matters. The product is interactive; the *experience* feels static.

The good news: the bones are strong (clean structure, a nice teal result panel, fast static pages, solid trust pages). This is a re-skin and an information-architecture edit, not a rebuild.

## 2. Core diagnosis (why it feels "boring")
1. **No focal point.** Every block has equal visual weight — hero text, form, result, tables all compete. The eye has nowhere to land.
2. **Data as tables, not pictures.** ROI is inherently visual (it's a ranking, a percentage, a gain/loss). Showing it as a 24-row table is the least engaging possible format. Bars and gauges would make it instantly scannable *and* delightful.
3. **One-note visual system.** Single teal, one font, uniform spacing → monotony. No warmth, no energy, no hierarchy of type.
4. **Mobile = everything, stacked.** No progressive disclosure. The phone gets the full desktop payload: every table row, every paragraph. It's exhausting.
5. **Inputs feel like a form, not a toy.** A dropdown of 24 projects and a currency `<select>` are functional but joyless. The calculator should feel like something you *play with*.
6. **No motion or feedback.** Numbers snap into place with zero animation; there's no reward for interacting.

## 3. Design direction (the vision)
Four principles to pull everything toward:

- **One hero number, beautifully staged.** Every screen should have a single obvious focal point — usually the ROI / result — staged with scale, colour and a little motion.
- **Show the data, don't tabulate it.** Replace dense tables with horizontal ROI bars, a recoup gauge, and a cost-vs-value split bar. Tables become charts.
- **Warm + confident, not clinical.** Keep teal as the brand anchor but add a warm secondary (amber/terracotta — it reads "home" and gives energy/contrast), a richer neutral range, and a characterful headline typeface. Premium-editorial, not fintech-cold.
- **Mobile-first progressive disclosure.** Show the essentials; let people expand for depth. Top 6 projects with "show all 24". A city selector instead of a 22-row dump. Calculator first, explanation later.

## 4. The redesign, area by area

### Brand system (global)
- **Colour:** Primary teal `#0F8A6A` (keep — brand equity). Add a warm secondary for CTAs/accents (e.g. amber `#E8A13A` / terracotta `#D9663B`). Introduce a semantic **ROI scale** (red→amber→green) used consistently on every bar/gauge. Warm off-white background (`#FBFAF7`) instead of cold grey; deeper ink for text.
- **Type:** Pair a warm, high-personality display face for headlines (e.g. **Fraunces** — editorial, trustworthy, a bit characterful) with a clean body sans (**Inter**). Bigger type-scale contrast: huge hero numbers, confident headings, calm body. (All-sans alternative: **Bricolage Grotesque** / **General Sans** for a more modern feel.)
- **Depth & shape:** Softer, larger radii; one elevation system; subtle gradients on the result; a faint background texture or the house-arrow mark used as a watermark. Rounded, friendly, not boxy.
- **Iconography:** A small line-icon per project (kitchen, door, deck, pool…) so the picker and pages have visual identity instead of plain text.

### Hero
- Cut the words. Shorter, punchier headline; one supporting line. Lead with the *promise* and put the calculator (or a teaser of the result) immediately in view — on mobile the tool should be reachable without scrolling past a paragraph.
- Add a light visual: a hero illustration extending the house-arrow logo, or an animated "value rising" motif. Background warmth + a subtle shape, not a flat block.

### Calculator input (the "toy")
- Replace the project `<select>` with a **visual picker**: a scrollable row/grid of icon chips (or a search-as-you-type field) — tapping a project feels like choosing, not filling a form.
- Keep tier as a segmented control but make it tactile (icons/labels, animated thumb).
- Currency/region: a compact pill or flag selector rather than a long dropdown label.
- Scope slider: add live value bubbles and a track that fills with colour.

### Result module (make this the star)
- Hero **cost number** with a count-up animation.
- A **cost-vs-recoup split bar**: one bar showing how much you get back vs the net cost — instantly tells the story the three little stat boxes currently whisper.
- A **recoup gauge / ROI dial** that fills to the % with the semantic colour (red→amber→green), animated.
- Verdict as a bold coloured pill, not a sentence buried under the numbers.
- "Net cost / net gain" explained inline with the visual, so nobody reads it as "a loss."

### ROI ranking (was: 24-row league table)
- Render as **horizontal ROI bars**, sorted, colour-coded by the semantic scale — scannable in one glance and genuinely satisfying.
- Show **top 6** by default with a "Show all 24" expander. Optional filter (interior/exterior, high/low ROI).
- The user's current project highlighted in the ranking.

### Project pages
- A proper **page hero** per project (project icon, the one-line verdict, the headline cost+ROI as a visual, not a 5-row table).
- Regional data: replace the 22-row table with a **"see costs in your city" selector** (+ a handful of highlighted markets and a "show all" expander). Consider a simple map or country-grouped chips.
- Tighten the body: lead with the visual answer, push methodology/long text below or into expanders.

### Motion & micro-interactions
- Count-up numbers, animated bar/gauge fills on every result change, smooth tier-toggle thumb, tap/hover feedback, gentle scroll-reveal on sections. Subtle, fast, never gratuitous. This is what converts "static" into "alive."

### Mobile-specific
- Progressive disclosure everywhere (top-N + expanders; methodology and "what's included" collapsed by default).
- A **sticky mini-result / CTA bar** so the key number and "get the worksheet" stay reachable while scrolling.
- Bigger touch targets, tighter vertical rhythm, charts that reflow instead of tables that overflow.

## 5. Prioritised plan
**Phase 1 — Quick wins (biggest visual lift, ~1–2 sessions)**
- New colour + type system + spacing/rhythm (global CSS) and warm background.
- Convert the league table → horizontal ROI bars with top-6 + "show all".
- Result module redesign: split bar + recoup gauge + count-up + verdict pill.
- Mobile collapses (expanders) for the regional table, methodology, "what's included".

**Phase 2 — Engagement layer**
- Visual project picker (icon chips) + per-project icon set.
- Motion pass (count-ups, bar fills, transitions, scroll reveal).
- Sticky mobile result/CTA bar.

**Phase 3 — Identity & depth**
- Hero illustration / brand motif; richer project-page heroes.
- City selector / map for regional data; optional per-project hero imagery.

## 6. What success looks like
- On a phone, the **result is the first thing you see and understand** — no scrolling through tables to find the point.
- Time-on-tool and interactions per visit rise (people *play*); bounce on mobile drops.
- It still reads credible and data-backed — we add delight, not gloss over the numbers.
- Pages stay fast (lean SVG/CSS, no heavy image libraries) and accessible (contrast, focus states, reduced-motion support).

---
*Scope note: this is the audit + direction. Implementation can proceed in the phases above; Phase 1 alone transforms the feel.*
