# Colonial Gardens — Nigel Audit
**Date:** 2026-04-09
**Auditor:** Nigel (posh British auditor)
**Viewport tested:** 375px mobile, homeowner perspective
**Version:** v2

---

## Overall Score: 6.8 / 10

A genuinely solid v2 build. The bones are excellent — real business data, appropriate typography choices, coherent colour palette, proper accessibility scaffolding. But several friction points hold it back from being the kind of site where a homeowner immediately thinks "yes, this is where I want to go."

---

## Section Scores

### 1. Design Quality — 7.2 / 10

The Playfair Display + DM Sans pairing is a smart choice for a garden centre — editorial without being precious. The green/earth/amber token system is internally consistent and genuinely appropriate to the brand. The hero headline ("Where Gardens Come to Life") with italic green em is the strongest single design moment in the build.

Deductions: The amber glow on buttons (`--glow-warm`) is tasteful but the same button style (amber, pill-shaped, glow) is used in three distinct contexts — hero, service cards, and CTA strip — which dilutes its impact. The trust bar repeats exactly the same stat ("58 Years") that already appears in the hero stats row four lines above it. A real homeowner notices this and it reads as padding rather than reassurance.

### 2. Mobile UX at 375px — 6.4 / 10

**What works:** The full-screen nav overlay is clean and large targets (22px links, 44px min-height) are correct. The hamburger toggle shows/hides properly. Buttons go full-width on 480px and under. The service card flex value of `88vw` gives good peek-through for scrollability discovery.

**Problems:**
- The hero CTA buttons stack full-width at 480px but the primary CTA ("Shop the Greenhouse") has no phone-level urgency. The secondary CTA is a phone number, which is the right instinct, but at 375px a homeowner who found this on Google wants to know hours and directions *first*, not a call. The hierarchy is inverted for mobile intent.
- The services horizontal scroll track has no scroll indicator — no dots, no "swipe" hint text, nothing. The nav arrow buttons below the track are centred and subtle; most users will not find them before abandoning.
- The trust bar at 375px goes to `flex: 1 1 100px` which means four items in two rows. The word "Widest" as a `.trust-item__num` is inelegant and reads like a placeholder. It is the weakest of the four items.
- The ribbon marquee is 12px, which at 375px on a real screen is borderline too small to read comfortably. The content is genuinely useful (hours, warranty) but the font size undermines it.
- The contact section at the bottom has the map before the hours and phone number in the visual hierarchy on mobile. On a phone, the user wants hours/phone first, then the map — the stacking order should invert.

### 3. Visual Polish — 7.0 / 10

The ken-burns hero entrance (scale 1.08 to 1.0 over 10s) is a good restrained choice. The parallax on the legacy image is correctly implemented with RAF throttling and reduced-motion respect. The scroll progress bar is tasteful at 3px.

The "Est. 1967" badge overlaid on the legacy image is the second best design moment in the build — but at 375px it shifts to `bottom: 24px; right: 24px` which means it now competes visually with the body text that follows immediately below it, especially when the legacy section stacks vertically. Consider making the badge smaller or repositioning to top-right on mobile.

The vignette radial gradient on the hero overlay is a legitimate depth technique and is not overdone.

The service card hover state (lift + scale + image zoom) is polished but irrelevant on touch devices, which is fine — just noting it adds no mobile value.

### 4. Scroll Interactions — 6.8 / 10

The reveal-on-scroll system is correctly built: IntersectionObserver with unobserve-after-trigger, reduced-motion guard, 0.1 threshold, -50px rootMargin to ensure elements are meaningfully visible before triggering. This is competent work.

The stagger delays (0/90/180/270ms) on `.reveal-group` items are appropriate and not overcooked.

Where this falls short: the services horizontal scroll section has no snap-point scroll indicator. Users on touch have no affordance that there are more cards. The fade gradient on the right edge (`width: 80px`) is too soft to function as a clear "swipe right" signal — it barely registers against the cream background.

The parallax on the legacy image uses `pct * 80px` of travel, which is aggressive — at moderate scroll speeds the image appears to shift unnaturally. Reducing to `pct * 40px` would feel more settled.

