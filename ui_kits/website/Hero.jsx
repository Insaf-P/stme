function Hero({ onContact }) {
  return (
    <section className="hero">
      <div className="hero__img" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2200&q=80')"
      }} />
      <div className="hero__scrim" />
      <div className="hero__inner">
        <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.7)' }}>
          <T en="One Smart Solution" ar="حل ذكي واحد" />
        </div>
        <h1>
          <T en={<>Leading the Future<br />of Technology in the<br /><em>Middle East.</em></>}
             ar={<>نقود مستقبل<br />التكنولوجيا في<br /><em>الشرق الأوسط.</em></>} />
        </h1>
        <p className="hero__sub">
          <T
            en="For over 40 years, we have been the leader in enterprise systems integration — connecting the latest global technologies to build smart solutions that make a difference."
            ar="لأكثر من 40 عاماً، كنا الرواد في تكامل أنظمة المؤسسات — نربط أحدث التقنيات العالمية لبناء حلول ذكية تُحدث فارقاً حقيقياً." />
        </p>
        <div className="hero__cta">
          <button className="btn btn--invert" onClick={onContact}>
            <T en="Talk to sales" ar="تواصل مع المبيعات" /> <Icon name="arrow" size={14} />
          </button>
          <a className="btn btn--secondary" href="#services" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
            <T en="View services" ar="استعرض الخدمات" />
          </a>
        </div>
      </div>
      <div className="hero__meta">
        <span><T en="Since 1982 · KSA · UAE · BH · EG · KW · JO · PK · UK" ar="منذ 1982 · السعودية · الإمارات · البحرين · مصر · الكويت · الأردن · باكستان · بريطانيا" /></span>
        <span><T en="Scroll ↓" ar="↓ انتقل" /></span>
      </div>
    </section>
  );
}
window.Hero = Hero;
