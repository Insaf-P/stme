const ROLE_DETAILS = {
  'Senior Storage Engineer': {
    dept: 'Engineering', location: 'Riyadh, KSA', type: 'Full-time',
    about: [
      'STME is looking for a Senior Storage Engineer to join its data management practice in Riyadh. You will design, deploy, and support enterprise storage environments for banking, government, and energy clients across the Kingdom.',
      'This role sits within STME\'s core engineering team and reports to the Data Management Practice Lead. You will work directly with clients from the assessment phase through to managed operations, holding active certifications on the platforms you deploy.',
    ],
    responsibilities: [
      'Design primary and secondary storage architectures based on client recovery objectives',
      'Deploy and configure HDS VSP and NetApp AFF/FAS array families',
      'Implement data protection environments using Veritas NetBackup',
      'Design and execute data migration programs with zero-downtime cutover',
      'Configure and support SAN fabric environments (Brocade / Cisco MDS)',
      'Participate in 24/7 managed operations on-call rotation',
      'Produce architecture documentation and handover packages',
      'Maintain active vendor certifications (HDS, NetApp, Veritas)',
    ],
    requirements: [
      '7+ years of enterprise storage engineering experience',
      'Active HDS or NetApp certification (NCSA / NCSE / Hitachi Vantara Qualified Professional)',
      'Hands-on experience with Veritas NetBackup or equivalent data protection platform',
      'Strong understanding of SAN, NAS, and object storage concepts',
      'Experience with disaster recovery design and BC planning',
      'Excellent technical documentation skills in English',
      'Based in or willing to relocate to Riyadh',
    ],
    nice: [
      'Experience with Quantum or Spectra Logic tape libraries',
      'ITIL Foundation certification',
      'Previous experience in GCC banking or government sector',
    ],
  },
  'Security Solutions Architect': {
    dept: 'Engineering', location: 'Dubai, UAE', type: 'Full-time',
    about: [
      'STME is seeking a Security Solutions Architect to lead security engagements across the UAE. You will own pre-sales architecture, solution design, and delivery for network, endpoint, and identity security programs — primarily for financial services and government clients.',
      'This is a client-facing technical role requiring deep familiarity with SAMA, NCA, and UAE IA regulatory frameworks. You will work with the STME security practice to deliver programs that are compliant from day one.',
    ],
    responsibilities: [
      'Lead security architecture workshops with enterprise clients',
      'Design end-to-end security programs covering network, endpoint, identity, and database layers',
      'Produce compliance gap assessments against SAMA, NCA, and UAE IA frameworks',
      'Architect and size solutions from Palo Alto Networks, Fortinet, IBM Security, and FireEye',
      'Support pre-sales engagements with technical proposals and BOMs',
      'Oversee deployment teams during project execution phases',
      'Deliver security posture reviews and annual health checks for managed clients',
    ],
    requirements: [
      '8+ years of enterprise security experience',
      'Active CISSP, CISM, or equivalent certification',
      'Hands-on experience with Palo Alto Networks NGFW and Panorama',
      'Strong working knowledge of SAMA cybersecurity framework and NCA ECC',
      'Experience delivering security assessments and audit-ready documentation',
      'Excellent executive-level communication skills in English and Arabic',
    ],
    nice: [
      'Fortinet NSE 7 or above',
      'Experience with IBM QRadar or FireEye Helix',
      'CISA or CRISC certification',
    ],
  },
  'Cloud & Virtualization Engineer': {
    dept: 'Engineering', location: 'Riyadh, KSA', type: 'Full-time',
    about: [
      'STME is hiring a Cloud & Virtualization Engineer to join its cloud practice in Riyadh. You will deploy and manage private cloud environments based on VMware vSphere, Cisco UCS, and related platforms for enterprise clients across the Kingdom.',
      'This role focuses on infrastructure delivery — not application development. You will work on projects ranging from greenfield private cloud builds to data residency migrations, and may also support STME\'s managed cloud operations team on an ongoing basis.',
    ],
    responsibilities: [
      'Deploy VMware vSphere, ESXi, vCenter, and NSX environments',
      'Configure and manage Cisco UCS blade and rack server systems',
      'Design private cloud architectures meeting KSA and UAE data residency requirements',
      'Execute virtualization consolidation and migration projects',
      'Support VMware Capacity Planner assessments for pre-sales engagements',
      'Maintain and troubleshoot production virtualization environments under SLA',
      'Produce detailed technical documentation and runbooks',
    ],
    requirements: [
      '5+ years of VMware vSphere administration and deployment',
      'VMware VCP-DCV certification (active)',
      'Hands-on experience with Cisco UCS (blade or rack)',
      'Understanding of storage integration (FC/iSCSI) with virtualization platforms',
      'Experience with VMs migration and P2V/V2V conversions',
      'Strong troubleshooting and root cause analysis skills',
    ],
    nice: [
      'VMware NSX-T experience',
      'Cisco UCS certification (DCUCI / DCUCD)',
      'Experience with Nutanix AHV or HCI platforms',
    ],
  },
  'Managed Services NOC Engineer': {
    dept: 'Services', location: 'Jeddah, KSA', type: 'Full-time',
    about: [
      'STME\'s Managed Services team is looking for a NOC Engineer to join its 24/7 operations center in Jeddah. You will monitor and support enterprise storage and infrastructure environments for managed clients across the Kingdom and the wider GCC.',
      'This is an operations role with structured shifts. You will be the first point of contact for client incidents, responsible for triage, escalation, and resolution within SLA. STME\'s NOC operates to enterprise-class standards with up to 15-minute SLA response.',
    ],
    responsibilities: [
      'Monitor enterprise storage, backup, and virtualization environments 24/7',
      'Respond to alerts and incidents within SLA — triage, escalate, and resolve',
      'Execute scheduled maintenance tasks (patching, backup verification, capacity checks)',
      'Produce daily and weekly operational reports for managed clients',
      'Escalate unresolved incidents to senior engineers and vendor support lines',
      'Maintain accurate incident and change records in the ITSM platform',
      'Support onboarding of new managed services clients',
    ],
    requirements: [
      '2+ years of IT operations or NOC experience',
      'Working knowledge of storage platforms (HDS, NetApp, or similar)',
      'Familiarity with backup systems (Veritas NetBackup, Veeam, or similar)',
      'Understanding of ITIL incident and change management processes',
      'Ability to work rotating shifts including nights and weekends',
      'Clear English communication — written and spoken',
    ],
    nice: [
      'ITIL Foundation certification',
      'Any vendor certification (storage, backup, or virtualization)',
      'Experience with ServiceNow or similar ITSM platforms',
    ],
  },
  'Resident Engineer — Data Management': {
    dept: 'Services', location: 'Abu Dhabi, UAE', type: 'Full-time',
    about: [
      'STME is seeking a Resident Engineer to be embedded at a major financial institution in Abu Dhabi. You will operate as the on-site STME representative, managing the client\'s storage and data protection environment day-to-day and acting as the primary escalation point for infrastructure issues.',
      'Resident Engineer roles are long-term assignments — you will build deep knowledge of the client environment and develop a trusted working relationship with their infrastructure team. STME provides continuous training and certification support for resident engineers.',
    ],
    responsibilities: [
      'Operate and maintain the client\'s primary storage and backup environment daily',
      'Respond to infrastructure incidents and service requests within agreed SLA',
      'Plan and execute scheduled maintenance activities (firmware, patching, capacity)',
      'Produce monthly capacity and performance reports for the client\'s infrastructure team',
      'Liaise between the client and STME\'s engineering team for escalated issues',
      'Maintain accurate documentation of the client environment (as-built, runbooks)',
      'Support storage procurement and capacity planning cycles',
    ],
    requirements: [
      '4+ years of enterprise storage administration',
      'Hands-on experience with NetApp ONTAP or HDS VSP in production environments',
      'Experience with Veritas NetBackup or equivalent backup platform',
      'Strong client-facing communication skills — comfortable presenting to senior IT leadership',
      'Based in or willing to relocate to Abu Dhabi',
    ],
    nice: [
      'NetApp NCSA or HDS Qualified Professional certification',
      'Experience working within GCC financial services institutions',
      'Arabic language skills advantageous',
    ],
  },
  'IT Project Manager (PMO)': {
    dept: 'Project Management', location: 'Riyadh, KSA', type: 'Full-time',
    about: [
      'STME\'s PMO team is looking for an experienced IT Project Manager to lead infrastructure deployment projects across the KSA portfolio. You will manage projects from the assessment phase through to client handover, applying STME\'s four-stage delivery methodology.',
      'You will work closely with senior engineers, vendor teams, and client project offices — managing scope, schedule, risk, and client communications simultaneously across multiple projects.',
    ],
    responsibilities: [
      'Lead infrastructure projects from initiation through to client sign-off',
      'Manage project scope, schedule, resource, risk, and budget',
      'Run weekly project status meetings with client and STME delivery teams',
      'Produce project documentation: plans, risk registers, status reports, handover packages',
      'Coordinate vendor teams and third-party contractors within project scope',
      'Escalate blockers and risks proactively to the PMO Lead and client stakeholders',
      'Ensure all deliverables meet STME quality standards and client acceptance criteria',
    ],
    requirements: [
      '5+ years of IT project management experience',
      'PMP or PRINCE2 certification (active)',
      'Experience delivering infrastructure projects (storage, network, virtualization, or security)',
      'Strong stakeholder management and executive communication skills',
      'Proficiency in project management tools (MS Project, or similar)',
      'Fluent English — Arabic advantageous',
    ],
    nice: [
      'Experience in GCC banking or government sector projects',
      'ITIL Service Management background',
      'Experience managing vendor relationships (Hitachi, NetApp, Cisco, VMware)',
    ],
  },
  'Account Manager — Enterprise': {
    dept: 'Sales', location: 'Dubai, UAE', type: 'Full-time',
    about: [
      'STME is looking for an experienced Enterprise Account Manager to manage and grow a portfolio of key accounts in the UAE. You will work closely with the pre-sales and technical teams to identify opportunities, develop proposals, and close deals — while maintaining the long-term relationships that define STME\'s client base.',
      'STME sells complex, multi-vendor infrastructure solutions to CIOs, infrastructure leads, and procurement teams at banks, government agencies, and large corporates. This is a consultative sales role — not a transactional one.',
    ],
    responsibilities: [
      'Own and grow a portfolio of 15–25 named enterprise accounts in the UAE',
      'Develop account plans and identify expansion opportunities within existing clients',
      'Work with pre-sales architects to build technically credible proposals',
      'Lead commercial negotiations and contract discussions with client procurement',
      'Maintain accurate pipeline and forecast data in the CRM',
      'Represent STME at industry events, vendor partner days, and client briefings',
      'Coordinate with the delivery team to ensure smooth transition from sale to project',
    ],
    requirements: [
      '5+ years of enterprise IT sales experience in the UAE market',
      'Track record of closing complex, multi-vendor infrastructure deals',
      'Existing relationships at CIO/IT Director level in UAE financial services or government',
      'Strong commercial and negotiation skills',
      'Fluent English — Arabic a significant advantage',
      'UAE driving license',
    ],
    nice: [
      'Experience selling storage, security, or cloud solutions',
      'Existing vendor relationships (NetApp, Cisco, VMware, or similar)',
      'Regional network across KSA, UAE, and Bahrain',
    ],
  },
  'Backup & Recovery Engineer': {
    dept: 'Engineering', location: 'Manama, Bahrain', type: 'Full-time',
    about: [
      'STME is seeking a Backup & Recovery Engineer to join its Bahrain office, supporting data protection deployments and managed services clients in Bahrain and Kuwait. You will deploy, configure, and support Veritas NetBackup and related data protection platforms for financial sector clients.',
      'This is a hands-on engineering role with client-facing responsibilities. You will work across deployment projects and ongoing managed services engagements, and will be expected to hold active certifications on supported platforms.',
    ],
    responsibilities: [
      'Deploy and configure Veritas NetBackup environments for financial sector clients',
      'Design backup policies, schedules, and retention strategies aligned to regulatory requirements',
      'Implement and support tape library integrations (Quantum, Spectra Logic, Tandberg)',
      'Perform backup verification, restore testing, and DR drill support',
      'Respond to backup failure alerts and incidents within SLA',
      'Maintain accurate documentation of client backup environments',
      'Support pre-sales sizing and scoping activities for backup and archiving solutions',
    ],
    requirements: [
      '3+ years of enterprise backup and recovery engineering',
      'Hands-on experience with Veritas NetBackup 9.x or later',
      'Understanding of tape library management and LTO tape technologies',
      'Knowledge of data protection requirements under SAMA and BMA frameworks',
      'Strong written English for technical documentation',
      'Based in or willing to relocate to Manama',
    ],
    nice: [
      'Veritas NetBackup Administration certification',
      'Experience with Veeam Backup & Replication',
      'Arabic language skills',
    ],
  },
};

