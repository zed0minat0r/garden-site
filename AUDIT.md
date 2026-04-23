# Colonial Gardens — Nigel Audit v17
**Score: 8.7 / 10**
**Previous score: 8.4 (v16)**
**Delta: +0.3**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

The three major rebuilds since v16 have all landed. The seasonal card grid is gone, replaced with alternating split-screen editorial rows that are a material improvement in confidence and distinctiveness. The testimonial card grid is gone, replaced with a horizontal auto-scrolling marquee that gives the quotes breathing room and personality. Services scroll travel has been cut from 400vh to 300vh, which removes the most significant UX friction on mobile. The Events panel overlay has been lightened. The dead JS from prior iterations has been cleared.

The result is a site with no section that visibly embarrasses the others. Cohesion is meaningfully improved. A Phoenixville homeowner scrolling this page for the first time would not stop and think "this looks like a template" at any single section. That said, a handful of execution issues across the new sections and some lingering dead CSS prevent a higher score.

---

## Section Scores

### Hero — 8.5/10
Unchanged from v16. Strong. The Ken-Burns image, amber CTA glow with breathe animation, stat bar (58 / 40+ / 340+), and the Google reviews pill badge all function correctly. The ghost call button is a sensible secondary action on mobile. The hero sub-copy is still slightly self-congratulatory ("because good plants and good advice never go out of style") and the em-dash at line breaks on mid-range screens is still awkward, but neither is a significant drag.

The eyebrow flanking lines, the floating scroll indicator, and the vignette overlay depth are all working well. No regression from v16.

### Open Bar — 8.5/10
Dynamic open/closed state, correct ET timezone logic, pulsing green dot on open, red static dot on closed. The amber call link and the spring seasonal message are appropriate. Mobile collapses cleanly at 480px. Progress dots fix (now `bottom: 44px`) resolves the iOS chrome collision. Fully functional and well-executed.

### Trust Bar — 8.0/10
The four prose sentences in Playfair italic on the green-wash background remain cleaner than any card grid. The amber bullet separator is a correct flourish. Copy reads: "Family owned since 1967. Free in-store consultations. Expert staff. Honest advice. Proudly rooted in Phoenixville." This is tighter than v16 — the weak "Open 7 days a week" has been excised. The four claims now earn their place.

Minor: the sentence sequence still places the weakest claim second ("Free in-store consultations" is vague and sounds like something every local business offers). "Proudly rooted in Phoenixville" leading, with consultations trailing, would be more compelling.

### Greenhouse Bridge — 7.5/10
Improved. "Growing houses" jargon is gone — now reads "acres of covered space, stocked fresh every week." The animated leaf SVG drawing in on scroll is still subtle at quick-scroll speeds but the section as a whole earns its place as a typographic breath between trust bar and services. The leaf vein reveal at 0.9s delay is invisible to most users but does not cost anything either.

Minor improvement from v16 — deduction remains only for the copy being slightly mechanical ("stocked fresh every week" reads like inventory management language, not a garden experience).

### Services — Sticky Scroll Panels — 8.0/10
The 300vh reduction is the single biggest quality-of-life change in this build. Each panel now commands 75vh of scroll budget rather than 100vh — a visitor on mobile will not feel held hostage to the scroll tunnel. The JS panel-switching logic remains clean, rAF-throttled, no redundant DOM writes.

The Events panel teal overlay (`rgba(6,18,20,.08/0.24/0.50/0.68)`) is a substantial improvement over the previous 82% opacity. The photo is now visible and the panel feels open rather than oppressive.

Remaining issues:
1. All four panel CTAs still link to the same root URL (`colonialgardenspa.com`). The CTA text — "Shop the Greenhouse," "Get a Consultation," "Order Flowers," "See Upcoming Events" — implies differentiated destinations. This is a real friction point for a homeowner specifically hunting for the florist or landscaping service. At minimum, deep-linking to relevant sections of the parent site would reduce cognitive dissonance.
2. The progress dots at `bottom: 44px` clear iOS chrome correctly. No further issue here.
3. The teal glow button on the Events panel (`btn--glow-teal`, `background: #2a7d82`) does not match the botanical palette — it is the only button on the page that uses a colour outside the green/amber scheme. It reads as inconsistent.

### About / Legacy — 8.5/10
No visible change from v16. The two-column layout, Est. 1967 badge, Eric Schmidt monogram card, Playfair blockquote, and the faint "1967" watermark in the background all remain. The "sustainability-focused" pillar mentioned in v16 has been removed — the four pillars now read correctly: "Family-owned & operated / Open year-round / Rooted in Phoenixville / Expert staff, honest advice."

The parallax on the legacy image is smooth and properly RAF-throttled. No regression.

### Seasonal — 8.0/10
Rebuilt since v16. The three-card grid is gone. In its place: three alternating split-screen editorial rows (image left / text right, then text left / image right, then image left / text right). Each row is 400px tall minimum with hover zoom on the image. A single section-level CTA replaces the three identical per-card buttons.

This is a genuine improvement. The format is distinct, spatially confident, and does not read as AI-generated template. The amber pill labels ("Spring 2026," "Now Available," "Spring Planting") remain inconsistent in format — two are seasonal descriptors and one is a status label — but this is a minor editorial inconsistency rather than a structural problem.

The `direction: rtl` flip technique on `.seasonal-row--flip` is a workable implementation but text selection and RTL-sensitive screen readers will have a poor experience. A CSS `order` or `grid-column` approach would be more robust.

