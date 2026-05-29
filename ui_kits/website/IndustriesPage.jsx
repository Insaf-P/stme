function IndustriesPage({ onNavigate, onContact }) {
  const industries = [
    { id: 'public',    num: '01', tag: 'Public sector',      title: 'Modernizing core government infrastructure.',          body: 'Data center consolidation, DR, and secure digital services for government agencies, defense, and healthcare networks.',       img: 'https://images.unsplash.com/photo-1541855492-581f618f69a0?w=1200&q=80' },
    { id: 'financial', num: '02', tag: 'Financial services',  title: 'Hardened data platforms for banks and exchanges.',      body: 'Storage, backup, and business continuity aligned to SAMA, CBUAE, and BMA regulatory frameworks.',                           img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80' },
    { id: 'energy',    num: '03', tag: 'Energy',              title: 'Edge-to-core systems for upstream operations.',         body: 'Ruggedized data management, real-time backup, and edge computing for oil & gas, utilities, and petrochemical operators.',  img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80' },
    { id: 'telecom',   num: '04', tag: 'Telecommunications',  title: 'Infrastructure at carrier scale.',                      body: 'High-density storage, archive, and managed services for national telecoms operators and content delivery networks.',        img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80' },
    { id: 'health',    num: '05', tag: 'Healthcare',          title: 'Compliant data environments for clinical care.',        body: 'Medical imaging storage, long-term archive, and disaster recovery for hospitals, labs, and health networks.',              img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80' },
    { id: 'edu',       num: '06', tag: 'Education',           title: 'Research and campus infrastructure at scale.',          body: 'Centralized storage, virtualization, and managed services for universities, research institutions, and academic networks.',  img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80' },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="eyebrow-row">Industries</div>
          <h1>Where the<br />work runs.</h1>
          <p className="page-hero__sub">Reference deployments across the most demanding infrastructure in the region — from central banks to upstream operations.</p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="industries" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {industries.map((ind, i) => (
              <button className="industry" key={ind.id} onClick={() => onNavigate('industry', ind)}>
                <div className="industry__img"><img src={ind.img} alt="" /></div>
                <div className="industry__meta">{ind.num} <span style={{ color: 'var(--ink)' }}>—</span> {ind.tag}</div>
                <h3>{ind.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Why STME</div>
              <h2>Local teams. Regional expertise.</h2>
            </div>
            <p>STME has operated across the GCC since 1996. Every industry vertical is supported by engineers who understand local regulatory requirements, procurement cycles, and operational constraints — not just the technology.</p>
          </div>
          <StatStrip />
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner">
          <div className="cta-banner">
            <div>
              <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.45)' }}>Reference deployments</div>
              <h2>Have a sector challenge on the desk?</h2>
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
window.IndustriesPage = IndustriesPage;
