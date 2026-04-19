# Colonial Gardens — Nigel Audit
**Date:** 2026-04-18
**Auditor:** Nigel (posh British auditor)
**Viewport tested:** 375px mobile, homeowner perspective
**Version:** v8
**Previous score:** 8.3 (v7)

---

## Overall Score: 8.4 / 10

Delta: +0.1 from v7. A modest but earned improvement. The four recommendations from v7 have been addressed: the `.contact__form-optional` class is now properly defined in CSS (font-weight 400, font-size 13px, color var(--text-muted), opacity .75 — clean), the Formspree `_next` hidden input is present in the form pointing to the correct success URL, the petunias icon has been replaced with a five-petal radial ellipse SVG that legibly communicates flowering annuals, and the scrolling ribbon that was identified as redundant has been removed entirely. The open-status bar (dark green bar below hero) now consolidates what the ribbon was doing — hours and open/closed status — without the animation overhead.

The net result is a page that has shed its principal redundancy and resolved its four identified deficiencies. That earns the +0.1. What prevents 8.5: two things remain. First, the page still has a structural issue at the upper-mid section: the open-status bar, the trust bar, and then immediately the services section are three consecutive horizontal banding elements before the user reaches any engaging visual content. On mobile at 375px this reads as: hero, dark green strip, off-white strip, services cards. The transition rhythm is compressed. A modest gap or visual breathing room between the trust bar and services — perhaps a single contextual sentence about the greenhouse — would ease the compression. Second, the contact section on mobile still renders a static "Open today" badge in the contact__info column with a permanently-green dot, regardless of actual open/closed state. The open-bar above uses JS to set the correct state; the contact__open-dot in the contact section has no corresponding logic and always shows green. A homeowner arriving on a Sunday evening sees "Open today" with a green dot, but the garden center closed at 5pm. This is a factual credibility issue, not a cosmetic one.

---

## Section Scores

### 1. Design Quality — 8.3 / 10

The petunias card icon is now a five-petal ellipse SVG — five rotated ellipses around a centre circle, with a muted fill on the centre. This is the correct vocabulary for a flowering annual. The icon now correctly communicates its content. All four plant-now card icons are now semantically appropriate. The Dahlias card uses a tuber-with-petals icon. Native Pollinators uses a three-leaf branching form. Shade Trees uses a branching canopy. Petunias uses the new petal form. This completes the icon audit that has run through three versions.

The removal of the scrolling ribbon is a net visual improvement. The page transition from hero to open-status bar to trust bar is now cleaner — three clear bands instead of four, with the ribbon's animation overhead eliminated. The trust bar now anchors the first post-hero section more decisively.

No regressions on service cards, legacy section, testimonials, or footer. All hold at v7 standard.

### 2. Mobile UX at 375px — 8.2 / 10

The contact form ordering remains correctly implemented: form first (order: -2), info column second (order: -1), map third (implicit order: 0). This has not regressed.

The contact section's `.contact__open-badge` contains a static green dot and hardcoded "Open today" text. This does not connect to the same ET timezone logic used in `initOpenBar()`. At 375px, a mobile user scrolling to the contact section after hours will see the green "Open" badge while the top-of-page dark bar correctly shows "Closed." The inconsistency is small in pixel terms but significant in trust terms. A homeowner who reads "Open today" while it is 7pm Sunday will call, get no answer, and feel misled. One function call to conditionally style the contact badge would close this gap.

Font sizes are compliant. All tap targets are at or above 44px. The form fields are 48px minimum height. The submit button is full-width and above 48px. No overflow issues detected in the CSS at 375px.

The open-bar on mobile correctly suppresses the season line and the divider at 480px, leaving only: green/red dot, open/closed text, and the call link. This is the correct priority reduction.

### 3. Visual Polish — 8.3 / 10

The `.contact__form-optional` CSS class is now defined and styled: `font-weight: 400; text-transform: none; letter-spacing: 0; font-size: 13px; color: var(--text-muted); opacity: .75`. This correctly distinguishes the optional textarea label from the required field labels. The previous audit noted this as a gap; it is closed.

The `_next` redirect is in place (`https://zed0minat0r.github.io/garden-site/?submitted=1`). The JS `initConsultForm` function detects `?submitted=1` in the URL and shows the `.contact__success` banner while hiding the form. This is the correct implementation pattern. The success banner copy ("Eric and the team will be in touch soon") is suitably personal for a family-owned business.

One new observation: the hero primary CTA uses `animation: cta-breathe-warm 3.5s ease-in-out infinite`. This is a pulsing amber glow animation. On desktop this reads as a deliberate, warm pulse — it earns its presence. On mobile at 375px within a 320px-wide constrained button stack, the animation is subtler but still functional. The amber on green-dark background is high contrast. No accessibility regression.

### 4. Scroll Interactions — 7.9 / 10