The row 2 image (Unsplash herb garden) still does not look like Colonial Gardens property. This is a content issue the site cannot solve without real photography, but it is worth noting.

### What to Plant Now — 8.5/10
No change from v16. Still the best section on the page. The numbered editorial list (01–04 with hairline rules, serif numerals in green-pale at 52px) is typographically confident, content-led, and appropriate to the audience. The plant descriptions are locally specific. The tag pill / serif heading alignment quirk on 375px persists but is acceptable.

### CTA Strip — 7.5/10
Unchanged. The dark green band with the amber glowing phone CTA is structurally correct and correctly placed before testimonials. The copy ("58 years of helping Phoenixville grow") is local and credible. No regression, no improvement.

### Testimonials — 8.0/10
Rebuilt since v16. The four identical card rectangles are gone. In their place: a horizontal auto-scrolling marquee with six pull quotes in two duplicate sets, edge-faded via CSS mask-image, pausing on hover. Proper `aria-hidden="true"` on the duplicate set.

This format is significantly better than the card grid. The quotes have room to breathe — each blockquote is `clamp(280px, 34vw, 420px)` wide with good padding. The 55s animation speed on desktop is comfortable; the 70s on mobile is correctly slower. The pause-on-hover behaviour is a good accessibility affordance.

The content is unchanged: six specific, location-named reviews. Kevin L. (Phoenixville), Patrice W. (Kimberton), Tom R. (Collegeville) — these remain strong because of specificity.

One issue: the marquee has no visible start/end boundary and no indicator that the content is scrollable or interactive on mobile. A first-time visitor on iPhone may not know to swipe or wait. The edge fade helps on desktop but disappears when viewed at 100% mobile width due to `overflow: hidden` on the wrapper. The `cursor: grab` affordance is desktop-only and will not communicate to touch users.

The `testimonials__rating-badge` below the header is a nice addition — the "4.8 / 340 Google reviews" pill with yellow stars is a quick-read trust signal.

Dead CSS note: `.testimonial-featured`, `.testimonial-card`, `.testimonials__grid` rules remain in the stylesheet but have no HTML. Approximately 60 lines of dead CSS.

### Contact — 8.5/10
Three-column layout (info, form, map) is correct and the Formspree integration remains clean. The dynamic open/closed badge in the contact section pulls from the same ET timezone logic as the open bar. The Get Directions full-width button is present. No regression from v16.

The 768px collapse to single column still has the 900px–1000px iPad landscape cramping issue noted in v16. Not addressed, not worsened.

### Footer — 8.0/10
Three-column: brand/tagline, nav links, hours/address. The amber gradient accent bar at top is a sound transition from contact. Social links present (Facebook, Instagram). Copyright reads 2026 correctly. No issues.

### Mobile UX at 375px — 8.0/10
Improved from v16 (7.5). Key improvements:
- Services progress dots now at 44px from bottom — iOS safe area clears correctly.
- Seasonal rows collapse to single column at 900px with 260px image height — clean on mobile.
- Testimonials marquee slows to 70s and quote width scales to `clamp(260px, 82vw, 340px)` — readable.
- Open bar nowrap + ellipsis still truncates status text at 375px, but "Open now" is visible which is the critical information.
- Hero actions swap to single-column stack on mobile with "Hours & Directions" as the primary CTA — correctly prioritised for a mobile visitor.
- Center-alignment block in CSS handles all section headings and eyebrows consistently.

The `direction: rtl` seasonal flip technique may cause minor text selection issues on Android. The marquee mobile-pause affordance gap noted above applies here.

---

## AI-Generated Assessment

**Does it look AI-generated?** Less so than any prior version.

**No longer feels AI-generated:**
- Trust bar prose sentence
- Plant list numbered editorial format
- Sticky services full-screen panels
- Legacy section with monogram card, blockquote, and watermark
- Seasonal split-screen rows
- Testimonials auto-scroll marquee
- Business-specific copy throughout (Eric Schmidt, 745 Schuylkill Road, Chester County soil conditions)

**Still feels slightly generic:**
- CTA strip (dark green band + glowing phone button is a recognisable pattern)
- Greenhouse bridge section (functional but thin)
- Hero sub-copy structure

The site now reads as designed rather than generated. A Phoenixville homeowner would not instinctively reach for another tab.

---

## Top 3 Priorities

### 1. Add a mobile swipe affordance to the testimonials marquee
The auto-scroll marquee is excellent on desktop. On mobile, it reads as a static block of text. A small label — "Scroll to read more" or a simple pair of arrows — positioned below the mask-fade area would signal interactivity to touch users. The content is strong enough to earn engagement if users know it is there.

### 2. Fix the Events panel CTA colour to match the site palette
The teal button (`#2a7d82`) on the Events service panel is the only element on the page that breaks the green/amber palette. It reads as an import from another project. Replacing it with the green glow variant (`btn--glow-green`) would restore palette consistency without reducing button legibility against the teal-tinted photo overlay.

### 3. Remove dead CSS from prior testimonials and seasonal card implementations
Approximately 80–100 lines of dead CSS remain: `.testimonial-featured`, `.testimonial-card`, `.testimonials__grid`, `.testimonial-featured__mark`, `.testimonial-featured__footer`, and related selectors. These bloat the stylesheet, create maintenance confusion, and risk specificity conflicts in future builds. Stripping them out is a clean-up task with zero UX risk.

---

*Audit by Nigel. Scored strictly from the perspective of a Phoenixville, PA homeowner.*
