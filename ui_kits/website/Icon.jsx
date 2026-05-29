/* global */

// Smooth-scroll to a section, offset for the sticky 72px nav
function stmeScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
  window.scrollTo({ top, behavior: 'smooth' });
}
window.stmeScrollTo = stmeScrollTo;

// slugify a TOC label into an id
function stmeSlug(s) { return 'sec-' + String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
window.stmeSlug = stmeSlug;

// Bilingual text component
function T({ en, ar }) {
  return React.createElement(React.Fragment, null,
    React.createElement('span', { className: 't-en' }, en),
    React.createElement('span', { className: 't-ar' }, ar)
  );
}
window.T = T;

function Icon({ name, size = 20 }) {
  const paths = {
    arrow:    <path d="M5 12h14M13 5l7 7-7 7" />,
    chevron:  <path d="M6 9l6 6 6-6" />,
    chevronR: <path d="M9 6l6 6-6 6" />,
    close:    <path d="M6 6l12 12M18 6L6 18" />,
    search:   <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>,
    menu:     <path d="M4 7h16M4 12h16M4 17h16" />,
    plus:     <path d="M12 5v14M5 12h14" />,
    shield:   <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
    cloud:    <path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6 18h11z" />,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    tools:    <path d="M14 7l3-3 3 3-3 3-3-3zM4 20l5-5M10 14l3 3-4 4-3-3 4-4zM12 11l3-3 3 3-3 3-3-3z" />,
    ai:       <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></>,
    hdd:      <><rect x="2" y="7" width="20" height="10" rx="2" /><circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none" /><path d="M6 12h6" /></>,
    network:  <><rect x="9" y="2" width="6" height="4" rx="1" /><rect x="2" y="17" width="6" height="4" rx="1" /><rect x="16" y="17" width="6" height="4" rx="1" /><path d="M12 6v4M12 10H7v7M12 10h5v7" /></>,
  };
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
}
window.Icon = Icon;
