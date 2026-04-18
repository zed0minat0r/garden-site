# Colonial Gardens — Nigel Audit
**Date:** 2026-04-09
**Auditor:** Nigel (posh British auditor)
**Viewport tested:** 375px mobile, homeowner perspective
**Version:** v3
**Previous score:** 6.8

---

## Overall Score: 7.2 / 10

Delta: +0.4 from v2. The five big items from the last audit have been addressed competently. Social proof is now present. The carousel has working dots, arrows, and a swipe hint. The Get Directions button is in place. The contact section already had the correct HTML order (info before map). The trust bar is clean and non-repetitive. These are genuine improvements and the score reflects them honestly.

What stops this from reaching 7.5+: the testimonial names are generic to the point of feeling fabricated (Lisa M., Tom R., Sarah K. — three of the most common Anglo names in sequence), there is no face anywhere on the page for a 58-year-old family business, the events card still has no specific upcoming event, and the "1-Year" stat in the hero stats row is still awkward typographically. One new issue: the contact section's welcome copy ("Stop by any day of the week") now sits below a large section title, creating a long throat-clear before the actual information a user came for.

---

## Section Scores

### 1. Design Quality — 7.4 / 10

The Playfair + DM Sans pairing remains strong. The token system is consistent throughout. The hero reviews badge is well-executed — pill shape, frosted glass, amber stars, 4.8 strong — and its placement after the CTA actions is the right hierarchy decision. The owner quote (green-wash blockquote with left border) is a tasteful addition to the about section. The alternating backgrounds (off-white, earth-wash, green-dark, off-white, earth-wash) create a proper rhythm without visual fatigue.

Deductions: The amber warm-glow on the primary CTA button in the hero is used again verbatim on the service card buttons and the CTA strip button. Three amber glows across the page diminishes the impact of each. The testimonial section is the weakest-designed section — it reads as a plain white-card grid with no personality, whereas everything else has botanical warmth. The opening quote mark decorating each testimonial card is a common pattern; it does not elevate the cards.

### 2. Mobile UX at 375px — 7.0 / 10

The hero CTA swap is correctly implemented: on 480px and under, the mobile-first "Hours & Directions" button appears and the "Shop the Greenhouse" button hides. This is the single best improvement from v2 and it is done correctly — the `display: none` / `display: inline-flex` swap via media query is clean.

The swipe hint displays on mobile (768px breakpoint, `display: block`). Dot indicators work via JavaScript and update on scroll. Arrow buttons show/hide opacity correctly. This is all correct.

Remaining issues:
- The hero stats row at 375px shows three stats with `font-size: 26px`. The "1-Year" stat label still occupies two lines and creates visual imbalance versus the "58" and "40+" which are pure numerals. It reads like an odd one out. Either use "1 Year" with a unit label below or present it as the number "1" with label "Year Warranty".
- The trust bar at 375px with `flex: 1 1 100px` and four items means they stack two-by-two. This is fine. "Open / 7 days a week" and "Local / Phoenixville, PA" are the two weakest items — both say things already visible elsewhere (hours in the ribbon, location in the eyebrow). A homeowner scanning the trust bar sees no new information in those two slots.
- The testimonials section stacks to a single column at 600px, which is correct. But at 375px the testimonial cards have 32px padding all around and the opening quote mark glyph (72px, top-right, `green-pale`) is massive relative to the card width — it competes with the review text.
- The contact welcome text sits between the section title and the contact details. On mobile this creates three separate text blocks before the user reaches the actual hours — title, welcome copy, then hours. The welcome paragraph adds warmth on desktop but on mobile it delays the information people came for. Consider moving it after the contact details, or removing it on small screens.

### 3. Visual Polish — 7.2 / 10

The hero parallax has been reduced to `pct * 40px` of travel — this is now settled and correct. The services gradient fade is now `width: 120px` which is much more legible as a "swipe right" cue than the previous 80px. The "Est. 1967" badge moves correctly to top-right on mobile via `top: 24px; right: 24px; transform: none`. These are all improvements.

The scroll-down arrow animation (`float` — 8px translateY over 2.5s) is restrained and functional.

The testimonial card hover state (lift + shadow) is appropriate. The large quote mark glyph at `green-pale` on white cards is the one decorative element that does not quite earn its place — it is generic and conspicuous at 72px.

No new visual clutter introduced. Score holds steady on polish with a small improvement for the parallax fix.

### 4. Scroll Interactions — 7.0 / 10

IntersectionObserver reveal system is correctly built: unobserves after trigger, respects reduced-motion, proper threshold and rootMargin. The stagger delays at 0/90/180/270ms are well-judged — noticeable but not theatrical.

The services carousel drag-to-scroll mouse implementation is there. The dot update logic (overlap-based active detection) is sensible. The button opacity feedback (0.35 when at limits) is good UX.

