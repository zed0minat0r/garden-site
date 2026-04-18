# Colonial Gardens — Nigel Audit
**Date:** 2026-04-09
**Auditor:** Nigel (posh British auditor)
**Viewport tested:** 375px mobile, homeowner perspective
**Version:** v6
**Previous score:** 7.8 (v5)

---

## Overall Score: 8.1 / 10

Delta: +0.3 from v5. This is the first audit where I would say a Phoenixville homeowner browsing three local garden centre websites would choose this one to visit first. The score crosses the 8.0 threshold on the strength of four specific v6 improvements that addressed the most concrete gaps from v5: the hero subtitle is now specific ("58 years rooted in Phoenixville — from backyard tomatoes to full landscape installs"), the ES monogram is implemented and correct, the ghost hero button is correctly auto-width on mobile at 480px, and the two testimonial cards now carry localised, contextualised attributions (Tom R., Collegeville, Spring 2025 install; Sarah K., Spring City, via Google Reviews).

What stops this from reaching 8.5: the page has accumulated enough sections that the section count is now its primary UX liability. A visitor on mobile at 375px encounters nine distinct sections before the footer — hero, ribbon, trust bar, services, legacy, seasonal, plant-now, CTA strip, testimonials, contact. The plant-now section, while substantively correct and locally relevant, is structurally redundant with the seasonal section. A user who has read "Veggie and Herb Starts" in the seasonal cards does not gain meaningfully new information from "Basil and Herbs" in the plant-now cards sixty seconds later. The two sections solve similar jobs (seasonal purchase urgency) with slightly different frames (what's in stock vs what to plant). Merging or replacing one with the other would shorten the page without losing signal. The second gap: the contact section three-column grid collapses to single-column on mobile, which is correct, but the form appears below the map on small screens due to DOM order, meaning a user who wants to submit a consultation request must scroll past the info column, past the form, past the map, and then find the submit button — the form is the action but it is not sequenced as the action on mobile. The third gap: the `plant-now__card-tag` text is 11px at all breakpoints including mobile. Eleven pixels is below the 12px minimum. This is not a crisis but it is a legibility failure I cannot ignore.

---

## Section Scores

### 1. Design Quality — 8.1 / 10

The token system continues to function at best-in-class level for this category and market. No regressions. Three upgrades assessed.

The ES monogram (`legacy__owner-monogram`) is correctly implemented. Dark green background (`var(--green-dark)`), 42px circle, 2px `rgba(184,230,186,.45)` border, 15px Playfair Display 700, `#b8e6ba` text. It sits inside the owner card alongside the name and role. At desktop scale the monogram gives the glass card a face-shaped anchor — the card reads as a named person rather than an anonymous label. The 480px breakpoint correctly scales the monogram to 36px. This was the single highest-priority v5 recommendation and it has been implemented exactly as specified.

The hero subtitle change is correct: "58 years rooted in Phoenixville — from backyard tomatoes to full landscape installs" is the variant I recommended. It names the town, names two service types, and reads like a real business rather than a template. This is the kind of copy distinction that registers subconsciously on a homeowner who has read three websites in an afternoon.

The ghost button at 480px is now `width: auto` via `.hero__actions .btn--ghost { width: auto; padding-left: 28px; padding-right: 28px; }`. This is the correct implementation. At 375px the hero stack reads: amber primary (full width), ghost call button (auto-width, centred, compact). The primary/secondary visual hierarchy is now correctly expressed in size and weight, not just colour.

The testimonial card attributions are localised: Tom R. now carries "Collegeville" and "Spring 2025 install" context. Sarah K. carries "Spring City". Jennifer R. (featured) carries "Phoenixville". Three names, three towns, zero duplication. This is a meaningful trust upgrade.

The plant-now section introduces four white cards on a green-wash (`var(--green-wash)`) background with `var(--shadow-sm)` and `var(--stone)` border. The visual language is clean and consistent with the existing token system. The `plant-now__card-icon` uses the same 52px square icon treatment as the trust-bar icons with matching `var(--green-wash)` fill and `var(--green-pale)` border. The 4-column grid at desktop collapses correctly to 2-column at 1000px and 1-column at 600px. Design is consistent. No regressions.

One new observation on section redundancy: the seasonal section and plant-now section are adjacent (seasonal at line 295, plant-now at line 340). A user scrolling through sees "Veggie and Herb Starts" in a seasonal card, then "Basil and Herbs" in a plant-now card, then "Tomatoes and Peppers" in a second plant-now card. The information overlap is partial but the purchase-urgency message is repeated twice in adjacent sections. This is a content architecture problem, not a design execution problem, but it weakens the page's editorial confidence.

### 2. Mobile UX at 375px — 8.0 / 10

The hero ghost button fix is the headline improvement. At 375px the hero actions stack is now: amber full-width (Hours and Directions) then ghost auto-width (Call 610-948-9755, centred, not full-bleed). The visual hierarchy is correct for the first time. A visitor who has already decided to call rather than navigate can immediately identify the call button as the subordinate action and will not have to parse two equally-weighted buttons.

The plant-now grid at 600px collapses to single column via `grid-template-columns: 1fr` at 600px and `gap: 16px` (reduced from 24px). At 375px this gives four stacked cards at approximately 327px width (375px - 48px container padding). The `plant-now__card` at 28px/24px padding renders the title, text, and tag correctly. However the `plant-now__card-tag` font-size is 11px at all viewport widths, including 375px. The tag reads "Veggie Garden", "Annuals", "Herbs", "Trees and Shrubs". At 11px on a mobile screen this is technically non-compliant with 12px body copy minimums. It is not visually broken but it is a legibility failure.

The contact section at 375px stacks to single column via `grid-template-columns: 1fr` at 1000px. The DOM order is: info column, form column, map column. On mobile this renders as: info (name, address, phone, email, hours), then form (request consultation), then map (iframe, directions button). The form is the action the business most wants — a consultation request — but it is presented as a middle element between two passive information panels. A user on mobile who wants to submit a request must scroll past the info panel to reach it. The form should ideally be first in mobile DOM order, or the contact info should be reordered in CSS using `order` at the mobile breakpoint so that the form appears above the map.

The nine-section scroll depth on mobile at 375px. From hero to footer the user scrolls through: hero (full viewport), ribbon, trust bar, services (horizontal), legacy/about, seasonal, plant-now, CTA strip, testimonials, contact. This is a long page for a local business site that has one conversion goal (visit or call). A user who decides to visit after reading the hero must scroll past eight more sections to find the contact address and hours. The contact section is anchor-linked from the hero CTA ("Hours and Directions") which resolves this problem on CTA click — but a user who ignores the CTA and scrolls manually hits a long journey.

### 3. Visual Polish — 8.2 / 10

No regressions from v5. The plant-now section adds a visually cohesive fourth content section to the page without breaking the established token grammar. The green-wash background (`#ebf5eb`) correctly distinguishes the section from the adjacent seasonal (cream background) and CTA strip (green-dark).

The `plant-now::before` gradient accent line (4px, green-pale to amber to green-pale) matches the top-of-section treatment on the contact section. Visual consistency is maintained.

The `plant-now__card-icon` SVG paths for the four cards: leaf/growth (tomatoes), location pin (petunias), window/building (basil — this icon is semantically mismatched to herbs; a window icon for "basil and herbs" is confusing), person/landscape (shade trees — also mismatched to trees). The first two icons are recognisable. The third is a building/window/door SVG that does not communicate herbs. The fourth is a person-silhouette SVG that does not communicate trees. Icon-to-content semantic alignment matters at this scale because the icon is the first visual signal the user reads before the title text. A herb icon (sprig, leaf, stem) and a tree icon (branching trunk) would be more accurate.

The testimonial card background (`#ece5d5`) against `earth-wash` section background (`#fdf7ef`) continues to work correctly. No change here.

The legacy section with the new monogram: the glass card at desktop now reads — 42px green circle with "ES" in serif, then "Eric Schmidt" in 14px/600 white, then "Owner and Head Grower" in 12px `#b8e6ba`. The hierarchy is correct and the card now has appropriate visual weight as an identity element rather than a text label.

### 4. Scroll Interactions — 7.8 / 10

No changes to the scroll/animation system in v6. All v5 assessments hold. The hero pulse (single amber button, 3.5s), the float indicator (2.5s), the ken-burns (10s one-shot), the parallax on legacy image, and the reveal system all continue to function correctly.

The plant-now section elements carry `reveal` and `reveal-group` classes via `addRevealClasses()` in main.js — I do not see the plant-now section added to `addRevealClasses()` explicitly. Looking at the HTML: `.plant-now__header` has `class="plant-now__header reveal"` and `.plant-now__grid` has `class="plant-now__grid reveal-group"` and `.plant-now__cta` has `class="plant-now__cta reveal"` — these are correctly set in HTML markup directly, not requiring JS assignment. The reveals will fire correctly on intersection.

One observation: with nine sections and the plant-now grid adding four reveal-group children, the total number of intersection-observed elements on the page is now approximately 28 (counting reveal, reveal-group, reveal-scale targets). This is within normal bounds for IntersectionObserver and will not degrade performance.

The consultation form submit handler in `initConsultForm` fires a success message to `cfNote` but does not validate the interest field (select). If a user submits with name and contact but no interest selected, the form clears and the success message fires. This is not a critical failure — the interest field is optional in the UX, which is a reasonable design choice for a local business — but it means the "Pick one" placeholder text misleadingly suggests required input when it is not enforced.

### 5. Content Presentation — 8.0 / 10

This is the first version where every content section justifies its presence. The hero headline and subtitle are sharp and specific. The trust bar is factual. The services section covers the four actual service lines. The legacy section has the owner's name, a real quote, and a specific founding year. The seasonal section has three non-redundant in-season items. The plant-now section provides actionable April-specific guidance. The CTA strip drives calls. Testimonials are localised. Contact has full details including email.

The plant-now section content quality is good: "The last frost date for our zone has passed" is the kind of specific local knowledge that a real homeowner values and a template site would not include. "Here is what our growers are putting in the ground this week" is an active, credible voice. Each card text is concise and actionable. This is well-written content.

The section redundancy problem: the veggie and herb content appears in both seasonal (Veggie and Herb Starts card, "Tomatoes, peppers, basil, thyme") and plant-now (Tomatoes and Peppers card, Basil and Herbs card). A reader encounters substantially overlapping content in two adjacent sections. Neither section is wrong — both are true and useful — but the editorial redundancy reduces the authority of both. A business with 58 years of expertise should be able to fill four plant-now slots with items that do not repeat seasonal-section content. Two alternatives: replace the tomato/basil plant-now cards with something not in seasonal (dahlias for summer colour, container strawberries, native pollinator perennials) or merge the two sections into one richer section.

The form on the contact section does not have a textarea for additional notes or questions. A homeowner who wants to describe their garden problem before booking a consultation has no text field. The interest dropdown helps but is coarse. A single optional textarea ("Anything else you want us to know?") would improve form quality for landscaping consultation requests specifically, where project complexity varies enormously.

### 6. Local Business Trustworthiness — 8.2 / 10

Three localised testimonials with distinct town attributions. ES monogram on the owner card. Specific hero subtitle. Email address present. Social links correct. Google reviews badge with numeric count in two locations. Ribbon with hours and seasonal message.

The Get Directions link now uses a full Google Maps place URL with what appears to be a real place identifier: `https://www.google.com/maps/place/Colonial+Gardens/@40.1257,-75.5388,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6a3a5e23d2b7f:0x4b2c1f8e9a0d3c5e!8m2!3d40.1257!4d-75.5388!16s%2Fg%2F1tcwnsgq`. This is a material improvement over the text-search URL in v5 and resolves that trust gap.

The Google Maps iframe embed URL contains `0x89c6a5e5aa8f1b5b%3A0x123456789abcdef` as the place ID — this is a placeholder/fabricated identifier, not the real Colonial Gardens business ID. The iframe will render the coordinate location correctly (40.1257, -75.5388 which matches 745 Schuylkill Rd Phoenixville PA) but if a user clicks within the embedded iframe to open Google Maps, the place context will be broken. The Get Directions anchor (which is the primary action) uses the correct place URL and is the user's likely click target, so this is a secondary issue — but it remains an inconsistency. The iframe embed URL should use the same real place ID as the directions anchor.

The consultation form has no backend. On submit it clears and shows a thank-you message but no enquiry is captured. A local business owner who receives a consultation request form submission expects to receive it. Without a backend (Formspree, Netlify Forms, or mailto: fallback), the form is decorative. This is a known open item but it is now a trust liability: a homeowner who submits a request and never hears back will not return.

---

## Top 5 Recommendations

### 1. Fix plant-now card icons for semantic accuracy
The "Basil and Herbs" card uses a window/building SVG (`M5 3h14M5 3v18M19 3v18M5 21h14M9 7h6M9 11h6M9 15h6`) — this is a grid or table icon, not a herb. The "Shade Trees and Ornamentals" card uses a person silhouette icon. Neither communicates the content subject. Replace with a leaf/herb sprig for the herbs card and a branching-tree path for the trees card. This is a single HTML edit per card.

### 2. Wire the consultation form to a real backend
Formspree (free tier) requires one HTML attribute change: `action="https://formspree.io/f/[form-id]"` and `method="POST"` on the form element, plus removing `novalidate` and the JS submit handler. Netlify Forms requires one attribute (`netlify` on the form). Either resolves the silent-drop problem. A form that tells users "we'll be in touch" but captures nothing is a conversion failure.

### 3. Reorder contact columns on mobile so the form appears first
The DOM order (info, form, map) is logical at desktop but suboptimal at mobile. Add `order: -1` to `.contact__form-wrap` at the 1000px breakpoint so the form is the first element a mobile user sees when they navigate to the contact section. The hours and address are already visible in the ribbon and trust bar — they do not need to precede the form on every device.

### 4. Fix plant-now card tag font-size to 12px minimum
The `.plant-now__card-tag` is 11px across all breakpoints. Add `font-size: 12px` to the `@media (max-width: 600px)` block or change the base value. This is a one-line CSS fix.

### 5. Resolve the seasonal/plant-now content overlap
The current page has "Veggie and Herb Starts" in the seasonal section and "Tomatoes and Peppers" plus "Basil and Herbs" in the plant-now section — substantively the same category addressed twice in adjacent sections. Replace two of the four plant-now cards with non-overlapping subjects: dahlias or summer bulbs (bulb planting window is now), and a native pollinator perennial (black-eyed Susan, coneflower) as a distinct recommendation that does not repeat the seasonal card copy. This increases the page's informational breadth without adding length.

---

## Summary

v6 earns 8.1 by executing every v5 recommendation correctly. The monogram works. The hero subtitle is specific and real. The ghost button hierarchy is fixed on mobile. The testimonials are localised. The Get Directions link resolves to a place URL rather than a text search. These are not cosmetic adjustments — they are structural trust signals that a real homeowner registers when choosing between three local garden centre websites.

The page now has strong bones, correct hierarchy, and genuine local credibility. The remaining gap is editorial and functional: content redundancy between the seasonal and plant-now sections, a form with no backend, icon-to-content semantic mismatches, and a 11px legibility failure on card tags. None of these requires a design rethink. The design is finished. The remaining work is content editing, one CSS fix, and one form integration.

At 8.1, this page would convert a homeowner who is already looking for a garden centre in the Philadelphia suburbs. The question for 8.5 is whether it would create interest in someone who was not already looking — and that requires the content and form gaps to close.
