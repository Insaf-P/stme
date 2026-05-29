const INDUSTRY_DATA = {
  public: {
    tag: 'Public sector', num: '01',
    title: 'Modernizing core government infrastructure.',
    intro: 'Data center consolidation, disaster recovery, and secure digital services for government agencies, defense operators, and healthcare networks.',
    img: 'https://images.unsplash.com/photo-1541855492-581f618f69a0?w=2000&q=80',
    challenge: { label: 'The challenge', heading: 'Legacy infrastructure. New mandates.', body: 'Government agencies across the GCC are under pressure to consolidate fragmented data centers, meet new digital services mandates, and satisfy local data residency requirements — often without downtime windows. Many operate on storage infrastructure that is 10+ years old, with no unified management layer and inconsistent DR coverage.' },
    approach: { label: 'STME approach', heading: 'Phased consolidation, zero disruption.', body: 'STME conducts an independent infrastructure audit, maps each system to a dependency and criticality matrix, and designs a phased migration path. Government clients benefit from our experience delivering zero-downtime cutovers across distributed sites — including classified and partially air-gapped environments.' },
    outcomes: [
      { num: '60%', label: 'Reduction in data center footprint (typical consolidation)' },
      { num: '4hr', label: 'Target RTO for Tier-1 government services' },
      { num: '100%', label: 'Local data residency compliance' },
    ],
    services: ['Data', 'Security', 'Cloud', 'Services'],
  },
  financial: {
    tag: 'Financial services', num: '02',
    title: 'Hardened data platforms for banks and exchanges.',
    intro: 'Primary storage, backup, and business continuity solutions aligned to SAMA, CBUAE, and BMA regulatory frameworks.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80',
    challenge: { label: 'The challenge', heading: 'Regulation. Availability. Scale.', body: 'Banks, exchanges, and insurance operators in the GCC must meet some of the most demanding uptime and data protection requirements in the world — while navigating SAMA circular requirements, central bank DR mandates, and increasingly sophisticated threat actors. Most are also running core banking migrations that expose critical gaps in legacy storage and protection infrastructure.' },
    approach: { label: 'STME approach', heading: 'Compliance-first architecture.', body: 'STME designs storage and protection environments using the relevant regulator\'s published framework as the baseline. We work alongside the bank\'s internal risk and compliance teams, providing the architecture evidence required for SAMA/CBUAE submissions. Our managed services team maintains audit logs and RPO/RTO evidence as part of the standard monthly reporting package.' },
    outcomes: [
      { num: '<15min', label: 'RPO/RTO for core banking systems' },
      { num: '3', label: 'SAMA-compliant DR sites supported concurrently' },
      { num: '99.999%', label: 'Storage availability SLA for Tier-1 applications' },
    ],
    services: ['Data', 'Security', 'Cloud', 'Services'],
  },
  energy: {
    tag: 'Energy', num: '03',
    title: 'Edge-to-core systems for upstream operations.',
    intro: 'Ruggedized data management, real-time backup, and edge computing for oil & gas, utilities, and petrochemical operators.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=2000&q=80',
    challenge: { label: 'The challenge', heading: 'Distributed environments. Continuous operations.', body: 'Energy operators generate enormous volumes of data at remote field sites — seismic survey files, SCADA telemetry, production logs — that must be reliably ingested, protected, and accessible for regulatory audit. Connectivity is intermittent. Environments are physically hostile. Downtime is measured in millions of dollars per hour.' },
    approach: { label: 'STME approach', heading: 'Edge-to-core data management.', body: 'STME designs storage architectures that work from the field edge to the central data center, using Quantum and Spectra Logic for high-density archive at edge sites, and Hitachi or NetApp arrays at core. Data is automatically tiered and replicated to the central DR site, with Veritas NetBackup providing the protection layer across the full estate.' },
    outcomes: [
      { num: 'PB+', label: 'Seismic and production data under management' },
      { num: '30+', label: 'Field sites connected to central protection' },
      { num: '24/7', label: 'Managed operations from STME regional NOC' },
    ],
    services: ['Data', 'Cloud', 'Services'],
  },
  telecom: {
    tag: 'Telecommunications', num: '04',
    title: 'Infrastructure at carrier scale.',
    intro: 'High-density storage, archive, and managed services for national telecoms operators and content delivery networks.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=2000&q=80',
    challenge: { label: 'The challenge', heading: 'Volume. Velocity. Compliance.', body: 'Telecoms operators in the GCC store vast volumes of CDR data, network telemetry, and subscriber records — under regulatory retention mandates that require years of searchable archive. Legacy tape-centric environments cannot meet modern retrieval SLAs, and the growth rate of operational data is outpacing storage capacity planning cycles.' },
    approach: { label: 'STME approach', heading: 'Tiered archive at carrier scale.', body: 'STME deploys tiered storage architectures that separate hot operational data from warm near-line and cold archival storage — using Quantum ActiveScale object storage for the mid-tier and Spectra Logic tape for the cold archive. Retention policies are enforced at the platform level, with automated legal hold capabilities for regulatory compliance.' },
    outcomes: [
      { num: '5yr+', label: 'CDR retention achieved on-platform' },
      { num: '<1hr', label: 'Retrieval SLA for regulatory requests' },
      { num: '40%', label: 'Reduction in archive storage cost' },
    ],
    services: ['Data', 'Services'],
  },
  health: {
    tag: 'Healthcare', num: '05',
    title: 'Compliant data environments for clinical care.',
    intro: 'Medical imaging storage, long-term archive, and disaster recovery for hospitals, labs, and health networks.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=2000&q=80',
    challenge: { label: 'The challenge', heading: 'Clinical data. Compliance. Uptime.', body: 'Healthcare operators manage a combination of structured EHR data and large unstructured PACS/DICOM imaging files, both of which must be available 24/7, retained for extended periods, and accessible across distributed clinical sites. Regulatory frameworks in KSA and UAE require strict data residency and audit logging.' },
    approach: { label: 'STME approach', heading: 'Unified storage for structured and unstructured data.', body: 'STME deploys unified storage environments that handle block, file, and object data on a single platform — simplifying management and reducing the cost of separate siloed systems. PACS archive is managed with automated tiering from NetApp or Hitachi primary storage to Quantum object storage for long-term retention.' },
    outcomes: [
      { num: '99.99%', label: 'PACS availability for clinical operations' },
      { num: '10yr', label: 'Image archive retention on-platform' },
      { num: '100%', label: 'Compliance with local health data residency' },
    ],
    services: ['Data', 'Security', 'Services'],
  },
  edu: {
    tag: 'Education', num: '06',
    title: 'Research and campus infrastructure at scale.',
    intro: 'Centralized storage, virtualization, and managed services for universities, research institutions, and academic networks.',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=2000&q=80',
    challenge: { label: 'The challenge', heading: 'Research data. Campus complexity.', body: 'Universities and research institutions generate large research datasets, high-density computing outputs, and student records that must be managed across distributed campus environments. Budgets are constrained; IT teams are small; and the data growth rate — driven by research computing and digital learning — is accelerating.' },
    approach: { label: 'STME approach', heading: 'Centralised, managed, cost-efficient.', body: 'STME designs centralized storage environments that serve multiple campus sites from a single management platform — reducing operational complexity and enabling small IT teams to support large research workloads. Managed services from STME provide 24/7 coverage without requiring on-site staffing at every location.' },
    outcomes: [
      { num: '3x', label: 'Research data capacity increase post-deployment' },
      { num: '50%', label: 'Reduction in storage management overhead' },
      { num: '24/7', label: 'NOC coverage without on-site IT staff' },
    ],
    services: ['Data', 'Cloud', 'Services'],
  },
};

