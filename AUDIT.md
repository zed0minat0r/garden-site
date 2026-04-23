# Colonial Gardens — Nigel Audit v19
**Score: 9.1 / 10**
**Previous score: 8.9 (v18)**
**Delta: +0.2**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

The image audit was overdue and it has paid off. Nine of ten Unsplash images now match their context correctly. The testimonials section finally delivers genuine scroll-snap on mobile — not just a hint label on top of a CSS marquee, but actual `scroll-snap-type: x mandatory` with proper discrete advancement, duplicate set hidden on small screens, and separators correctly suppressed. The service panel CTAs now route to real colonialgardenspa.com destination pages. The runway was trimmed from 425vh to 375vh. The plant-now section is rebuilt as a magazine spread with four structurally distinct tiles.

These are not cosmetic changes. Wrong images undermine trust with local homeowners more than almost any other failure — it signals that nobody is paying attention. Correct images restore confidence. The mobile testimonials fix resolves a genuine deception that existed in v18. Routed CTAs complete the user journey. The site is materially better across four distinct dimensions.

One image mismatch remains: the Petunias and Impatiens tile in the plant-now section shows a cut lily in a studio vase — a florist image, not a garden annual. It is the one residual error from this audit cycle and it prevents a higher score.

A Phoenixville homeowner arriving at this page in April 2026 would find a confident, coherent experience with credible images, working interactions, and locally specific content. They would not bounce on first impression.

---

## Section Scores

### Hero — 9.2/10
The garden path image with blooming roses and lush hedges is correctly matched and sets the right emotional tone — this is a place where plants are taken seriously. Ken-burns scale animation on load is tasteful and imperceptible to most visitors. Amber CTA breathes with warm glow; the animation is restrained, not desperate. Stat row — 58 years, 40+ years landscaping, 340+ Google reviews — gives a local homeowner three verifiable trust signals before they read a word of copy. The 4.8-star pill badge reads premium. Mobile CTA swap (Hours & Directions at 480px, Shop the Greenhouse at desktop) is context-appropriate. No issues.

### Open Status Bar — 9.0/10
Still the most immediately useful element on the page for a homeowner deciding whether to drive over. Live ET open/closed state with pulsing green dot. "Spring is here — Shop annuals & perennials" seasonal hook is correct for April 2026. The amber call link is visible without being aggressive. No issues.

### Trust Bar — 8.8/10
Serif italic prose, amber bullet separators, "Proudly rooted in Phoenixville" leading — all correct. Four short statements cover the essential differentiators. The only observation: all four are claims any competent independent garden center could make. The bar would be stronger with one specific, surprising signal — total square footage of greenhouse space, or number of plant varieties, or number of years the head grower has been on staff. As is, it earns trust without earning curiosity.

### Greenhouse Bridge — 8.6/10
Animated leaf SVG drawing in on scroll is a pleasant micro-moment. Copy has been updated to "new arrivals every week, all season long" which is better framing than the previous inventory-language version. The element functions as a visual pause between trust bar and services. No issues.

### Services Sticky Scroll — 9.0/10
All four panels verified by image inspection:
- Garden Center: Colonial Gardens own annuals photo — CORRECT
- Landscaping: Naturalistic moss and planted garden — acceptable for landscaping context; alt text references "stone path" which is not present, but the overall impression is correctly that of a tended private garden
- Florist: Peach and blush bouquet with eucalyptus ribbon — CORRECT and atmospheric
- Events: Pergola with string lights at dusk — CORRECT and genuinely evocative

CTAs now link to colonialgardenspa.com/garden-center/, /landscaping/, /florist/, and /events/ respectively. This was Priority 2 from v18 and it is properly resolved. Runway at 375vh is more appropriate than the previous 425vh — the Events panel still gets proportionally more dwell without the mobile scroll-captivity that 425vh created. Progress dots clear iOS chrome at 44px from bottom.

