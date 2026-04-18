# Colonial Gardens — Nigel Audit
**Date:** 2026-04-09
**Auditor:** Nigel (posh British auditor)
**Viewport tested:** 375px mobile, homeowner perspective
**Version:** v5
**Previous score:** 7.5 (v4)

---

## Overall Score: 7.8 / 10

Delta: +0.3 from v4. This is a meaningful, earned increment — not a rounding error. Every single recommendation from v4 has been actioned. The four-simultaneous-CTA-pulse problem is gone: `cta-breathe-warm` now fires only on the hero button, where it belongs. The footer shimmer has been replaced with a static warm botanical gradient, removing the SaaS loading-bar tone mismatch. The stock portrait card is gone — replaced by a text-only owner identity chip, which is categorically more trustworthy than a wrong face. The Mother's Day seasonal card duplicate has been replaced with Trees & Shrubs, which is genuinely more useful content. Jennifer R. replaces the duplicated Lisa M. attribution. All three seasonal cards now have shop CTAs.

What stops this from reaching 8.0: there is no longer a hero-level trust problem or a pulse-clutter problem, but three gaps remain. First, the testimonial names Tom R., Sarah K., Jennifer R. are still generic initial-surname combinations with no context — real Google reviews almost always include a neighbourhood, a specific purchase, or a recognisable detail. Second, the `legacy__owner-card` text-only chip (Eric Schmidt, Owner & Head Grower) now sits over a photo without a face, which is better than a wrong face but still a gap — a real homeowner reading "Eric Schmidt" with no visible person feels the absence. Third, the mobile hero at 375px shows two primary CTA buttons stacked (Hours & Directions, then Call 610-948-9755 as ghost) but the amber hero button has no visible affordance difference from the all-green service card buttons on scroll — the amber is the right call but the ghost button below it in the hero stack is rendered at full width on mobile, making the call action visually equal weight to the direction action, which is the wrong hierarchy for a user already decided to visit.

---

## Section Scores

### 1. Design Quality — 7.8 / 10

The token system is consistent and coherent. The palette, type scale, and shadow system remain best-in-class for a local garden centre in the Philadelphia suburbs.

New additions assessed:

The footer top bar is now a static `linear-gradient(90deg, var(--earth-mid), var(--amber), var(--green), var(--amber), var(--earth-mid))` at 6px height, 75% opacity. This is the correct treatment — it reads as a botanical brand mark rather than a loading animation. The warm amber-to-green sweep is distinctly botanical and the weight is proportionate. This was the right call.

The CTA pulse reduction is the most structurally significant change. With only the hero button pulsing, the animation now functions as designed — an attention anchor at the top of the page. Scrolling past the hero, the remaining CTAs (service card buttons, CTA strip, seasonal card buttons) are static. The page now breathes correctly on scroll rather than waving.

The text-only owner card (`legacy__owner-card` with only `legacy__owner-info` — name and role, no image) is a step forward. The component CSS still defines `.legacy__owner-img` (for future use), but the HTML correctly omits the `<img>` element. The dark glass card with "Eric Schmidt / Owner & Head Grower" in green-pale text reads cleanly against the about image. On desktop it sits at the bottom-left of the image half, correctly positioned as a caption. On mobile at 375px it becomes a bottom overlay at 16px inset, 13px name, 12px role — the role is now at the accessibility minimum but technically compliant.

The owner card without a face, however, has a subtle authority problem: the card reads as a label rather than a person. It would benefit from the real owner's initials rendered as a monogram circle (dark green background, 42px, green-pale text) — zero stock-photo risk, adds personality, avoids the blank-person problem.

The seasonal section is improved. Three cards with CTAs, distinct images (Colonial Gardens CDN, Unsplash herb, Unsplash trees), varied seasonal labels (Spring 2026, Now Available, Spring Planting). The Trees & Shrubs replacement is more useful than the Mother's Day duplicate — it spreads the seasonal signal rather than concentrating it.

