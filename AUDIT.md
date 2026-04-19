# Colonial Gardens — Nigel Audit v11
**Score: 8.7 / 10**
**Previous score: 8.6 (v10)**
**Delta: +0.1**

---

## Overall Assessment

Eleven cycles in. The v11 pass addressed all three v10 priorities plus two bonus fixes. The hero subheadline is now warm and grounded ("Trusted by Phoenixville since 1967 — because good plants and good advice never go out of style"). The testimonials CTA lead-in text is now specific ("Join 340 neighbors who trust Colonial Gardens"). The hero stats trio is now coherent — all three figures are business-level credentials. The form submit button reads "Request a Consultation" rather than the impersonal "Send Request." The open-bar at 375px now shows only "Open now" or "Closed now" via JS, eliminating the ellipsis truncation issue.

These are genuine, visible improvements. A first-time visitor notices the hero copy. A visitor reaching the testimonials section notices the more specific CTA. The stat changes are front-and-centre. The delta is +0.1 and it is earned. However, the site has now addressed all low-hanging fruit from the first ten cycles. The remaining gaps require structural decisions rather than copy tweaks or CSS patches — which raises the difficulty of the next increment.

---

## Section-by-Section Breakdown

### 1. Design Quality and Visual Polish — 8.7
The palette, grain texture, botanical token system, and overlay hierarchy remain strong. No regression. The amber glow on CTAs, the green-to-amber progress bar, and the legacy badge glass-morphism are all consistent and well-executed.

One desktop observation that persists: the contact section 3-column grid at wide viewports. The map column now uses `flex: 1` and `height: 100%` inside the map-wrap, which should resolve the uneven-bottom issue flagged in v10. However the 1000px responsive rule drops the contact to a single column and forces the map to `height: 340px`. Between 1000px and 1200px (laptop viewports), the three-column layout has been abandoned in favour of a single column — meaning the desktop alignment fix only benefits users at very wide viewports. Laptop users (the majority of desktop traffic) will see a single stacked column, which is fine functionally but not what was envisioned.

### 2. Mobile UX at 375px — 8.5
The open-bar at 375px is now correct: JS sets the text to "Open now" or "Closed now" only when `innerWidth <= 480`, avoiding the ellipsis truncation. The season text and divider are hidden via CSS. The call link is `flex-shrink: 0` and `white-space: nowrap`. This works.

Hero CTAs stack correctly with `flex-direction: column`. Font size minimums are met throughout. Tap targets are 44px minimum. The hero stats at 375px use `font-size: 26px` which is readable but slightly cramped at 3 stats across 375px — not a minimum violation, just visually tight.

One persistent mobile UX gap: the legacy/about section at 375px shows the property photo at `height: 420px` with the Est. 1967 badge repositioned to top-right. The badge works. The owner card ("ES / Eric Schmidt / Owner & Head Grower") at bottom-left also works. However the badge and card compete for the photo on a narrow screen — the "1967" badge sits top-right and the owner card sits bottom-left, which is a considered layout choice, but at 375px the photo itself is cropped to a landscape strip and neither overlay element is particularly impactful. This is a low-priority note, not a blocking issue.

### 3. Scroll Interactions and Animations — 8.7
No regression. All animations continue to function: Ken-Burns hero, reveal/reveal-group/reveal-scale on scroll, greenhouse bridge leaf draw-in, parallax on legacy image, card tilt on plant-now cards, scroll progress bar. `prefers-reduced-motion` is fully respected. The warm glow breathing animation on the testimonials CTA, hero CTA, and CTA strip CTA remains consistent across all three touchpoints.

### 4. Content Quality and Relevance — 8.9
Hero subheadline fix is the standout improvement this cycle. "Trusted by Phoenixville since 1967 — because good plants and good advice never go out of style" is warm, specific, and confident without being defensive. It replaces the mildly antagonistic "since before you were born" and reads substantially better.

