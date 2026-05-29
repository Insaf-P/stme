function CustomersPage({ onContact }) {
  const [tab, setTab] = useState('All');

  const sectors = {
    All: [
      { name: 'Saudi Arabian Monetary Authority', abbr: 'SAMA',    sector: 'Banking & Finance' },
      { name: 'National Commercial Bank',          abbr: 'NCB',     sector: 'Banking & Finance' },
      { name: 'Al Rajhi Bank',                     abbr: 'AlRajhi', sector: 'Banking & Finance' },
      { name: 'Riyad Bank',                        abbr: 'Riyad',   sector: 'Banking & Finance' },
      { name: 'Arab National Bank',                abbr: 'ANB',     sector: 'Banking & Finance' },
      { name: 'Banque Saudi Fransi',               abbr: 'BSF',     sector: 'Banking & Finance' },
      { name: 'Emirates NBD',                      abbr: 'ENBD',    sector: 'Banking & Finance' },
      { name: 'Abu Dhabi Commercial Bank',         abbr: 'ADCB',    sector: 'Banking & Finance' },
      { name: 'First Abu Dhabi Bank',              abbr: 'FAB',     sector: 'Banking & Finance' },
      { name: 'Mashreq Bank',                      abbr: 'Mashreq', sector: 'Banking & Finance' },
      { name: 'National Bank of Bahrain',          abbr: 'NBB',     sector: 'Banking & Finance' },
      { name: 'Kuwait Finance House',              abbr: 'KFH',     sector: 'Banking & Finance' },
      { name: 'National Bank of Egypt',            abbr: 'NBE',     sector: 'Banking & Finance' },
      { name: 'Saudi Aramco',                      abbr: 'Aramco',  sector: 'Oil & Gas' },
      { name: 'SABIC',                             abbr: 'SABIC',   sector: 'Oil & Gas' },
      { name: 'ADNOC',                             abbr: 'ADNOC',   sector: 'Oil & Gas' },
      { name: 'Kuwait Oil Company',                abbr: 'KOC',     sector: 'Oil & Gas' },
      { name: 'Bapco',                             abbr: 'Bapco',   sector: 'Oil & Gas' },
      { name: 'Egyptian General Petroleum Corp.',  abbr: 'EGPC',    sector: 'Oil & Gas' },
      { name: 'Saudi Electricity Company',         abbr: 'SEC',     sector: 'Oil & Gas' },
      { name: 'Ministry of Interior KSA',          abbr: 'MOI',     sector: 'Government' },
      { name: 'Ministry of Finance KSA',           abbr: 'MOF',     sector: 'Government' },
      { name: 'General Authority of Civil Aviation', abbr: 'GACA',  sector: 'Government' },
      { name: 'General Organization for Social Insurance', abbr: 'GOSI', sector: 'Government' },
      { name: 'Dubai Electricity & Water Authority', abbr: 'DEWA', sector: 'Government' },
      { name: 'Ministry of Interior UAE',          abbr: 'MOI UAE', sector: 'Government' },
      { name: 'Bahrain Government',                abbr: 'GOB',     sector: 'Government' },
      { name: 'Saudi Post',                        abbr: 'SPL',     sector: 'Government' },
      { name: 'Saudi Telecom',                     abbr: 'STC',     sector: 'Telecom & Others' },
      { name: 'Mobily',                            abbr: 'Mobily',  sector: 'Telecom & Others' },
      { name: 'Zain KSA',                          abbr: 'Zain',    sector: 'Telecom & Others' },
      { name: 'du Telecom',                        abbr: 'du',      sector: 'Telecom & Others' },
      { name: 'Etisalat',                          abbr: 'Etisalat',sector: 'Telecom & Others' },
      { name: 'Gulf Air',                          abbr: 'GF',      sector: 'Telecom & Others' },
      { name: 'Saudi Airlines',                    abbr: 'SV',      sector: 'Telecom & Others' },
      { name: 'King Faisal Specialist Hospital',   abbr: 'KFSH',    sector: 'Telecom & Others' },
      { name: 'KAUST',                             abbr: 'KAUST',   sector: 'Telecom & Others' },
    ],
    'Banking & Finance': [],
    'Government': [],
    'Oil & Gas': [],
    'Telecom & Others': [],
  };

  // Populate sub-tabs from All
  sectors['Banking & Finance'] = sectors.All.filter((c) => c.sector === 'Banking & Finance');
  sectors['Government']        = sectors.All.filter((c) => c.sector === 'Government');
  sectors['Oil & Gas']         = sectors.All.filter((c) => c.sector === 'Oil & Gas');
  sectors['Telecom & Others']  = sectors.All.filter((c) => c.sector === 'Telecom & Others');

  const tabs    = Object.keys(sectors);
  const clients = sectors[tab];

  const sectorColors = {
    'Banking & Finance': '#3FA8E0',
    'Government':        '#1F8A5B',
    'Oil & Gas':         '#F26B1F',
    'Telecom & Others':  '#6B6B70',
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--ink-2)', color: 'var(--paper)', padding: '120px 32px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }} />
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', position: 'relative' }}>
          <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.5)' }}>Our customers</div>
          <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 0.98, maxWidth: '18ch', textWrap: 'balance', margin: '24px 0', color: '#fff' }}>
            400+ enterprise clients across the region.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: '52ch', lineHeight: 1.55, marginBottom: 48 }}>
            STME serves the most demanding organisations in the Middle East — from central banks and sovereign agencies to national oil companies and telecom operators.
          </p>
          {/* Sector stats */}
          <div style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)', borderLeft: '1px solid rgba(255,255,255,0.12)', width: 'fit-content', flexWrap: 'wrap' }}>
            {[
              { num: '400+', label: 'Enterprise customers' },
              { num: '8',    label: 'Markets served' },
              { num: '35+',  label: 'Years of trust' },
              { num: '4',    label: 'Key industry sectors' },
            ].map((s) => (
              <div key={s.label} style={{ borderRight: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '28px 40px 24px' }}>
                <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--orange)', marginBottom: 6 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client grid */}
      <section className="section">
        <div className="section__inner">
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--hairline)', marginBottom: 48 }}>
            {tabs.map((t) => (
              <button key={t} className={`region-tab ${tab === t ? 'is-active' : ''}`} style={{ paddingRight: 32 }} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>

          {/* Logo wall */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', borderTop: '1px solid var(--hairline)', borderLeft: '1px solid var(--hairline)' }}>
            {clients.map((c) => (
              <div key={c.name} title={c.name} style={{
                borderRight: '1px solid var(--hairline)',
                borderBottom: '1px solid var(--hairline)',
                aspectRatio: '2/1',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 6, padding: '20px 16px',
                cursor: 'default',
                transition: 'background var(--dur-base) var(--ease)',
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--soft)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {/* Styled wordmark */}
                <div style={{
                  fontSize: c.abbr.length > 5 ? 14 : c.abbr.length > 4 ? 16 : 20,
                  fontWeight: 800,
                  letterSpacing: c.abbr.length > 4 ? '-0.01em' : '-0.02em',
                  color: 'var(--ink)',
                  lineHeight: 1,
                  textAlign: 'center',
                }}>{c.abbr}</div>
                <div style={{
                  fontSize: 10,
                  color: 'var(--mute)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  maxWidth: 100,
                  fontWeight: 500,
                }}>{c.name}</div>
              </div>
            ))}
            {/* "& many more" tile */}
            <div style={{
              borderRight: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
              aspectRatio: '2/1',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--soft)',
            }}>
              <span style={{ fontSize: 13, color: 'var(--mute)', fontStyle: 'italic' }}>& many more…</span>
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
            {Object.entries(sectorColors).map(([sector, color]) => (
              <div key={sector} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--mute)' }}>
                <div style={{ width: 16, height: 3, background: color }} />
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust statement */}
      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Why they trust STME</div>
              <h2>We are all dedicated to serve you, end to end.</h2>
            </div>
            <div>
              <p style={{ marginBottom: 20 }}>STME has been the infrastructure partner of choice for the region's most critical organisations since 1982 — because of one thing: we do what we say we will do.</p>
              <button className="btn btn--primary" onClick={onContact}>
                Become a customer <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
          <StatStrip />
        </div>
      </section>
    </main>
  );
}
window.CustomersPage = CustomersPage;
