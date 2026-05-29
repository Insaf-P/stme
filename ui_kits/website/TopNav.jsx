const { useState, useRef, useEffect } = React;

// persist language choice
function getLang() { return localStorage.getItem('stme_lang') || 'en'; }
function setLangPref(l) {
  localStorage.setItem('stme_lang', l);
  document.documentElement.classList.toggle('ar-mode', l === 'ar');
  document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', l);
}

function TopNav({ onContact, onNavigate, route, theme = 'light' }) {
  const [open, setOpen]   = useState(null);
  const [lang, setLangS]  = useState(getLang);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub]   = useState(null);
  const closeTimer        = useRef(null);

  useEffect(() => { setLangPref(lang); }, [lang]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; document.documentElement.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleLang = (l) => { setLangS(l); };

  const handleEnter = (key) => { clearTimeout(closeTimer.current); setOpen(key); };
  const handleLeave = () => { closeTimer.current = setTimeout(() => setOpen(null), 200); };

  const dark = theme === 'dark';
  const navStyle = dark
    ? { background: 'rgba(14,14,16,0.7)', borderBottomColor: 'rgba(255,255,255,0.08)', color: '#fff' }
    : {};

  const go = (r, payload) => { setOpen(null); setMobileOpen(false); setMobileSub(null); onNavigate(r, payload); };
  const toggleSub = (key) => setMobileSub(mobileSub === key ? null : key);

  return (
    <header className="nav" style={navStyle} onMouseLeave={handleLeave}>
      <div className="nav__inner">
        <div className="nav__left">
          <a href="#" className="nav__logo" onClick={(e) => { e.preventDefault(); go('home'); }} aria-label="STME home">
            <img src={(window.__resources && window.__resources.stmeLogo) || '../../assets/stme-logo.png'} alt="STME"
              style={dark ? { filter: 'invert(1) hue-rotate(180deg) brightness(1.2)' } : {}} />
          </a>
          <nav className="nav__links" style={dark ? { color: '#fff' } : {}}>
            <button onMouseEnter={() => handleEnter('about')} onClick={() => setOpen(open === 'about' ? null : 'about')}>
              <T en="About" ar="عن الشركة" /> <Icon name="chevron" size={14} />
            </button>
            <button onMouseEnter={() => handleEnter('services')} onClick={() => setOpen(open === 'services' ? null : 'services')}>
              <T en="Services" ar="الخدمات" /> <Icon name="chevron" size={14} />
            </button>
            <button onMouseEnter={() => handleEnter('products')} onClick={() => setOpen(open === 'products' ? null : 'products')}>
              <T en="Products & Solutions" ar="المنتجات والحلول" /> <Icon name="chevron" size={14} />
            </button>
            <button onMouseEnter={() => handleEnter('industries')} onClick={() => setOpen(open === 'industries' ? null : 'industries')}>
              <T en="Industries" ar="القطاعات" /> <Icon name="chevron" size={14} />
            </button>
            <button onMouseEnter={() => handleEnter(null)} onClick={() => go('partners')}>
              <T en="Partners" ar="الشركاء" />
            </button>
            <button onMouseEnter={() => handleEnter(null)} onClick={() => go('insights')}>
              <T en="Insights" ar="الأخبار" />
            </button>
            <button onMouseEnter={() => handleEnter(null)} onClick={() => go('contact')}>
              <T en="Contact" ar="اتصل بنا" />
            </button>
          </nav>
        </div>
        <div className="nav__right">
          <button className="btn btn--primary" onClick={onContact} style={dark ? { background: '#fff', color: '#0E0E10' } : {}}>
            <T en="Talk to sales" ar="تواصل معنا" /> <Icon name="arrow" size={14} />
          </button>
          <button className="nav__burger" aria-label="Open menu" onClick={() => setMobileOpen(true)} style={dark ? { color: '#fff' } : {}}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button aria-label="Close menu" onClick={() => setMobileOpen(false)}
          style={{ position: 'absolute', top: 24, right: 28, background: 'none', border: 0, cursor: 'pointer', color: 'var(--ink)', padding: 6 }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div className="mobile-menu__group">
          <button className={`mobile-menu__top ${mobileSub === 'about' ? 'open' : ''}`} onClick={() => toggleSub('about')}>
            <T en="About" ar="عن الشركة" /> <Icon name="chevron" size={16} />
          </button>
          <div className={`mobile-menu__sub ${mobileSub === 'about' ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); go('about'); }}><T en="About us" ar="من نحن" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('awards'); }}><T en="STME awards" ar="جوائز الشركة" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('customers'); }}><T en="Our customers" ar="عملاؤنا" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('careers'); }}><T en="Careers" ar="الوظائف" /></a>
          </div>
        </div>

        <div className="mobile-menu__group">
          <button className={`mobile-menu__top ${mobileSub === 'services' ? 'open' : ''}`} onClick={() => toggleSub('services')}>
            <T en="Services" ar="الخدمات" /> <Icon name="chevron" size={16} />
          </button>
          <div className={`mobile-menu__sub ${mobileSub === 'services' ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); go('services'); }}><T en="All services" ar="جميع الخدمات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Cloud' }); }}><T en="Cloud infrastructure" ar="البنية التحتية السحابية" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Security' }); }}><T en="Cybersecurity" ar="الأمن السيبراني" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Storage' }); }}><T en="Storage solutions" ar="حلول التخزين" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Backup' }); }}><T en="Backup & DR" ar="النسخ الاحتياطي" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Networks' }); }}><T en="Enterprise networks" ar="شبكات المؤسسات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'AI & Data' }); }}><T en="AI & data" ar="الذكاء الاصطناعي" /></a>
          </div>
        </div>

        <div className="mobile-menu__group">
          <button className={`mobile-menu__top ${mobileSub === 'products' ? 'open' : ''}`} onClick={() => toggleSub('products')}>
            <T en="Products & Solutions" ar="المنتجات والحلول" /> <Icon name="chevron" size={16} />
          </button>
          <div className={`mobile-menu__sub ${mobileSub === 'products' ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="All products" ar="جميع المنتجات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Storage & data" ar="التخزين والبيانات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Infrastructure" ar="البنية التحتية" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Security" ar="الأمن" /></a>
          </div>
        </div>

        <a className="mobile-menu__link" href="#" onClick={(e) => { e.preventDefault(); go('industries'); }}><T en="Industries" ar="القطاعات" /></a>
        <a className="mobile-menu__link" href="#" onClick={(e) => { e.preventDefault(); go('partners'); }}><T en="Partners" ar="الشركاء" /></a>
        <a className="mobile-menu__link" href="#" onClick={(e) => { e.preventDefault(); go('insights'); }}><T en="Insights" ar="الأخبار" /></a>
        <a className="mobile-menu__link" href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}><T en="Contact" ar="اتصل بنا" /></a>

        <div className="mobile-menu__cta">
          <button className="btn btn--primary" onClick={() => { setMobileOpen(false); onContact(); }}>
            <T en="Talk to sales" ar="تواصل معنا" /> <Icon name="arrow" size={14} />
          </button>
        </div>
      </div>

      {/* Services mega menu */}
      <div className={`mega ${open === 'services' ? 'open' : ''}`} onMouseEnter={() => handleEnter('services')}>
        <div className="mega__inner">
          <div className="mega__feature">
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}><T en="Featured" ar="مميز" /></div>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12, color: '#fff' }}>
                <T en="Built for enterprise. Backed for 35 years." ar="مصمم للمؤسسات. موثوق منذ 35 عاماً." />
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                <T en="Storage, security, and cloud delivered across eight markets in the region." ar="التخزين والأمن والسحابة عبر ثمانية أسواق في المنطقة." />
              </p>
            </div>
            <a href="#" className="uline" style={{ color: '#fff', fontSize: 13 }} onClick={(e) => { e.preventDefault(); go('services'); }}>
              <T en="Explore capabilities →" ar="استكشف القدرات ←" />
            </a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="cloud" size={14} /><T en="Cloud & Storage" ar="السحابة والتخزين" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Cloud' }); }}><T en="Cloud infrastructure" ar="البنية التحتية السحابية" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Storage' }); }}><T en="Storage solutions" ar="حلول التخزين" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Backup' }); }}><T en="Backup & disaster recovery" ar="النسخ الاحتياطي والتعافي" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="shield" size={14} /><T en="Security" ar="الأمن" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Security' }); }}><T en="Cybersecurity" ar="الأمن السيبراني" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Security' }); }}><T en="IAM & identity" ar="إدارة الهوية والوصول" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Security' }); }}><T en="SIEM & SOC" ar="مركز العمليات الأمنية" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="network" size={14} /><T en="Networks & AI" ar="الشبكات والذكاء الاصطناعي" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Networks' }); }}><T en="Enterprise networks" ar="شبكات المؤسسات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'Networks' }); }}><T en="SD-WAN" ar="الشبكة الواسعة المعرّفة بالبرمجيات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('service', { cat: 'AI & Data' }); }}><T en="AI & data analytics" ar="الذكاء الاصطناعي وتحليل البيانات" /></a>
          </div>
        </div>
      </div>

      {/* Products & Solutions mega menu */}
      <div className={`mega ${open === 'products' ? 'open' : ''}`} onMouseEnter={() => handleEnter('products')}>
        <div className="mega__inner" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr' }}>
          <div className="mega__feature">
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}><T en="Portfolio" ar="المحفظة" /></div>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12, color: '#fff' }}>
                <T en="30+ vendor products. One trusted partner." ar="أكثر من 30 منتجاً. شريك واحد موثوق." />
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                <T en="Best-in-class products from HDS, NetApp, Veritas, Cisco, VMware and more." ar="منتجات رائدة من HDS وNetApp وVeritas وCisco وVMware والمزيد." />
              </p>
            </div>
            <a href="#" className="uline" style={{ color: '#fff', fontSize: 13 }} onClick={(e) => { e.preventDefault(); go('products'); }}>
              <T en="View all products →" ar="عرض جميع المنتجات ←" />
            </a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="database" size={14} /><T en="Storage & Data" ar="التخزين والبيانات" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Data availability" ar="إتاحة البيانات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Data management" ar="إدارة البيانات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Data protection & recovery" ar="حماية البيانات والتعافي" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="High availability & DR" ar="التوافر العالي والتعافي من الكوارث" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="ILM & archiving" ar="إدارة دورة حياة المعلومات" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="network" size={14} /><T en="Infrastructure" ar="البنية التحتية" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Server hardware & SAN" ar="الخوادم والشبكات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Virtualization" ar="الافتراضية" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="IoT solutions" ar="حلول إنترنت الأشياء" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="shield" size={14} /><T en="Security" ar="الأمن" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Security solutions" ar="الحلول الأمنية" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Palo Alto Networks" ar="Palo Alto Networks" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Fortinet" ar="فورتينت" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="IBM Security" ar="IBM للأمن" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="FireEye" ar="فاير آي" /></a>
          </div>
        </div>
      </div>

      {/* About mega menu */}
      <div className={`mega ${open === 'about' ? 'open' : ''}`} onMouseEnter={() => handleEnter('about')}>
        <div className="mega__inner" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr' }}>
          <div className="mega__feature">
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}><T en="About STME" ar="عن الشركة" /></div>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12, color: '#fff' }}>
                <T en="Heritage of commitment & delivery." ar="إرث من الالتزام والإنجاز." />
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                <T en="Founded in 1982. 400+ enterprise clients. Eight markets. One Smart Solution." ar="تأسست عام 1982. أكثر من 400 عميل. ثمانية أسواق. حل ذكي واحد." />
              </p>
            </div>
            <a href="#" className="uline" style={{ color: '#fff', fontSize: 13 }} onClick={(e) => { e.preventDefault(); go('about'); }}>
              <T en="Our story →" ar="قصتنا ←" />
            </a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="tools" size={14} /><T en="Company" ar="الشركة" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('about'); }}><T en="About us" ar="من نحن" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('about'); }}><T en="Heritage & history" ar="الإرث والتاريخ" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('about'); }}><T en="Our offices" ar="مكاتبنا" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="shield" size={14} /><T en="Recognition" ar="التقدير" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('awards'); }}><T en="STME awards" ar="جوائز الشركة" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('awards'); }}><T en="Industry accolades" ar="الاعتراف الصناعي" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('awards'); }}><T en="Partner certifications" ar="شهادات الشركاء" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="network" size={14} /><T en="Customers" ar="العملاء" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('customers'); }}><T en="Our customers" ar="عملاؤنا" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('customers'); }}><T en="Banking & finance" ar="البنوك والمال" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('customers'); }}><T en="Government" ar="الحكومة" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('customers'); }}><T en="Oil & gas" ar="النفط والغاز" /></a>
          </div>
        </div>
      </div>

      {/* Industries mega menu */}
      <div className={`mega ${open === 'industries' ? 'open' : ''}`} onMouseEnter={() => handleEnter('industries')}>
        <div className="mega__inner">
          <div className="mega__feature">
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}><T en="Sectors" ar="القطاعات" /></div>
              <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12, color: '#fff' }}>
                <T en="From central banks to oil & gas." ar="من البنوك المركزية إلى النفط والغاز." />
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                <T en="Reference deployments across the GCC's most demanding infrastructure." ar="نشر مرجعي عبر أكثر بنى تحتية تطلباً في الخليج." />
              </p>
            </div>
            <a href="#" className="uline" style={{ color: '#fff', fontSize: 13 }} onClick={(e) => { e.preventDefault(); go('industries'); }}>
              <T en="All industries →" ar="جميع القطاعات ←" />
            </a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="tools" size={14} /><T en="Public sector" ar="القطاع العام" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'public' }); }}><T en="Government" ar="الحكومة" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'public' }); }}><T en="Defense" ar="الدفاع" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'health' }); }}><T en="Healthcare" ar="الرعاية الصحية" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="database" size={14} /><T en="Financial services" ar="الخدمات المالية" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'financial' }); }}><T en="Banking" ar="البنوك" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'financial' }); }}><T en="Capital markets" ar="أسواق رأس المال" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'financial' }); }}><T en="Insurance" ar="التأمين" /></a>
          </div>
          <div className="mega__col">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="hdd" size={14} /><T en="Industry" ar="الصناعة" /></h4>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'energy' }); }}><T en="Energy" ar="الطاقة" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'telecom' }); }}><T en="Telecommunications" ar="الاتصالات" /></a>
            <a href="#" onClick={(e) => { e.preventDefault(); go('industry', { id: 'edu' }); }}><T en="Education" ar="التعليم" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
window.TopNav = TopNav;