const SERVICE_LABELS = { Data: 'Storage, backup & recovery', Security: 'Network & data security', Cloud: 'Hybrid cloud platforms', Services: 'Professional & managed' };
const SERVICE_NUMS   = { Data: '01', Security: '02', Cloud: '03', Services: '04' };

function IndustryDetail({ industry, onBack, onNavigate, onContact }) {
  const id = (industry && industry.id) ? industry.id : 'public';
  const d  = INDUSTRY_DATA[id] || INDUSTRY_DATA.public;
  const tocItems = ['Challenge', 'STME approach', 'Outcomes', 'Related services'];
  const [active, setActive] = useState(tocItems[0]);

  return (
    <main>
      <section style={{ position: 'relative', minHeight: 480, background: '#0E0E10', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,14,16,0.3) 0%, rgba(14,14,16,0.72) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: '140px 32px 80px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: 10, marginBottom: 24 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="uline" style={{ color: 'inherit', textDecoration: 'none' }}>Industries</a>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>{d.tag}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff', maxWidth: '16ch', textWrap: 'balance', margin: '0 0 24px' }}>{d.title}</h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', maxWidth: '52ch' }}>{d.intro}</p>
        </div>
      </section>

      <section className="detail-body">
        <div className="detail-body__inner">
          <aside>
            <div className="eyebrow-row">On this page</div>
            <ul className="aside-toc">
              {tocItems.map((s) => (
                <li key={s} className={s === active ? 'active' : ''} onClick={() => { setActive(s); stmeScrollTo(stmeSlug(s)); }}>{s}</li>
              ))}
            </ul>
            <button className="btn btn--primary" onClick={onContact} style={{ marginTop: 32 }}>
              Discuss this sector <Icon name="arrow" size={14} />
            </button>
          </aside>
          <div>
            <div className="split-grid" id={stmeSlug('Challenge')}>
              <div>
                <div className="split-grid__label">{d.challenge.label}</div>
                <h3>{d.challenge.heading}</h3>
              </div>
              <p className="split-grid__body">{d.challenge.body}</p>
            </div>

            <div className="split-grid" id={stmeSlug('STME approach')}>
              <div>
                <div className="split-grid__label">{d.approach.label}</div>
                <h3>{d.approach.heading}</h3>
              </div>
              <p className="split-grid__body">{d.approach.body}</p>
            </div>

            <h2 id={stmeSlug('Outcomes')} style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: '64px 0 24px' }}>Outcomes</h2>
            <div className="stats" style={{ gridTemplateColumns: `repeat(${d.outcomes.length}, 1fr)`, marginBottom: 64 }}>
              {d.outcomes.map((o, i) => (
                <div className="stat" key={i} style={{ borderLeft: i === 0 ? 0 : undefined }}>
                  <div className="stat__num" style={{ color: 'var(--orange)' }}>{o.num}</div>
                  <div className="stat__label">{o.label}</div>
                </div>
              ))}
            </div>

            <h2 id={stmeSlug('Related services')} style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 24 }}>Related services</h2>
            <div className="related-services" style={{ gridTemplateColumns: `repeat(${d.services.length}, 1fr)` }}>
              {d.services.map((key) => (
                <button className="related-service" key={key} onClick={() => onNavigate('service', { cat: key })}>
                  <div className="related-service__num">{SERVICE_NUMS[key]}</div>
                  <h4>{SERVICE_LABELS[key]}</h4>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.IndustryDetail = IndustryDetail;
