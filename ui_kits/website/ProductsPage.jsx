function ProductsPage({ onNavigate, onContact }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    {
      id: 'data-availability',
      cat: 'Data Availability',
      icon: 'database',
      desc: 'Replication and mirroring solutions for continuous data availability across primary and secondary sites.',
      products: [
        { name: 'HDS Universal Replicator',         partner: 'Hitachi',  body: 'Asynchronous remote replication for HDS VSP arrays — delivering journal-based consistency groups for DR across long distances with minimal bandwidth overhead.' },
        { name: 'NetApp SnapMirror',                partner: 'NetApp',   body: 'Policy-based replication for unified ONTAP environments, supporting block, file, and object data — from on-premise to cloud or secondary site.' },
        { name: 'HDS TruCopy',                      partner: 'Hitachi',  body: 'Synchronous remote replication for HDS VSP, providing zero-data-loss protection for tier-one applications requiring RPO=0.' },
      ],
    },
    {
      id: 'ilm',
      cat: 'Information Lifecycle Management',
      icon: 'tools',
      desc: 'Archiving and retention solutions for long-term data management, compliance, and retrieval.',
      products: [
        { name: 'Veritas Enterprise Vault',         partner: 'Veritas',  body: 'Industry-leading archiving platform for email, file, SharePoint, and instant messaging — with retention policy management, legal hold, and eDiscovery support for GCC regulatory compliance.' },
      ],
    },
    {
      id: 'data-management',
      cat: 'Data Management',
      icon: 'database',
      desc: 'Storage management, tiering, and optimization platforms for enterprise data environments.',
      products: [
        { name: 'HDS Dynamic Provisioning',         partner: 'Hitachi',  body: 'Thin provisioning for HDS VSP arrays — enabling over-provisioning of storage capacity with automated expansion, reducing wasted capacity and improving utilization rates.' },
        { name: 'HDS Tiered Storage Manager',       partner: 'Hitachi',  body: 'Automated storage tiering for HDS environments — migrating data across SSD, SAS, and SATA tiers based on access frequency and policy, with no application downtime.' },
        { name: 'Quantum StorNext',                  partner: 'Quantum',  body: 'High-performance shared storage and archive platform for media, energy, and research workloads — combining NAS, SAN, and object storage in a single managed namespace.' },
        { name: 'Veritas Storage Foundation HA/DR', partner: 'Veritas',  body: 'Enterprise storage and HA management platform — providing volume management, file system optimization, and cluster failover across heterogeneous storage environments.' },
      ],
    },
    {
      id: 'server-san',
      cat: 'Server Hardware & SAN',
      icon: 'network',
      desc: 'Compute platforms and SAN infrastructure for enterprise data center environments.',
      products: [
        { name: 'Cisco UCS',                        partner: 'Cisco',    body: 'Unified Computing System — integrated compute, network, and storage access in a single platform. Cisco UCS blades and rack servers form the compute foundation for STME private cloud and virtualization deployments across the region.' },
      ],
    },
    {
      id: 'data-protection',
      cat: 'Data Protection & Recovery',
      icon: 'hdd',
      desc: 'Backup, recovery, and tape solutions for enterprise data protection across all tiers.',
      products: [
        { name: 'HDS In-System Data Replication',   partner: 'Hitachi',  body: 'Internal replication within HDS VSP arrays using ShadowImage and Copy-on-Write Snapshot — enabling instant backups and point-in-time copies without impacting production performance.' },
        { name: 'NetApp SnapVault',                  partner: 'NetApp',   body: 'Disk-to-disk backup solution for NetApp ONTAP — providing efficient, deduplication-enabled secondary backup copies for fast, granular restores across NAS and SAN environments.' },
        { name: 'NetApp SnapManager Suite',          partner: 'NetApp',   body: 'Application-integrated data protection for Oracle, SQL Server, Exchange, and SAP — automating backup and recovery within the application layer for consistent, policy-driven protection.' },
        { name: 'NetApp SnapProtect',                partner: 'NetApp',   body: 'Unified data protection management across NetApp and third-party storage — simplifying backup policy management, deduplication, and recovery across heterogeneous environments.' },
        { name: 'Quantum DXi Series',                partner: 'Quantum',  body: 'Disk-based backup appliances with inline deduplication and replication — providing fast local backup and WAN-efficient replication to a secondary DXi or the cloud for DR.' },
        { name: 'Quantum Tape Libraries',            partner: 'Quantum',  body: 'Scalar tape automation for enterprise archive and air-gapped backup — from the Scalar i3 for mid-range to the Scalar i6000 for petabyte-scale tape operations.' },
        { name: 'Spectra Logic Tape Libraries',      partner: 'Spectra',  body: 'TFinity and T950 enterprise tape libraries for deep archive and ransomware-isolated backup — with AES-256 encryption, WORM media support, and BlackPearl object storage integration.' },
        { name: 'Tandberg Data Tape Libraries',      partner: 'Tandberg', body: 'NEOxl tape automation and LTO autoloaders for mid-range archive — providing cost-effective, reliable tape storage for secondary backup and long-term retention requirements.' },
      ],
    },
    {
      id: 'ha-dr',
      cat: 'High Availability & DR',
      icon: 'hdd',
      desc: 'Clustering, replication, and failover solutions for mission-critical application continuity.',
      products: [
        { name: 'NetApp MetroCluster',               partner: 'NetApp',   body: 'Synchronous mirroring for NetApp systems across two data center sites — providing continuous availability and zero-data-loss protection for mission-critical workloads with automatic failover.' },
        { name: 'Veritas Storage Foundation HA/DR',  partner: 'Veritas',  body: 'High availability and disaster recovery management for heterogeneous environments — with Cluster Server (VCS) providing application-aware failover and Storage Foundation providing volume and file system management.' },
      ],
    },
    {
      id: 'virtualization',
      cat: 'Virtualization',
      icon: 'cloud',
      desc: 'Virtualization platforms and management tools for private cloud and data center consolidation.',
      products: [
        { name: 'HDS Universal Volume Manager',     partner: 'Hitachi',  body: 'External storage virtualization for HDS VSP — enabling heterogeneous storage arrays from third-party vendors to be managed and migrated through a single HDS VSP controller, simplifying multi-vendor environments.' },
        { name: 'VMware Capacity Planner',           partner: 'VMware',   body: 'Pre-virtualization assessment tool for capacity planning — collecting performance data from physical servers to model virtualization consolidation ratios and recommend vSphere deployment sizing.' },
        { name: 'VMware ESXi',                       partner: 'VMware',   body: 'Enterprise hypervisor and foundation of the VMware vSphere platform — providing bare-metal virtualization for x86 servers, with support for all major guest operating systems and direct integration with vCenter.' },
        { name: 'VMware vCenter Converter',          partner: 'VMware',   body: 'Physical-to-virtual (P2V) and virtual-to-virtual (V2V) migration tool — enabling hot migration of live Windows and Linux systems to VMware virtual machines without downtime.' },
      ],
    },
    {
      id: 'iot',
      cat: 'IoT Solutions',
      icon: 'network',
      desc: 'Internet of Things infrastructure and connectivity solutions for enterprise and industrial environments.',
      products: [
        { name: 'IoT Platform & Infrastructure',     partner: 'Multiple', body: 'STME designs and deploys IoT infrastructure for GCC enterprises — connecting edge sensors, gateways, and industrial devices to centralized data platforms. Deployments span smart cities, utilities, and industrial monitoring.' },
        { name: 'IoT Connectivity & Edge Computing', partner: 'Multiple', body: 'Ruggedized edge compute and 5G/LTE connectivity solutions for IoT deployments in industrial and remote environments — with secure data ingestion, local processing, and cloud integration.' },
      ],
    },
    {
      id: 'security',
      cat: 'Security Solutions',
      icon: 'shield',
      desc: 'Comprehensive security portfolio spanning strategy, architecture, and technology deployment.',
      products: [
        { name: 'Security Vision & Strategy',        partner: 'STME',     body: 'STME security consultants work with CISOs and IT leadership to define a security vision aligned to business objectives and the relevant regulatory framework — SAMA, NCA, CBUAE, or BMA.' },
        { name: 'Security Services Offerings',       partner: 'STME',     body: 'End-to-end security services spanning assessment, architecture, deployment, and managed operations — including penetration testing, vulnerability management, SOC design, and compliance audit readiness.' },
        { name: 'Palo Alto Networks NGFW',           partner: 'Palo Alto', body: 'Next-generation firewall platform delivering application-aware policy enforcement, threat prevention, and URL filtering — with Panorama centralized management for multi-site GCC deployments.' },
        { name: 'Fortinet Security Fabric',          partner: 'Fortinet', body: 'Integrated security platform spanning firewall, endpoint, wireless, and cloud — providing coordinated threat response across the full network with FortiGate, FortiAnalyzer, and FortiSIEM.' },
        { name: 'IBM Security QRadar',               partner: 'IBM',      body: 'Enterprise SIEM platform providing real-time threat detection, log management, and compliance reporting — with AI-powered analytics for identifying sophisticated threats across hybrid environments.' },
        { name: 'FireEye Threat Intelligence',       partner: 'FireEye',  body: 'Nation-state-grade threat intelligence and detection platform — combining signature-based and behavior-based analysis with Mandiant intelligence to detect and respond to advanced persistent threats.' },
      ],
    },
  ];

  const tabs = ['All', ...categories.map((c) => c.cat)];
  const filtered = activeTab === 'All' ? categories : categories.filter((c) => c.cat === activeTab);

  return (
    <main>
      <section className="page-hero page-hero--split">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <div className="eyebrow-row">Products &amp; Solutions</div>
            <h1>The right tools<br />for every challenge.</h1>
            <p className="page-hero__sub">A curated portfolio of best-in-class products from the world's leading technology vendors — deployed and supported by STME across the Middle East since 1982.</p>
          </div>
          <div className="page-hero__side-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80')" }}></div>
        </div>
      </section>

      {/* Category filter */}
      <section className="section">
        <div className="section__inner">
          <div style={{ overflowX: 'auto', marginBottom: 48 }}>
            <div className="filter-bar" style={{ width: 'max-content' }}>
              {tabs.map((t) => (
                <button key={t} className={`filter-btn ${activeTab === t ? 'is-active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
              ))}
            </div>
          </div>

          {filtered.map((cat) => (
            <div key={cat.id} style={{ marginBottom: 80 }}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8, paddingBottom: 20, borderBottom: '1px solid var(--hairline)' }}>
                <div style={{ color: 'var(--orange)' }}><Icon name={cat.icon} size={24} /></div>
                <div>
                  <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1 }}>{cat.cat}</h2>
                  <p style={{ fontSize: 14, color: 'var(--mute)', margin: '6px 0 0', lineHeight: 1.5 }}>{cat.desc}</p>
                </div>
              </div>

              {/* Product cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '0', borderLeft: '1px solid var(--hairline)' }}>
                {cat.products.map((prod) => (
                  <div key={prod.name} style={{ borderRight: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer', transition: 'background var(--dur-base) var(--ease)' }}
                    onClick={() => onNavigate && onNavigate('product', prod)}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--soft)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-mono)' }}>{prod.partner}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 }}>{prod.name}</h3>
                    <p style={{ fontSize: 14, color: 'var(--mute)', lineHeight: 1.6, margin: 0, flex: 1 }}>{prod.body}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginTop: 8 }}>
                      View details <Icon name="arrow" size={12} />
                    </span>
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
              <div className="eyebrow-row" style={{ color: 'rgba(255,255,255,0.45)' }}>Ready to deploy</div>
              <h2>Need a product scoped for your environment?</h2>
            </div>
            <div className="cta-banner__actions">
              <button className="btn btn--invert" onClick={onContact}>
                Talk to a specialist <Icon name="arrow" size={14} />
              </button>
              <button className="btn btn--secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }} onClick={() => onNavigate('partners')}>
                View all partners
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ProductsPage = ProductsPage;
