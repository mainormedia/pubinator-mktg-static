# CLAUDE.md

Static marketing site for Pubinator (pubinator.com). The product itself lives at app.pubinator.com, which is a separate Laravel codebase and not in this repo.

## Ground rules

- Keep it static: hand-written HTML and CSS, no framework, no build step. JavaScript only for small progressive enhancements; every feature must work without it.
- Everything lives in `index.html`, `assets/css/site.css` and `assets/js/site.js`. Don't split the CSS unless asked.
- Mobile-first. Layout responds to container queries on `.pb`, not media queries. Test at 390px and 1440px.
- WCAG AA: text at least 4.5:1, touch targets at least 44px, real `<button>`, `<a href>` and `<label>` elements, visible focus.
- Motion goes only inside `@media (prefers-reduced-motion: no-preference)`.

## Brand and voice

- Palette and type: see README "Design system". Orange is an accent (about 5% of a screen). Never put white text on `#F97316`.
- Headlines are heavy Figtree (800–900, tight tracking).
- Voice: plain, confident, newsroom vocabulary, no hype words.
- Honesty about status: Print production is Live. Web, Newsletter, Podcast and Video channels, and every integration except Contributor uploads and Press-ready PDF delivery, must stay labeled Coming until they ship.
- No real customer names, covers or logos, and no third-party brand logos. Placeholder publication: "The Riverside Ledger". Tool names are set in plain type.
- Pricing shows no dollar amounts.

## Structure

Sections are numbered in the markup (`<p class="sec-head"><span class="num">08</span>…`). When adding or removing a section, renumber the ones after it and keep the white / grey `.band` alternation. Section 04 stays the one `.dark` section.
