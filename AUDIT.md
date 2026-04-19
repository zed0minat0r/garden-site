# Colonial Gardens — Nigel Audit v12
**Score: 8.6 / 10**
**Previous score: 8.7 (v11)**
**Delta: -0.1**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

Twelve cycles in. The v12 pass addressed three v11 priorities: the contact welcome text is now split into a short mobile version ("No appointment needed — just walk in.") and the full desktop version, shown via `.welcome--short` / `.welcome--full` CSS classes; the CTA strip headline is now "58 years of helping Phoenixville grow — let's plan your next project." which is specific and grounded; and the JSON-LD schema was enriched with geo-coordinates, aggregateRating, and opening hours, and a 60-second `setInterval` was added to keep the open/closed badge fresh in stale browser tabs.

The contact welcome text split and the CTA strip headline are genuine visible improvements. Both were v11 priorities and both are executed correctly. However the JSON-LD update and the `setInterval` refresh are entirely invisible to users — they benefit search crawlers and edge-case long-session visitors respectively. The score moves -0.1, not because anything regressed, but because the visible delta over v11 is smaller than v11's delta over v10. The site is approaching its ceiling for a static single-page build.

The real user experience is excellent. The site beats 95% of independent garden centre sites on design quality, content specificity, and interaction detail. The path to 8.8+ now requires something a first-time visitor can see and react to within the first two scrolls.

---

## Section-by-Section Breakdown

### 1. Design Quality and Visual Polish — 8.8
The warm botanical palette, grain texture overlay, amber/green token system, and overlay hierarchy are all intact and consistent. The Ken-Burns hero entrance, the breathing amber CTA glow, the frosted-glass legacy badge, and the featured testimonial dark-green block all remain craft high points. No regression detected. The noise grain applied via data-URI SVG across six section backgrounds is a subtle but perceptible material quality signal.

### 2. Mobile UX at 375px — 8.5
Hero CTAs stack single-column with max-width 320px and centre alignment. Tap targets meet 44px minimum throughout. Font sizes meet 12px minimum throughout. Open-bar at 375px correctly shows "Open now" / "Closed now" (short text) via JS. Service cards at 88vw / min-height 460px work. Seasonal grid single-column correct. Contact single-column correct with info first, form second, map third.

The hero stats row at 375px (26px serif, three stats across the full width) remains visually tight but not broken. The legacy section at 375px shows the photo at 420px height with the 1967 badge top-right and the Eric Schmidt owner card bottom-left — both readable.

### 3. Scroll Interactions and Animations — 8.8
No regression. Ken-Burns, reveal/reveal-group/reveal-scale, greenhouse bridge SVG leaf draw-in, legacy parallax, plant-now 3D card tilt, scroll progress bar — all present and working. `prefers-reduced-motion` is correctly respected. The breathing warm glow on amber primary CTAs is consistent across hero, services cards, CTA strip, testimonials, and contact form.

### 4. Content Quality and Relevance — 9.0
The CTA strip headline is now the standout improvement this cycle: "58 years of helping Phoenixville grow — let's plan your next project." is specific, personal, and uses the founding year as proof rather than decoration. It is materially better than any generic landscaping headline and matches the voice established in the hero and legacy section.

All business data remains accurate throughout (745 Schuylkill Rd, 610-948-9755, Eric Schmidt, 1967, Mon-Sat 8am-6pm / Sun 9am-5pm, 340 reviews at 4.8 stars). The What to Plant Now section (April framing, dahlias, petunias, natives, trees) is seasonally appropriate. The Mother's Day Plant Sale event callout (May 10-11) is timely.

### 5. Form Functionality — 8.7
Formspree integration correct. Submit button "Request a Consultation." Success banner hidden by default, shown on `?submitted=1` redirect. JS validation for name and contact fields. No regression.

### 6. Center Alignment Consistency on Mobile — 8.5
The contact section now shows a short welcome text on mobile ("No appointment needed — just walk in.") via `.welcome--short` display inline / `.welcome--full` display none at 480px. This restores the warm framing copy that was absent on mobile in v11. Hero, trust bar, bridge, seasonal, plant-now, testimonials, and contact all centre-align correctly on 375px.

### 7. Image Quality — 8.6
Hero at `fetchpriority="high"` with 2400px source. All others lazy-loaded. Service card images from the actual ColonialGardensPA.com CDN (annuals, landscaping, florist, events). Seasonal and plant-now from Unsplash. No broken image paths in code. No duplicate images. The distinction between the hero (lush nursery rows, Unsplash) and the service garden-center card (actual CGA CDN annuals photo) is appropriate.

