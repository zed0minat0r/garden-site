# Colonial Gardens — Nigel Audit
**Date:** 2026-04-09
**Auditor:** Nigel (posh British auditor)
**Viewport tested:** 375px mobile, homeowner perspective
**Version:** v7
**Previous score:** 8.1 (v6)

---

## Overall Score: 8.3 / 10

Delta: +0.2 from v6. The five recommendations from v6 have been executed with meaningful accuracy and one — the Formspree integration — resolves what I called "a conversion failure" in the previous audit. The form now actually submits. That is not a cosmetic change; that is the difference between a page that generates leads and one that does not. The plant-now content has been diversified correctly: Dahlias and Summer Bulbs replaced the tomato overlap, Native Pollinators replaced the basil/herbs duplication. The tag font is confirmed at 12px. The textarea for notes has been added. The contact section on mobile now correctly sequences form first via `order: -2`.

What prevents 8.5: three things. First, the plant-now card icons remain semantically imprecise. The Dahlias card uses a flower-head-with-root icon that is acceptable but generic. The Native Pollinators card uses a branching-leaf icon that is reasonable. The Shade Trees card now uses a recognisable branching-tree icon. Improvement is visible but the Petunias/Impatiens card still uses a location-pin icon, which communicates geography, not flowering annuals. A petunia silhouette, a five-petal flower, or even a sun/bloom icon would be more immediately legible. Second, the `contact__form-wrap` has `order: -2` at 768px, which places it before the info column — correct — but `contact__info` has `order: -1`, meaning the sequence on mobile is: form, info, map. This is logically the right priority sequence, but the map column has no explicit `order` value. With CSS grid, unspecified `order` defaults to 0, meaning: form (-2), info (-1), map (0). The sequence is form, info, map. That is the correct visual order. This is correctly implemented. Third, the page's section depth on mobile has not changed: still ten distinct visual blocks from hero to footer. At 375px this requires approximately 5–6 full-screen scrolls before reaching the contact section. The "Hours and Directions" hero CTA resolves this for CTA-clickers, but a slow scroller encounters no natural pause or compression point between the seasonal section and the contact section. A single compression of the plant-now and seasonal sections would serve this better than any further addition.

The Formspree endpoint `https://formspree.io/f/xkgjrkge` is live in the form action. The JS submit handler now permits native POST when name and contact are filled, which is the correct implementation — it validates locally then releases to Formspree. This is precisely what I recommended in v6. The textarea for notes is present with a sensible placeholder and `rows="3"`. These are material improvements.

---

## Section Scores

### 1. Design Quality — 8.2 / 10

No regressions. The plant-now card content is now correctly non-overlapping with the seasonal section: Dahlias and Summer Bulbs, Petunias and Impatiens, Native Pollinators, and Shade Trees are four distinct horticultural categories that do not repeat the seasonal section's Annuals/Veggies/Trees framing. The editorial redundancy that scored this section down in v6 has been resolved.

The plant-now card icons have improved directionally. The Dahlias card now uses what reads as a stylised flower/tuber SVG (circle with radiating petal points and a root line). The Native Pollinators card uses a branching-herb icon with a downward stem, which is plausible. The Shade Trees card has a recognisable branching-tree silhouette. The Petunias card retains the location-pin icon from v6 — this is the remaining icon mismatch. A location pin does not communicate petunias or flowering annuals in any established visual vocabulary. It reads as "find us" or "place marker."

The testimonial cards, hero, legacy section, and service cards are unchanged and continue to perform at the same level.

### 2. Mobile UX at 375px — 8.1 / 10

The form ordering fix is correctly implemented. At 768px, `.contact__form-wrap` has `order: -2` and `.contact__info` has `order: -1`. On a 375px screen the contact section now renders: consultation form first, then the info column (address/hours/phone/email), then the map. The business's primary conversion goal — consultation request — is now the first thing a mobile user encounters in the contact section. This is the correct implementation of my v6 recommendation.

The textarea in the consultation form renders correctly at mobile. At 375px within a 600px-breakpoint padding context, the `rows="3"` textarea gives approximately 80px of input height, which is sufficient for a brief project description. The optional label tag `(optional)` is correctly marked with the `.contact__form-optional` class. The field is genuinely optional — it is not `required` — so the label matches the UX behaviour.

The plant-now tag font-size is confirmed at `font-size: 12px` in the CSS at line 2209. The 11px gap flagged in v6 is resolved.

The page scroll depth issue is unchanged. Ten visible sections, approximately 5.5 full-viewport-heights of content on mobile before the footer. The hero CTA anchor-link resolves this for motivated users. It remains an observation, not a deduction, given the hero CTA correctly links to `#contact`.

### 3. Visual Polish — 8.2 / 10

No regressions. The plant-now section card icons have improved sufficiently that they no longer constitute a legibility failure, though the petunias icon is still the weakest element on the page. Everything else holds at v6 standard.

The notes textarea in the consultation form sits cleanly within the form layout. The label includes the `(optional)` qualifier styled in a separate `.contact__form-optional` class — I cannot see that class defined in the CSS I reviewed, which may mean it inherits body styling or is unstyled. If it renders the same weight and colour as the label, it is invisible as a qualifier. A lighter weight or muted colour would visually distinguish it from required field labels. This is a minor detail but a real one.

