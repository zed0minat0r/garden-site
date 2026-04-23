# Colonial Gardens — Nigel Audit v16
**Score: 8.4 / 10**
**Previous score: 8.7 (v15)**
**Delta: -0.3**
**Live link:** https://zed0minat0r.github.io/garden-site/

---

## Overall Assessment

The major section rebuilds represent genuine editorial ambition and several of them land well. The trust bar prose and the plant list are clear improvements over what preceded them. However, the sticky services section introduces a structural tension — four full-screen panels each commanding 100vh of scroll travel creates a disproportionately long page commitment for a local garden centre visitor, and the cohesion problem between the new editorial sections and the remaining card sections has not been resolved. The site no longer feels as confident as its 8.7 score implied.

---

## Section Scores

### Hero — 8.5/10
Strong. The Ken-Burns image, the warm amber CTA glow, the stat bar, and the Google reviews badge are all doing real work. The headline "Where Gardens Come to Life" is generic but acceptable for this category. The ghost call button is a sensible secondary action. The eyebrow flanking lines are a nice typographic touch. No headshot, which is correct.

Minor deduction: the hero sub-copy ("Trusted by Phoenixville since 1967 — because good plants and good advice never go out of style") is slightly self-congratulatory in structure and the em-dash placement is awkward at line breaks on mid-range screens.

### Trust Bar — 8.0/10
The pivot from icon circle cards to a single typographic prose sentence is correct and the result is meaningfully cleaner. Playfair italic at 1.1–1.4rem on the green-wash background reads with appropriate restraint. The bullet separator in amber is a smart flourish.

Deduction: the four sentences are oddly weighted. "Open 7 days a week" is weaker than the other three claims and reads as filler. "Proudly rooted in Phoenixville" is the strongest — it should be first or last, not buried third.

### Greenhouse Bridge — 7.0/10
The animated leaf SVG drawing in on scroll is a clever idea but the bridge section itself is thin and the copy ("Walk the greenhouse — acres of covered growing houses stocked fresh every week") is slightly mechanical. "Growing houses" is jargon a homeowner would not use. The leaf vein animation is invisible at quick-scroll speeds. The section adds padding without adding meaning for a first-time visitor.

### Services — Sticky Scroll Panels — 7.5/10
**Concept:** Excellent. Full-screen sticky panels with scroll-driven crossfade is the right move for a multi-service business with four distinct offerings. The JS implementation is clean and correct — rAF-throttled, no redundant DOM writes, proper panel indexing, dvh for mobile.

**Execution problems:**
1. 400vh scroll travel is too long for a local garden centre visit. A homeowner searching for a florist or landscaper is likely on mobile, probably in the car park or on a lunch break. Making them scroll through the equivalent of four full-screen pages just to see the four services creates abandonment risk. 300vh (75vh each) would suffice.
2. The progress dots are positioned 28px from the bottom — on mobile (375px), this conflicts with browser UI chrome when using address bar overlay. Should be at minimum 40px.
3. The teal overlay on the Events panel (`rgba(6,18,20,.82)` at bottom) is excessively dark. The photo loses almost all visual information below mid-point. The other panels have better balance.
4. All four panel CTAs link to the same URL (`colonialgardenspa.com`). From a user perspective this is correct behaviour, but the text — "Shop the Greenhouse," "Get a Consultation," "Order Flowers," "See Upcoming Events" — implies differentiated destinations. A Phoenixville homeowner clicking "Get a Consultation" and landing on the generic homepage will feel friction.

### About / Legacy — 8.5/10
Genuinely strong. The two-column layout, the about image with the Est. 1967 badge overlay and the Eric Schmidt monogram card, the blockquote in dark green, the faint "1967" watermark in the background — these all work. The copy is honest and specific. The parallax on the legacy image is smooth. The pillar grid (2x2 checklist items) is functional if slightly generic.

One issue: "Sustainability-focused" in the pillars is a claim unsupported anywhere else on the page. It reads as template-generated. Remove it or substantiate it.

### Seasonal Cards — 6.5/10
This is the most visibly under-rebuilt section. The card grid with image-top, title, text, and button is precisely the format a user would expect from any Wix or Squarespace garden template. It is identifiable as AI-generated layout at a glance.

Specific problems:
- All three cards have identical CTA text ("Visit the Nursery") linking to the same anchor. There is no reason to have a CTA button if all three say the same thing.
- The "wide" featured card layout is sound in structure but the image (annuals-perennials-sq.jpg) is a square crop being rendered in a 280px tall rectangle — at certain viewport widths it looks squashed.
- The veggie and herb card uses an Unsplash photo of a generic herb garden that does not look like Colonial Gardens.
- "Spring 2026," "Now Available," "Spring Planting" as season labels are inconsistent in format. Pick one convention.