One remaining concern: the scroll reveal for `.contact__info` and `.contact__map-wrap` is added programmatically via `addRevealClasses()` in JS. This means users with JS disabled see these sections invisible. It is a minor issue but worth noting.

### 5. Content Presentation — 7.0 / 10

Genuine improvements: testimonials now present (Lisa M., Tom R., Sarah K.). Eric Schmidt owner quote added. Contact section has welcome copy. Mobile hero CTA now routes to the right intent. Florist and events card text correctly sets the expectation ("Visit our full site to order" / "Visit our full site to see events") rather than implying inline completion.

Remaining issues:
- The three reviewer names — Lisa M., Tom R., Sarah K. — are so on-the-nose Anglo-generic that a real homeowner may feel they are manufactured, even if they were transcribed accurately from Google. Adding one more detail per review (e.g. "Phoenixville, PA" or a specific plant mentioned) would add credibility.
- The events card still contains no specific upcoming event. "From spring plant sales to fall festivals" is placeholder-level copy that a homeowner cannot act on. A single line — "Mother's Day Weekend Plant Sale — May 10 & 11" — would make the card useful.
- "1-Year" as a hero stat number continues to look typographically odd alongside "58" and "40+". It is the only alphanumeric mixed stat in the row.
- The ribbon is 13px, which at 375px is acceptable but tight. The content (hours, warranty, consultations) is genuinely useful. No change needed.

### 6. Local Business Trustworthiness — 7.2 / 10

The Google reviews badge (4.8, 340 reviews) in the hero is the highest-impact trust signal added since v2. It is prominently placed, visually integrated, and properly labelled. This single change does more conversion work than all the other v3 additions combined.

The three testimonial cards are a meaningful addition. They reinforce the landscaping consult, the florist, and the long-term loyalty angle — one card per core service is structurally sound.

The owner quote from Eric Schmidt adds humanity to the about section. The "we stand behind" framing is the right tone for a family business.

What is still absent: no human face anywhere on the page. The about-us image shows the property and team generically. For a business that has served a community for 58 years, the absence of a recognisable face (owner, staff, customer) is a credibility gap that no copy can close. A real Google reviewer browsing this site and not seeing a face of the business they read about will feel a small but real disconnect.

Also still absent: no email address, no contact form, no social media links. A homeowner who wants to ask a quick question before visiting has one option — phone. Some customers, especially younger demographics, prefer asynchronous contact.

---

## Top 5 Recommendations

### 1. Add one specific upcoming event to the events card
The events card is the most underwhelming of the four service cards. "From spring plant sales to fall festivals" is the weakest copy on the page. Replace it with one real, dateable event for spring 2026. "Mother's Day Flower Market — May 10 & 11" or "Spring Perennial Sale — now through May" gives a homeowner a reason to act immediately rather than just noting the business exists.

### 2. Add a face — owner or staff photo in the legacy section
The about section has real copy, a real owner quote, and real history. It has no face. Swap or supplement the current about-us image (generic property/team shot) with a portrait or recognisable candid of Eric Schmidt or a staff member. This is the single highest-impact credibility improvement left on the board. Local businesses earn trust through people.

### 3. Resolve the hero stat awkwardness
The "1-Year" hero stat reads as an alphanumeric oddity alongside "58" and "40+". Change the stat number to "1" and the label to "Year Warranty" — or change it to "100%" with label "Warranty on installs". Either option reads cleanly at the 26px font size on mobile. The current value looks like a label that drifted into the number slot.

### 4. Add social media links to the footer
The footer has logo, tagline, nav links, and copyright. It has no link to Instagram, Facebook, or any social channel. A garden centre with 340 Google reviews almost certainly has active social presence. Adding 2-3 social icon links in the footer costs nothing and provides users with another trust signal and a reason to follow (and return). Colonial Gardens PA has Facebook presence — it belongs in the footer.

### 5. Suppress the contact section welcome copy on mobile
The welcome paragraph ("Stop by any day of the week — no appointment needed...") is pleasant on a desktop where users can scan both columns simultaneously. On mobile at 375px it inserts 80px of warm copy between the section title and the hours/phone the user actually came to find. Add a `display: none` at 480px or below for `.contact__welcome`, or reposition it below the contact details where it functions as an invitation after the user has the information they need.

---

## Summary

This is a meaningfully better v3. The social proof additions (reviews badge, testimonials, owner quote), the corrected mobile CTA hierarchy, the functional carousel navigation, and the Get Directions button are all real improvements that a homeowner would feel even without knowing why. The score moves from 6.8 to 7.2 — a legitimate step forward, not a courtesy bump.

The remaining gap to 7.5+ is narrow but specific: one face, one specific upcoming event, and the hero stat cleanup. The site is now in the range where it competes credibly with other local garden centre sites. Getting one face onto the page and one real event into the events card would make this a site a homeowner bookmarks rather than merely visits.
