# Colonial Gardens — Nigel Audit v10
**Score: 8.6 / 10**
**Previous score: 8.5 (v9)**
**Delta: +0.1**

---

## Overall Assessment

Ten cycles in. The v10 "surgical polish pass" addressed all three v9 priorities: the duplicate annuals image is gone (seasonal wide card now shows a dahlia from Unsplash, distinct from the service card), the testimonials CTA is present and styled with the warm glow animation, and the open-bar has been reworked at 480px breakpoint to suppress the season text, suppress the divider, and enforce `flex-wrap: nowrap`. The contact mobile order now correctly places address/hours before the form. The testimonial hex colours have been promoted to design tokens. Form phone field autocomplete has been changed from "tel" to "off". These are all genuine fixes.

The delta is +0.1. It is honest. The site is better. No single improvement was transformative enough to warrant more. The remaining friction points are real and a motivated real visitor would notice at least two of them.

---

## Section-by-Section Breakdown

### 1. Design Quality and Visual Polish — 8.6
The palette, grain texture, and overlay system remain the site's strongest visual signals. The amber warm glow on primary CTAs is a distinctive and effective brand touch — consistent across hero, CTA strip, service cards, and now the testimonials CTA. The greenhouse bridge and leaf SVG are a considered design decision that has survived 10 cycles for good reason.

One desktop concern that was flagged in v9 and remains: the contact section uses a 3-column grid at desktop widths with info / form / map side by side. The map column sits at 340px height, and the form card (with 4 fields, a textarea, and a submit button) runs taller. At wide viewports the three columns don't align to a common bottom — the map and info column terminate well before the form finishes. This is not catastrophic, but it is visually ragged and a first-time visitor notices it before the map has even loaded. This is priority-level work.

### 2. Mobile UX at 375px — 8.4
The three mobile fixes from v9 are confirmed in the code. The open-bar at 480px now applies `flex-wrap: nowrap`, hides `.open-bar__season` and `.open-bar__divider`, sets `flex-shrink: 0` on the call link, and applies `text-overflow: ellipsis` and `min-width: 0` on the text span. The bar will stay single-line.

However: the ellipsis on `.open-bar__text` is a blunt instrument. At exactly 375px the visible hours text ("Open now — Mon–Sat 8am–6pm • Sun 9am–5pm") is 43 characters. Depending on the device's font rendering, the text may clip mid-phrase to something like "Open now — Mon–Sat 8am..." — which removes the Sunday hours and leaves an incomplete thought. A better fix would be to show only "Open now" or "Closed now" on the narrowest breakpoint and put the full hours in the contact section exclusively, since they are already there in full.

Hero CTAs stack correctly at 480px with the mobile-first "Hours & Directions" swap in place. Font size minimums are met. Tap targets are 44px minimum throughout.

### 3. Scroll Interactions and Animations — 8.7
No regression. All prior animation work holds: reveal, reveal-group, reveal-scale, greenhouse bridge leaf draw-in, parallax on legacy image, card tilt on plant-now at 8 degrees, scroll progress bar with rAF throttling. `prefers-reduced-motion` is fully respected.

The testimonials CTA button has the warm glow breathing animation applied — matching the hero and CTA strip. Consistent and correct.

The hero Ken-Burns effect at 10 seconds remains well-calibrated. The floating scroll indicator animation (float keyframe, 2.5s) is appropriate.

### 4. Content Quality and Relevance — 8.8
All business information is accurate and verified: 745 Schuylkill Rd, Phoenixville PA; 610-948-9755; Eric Schmidt owner and head grower; 1967 founding; Mon–Sat 8am–6pm, Sun 9am–5pm. No fabricated content. "What to Plant Now" section is seasonally accurate for April in Phoenixville Zone 6b.

One persistent copywriting issue: the hero subheadline reads "Real expertise, real plants — and we've been at it since before you were born." The second clause ("since before you were born") is mildly antagonistic in tone. It aims for wit and lands slightly off. A family-owned garden center that has been open 58 years does not need to wink at the customer to establish credibility. The copy before it ("Real expertise, real plants") is strong — the "before you were born" addendum undercuts it.

Additionally, the testimonials CTA text is "Ready to start your garden project?" — generic. The site elsewhere has stronger copy ("Walk the greenhouse", "The gardens are waiting for you"). This CTA undersells the moment.

### 5. Form Functionality — 8.6
Formspree integration is correct. Native POST with `_next` redirect to `?submitted=1`, JS reads the parameter on load, shows success banner, hides form. Success banner text ("Eric and the team will be in touch") is personal. `autocomplete="off"` on the phone/email field avoids the iOS phone keyboard issue that was present in v9.

One minor UX gap: the submit button reads "Send Request" — this is adequate but impersonal. Something like "Request Your Consultation" or simply "Get in Touch" is warmer and more specific. Not a bug, not a priority, but worth a future pass.