### What to Plant Now — 8.5/10
The numbered editorial list (01–04 with hairline rules) is the best section rebuild. It is typographically distinct, content-led, and appropriate for the audience — a Phoenixville homeowner wants to know what to plant in April, not read another grid of cards. The serif numerals in green-pale at 52px are a confident design choice. The plant descriptions are accurate and locally specific (PA soil, last frost date, zones).

Minor: the tag pills (amber bordered, all-caps, 11px) sit awkwardly at baseline alignment with 26px serif headings at small screen widths. On 375px the `flex-wrap` causes the tag to drop to its own line, which actually reads better but isn't intentional.

### CTA Strip — 7.5/10
The dark green band with the amber glowing phone button is a proven conversion pattern and is correctly placed before testimonials. The copy ("58 years of helping Phoenixville grow") is local and credible. The section is not exciting but it is competent.

### Testimonials — 7.0/10
The featured pullquote in the dark green panel is strong. The four testimonial cards beneath it are the other unrebuilt section. They suffer from the same card grid genericness as seasonal. The problem is not the cards themselves — it is the monotony of four identical rectangles with stars, quote, name. They read as template.

The content is good: specific locations (Collegeville, Spring City, Royersford, Kimberton), specific services, the 4-star honest review from Kevin L. is a particularly credible touch. The content earns more than the format delivers.

### Contact — 8.5/10
Three-column layout (info, form, map) is a generous allocation of space and the form itself is clean. The consultation form with Formspree integration and the success redirect are properly implemented. The live open/closed dot badge updating on a 60-second interval is a thoughtful feature. The Get Directions CTA button at full width on the map panel is a sensible addition. Google Maps embed is present.

One issue: the contact grid collapses to single column only at 768px. At around 900px–1000px on iPad landscape, the three-column layout with the consultation form and map all visible simultaneously becomes cramped, particularly around the select dropdown.

### Footer — 8.0/10
Clean. Logo, tagline, nav links, hours, address, social, copyright. The amber accent gradient at top is a nice transition. Nothing missing, nothing excessive.

### Mobile UX at 375px — 7.5/10
The centre-alignment block at the bottom of the CSS is thorough and most sections align correctly. Specific observations:

- Services panels: heading scales correctly to clamp(26px, 8vw, 44px). Progress dots at 20px bottom on mobile are borderline — acceptable but tight with iOS chrome.
- Trust bar: wraps cleanly, bullet separators survive.
- Plant list: 48px column + 32px num works at 375px. Tags occasionally wrap.
- Open bar: the flex-nowrap at 480px is correct. The text-overflow ellipsis on the status text means "Open now — Mon–Sat 8am–6pm • Sun" gets truncated to "Open now —" on narrow screens, which is incomplete but functional.
- Hero reviews badge: the `flex-wrap` and `text-align: center` fixes are in place and work.
- Seasonal cards: single column, centred content, works.

The mobile hamburger menu (full-screen dark green overlay) is well-implemented and the menu items at 22px are comfortably tappable.

---

## AI-Generated Assessment

**Does it look AI-generated?** Partially yes, partially no.

**No longer feels AI-generated:**
- The trust bar prose sentence
- The plant list numbered editorial format
- The sticky services panels concept
- The legacy section with the monogram card
- The Eric Schmidt quote and business-specific copy throughout

**Still feels AI-generated:**
- The seasonal cards section (image-top card grid with identical CTAs)
- The testimonial cards grid (four identical rectangles)
- The greenhouse bridge copy ("growing houses stocked fresh every week")
- The hero sub-copy structure

The site is in the middle of a meaningful evolution from template to editorial. The new sections are genuinely better. The old sections drag it back.

---

## Top 3 Priorities

### 1. Rebuild seasonal cards — replace the card grid with an editorial format
The three seasonal cards are the most obviously generic element still on the page. An editorial approach — perhaps a two-column text-plus-image alternating layout, or a single editorial panel per seasonal highlight — would match the quality of the plant list and services panels. At minimum: remove the three identical "Visit the Nursery" buttons (they add no information) and use a single section-level CTA instead.

### 2. Reduce services scroll travel from 400vh to 300vh and fix the Events panel overlay
The sticky services section is 400 viewport-heights long. For a visitor on a phone who wants to see whether Colonial Gardens does landscaping, this is an unnecessary commitment. Reducing to 300vh (75vh per panel, triggered at 25% each) is a simpler UX. Additionally, the Events panel overlay at 82% opacity erases too much of the photo — pull back to 68% to restore visual presence.

### 3. Rebuild testimonial cards — break the four-identical-rectangles format
The featured pullquote already works. The four cards beneath it don't earn their length. Consider a masonry or staggered layout that varies card widths and gives the most specific testimonials (Kevin's 4-star, Tom's landscaping install) more room to breathe visually. Alternately, convert to a horizontal scroll/strip format that breaks the grid monotony without removing the content.

---

*Audit by Nigel. Scored strictly from the perspective of a Phoenixville, PA homeowner.*
