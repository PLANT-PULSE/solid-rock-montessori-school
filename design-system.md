# Solid Rock Montessori School design system

## Visual tokens

The shared visual system keeps the established palette, type scale, spacing and component geometry. If an approved logo later requires a palette change, update the CSS custom properties at the top of `css/style.css`; the tokens are reused throughout the site.

| Token | Value | Use |
|---|---|---|
| Deep navy | `#14213d` | Header, footer, dark sections and primary buttons |
| Royal blue | `#1f3260` | Links, accents and interactive states |
| Warm gold | `#c9a227` | Highlights, dividers and primary calls to action |
| Light gold | `#f0d47a` | Dark-surface highlights and focus details |
| Cream | `#faf6ee` | Warm alternating section backgrounds |
| Paper | `#fffefa` | Main page and card surfaces |
| Ink | `#1c2736` | Body text |
| Muted | `#647082` | Supporting text |
| Line | `#e6e1d7` | Borders and separators |

**Fonts:** Playfair Display for display headings; DM Sans for body text, navigation and controls, with system fallbacks.

**Spacing scale:** `.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4.5rem`, `6rem`. Section padding and heading sizes use fluid `clamp()` values.

## Components and responsive layout

- Shared fixed navigation, dropdown, mobile drawer, footer, map panel and calls to action.
- Container-based split layouts, responsive card grids, programme tabs, filter pills, forms and portal preview.
- Breakpoints at 1160px, 680px, 390px and 350px adapt navigation, grids, form layouts and controls.
- The palette can be updated by changing `--navy`, `--blue`, `--gold`, `--gold-light`, `--cream`, `--paper`, `--ink`, `--muted` and `--line` in `:root`.

## Motion inventory

1. Crossfading, slowly zooming hero-photo carousel with manual controls.
2. Touch/arrow-operated news and campus-photo carousels.
3. Fade-up, fade-left, fade-right and zoom-in scroll reveals with staggered delays.
4. Animated gradient fallback slide and staggered hero content.
5. Count-up statistics where confirmed numerical content is available.
6. Sticky header color transition and animated navigation underline.
7. Slide-in keyboard-operable mobile navigation drawer and backdrop.
8. Pill-button ripple, hover lift and shimmer effects.
9. Card hover lift and small tilt for programme and community cards.
10. Scroll-drawn school-history timeline.
11. Accessible 3D flip cards on the About page.
12. Sliding, keyboard-operable programme tabs.
13. Parallax image dividers across Home, About, Academics and Campus Life.
14. Photo-grid hover zoom, category filtering, captions and keyboard-operable lightbox.
15. Animated form success feedback and accordion expansion.
16. Animated portal dashboard preview.
17. Scroll-progress indicator and back-to-top entrance.
18. Logo-badge progress-ring preloader and page-transition fade.
19. Animated call-to-action glow and smooth in-page scrolling.

Motion is reduced or disabled where practical when `prefers-reduced-motion: reduce` is enabled. The hero carousel remains manually controllable in reduced-motion mode.
