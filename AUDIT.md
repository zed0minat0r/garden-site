# Colonial Gardens — Nigel Audit v13
**Score: 8.7 / 10**
**Previous score: 8.6 (v12)**
**Delta: +0.1**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

Thirteen cycles in. The v13 agent pass addressed all three v12 priorities correctly and competently. The testimonials section now shows a featured pullquote plus four secondary cards in a 2x2 grid. The seasonal card CTAs now read "Visit the Nursery" rather than implying product-specific navigation that does not exist on this single page. The real-photo situation has improved marginally — the service cards already used actual CDN photos, and the about section uses a real property image.

The visible improvements over v12 are real but incremental. A real visitor landing for the first time will notice the testimonials section is now substantive — four cards covering four distinct service experiences (landscaping install, florist, florist/anniversary, events/Mother's Day sale) is credible. "Visit the Nursery" is better CTA copy than "Shop Trees & Shrubs" linking to the annuals card. The net effect is worth +0.1.

The site now sits at 8.7 against a practical ceiling I estimate at approximately 8.9 for a static single-page build with no real-time content updates. The remaining gap is almost entirely a content problem, not a design or code problem.

---

## What Changed from v12 to v13

### Addressed — Priority 1: Testimonial Grid Expanded to 2x2
Confirmed present. The `.testimonials__grid` is `grid-template-columns: repeat(2, 1fr)` with four `testimonial-card` blockquotes. The four cards now cover landscaping (Tom R., Collegeville), florist/same-day (Sarah K., Spring City), florist/anniversary (Diane M., Royersford), and events/Mother's Day (Kevin L., Phoenixville). This is genuinely better — the social proof claim of 340 reviews is now supported by a more substantial visual presence on the page.

### Addressed — Priority 2: Real Property Photos
The service cards already used actual CDN images (`colonialgardenspa.com/wp-content/uploads/`) from v11 onward. The about section photo is also from the real CDN. The hero and the two smaller seasonal cards (veggie/herb, trees/shrubs) still use Unsplash. This is a partial address, not a full one. The hero is still generic stock.

### Addressed — Priority 3: Seasonal CTA Language
All three seasonal cards now read "Visit the Nursery," which is appropriate neutral language that does not imply specific product navigation. This eliminates the minor trust-break identified in v12.

---

## Section-by-Section Breakdown

### 1. Design Quality and Visual Polish — 8.8
No regression. The warm botanical palette, noise grain, amber/green glow system, and overlay hierarchy are all intact. The Ken-Burns hero entrance, breathing amber CTA, frosted-glass legacy badge, greenhouse bridge SVG leaf draw-in, and the featured testimonial dark-green pullquote block remain craft highlights. The four-card testimonials grid is well-proportioned at the `repeat(2,1fr)` layout with correct gap spacing and the review-bg/review-border token pairing. The large decorative open-quote mark (`::before` content at 80px Playfair) on each card has been scaled to 56px on mobile at 480px, which is correct.

Minor note: the gradient accent bars (top of contact section, top and bottom of services section, footer top bar) now appear five times across the page. They remain tasteful at current opacity values but are approaching the threshold where a sixth instance would register as repetitive to a discerning visitor.

### 2. Mobile UX at 375px — 8.5
All four testimonial cards stack to single-column at `max-width: 600px`. Tap targets confirmed at 44px minimum throughout. Font sizes confirmed at 12px minimum throughout. Hero CTAs stack single-column max-width 320px. Service cards at 88vw with min-height 460px work. Testimonial cards at `padding: 28px 24px` on mobile are correctly handled. The open-bar at 375px hides the season copy and divider, showing only the dot, status text, and call link — correctly compressed.

One persistent marginal issue: the hero stats row (`hero__stat-num` at 26px on 480px and below, three stats across ~335px of live width) is visually tight. At 375px with three items, each stat column is approximately 110px. The stat numbers render at 26px serif with 12px labels below. It works, but there is no breathing room. A visitor on a 320px device (older budget Android) would experience this row as cramped.

### 3. Scroll Interactions and Animations — 8.8
No regression. Ken-Burns (10s ease-out), reveal/reveal-group/reveal-scale, greenhouse bridge SVG leaf stroke-dashoffset draw-in (1.1s), legacy parallax via `requestAnimationFrame`, plant-now 3D card tilt (8-degree max, mouse only), scroll progress bar — all intact. `prefers-reduced-motion` respected. The `reveal-group` now applies to both the seasonal grid and the testimonials grid — staggered fade-in on the four testimonial cards is a nice touch. The scroll-progress rAF throttle correctly prevents unnecessary paint cycles.

### 4. Content Quality and Relevance — 9.0
All business data confirmed accurate: 745 Schuylkill Rd, 610-948-9755, Eric Schmidt Owner & Head Grower, 1967 / 58 years, Mon-Sat 8am-6pm / Sun 9am-5pm, 340 reviews at 4.8. The "April in Phoenixville" framing on the plant-now section is seasonally appropriate for the current date. The Mother's Day Plant Sale (May 10-11) callout on the events card is timely and specific. The Eric Schmidt quote ("We're not a big-box store and we never will be") remains the most effective piece of copy on the page — direct, specific, and defensible.

The four testimonials now cover four distinct service lines in a believable voice. The florist anniversary review ("colour palette," "handwritten card") and the landscaping install review ("showed up on time," "one-year warranty") include the kind of detail that signals authenticity.

### 5. Form Functionality — 8.7
Formspree integration present. `action="https://formspree.io/f/xkgjrkge"` with `_next` redirect to `?submitted=1`. Success banner hidden by default, shown on `?submitted=1` via `URLSearchParams`. JS validates name and contact before allowing submit. The textarea `resize: vertical` is a useful touch. Select input has a custom SVG caret via `background-image`. No regression.

### 6. Center Alignment Consistency on Mobile — 8.5
Hero, open-bar, trust bar, greenhouse bridge, services header, seasonal, plant-now header, testimonials header, contact — all centred correctly at 375px. The contact section stacks info / form / map in that order at mobile widths. The `flex-direction: column; align-items: center` on `.hero__actions` at 480px with `max-width: 320px` keeps the CTA stack contained.

### 7. Image Quality — 8.5
Real CDN photos used in: service cards (garden center, landscaping, florist, events), about section. Unsplash still used in: hero background, seasonal herb card, seasonal trees card. The hero Unsplash image (`photo-1466692476868`) is a clean lush nursery rows shot at 2400px with `fetchpriority="high"` — it is good quality stock but it is stock. A repeat local visitor will recognise it is not the actual Colonial Gardens property. This gap is the single largest remaining credibility issue on the page. The seasonal Unsplash cards are less critical.

### 8. Typography Hierarchy — 9.0
Unchanged and correct. Playfair Display / DM Sans pairing throughout. `clamp()` on all section titles and the hero headline. Italic `em` elements in section titles. 12px minimum throughout (confirmed). Line heights correctly varied by context.

### 9. CTA Effectiveness — 8.9
CTA coverage: hero amber breathing button ("Shop the Greenhouse" desktop / "Hours & Directions" mobile), four service card amber buttons (per card contextual), CTA strip amber button ("Call 610-948-9755"), testimonials warm glow button ("Plan Your Visit"), contact form amber submit ("Request a Consultation"), open-bar call link ("Call 610-948-9755"), plant-now CTA ("Plan Your Visit"). The differentiation between the hero primary CTA (desktop: "Shop the Greenhouse" / mobile: "Hours & Directions") via the `.hero__actions-mobile-first` / `.hero__actions-desktop-first` class swap is correct and user-appropriate — a mobile visitor is more likely to want directions than to browse the greenhouse section. Good decision, retained correctly.

### 10. Testimonials 2x2 Grid — 8.7
Well executed. The featured pullquote (Jennifer R., green-dark background, 28px Playfair italic) + four secondary cards (2x2 grid, review-bg tokens) is a convincing three-tier structure: aggregate rating badge at top, featured pullquote, then grid. The section now reads as substantial rather than thin. Service breadth (landscaping, florist, florist, events) is appropriate. All five are attributed with name, location, and service tag. Stars are 5/5 throughout — this could appear suspiciously uniform to a sceptical visitor, but it is consistent with an actual 4.8-star rating.

### 11. Footer — 8.2
Logo (filtered to white opacity 75%), tagline, nav links with 44px minimum tap targets, hours table, address, phone, Facebook/Instagram icons with correct real URLs. The 3-column grid (`1fr 1fr auto`) at 760px+ works. Below 760px it collapses to single-column with stacked brand, nav, and info blocks. Footer logo amber-light phone text uses `var(--amber-light)` which is not defined in the token set — it falls back to transparent or initial, meaning the phone number in the footer info column may not render in the intended amber. This is a minor bug.

The footer is functional and clean but lacks the visual craftsmanship present in the rest of the page. The nav links in the footer are thin (no column structure, just `flex-wrap`) and could be organised more legibly. Not a priority but noted.

### 12. Contact Section — 8.6
Three-column grid (info / form / map) above 768px. Single-column below. The live open/closed badge uses `getEtOpenState()` correctly. The 60-second `setInterval` refresh handles stale tabs. The colour-matched border/background change on the badge (`is-closed` class) is a polished detail. The map iframe uses a placeholder coordinate-based URL — it resolves to approximately the correct area but the `!1s0x89c6a5e5aa8f1b5b:0x123456789abcdef` marker ID is synthetic and may not pin to the exact business listing. This is invisible to most users but technically imprecise.

---

## Bug Log

1. **`var(--amber-light)` undefined** — The footer phone link colour and the footer info label colour reference `--amber-light`, which is not declared in `:root`. Likely inherits transparent. The phone number should visually be amber but may not be. Low severity but technically incorrect.

2. **Hero stat row at 320px** — Below 375px the three-stat row has no mobile-specific layout change. At 320px (small Android devices) this row will be tighter than at 375px. Survivable but unaddressed.

3. **Map pin ID is synthetic** — The Google Maps embed `!1s0x89c6a5e5aa8f1b5b:0x123456789abcdef` is a placeholder place ID. The actual Colonial Gardens place ID on Google Maps is `!1s0x89c6a3a5e23d2b7f:0x4b2c1f8e9a0d3c5e` (used in the Get Directions link). The two IDs are inconsistent: the embed uses a synthetic ID, the directions link uses a real-looking one. The map likely renders centred on the coordinates regardless, so this is low impact.

---

## Ceiling Assessment

At 8.7, the site has addressed all visible priorities raised in v11 and v12. The path to 8.9 requires:

1. A real hero photograph of the actual Colonial Gardens greenhouse or retail floor, replacing the Unsplash lush-rows image. This is the single highest-impact unresolved item. A returning local customer opening this site on their phone will immediately recognise it is not a photo of the actual property.

2. A visible seasonal content signal that changes cycle-to-cycle (an "April" badge that was "March" last month). The current "April in Phoenixville" section is correctly dated but appears hard-coded. A first-time visitor does not notice; a return visitor does. This is a static-site limitation — a comment in the HTML (`<!-- UPDATE EVENT: -->`) exists on the events card, suggesting manual updates are the intended workflow.

3. The footer `var(--amber-light)` bug should be resolved — it is a minor but embarrassing oversight at this quality level.

Beyond 8.9, the format reaches its ceiling. A static single-page site without real inventory, a booking calendar, or dynamic event listings cannot surpass what this site has already achieved. Further point gains require backend infrastructure.

---

## Top 3 Priorities for Improvement

### Priority 1: Replace Hero Image with an Actual Property Photo
The hero background (`photo-1466692476868`, Unsplash) is the only full-bleed image on the page that a local returning visitor will recognise as generic stock. The service cards and the about section already use real CDN photos. The hero should too. One real greenhouse interior or exterior shot from Colonial Gardens — rows of spring annuals, the covered growing house, the retail floor — would immediately differentiate this site from every other garden centre template on the internet and close the most significant remaining credibility gap. This is the highest-value single change remaining on the page.

### Priority 2: Fix the `var(--amber-light)` Token Bug in the Footer
The footer phone link (`.site-footer__phone`) and the footer info label (`.site-footer__info-label`) both reference `var(--amber-light)`, which is not declared in the `:root` token set. The intended colour is a lighter amber, probably something in the range of `#e8a84a` or `#f0b856`. Add `--amber-light: #e8a84a;` to `:root`. At this quality level, an undefined CSS variable in the footer is an embarrassing oversight.

### Priority 3: Animate or Improve the Open-Status Bar Dot
The open/closed dot in the open-bar currently has a static glow (`box-shadow: 0 0 6px rgba(111,207,114,.7)` when open). A gentle pulse animation on the green dot — similar to the amber CTA breathe — would make the "Open now" status feel live rather than static. This is a single `@keyframes` declaration and two CSS properties. The effect is small but the open-bar is the first element a visitor sees below the hero fold, and a pulsing green dot communicates "right now, in real time" more effectively than a static one.

---

*Audit conducted by Nigel — v13 — 2026-04-18*
