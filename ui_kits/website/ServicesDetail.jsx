const ALL_SERVICES = {
  Cloud: {
    num: '01', cat: 'Cloud',
    title: 'Cloud Infrastructure',
    intro: 'Design and publish secure, flexible, and scalable cloud environments to enable organizations to expand and maintain full control over their data.',
    overview: [
      'STME designs and deploys private and hybrid cloud environments tailored to the data residency and regulatory requirements of GCC enterprises. Using VMware, Cisco UCS, and STME Cloud as the foundation, we build environments that give your organization full control — not dependence on a hyperscaler.',
      'From initial assessment and architecture through to migration and managed operations, STME delivers cloud infrastructure that is secure, compliant, and built to run the workloads that matter.',
    ],
    capabilities: [
      'Private cloud design & deployment',
      'Hybrid cloud architecture',
      'VMware vSphere / NSX / vSAN',
      'Cisco UCS compute platforms',
      'STME Cloud managed platform',
      'Cloud migration & workload modernization',
      'Data residency & sovereignty compliance',
      'Managed cloud operations (24/7)',
    ],
    arch: [
      'on-premise  →  VMware vSphere  →  Cisco UCS compute cluster',
      '                                        ↓',
      '                           private cloud orchestration',
      '                                        ↓',
      'connectivity  →  STME Cloud / hybrid cloud  →  public cloud (sovereign zone)',
    ],
    partners: ['VMware', 'Cisco', 'Microsoft', 'Nutanix', 'Citrix'],
  },
  Security: {
    num: '02', cat: 'Security',
    title: 'Cybersecurity',
    intro: 'Comprehensive solutions to protect your organization from cyber threats, including advanced protection, threat detection and response, vulnerability management, and compliance.',
    overview: [
      'STME delivers end-to-end cybersecurity programs spanning identity, network perimeter, endpoint, database, and security operations. With the highest security accreditation in the Middle East, STME aligns every program to the relevant regulatory framework — SAMA, NCA, CBUAE, or BMA — from day one.',
      'Our security practice covers the full lifecycle: strategy and architecture, solution deployment, and ongoing managed security operations. Partners include Palo Alto Networks, Fortinet, IBM Security, and FireEye.',
    ],
    capabilities: [
      'Identity & access management (IAM)',
      'SIEM deployment & tuning',
      'Next-generation firewall (NGFW)',
      'Threat detection & response',
      'Vulnerability management programs',
      'Online banking security',
      'Compliance & regulatory audit readiness',
      'Security operations center (SOC)',
    ],
    arch: [
      'endpoints  →  IAM layer  →  network perimeter (NGFW / Palo Alto)',
      '                                        ↓',
      '                        SIEM (IBM QRadar / Fortinet)',
      '                                        ↓',
      '         threat intelligence  →  SOC operations  →  incident response',
    ],
    partners: ['Palo Alto Networks', 'Fortinet', 'IBM Security', 'FireEye', 'F5 Networks'],
  },
  Storage: {
    num: '03', cat: 'Storage',
    title: 'Storage Solutions',
    intro: 'Enterprise storage solutions with integrated systems to store, manage, and protect data with high performance, scalability, and reliability.',
    overview: [
      'STME has delivered enterprise storage environments across the GCC since 1982. As the highest-accredited Hitachi Vantara and NetApp partner in the Middle East, STME sizes, deploys, and operates primary storage — all-flash, hybrid, NAS, SAN, and cloud storage — for the region\'s most demanding workloads.',
      'Storage environments are designed around your recovery objectives, not a vendor margin. Every deployment is backed by STME\'s 24/7 managed support with up to 15-minute SLA response.',
    ],
    capabilities: [
      'All-flash & hybrid array deployment (HDS VSP / NetApp AFF)',
      'NAS, SAN & object storage',
      'Cloud storage integration',
      'Storage area network (SAN) design',
      'Data migration & consolidation',
      'Capacity planning & optimization',
      'Storage performance tuning',
      '24/7 managed storage operations',
    ],
    arch: [
      'applications  →  SAN fabric (Brocade / Cisco MDS)  →  primary array',
      '                                                            ↓',
      '                                           HDS VSP  /  NetApp AFF',
      '                                                            ↓',
      'NAS tier  →  cloud storage  →  archive (Quantum / Spectra Logic)',
    ],
    partners: ['Hitachi Vantara', 'NetApp', 'Quantum', 'Spectra Logic', 'Tandberg Data'],
  },
  'AI & Data': {
    num: '04', cat: 'AI & Data',
    title: 'Artificial Intelligence & Data',
    intro: 'Solutions for advanced data analytics and artificial intelligence to help organizations make smarter decisions, improve operational efficiency, and support data-driven strategies.',
    overview: [
      'STME helps enterprises across the GCC harness the value of their data through analytics platforms, AI/ML infrastructure, and data management programs. From data lake architecture to real-time analytics and AI model deployment, STME builds the infrastructure layer that makes data-driven strategy possible.',
      'Engagements begin with a data maturity assessment — mapping your current data estate against your business intelligence objectives — and conclude with a deployed, production-ready analytics environment your team can operate and extend.',
    ],
    capabilities: [
      'Data analytics platform architecture',
      'Data lake & data warehouse design',
      'Big data infrastructure deployment',
      'AI/ML compute infrastructure',
      'Real-time analytics pipelines',
      'Data governance & quality frameworks',
      'Business intelligence (BI) integration',
      'Managed analytics operations',
    ],
    arch: [
      'data sources  →  ingestion layer  →  data lake / warehouse',
      '                                             ↓',
      '                              analytics platform (BI / ML)',
      '                                             ↓',
      '                  AI/ML models  →  dashboards  →  decision systems',
    ],
    partners: ['IBM', 'Microsoft', 'Oracle', 'Incorta', 'Huawei'],
  },
  Backup: {
    num: '05', cat: 'Backup',
    title: 'Backup & Disaster Recovery',
    intro: 'Comprehensive strategies to protect data and ensure business continuity, with fast recovery and minimal downtime in the event of any incident.',
    overview: [
      'STME designs and operates backup and disaster recovery environments that meet the SLA commitments of GCC regulators — SAMA, CBUAE, BMA, and NCA. Every DR program is designed around real recovery objectives, not checkbox compliance.',
      'The reference architecture combines immutable disk-based backup for sub-15-minute RPO, replicated secondary sites for 4-hour RTO, and air-gapped tape for ransomware isolation — aligned to the tier-one application criticality of each workload.',
    ],
    capabilities: [
      'Backup architecture design & deployment',
      'Veritas NetBackup / Veeam deployment',
      'Backup-as-a-Service (BaaS)',
      'Immutable backup targets',
      'Disaster recovery (DR) design',
      'Business continuity planning (BCP)',
      'DR drill management & reporting',
      'Air-gapped tape (ransomware isolation)',
    ],
    arch: [
      'primary  →  Veritas NetBackup  →  immutable disk target  (RPO <15min)',
      '                                              ↓  replicate',
      '                             secondary DR site  (RTO 4hr)',
      '                                              ↓  periodic',
      '                  air-gap  →  tape library (Quantum / Spectra)  (ransomware)',
    ],
    partners: ['Veritas', 'Veeam', 'Commvault', 'Quantum', 'Spectra Logic'],
  },
  Networks: {
    num: '06', cat: 'Networks',
    title: 'Enterprise Networks',
    intro: 'Advanced SD-WAN and network solutions designed to deliver secure, reliable, and high-performance connectivity.',
    overview: [
      'STME designs and deploys enterprise network infrastructure for GCC organizations that need secure, high-performance connectivity across data centers, branch offices, and remote sites. Cisco Catalyst, Nexus, and SD-WAN platforms form the foundation of STME\'s network practice.',
      'Network engagements range from greenfield campus and data center fabric deployments to SD-WAN migrations that replace costly MPLS circuits with intelligent, policy-driven connectivity. All designs incorporate security as a foundational layer — not an afterthought.',
    ],
    capabilities: [
      'SD-WAN design & deployment',
      'LAN / WAN architecture',
      'Data center fabric (Cisco Nexus)',
      'Campus network design (Cisco Catalyst)',
      'Wireless networking (Wi-Fi 6/6E)',
      '5G enterprise connectivity',
      'Network security integration (Cisco Firepower)',
      'Network managed services (24/7)',
    ],
    arch: [
      'branch sites  →  SD-WAN edge  →  intelligent WAN fabric',
      '                                          ↓',
      '                          data center core (Cisco Nexus)',
      '                                          ↓',
      '          firewall / IPS  →  campus LAN (Catalyst)  →  end users',
    ],
    partners: ['Cisco', 'Brocade', 'Fortinet', 'Palo Alto Networks', 'Huawei'],
  },
};

