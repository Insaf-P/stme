function AwardsPage({ onContact }) {
  const [activeYear, setActiveYear] = useState(null);

  const years = [
    {
      year: '2019', awards: [
        { title: 'Customer Satisfaction Award 2019',                          by: 'Veritas',                           cat: 'Partner' },
        { title: 'Top SI – Security Services 2019',                           by: 'GEC Security Symposium & Cisco',    cat: 'Industry' },
      ],
    },
    {
      year: '2018', awards: [
        { title: 'Renewal Partner of the Year',                               by: 'Veritas',                           cat: 'Partner' },
        { title: 'Middle East Re-seller of the Year FY18',                    by: 'Commvault',                         cat: 'Partner' },
        { title: 'Middle East Services Partner of the Year FY18',             by: 'Commvault',                         cat: 'Partner' },
        { title: 'Certificate of Appreciation',                               by: 'Huawei Middle East Partner Summit', cat: 'Partner' },
        { title: 'Cloud & Cyber Security Highest Trusted Reseller in MEA',   by: 'Ingram Micro',                      cat: 'Industry' },
      ],
    },
    {
      year: '2017', awards: [
        { title: 'System Integrator of the Year',                             by: 'ICT Achievement Awards',            cat: 'Industry' },
        { title: 'Regional Partner of the Year',                              by: 'Hitachi',                           cat: 'Partner' },
      ],
    },
    {
      year: '2016', awards: [
        { title: '"Best Enterprises" in the Field of Technology',             by: 'Oxford Summit of Leaders',          cat: 'Industry' },
        { title: 'Enterprise Partner of the Year',                            by: 'Veritas',                           cat: 'Partner' },
        { title: 'Backup & Storage System Integrator of the Year',            by: 'GEC Award',                         cat: 'Industry' },
        { title: 'Significant Growth Award',                                  by: 'Symantec',                          cat: 'Partner' },
        { title: 'Data Center Integrator of the Year',                        by: 'The Integrator / VAR',              cat: 'Industry' },
        { title: 'Regional STAR Partner',                                     by: 'NetApp',                            cat: 'Partner' },
        { title: 'Storage Integrator of the Year',                            by: 'The Integrator / VAR',              cat: 'Industry' },
        { title: 'Overall Partner of the Year',                               by: 'Hitachi',                           cat: 'Partner' },
        { title: 'FlexPod Premium Partner',                                   by: 'NetApp',                            cat: 'Partner' },
        { title: 'SE Lifetime Contribution Award',                            by: 'NetApp',                            cat: 'Partner' },
      ],
    },
    {
      year: '2013–2012', awards: [
        { title: 'Outstanding Achievement Award within EMEA',                 by: 'Symantec',                          cat: 'Partner' },
        { title: 'Best Storage Integrator of the Year',                       by: 'Reseller ME',                       cat: 'Industry' },
        { title: 'Largest Deal Appreciation Award in MENA',                   by: 'Symantec',                          cat: 'Partner' },
        { title: 'Middle East System Integrator of the Year',                 by: 'NetApp',                            cat: 'Partner' },
        { title: 'Event System Integrator of the Year',                       by: 'Peer Choice Award',                 cat: 'Industry' },
        { title: 'Storage Integrator of the Year — Choice of Channel',        by: 'Channel Award',                     cat: 'Industry' },
        { title: 'Best Solutions Sales Distributor APAC/ME',                  by: 'Tandberg Data',                     cat: 'Partner' },
        { title: 'Software Partner of the Year CEEMEAT',                      by: 'Hitachi Data Systems',              cat: 'Partner' },
        { title: 'Excellence Achievement Award APAC/ME',                      by: 'Tandberg Data',                     cat: 'Partner' },
        { title: 'SUN Systems Partner of the Year MENA',                      by: 'Sun Microsystems',                  cat: 'Partner' },
      ],
    },
    {
      year: '2007–2002', awards: [
        { title: 'Global Services Partner Network Authorized Support Partner', by: 'NetApp',                           cat: 'Partner' },
        { title: 'Best Partner of the Year MENA',                             by: 'Symantec Partner Summit',           cat: 'Partner' },
        { title: 'Data Centre Partner of the Year — Gulf, Levant, KSA & Pakistan', by: 'Cisco Partner Summit',        cat: 'Partner' },
        { title: 'Storage Partner of the Year (GCC) 2005',                    by: 'Cisco Partner Summit',              cat: 'Partner' },
        { title: 'Master Reseller of the Year',                               by: 'Veritas Partner Program',           cat: 'Partner' },
        { title: 'MEED Business Excellence Awards Finalist',                  by: 'MEED',                              cat: 'Industry' },
      ],
    },
  ];

  const totalAwards = years.reduce((s, y) => s + y.awards.length, 0);
  const displayed = activeYear ? years.filter((y) => y.year === activeYear) : years;

  return (
    <main>
      {/* Full-bleed dark hero */}
      <section style={{ background: '#0E0E10', color: '#fff', padding: '140px 32px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
        {/* Large background year text */}
        <div style={{ position: 'absolute', right: -20, bottom: -40, fontSize: 'clamp(200px,25vw,320px)', fontWeight: 900, lineHeight: 1, color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.05em', pointerEvents: 'none', userSelect: 'none' }}>2019</div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 32, fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'currentColor' }} />
            Recognition
          </div>
          <h1 style={{ fontSize: 'clamp(48px,7vw,88px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.95, maxWidth: '14ch', marginBottom: 48 }}>
            STME<br /><span style={{ color: 'var(--orange)' }}>Awards.</span>
          </h1>
          {/* Stat row */}
          <div style={{ display: 'flex', gap: 0, marginTop: 8 }}>
            {[
              { num: totalAwards + '+', label: 'Total awards' },
              { num: '20+',             label: 'Years recognised' },
              { num: '12+',             label: 'Technology partners' },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: '24px 40px 20px', borderLeft: '1px solid rgba(255,255,255,0.1)', ...(i === 0 ? {} : {}) }}>
                <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--orange)' }}>{s.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year filter pills */}
      <div style={{ borderBottom: '1px solid var(--hairline)', position: 'sticky', top: 72, zIndex: 10, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {['All', ...years.map((y) => y.year)].map((yr) => {
            const isActive = yr === 'All' ? !activeYear : activeYear === yr;
            return (
              <button key={yr} onClick={() => setActiveYear(yr === 'All' ? null : yr)} style={{
                background: 'none', border: 0, padding: '18px 24px', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', color: isActive ? 'var(--ink)' : 'var(--mute)',
                borderBottom: `2px solid ${isActive ? 'var(--ink)' : 'transparent'}`,
                marginBottom: -1, whiteSpace: 'nowrap', fontFamily: 'var(--font-sans)',
                transition: 'color var(--dur-base) var(--ease), border-color var(--dur-base) var(--ease)',
              }}>
                {yr}
              </button>
            );
          })}
        </div>
      </div>

      {/* Award sections */}
      <section style={{ padding: '80px 32px 120px', background: 'var(--soft)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>
          {displayed.map((yr) => (
            <div key={yr.year}>
              {/* Year heading */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 32, paddingBottom: 20, borderBottom: '1px solid var(--hairline)' }}>
                <h2 style={{ fontSize: 'clamp(40px,5vw,64px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--ink)', margin: 0 }}>{yr.year}</h2>
                <span style={{ fontSize: 13, color: 'var(--mute)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {yr.awards.length} {yr.awards.length === 1 ? 'award' : 'awards'}
                </span>
              </div>

              {/* Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {yr.awards.map((aw, i) => (
                  <div key={i} style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--hairline)',
                    padding: '28px 28px 24px',
                    display: 'flex', flexDirection: 'column', gap: 12,
                    position: 'relative', overflow: 'hidden',
                    transition: 'box-shadow var(--dur-base) var(--ease)',
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 32px -8px rgba(14,14,16,0.12)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                  >
                    {/* Accent bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: aw.cat === 'Partner' ? 'var(--orange)' : '#3FA8E0' }} />
                    {/* Category chip */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, width: 'fit-content' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: aw.cat === 'Partner' ? 'var(--orange)' : '#3FA8E0' }} />
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: aw.cat === 'Partner' ? 'var(--orange)' : '#3FA8E0', fontFamily: 'var(--font-mono)' }}>
                        {aw.cat} Award
                      </span>
                    </div>
                    {/* Title */}
                    <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--ink)', flex: 1 }}>{aw.title}</div>
                    {/* Divider + vendor */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 12, borderTop: '1px solid var(--hairline)' }}>
                      <Icon name="shield" size={14} style={{ color: 'var(--mute)', flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: 'var(--mute)', fontWeight: 500 }}>{aw.by}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="section__inner">
          <div className="cta-banner">
            <div>
              <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.45)' }}>Work with a recognised leader</div>
              <h2>35 years of commitment and delivery.</h2>
            </div>
            <div className="cta-banner__actions">
              <button className="btn btn--invert" onClick={onContact}>
                Talk to a specialist <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.AwardsPage = AwardsPage;
