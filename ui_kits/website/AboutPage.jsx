function AboutPage({ onNavigate, onContact }) {
  const pillars = [
    { num: '01', title: 'The right hands',       body: 'Excellent highly skilled team, with long experience in IT integration, and highest industry standard certificates. 60+ certified experts with 15–20 years average experience in the field.' },
    { num: '02', title: 'The right approach',    body: 'Extracted from decades of IT integration lessons learned. An independent assessment before any recommendation — STME carries no quota for any single vendor.' },
    { num: '03', title: 'The right tools',       body: 'Utilizing best tools according to Gartner IT Project Management Services, and partnering with world-leading manufacturers — Hitachi, NetApp, Veritas, Cisco, VMware, Quantum, and more.' },
    { num: '04', title: 'The right environment', body: 'Ideally aligned organizational processes to support trouble-free project execution. 24/7 enterprise-class support center with up to 15-minute SLA response.' },
  ];

  return (
    <main>
      <section className="page-hero page-hero--split">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <div className="eyebrow-row">About STME</div>
            <h1>Heritage of commitment<br />and delivery.</h1>
            <p className="page-hero__sub">Storage Technology Middle East — a regional system integrator, IT solutions and services provider, founded in 1982 and headquartered in Riyadh. One Smart Solution across eight markets.</p>
          </div>
          <div className="page-hero__side-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80')" }}></div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Our purpose</div>
              <h2>Vision &amp; mission.</h2>
            </div>
            <div>
              <p style={{ marginBottom: 24 }}><strong style={{ display: 'block', marginBottom: 8, color: 'var(--ink)' }}>Vision</strong>To be one of the IT system integration leaders by pioneering the deployment of the latest innovative technologies that help our clients to smoothly address their most complex business challenges.</p>
              <p><strong style={{ display: 'block', marginBottom: 8, color: 'var(--ink)' }}>Mission</strong>To use our extensive IT consulting experience to deliver tangible business results, enabling our clients to profit from the advanced use of the technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Project management office</div>
              <h2>The right everything.</h2>
            </div>
            <p>Four principles that describe every STME engagement — from the first assessment call to the last support ticket closed.</p>
          </div>
          <div className="pillars">
            {pillars.map((p) => (
              <div className="pillar" key={p.num}>
                <div className="pillar__num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why STME */}
      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Why STME</div>
              <h2>Since 1982.</h2>
            </div>
            <div className="about-story">
              <p>STME is a 35+ year old regional system integrator, IT solutions and services provider. Founded in 1982, with head office based in Riyadh, STME operates with geographic presence across KSA, the Gulf, Egypt and the Levant.</p>
              <p>Specialized in Information Management, Information Security and Cloud &amp; Virtual Computing — STME is focused on providing high quality 24/7 support services with up to 15-minute SLA. The company was the first IT company ISO Certified in the region in 2000 (ISO 9001:2000).</p>
              <p>Today, 120+ qualified staff deliver services to 400+ enterprise customers across the Middle East — combining multi-vendor solution expertise with unmatched industry experience and skills at the highest accreditation levels in data management and data security.</p>
            </div>
          </div>
          <StatStrip />
        </div>
      </section>

      {/* What we do */}
      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Technical team</div>
              <h2>Assessment to managed operations.</h2>
            </div>
            <div>
              <p style={{ marginBottom: 16 }}>STME Services deliver assessment, consulting, deployment, management, and support services in Data Management, Security, and Cloud Solutions, to:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Protect your current investments', 'Improve business productivity', 'Increase data center efficiency', 'Grow and adapt with new technologies'].map((item) => (
                  <li key={item} style={{ paddingLeft: 22, position: 'relative', fontSize: 16, color: 'var(--mute)', lineHeight: 1.5 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--orange)', fontWeight: 700 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Where we are</div>
              <h2>Eight markets. One operating model.</h2>
            </div>
            <p>Local teams, regional engineering, and a single delivery model from Riyadh to London.</p>
          </div>
          <RegionPanel />
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="section__inner">
          <div className="cta-banner">
            <div>
              <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.45)' }}>Work with us</div>
              <h2>Dedicated to serving you, end to end.</h2>
            </div>
            <div className="cta-banner__actions">
              <button className="btn btn--invert" onClick={onContact}>Talk to a specialist <Icon name="arrow" size={14} /></button>
              <button className="btn btn--secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }} onClick={() => onNavigate('services')}>View services</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.AboutPage = AboutPage;