function ServicesDetail({ service, onBack, onContact }) {
  const cat = (service && service.cat) ? service.cat : 'Cloud';
  const s = ALL_SERVICES[cat] || ALL_SERVICES.Cloud;
  const sections = ['Overview', 'Capabilities', 'Reference architecture', 'Partners'];
  const [active, setActive] = useState(sections[0]);

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__inner">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="uline">Services</a>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>{s.cat}</span>
          </div>
          <h1>{s.title}.</h1>
          <p className="page-hero__sub">{s.intro}</p>
        </div>
      </section>

      <section className="detail-body">
        <div className="detail-body__inner">
          <aside>
            <div className="eyebrow-row">On this page</div>
            <ul className="aside-toc">
              {sections.map((sec) => (
                <li key={sec} className={sec === active ? 'active' : ''} onClick={() => { setActive(sec); stmeScrollTo(stmeSlug(sec)); }}>{sec}</li>
              ))}
            </ul>
            <button className="btn btn--primary" onClick={onContact} style={{ marginTop: 32 }}>
              Talk to a specialist <Icon name="arrow" size={14} />
            </button>
          </aside>
          <div>
            <h2 id={stmeSlug('Overview')}>Overview</h2>
            {s.overview.map((para, i) => <p key={i}>{para}</p>)}

            <h2 id={stmeSlug('Capabilities')} style={{ marginTop: 64 }}>Capabilities</h2>
            <ul className="bullets">
              {s.capabilities.map((cap) => <li key={cap}>{cap}</li>)}
            </ul>

            <h2 id={stmeSlug('Reference architecture')} style={{ marginTop: 64 }}>Reference architecture</h2>
            <div style={{ background: 'var(--soft)', padding: 32, border: '1px solid var(--hairline)', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.9, color: 'var(--ink)', margin: '8px 0 24px' }}>
              {s.arch.map((line, i) => <div key={i}>{line}</div>)}
            </div>
            <p>Each layer is monitored from a single operations console, with SLA reporting tied to your operating committee's targets.</p>

            <h2 id={stmeSlug('Partners')} style={{ marginTop: 64 }}>Partners</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, borderTop: '1px solid var(--hairline)', borderLeft: '1px solid var(--hairline)', marginTop: 8 }}>
              {s.partners.map((p) => (
                <div key={p} style={{ borderRight: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '20px 32px', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ServicesDetail = ServicesDetail;
