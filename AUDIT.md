# Colonial Gardens — Nigel Audit
**Date:** 2026-04-09
**Auditor:** Nigel (posh British auditor)
**Viewport tested:** 375px mobile, homeowner perspective
**Version:** v4
**Previous score:** 7.2 (v3)

---

## Overall Score: 7.5 / 10

Delta: +0.3 from v3. This is a legitimate step forward. The Eric Schmidt portrait card lands well as a face of the business — it directly addresses my most emphatic recommendation from v3. The social links in the footer are present and correctly linked to real accounts. The Mother's Day event callout in the service card is specific and dateable. The Seasonal Highlights section adds genuine retail urgency. The featured pull-quote testimonial in its dark green block is the most confidently designed new element — it breaks the grid and commands attention the way a marquee testimonial deserves.

What stops this from reaching 7.8: the Eric Schmidt portrait is an Unsplash placeholder of a random man in a nursery — not Eric Schmidt. A homeowner from Phoenixville who has met him will feel a quiet, inexplicable wrongness. The testimonial names remain Lisa M., Tom R., Sarah K. — unchanged since v3. Four pulsing amber/green CTA animations run simultaneously at page load, and whilst individually defensible, collectively they create a page that feels like it is waving at you from every direction. The Seasonal Highlights section duplicates content already on the services card and the Mother's Day card event callout — the third reference to Mother's Day on a single scroll feels like padding.

---

## Section Scores

### 1. Design Quality — 7.6 / 10

The token system is consistent and coherent. The full-bleed services cards at 580px with the dark gradient-over-image treatment remain the visual high point of the page. The alternating background palette (off-white, earth-wash, cream, green-dark, earth-wash) creates a proper editorial rhythm.

New additions assessed:

The featured pull-quote (dark green block, 120px decorative mark, Playfair italic at up to 28px) is correctly executed. It uses the same dark green as the CTA strip, which creates a pleasing structural echo. The amber radial glow behind it is restrained at 14% opacity — acceptable.

The Eric Schmidt portrait card (bottom-left of the about image, frosted dark green pill, circular portrait, name/role) is structurally sound. The component is well-built and the concept is right. The problem is the image: `photo-1560806887-1e4cd0b6cbd6` from Unsplash resolves to a generic middle-aged man in a greenhouse, cropped at chin level due to `object-position: center top`. It does not look like a named individual — it looks like a stock photo in a named slot. This creates a trust deficit precisely where you most need trust.

The 1967 watermark behind the about copy is correctly subtle at 5% opacity. It does not read as clutter; it reads as texture.

The footer shimmer gradient bar: a 4px bar animating at 6s is visible and not offensive. However the `footer-shimmer` keyframe shifts `background-position` from 0% to 200% — this means the gradient has no fixed anchor, creating a sliding motion that has no botanical analogue and looks more like a tech product loading state than a garden centre. It is a minor stylistic misfit.

Deduction for the four simultaneous CTA pulse animations (hero button, two service card buttons, CTA strip button — all running `cta-breathe-warm` or `cta-breathe` at 3.5s infinite). The combined effect on a slow scroll from top to bottom is: every green or amber button on screen is gently throbbing. That is not emphasis — it is background noise.

### 2. Mobile UX at 375px — 7.3 / 10

Improvements from v3 that are confirmed implemented:

The contact welcome paragraph is suppressed at 480px via `display: none` — correctly done. Users now land directly on the section title, the open badge, and the hours. This was the single most impactful mobile UX fix recommended in v3 and it is implemented correctly.

Hero stat "1" / "Year Warranty" — the stat number is now `1` with label "Year Warranty" as recommended. At 26px Playfair serif, "1" sits cleanly alongside "58" and "40+". The label wraps to two lines at 375px (12px, letter-spaced) but this is acceptable because the typographic weight is now in the number, not the label.

Remaining issues at 375px:

