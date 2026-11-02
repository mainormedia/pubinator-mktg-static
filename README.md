# pubinator.com

Marketing site for Pubinator, publishing project management for independent media.
One static page: plain HTML and CSS, about 25 lines of optional JavaScript, no build step.

## Run it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

```
index.html               The whole page: header, sections 01–12, footer
assets/css/site.css      All styles (mobile-first, container queries)
assets/js/site.js        Closes the mobile menu after a tap; the page works without it
assets/img/              Pubinator logo and icon (SVG)
favicon.svg
privacy/ terms/          Placeholder pages for the footer links
```

## Page sections

| # | id | Section |
|---|----|---------|
| 00 | `top` | Sticky header: logo, anchor links, Log in, Book a demo |
| 01 | — | Hero with the publication-home mock-up |
| 02 | `problem` | Scattered email, drives and texts → one production panel |
| 03 | `channels` | Print (Live); Web, Newsletter, Podcast, Video (Coming) |
| 04 | `workflow` | Draft to press (the one dark section) |
| 05 | `team` | Contributors, roles, email and text |
| 06 | `ai` | AI copyedit with tracked changes |
| 07 | `ads` | Ads and revenue |
| 08 | `integrations` | Hub-and-spoke integrations diagram |
| 09 | `archive` | Online archive |
| 10 | `pricing` | Archive / Publication / Group, no dollar amounts |
| 11 | `founding` | Founding publishers + demo form (`#demo`) |
| 12 | `faq` | FAQ, then footer |

## Design system

- Colors: Ink `#111827`, Charcoal `#1F2937`, greys `#F3F4F6` / `#F9FAFB`, rules `#D1D5DB`, muted `#6B7280`.
- Orange `#F97316` for buttons and highlights, `#C2410C` for hover and small orange text. Keep orange to about 5% of any screen.
- Orange buttons use ink text at rest (white on `#F97316` fails WCAG AA) and white text on `#C2410C` when hovered.
- Type: Figtree 400–900 for UI, body and headlines. Newsreader appears only inside the mock-ups (the copyedit sample and the archive covers).
- Layout: `.wrap` max 1216px; sections alternate white and `.band` grey; `.dark` is the single ink section.
- Breakpoints are container queries on `.pb` at 560, 720, 880, 960, 1040, 1080 and 1160px.
- Motion runs only under `prefers-reduced-motion: no-preference`. Scroll reveals use `animation-timeline: view()` where supported and are skipped elsewhere.

## Before launch

- [ ] Form: replace the placeholder `action="https://example.com/forms/pubinator-demo"` in `index.html` with the real endpoint. Fields sent: `intent` (demo | founding), `name`, `email`, `publication`, `role`, `type`, `team_size`, `tools[]`, `message`.
- [ ] Fill the bracketed placeholders: `[Confirm terms]` (founding rate), `[Number of spots]`, `[hello@pubinator.com]`.
- [ ] Check these product claims: contributors upload without an account; AI copyedit is shown as available now; Archive includes help importing past PDFs; the Live/Coming labels in sections 03 and 08.
- [ ] Write the Privacy and Terms pages.
- [ ] Add an Open Graph image (`og:image`, 1200×630).
- [ ] Optional: self-host Figtree and Newsreader instead of loading them from Google Fonts.
