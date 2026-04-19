# Colonial Gardens — Nigel Audit v9
**Score: 8.5 / 10**
**Previous score: 8.4 (v8)**
**Delta: +0.1**

---

## Overall Assessment

Nine build cycles in and this site is genuinely good. It reads like a real business, not a template. The palette is warm and consistent, the typography pairing (Playfair Display + DM Sans) carries editorial weight, and the scroll interactions are purposeful rather than decorative for decoration's sake. The jump from v8 to v9 is small but defensible — the greenhouse bridge element is a proper design decision, not a filler addition, and the mobile scroll rhythm work shows care. That said, the site has not crossed the threshold that would earn a higher score, and I will explain precisely why.

---

## Section-by-Section Breakdown

### 1. Design Quality and Visual Polish — 8.6
The warm botanical palette (deep greens, amber glow, cream) is applied with discipline. Token usage is thorough and consistent; no rogue colour values. The grain texture applied as an SVG background on section backgrounds is a sophisticated touch that prevents the flat, sanitised look common to AI-generated pages. The hero overlay vignette and gradient layering create genuine depth. The Ken-Burns scale animation on the hero image is well-calibrated at 10 seconds — not frantic, not imperceptible.

The amber breathing glow animation on hero CTAs is effective but on the edge: against the already-busy hero background, the pulsing glow can feel anxious rather than inviting. It works, but barely.

One genuine weakness: the contact section uses a 3-column grid with info / form / map side by side at desktop widths. The map column is 440px tall beside a form that is considerably shorter. The visual imbalance is notable — a first-time visitor sees a map that towers over the form content to its left.

### 2. Mobile UX at 375px — 8.2
The mobile work done in v8 and v9 is visible. The hero CTA correctly swaps to "Hours & Directions" on mobile. Hero actions stack to a column with full-width buttons at 480px. Font sizes: the 12px minimums are met throughout; the seasonal-card__season and service-card__event-label fixes at max-width 480px are in place.

Two mobile concerns:

**First**: The contact section on mobile reorders with form appearing before the address/hours (order: -2 and -1). This is counter to mobile intent — most mobile visitors want to know if the place is open and how to get there before filling a form. The address/hours should visually precede the form at mobile widths.

**Second**: The open-bar wraps at 375px. The "Spring is here" season text and the call link can push to a second or third line, creating a messy multi-line status bar below the hero. The open bar is the first element a visitor reads after the hero — it must stay on one line.

### 3. Scroll Interactions and Animations — 8.7
The reveal system is well-implemented: staggered group reveals, scale entrances for the legacy badge, and the distinct greenhouse-bridge custom reveal (translateY 16px override) all layer properly. The scroll progress bar is subtle and functional. rAF throttling on parallax and scroll listeners is correct engineering.

The initParallax on the legacy image adds genuine depth. The card tilt (3D mousemove on plant-now cards at MAX_TILT 8 degrees) is tasteful — not overdone.

The greenhouse bridge leaf draw-in animation (stroke-dashoffset from 120 to 0 over 1.1s) is a considered micro-interaction. Correct timing relative to the IntersectionObserver threshold.

### 4. Content Quality and Relevance — 8.8
This is the site's strongest dimension. Real business information throughout: 745 Schuylkill Rd, 610-948-9755, Eric Schmidt named as owner, accurate hours, accurate 1967 founding date. The "What to Plant Now" section is genuinely useful and seasonally appropriate for April in Phoenixville — dahlias, native pollinators, spring annuals. No fabricated data.

The owner card (ES monogram, Eric Schmidt name and role) is a strong trust signal. The Eric Schmidt quote ("We're not a big-box store and we never will be") is authentic-feeling and on-brand.

Minor: The hero sub-copy reads "58 years rooted in Phoenixville" and then the hero stat shows "58 Years in PA" — redundant within three lines. The sub-copy should offer more warmth or specificity to avoid the repetition.

### 5. Form Functionality — 8.5
Formspree integration via native POST with _next redirect to ?submitted=1 is clean. JS checks the parameter on load and shows the success banner while hiding the form. The success banner ("Eric and the team will be in touch") is personal and pleasant.

One concern: the phone/email field uses type="text" with autocomplete="tel". If the field accepts either phone or email, the autocomplete hint should not be "tel" — this triggers a phone keyboard on iOS even when a user intends to type an email address.

### 6. Center Alignment Consistency on Mobile — 8.0
Hero content centers correctly at all breakpoints. Trust bar items center in flex-wrap. Greenhouse bridge text is centered with appropriate max-width on mobile. The legacy section appropriately left-aligns body copy on mobile.

