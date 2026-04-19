# Colonial Gardens — Nigel Audit v15
**Score: 8.7 / 10**
**Previous score: 8.7 (v14)**
**Delta: 0.0**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

Fifteen cycles in. The code, copy, and structure are identical to v14. I have read index.html, style.css, and main.js in their entirety. There is not a single line that has changed from the previous audit. No new testimonial, no 4-star rating, no fifth card, no hero swap, no layout adjustment, no animation change, no copy edit. Every element I reviewed in v14 is present in exactly the same state.

The score holds at 8.7. This is not a judgment of the site — the site is well-made. It is a statement of fact: a real visitor arriving today would experience the same site they would have experienced during the v14 audit. A score that does not reflect a changed experience is not an honest score.

The three priorities I raised in v14 have not been addressed. They were not easy priorities — two require content decisions (hero photo, testimonial mix), and one requires a code change (fifth testimonial card). None of them happened. They carry forward unchanged.

---

## What Changed from v14 to v15

Nothing. The repository was up to date on pull. No files were modified between the v14 commit and this audit.

---

## Section-by-Section Breakdown

### 1. Design Quality and Visual Polish — 8.8
No change. Ken-Burns on hero, leaf SVG draw-in on greenhouse bridge, frosted legacy badge, featured testimonial dark pullquote, gradient-overlay service cards, warm amber buttons with breathing glow — all intact. The amber-light token fix from v14 persists correctly.

### 2. Mobile UX at 375px — 8.6
No change. Footer labels at 12px, seasonal card CTA at 44px — both compliance fixes from v14 remain in place. No new issues introduced. The hero stat row at 320px remains the only known tight element and it remains functional.

### 3. Scroll Interactions and Animations — 8.9
No change. The dot-pulse-green keyframe on the open-bar dot remains correctly implemented and paused on is-closed and under prefers-reduced-motion. Parallax on legacy image, services drag-scroll, reveal-group stagger, progress bar — all intact. No regressions.

### 4. Content Quality — 9.0
No change. Business data accurate. Mother's Day Plant Sale (May 10-11) is appropriately upcoming. Eric Schmidt quote retained. Plant-now section is correct for April in PA Zone 6b/7a.

### 5. Form Functionality — 8.7
No change. Formspree POST, success banner on ?submitted=1, JS validation requiring name and contact, select caret, textarea resize — all intact.

### 6. Center Alignment Consistency on Mobile — 8.5
No change. All sections correctly centred at 375px.

### 7. Image Quality — 8.5
No change. Hero remains Unsplash photo-1466692476868. Service cards and about section use Colonial Gardens CDN photos. Two seasonal small cards remain Unsplash. This is the same gap it has been since v12.

### 8. Typography Hierarchy — 9.0
No change. Playfair Display / DM Sans pairing, clamp sizing throughout, footer at 12px minimum — all correct.

### 9. CTA Effectiveness — 8.9
No change. Warm amber CTA with breathing glow in hero, green primaries through body, ghost call button in nav — all functioning correctly.

### 10. Testimonials — 8.7
No change. Featured pullquote by Jennifer R. plus 2x2 grid covering landscaping (Tom R.), florist x2 (Sarah K., Diane M.), and events (Kevin L.). All five are 5-star. The core garden-centre shopping experience remains unrepresented in the testimonial set. The all-5-star uniformity against a stated 4.8 aggregate remains a credibility gap.

### 11. Footer — 8.5
No change from v14's corrected state. Amber labels and phone render correctly following the v14 token fix.

### 12. Contact Section — 8.6
No change. Form, map embed, directions link, open badge — all intact.

---

## Bug Log

1. **Hero stat row at 320px** (persists from v12) — Three-stat row at approximately 110px each at 320px viewport. Tight but survivable.

2. **Map embed place ID mismatch** (persists from v13) — The iframe uses a synthetic place ID (`!1s0x89c6a5e5aa8f1b5b:0x123456789abcdef`) while the Get Directions link uses a different ID (`!1s0x89c6a3a5e23d2b7f:0x4b2c1f8e9a0d3c5e`). Both resolve to the correct address. Invisible to users but technically inconsistent.

3. **All-5-star testimonials** (persists from v14) — Five reviews, all 5/5. For a business with 340 reviews at 4.8, a sceptical visitor may question the curation.

---

## Ceiling Assessment

The score remains at 8.7 for the same reason it held at 8.7 in v14: the remaining gaps are content and copy decisions, not code decisions. The code-level work is effectively complete. No additional animation, layout fix, or CSS refinement will move a real user's perception of this site.

The path to 8.8 remains a real property photograph in the hero. The path to 8.9 and above requires backend infrastructure out of scope for a static build.

---

## Top 3 Priorities for Improvement

These are identical to v14 because they were not addressed.

### Priority 1: Replace the Hero Image with an Actual Property Photo
The Unsplash greenhouse (photo-1466692476868) is competent stock. A Phoenixville resident who knows the property will immediately recognise it is not Colonial Gardens. One real photograph — even an iPhone shot of the spring annual tables under the growing-house glass — closes this gap permanently. No code change required.

### Priority 2: Introduce One 4-Star Testimonial Among the Five
All five testimonials are 5/5. The stated aggregate is 4.8 across 340 reviews. A single 4-star card — something like "Incredible selection, though it can get busy on weekends — worth the wait" — increases authenticity and makes the 5-star reviews feel earned rather than curated. This is a copy edit in index.html plus a minor star-rendering change. Low effort, measurable credibility gain.

### Priority 3: Add a Fifth Testimonial Grid Card Covering the Garden-Centre Shopping Experience
The 2x2 grid covers landscaping, florist x2, and events. The core service — walking the greenhouse and buying plants — is absent from the testimonial set despite being the primary reason most visitors come to the site. Adding one card (e.g. a spring-shopping or plant-selection review) with a grid adjustment to `repeat(auto-fit, minmax(300px, 1fr))` on desktop completes the service coverage and closes the loop between what the hero promises and what the testimonials confirm.

---

*Audit conducted by Nigel — v15 — 2026-04-18*