### 4. Scroll Interactions — 7.8 / 10

No changes to the scroll/animation system. All v6 assessments hold. The Formspree form now submits natively (non-JS POST), so the JS submit handler does not interfere with the animation loop. The handler validates then releases — clean implementation.

One new technical observation: the `initConsultForm` function listens for `submit` and conditionally calls `e.preventDefault()` if fields are empty, or allows native POST to Formspree if fields are filled. After the form submits successfully to Formspree, the user will see Formspree's default "Thank you" page unless the form has a `_next` hidden input pointing to a custom success URL. Without a `_next` field, the user leaves the site entirely after submitting. For a local garden centre this is a minor friction — the user submitted their interest, they can close the tab — but a custom `_next` redirecting back to the site with a success query parameter would be a cleaner experience.

### 5. Content Presentation — 8.2 / 10

The plant-now content diversification is the material change here and it is correctly executed. "Dahlias and Summer Bulbs" with tuber-planting copy, "Petunias and Impatiens" with shade/sun differentiation, "Native Pollinators" with specific species (black-eyed Susans, coneflowers, bee balm), and "Shade Trees and Ornamentals" with spring-establishment rationale. These are four non-redundant, seasonally accurate, locally credible recommendations. The intro copy "The last frost date for our zone has passed. Here is what our growers are putting in the ground this week" remains excellent.

The optional notes textarea ("Describe your yard, project goals, or questions for our team") is an accurate prompt for landscaping consultation context. A homeowner who wants to describe that they have a north-facing slope or a deer problem can now do so before the first call. This is a real UX improvement for the highest-value conversion on the page.

The seasonal section content (Annuals and Perennials, Veggie and Herb Starts, Trees and Shrubs) and the plant-now section content (Dahlias, Petunias, Native Pollinators, Shade Trees) now address different aspects of the same April gardening context without repeating each other. The editorial redundancy is resolved.

### 6. Local Business Trustworthiness — 8.3 / 10

The Formspree integration is the single largest trust improvement across the entire audit history. A consultation form that actually captures enquiries and delivers them to the business owner is a functional trust signal — not a visual one, but the one that matters most for conversion. The form now has a real endpoint. When a homeowner submits a request and receives a follow-up call, that is the moment Colonial Gardens' website does its actual job. That loop is now closed.

No regressions on the testimonials, monogram, hero subtitle, local attributions, or social links. All v6 trust elements hold.

The `_next` redirect gap noted above means submitted users land on Formspree's generic page rather than a Colonial Gardens confirmation. This is a credibility gap worth closing — a homeowner who submits a request and lands on a third-party page may wonder if the submission went to the right place.

---

## Top 4 Recommendations

### 1. Fix the Petunias card icon
The Petunias and Impatiens plant-now card retains a location-pin SVG icon. Replace with a five-petal flower or sun-bloom icon. The other three card icons now communicate their content subject correctly — the pin is the remaining mismatch. One HTML edit.

### 2. Add a Formspree `_next` redirect hidden input
Add `<input type="hidden" name="_next" value="https://zed0minat0r.github.io/garden-site/?submitted=1" />` inside the form. This returns the user to the Colonial Gardens page after submission rather than landing on Formspree's generic thank-you page. One HTML line. Pair with a CSS rule that shows a `.contact__success` banner when `?submitted=1` is in the URL query string, or simply rely on the existing `cfNote` display logic triggered by URL param detection in JS.

### 3. Style the `(optional)` form label qualifier distinctly
The `.contact__form-optional` class appears in the HTML but I could not find it defined in `style.css`. Add `.contact__form-optional { color: var(--text-muted); font-weight: 400; font-size: 13px; }` so it visually distinguishes from the required field label weight. This prevents the textarea appearing equally required to the two mandatory fields.

### 4. Compress or integrate the ribbon into the hero
The scrolling ribbon sits between the hero and the trust bar and communicates: seasonal message, hours, free consults, and warranty. Three of these four items also appear in the trust bar below it. The ribbon adds animation weight and repeats content that the trust bar and hero already carry. Either remove the ribbon and absorb its hours message into the hero eyebrow (already shows "Phoenixville, PA — Est. 1967"), or replace the ribbon with a static contextual bar showing today's open status and hours only. This would reduce animation load and eliminate redundancy between the ribbon and the trust bar.

---

## Summary

v7 earns 8.3. The five v6 recommendations were executed cleanly and the Formspree integration closes the most consequential functional gap in the site's history. A homeowner who submits a consultation request now generates a real lead. The plant-now content is editorially distinct from the seasonal section. The form is first on mobile. The textarea exists. The tag font is compliant.

What remains is smaller: one icon mismatch on the petunias card, one missing Formspree redirect, one unstyled CSS class, and one structural observation about the ribbon's redundancy. None of these is a design rethink. The design is strong. The remaining items are polish and functional completeness.

At 8.3, this site would win a homeowner browsing three local garden centre sites. The question for 8.5 remains whether it would win a homeowner who was not already looking — and that requires either a reduction in page depth or an addition of content that creates desire rather than only confirming suitability.