### About / Legacy — 8.9/10
Est. 1967 badge with green-glow numerals, "ES" monogram owner card at bottom-left, Eric Schmidt blockquote ("We're not a big-box store and we never will be"), parallax image, ghost "1967" watermark in background — all intact and well-executed. The four pillar tiles are correctly proportioned. The about section reads as genuinely local without feeling forced. No regression from v18.

### Seasonal Highlights — 9.0/10
All three rows verified:
- Annuals & Perennials: Colonial Gardens own greenhouse photo — CORRECT
- Vegetables & Herbs: Seedling starts in peat trays — CORRECT; specifically communicates "we grow our own" better than a generic vegetable image would
- Trees & Shrubs: Cherry blossom tree from below — CORRECT and beautiful for spring

Alternating layout with hover image scale is refined. Copy is locally aware: "Chester County conditions," "before the Memorial Day rush." No issues.

### Plant Now Magazine Grid — 8.7/10
The magazine-spread layout — four structurally distinct tiles — is the most ambitious new design element on the page. Three of four tiles are correctly matched.

Image verification results:
- Tile 1 (Dahlias & Summer Bulbs): Close-up dahlia bloom — CORRECT, richly textured
- Tile 2 (Petunias & Impatiens): **MISMATCH.** The image is a pink lily cut stem in a glass vase against a plain white studio background. A lily is not a petunia or impatiens. More critically, this is a cut flower in a vase — not a garden plant at all. A homeowner glancing at this tile receives a florist impression, not a garden annual impression. The image needs to be replaced with something showing massed bedding petunias or impatiens in a garden or container setting — colourful, bushy, in soil.
- Tile 3 (Native Pollinators): Wild red poppies meadow in full sun — CORRECT, punchy and visually dramatic
- Tile 4 (Trees & Shrubs): Cherry blossom branches against pale sky — CORRECT and elegant

The hero tile dark-background treatment with large serif type is strong. The overlay tile with gradient-over-image is the best compositional moment in the section. The strip tile with "04" editorial numeral is a confident, magazine-derived choice. One mismatch prevents this from scoring higher.

### CTA Strip — 9.0/10
"58 years of helping Phoenixville grow — let's plan your next project." is local, specific, and credible. Sub-copy addressing the most common homeowner hesitation ("free in-store consultation, no commitment") is the right message at this scroll depth. The amber CTA against the dark green field glows appropriately. The radial gradient blob decorations add depth without visual noise.

### Testimonials — 9.1/10
The most improved section since v18. The scroll-snap implementation on mobile is now genuine: `scroll-snap-type: x mandatory` on the wrap, `scroll-snap-align: center` on each tile, duplicate aria-hidden set hidden on mobile, separators suppressed, animation removed at 600px. A homeowner on an iPhone swiping through testimonials will now advance quote by quote as the hint promises. This was Priority 1 from v18 and it is properly resolved.

Six testimonials covering all four service lines with specific, credible detail (herb varieties, landscaping warranty, florist colour palette matching). Desktop continuous marquee with edge fade mask continues to perform correctly. The 4.8 / 340 Google reviews rating badge is well-placed. One remaining gap: no link to the actual Google Reviews listing. A sceptical homeowner who wants to verify 340 reviews must open Google manually.

### Contact — 8.8/10
Three-column grid (info / form / map) is clean and functional. Live open/closed badge mirrors the top bar. Consultation form with Formspree integration and category dropdown is correctly structured. Get Directions button with green border hover-fill is appropriate. Success state on form submission works correctly. Minor concern: the map embed uses placeholder coordinates in the iframe src — worth verifying the pin lands precisely on 745 Schuylkill Road and not on an approximated position.

### Footer — 8.7/10
Dark green, six-link nav, hours, address, social icons (Facebook and Instagram with correct URLs), copyright 2026. Amber gradient accent bar at top. All functioning. No issues.