### 6. Center Alignment Consistency on Mobile — 8.2
Hero centres correctly. Trust bar flex-wraps cleanly. Greenhouse bridge text centred. At 375px the seasonal card grid goes to 1fr (single column) with the season pill at `width: fit-content`. This was flagged in v9 as a minor misalignment and remains. The amber pill sits left-aligned within the card, but because the pill is smaller than the card width, it reads as left-aligned within a left-aligned layout — which is actually correct. This is no longer a genuine complaint.

The contact section mobile order is confirmed correct: `.contact__info { order: -1 }`, `.contact__map-wrap { order: 0 (default) }`, `.contact__form-wrap { order: 1 }`. Address and hours appear first on mobile. This was a v9 priority and is now resolved.

### 7. Image Quality — 8.6
Duplicate annuals image is resolved. The seasonal wide card now shows photo-1444021465936-c6ca81d39b84 (dahlia bloom) from Unsplash, distinct from the Garden Center service card's colonialgardenspa.com upload. Hero image correctly uses `fetchpriority="high"` and a 2400px source. All other images use `loading="lazy"`.

No remaining duplicate image issues detected on visual audit of the code.

### 8. Typography Hierarchy — 9.0
Unchanged and strong. Playfair Display / DM Sans pairing. Section eyebrows at 12px / 500 / 0.14em tracking. Section titles with `clamp()`. Italic em treatment on section titles. Line heights appropriate. This remains the craft high point of the site.

### 9. Color Palette Consistency — 9.0
Improved from v9. The testimonial card colours (`--review-bg: #ece5d5` and `--review-border: #b8aa96`) are now properly declared as tokens in `:root`. Full token system is used throughout. No rogue hex values detected. The semantic use of amber for CTAs and amber-adjacent seasonal elements, greens for primary/trust, and earth tones for warm backgrounds is coherent and consistent.

### 10. CTA Effectiveness — 8.6
The testimonials CTA (v9 priority 3) is now in place with the warm glow animation. The button is "Plan Your Visit" linking to `#contact`. The setup text "Ready to start your garden project?" is weak — it lacks the warmth and specificity of the surrounding content. The CTA exists, which is correct; the copy is the remaining weakness.

CTA coverage is now good: hero (amber, breathing glow), services cards (amber per card), CTA strip (dark green section, amber button, phone number), testimonials (warm glow button), contact form (amber submit). Five touchpoints is appropriate for a single-page site of this depth.

### 11. Greenhouse Bridge Element — 8.5
No change. Confirmed working at both desktop (leaf SVG draw-in animation) and mobile (leaf hidden, amber accent bar, italic text centred). The translateY(16px) reveal override correctly gives a lighter entrance than the standard 30px reveal. Held position from v9.

### 12. Dynamic Open/Closed Badge — 8.6
No regression. America/New_York timezone handling is correct. Badge reflects correct hours for Mon–Sat and Sunday separately. Both the open-bar (header) and contact__open-badge (contact section) are initialised from the same `getEtOpenState()` helper, ensuring consistency.

### 13. Hero Stats Coherence — 7.8
This was not previously flagged and is worth noting now. The three hero stats are "58 Years in PA", "40+ Yrs landscaping", and "1 Year Warranty". These three are not parallel data points — the first two are historical facts about the business, the third is a service guarantee about a specific offering. A visitor scanning these three figures gets a slightly confused signal. "40+ years landscaping" and "1-year warranty" refer to different things entirely. Replace the "1 Year Warranty" stat with something more business-level: "4.8 Stars" (the review score), or "4 Services" (garden center, landscaping, florist, events), or simply the number of google reviews ("340+ Reviews"). Any of these would read as a coherent trio.

---

## Top 3 Priorities for Improvement

### Priority 1: Fix the desktop contact section column alignment
At desktop widths, the 3-column contact grid (info / form / map) produces an uneven bottom edge because the form is taller than the map. The map at 340px fixed height terminates before the form finishes rendering. Options: increase the map height to match the form dynamically (`height: 100%` inside a `position: relative` parent, or set a minimum that matches the form at typical viewport widths), or restructure the desktop layout to a 2-column arrangement (info+form left, map right, full height). The current imbalance is visually apparent and undermines an otherwise well-composed section.

### Priority 2: Replace the hero subheadline
"Real expertise, real plants — and we've been at it since before you were born." The second clause damages the warmth the site otherwise projects. Replace with something grounded and specific: "Real expertise, real plants — and a full acre of growing houses to prove it." or "Trusted by Phoenixville since 1967 — because good plants and good advice never go out of style." The fix is two sentences of copy. The impact on first impression is disproportionate because this text appears directly under the largest headline on the site.

### Priority 3: Sharpen the testimonials CTA copy
"Ready to start your garden project?" is a generic marketing placeholder. The testimonials section has already done the heavy lifting — two strong reviews with specific details. The CTA copy should capitalise on that momentum. Try: "Join 340 neighbours who trust Colonial Gardens" as the line, keeping "Plan Your Visit" as the button. Or link the button directly to the phone number for mobile users ("Call 610-948-9755" on mobile, "Plan Your Visit" on desktop). The infrastructure is correct; the copy is the gap.

---

*Audit conducted by Nigel — v10 — 2026-04-18*