The Seasonal Highlights section at 375px stacks to a single column. The wide card (Mother's Day context card plus the "Shop the Greenhouse" CTA) becomes the full width. The image height collapses to auto from the 280px set for desktop — resulting in a very short image strip above the body text. At 375px the image is approximately 200px tall, which is acceptable but tight for the wide card treatment.

The testimonial-featured block at 375px: padding is 36px/28px (from the 768px breakpoint), with the decorative mark reduced to 60px at 480px. This is correct. However the pull-quote text at `clamp(20px, 2.8vw, 28px)` renders at 20px on mobile inside a dark block with 28px side padding. The text sits very close to the edge. At 375px minus 28px padding each side, the text column is 319px — workable but tight for a 20px serif italic. No overflow observed but the breathing room is minimal.

Four simultaneous animation threads on mobile: the `cta-breathe-warm` and `cta-breathe` keyframes are GPU composited but still represent four continuous animation loops that run from page load. On a mid-range Android this is measurable battery drain and can cause jank on lower-powered devices. The service card buttons animate even when the card is not visible in the viewport — there is no pause-when-offscreen logic.

The `legacy__owner-card` on mobile (below 480px) drops to 44px avatar, 13px name, 11px role. The role text at 11px is below the 12px accessibility minimum for readable body copy. This should be 12px.

### 3. Visual Polish — 7.4 / 10

The service card green glow on hover (`box-shadow: var(--shadow-xl), 0 0 0 1.5px rgba(46,107,48,.5)`) is elegant — it uses the shadow-xl for depth and a thin green ring for botanical identity. The simultaneous `transform: translateY(-10px) scale(1.015)` is bold but the spring easing keeps it from feeling cartoonish.

The event callout on the Events card (amber tinted, backdrop-blurred, "Coming Up" / "Mother's Day Plant Sale" / "May 10-11") is the single most actionable new piece of content on the page. It is well-styled: the amber border at 40% opacity reads cleanly against the dark overlay.

The `legacy__img-wrap:hover .legacy__img` CSS parallax (scale 1.04 over 1.2s ease-out) is a pleasant hover bonus on desktop. Non-intrusive.

The footer shimmer animation as noted above is a tone mismatch. The movement pattern belongs to a SaaS dashboard, not a 58-year-old garden centre with earth-tone typography.

Testimonial cards now have `background: var(--cream)` instead of plain white, on an `earth-wash` section background. The contrast between cream cards and earth-wash background is `#faf8f3` on `#fdf7ef` — effectively invisible. These two background values are less than 3 lightness points apart. The card boundary is maintained only by the `1px solid var(--stone)` border, which is correct but weak. The warm-card intent is there; the execution does not achieve visual separation.

### 4. Scroll Interactions — 7.2 / 10

The `addRevealClasses()` function correctly applies `reveal` to `.contact__info` and `.contact__map-wrap` at runtime. The `reveal-scale` applied to `.legacy__badge` produces a scale-from-0.92 entrance — this is tasteful and proportionate.

The stagger delays in `reveal-group.is-visible` (0/100/200/300/400/500ms) are down from the 0/90/180/270ms in v3. The slight increase to 100ms steps is fine.

One new observation: the Seasonal Highlights grid is added to `reveal-group` by `addRevealClasses()` in JS. However the `.seasonal__grid` already has the class in the HTML via the `reveal-group` class directly — there is no duplicate because `addRevealClasses()` checks `!classList.contains('reveal-group')` before adding. This is correctly guarded. However the `.testimonials__grid` check in the same function applies `reveal-group` at runtime to a grid that already stagger-reveals correctly. If JS fails to execute (e.g., network error before `main.js` loads), these grid elements remain invisible. This is a minor progressive-enhancement gap.

The `initParallax` function is scoped correctly: it short-circuits if `rect.bottom < 0` or `rect.top > vh`, meaning it only runs the `requestAnimationFrame` when the about section is in view. This is the correct approach.

The marquee ribbon has no `prefers-reduced-motion` pause on the CSS animation itself — the global `animation-duration: .001ms !important` in the reduced-motion block handles this globally, but the ribbon animation is controlled by `animation: marquee 32s linear infinite`. The reduced-motion override fires via the global cascade. Correct.

### 5. Content Presentation — 7.3 / 10

Mother's Day Plant Sale, May 10-11 now appears three times: once in the events service card callout, once as a seasonal card ("Plant Sale May 10-11"), and once in the ribbon ("Spring is here — Shop annuals & perennials" — technically separate). Two direct references to the same event in two adjacent sections (Seasonal Highlights follows immediately after the Services carousel) creates the impression of padding rather than reinforcement.

The featured pull-quote uses Lisa M. as the speaker — the same name as the first testimonial card below it. Seeing "Lisa M." twice on the same screen (featured block above, card below) looks like the copy was self-sourced. If the featured quote is pulled from the same set as the three cards, the names should not repeat.

The Seasonal Highlights "Veggie & Herb Starts" card has no CTA and no link. The "Spring Annuals & Perennials" wide card has a CTA to "#garden-center". The "Mother's Day Plant Sale" card has no CTA. Two of three seasonal cards are dead ends. The wide card correctly links out; the supporting cards should do the same or explicitly set the expectation that they are informational.

The ribbon copy "1-year plant warranty on installs" — this is accurate for landscaping installs but could be misread as a warranty on retail plant purchases. Worth tightening to "1-year warranty on all landscape installs".

### 6. Local Business Trustworthiness — 7.4 / 10

The Eric Schmidt portrait card is the most meaningful new trust signal — conceptually. A face, a name, a role. This is exactly what the about section needed. The execution problem is that the Unsplash image (`photo-1560806887-1e4cd0b6cbd6`) is clearly stock: the man is cropped at chin level, well-dressed in a way that reads as catalogue rather than nursery owner, and the context (greenhouse bench, blurred background) is generic. A real homeowner who has shopped at Colonial Gardens will notice immediately that this is not Eric Schmidt. This is worse than no portrait — it introduces a specific false claim.

The social links — Facebook and Instagram — are correctly linked to real Colonial Gardens accounts. This is a meaningful trust addition. A homeowner can verify the business is active before visiting.

The Google reviews badge appears twice: once in the hero (frosted pill, amber stars, "4.8 — 340 Google reviews") and once in the testimonials header (pill badge, numeric 4.8, "340 Google reviews"). The repetition is not harmful but the testimonials badge is redundant given the placement is just below the hero.

No email address, no contact form. This remains an open gap. For a homeowner who wants to enquire about landscaping pricing before committing to a call, there is no asynchronous path. Adding a simple mailto link alongside the phone number in the contact section would cost one line of HTML.

---

## Top 5 Recommendations

### 1. Replace the Unsplash portrait with a real photo or remove the named card
The Eric Schmidt portrait card is the most damaging element currently on the page. Using a stock photo in a named slot is a direct credibility problem — particularly for a local business whose customers may know the owner personally. Either: (a) replace with a real photo of Eric Schmidt, or (b) remove the portrait card and keep the blockquote attribution text only. Option (b) is safer than a wrong face.

### 2. Remove one of the two Mother's Day references
Mother's Day appears in the Events card callout AND the Seasonal Highlights third card. Both sections are on the same scroll. Pick one location and remove the other. The event callout on the service card is the higher-impact placement — it is in context (the Events service category) and has a specific date. The seasonal card is redundant and can be replaced with a more varied seasonal item (e.g. "Trees & Shrubs — Spring planting season").

### 3. Change the featured pull-quote speaker name
Lisa M. appears as the featured pull-quote speaker and also as the first testimonial card. On a single screen view this creates the impression that one customer's review is being recycled twice. Give the featured quote a different attribution — "— A longtime Phoenixville customer" is vaguer but at least avoids the duplication problem.

### 4. Reduce active CTA animation count from four to one
At page load and on a full scroll, four buttons simultaneously pulse: the hero primary CTA, the Florist service card CTA, the Events service card CTA, and the CTA strip call button. The `cta-breathe-warm` animation running on all of them simultaneously removes the emphasis benefit of animation entirely. Restrict the pulse to one: the hero CTA. Remove `animation: cta-breathe-warm 3.5s ease-in-out infinite` from `.service-card .btn--primary` and `.cta-strip .btn--primary`. Keep the hover glows — those are correct. Kill the idle pulse on secondary contexts.

### 5. Add a CTA or link to the two non-linking seasonal cards
The "Veggie & Herb Starts" and "Plant Sale May 10-11" seasonal cards are visual dead ends. The wide card correctly links to #garden-center. Add `href="#garden-center"` to the veggie card and `href="#events"` to the Mother's Day card. These are internal anchor links — zero engineering cost, and they give a user something to do other than read and scroll past.

---

## Summary

v4 is the strongest version of this site. The face-of-business portrait card (concept correct, image wrong), the social links, the specific event date, and the seasonal section all represent meaningful progress from v3. The score moves from 7.2 to 7.5.

The gap to 7.8+ is narrow and clearly defined: fix the stock portrait problem, deduplicate the Mother's Day references, and stop four buttons pulsing simultaneously. Those three changes alone would push this into genuine "choose over competitors" territory for a local garden centre in the Philadelphia suburbs. The bones are excellent. The remaining issues are content and restraint problems, not design problems.