All business data remains accurate: 745 Schuylkill Rd, Phoenixville PA; 610-948-9755; Eric Schmidt owner; 1967 founding; Mon–Sat 8am–6pm, Sun 9am–5pm. The "What to Plant Now" section is seasonally appropriate for April in Zone 6b. The upcoming event callout (Mother's Day Plant Sale, May 10–11) is timely and specific.

The scout report notes additional business details (greenhouse dimensions, weddings/events, full-service florist with delivery radius) that are not yet surfaced on the page. These represent future content opportunities, not present deficiencies.

### 5. Form Functionality — 8.7
Formspree integration is correct. The submit button now reads "Request a Consultation" — markedly warmer and more specific than the previous "Send Request." Success banner, form hiding on redirect, JS validation for name and contact — all working. `autocomplete="off"` on the phone/contact field continues to prevent the iOS keyboard issue.

### 6. Center Alignment Consistency on Mobile — 8.3
Hero: centred correctly. Trust bar: flex-wraps cleanly. Greenhouse bridge: text centred. Seasonal cards: 1fr column at 375px with amber pills left-aligned, which is correct. Contact: single column with info before form before map, as intended.

One subtle issue at 375px: the `contact__welcome` text is hidden via `display: none` at 480px. This means the "No appointment needed — just walk in" message disappears on mobile. The copy was reassuring and the trade-off (freeing vertical space for critical contact details) is defensible, but a visitor who reads the contact section on mobile is deprived of the warm framing text. Consider replacing with a shorter version (one sentence) rather than hiding entirely.

### 7. Image Quality — 8.6
No duplicate images detected. Seasonal wide card (dahlia, Unsplash photo-1444021465936-c6ca81d39b84) remains distinct from the garden center service card. Hero image uses `fetchpriority="high"` and 2400px source. All other images are `loading="lazy"`. No broken images identified from the code.

### 8. Typography Hierarchy — 9.0
Unchanged and remains the craft high point. Playfair Display / DM Sans pairing. Section eyebrows at 12px/500/0.14em. Section titles with `clamp()`. Italic em on section titles. Line heights appropriate throughout. All minimum font sizes (12px) are met.

### 9. Color Palette Consistency — 9.0
Token system is complete and internally consistent. `--review-bg` and `--review-border` are declared as tokens. No rogue hex values detected outside the token system. The amber/green/earth-tone semantic structure is coherent across all sections.

### 10. CTA Effectiveness — 8.8
The testimonials CTA lead-in text ("Join 340 neighbors who trust Colonial Gardens") is now specific and leverages social proof effectively. This is the correct way to frame a CTA following two detailed positive reviews. The button "Plan Your Visit" with amber glow matches the other primary CTAs in the site.

Five CTA touchpoints remain: hero (amber, breathing glow), services cards (amber per card), CTA strip (dark green section, amber button), testimonials (warm glow button), contact form (amber submit). Coverage is appropriate.

The CTA strip headline "Ready to transform your outdoor space?" is functional but generic. At some point this would benefit from the same sharpening applied to the testimonials CTA — something more specific to what Colonial Gardens actually does ("Ready to landscape your yard with a team that's done it for 40 years?"). Not a priority for this cycle.

### 11. Greenhouse Bridge Element — 8.5
No regression. Desktop: leaf SVG draws in on scroll, veins fade in after 0.9s. Mobile: leaf hidden, amber accent bar and italic text centred. Both working as designed.

### 12. Dynamic Open/Closed Badge — 8.7
The open-bar JS now correctly sets narrow-screen text: `window.innerWidth <= 480` check produces "Open now" or "Closed now" only, with no hours text appended. The contact section badge continues to use `getEtOpenState()` consistently. Timezone handling (America/New_York) remains correct.

One edge case: the `initOpenBar()` function runs once on page load. If a user leaves the tab open across the open/close boundary (e.g., has the site open at 5:55pm and is still browsing at 6:05pm), the badge will display stale state. This is a very minor edge case that requires a polling approach or `setInterval` to fix — not a priority.

### 13. Hero Stats Coherence — 8.7
Fixed. The three stats are now "58 Years in PA" / "40+ Yrs landscaping" / "340+ Google reviews." All three are business-level credentials that read as a coherent statement of authority. The previous "1 Year Warranty" was a misfit at that scale — this is substantially better.

---

## Top 3 Priorities for Improvement

### Priority 1: Contact section alignment at laptop widths (1000–1200px)
The desktop contact grid fix in v11 benefits very wide viewports. At the most common laptop widths (1000–1200px), the responsive CSS has already collapsed the grid to a single column (the `@media (max-width: 1000px)` rule). This means the 3-column layout that was architecturally corrected in v11 is only visible above 1000px. Consider raising the breakpoint at which the single-column kicks in (e.g. to 768px), so that the 3-column layout is visible at 1024px and 1280px. This would require restructuring the map to sit below the info/form pair at mobile rather than as a third column at tablet — but the result would give the majority of desktop users the full layout, not just 4K monitors.

### Priority 2: Restore a trimmed version of the contact welcome text on mobile
The `contact__welcome` paragraph ("No appointment needed — just walk in. Our staff genuinely loves to talk plants, so come with questions.") is hidden entirely at 480px. The copy is warm and builds confidence at the moment a visitor is deciding whether to call or visit. Consider replacing the `display: none` with a max-height truncation showing a single sentence: "No appointment needed — just walk in." The hours and address are still the priority, but the friendly framing sets the right tone for the section.

### Priority 3: Replace the CTA strip headline with something specific to Colonial Gardens
"Ready to transform your outdoor space?" appears on thousands of landscaping websites. At this stage of the site's refinement, the copy quality gap between the CTA strip headline and the rest of the site is noticeable. A replacement that uses the actual Colonial Gardens voice — "Forty years of landscaping in Phoenixville. Ready to start yours?" or "From free consult to full install — we do it all and back it with a one-year guarantee." — would make the section feel as considered as the testimonials, legacy, and hero now do.

---

*Audit conducted by Nigel — v11 — 2026-04-18*