function CareerDetail({ role, onBack, onContact }) {
  const r = role || { title: 'Senior Storage Engineer', dept: 'Engineering', location: 'Riyadh, KSA', type: 'Full-time', desc: '' };
  const detail = ROLE_DETAILS[r.title] || ROLE_DETAILS['Senior Storage Engineer'];
  const tocItems = ['About the role', 'Responsibilities', 'Requirements', 'Nice to have', 'Apply'];
  const [active, setActive] = useState(tocItems[0]);

  return (
    <main>
      <section className="page-hero section--soft" style={{ paddingBottom: 0 }}>
        <div className="page-hero__inner">
          <div className="crumbs">
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="uline">Careers</a>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>{detail.dept}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.02, maxWidth: '20ch', textWrap: 'balance', marginTop: 24, marginBottom: 0 }}>{r.title}</h1>
          <div style={{ display: 'flex', gap: 24, marginTop: 24, paddingBottom: 48, borderBottom: '1px solid var(--hairline)', flexWrap: 'wrap' }}>
            {[detail.dept, detail.location, detail.type].map((tag) => (
              <span key={tag} style={{ fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--mute)' }}>{tag}</span>
            ))}
          </div>
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
              Apply now <Icon name="arrow" size={14} />
            </button>
            <div style={{ marginTop: 24, padding: '20px', background: 'var(--soft)', border: '1px solid var(--hairline)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 12, fontFamily: 'var(--font-mono)' }}>Position details</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: 'var(--mute)' }}>
                <span><strong style={{ color: 'var(--ink)' }}>Department</strong><br />{detail.dept}</span>
                <span><strong style={{ color: 'var(--ink)' }}>Location</strong><br />{detail.location}</span>
                <span><strong style={{ color: 'var(--ink)' }}>Type</strong><br />{detail.type}</span>
              </div>
            </div>
          </aside>

          <div>
            <h2 id={stmeSlug('About the role')}>About the role</h2>
            {detail.about.map((para, i) => <p key={i}>{para}</p>)}

            <h2 id={stmeSlug('Responsibilities')} style={{ marginTop: 56 }}>Responsibilities</h2>
            <ul className="bullets">
              {detail.responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2 id={stmeSlug('Requirements')} style={{ marginTop: 56 }}>Requirements</h2>
            <ul className="bullets">
              {detail.requirements.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2 id={stmeSlug('Nice to have')} style={{ marginTop: 56 }}>Nice to have</h2>
            <ul className="bullets">
              {detail.nice.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <div style={{ marginTop: 56, padding: '32px', background: 'var(--soft)', border: '1px solid var(--hairline)' }}>
              <div className="eyebrow-row" style={{ marginBottom: 16 }}>About STME</div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--mute)', margin: 0 }}>Storage Technology Middle East (STME) is a regional system integrator and IT solutions provider founded in 1982, headquartered in Riyadh. With 120+ qualified staff delivering services to 400+ enterprise customers across eight markets, STME holds the highest vendor accreditations in data management and security in the Middle East. One Smart Solution.</p>
            </div>

            <div id={stmeSlug('Apply')} style={{ marginTop: 40, display: 'flex', gap: 16, alignItems: 'center', padding: '28px 0', borderTop: '1px solid var(--hairline)' }}>
              <button className="btn btn--primary" onClick={onContact}>
                Apply for this role <Icon name="arrow" size={14} />
              </button>
              <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="btn btn--secondary">
                Back to all roles
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.CareerDetail = CareerDetail;
