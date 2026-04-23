# Colonial Gardens — Nigel Audit v20
**Score: 9.2 / 10**
**Previous score: 9.1 (v19)**
**Delta: +0.1**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

All three priorities from v19 were addressed and most landed well. Phone numbers in every service panel were added cleanly — discreet, tasteful, contextually appropriate. The Google reviews link below the testimonials section is in place and functional. The trust bar upgrade from "Expert staff" to "40+ years of landscaping expertise on staff" is a meaningful specificity improvement that a homeowner can actually weigh. The hero sub-text amber highlight on "good plants and good advice" adds a punctuation of warmth without disrupting readability at the 95% opacity body colour.

The botanical divider between legacy and seasonal is a small but correct editorial detail — it gives the eye a breath between two dense sections without the heaviness a full-bleed band would carry. The tablet two-column breakpoint in the contact section prevents the awkward stacking that existed before. The greenhouse bridge copy improvement is functional.

The one meaningful caveat this cycle: the Petunias and Impatiens tile image was replaced, but replaced with `photo-1563241527-3004b7be0ffd` — the same Unsplash ID already serving the Florist panel further up the page. The alt text describes "colorful petunias and impatiens in garden containers" but the image is a cut floral arrangement, identical to what appears in the Florist service panel. A visitor scrolling the full page will see the same photograph in two different contexts with two different captions. The issue is less severe than a lily-in-vase but it remains unresolved. This prevents more than a +0.1 bump.

At 9.2, the site is operating at or very near the practical ceiling for a single-page static build. The remaining gaps are editorial and media quality problems, not structural ones.

---

## Section Scores

### Hero — 9.2/10
No regression. Ken-burns entrance, amber CTA glow, stat row, star badge — all intact. The hero sub-text opacity lift to 95% is a quiet improvement; the text reads more confidently now. The amber highlight on "good plants and good advice" gives the eye a landing point in an otherwise monochrome body line. Mobile CTA swap is correct. No issues.

### Open Status Bar — 9.0/10
Live ET open/closed state with pulsing green dot is working correctly. Seasonal hook "Spring is here — Shop annuals & perennials" is correct for April 2026. Amber call link visible and functional. No changes; no regression.

### Trust Bar — 9.0/10
Upgraded from v19. "40+ years of landscaping expertise on staff" is materially better than "Expert staff" — it is a specific, verifiable claim that a homeowner with a mature property can calibrate against. The four stats now provide: local origin, family ownership, service (free consultations), and expertise tenure. This is a complete trust proposition. Up from 8.8.

### Greenhouse Bridge — 8.7/10
The updated copy — "acres of covered space, new arrivals every week, all season long" — is stronger than what it replaced. The animated leaf SVG on desktop remains a pleasant micro-moment. The mobile fallback (amber accent bar above the text, leaf hidden) is sensible. Minor increment from 8.6.

### Services Sticky Scroll — 9.1/10
Scroll budget equalization (each panel now receives an equal 69vh-ish allocation) is correct. The previous arrangement gave the Events panel disproportionate dwell which created a sense that something was stuck. Panel images, copy, and routed CTAs are unchanged and still verified correct. Phone links — "or call 610-948-9755" — sit below each CTA in quiet grey, meeting the intent without visual intrusion. Exactly the right execution. Up from 9.0.

### About / Legacy — 8.9/10
No change from v19. Est. 1967 badge, ES monogram card, Eric Schmidt blockquote, parallax image, pillar grid all intact. Still the most locally grounded section on the page.

### Botanical Divider — added this cycle
The leaf-and-line motif between legacy and seasonal is restrained and correct. The SVG leaf uses stroke-only paths which match the light, botanical visual vocabulary of the surrounding sections. The amber is not used here, which is the right call — the divider is a pause, not a feature. Good addition.

### Seasonal Highlights — 9.0/10
No change in images or copy. Alternating rows, hover scale, locally specific body copy (Chester County conditions, Memorial Day rush) — all intact.

### Plant Now Magazine Grid — 8.8/10
Three of four tiles are image-correct. The remaining issue:

**Tile 2 (Petunias and Impatiens):** The replacement image is `photo-1563241527-3004b7be0ffd` — the same Unsplash ID used for the Florist service panel earlier in the page. The image is a cut floral arrangement, not a bedding annual in a garden or container. The alt text claims "colorful petunias and impatiens in garden containers" but a visitor who has seen the Florist panel will recognise the identical photograph. This is an improvement on a lily-in-vase (the previous error was more jarring) but the mismatch persists. A true fix requires a photograph of massed petunias or impatiens in an outdoor garden setting — not a florist image repurposed.

### CTA Strip — 9.0/10
"58 years of helping Phoenixville grow — let's plan your next project." remains locally credible and well-placed. No changes; no regression.

