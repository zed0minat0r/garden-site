# Colonial Gardens — Nigel Audit v18
**Score: 8.9 / 10**
**Previous score: 8.7 (v17)**
**Delta: +0.2**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

All three top priorities from v17 have been addressed, and the fixes are genuine rather than cosmetic. The Events CTA colour inconsistency is resolved. The mobile swipe affordance is present. The dead CSS from prior card implementations has been stripped. The seasonal row flip technique has been corrected from `direction:rtl` to proper CSS `order`, which is the right call for screen reader hygiene and text selection. The trust bar prose now leads with the strongest local identity claim. The service panel content position has been moved up.

These are not trivial changes — they close real gaps. The site is materially tighter than v17.

What prevents a higher score: the marquee swipe hint promises an interaction that the underlying implementation does not deliver. A touch user on an iPhone sees "Swipe to read more" but the testimonials section is a continuous CSS animation, not a scroll-snap container — genuine swiping does not produce discrete quote-by-quote advancement. The dishonesty of that label is the most actionable remaining issue. Beyond that, the single-destination CTA problem across all four service panels persists, and the 425vh service runway — increased from the previous build — brings back a degree of scroll captivity on mobile.

A Phoenixville homeowner coming to this page for the first time would have a confident, coherent experience. They would not feel like they had landed on a template. The site earns its place at the high end of local business websites.

---

## Section Scores

### Hero — 8.5/10
No regression from v17. Ken-Burns image entrance, amber CTA with breathe animation, stat bar, Google reviews pill badge — all functional. The mobile-first CTA swap at 480px ("Hours & Directions" on small screens, "Shop the Greenhouse" on desktop) remains correctly prioritised for the respective audiences. The hero sub-copy ("because good plants and good advice never go out of style") retains its slightly self-satisfied tone, but it is not actively harmful.

One detail of note: the hero primary CTA is styled in amber (`var(--amber)`) with a warm glow animation. The services panels then use both amber and green glow CTAs. The Contact form submit is also amber. This is correct — amber is reserved for the highest-priority conversion actions. The pattern holds.

### Open Bar — 8.5/10
Unchanged from v17. Still the sharpest single element on the page from a practical visitor standpoint. Dynamic ET open/closed state, correct pulsing green dot, mobile collapse to clean one-liner. No regression.

### Trust Bar — 8.2/10
Improved from 8.0 in v17. "Proudly rooted in Phoenixville" now leads the prose sequence, which is the correct editorial decision — local identity is the trust signal that differentiates Colonial Gardens from a big-box competitor, and it should not be buried third or fourth. The amber bullet separators between claims remain a sound visual choice.

The remaining sequence issue: "Expert staff. Honest advice." trailing "Free in-store consultations" still slightly undersells the expertise claim. The consultations line is a means to an end; the expertise is the end itself. Reversing those two would strengthen the close. Minor — not a point deduction.

### Greenhouse Bridge — 7.5/10
No change from v17. Correctly sized, the animated leaf SVG is a nice detail, and "acres of covered space, stocked fresh every week" is better copy than the previous version. "Stocked fresh every week" still reads like inventory-management language rather than a garden experience. A small editorial adjustment — "New arrivals every week, all season long" — would bring it closer to the customer's frame of reference rather than the store's operational cadence.

### Services — Sticky Scroll Panels — 7.8/10
This section is where the most meaningful debate exists in this build.

The Events panel overlay has been corrected (now `--teal` at genuinely low opacity: 8%/24%/50%/68%) so the panel no longer feels suffocating. The Events CTA is now `btn--glow-green` — the palette inconsistency from v17 is resolved. Progress dots sit at `bottom: 44px`, correctly clearing iOS chrome.

The service panel content has been pushed up (`padding-bottom: 140px` on `.svc-panel__content`). This is visible as a material improvement — text and CTAs are no longer crowded against the bottom viewport edge, which felt accidental rather than designed.

