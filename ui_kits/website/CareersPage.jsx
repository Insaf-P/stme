function CareersPage({ onContact, onNavigate }) {
  const reasons = [
    { num: '01', title: 'Regional scale, local roots',   body: 'Work across eight markets — KSA, UAE, Bahrain, Egypt, Kuwait, Jordan, Pakistan, and the UK — while staying close to the communities and clients you serve.' },
    { num: '02', title: 'Vendor-certified expertise',    body: '60+ certified experts hold the highest accreditations in the Middle East in data management and security. STME invests in continuous certification across all major technology platforms.' },
    { num: '03', title: 'Enterprise clients',            body: 'Deliver projects for the region\'s largest banks, government agencies, and energy operators. The infrastructure you build and run keeps critical systems operational.' },
    { num: '04', title: '35+ years of stability',        body: 'Founded in 1982, STME has operated through multiple technology cycles. A stable, growing company with long-term client relationships and a track record that speaks for itself.' },
  ];

  const roles = [
    { dept: 'Engineering',        title: 'Senior Storage Engineer',             location: 'Riyadh, KSA',       type: 'Full-time', desc: 'Design and deploy enterprise storage environments across Hitachi and NetApp platforms for banking and government clients.' },
    { dept: 'Engineering',        title: 'Security Solutions Architect',        location: 'Dubai, UAE',        type: 'Full-time', desc: 'Lead security architecture engagements across network, endpoint, and identity layers aligned to SAMA and NCA frameworks.' },
    { dept: 'Engineering',        title: 'Cloud & Virtualization Engineer',     location: 'Riyadh, KSA',       type: 'Full-time', desc: 'Deploy and manage VMware vSphere, Cisco UCS, and private cloud environments for enterprise clients across the region.' },
    { dept: 'Services',           title: 'Managed Services NOC Engineer',       location: 'Jeddah, KSA',       type: 'Full-time', desc: 'Operate 24/7 NOC services for managed storage and infrastructure clients, supporting SLA commitments across the estate.' },
    { dept: 'Services',           title: 'Resident Engineer — Data Management', location: 'Abu Dhabi, UAE',    type: 'Full-time', desc: 'Embedded resident engineer at a major financial institution, managing day-to-day storage operations and incident response.' },
    { dept: 'Project Management', title: 'IT Project Manager (PMO)',            location: 'Riyadh, KSA',       type: 'Full-time', desc: 'Lead infrastructure deployment projects across the STME portfolio, applying the PMO methodology from assessment to handover.' },
    { dept: 'Sales',              title: 'Account Manager — Enterprise',        location: 'Dubai, UAE',        type: 'Full-time', desc: 'Manage and grow enterprise accounts across the UAE, working closely with technical and pre-sales teams to deliver solutions.' },
    { dept: 'Engineering',        title: 'Backup & Recovery Engineer',          location: 'Manama, Bahrain',   type: 'Full-time', desc: 'Deploy and support Veritas NetBackup and data protection environments for financial sector clients in Bahrain and Kuwait.' },
  ];

  const depts = ['All', ...Array.from(new Set(roles.map((r) => r.dept)))];
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? roles : roles.filter((r) => r.dept === filter);

  return (
    <main>
      <section className="page-hero page-hero--split">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <div className="eyebrow-row">Careers</div>
            <h1>Build the region's<br />critical infrastructure.</h1>
            <p className="page-hero__sub">Join 120+ engineers and specialists delivering enterprise IT across eight markets. STME has been the Right Hands for the region's most demanding clients since 1982.</p>
          </div>
          <div className="page-hero__side-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=80')" }}></div>
        </div>
      </section>

      {/* Why STME */}
      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Why STME</div>
              <h2>The right environment to grow.</h2>
            </div>
            <p>STME combines the depth of a specialist with the reach of a regional integrator — 35 years of enterprise delivery, across eight markets, with the region's highest vendor accreditations.</p>
          </div>
          <div className="pillars">
            {reasons.map((r) => (
              <div className="pillar" key={r.num}>
                <div className="pillar__num">{r.num}</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Open positions</div>
              <h2>Current opportunities.</h2>
            </div>
            <p>STME is continuously growing its engineering, project management, and sales teams across the region. All roles are permanent, full-time positions based in STME offices.</p>
          </div>

          <div className="filter-bar" style={{ marginBottom: 40 }}>
            {depts.map((d) => (
              <button key={d} className={`filter-btn ${filter === d ? 'is-active' : ''}`} onClick={() => setFilter(d)}>{d}</button>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--hairline)' }}>
            {filtered.map((role, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '32px', alignItems: 'center', padding: '28px 0', borderBottom: '1px solid var(--hairline)', cursor: 'pointer' }}
                onClick={() => onNavigate && onNavigate('career', role)}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 6, fontFamily: 'var(--font-mono)' }}>{role.dept}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 }}>{role.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: 'var(--mute)', lineHeight: 1.6, margin: 0 }}>{role.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  <span style={{ fontSize: 13, color: 'var(--mute)', fontFamily: 'var(--font-mono)' }}>{role.location}</span>
                  <button className="btn btn--secondary" style={{ fontSize: 13, padding: '8px 16px' }}
                    onClick={(e) => { e.stopPropagation(); onNavigate && onNavigate('career', role); }}>
                    View role <Icon name="arrow" size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section section--dark">
        <div className="section__inner">
          <div className="cta-banner">
            <div>
              <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.45)' }}>Don&apos;t see your role?</div>
              <h2>Send us your CV directly.</h2>
            </div>
            <div className="cta-banner__actions">
              <button className="btn btn--invert" onClick={onContact}>
                Get in touch <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.CareersPage = CareersPage;
