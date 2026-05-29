/**
 * STME Theme — stme.js
 * Mega menu, contact drawer, language toggle, region offices, contact form.
 */
(function () {
  'use strict';

  /* ============================================================
     Helpers
  ============================================================ */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  /* ============================================================
     Mega menu
  ============================================================ */
  var triggers  = $$('.mega-trigger');
  var megas     = $$('.mega');
  var closeTimer;

  function openMega(id) {
    clearTimeout(closeTimer);
    megas.forEach(function (m) { m.classList.remove('open'); });
    var target = document.getElementById('mega-' + id);
    if (target) target.classList.add('open');
    triggers.forEach(function (t) {
      t.setAttribute('aria-expanded', t.dataset.mega === id ? 'true' : 'false');
    });
  }

  function closeMegas() {
    closeTimer = setTimeout(function () {
      megas.forEach(function (m) { m.classList.remove('open'); });
      triggers.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
    }, 200);
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('mouseenter', function () { openMega(trigger.dataset.mega); });
    trigger.addEventListener('click', function () {
      var isOpen = document.getElementById('mega-' + trigger.dataset.mega)?.classList.contains('open');
      if (isOpen) { closeMegas(); } else { openMega(trigger.dataset.mega); }
    });
  });

  var nav = $('#stme-nav');
  if (nav) {
    nav.addEventListener('mouseleave', closeMegas);
    megas.forEach(function (m) { m.addEventListener('mouseenter', function () { clearTimeout(closeTimer); }); });
  }

  /* ============================================================
     Contact drawer
  ============================================================ */
  var scrim   = $('#stme-drawer-scrim');
  var drawer  = $('#stme-contact-drawer');
  var closeBtn = $('#stme-drawer-close');
  var openBtns = $$('.stme-contact-trigger');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (scrim)  scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (scrim)  scrim.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtns.forEach(function (btn) { btn.addEventListener('click', openDrawer); });
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim) scrim.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ============================================================
     Contact form submission (drawer)
  ============================================================ */
  var drawerForm    = $('#stme-contact-form');
  var drawerSubmit  = $('#stme-form-submit');
  var drawerSuccess = $('#stme-form-success');

  if (drawerForm && drawerSubmit) {
    drawerSubmit.addEventListener('click', function () {
      var name    = drawerForm.querySelector('[name=name]')?.value || '';
      var email   = drawerForm.querySelector('[name=email]')?.value || '';
      var company = drawerForm.querySelector('[name=company]')?.value || '';
      var message = drawerForm.querySelector('[name=message]')?.value || '';

      if (!name || !email) { alert('Please fill in required fields.'); return; }

      var data = new FormData();
      data.append('action', 'stme_contact');
      data.append('nonce', drawerForm.querySelector('[name=stme_nonce]')?.value || '');
      data.append('name', name);
      data.append('email', email);
      data.append('company', company);
      data.append('message', message);

      drawerSubmit.disabled = true;
      drawerSubmit.textContent = 'Sending…';

      fetch((window.STME && window.STME.ajaxUrl) || '/wp-admin/admin-ajax.php', {
        method: 'POST', body: data
      })
      .then(function (r) { return r.json(); })
      .then(function () {
        if (drawerForm)    drawerForm.style.display    = 'none';
        if (drawerSuccess) drawerSuccess.style.display = 'block';
      })
      .catch(function () {
        drawerSubmit.disabled = false;
        drawerSubmit.textContent = 'Send message';
        alert('Something went wrong. Please try again.');
      });
    });
  }

  /* Contact form on page-contact.php */
  var pageForm    = $('#stme-page-contact-form');
  var pageSuccess = $('#stme-page-form-success');

  if (pageForm) {
    pageForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(pageForm);
      data.append('action', 'stme_contact');

      fetch((window.STME && window.STME.ajaxUrl) || '/wp-admin/admin-ajax.php', {
        method: 'POST', body: data
      })
      .then(function (r) { return r.json(); })
      .then(function () {
        pageForm.style.display    = 'none';
        if (pageSuccess) pageSuccess.style.display = 'block';
      });
    });
  }

  /* ============================================================
     Language toggle
  ============================================================ */
  var langBtns = $$('.lang-btn');

  function applyLang(lang) {
    localStorage.setItem('stme_lang', lang);
    document.documentElement.classList.toggle('ar-mode', lang === 'ar');
    document.documentElement.setAttribute('dir',  lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    langBtns.forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
  }

  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
  });

  // Init from localStorage
  var savedLang = localStorage.getItem('stme_lang') || 'en';
  langBtns.forEach(function (b) {
    b.classList.toggle('is-active', b.dataset.lang === savedLang);
  });

  /* ============================================================
     Region offices (home page)
  ============================================================ */
  var regionData = {
    'Saudi Arabia': [
      { city: 'Riyadh',    addr: 'King Fahd Rd, Olaya District', phone: '+966 11 461 0006' },
      { city: 'Jeddah',    addr: 'Al Madinah Rd, Al Andalus',     phone: '+966 12 668 0006' },
      { city: 'Al Khobar', addr: 'King Faisal St, Al Aqrabia',    phone: '+966 13 882 0006' },
    ],
    'United Arab Emirates': [
      { city: 'Dubai',     addr: 'Sheikh Zayed Rd, Trade Centre 1', phone: '+971 4 397 0006' },
      { city: 'Abu Dhabi', addr: 'Corniche Rd, Al Markaziyah',      phone: '+971 2 627 0006' },
    ],
    'Bahrain':        [{ city: 'Manama',      addr: 'Diplomatic Area, Building 218',   phone: '+973 17 530 006' }],
    'Egypt':          [{ city: 'Cairo',       addr: 'Nile Corniche, Maadi',             phone: '+20 2 252 0006' }],
    'Kuwait':         [{ city: 'Kuwait City', addr: 'Al Sour St, Salhiya',              phone: '+965 2245 0006' }],
    'Jordan':         [{ city: 'Amman',       addr: 'Zahran St, Abdoun',                phone: '+962 6 559 0006' }],
    'Pakistan':       [{ city: 'Karachi',     addr: 'Shahrah-e-Faisal, Block 6',        phone: '+92 21 343 0006' }],
    'United Kingdom': [{ city: 'London',      addr: 'Cannon Street, EC4N',              phone: '+44 20 7283 0006' }],
  };

  var regionTabs    = $('#region-tabs');
  var regionOffices = $('#region-offices');

  function renderOffices(region) {
    if (!regionOffices) return;
    var offices = regionData[region] || [];
    regionOffices.innerHTML = offices.map(function (o) {
      return '<div class="office"><h4>' + o.city + '</h4><p>' + o.addr + '</p><span class="mono">' + o.phone + '</span></div>';
    }).join('');
  }

  if (regionTabs) {
    var tabs = $$('.region-tab', regionTabs);
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        renderOffices(tab.dataset.region);
      });
    });
    // Init first region
    renderOffices('Saudi Arabia');
  }

  /* ============================================================
     Scroll reveal (subtle)
  ============================================================ */
  if ('IntersectionObserver' in window) {
    var style = document.createElement('style');
    style.textContent = '.stme-reveal{opacity:0;transform:translateY(16px);transition:opacity 0.5s ease,transform 0.5s ease}.stme-reveal.visible{opacity:1;transform:none}';
    document.head.appendChild(style);

    var revealEls = $$('.section__head, .stat, .service, .partner-card, .insight, .pillar, .process-step');
    var observer  = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(function (el) {
      el.classList.add('stme-reveal');
      observer.observe(el);
    });
  }

})();