However, the runway has increased from the previous build to 425vh. The changelog explains this as giving the Events panel approximately 165vh of linger versus 87vh for the others. The rationale is understandable, but the effect on a mobile visitor is a return of scroll captivity. A homeowner on an iPhone with a 667px viewport scrolling through the services section will spend meaningful time before clearing it. The Events panel's extra dwell time is only valuable if the visitor is interested in events — for the majority who are there for plants or landscaping, 425vh is a tunnel. The prior build's 300vh felt closer to correct.

All four CTAs still route to the same root URL (`colonialgardenspa.com`). "Get a Consultation," "Order Flowers," "See Upcoming Events," and "Shop the Greenhouse" each imply a differentiated destination. A homeowner who clicks "Order Flowers" and lands on the generic homepage will feel a small but real betrayal of expectation. This remains the most consequential UX error on the page.

Score: 7.8 (down from 8.0 in v17, due to runway regression).

### About / Legacy — 8.5/10
No change from v17. The Est. 1967 badge, Eric Schmidt monogram card, Playfair blockquote, parallax image, and the faint "1967" watermark are all intact and well-executed. The four pillars — "Family-owned & operated / Open year-round / Rooted in Phoenixville / Expert staff, honest advice" — remain the correct claims. Parallax is properly RAF-throttled. No regression.

### Seasonal — 8.3/10
Improved from 8.0 in v17. The `direction:rtl` flip technique has been replaced with CSS `order` on the image and body cells — the correct implementation for screen reader compatibility and text selection. This was Priority 3 (implied) in the v17 technical notes, and the fix is clean.

The alternating layout itself remains the right format. Three rows — annuals/perennials, vegetables/herbs, trees/shrubs — progress logically through a spring visit to Colonial Gardens. The amber pill labels ("Spring 2026," "Now Available," "Spring Planting") are slightly inconsistent but not disorienting.

Row 2 image (Unsplash `photo-1416879595882-3373a0480b5b`) shows a generic stone-pathway garden rather than anything resembling vegetable or herb content. This is a content mismatch — the label says "Vegetables & Herbs" and the image shows decorative stone work. It does not break the layout, but a visitor scanning for context will notice the disconnect. Without real Colonial Gardens photography this cannot be fully resolved, but a more appropriate stock image (herb close-up, kitchen garden) would be a low-cost improvement.

Hover-zoom on image wrap (`.seasonal-row:hover .seasonal-row__img-wrap img { transform: scale(1.04) }`) is correct and proportionate.

### What to Plant Now — 8.5/10
No change from v17. Still the best editorial section on the page. The numbered list (01–04, hairline rules, 52px serif numerals in green-pale) is typographically confident and locally specific. The plant descriptions reference April conditions, Chester County soil, and specific varieties. This is exactly the kind of content that makes a local garden center's website worth bookmarking. No regression.

### CTA Strip — 7.5/10
Unchanged from v17. The dark green band with amber glowing phone CTA functions correctly. "58 years of helping Phoenixville grow" is local and credible. The botanical radial-gradient blob decorations are present but not intrusive. The section is structurally sound but not distinctive. It reads as the expected "call us" band that most local business sites include. A short supporting testimonial fragment or a specific seasonal hook would add content weight.

### Testimonials — 8.2/10
Partially improved from 8.0 in v17.

The mobile swipe hint (`testimonials__swipe-hint`) has been added and displays correctly at max-width: 600px. The copy reads "Swipe to read more →" which is appropriate. This addresses Priority 1 from v17.

However, the underlying implementation does not actually support discrete swiping. The marquee is a CSS `@keyframes` animation (`testimonials-marquee 55s linear infinite`) on a `width: max-content` track. A touch user can attempt to grab and drag it — the `cursor: grab` and `cursor: grabbing` styles suggest this intent — but the marquee does not have `scroll-snap` support, and native touch dragging of a CSS-animated element produces unpredictable results on iOS Safari. The swipe hint makes a promise the implementation does not keep.

The solution recommended in the v17 Scout Report remains unimplemented: a `scroll-snap-type: x mandatory` container on mobile that converts the continuous marquee into a discrete swipe-through-quotes experience on touch. The text hint is half the fix; the scroll-snap implementation is the other half.

