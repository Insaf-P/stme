# STME WordPress Theme

Official WordPress theme for **Storage Technology Middle East (STME)**.

---

## Theme structure

```
stme-theme/
├── style.css                  # Theme metadata (required by WordPress)
├── functions.php              # Theme setup, enqueue, CPTs, menus
├── header.php                 # Navigation with mega menus
├── footer.php                 # Footer + contact drawer
├── index.php                  # Blog/search fallback
├── front-page.php             # Home page (static front page)
├── page.php                   # Default page template
├── page-about.php             # About page
├── page-services.php          # Services overview
├── page-partners.php          # Partners
├── page-insights.php          # Insights / News listing
├── page-contact.php           # Contact page with form + offices
├── page-careers.php           # Careers / Job listing
├── page-products.php          # Products & Solutions
├── page-awards.php            # STME Awards
├── page-customers.php         # Our Customers
├── single-stme_insight.php    # Single Insight article
├── single-stme_job.php        # Single Job detail
├── 404.php                    # 404 error page
└── assets/
    ├── css/
    │   └── stme.css           # Combined design system CSS
    ├── js/
    │   └── stme.js            # Mega menu, drawer, lang toggle, regions
    └── images/
        └── stme-logo.png      # STME logo
```

---

## Installation

1. Upload the `stme-theme/` folder to `/wp-content/themes/`
2. Go to **Appearance → Themes** and activate **STME — One Smart Solution**
3. Go to **Settings → Reading** → set a static front page (create a page called "Home")

---

## Page setup

Create pages in WordPress with these exact slugs and assign templates:

| Page title     | Slug         | Template             |
|----------------|--------------|----------------------|
| Home           | home         | Front Page (auto)    |
| Services       | services     | page-services.php    |
| About          | about        | page-about.php       |
| Partners       | partners     | page-partners.php    |
| Insights       | insights     | page-insights.php    |
| Contact        | contact      | page-contact.php     |
| Careers        | careers      | page-careers.php     |
| Products       | products     | page-products.php    |
| Awards         | awards       | page-awards.php      |
| Customers      | customers    | page-customers.php   |

---

## Custom post types

The theme registers two custom post types:

### Insights (`stme_insight`)
- Accessible at `/insights/`
- Add via **Insights → Add New** in the admin
- Set **Insight Type** (Note / Customer story / Brief / News / Announcement / Award) in the sidebar meta box
- Featured image is used as the thumbnail

### Jobs (`stme_job`)
- Accessible at `/careers/`
- Add via **Jobs → Add New** in the admin
- Set custom fields: `_job_dept`, `_job_location` via Custom Fields panel

---

## Navigation

Register menus at **Appearance → Menus**:
- **Primary Navigation** — used in top nav bar
- **Footer Navigation** — used in footer

The mega menus (About, Services, Products) are hardcoded in `header.php` for reliability. Update URLs there if your permalink structure differs.

---

## Contact form

The contact drawer and page contact form submit via WordPress AJAX to `stme_handle_contact()` in `functions.php`. The form sends an email to the admin email address set in **Settings → General**.

To change the recipient: edit the `$to` variable in `stme_handle_contact()` in `functions.php`.

---

## Arabic / RTL support

The theme includes built-in Arabic language support. A language toggle (EN | ع) appears in the top nav. Language preference is saved in `localStorage` and applied immediately on page load via inline script in `header.php`.

Arabic uses the **Cairo** Google Font (automatically loaded). RTL layout rules are included in `stme.css`.

---

## Customization

- **Colors / tokens** — Edit CSS variables at the top of `assets/css/stme.css`
- **Logo** — Upload via **Appearance → Customize → Site Identity** (Custom Logo)
- **Footer copyright** — Edit `footer.php` (year auto-updates via PHP `date()`)
- **Office locations** — Edit the `$regions` array in `assets/js/stme.js` (front page) or the `$offices` array in `page-contact.php`

---

## Requirements

- WordPress 6.0+
- PHP 8.0+
- No additional plugins required

---

© 1982–<?php echo date('Y'); ?> Storage Technology Middle East
