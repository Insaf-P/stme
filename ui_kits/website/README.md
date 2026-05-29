# STME website — UI kit

A pixel-considered recreation of the **redesigned** STME marketing website, in the spirit of [sbm.com.sa](https://www.sbm.com.sa/) but stripped down further. Square-edged, type-first, restrained color.

## Files

- `index.html` — interactive prototype. Top-level routes: **Home**, **Services detail**, and a slide-in **Contact** drawer. Click through nav and CTAs to navigate.
- `App.jsx` — root, holds route state.
- `TopNav.jsx` — fixed nav with mega-menu.
- `Hero.jsx` — dark photographic hero, big headline.
- `StatStrip.jsx` — three-figure counter row.
- `ServicesGrid.jsx` — four-card service overview.
- `PartnerStrip.jsx` — monochrome partner row.
- `Industries.jsx` — three industries with imagery.
- `Insights.jsx` — three news cards with dates.
- `RegionPanel.jsx` — office switcher (8 markets).
- `Footer.jsx` — dark footer.
- `ContactDrawer.jsx` — right-side slide-over form.
- `ServicesDetail.jsx` — secondary page showing a single service.
- `Icon.jsx` — tiny Lucide-style stroke icons drawn inline (chevron, arrow, search, menu, etc).

## Interactions wired up

- Top-nav **Services** opens a mega-menu (hover/click).
- **Talk to sales** opens the contact drawer (Esc to dismiss).
- Clicking any service card routes to **Services detail**.
- **Region** chip in footer opens a region overlay.

## What's mocked vs faked

- Imagery is photographic via placeholder URLs (`https://images.unsplash.com/photo-...`). Swap with licensed assets.
- Partner logos are monochrome wordmarks (typeset). Drop SVGs into `../../assets/partners/` to upgrade.
- News dates and post titles are illustrative — not real STME content.