### Testimonials — 9.2/10
The Google reviews link — "See all 340 reviews on Google" — is now present and correctly placed below the marquee section. This was Priority 2 from v19 and it is properly resolved. The link styling (muted grey, 13px, hover to green) is appropriately understated — it does not compete with the testimonials themselves but gives the sceptical visitor a verification path. Up from 9.1.

### Contact — 9.0/10
The tablet two-column breakpoint (960px to 601px: info + form side by side, map spanning full width below) is correctly implemented. This prevents the awkward three-column collapse to one-column that previously occurred at 768px. The form, map, and open badge all function correctly. Up from 8.8.

### Footer — 8.7/10
Dark green, six-link nav, hours, address, social icons with correct Facebook and Instagram URLs, copyright 2026. Amber gradient accent bar at top. No changes; no regression.

### Mobile Responsiveness — 8.8/10
Breakpoint coverage is thorough. The contact section tablet breakpoint addition is the only structural change and it improves the mid-range experience meaningfully. No new mobile regressions. Minor increment from 8.6.

### Performance and Technical — 9.0/10
No changes to the technical infrastructure. Schema, fetchpriority, lazy loading, rAF throttling, prefers-reduced-motion, ARIA labels, and live open-state refresh all continue to function correctly.

---

## Image Audit Summary

| Image | Context | Status |
|---|---|---|
| Hero (garden path with roses) | Hero background | CORRECT |
| Garden Center panel (annuals photo) | Garden Center services | CORRECT |
| Landscaping panel (moss garden) | Landscaping services | ACCEPTABLE |
| Florist panel (photo-1563241527) | Florist services | CORRECT |
| Events panel (pergola at dusk) | Events/gatherings | CORRECT |
| Seasonal Row 1 (annuals, own photo) | Annuals & Perennials | CORRECT |
| Seasonal Row 2 (seedling starts) | Vegetables & Herbs | CORRECT |
| Seasonal Row 3 (cherry blossom tree) | Trees & Shrubs | CORRECT |
| Plant-now Tile 1 (dahlia bloom) | Dahlias & Summer Bulbs | CORRECT |
| Plant-now Tile 2 (photo-1563241527 — same as Florist panel) | Petunias & Impatiens | **DUPLICATE / MISMATCH** |
| Plant-now Tile 3 (red poppies meadow) | Native Pollinators | CORRECT |
| Plant-now Tile 4 (cherry blossom branches) | Trees & Shrubs strip | CORRECT |

10 of 12 images correct. 1 duplicate image serving mismatched context.

---

## Ceiling Assessment

At 9.2, the site is approaching the practical ceiling of what a single-page static build can deliver for a local garden centre. The score could reach 9.4 with one round of focused corrections. Beyond that, meaningful gains require structural additions (pricing, gallery, a real hours-aware booking widget, or integration with the main CMS), not further styling refinement.

The three gaps preventing 9.4+ are:
1. The Petunias tile duplicate image — the only remaining editorial credibility error
2. The landscaping panel image alt text references "stone path" that is not visible in the image — minor but technically inaccurate
3. The consultation form submits to Formspree but the dropdown only goes as specific as "Landscaping design & install" — a homeowner asking about a specific plant or tree would benefit from a more granular option set

---

## Top 3 Priorities

### 1. Replace the Petunias and Impatiens tile with a true bedding annual image
The current image (`photo-1563241527-3004b7be0ffd`) is a cut floral arrangement — the identical photograph already in use for the Florist service panel. A visitor who sees both will recognise the duplication. More critically, it does not show what the copy describes: petunias and impatiens growing in a garden, hanging basket, or container. Replace with a photograph of massed annuals in an outdoor setting. Suggested Unsplash searches: "petunias hanging basket," "summer annuals garden border," "impatiens shade garden." Any image showing actual bedding plants in soil, a pot, or a window box will correct this.

### 2. Fix the Florist panel image to use a unique photograph
Once the petunias tile is corrected, the Florist panel (`photo-1563241527-3004b7be0ffd`) should be reviewed and ideally replaced with a different floral arrangement image so that no two tiles on the page share the same photograph. The page currently has a one-to-two mapping problem on that Unsplash ID.

### 3. Strengthen the Plant Now section CTA into a seasonal urgency prompt
The current CTA beneath the plant-now grid says: "Not sure what works in your yard? Stop in — our staff answers plant questions all day, every day." This is soft. At this point in the scroll, a homeowner who has read four tiles about specific plants is either ready to come in or is looking for a reason to hesitate. A tighter, seasonal-urgency CTA — "Peak selection is now — come in before Memorial Day" with a phone link alongside the button — would sharpen the conversion moment. The existing "Plan Your Visit" button is correct but the surrounding copy can work harder.

---

*Audit by Nigel. Scored strictly from the perspective of a Phoenixville, PA homeowner.*