Minor: at 375px the seasonal card grid goes to 1fr but the seasonal-card__season pill sits at width: fit-content, which can read as misaligned against the left-aligned title below it. Small but visible.

### 7. Image Quality — 8.3
Hero image served at 2400px with q=90 and fetchpriority="high" — correct LCP treatment. Service card images are genuine Colonial Gardens business photography, which is excellent for authenticity.

One clear problem: the annuals/perennials photo appears on both the Garden Center service card and the wide seasonal card simultaneously. A visitor scrolling the page sees the identical photograph twice in close proximity. Replace the seasonal wide card image with a different photo.

### 8. Typography Hierarchy — 9.0
This is the site's strongest craft element. Playfair Display / DM Sans pairing is well-chosen and consistently applied. Section eyebrows at 12px / 500 weight / 0.14em tracking are appropriately restrained. Section titles use clamp() scaling throughout. The italic em treatment on section titles is elegant and not overused. Line heights are appropriate throughout.

### 9. Color Palette Consistency — 8.8
The token system is strong and genuinely used. Green family, earth family, amber, and cream are all in play with clear semantic purpose. Amber is reserved for CTAs and seasonal tags; greens anchor trust and primary actions; earth tones handle warm background sections. Coherent.

One flag: testimonial card background #ece5d5 and border #b8aa96 are hardcoded hex values not defined as design tokens. They sit within the earth palette range but are not exposed as variables. Minor inconsistency worth tidying.

### 10. CTA Effectiveness — 8.4
Hero has two primary CTAs with correct mobile/desktop swap. The amber glow on primary CTAs is distinctive and warm. The CTA strip mid-page (dark green, amber button, phone number) is well-composed.

One gap: there is no CTA in the testimonials section. After reading positive reviews, a visitor has no immediate invitation to act. A small action after the testimonials grid would capture conversion intent at the point of maximum social proof.

### 11. Greenhouse Bridge Element — 8.5
A considered design decision. The gradient from green-wash to off-white matches the trust bar above and services below. The leaf SVG draw-in animation is a quality interaction. The italic serif copy ("Walk the greenhouse — acres of covered growing houses stocked fresh every week") is evocative and relevant.

Leaf correctly hidden on mobile, showing only text. The lighter reveal entrance (translateY 16px vs 30px default) is the right call — this element should feel light, not dramatic.

### 12. Dynamic Open/Closed Badge (Contact Section) — 8.6
initContactBadge correctly uses America/New_York timezone via toLocaleTimeString. Badge updates text and dot colour dynamically; the container gets an is-closed class that changes background and border colour — a complete state change. Correct and well-executed.

The open hours logic (hour >= 8 && hour < 18 for Mon-Sat) correctly shows closed at exactly 6:00pm ET, matching the stated closing time.

### 13. Trust Bar Visual Separation from Services on Mobile — 7.8
The greenhouse bridge element creates a visual pause between trust bar and services. On desktop, it works well. On mobile (below 768px) the leaf is hidden and only the centred italic text sentence remains — the visual separation is text only, no structural differentiation in background or border. At 375px this reads as a brief italic line in a slightly different background. A visitor glancing quickly may not register it as a distinct section break. The issue is improved from v8 but not fully resolved at mobile widths.

---

## Top 3 Priorities for Improvement

### Priority 1: Resolve the duplicate annuals image
The annuals/perennials photo from the Colonial Gardens uploads appears on both the Garden Center service card and the "Spring 2026 / Annuals & Perennials" seasonal wide card. These sections are on the same page in close proximity. Replace the seasonal wide card image with a different photo — a herb garden, a potting bench, or a different spring flowers shot. Quick fix, visible impact.

### Priority 2: Fix the open-bar text overflow at 375px
Below 480px the open bar's flex-wrap allows the season text and the call link to stack awkwardly into a multi-line bar. The fix: hide `.open-bar__season` below 480px (it is decorative, the critical status information is the open/closed text and the call link), add `flex-shrink: 0` to `.open-bar__call`, and confirm the bar stays to a single line at 375px. The open bar is the first content below the hero — it must communicate cleanly at every width.

### Priority 3: Add a CTA to the testimonials section
The testimonials section ends with two review cards and no action. A visitor who has just read that the landscaping team "showed up on time" and the florist "absolutely nailed it" has no nudge to move forward. Add a centred row below the testimonials grid: a short line of copy ("Ready to join 340 happy customers?") and a "Plan Your Visit" button. This closes a conversion gap at exactly the moment of maximum social proof.

---

*Audit conducted by Nigel — v9 — 2026-04-18*
