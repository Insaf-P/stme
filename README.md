# STME Design System

A minimal, modern visual + interaction system for redesigning **STME** (Storage Technology Middle East) — moving the current dated WordPress site (https://stme.com/) to something closer in spirit to https://www.sbm.com.sa/ but stripped further: lots of whitespace, bold typography, restrained color, and a single confident accent.

## Sources

- **Brand:** [stme.com](https://stme.com/) — content, services, locations, partner list, voice.
- **Reference aesthetic:** [sbm.com.sa](https://www.sbm.com.sa/) — modern enterprise-IT website style (big headlines, mega-menu, dark hero, card grids). We are **not** copying SBM; we are using it as a reference for *minimalism, hierarchy, and whitespace*.
- **Logo:** `assets/stme-logo.png` — extracted brand colors from the logo's cube tiles (orange, blue, black).
- **GitHub repo provided:** `Insaf-P/claudetest` — empty at time of build, so no codebase context was available. **If you can populate this repo with the current site source, a future pass can lift exact spacing, components, and copy.**

## Company context

**STME** (Storage Technology Middle East) — *"One Smart Solution"*. A Middle East-headquartered systems integrator focused on enterprise IT infrastructure: storage, backup/recovery, disaster recovery, virtualization, security, and cloud. Operates across KSA (Riyadh, Jeddah, Al Khobar), UAE (Abu Dhabi, Dubai), Bahrain (Manama), Egypt (Cairo), Kuwait, Jordan (Amman), Pakistan (Karachi), and UK (London). Partners with Hitachi (HDS), NetApp, Veritas, Cisco, VMware, Quantum, Spectra Logic, Tandberg.

Audience: enterprise IT buyers (CIOs, infrastructure leads, procurement) at banks, government, and large corporates across the GCC.

## Index

- `README.md` — this file. Brand + foundations.
- `SKILL.md` — Agent SKill entrypoint when packaging this as a portable skill.
- `colors_and_type.css` — design tokens (CSS variables) for colors, type, spacing, radii, shadow.
- `assets/` — logos, partner marks, background imagery.
- `fonts/` — webfonts (or noted Google Fonts substitutions).
- `preview/` — small visual cards that populate the Design System tab.
- `ui_kits/website/` — the redesigned marketing website UI kit (React JSX components + an interactive `index.html`).

---

## Content fundamentals

**Voice.** Confident, professional, B2B enterprise. STME currently leans on a few signature phrases — **"One Smart Solution,"** **"Heritage of Commitment & Delivery,"** **"The Right Hands / The Right Approach / The Right Tools / The Right Environment."** Keep these. They are short, parallel, and quietly proud — the new site should preserve this cadence.

**Person.** Third-person company voice for institutional copy ("STME Services deliver…"). Direct second-person *only* in the value-prop bullets ("Protect your current investments", "Improve business productivity"). Never first-person plural — STME's existing site avoids "we" in favor of "STME" or implicit subject.

**Casing.**
- Headlines: Sentence case for marketing copy. **Title Case for navigation labels.**
- Body: Sentence case. No all-caps shouting in body copy.
- ALL-CAPS reserved for: (1) the footer section labels (QUICK LINKS, NEWS AND UPDATES) and (2) office region headers (KINGDOM OF SAUDI ARABIA, UNITED ARAB EMIRATES). Use sparingly.

**Tone.** Plain enterprise. Avoid hype ("transform," "supercharge," "revolutionize"). Prefer concrete capability statements ("Assessment, consulting, deployment, management, and support services in Data Management, Security, and Cloud Solutions"). Three-word concept lists are a recurring pattern: *Storage Solutions / Backup and Recovery / Disaster Recovery & Business Continuity.* Lean into this.

**Emoji.** Never. Not in any context.

**Numbers, phone, contact format.** Phone numbers shown with country-specific support lines ("KSA Support Line: 800 246 0006"). Email lowercase. Use real region names, never abbreviations in body copy ("Kingdom of Saudi Arabia," not "KSA," outside of footer-style labels).

**Example copy (carry forward verbatim where it fits):**
- *"STME Services deliver assessment, consulting, deployment, management, and support services in Data Management, Security, and Cloud Solutions, to: Protect your current investments / Improve business productivity / Increase data center efficiency / Grow and adapt with new technologies."*
- *"We are all dedicated to serve you our best service, and satisfy your requirements all the way."* — keep the sentiment, rewrite for tighter modern phrasing: **"Dedicated to serving you, end to end."**

---

## Visual foundations

### Color
A restrained black/white system with **one** signature orange accent. Blue is used **sparingly**, for secondary callouts or technical/data UI — never on primary CTAs.

| Role | Hex | Notes |
|---|---|---|
| Ink / primary text | `#0E0E10` | Near-black, slight warmth |
| Paper / background | `#FFFFFF` | Pure white |
| Soft paper | `#F5F4F1` | Warm off-white — section dividers, cards |
| Hairline | `#E6E4DF` | 1px borders |
| Mute | `#6B6B70` | Secondary text |
| **Signal orange** | `#F26B1F` | Single brand accent — links, CTAs, hover underlines |
| Orange deep | `#D9531A` | Hover/press state |
| **Sky blue** | `#3FA8E0` | Secondary — partner badges, info chips |
| Charcoal | `#1A1A1F` | Dark mode hero / footer |
| Success | `#1F8A5B` | Status only |
| Warning | `#C2860B` | Status only |
| Danger | `#C03B2B` | Status only |

Source for orange + blue: sampled directly from the STME logo cube tiles (#F07020 / #50B0E0); slightly tuned for higher-contrast modern web.

### Type
- **Display + UI:** [Manrope](https://fonts.google.com/specimen/Manrope) (variable weight). Modern, geometric, neutral. Replaces STME's current generic system stack.
- **Mono:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono). For code blocks, spec sheets, port/IP fields.
- **No serif.** Keeps the redesign tight and engineering-credible.

> ⚠️ **Font substitution note:** STME's existing site uses default WordPress theme stacks (no custom webfonts identified). Manrope is the proposed direction — please confirm and supply licensed copies if a paid family is preferred (e.g. Söhne, Inter Display, Söhne Mono).

Display scale (rem at 16px base):
- `display`: 5.5rem (88px) — only for hero
- `h1`: 3.75rem (60px)
- `h2`: 2.5rem (40px)
- `h3`: 1.625rem (26px)
- `h4`: 1.25rem (20px)
- `body`: 1rem (16px)
- `small`: 0.875rem (14px)
- `eyebrow`: 0.75rem (12px), uppercase, letter-spacing 0.12em

Display weights: 700 for headlines; 600 for h3/h4; 400 for body; 500 for nav/UI labels.

Tracking: tight on display (-0.02em to -0.03em). Body neutral. UPPERCASE eyebrows get +0.12em.

### Backgrounds
- Default: pure white paper, lots of breathing room.
- **One** dark hero per page using a photographic image (data center, network gear) with a 50% black scrim. No bluish-purple gradients. No abstract mesh.
- Soft `#F5F4F1` for alternating section bands.
- **No textures, no patterns, no grain.** The visual rhythm comes from typography and whitespace, not decoration.

### Imagery
- Cool-leaning real photography (data centers, server racks, urban GCC skylines for region pages). Slight desaturation.
- Partner logos: monochrome black (or white on dark sections). Never colored — keeps the palette clean.
- No stock illustration. No emoji. No iconographic SVG of "clouds and arrows."

### Iconography
See the **Iconography** section below.

### Layout
- Container max-width: **1280px**, with 24px gutters mobile, 48px desktop.
- **12-column grid** with 24px gutter.
- Generous vertical rhythm: section padding `120px` desktop, `64px` mobile.
- Sections always have a clear eyebrow + headline pattern.
- Top navigation: 72px tall, fixed, white background, hairline bottom border. Goes transparent over dark heroes.

### Corner radii
- `0px` on most surfaces — the system is **square-edged** by default. This is the single biggest departure from current STME and most enterprise sites; it reads modern and editorial.
- `4px` on small chips and form controls.
- `999px` (pill) only on filter chips and partner-logo containers when needed.
- **Never** large 16-24px radii on cards.

### Borders
- `1px solid var(--hairline)` for dividers and card outlines.
- Borders are preferred over shadows. The system uses **one** elevation level, not a stacked z-system.

### Shadows
- Almost none. Reserve `0 1px 0 var(--hairline)` (a single bottom border) for sticky nav.
- One floating shadow allowed: `0 24px 60px -20px rgba(14,14,16,0.18)` for the search overlay / megamenu only.

### Spacing
4px base unit. Tokens: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160.

### Animation
- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` (close to ease-out-quart). Used for all transitions.
- Durations: 150ms (micro), 240ms (default), 400ms (page-level reveal). No bounces. No springs.
- Underlines slide in on link hover (left→right, 240ms).
- Megamenu fades + drops 8px on open.
- **No parallax, no scroll-jacking, no autoplay carousels.** STME currently has 5+ rotating banners — we are deleting that.

### Hover / press
- Links: orange underline slides in (left → right).
- Primary buttons: background flips ink → orange-deep, no shadow change.
- Secondary buttons: hairline border thickens visually by switching to ink color.
- Cards: image scales 1.03 over 400ms; the card itself does **not** move.
- Press state: 95% scale on buttons (60ms in, 120ms out). No color flash.

### Transparency / blur
- Used **only** on the megamenu backdrop (rgba(255,255,255,0.96) + 16px backdrop-blur).
- Dark hero overlay: solid 50% black, no blur.
- Avoid frosted glass on cards — it doesn't ladder with the square-edged aesthetic.

### Protection gradients vs capsules
For text over imagery: use a **solid 50% black scrim across the full image** rather than radial protection gradients. Capsules are not used.

### Fixed elements
- Top nav (fixed, 72px).
- Right-edge "Support" tab (rotated text, fixed mid-height, optional — only on product pages).
- No chat bubble. No cookie sticky-bar in mock.

---

## Iconography

STME's current site does **not** use a defined icon system — it leans on small partner-logo thumbnails and four CMS-uploaded category PNGs ("data-management," "security," "cloud," "prof-service") as decorative thumbnails. There is no icon font, no SVG sprite, no Lucide/Heroicons usage detected.

**For the redesign:** adopt **[Lucide](https://lucide.dev)** as the system icon library — open-source, MIT-licensed, 1.5px stroke, geometric, plays well with Manrope's geometry. Loaded from CDN (`https://unpkg.com/lucide@latest`). All icons drawn at `20×20` or `24×24` with `currentColor` so they tint with text color.

> ⚠️ **Icon substitution flagged:** Lucide is a substitute — STME has no in-house icon set. If a different family is preferred (e.g. Phosphor, custom-drawn), supply files and we'll swap.

**Rules:**
- Always 1.5px stroke. Never filled icons in body content.
- Use icons for navigation/utility (search, menu, chevron, arrow), service category cards, and step indicators. **Not** in headlines, never in inline body copy.
- Region/country: do not use flag emoji. Use the typographic name ("United Arab Emirates / Dubai").
- No unicode dingbats. No emoji anywhere.

**Logos preserved as image assets** (not redrawn): STME logo (`assets/stme-logo.png`). Partner logos — when added by the user — should also live as files in `assets/partners/` in monochrome SVG where possible.

---

## Caveats & open items

- **Provided GitHub repo was empty.** All visual decisions came from scraping the live site + the SBM reference, not from source code. A populated repo (or Figma file) would let us match exact spacing, current copy, and lift partner-logo SVGs.
- **Manrope is a proposed substitute** for whatever font STME's brand bible specifies (none was provided). Confirm or override.
- **Lucide is a proposed substitute** for an icon system STME does not yet have.
- Partner logos (HDS, NetApp, Veritas, Cisco, VMware, etc.) are *placeholders* in the kit — drop real SVGs into `assets/partners/` and the UI kit will pick them up.
- No imagery from STME was lifted — placeholder photographic blocks are used. Replace with licensed photography of data centers, GCC skylines, and team.