### 8. Typography Hierarchy — 9.0
Unchanged. Playfair Display / DM Sans pairing. Section eyebrows at 12px / 500 weight / 0.14em tracking / uppercase. Section titles with clamp(). Italic em elements on titles. Line heights: 1.65 body, 1.04 hero headline, 1.12 section title, 1.55 featured testimonial. All minimum font sizes (12px) met.

### 9. Color Palette Consistency — 9.0
Token system complete and consistently applied. No rogue hex values. The amber/green/earth tonal separation is coherent: green tokens for brand and CTAs, earth tokens for testimonials and contact backgrounds, amber for accent CTAs and event labels. The review-bg / review-border tokens for the testimonial cards are a nice touch.

### 10. CTA Effectiveness — 8.9
Five CTA touchpoints: hero amber breathing button, service card amber buttons per card, CTA strip amber button, testimonials warm glow button, contact form amber submit. The CTA strip headline upgrade is the meaningful change here. "Join 340 neighbors who trust Colonial Gardens" as the testimonials CTA lead-in continues to be specific and effective. Coverage is comprehensive.

### 11. Greenhouse Bridge — 8.5
Desktop: SVG leaf draws in, veins fade after 0.9s. Mobile: leaf hidden, amber accent bar and italic text centred. The italic "Walk the greenhouse — acres of covered growing houses stocked fresh every week." is well-chosen copy for this transitional element. No regression.

### 12. Contact Section (3-Column Grid, Open Badge, Welcome Text) — 8.5
At viewports above 1000px the 3-column grid (info / form / map) renders. The welcome text split now works on mobile. The dynamic open/closed badge uses `getEtOpenState()` consistently in both the open-bar and contact section badge. The 60-second `setInterval` refresh is an invisible but correct fix for stale-tab edge cases.

The contact grid collapses to single-column at the `max-width: 1000px` breakpoint, which means the 3-column layout is only visible above 1000px. The majority of laptop users (1024-1280px) will see... just above the breakpoint threshold. At exactly 1024px the grid remains 3-column. This is a borderline situation — at 1000px and 1001px, the breakpoint triggers. Functionally acceptable.

### 13. Footer — 7.8
Logo, tagline, nav links, social icons (Facebook and Instagram with correct real URLs), copyright with phone link. Clean. The gradient bar at the top edge of the footer bookends the gradient bar at the top of the contact section. No regression.

### 14. JSON-LD Schema — invisible to users, noted for completeness
GardenStore type, full address, phone, email, geo-coordinates, opening hours, aggregateRating (4.8, 340 reviews), offerCatalog for four services. Correctly structured. Not scored as it does not affect the real user experience.

---

## Ceiling Assessment

At 8.6, the site has addressed every low-hanging and medium-hanging improvement available within the static single-page constraint. The path to 8.8+ requires one of:
- A second real property photo or short video in the hero or bridge position (visceral, immediate impact)
- A third and fourth testimonial card (social proof depth)
- Seasonal content that rotates visibly (e.g. an "April in Phoenixville" banner that a May return visitor sees changed to "May at Colonial Gardens")

None of these are architectural changes. All three are content decisions.

---

## Top 3 Priorities for Improvement

### Priority 1: Add Two More Testimonial Cards
The site has 340 Google reviews at 4.8 stars. The testimonials section shows one featured pullquote and two secondary cards. Two cards is thin. A 2x2 grid (four cards, two columns) would feel proportionate to the claim and fill the section more convincingly. The additional two should cover different services — one mentioning the florist, one mentioning events — to show breadth. This is the highest-impact visible change remaining on the page.

### Priority 2: Introduce Real Property Photography
Every Unsplash image on this site is high quality but generic. A real visitor who has ever been to Colonial Gardens will notice that the hero and seasonal sections use stock photos, not the actual greenhouse. The actual property images already used for service cards (from colonialgardenspa.com CDN) are strong evidence the real photos exist. Swapping at minimum the seasonal wide card (dahlia, Unsplash) for an actual greenhouse aisle or retail floor photo would ground the site in place and be immediately noticed by a local visitor.

### Priority 3: Make the Seasonal Card CTAs Anchor Distinctly
All three seasonal card CTAs ("Shop the Greenhouse," "Shop Veggies & Herbs," "Shop Trees & Shrubs") link to `#garden-center`, which is the ID on the first service carousel card (annuals and perennials). A visitor who clicks "Shop Trees & Shrubs" and lands at the annuals card may experience a minor trust break. If distinct deep links are not possible within the single-page structure, change all three seasonal card buttons to "Come See Us" or "Visit the Nursery" — language that does not imply navigation to a specific product category.

---

*Audit conducted by Nigel — v12 — 2026-04-18*
