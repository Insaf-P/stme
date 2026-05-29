function PartnersPage({ onContact }) {
  const featured = [
    { name: 'Hitachi Data Systems', role: 'Primary storage',         body: 'Global R&D resources developing storage solutions built on industry-leading technology. Conducts business in over 170 countries — more than 50% of Fortune 100 companies rely on HDS.',              tags: ['VSP Series', 'Universal Replicator', 'TruCopy', 'Dynamic Provisioning'] },
    { name: 'NetApp',               role: 'Data management',          body: 'Innovative storage and data management solutions that help customers accelerate business growth and optimize cost efficiency across on-premise and hybrid cloud environments.',                            tags: ['SnapMirror', 'SnapVault', 'SnapManager', 'SnapProtect', 'MetroCluster'] },
    { name: 'Veritas Technologies', role: 'Data protection',          body: '86% of Fortune 500 companies rely on Veritas to reveal data insights that drive competitive advantage. Empowers businesses to discover the truth in information — their most important digital asset.', tags: ['NetBackup', 'Enterprise Vault', 'Storage Foundation', 'Backup Exec'] },
    { name: 'Cisco',                role: 'Network & compute',        body: 'Worldwide leader in internet networking, creating IP-based networking solutions that serve as foundation of business, education, government and home communications across the globe.',                    tags: ['UCS', 'Catalyst', 'Nexus', 'Firepower'] },
    { name: 'VMware',               role: 'Virtualization & cloud',   body: 'Global leader in virtualization solutions from the desktop to the data centre, with more than 120,000 customers and nearly 18,000 partners worldwide.',                                                   tags: ['vSphere', 'ESXi', 'vCenter Converter', 'Capacity Planner'] },
    { name: 'Quantum',              role: 'Backup & archive',         body: 'The leading global storage company specializing in backup, recovery and archive. Provides a comprehensive, integrated range of disk, tape, and software solutions with platform independence.',           tags: ['DXi Series', 'Tape Libraries', 'StorNext', 'ActiveScale'] },
    { name: 'Spectra Logic',        role: 'Deep archive',             body: 'Revolutionary deep storage solution providing a streamlined approach to content archives utilizing cloud architecture. Simplifies deployment and management of large data sets.',                          tags: ['Tape Libraries', 'BlackPearl', 'TFinity'] },
    { name: 'Tandberg Data',        role: 'Tape drives & autoloaders', body: 'Leading global supplier of backup and archiving technologies, offering a complete range of tape libraries, autoloaders and drives, storage software, data media and disk-based storage.',               tags: ['LTO Series', 'Tape Libraries', 'Autoloaders', 'RDX'] },
  ];

  const extended = [
    { name: 'Palo Alto Networks', role: 'Next-gen security',     body: 'Fastest growing security company with game-changing security platform — Next-Generation Firewall, Advanced Endpoint Protection, and Threat Intelligence Cloud.' },
    { name: 'Fortinet',           role: 'Network security',      body: 'Top-rated network and content security, as well as secure access products that share intelligence and work together to form a cooperative fabric.' },
    { name: 'Veeam',              role: 'Availability',          body: 'Pioneered Availability for the Always-On Enterprise — helping organizations meet RTOs and RPOs of less than 15 minutes for all applications and data.' },
    { name: 'Commvault',          role: 'Data protection',       body: 'Helps companies protect, access and use all of their data, anywhere and anytime, turning data into a powerful strategic asset.' },
    { name: 'IBM',                role: 'IT infrastructure',     body: 'Provides IT products and services worldwide — Global Technology Services, Software, Systems and Technology, including IBM Security analytics and real-time defenses.' },
    { name: 'Oracle',             role: 'Applications & cloud',  body: 'Integrated array of applications, databases, servers, storage, and cloud technologies to empower modern business with wide choice of deployment models.' },
    { name: 'Microsoft',          role: 'Cloud & software',      body: 'World\'s largest software maker. The Microsoft Partner Network is the most powerful community — larger than AWS and Salesforce combined.' },
    { name: 'HP Enterprise',      role: 'Infrastructure',        body: 'Helps customers use technology to slash the time it takes to turn ideas into value, transforming industries, markets and lives.' },
    { name: 'Huawei',             role: 'ICT solutions',         body: 'Leading global ICT solutions provider committed to enabling the future information society and building a Better Connected World.' },
    { name: 'ExaGrid',            role: 'Backup storage',        body: 'Understands that both backup and restore performance are crucial, while long-term storage cost for longer retention must be controlled through intelligent deduplication.' },
    { name: 'FireEye',            role: 'Threat intelligence',   body: 'Intelligence-led security company offering a single platform blending innovative security technologies with nation-state grade threat intelligence and Mandiant consulting.' },
    { name: 'F5 Networks',        role: 'Application delivery',  body: 'Global leader in Application Delivery Networking — extensible architecture providing application optimization, protection, and enhanced application reliability.' },
    { name: 'Citrix',             role: 'Digital workspace',     body: 'Makes the world\'s apps and data secure and easy to access anywhere at any time and on any device or network.' },
    { name: 'Brocade',            role: 'Data centre networking', body: 'Industry leader in data centre networking solutions enabling organizations to manage their most vital information assets. Trusted by Global 500 clients.' },
    { name: 'Incorta',            role: 'Analytics',             body: 'Helps world-leading brands gain insights they previously thought impossible with in-memory analytics and Direct Data Platform for modern BI.' },
  ];

  return (
    <main>
      <section className="page-hero page-hero--split">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <div className="eyebrow-row">Partners</div>
            <h1>Built on the platforms<br />enterprises already trust.</h1>
            <p className="page-hero__sub">Long-standing alliances with the world-leading storage, security, networking and cloud vendors that define enterprise infrastructure across the Middle East.</p>
          </div>
          <div className="page-hero__side-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80')" }}></div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Core alliance partners</div>
              <h2>Primary technology stack.</h2>
            </div>
            <p>STME holds the highest accreditations in the Middle East in data management and data security across these eight core technology partnerships — each backed by certified engineers in every STME market.</p>
          </div>
          <div className="partner-grid-full">
            {featured.map((p) => (
              <div className="partner-card" key={p.name}>
                <div className="partner-card__logo">{p.name}</div>
                <div className="partner-card__role">{p.role}</div>
                <p>{p.body}</p>
                <div className="partner-card__tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <div className="section__head">
            <div>
              <div className="eyebrow-row">Extended portfolio</div>
              <h2>30+ vendor relationships.</h2>
            </div>
            <p>Beyond the core stack, STME maintains active technical partnerships across security, networking, analytics, and cloud — giving clients access to the full breadth of enterprise technology.</p>
          </div>
          <div className="partner-grid-full" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {extended.map((p) => (
              <div className="partner-card" key={p.name}>
                <div className="partner-card__logo" style={{ fontSize: 18 }}>{p.name}</div>
                <div className="partner-card__role">{p.role}</div>
                <p style={{ fontSize: 13 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner">
          <div className="cta-banner">
            <div>
              <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.45)' }}>New to the region</div>
              <h2>Looking for a delivery partner?</h2>
            </div>
            <div className="cta-banner__actions">
              <button className="btn btn--invert" onClick={onContact}>Contact us <Icon name="arrow" size={14} /></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.PartnersPage = PartnersPage;
