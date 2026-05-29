function Footer({ onContact, onNavigate }) {
  const go = (r) => onNavigate && onNavigate(r);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__cta">
            <h3><T en="Have an infrastructure project on the desk?" ar="هل لديك مشروع بنية تحتية؟" /></h3>
            <button className="btn btn--invert" onClick={onContact}>
              <T en="Talk to sales" ar="تواصل مع المبيعات" /> <Icon name="arrow" size={14} />
            </button>
          </div>
          <div>
            <h4><T en="Quick Links" ar="روابط سريعة" /></h4>
            <ul>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('services'); }}><T en="Services" ar="الخدمات" /></a></li>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('products'); }}><T en="Products & Solutions" ar="المنتجات والحلول" /></a></li>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('industries'); }}><T en="Industries" ar="القطاعات" /></a></li>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('partners'); }}><T en="Partners" ar="الشركاء" /></a></li>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('insights'); }}><T en="Insights" ar="الأخبار" /></a></li>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('about'); }}><T en="About" ar="عن الشركة" /></a></li>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('careers'); }}><T en="Careers" ar="الوظائف" /></a></li>
              <li><a className="uline" href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}><T en="Contact" ar="اتصل بنا" /></a></li>
            </ul>
          </div>
          <div>
            <h4><T en="Support" ar="الدعم الفني" /></h4>
            <ul>
              <li><T en="KSA" ar="السعودية" /> <span style={{ color: 'rgba(255,255,255,0.6)' }}>800 246 0006</span></li>
              <li><T en="UAE" ar="الإمارات" /> <span style={{ color: 'rgba(255,255,255,0.6)' }}>800 8810</span></li>
              <li><a className="uline" href="mailto:supportline@stme.com">supportline@stme.com</a></li>
            </ul>
          </div>
          <div>
            <h4><T en="News & Updates" ar="الأخبار والتحديثات" /></h4>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>
              <T en="Quarterly briefs on the GCC infrastructure market." ar="نشرات ربع سنوية عن سوق البنية التحتية في الخليج." />
            </p>
            <form className="footer__sub" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="you@company.com" />
              <button><T en="Subscribe" ar="اشترك" /></button>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 1982–2026 Storage Technology Middle East. <T en="One Smart Solution." ar="حل ذكي واحد." /></span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#"><T en="Privacy" ar="الخصوصية" /></a>
            <a href="#"><T en="Terms" ar="الشروط" /></a>
            <a href="#"><T en="Cookies" ar="ملفات تعريف الارتباط" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
