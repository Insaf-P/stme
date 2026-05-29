# STME — Hello Elementor Child Theme

## Requirements
- **Hello Elementor** theme (free, install from Appearance → Themes → Add New)
- **Elementor** plugin (free) or Elementor Pro

## Installation
1. Install & activate **Hello Elementor** from Appearance → Themes → Add New
2. Upload `stme-elementor-child/` to `/wp-content/themes/`
3. Activate **STME — Hello Elementor Child** from Appearance → Themes

## Header & Footer

### Without Elementor Pro
The theme ships with `header.php` and `footer.php` overrides. The STME nav and footer display automatically on every page — no extra setup needed.

### With Elementor Pro (Theme Builder)
If you want to manage header/footer via Elementor Pro's Theme Builder:
1. Go to **Elementor → Theme Builder → Header → Add New**
2. Design your header visually, then set display conditions to All Pages
3. Repeat for **Footer**
The `header.php` / `footer.php` overrides will be bypassed automatically by Elementor Pro.

## Page Setup
1. Create pages in WordPress and open them in Elementor
2. Set each page template to **Elementor Canvas** (no header/footer — use when Elementor Pro Theme Builder handles them) or **Elementor Full Width** (uses this theme's header/footer)
3. For the home page: **Settings → Reading** → set a static front page

## Custom Post Types
The theme registers:
- **Insights** (`stme_insight`) — add via Insights → Add New, set Insight Type in sidebar
- **Jobs** (`stme_job`) — add via Jobs → Add New, set `_job_dept` and `_job_location` via Custom Fields

## Contact Form (AJAX)
The slide-in contact drawer submits via WordPress AJAX to the admin email set in **Settings → General**. To change the recipient, edit `$to` in `stme_handle_contact()` in `functions.php`.

## Arabic / RTL
Language toggle (EN | ع) is in the top nav. Preference is stored in `localStorage`. Arabic uses the Cairo Google Font. RTL layout rules are in `assets/css/stme.css`.

## Customisation
- **Design tokens** — edit CSS variables at the top of `assets/css/stme.css`
- **Logo** — Appearance → Customize → Site Identity → Custom Logo
- **Footer copyright** — edit `footer.php` (year auto-updates via PHP `date()`)
- **Mega menu links** — edit `header.php` directly
