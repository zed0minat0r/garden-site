# Colonial Gardens — Nigel Audit v14
**Score: 8.7 / 10**
**Previous score: 8.7 (v13)**
**Delta: 0.0**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

Fourteen cycles in. The v14 QA pass correctly resolved all three priorities I raised in v13, plus two additional compliance bugs discovered during that pass. The work is precise and unambiguous. The undefined `--amber-light` CSS token is now declared at `#e8a84a`, the footer phone and info labels now render in the intended amber, the open-bar dot pulses with `dot-pulse-green` at 2.8s ease-in-out, the footer info label is 12px (corrected from 10px), and the seasonal card CTA tap target is 44px (corrected from 40px).

None of these changes are visible to a first-time visitor in a way that shifts their perception of the site. The amber-light fix removes a rendering defect. The dot pulse adds micro-liveliness to a small 8px element. The two compliance fixes prevent friction on mobile but do not upgrade the experience — they prevent a degradation.

The score holds at 8.7. This is not a failure of execution. The work done is correct. The score has not moved because the score reflects the user's experience, not the quality of the code, and the user's experience has not meaningfully changed. The hero is still an Unsplash greenhouse that is not Colonial Gardens. That remains the single largest gap between this site and the truth it is trying to tell.

---

## What Changed from v13 to v14

### Addressed — Priority 1: Hero Photo
Not addressed. Correctly skipped — noted in the commit message as a content decision with no access to actual property photography. This is the right call. Fabricating a property photo would be worse than using quality stock.

### Addressed — Priority 2: `var(--amber-light)` Token Bug
Confirmed fixed. `--amber-light: #e8a84a` added to `:root` at line 22. The footer phone link (`.site-footer__phone`) and info labels (`.site-footer__info-label`) now render at the intended warm amber. This was a genuine bug that degraded a visible element. Fixed correctly.

### Addressed — Priority 3: Green Dot Pulse Animation
Confirmed present. `@keyframes dot-pulse-green` added with a scale(1.25) + expanded box-shadow at 50% keyframe. Applied to `.open-bar__dot` at 2.8s ease-in-out. Correctly paused on `.is-closed` and under `prefers-reduced-motion`. The open-bar dot now communicates "live" status rather than static presence. This is a real improvement in micro-interaction quality.

### Additional QA fixes
- `.site-footer__info-label` corrected from 10px to 12px. This was a compliance failure (below minimum text size) that was not flagged in v13. Good catch.
- `.seasonal-card .btn--primary` corrected from 40px to 44px minimum height. Tap target compliance failure, correctly resolved.

---

## Section-by-Section Breakdown

### 1. Design Quality and Visual Polish — 8.8
No regression. The amber-light fix means the footer info labels and phone number now correctly appear in warm amber against the dark green background, as intended. This is a minor but meaningful polish fix — the footer now reads as designed, not as accidentally inherited colour. All other design elements unchanged: Ken-Burns, leaf SVG draw-in, greenhouse bridge, legacy frosted badge, featured testimonial dark pullquote, service card full-bleed images with gradient overlay. The open-bar dot pulse adds a small but appropriate liveliness signal.

### 2. Mobile UX at 375px — 8.6
Two compliance fixes in this cycle. The footer info-label font-size was 10px — below the 12px minimum — and is now correct. The seasonal card CTA tap target was 40px — below the 44px minimum — and is now correct. Both of these are real improvements from a mobile user perspective, not merely academic compliance. No new issues identified at 375px. The hero stat row at 320px remains unaddressed (three stats at approximately 110px each, tight but functional). The hero__reviews badge wraps correctly at narrow widths.

### 3. Scroll Interactions and Animations — 8.9
The addition of `dot-pulse-green` to the open-bar dot is the only change. The keyframe is well-constructed: scale(1.25) at 50% with an expanded double-layer box-shadow (`0 0 12px rgba(111,207,114,.95), 0 0 20px rgba(111,207,114,.4)`) creates a convincing pulse that reads as a live signal rather than a static indicator. Correctly paired with `animation: none` on `.is-closed` and under `prefers-reduced-motion`. The section score ticks up marginally from 8.8 to 8.9 — the pulse is a genuinely good interaction detail.

### 4. Content Quality — 9.0
No change. Business data accurate, testimonials credible, plant-now section seasonally appropriate for April, Mother's Day Plant Sale (May 10–11) correctly callout. Eric Schmidt quote retained.

### 5. Form Functionality — 8.7
No change. Formspree, success banner, JS validation, select caret, textarea resize — all intact.