The ribbon removal has reduced total animation load. The remaining animations are: hero ken-burns (10s ease-out), hero scroll arrow floating loop (2.5s), CTA button breathe-warm loop (3.5s), reveal on scroll (intersection observer, single-fire), card hover parallax (JS rAF), service card drag scroll, and card 3D tilt (JS mousemove). This is a well-composed set — nothing repeats unnecessarily, and the looping animations (arrow, button glow) serve clear purposes.

The IntersectionObserver threshold is 0.1 with rootMargin 0px 0px -50px 0px. This fires reveals at 10% of element in view, offset by 50px from the bottom of the viewport. On mobile where elements occupy more of the viewport height, this threshold fires earlier and more aggressively than on desktop. The net effect is that sections on mobile tend to reveal slightly before the user has scrolled to them naturally. This is a pleasant experience rather than a jarring one — the content appears ready. Not a deficiency.

The services horizontal scroll still has drag-to-scroll on desktop and the snap behaviour works. On mobile the snap-to-card is correct via `scroll-snap-type: x mandatory` and `scroll-snap-align: start`.

### 5. Content Presentation — 8.3 / 10

No changes to content from v7. The plant-now section continues to deliver four distinct, non-redundant, seasonally appropriate recommendations. The intro copy ("The last frost date for our zone has passed") is the strongest single line of content on the page — specific, practical, local. The testimonials are unchanged and continue to perform at v7 level.

One content observation that was not flagged in v7: the Events service card shows "Mother's Day Plant Sale — May 10–11." This event is hardcoded. As of the audit date (April 18, 2026), May 10–11 is three weeks away. The event is timely and accurate. However, after May 11 passes, this card will show a past event with no mechanism to update it. For a static site without a CMS, this is a structural limitation, not a code deficiency. Worth noting for future iterations.

The featured testimonial ("We've been coming here every spring for over 20 years") remains excellent — it communicates loyalty, longevity, and expertise without being promotional.

### 6. Local Business Trustworthiness — 8.4 / 10

The Formspree integration with the `_next` redirect is the correct end-to-end lead flow. Form submits, user returns to site, success banner appears, form hides. No third-party page abandonment. This is the correct implementation.

The contact section static open badge inconsistency (flagged above) is the primary trust issue in this version. A homeowner who encounters contradictory open/closed signals between the top bar and the contact section will notice, even if subconsciously. The top bar and the contact badge should agree on state.

Business details remain accurate throughout: 745 Schuylkill Rd, Phoenixville PA, 610-948-9755, Mon-Sat 8am-6pm, Sun 9am-5pm, Eric Schmidt owner, Est. 1967, 58 years. The footer copyright reads 2026. All details consistent.

---

## Top 3 Priorities for Improvement

### 1. Fix the contact section open/closed badge to use real-time ET logic
The `.contact__open-badge` element contains a static green dot and hardcoded "Open today" text. This never changes regardless of time or day. The `initOpenBar()` function in main.js already contains the correct ET timezone logic for determining open/closed state. Extend this function (or create a companion `initContactBadge()`) to also update the `.contact__open-dot` class (add `is-closed` to make it red) and the text within the badge to reflect actual open/closed state. This is a one-function addition and closes the only active credibility issue on the page.

### 2. Add a visual breathing point between the trust bar and services section
On mobile, the sequence hero > open-status bar > trust bar > services is four consecutive horizontal bands with no breathing room. The trust bar and services section both have `background: var(--off-white)` which causes them to visually merge into a single long off-white zone on mobile. Either add a subtle section divider (a 2-3 line contextual hook like "Walk the greenhouse" with a link) between trust bar and services, or differentiate the trust bar's background (even a slight `var(--green-wash)` tint) to create visual separation without removing content. This improves the scroll rhythm on mobile without touching desktop layout.

### 3. Add a mechanism to rotate the Events card content
The Mother's Day Plant Sale event hardcoded on the Events service card will be stale after May 11. Add a small JSON-adjacent data comment block at the top of index.html (or a simple JS object in main.js) that holds event name, date, and a "current as of" marker. Even a comment like `<!-- EVENT: update event name and date when current event passes -->` directly above the event callout in the HTML gives the site owner a clear maintenance hook. Longer term, consider a 3-4 line JS object at the top of main.js that populates the event card dynamically so updates require touching one place only.

---

## Summary

v8 earns 8.4. All four v7 recommendations were implemented correctly. The petunias icon mismatch is resolved. The Formspree redirect is in place and functions correctly. The `.contact__form-optional` CSS class is defined and styled. The scrolling ribbon has been removed without leaving a content gap — the open-status bar below the hero absorbs its function cleanly.

What remains is smaller than anything previously identified: one static badge that should be dynamic, one visual rhythm compression on mobile, and one content maintenance gap. None of these require design rethinking. The design is strong, the typography is correct, the palette is consistent, and the conversion loop — from landing on the page to submitting a consultation request — is now fully functional. At 8.4, this site competes credibly against any local garden center in the region.

The gap between 8.4 and 8.5 is the contact open badge and the mobile trust-bar/services breathing room. Both are addressable in a single focused session.