One new design note: the `testimonials__grid` uses `grid-template-columns: repeat(2, 1fr)` with only two testimonial cards (Tom R. and Sarah K.) — this is visually correct as a two-column pair. However the featured pull-quote above (Jennifer R.) is now uniquely attributed with a full name visible in `.testimonial-featured__name`. None of the three reviewer names appear twice on the page. This was the correct fix.

### 2. Mobile UX at 375px — 7.5 / 10

Genuine progress from v4. The pulse-clutter issue is gone. The static CTAs on service cards and the CTA strip now feel appropriate at mobile scale — they do not distract.

The hero at 375px with `flex-direction: column; max-width: 320px` on `.hero__actions` creates a vertical stack: amber button (Hours & Directions, full width) then ghost button (Call 610-948-9755, full width). The amber button is correctly prioritised for the mobile-first user who wants to visit. However the ghost button — reversed out of the hero image, white border on dark green overlay — at full width at 320px renders at nearly the same visual mass as the amber CTA. The distinction is colour (amber vs transparent), not size or weight. A visitor on mobile who wants to call will find it, but the visual hierarchy does not guide them toward calling as a secondary action — it presents it as an equal alternative to visiting. The ghost button should be `width: auto` on mobile, centred, not full-bleed, to preserve the primary/secondary visual relationship.

The contact section suppression of `.contact__welcome` at 480px is confirmed and correct. The open badge and hours are immediately visible below the section title on mobile.

The trust bar at 375px with `flex: 1 1 100px` creates a 2x2 grid wrapping (four items at 100px+ each, two per row at 375px viewport minus padding). This is acceptable and the icon glow on hover works correctly.

One new observation: the seasonal section at 375px with `grid-template-columns: 1fr` stacks three cards vertically. The wide card loses its `span 2` treatment on mobile, which is correct behaviour. The three cards at single column are approximately 295px wide each. The `seasonal-card__img-wrap` on the narrow cards is 160px tall, which is sufficient. The wide card drops to standard height at mobile — no overflow issues.

The `legacy__owner-card` at 480px breakpoint: bottom 16px, left 16px, padding 10px/14px. Name at 13px, role at 12px. The role is borderline but technically compliant. Without a portrait image, the card is narrower (no 54px circular avatar) — the text alone sits well. However on mobile at 375px the card could overlap with the `legacy__badge` if the about image is short. The badge repositions to top-right at 1000px, so on mobile these two elements occupy opposite corners of the image — no collision.

### 3. Visual Polish — 7.9 / 10

The combination of the static footer gradient bar (replacing shimmer), the restricted hero pulse, and the darkened testimonial cards (`#ece5d5` / `#b8aa96` border) produces a page that feels more composed and confident than v4.

The testimonial card background `#ece5d5` against the `earth-wash` (`#fdf7ef`) section background: the contrast is now stronger than the previous cream-on-earth-wash problem noted in v4. `#ece5d5` is a distinctly warmer, darker tone than `#fdf7ef` — the cards read clearly as cards. The inset white top shadow (`0 1px 0 rgba(255,255,255,.55) inset`) adds a subtle paper lift. This is the correct treatment.

The trust bar icon glow on hover (`box-shadow: 0 0 0 4px rgba(46,107,48,.08)` on `.trust-item__icon`) is correctly restrained. The icon container lifts to `rgba(46,107,48,.12)` fill on hover. The combined effect is a gentle pulse of botanical green — appropriate for a garden centre without being gratuitous.

The service card CTA buttons are now static warm amber with `box-shadow: var(--glow-warm)` at rest. The glow at rest is: `0 0 0 1px rgba(212,147,63,.2), 0 0 32px rgba(212,147,63,.45), 0 0 64px rgba(212,147,63,.18)`. At rest this is visible — particularly the 64px spread at `.45` opacity on the outermost layer. On a card with a dark overlay this resolves into a warm halo around the button. This is deliberate and botanical. It reads correctly in context.

