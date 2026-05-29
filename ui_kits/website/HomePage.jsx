function HomePage({ onNavigate, onContact }) {
  return (
    <main>
      <Hero onContact={onContact} />

      <section className="section" id="services">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Services</div>
              <h2>What we build, run, and protect.</h2>
            </div>
            <p>Assessment, consulting, deployment, management, and support across data management, security, and cloud — for the work that has to keep running.</p>
          </div>
          <ServicesGrid onSelect={(s) => onNavigate('service', s)} />
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <StatStrip />
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Partners</div>
              <h2>Built on the platforms enterprises already trust.</h2>
            </div>
            <p>Long-standing alliances with the storage, security, and platform vendors that define enterprise infrastructure.</p>
          </div>
          <PartnerStrip />
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Industries</div>
              <h2>Where the work runs.</h2>
            </div>
            <p>Reference deployments across the most demanding infrastructure in the region — from central banks to upstream operations.</p>
          </div>
          <Industries onSelect={(ind) => onNavigate('industry', ind)} />
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Notes &amp; updates</div>
              <h2>From the field.</h2>
            </div>
            <p>Briefs, customer stories, and field notes from the team — on what changes when infrastructure has to be both modern and accountable.</p>
          </div>
          <Insights onSelect={(ins) => onNavigate('insight', ins)} />
        </div>
      </section>

      <section className="section section--soft">
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
    </main>
  );
}
window.HomePage = HomePage;