### 5. Content Presentation — 6.6 / 10

**Strengths:** Owner name (Eric Schmidt), real address (745 Schuylkill Road), real phone number (610-948-9755), real hours. This is exactly what a local business site needs and it is all present.

**Problems:**
- "The widest selection in the area" appears both as a trust-bar item and as the Garden Center service card h3. Same phrase, twice, within two scrolls of each other. Pick one.
- "1yr" as a stat in the hero is typographically awkward. "1-Year" or "1 Year" would read cleaner.
- The florist and events cards both link to `colonialgardenspa.com` — this is presumably intentional as a workaround, but a homeowner clicking "Order Flowers Online" and landing on a different-looking WordPress site will feel the jarring disconnect. Consider setting the expectation: "Visit our full site to order" rather than implying the landing will complete the transaction inline.
- No customer reviews, testimonials, or Google rating visible anywhere. A 58-year-old local business almost certainly has strong reviews. This is the single largest trust signal missing from the page.
- No seasonal or upcoming event content. The ribbon says "Spring is here — Shop annuals & perennials" but there is no event in the events card, no specific promotion. A homeowner in Phoenixville in April wants to know what is happening *this weekend*.

### 6. Local Business Trustworthiness — 6.8 / 10

The fundamentals are covered: real address, real hours, real phone, family ownership acknowledged, longevity emphasised. The CTA strip ("Free in-store consultation — no commitment, just great ideas") is a strong conversion hook.

What is missing: any human face. "Owner Eric Schmidt" is mentioned in one paragraph but there is no photo of him, no photo of staff, no photo of customers in the garden. The imagery is all product/landscape photography. For a family business that has served Phoenixville since 1967, a face or two would do more work than any amount of copywriting.

Also missing: no social proof (Google reviews, testimonials, star rating). No indication of whether the business has a dedicated landscaping consultation phone line or whether the same number handles everything. No email address or contact form.

---

## Top 5 Recommendations

### 1. Add social proof — star rating + 2–3 testimonials
A Google rating badge (e.g. "4.8 stars — 340 reviews") placed directly below the hero stats would do more for conversion than any design tweak. Pull 2–3 short testimonials from Google Reviews and add a testimonial strip between the CTA strip and the contact section. Use real names and first names only. This is the single highest-impact improvement available.

### 2. Add a swipe affordance to the services carousel
Add scroll-position dots below the service cards (4 dots, active state highlights). Replace the centred arrow buttons with edge-anchored buttons (left/right sides of the track) that are more naturally discoverable. Optionally add a "Swipe to explore" label in small text beneath the section header on mobile only.

### 3. Add a face and an origin story image
Include one photograph of owner Eric Schmidt — in the legacy/about section, next to the existing paragraph that mentions his name. Swap or supplement the about-us image (currently showing property/team generically) with a portrait or candid shot. Local businesses earn trust through people, not just acreage.

### 4. Add a concrete seasonal event or promotion to the events card
The events service card currently has no specific content — just a generic description and a link to the main site. For spring 2026, add the next actual event: date, name, brief description. Even one line ("Mother's Day Flower Market — May 10") gives a homeowner a reason to return.

### 5. Invert the contact section stacking order on mobile
On 375px screens, the contact grid stacks info above map. But the contact details (hours, phone, address) should appear first — then the map. Currently `.contact__info` precedes `.contact__map` in the HTML which means hours/phone IS first — verify this is rendering correctly at 375px. If the map is appearing above the info on some builds, add an explicit `order: -1` to `.contact__info` within the mobile media query to guarantee the ordering.

Additionally, add a "Get Directions" button linked to `https://maps.google.com/?q=745+Schuylkill+Road+Phoenixville+PA` directly in the contact info block. Many mobile users want one tap to navigate — do not make them interact with the embedded iframe.

---

## Summary

This is a competent, well-intentioned v2 build. The code quality is above average, the design language is appropriate, and the content is real. The site does not look AI-generated — the typography and palette choices show genuine taste. What is holding it back is the absence of social proof, the lack of any human element in the imagery, some redundant content repetition, and a services carousel that a mobile user will not know how to navigate. Fix those five items and this is a 7.8–8.0 site.