The rating badge (4.8 / 340 Google reviews) pill above the section is well-placed and credible. Quote content remains strong and locally specific. Edge fading via `mask-image` continues to perform correctly on desktop.

### Contact — 8.5/10
No change from v17. The three-column layout (info / form / map) is correct. The Formspree integration is clean. The dynamic ET open/closed badge correctly mirrors the open bar state. The full-width "Get Directions" button is sensible and present. No regression.

The 768px collapse breakpoint creates mild cramping between 769px and 900px on iPad landscape. Not addressed, not worsened.

### Footer — 8.0/10
No change from v17. Three-column: brand/tagline, nav links, hours/address. Amber gradient top accent bar, social links (Facebook, Instagram), copyright 2026. All functioning. No issues.

### Mobile UX at 375px — 8.0/10
Holding from v17. The center-alignment block in the mobile CSS remains thorough and consistent — every section head, eyebrow, and CTA has an explicit alignment rule at 768px. The seasonal row collapse to single column at 900px is clean. The open bar nowrap/ellipsis handles 375px correctly.

Service panel mobile responsiveness has improved with the content padding adjustment (`padding: 0 20px 120px` at 768px). The progress dots correctly clear iOS safe area.

The 425vh runway on the services section is the most significant mobile UX penalty remaining. On a 375px wide iPhone SE viewport, 425vh of scroll is approximately 2,654px of scroll distance for a single section. This is by design but remains the largest single friction point for a mobile visitor.

---

## AI-Generated Assessment

**Does it look AI-generated?** No more than v17, and arguably slightly less.

**What continues to signal human editorial authorship:**
- Trust bar in flowing prose (not icon cards)
- Plant list in numbered editorial typographic format
- Sticky service panels with full-bleed photography
- Legacy section with monogram, blockquote, and background watermark
- Seasonal split-screen rows with CSS order flip (not rtl hack)
- Testimonials auto-scroll marquee with edge fade
- Locally specific copy throughout (Eric Schmidt, Chester County soil, Phoenixville frost dates)

**What still reads slightly generic:**
- CTA strip (dark band + glowing phone button is an established convention)
- Greenhouse bridge (capable but thin)
- Hero sub-copy structure and rhythm

No section actively embarrasses the others. The page reads as designed, not assembled.

---

## Top 3 Priorities

### 1. Implement genuine swipe-snap behavior in the testimonials section on mobile
The swipe hint ("Swipe to read more →") is present but makes a promise the CSS animation cannot keep. A touch user swiping the testimonials section on iPhone will not get discrete quote-by-quote advancement — they will get unpredictable drag behavior on a CSS-animated track. The fix is to convert the mobile testimonials layout to a `scroll-snap-type: x mandatory` container where each quote occupies 100% viewport width and snaps discretely on swipe. The continuous marquee can remain on desktop. This is a material honesty issue as much as a UX issue — the affordance exists but the behavior does not match.

### 2. Route each service panel CTA to its correct destination
"Shop the Greenhouse," "Get a Consultation," "Order Flowers," and "See Upcoming Events" all link to `colonialgardenspa.com`. A homeowner who clicks "Order Flowers" and lands on a generic homepage is not poorly served — but they are slightly let down. Each CTA should link to the most appropriate page on the Colonial Gardens main site (florist section, contact/landscaping, events calendar). This is not a design task — it is an editorial update that requires identifying the correct destination URLs. The impact on conversion is real and immediate.

### 3. Revisit the 425vh service scroll runway
The current build gives the Events panel approximately 165vh of dwell time. The rationale is sound — events deserve presence. The cost is scroll distance. On mobile, a visitor clears 425vh before reaching the Legacy section. A visitor interested specifically in the florist or garden center will spend disproportionate time in the events panel they did not seek. A 350–375vh total runway (keeping the Events panel's proportional advantage over the first three but reducing absolute scroll distance) would retain the editorial intention while reducing mobile captivity. The specific ratio — 260vh for the first three panels, 90–115vh for Events — would be the adjustment point.

---

*Audit by Nigel. Scored strictly from the perspective of a Phoenixville, PA homeowner.*