### Mobile Responsiveness — 8.6/10
Breakpoints are handled throughout: single-column seasonal rows at 900px, plant-spread tiles collapsing at 900px, testimonials snap at 600px, contact welcome text trimmed at 480px, hero reviews badge wrapping at 375px. Mobile-first hero CTA is correct. Services runway at 375vh is a meaningful improvement from 425vh but still represents meaningful scroll commitment on a small device. The three-column contact section collapsing to single column on mobile creates a long vertical stack — tightening the column gaps or combining form and info into a two-column layout at an intermediate breakpoint would help.

### Performance & Technical — 9.0/10
- Structured data (LD-JSON GardenStore schema) is complete and accurate
- fetchpriority="high" on hero image, loading="lazy" elsewhere — correct
- Two font weights per family loaded — sensible
- requestAnimationFrame throttling on all scroll listeners
- prefers-reduced-motion respected throughout for all animations
- Skip link for keyboard users
- ARIA roles and aria-hidden used correctly on service panels, progress dots, duplicate testimonials
- Live open/closed state refreshes every 60 seconds — handles stale tabs correctly

---

## Image Verification Summary

| Image | Context | Status |
|---|---|---|
| Hero (garden path with roses) | Hero background | CORRECT |
| Garden Center panel (annuals photo) | Garden Center services | CORRECT |
| Landscaping panel (moss garden) | Landscaping services | ACCEPTABLE |
| Florist panel (peach bouquet) | Florist services | CORRECT |
| Events panel (pergola at dusk) | Events/gatherings | CORRECT |
| Seasonal Row 1 (annuals, own photo) | Annuals & Perennials | CORRECT |
| Seasonal Row 2 (seedling starts) | Vegetables & Herbs | CORRECT |
| Seasonal Row 3 (cherry blossom tree) | Trees & Shrubs | CORRECT |
| Plant-now Tile 1 (dahlia bloom) | Dahlias & Summer Bulbs | CORRECT |
| Plant-now Tile 2 (lily in vase, white bg) | Petunias & Impatiens | **MISMATCH** |
| Plant-now Tile 3 (red poppies meadow) | Native Pollinators | CORRECT |
| Plant-now Tile 4 (cherry blossom branches) | Trees & Shrubs strip | CORRECT |

9 of 10 Unsplash images correct. 1 mismatch remains.

---

## Top 3 Priorities

### 1. Replace the Petunias & Impatiens tile image (Plant-now Tile 2)
The current image — Unsplash photo-1502977249166 — shows a single pink lily cut stem in a glass vase against a white studio background. A lily is not an annual, and a vase setting reads as florist content, not garden center content. The tile's purpose is to inspire homeowners to buy annuals for their garden. Replace with a photo showing petunias or impatiens in an actual garden setting: hanging baskets, window boxes, or a densely planted border. Suggested search terms: "petunias garden," "impatiens shade garden," "annuals bedding." This is the one remaining image error from this audit cycle.

### 2. Add a "Read all reviews on Google" link from the testimonials section
The site prominently cites 340 Google reviews and a 4.8 rating. A sceptical homeowner — the most valuable kind, because once convinced they are loyal — has no way to verify this without leaving the page and searching manually. A single anchor tag reading "See all 340 reviews on Google" placed below the rating badge or below the CTA button, linking to the Google Maps business listing, would close this gap. It costs nothing to add and directly addresses the verification need of a first-time visitor.

### 3. Add a phone number micro-link inside the services panels
A homeowner who has scrolled through 375vh of full-bleed service photography and is ready to call has no phone number visible during the entire services section. The amber CTAs link out correctly, but the impulse caller — particularly on mobile — wants to tap a number, not navigate to another site. A discreet "or call 610-948-9755" text link below each panel CTA would capture that conversion moment without cluttering the visual design. The amber link colour used in the open bar would be appropriate here.

---

*Audit by Nigel. Scored strictly from the perspective of a Phoenixville, PA homeowner.*
