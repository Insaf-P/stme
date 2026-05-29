function ServicesPage({ onNavigate, onContact }) {
  return (
    <main>
      <section className="page-hero page-hero--split">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <div className="eyebrow-row">Services</div>
            <h1>What we build,<br />run, and protect.</h1>
            <p className="page-hero__sub">Assessment, consulting, deployment, management, and support across data management, security, and cloud — for the work that has to keep running.</p>
          </div>
          <div className="page-hero__side-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80')" }}></div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <ServicesGrid onSelect={(s) => onNavigate('service', s)} />
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">How we work</div>
              <h2>Assessment to managed operations.</h2>
            </div>
            <p>Every STME engagement follows the same four-stage model across all six service areas — regardless of which technology or vendor is involved.</p>
          </div>
          <div className="process-grid">
            {[
              { num: '01', title: 'Assess',  body: 'An independent audit of your existing environment — infrastructure inventory, gap analysis, and objective mapping against your operating committee\'s targets.' },
              { num: '02', title: 'Design',  body: 'Architecture documentation and vendor selection. A design your team can challenge, own, and hand to the procurement committee with confidence.' },
              { num: '03', title: 'Deploy',  body: 'Phased delivery by STME-certified engineers, with zero-downtime cut-over windows, handover documentation, and knowledge transfer.' },
              { num: '04', title: 'Run',     body: '24/7 NOC operations, monthly performance and capacity reporting, and an annual technology health review.' },
            ].map((step) => (
              <div className="process-step" key={step.num}>
                <div className="process-step__num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <StatStrip />
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner">
          <div className="cta-banner">
            <div>
              <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.45)' }}>Get started</div>
              <h2>Dedicated to serving you, end to end.</h2>
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
window.ServicesPage = ServicesPage;