One new observation: the `services::after` pseudo-element renders a 4px gradient line at the bottom of the services section — `transparent, var(--green-pale), var(--amber), var(--green-pale), transparent`. This is positioned `bottom: 0` on a `position: relative` parent. It is visually subtle at `.6` opacity and serves as a gentle separator before the legacy section. However the `services__scroll-wrap::after` gradient fade (right edge, for the horizontal scroll hint) is `z-index: 2` and the services pseudo-element is implicitly `z-index: auto`. On some combinations, the services track card text could appear above the section gradient. In testing this is unlikely to cause problems because the gradient line is only 4px tall and sits below the scroll track content area.

### 4. Scroll Interactions — 7.6 / 10

The reduced-motion block correctly suppresses all five named animations: `btn--primary`, `service-card .btn--primary`, `cta-strip .btn--primary`, `hero__actions .btn--primary`, and `hero__scroll`. With the consolidation of the pulse to hero-only, the reduced-motion suppression is now cleaner — there is only one meaningful animation being suppressed rather than four.

The `initParallax` function scoping is unchanged and correct. The `requestAnimationFrame` guard on `.legacy__img` parallax prevents unnecessary GPU work when the section is off-screen.

The reveal system has no regressions. The `addRevealClasses()` guard logic for `.seasonal__grid` and `.testimonials__grid` is unchanged and correct. The progressive-enhancement gap noted in v4 (elements invisible if JS fails) remains, but this is a known acceptable trade-off at this stage of build.

The hero ken-burns (`transform: scale(1.08)` to `scale(1)` over 10s ease-out, triggered on `.is-visible` class via `setTimeout 80ms`) is unchanged. It remains tasteful.

The `hero__scroll` float animation (`translateX(-50%) translateY(0)` to `translateY(8px)` over 2.5s ease-in-out infinite) is now the only hero-area animation that runs after the ken-burns completes. At rest, the hero has: one amber pulse (3.5s), one float indicator (2.5s). Both are GPU composited. Two concurrent animations on hero is acceptable; the rhythm of 3.5s vs 2.5s means they rarely peak simultaneously.

### 5. Content Presentation — 7.6 / 10