### 6. Center Alignment Consistency on Mobile — 8.5
No change. All sections correctly centred at 375px.

### 7. Image Quality — 8.5
No change. Hero remains Unsplash (`photo-1466692476868`). Service cards, about section, seasonal wide card: real CDN photos. Two small seasonal cards remain Unsplash. The gap between the hero image and the actual property continues to be the site's most significant credibility issue for a returning local visitor.

### 8. Typography Hierarchy — 9.0
No change. The footer info-label correction brings one element into compliance (12px vs. 10px) but does not alter the typographic hierarchy overall.

### 9. CTA Effectiveness — 8.9
No change.

### 10. Testimonials — 8.7
No change. Featured pullquote + 2x2 grid intact.

### 11. Footer — 8.5
Improved from 8.2 (v13). The amber-light token fix means the footer "Hours" and "Find Us" labels and the phone number now render as intended — warm amber against the dark green background. This was a visible defect in v13 that is now resolved. The footer still lacks the visual refinement of the sections above it — the nav links remain a `flex-wrap` without column structure — but it is no longer silently broken.

### 12. Contact Section — 8.6
No change.

---

## Bug Log

1. **Hero stat row at 320px** (persists from v12) — Three-stat row at approximately 110px each at 320px viewport. Tight but survivable.

2. **Map embed place ID mismatch** (persists from v13) — The iframe uses a synthetic place ID (`!1s0x89c6a5e5aa8f1b5b:0x123456789abcdef`) while the Get Directions link uses a different ID (`!1s0x89c6a3a5e23d2b7f:0x4b2c1f8e9a0d3c5e`). Both resolve to the correct coordinates, so this is invisible to users but technically inconsistent.

3. **All-5-star testimonials** (new note) — All four grid cards and the featured pullquote are 5/5 stars. A sceptical visitor may notice the uniformity. A mix with one 4-star would increase authenticity. This is a content decision, not a code decision.

---

## Ceiling Assessment

The site has reached its practical ceiling at 8.7 for code and copy changes alone. The v14 pass is exemplary — four real defects corrected, no regressions introduced, no scope creep, no unnecessary animation added. The execution is correct. The score does not move because there are no remaining code-level changes that would shift a real visitor's experience.

The path to 8.8 requires one specific thing: a real photograph of the Colonial Gardens property in the hero position. Not a better Unsplash image — an actual photo of the greenhouse, the retail floor, or the growing houses on 745 Schuylkill Road. That single change would immediately differentiate this site from every garden-centre template on the internet. No code change can replicate the signal that a real building photograph sends to a local returning customer.

The path to 8.9 and above requires backend infrastructure — an event calendar with real dates, a live inventory signal, or a booking form that actually connects to a scheduling system. These are out of scope for a static build.

This is not a criticism of the build. For what it is — a static single-page site for a family-owned garden centre — it is unusually well-made. 8.7 from a real user's perspective is genuinely good.

---

## Top 3 Priorities for Improvement

### Priority 1: Replace the Hero Image with an Actual Property Photo
This is the same priority as v13, repeated unchanged, because it remains the same gap. The Unsplash image (`photo-1466692476868`) is competent stock. A returning Phoenixville customer will know immediately it is not a photo of the actual Colonial Gardens greenhouse. One real photo — even a well-composed iPhone shot of the spring annual tables under the growing house glass — would close this gap permanently. This is the highest-value single change available to the site and it requires no code work.

### Priority 2: Introduce One 4-Star Testimonial Among the Five
All five testimonials (featured + four grid cards) are rated 5/5 stars. For a business with 340 reviews at 4.8, a single 4-star review in the mix would increase authenticity without diluting the quality signal. A 4-star review like "Great selection and knowledgeable staff — parking can get tight on weekends but worth it" reads as honest and makes the 5-star reviews feel more credible by contrast. This is a copy edit, not a code change.

### Priority 3: Add a Fifth Testimonial Grid Card on Larger Screens
The testimonial grid is 2x2 — four cards. At desktop widths (`min-width: 900px`), there is enough horizontal space for a 3-column layout on the first row or a 5th card in a 2+3 layout. A fifth card covering the garden centre shopping experience (the experience the hero and trust bar promise) would complete the service coverage: the grid currently represents landscaping, florist x2, and events. Adding a garden-centre-specific review would close the loop on the core service promise. This is a code change (add one `testimonial-card` blockquote, adjust grid to `repeat(auto-fit, minmax(300px, 1fr))` on desktop).

---

*Audit conducted by Nigel — v14 — 2026-04-18*