The seasonal section is now genuinely informative and non-repetitive. Three distinct card subjects: Annuals & Perennials (Spring 2026), Veggie & Herb Starts (Now Available), Trees & Shrubs (Spring Planting). The event callout on the Events service card (Mother's Day Plant Sale, May 10-11) is the sole Mother's Day reference on the page. This is the correct resolution to the v4 duplication problem.

The Jennifer R. pull-quote is cleanly attributed and does not repeat in the two testimonial cards below. The three testimonial names (Jennifer R., Tom R., Sarah K.) are all distinct and appear once each. The duplication problem from v4 is resolved.

However the testimonial copy remains generic. Tom R.'s review covers landscaping (consult, install, warranty). Sarah K.'s covers the florist (same-day arrangements). Jennifer R.'s covers the general garden centre experience (20 years, selection, real garden feel). This is actually a well-distributed spread across three service categories — better than it first appears. The weakness is the attributions: first initial + generic surname + "via Google Reviews" tells the reader nothing that personalises the review to Phoenixville. A Collegeville neighbour or "longtime Phoenixville customer" attribution would strengthen local credibility.

The ribbon copy "1-year warranty on all landscape installs" is correct and unambiguous — the v4 ambiguity about retail plant purchases is resolved.

The hero subtitle "58 years of plants, passion, and community" reads as slight generic local-business language. The phrase "plants, passion, and community" is the type of copy that appears on a thousand local business websites. A more specific claim — "58 years growing Phoenixville's most stubborn soils" or "58 seasons of annuals, installs, and answering plant questions" — would land as distinctly Colonial Gardens. This is a content refinement, not a design problem.

### 6. Local Business Trustworthiness — 7.8 / 10

The removal of the stock portrait is the single most important trust improvement in v5. The text-only owner chip ("Eric Schmidt / Owner & Head Grower") is unambiguously honest. A Phoenixville homeowner who knows Eric Schmidt will see his name and recognise the credibility claim without cognitive dissonance. A homeowner who does not know him will accept the attribution without suspicion. This is strictly better than a wrong face.

The email address addition (`info@colonialgardenspa.com`) fills the asynchronous contact gap noted in v4. A homeowner who wants to enquire about landscaping pricing without committing to a call now has a path. The email icon and label row follows the same visual treatment as phone and address — consistent and correctly structured.

Social links (Facebook: ColonialGardensPA, Instagram: colonialgardens_pa) remain correctly linked to real accounts.

The Google reviews badge appears twice (hero pill, testimonials header pill). The repetition is not harmful — the hero badge is seen immediately on load; the testimonials badge is seen after the featured quote and before the card reviews, at which point the numeric anchoring of "4.8 — 340 reviews" re-establishes credibility in context.

One remaining gap: there is no Google Maps link from the contact section that resolves to the actual Colonial Gardens listing. The iframe embeds coordinates but the `maps.google.com/?q=745+Schuylkill+Road+Phoenixville+PA` Get Directions link resolves to a text search, not the business listing. A user who clicks through to verify the business on Google will land on a search page rather than the Colonial Gardens Google Business Profile. This is a minor but real trust gap.

---

## Top 5 Recommendations

### 1. Add a monogram or initial circle to the owner card
The text-only owner card is trustworthy but anonymous. A simple dark green circle containing "ES" in green-pale serif at 42px diameter (CSS-only, no image) would give the card a face-shaped anchor without using any photo. The monogram approach is used by professional services firms precisely because it is personal without being fraudulent. One `<span class="legacy__owner-monogram">ES</span>` with 6 lines of CSS.

### 2. Change the hero ghost CTA from full-width to auto-width on mobile
At 375px, the hero actions stack vertically with `width: 100%` applied to both buttons via `.hero__actions .btn { width: 100% }` at the 480px breakpoint. This makes the ghost "Call 610-948-9755" button the same visual weight as the amber primary CTA. Override to `width: auto` for `.btn--ghost` within `.hero__actions` at 480px. The call button should be centred and compact, visually subordinate to the amber visit CTA.

### 3. Add a Phoenixville neighbourhood or context detail to at least one testimonial
"Tom R. — via Google Reviews" is accurate but generic. "Tom R., Collegeville" or "Tom R. — Spring 2025 landscape install" gives the review a specific, verifiable character. This does not require fabricating content — it requires adding context that real reviews include but which was stripped during copy extraction. One additional detail per review would substantially increase the trustworthiness of the section.

### 4. Link the Get Directions button to the Google Business Profile listing, not a text search
Replace `https://maps.google.com/?q=745+Schuylkill+Road+Phoenixville+PA` with the direct Google Business Profile URL (`https://goo.gl/maps/[actual_place_id]` or the full place URL from the Google Business listing). The current URL resolves to a search result. A user who clicks "Get Directions" and lands on a search page rather than a verified business listing will question whether the business is verified on Google.

### 5. Sharpen the hero subtitle from generic to specific
"58 years of plants, passion, and community" is a conventional local business tagline. It could describe a hardware store, a pet groomer, or a garden centre. One revision candidate: "58 years rooted in Phoenixville — from backyard tomatoes to full landscape installs." This variant names the town, names two specific service types, and is the kind of specificity that distinguishes a real business page from a template.

---

## Summary

v5 delivers on every v4 recommendation without exception. The stock portrait problem is resolved. The pulse clutter is resolved. The Mother's Day duplication is resolved. The testimonial name duplication is resolved. The seasonal cards all have CTAs. Email is in the contact section. The footer shimmer is gone.

The page is now genuinely competitive for a garden centre in the Philadelphia suburbs. At 7.8 it sits above "better than most" and within range of "choose over competitors" — which I would characterise as the point where a homeowner browsing three local garden centre websites selects this one to visit first.

The gap to 8.0+ is a content and identity problem, not a design problem. The bones are excellent. The remaining work is: give the owner card a face (monogram), fix the hero mobile ghost button weight, add one piece of local specificity to the testimonials, and fix the Google Maps link. None of these is a large build. Collectively they close the last gap between a well-built local business site and one that actively converts browsers into visitors.
