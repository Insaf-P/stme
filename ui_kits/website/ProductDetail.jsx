const PRODUCT_DETAILS = {
  'HDS Universal Replicator': {
    partner: 'Hitachi Vantara', cat: 'Data Availability',
    tagline: 'Journal-based asynchronous replication for long-distance disaster recovery.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'HDS Universal Replicator (UR) provides asynchronous remote replication for Hitachi VSP storage arrays, enabling disaster recovery across long distances with minimal bandwidth overhead. Unlike synchronous replication, UR uses a journal-based approach that captures all write operations and replays them at the secondary site — allowing replication across thousands of kilometres without performance impact on primary workloads.',
      'STME deploys Universal Replicator for GCC financial institutions and government agencies requiring RPO commitments measured in seconds or minutes rather than hours. The solution integrates directly with STME\'s managed DR operations team for continuous monitoring and scheduled DR drills.',
    ],
    features: [
      'Asynchronous replication across unlimited distances',
      'Journal-based consistency groups for application-consistent recovery',
      'Delta resync for fast recovery after link interruption',
      'Support for multiple VSP array generations (VSP 5000, VSP One)',
      'Integration with Hitachi Ops Center for centralized management',
      'Bi-directional replication for active-active DR configurations',
      'Bandwidth throttling and compression for WAN efficiency',
    ],
    specs: [
      { label: 'Replication type', value: 'Asynchronous (journal-based)' },
      { label: 'RPO target', value: 'Seconds to minutes' },
      { label: 'Distance', value: 'Unlimited (WAN)' },
      { label: 'Supported arrays', value: 'Hitachi VSP series' },
      { label: 'Consistency groups', value: 'Yes — application-consistent' },
      { label: 'Management', value: 'Hitachi Ops Center Replication Manager' },
    ],
    useCases: ['Financial services DR', 'Government data center replication', 'Multi-site disaster recovery'],
    related: ['NetApp SnapMirror', 'HDS TruCopy', 'NetApp MetroCluster'],
  },
  'NetApp SnapMirror': {
    partner: 'NetApp', cat: 'Data Availability',
    tagline: 'Policy-based replication for unified ONTAP environments — on-premise to cloud.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80',
    overview: [
      'NetApp SnapMirror delivers efficient, policy-based replication across NetApp ONTAP systems — from all-flash arrays to hybrid cloud. SnapMirror transfers only changed data blocks after the baseline, using built-in compression and deduplication to minimize bandwidth consumption.',
      'STME uses SnapMirror as the replication backbone for NetApp-based DR programs across the GCC. Integration with ONTAP\'s unified data management layer means the same replication policy covers block, file, and object data — simplifying compliance reporting and DR documentation.',
    ],
    features: [
      'Block-level incremental replication (changed data only)',
      'Built-in deduplication and compression on replication traffic',
      'Supports AFF, FAS, ONTAP Select, and Cloud Volumes ONTAP',
      'SnapMirror Synchronous for zero-data-loss replication',
      'Cascade and fan-out topologies for complex DR architectures',
      'Integration with NetApp SnapCenter for application-consistent backups',
      'Cloud replication to AWS, Azure, and Google Cloud',
    ],
    specs: [
      { label: 'Replication type', value: 'Async / Sync (configurable)' },
      { label: 'RPO (async)', value: 'Minutes' },
      { label: 'RPO (sync)', value: 'Zero (RPO=0)' },
      { label: 'Supported platforms', value: 'ONTAP 9.x, Cloud Volumes' },
      { label: 'Protocol support', value: 'NFS, CIFS, iSCSI, FC, S3' },
      { label: 'Management', value: 'ONTAP System Manager / REST API' },
    ],
    useCases: ['Hybrid cloud DR', 'Backup to cloud', 'Zero-data-loss replication for banking'],
    related: ['NetApp SnapVault', 'NetApp MetroCluster', 'HDS Universal Replicator'],
  },
  'HDS TruCopy': {
    partner: 'Hitachi Vantara', cat: 'Data Availability',
    tagline: 'Synchronous remote replication for zero-data-loss tier-one workloads.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'HDS TruCopy provides synchronous remote replication for Hitachi VSP arrays, ensuring that every write is committed to both the primary and secondary site before the application receives acknowledgement. This guarantees RPO=0 — no data loss in the event of a primary site failure.',
      'STME deploys TruCopy for tier-one applications in GCC banking and capital markets environments where regulatory requirements mandate zero data loss. TruCopy is typically combined with Universal Replicator in a 3-site configuration: TruCopy for synchronous local replication and UR for asynchronous long-distance DR.',
    ],
    features: [
      'Synchronous replication — RPO=0 guaranteed',
      'Instant failover to secondary site with no data loss',
      '3-site configurations (TruCopy + Universal Replicator)',
      'Fence levels control application behavior during link failure',
      'Supports all VSP array families',
      'Integration with host clustering (Oracle RAC, Windows Server)',
    ],
    specs: [
      { label: 'Replication type', value: 'Synchronous' },
      { label: 'RPO', value: 'Zero (RPO=0)' },
      { label: 'RTO', value: 'Minutes (with cluster automation)' },
      { label: 'Max distance', value: '~300km (latency dependent)' },
      { label: 'Supported arrays', value: 'Hitachi VSP series' },
    ],
    useCases: ['Core banking zero-data-loss', 'Capital markets trading platforms', '3-site DR architectures'],
    related: ['HDS Universal Replicator', 'NetApp MetroCluster', 'Veritas Storage Foundation HA/DR'],
  },
  'Veritas Enterprise Vault': {
    partner: 'Veritas Technologies', cat: 'Information Lifecycle Management',
    tagline: 'Industry-leading email and content archiving with eDiscovery and compliance.',
    img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1400&q=80',
    overview: [
      'Veritas Enterprise Vault is the industry standard for enterprise content archiving — capturing, indexing, and managing email, file, SharePoint, instant messaging, and social media content under unified retention policies. A single Enterprise Vault deployment can manage petabytes of archive content with full-text search and legal hold capabilities.',
      'STME deploys Enterprise Vault for GCC financial institutions, government agencies, and healthcare organizations that must meet regulatory retention mandates — including SAMA circular requirements, CBUAE data governance rules, and local e-discovery obligations. STME manages EV deployments as part of its managed services portfolio.',
    ],
    features: [
      'Email archiving (Exchange, Office 365, Lotus Notes)',
      'File system and SharePoint archiving',
      'Instant messaging and collaboration archiving',
      'Automated retention policy enforcement',
      'Legal hold and eDiscovery case management',
      'Full-text search across all archived content',
      'Seamless integration with Veritas NetBackup',
    ],
    specs: [
      { label: 'Archive sources', value: 'Email, file, SharePoint, IM, social' },
      { label: 'Storage back-end', value: 'Any disk, cloud, or tape' },
      { label: 'Retention', value: 'Policy-based, unlimited duration' },
      { label: 'Search', value: 'Full-text, metadata, date range' },
      { label: 'Legal hold', value: 'Yes — with audit trail' },
    ],
    useCases: ['SAMA compliance archiving', 'Legal hold for financial disputes', 'Long-term email retention'],
    related: ['Veritas NetBackup', 'NetApp StorageGRID', 'Quantum StorNext'],
  },
  'HDS Dynamic Provisioning': {
    partner: 'Hitachi Vantara', cat: 'Data Management',
    tagline: 'Thin provisioning for HDS VSP — maximize utilization, eliminate waste.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'HDS Dynamic Provisioning (DP) enables thin provisioning on Hitachi VSP storage arrays — allowing administrators to present more storage capacity to hosts than is physically allocated. Space is consumed from a shared pool only when data is actually written, dramatically improving utilization rates and reducing the need for over-provisioning.',
      'STME implements Dynamic Provisioning as part of storage consolidation programs for GCC enterprises moving from siloed, over-provisioned storage environments to centrally managed thin-provisioned pools. DP integrates with HDS Tiered Storage Manager to automatically migrate data between storage tiers based on access patterns.',
    ],
    features: [
      'Thin provisioning from shared storage pools',
      'Over-commitment of storage capacity to hosts',
      'Automated pool expansion and threshold alerts',
      'Integration with HDS Tiered Storage Manager for auto-tiering',
      'Zero-page reclaim to recover unused space',
      'Support for all VSP array models',
    ],
    specs: [
      { label: 'Provisioning type', value: 'Thin (virtual capacity)' },
      { label: 'Pool types', value: 'HDD, SSD, mixed-tier' },
      { label: 'Over-commitment', value: 'Configurable ratio' },
      { label: 'Management', value: 'Hitachi Ops Center Administrator' },
    ],
    useCases: ['Storage consolidation', 'Data center modernization', 'Virtual machine storage pools'],
    related: ['HDS Tiered Storage Manager', 'HDS Universal Volume Manager', 'VMware vSAN'],
  },
  'HDS Tiered Storage Manager': {
    partner: 'Hitachi Vantara', cat: 'Data Management',
    tagline: 'Automated data tiering across SSD, SAS, and SATA — without application downtime.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'Hitachi Tiered Storage Manager (HTSM) automates the movement of data between storage tiers — SSD, SAS, and SATA — based on access frequency and I/O patterns. Hot data moves to fast flash tiers; cold data migrates to cost-effective spinning disk or nearline tiers — all without application interruption.',
      'STME uses HTSM to reduce storage costs for GCC clients with large, mixed-workload environments. By automatically placing frequently accessed data on flash and infrequently accessed data on lower-cost tiers, clients typically achieve 30–40% reduction in effective storage cost without manual data movement.',
    ],
    features: [
      'Automated tiering across SSD, SAS, and SATA',
      'I/O pattern analysis for intelligent placement',
      'Sub-LUN tiering for fine-grained data movement',
      'No application downtime during tier migration',
      'Policy-based tiering with manual override',
      'Integration with HDS Dynamic Provisioning pools',
    ],
    specs: [
      { label: 'Tier types', value: 'SSD, SAS 10K/15K, SATA, SAS 7.2K' },
      { label: 'Tiering granularity', value: 'Sub-LUN (42MB extents)' },
      { label: 'Analysis period', value: 'Configurable (default: 24hr)' },
      { label: 'Migration impact', value: 'Zero downtime, background operation' },
    ],
    useCases: ['Mixed-workload storage optimization', 'Cost reduction without performance loss', 'Flash tier maximization'],
    related: ['HDS Dynamic Provisioning', 'NetApp FabricPool', 'Quantum StorNext'],
  },
  'Quantum StorNext': {
    partner: 'Quantum', cat: 'Data Management',
    tagline: 'High-performance shared storage and archive for media, energy, and research.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'Quantum StorNext is a high-performance shared storage and archive platform designed for workloads that require sustained throughput and large-file handling — media production, seismic processing, genomics, and research computing. StorNext combines a high-performance shared file system with integrated archive management, enabling a unified namespace across disk and tape.',
      'STME deploys StorNext for energy operators in the GCC managing large seismic data sets, and for broadcast and media organizations requiring shared access to video production content. StorNext\'s tiering engine automatically migrates content from fast disk to tape archive based on access time and policy.',
    ],
    features: [
      'High-performance parallel file system (StorNext FS)',
      'Integrated archive management with policy-based tiering',
      'Unified namespace across disk, tape, and cloud',
      'Multi-protocol access (NFS, SMB, FibreChannel, object)',
      'Metadata-driven content management',
      'Replication to secondary StorNext or cloud sites',
      'Up to thousands of clients sharing one file system',
    ],
    specs: [
      { label: 'File system', value: 'StorNext FS (parallel, shared)' },
      { label: 'Throughput', value: 'Up to tens of GB/s aggregate' },
      { label: 'File size', value: 'Optimized for large files (GB–TB)' },
      { label: 'Tape integration', value: 'Quantum Scalar, any LTFS tape' },
      { label: 'Protocols', value: 'NFS, SMB, FC, S3' },
    ],
    useCases: ['Seismic data management', 'Broadcast media production', 'Research data management'],
    related: ['Quantum DXi Series', 'Quantum Tape Libraries', 'Spectra Logic Tape Libraries'],
  },
  'Veritas Storage Foundation HA/DR': {
    partner: 'Veritas Technologies', cat: 'Data Management',
    tagline: 'Enterprise storage and HA management for heterogeneous environments.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'Veritas Storage Foundation with High Availability (SF HA) provides enterprise volume management, file system optimization, and cluster failover in a single integrated platform. It manages storage across heterogeneous environments — any OS, any storage vendor — making it vendor-neutral infrastructure for enterprise HA.',
      'STME deploys SF HA/DR for Oracle, SAP, and other enterprise application environments across the GCC where application-aware failover is required. The Cluster Server (VCS) component detects application failures and orchestrates failover within minutes, with full visibility into storage health across the cluster.',
    ],
    features: [
      'Volume management across heterogeneous storage',
      'Veritas File System (VxFS) with logging and fast recovery',
      'Cluster Server (VCS) for application-aware HA failover',
      'DR automation with Global Cluster Option (GCO)',
      'Application agents for Oracle, SAP, Exchange, SQL Server',
      'Storage migration without application downtime',
      'Support for Linux, AIX, Solaris, Windows',
    ],
    specs: [
      { label: 'HA component', value: 'Veritas Cluster Server (VCS)' },
      { label: 'DR component', value: 'Global Cluster Option (GCO)' },
      { label: 'Supported OS', value: 'Linux, AIX, Solaris, Windows' },
      { label: 'Storage support', value: 'Any vendor (heterogeneous)' },
      { label: 'RTO', value: 'Minutes (automated failover)' },
    ],
    useCases: ['Oracle DB high availability', 'SAP application DR', 'Multi-vendor storage management'],
    related: ['Veritas Enterprise Vault', 'Veritas NetBackup', 'NetApp MetroCluster'],
  },
  'Cisco UCS': {
    partner: 'Cisco', cat: 'Server Hardware & SAN',
    tagline: 'Unified compute, network, and storage access — the foundation of STME private cloud.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80',
    overview: [
      'Cisco Unified Computing System (UCS) integrates compute, network, storage access, and virtualization into a single cohesive platform — managed through Cisco UCS Manager or Intersight. The Cisco UCS X-Series and B-Series blade servers, combined with the Fabric Interconnect, eliminate the complexity of managing separate server, network, and storage components.',
      'STME has deployed Cisco UCS as the compute foundation for private cloud and VMware environments across the GCC since the platform\'s introduction. STME holds active Cisco UCS certifications and works with Cisco\'s engineering team on complex multi-chassis deployments for banking, government, and telecom clients.',
    ],
    features: [
      'Unified compute, network, and SAN access in one platform',
      'Cisco UCS Manager for centralized policy-based management',
      'Service Profiles for stateless computing and rapid provisioning',
      'Cisco Intersight for cloud-based management and AI-driven insights',
      'Support for VMware, Red Hat, Windows, and bare-metal workloads',
      'Integrated FCoE and iSCSI for storage connectivity',
      '10/25/40/100GbE fabric options',
    ],
    specs: [
      { label: 'Form factors', value: 'Blade (B-Series), Rack (C-Series), X-Series' },
      { label: 'Management', value: 'UCS Manager, Cisco Intersight' },
      { label: 'Fabric', value: '10/25/40/100GbE, FCoE' },
      { label: 'Virtualization', value: 'VMware, KVM, Hyper-V' },
      { label: 'Certifications', value: 'VMware, SAP, Oracle, Microsoft' },
    ],
    useCases: ['Private cloud compute layer', 'VMware vSphere clusters', 'SAP HANA infrastructure'],
    related: ['VMware ESXi', 'VMware vCenter Converter', 'HDS Universal Volume Manager'],
  },
  'HDS In-System Data Replication': {
    partner: 'Hitachi Vantara', cat: 'Data Protection & Recovery',
    tagline: 'Internal replication within HDS VSP — instant snapshots without production impact.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'HDS In-System Data Replication encompasses ShadowImage (full-volume internal copy) and Copy-on-Write Snapshot (space-efficient point-in-time copy) capabilities within the Hitachi VSP array. These features allow instant backup copies and test/dev clones to be created from production data without impacting production performance or requiring additional host-based software.',
      'STME uses HDS in-system replication as part of comprehensive data protection architectures for banking and government clients. ShadowImage copies integrate with Veritas NetBackup for offload backups, eliminating the backup window from production systems.',
    ],
    features: [
      'ShadowImage — full-volume internal copy for instant backup',
      'Copy-on-Write Snapshot — space-efficient point-in-time copies',
      'Up to 1024 snapshot generations per volume',
      'Production-independent restore — no production impact',
      'Integration with backup software for offload backup',
      'Support for consistent application snapshots (VSS, Oracle RMAN)',
    ],
    specs: [
      { label: 'Copy types', value: 'ShadowImage (full), CoW Snapshot (thin)' },
      { label: 'Snapshot generations', value: 'Up to 1024 per volume' },
      { label: 'Copy creation time', value: 'Seconds (pointer-based)' },
      { label: 'Restore', value: 'Instant — no data movement required' },
    ],
    useCases: ['Offload backup from production', 'Test/dev clone provisioning', 'Application-consistent snapshots'],
    related: ['Veritas NetBackup', 'NetApp SnapVault', 'HDS Universal Replicator'],
  },
  'NetApp SnapVault': {
    partner: 'NetApp', cat: 'Data Protection & Recovery',
    tagline: 'Disk-to-disk backup with deduplication for fast, granular restores.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80',
    overview: [
      'NetApp SnapVault provides efficient disk-to-disk backup for NetApp ONTAP environments, maintaining multiple generations of Snapshot copies on a secondary NetApp system. Unlike SnapMirror (which replicates for DR), SnapVault creates independent backup copies with longer retention — ideal for regulatory compliance and file-level restore requests.',
      'STME uses SnapVault as the secondary tier in NetApp data protection architectures, providing 30, 60, or 90-day backup retention with granular file restore capability. Integration with NetApp SnapCenter enables application-consistent backup policies for Oracle, SQL Server, and SAP.',
    ],
    features: [
      'Disk-to-disk backup with multiple Snapshot generations',
      'Deduplication and compression on backup data',
      'Independent retention from primary SnapMirror replication',
      'File, LUN, and volume-level restore',
      'Integration with NetApp SnapCenter for app-consistent backup',
      'WAN-efficient transfer (incremental forever)',
    ],
    specs: [
      { label: 'Backup type', value: 'Disk-to-disk (D2D)' },
      { label: 'Retention', value: 'Configurable — days to years' },
      { label: 'Restore granularity', value: 'File, LUN, volume, or full system' },
      { label: 'Transfer efficiency', value: 'Incremental with dedup/compress' },
    ],
    useCases: ['Long-term backup retention', 'Regulatory compliance backup', 'File restore for end users'],
    related: ['NetApp SnapMirror', 'NetApp SnapProtect', 'Veritas NetBackup'],
  },
  'NetApp SnapManager Suite': {
    partner: 'NetApp', cat: 'Data Protection & Recovery',
    tagline: 'Application-integrated backup and recovery for Oracle, SQL, Exchange, and SAP.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80',
    overview: [
      'The NetApp SnapManager Suite provides application-specific backup and recovery integrations — enabling Oracle, Microsoft SQL Server, Microsoft Exchange, and SAP administrators to manage data protection directly from their application management tools. SnapManager automates quiescing, snapshotting, cataloguing, and verification without requiring specialized storage administrator involvement.',
      'STME deploys SnapManager components as part of Oracle and SAP data protection programs for GCC financial institutions. The application-aware approach ensures backup consistency and enables single-file, tablespace-level, or full-database restores with minimal DBA involvement.',
    ],
    features: [
      'SnapManager for Oracle (SMO) — RMAN-integrated protection',
      'SnapManager for SQL — VSS-integrated backup for SQL Server',
      'SnapManager for Exchange — mailbox-level recovery',
      'SnapManager for SAP — Backint-certified integration',
      'Automated verification of backup integrity',
      'Clone provisioning for test and development environments',
    ],
    specs: [
      { label: 'Applications', value: 'Oracle, SQL Server, Exchange, SAP' },
      { label: 'Oracle integration', value: 'RMAN (Backint)' },
      { label: 'Windows integration', value: 'VSS provider' },
      { label: 'Recovery', value: 'File, table, database, mailbox-level' },
    ],
    useCases: ['Oracle database protection', 'SAP HANA backup', 'Exchange mailbox recovery'],
    related: ['NetApp SnapVault', 'NetApp SnapProtect', 'Veritas NetBackup'],
  },
  'NetApp SnapProtect': {
    partner: 'NetApp', cat: 'Data Protection & Recovery',
    tagline: 'Unified data protection management across NetApp and third-party storage.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80',
    overview: [
      'NetApp SnapProtect provides centralized backup policy management across mixed NetApp and third-party storage environments. By integrating with CommVault IntelliSnap technology, SnapProtect extends NetApp snapshot-based backup workflows to include traditional tape and disk backup targets — giving organizations a single management plane for their entire backup estate.',
      'STME uses SnapProtect in hybrid environments where clients have both NetApp storage and non-NetApp systems. SnapProtect provides the bridge between snapshot-based primary protection and policy-based secondary backup, with deduplication across the entire backup data set.',
    ],
    features: [
      'Unified policy management for NetApp and third-party storage',
      'Snapshot integration with CommVault IntelliSnap',
      'Deduplication across all protected data',
      'Support for tape, disk, and cloud backup targets',
      'Single management console for all backup operations',
      'Application-aware protection (Oracle, Exchange, SQL, VMware)',
    ],
    specs: [
      { label: 'Integration', value: 'CommVault IntelliSnap' },
      { label: 'Storage support', value: 'NetApp + third-party' },
      { label: 'Targets', value: 'Disk, tape, cloud' },
      { label: 'Deduplication', value: 'Global across all data' },
    ],
    useCases: ['Heterogeneous backup management', 'Mixed NetApp and EMC environments', 'Centralized backup policy'],
    related: ['NetApp SnapVault', 'NetApp SnapManager Suite', 'Veritas NetBackup'],
  },
  'Quantum DXi Series': {
    partner: 'Quantum', cat: 'Data Protection & Recovery',
    tagline: 'Disk-based backup with inline deduplication and WAN-efficient replication.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'The Quantum DXi Series provides disk-based backup appliances with inline deduplication, enabling enterprises to achieve tape-like economics on disk. DXi systems support OST (OpenStorage) integration with Veritas NetBackup and Backup Exec, as well as CIFS/NFS for direct backup. Built-in replication with deduplication at the wire level makes DXi ideal for branch-to-data-center backup consolidation.',
      'STME deploys DXi appliances as the disk backup target tier in backup architectures for GCC enterprises, typically as the D in a D2D2T (Disk-to-Disk-to-Tape) configuration. DXi\'s deduplication ratios of 20:1 to 30:1 for typical backup data sets dramatically reduce the backup storage footprint.',
    ],
    features: [
      'Inline deduplication (no performance impact)',
      'Veritas OST integration for NetBackup and Backup Exec',
      'CIFS/NFS/VTL protocols for broad backup software support',
      'WAN-efficient replication (deduplication before transfer)',
      'Cloud-connected replication to AWS, Azure',
      'Encryption at rest and in flight',
    ],
    specs: [
      { label: 'Deduplication', value: 'Inline, 20:1–30:1 typical ratio' },
      { label: 'Protocols', value: 'OST, CIFS, NFS, VTL, NDMP' },
      { label: 'Capacity range', value: 'DXi 4700 to DXi 9000 series' },
      { label: 'Replication', value: 'WAN-optimized with dedup' },
      { label: 'Cloud integration', value: 'AWS S3, Azure Blob' },
    ],
    useCases: ['D2D2T backup architecture', 'Branch-to-DC backup consolidation', 'Backup deduplication'],
    related: ['Quantum Tape Libraries', 'Veritas NetBackup', 'Spectra Logic Tape Libraries'],
  },
  'Quantum Tape Libraries': {
    partner: 'Quantum', cat: 'Data Protection & Recovery',
    tagline: 'Scalar tape automation for enterprise archive and air-gapped ransomware protection.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'Quantum Scalar tape libraries provide enterprise tape automation from mid-range to petabyte-scale — the Scalar i3 and i6 for mid-range, and the Scalar i6000 for large archive environments. Quantum Scalar libraries integrate with all major backup software platforms and support LTFS for direct file access without backup software.',
      'STME deploys Quantum Scalar libraries as the cold tier in backup architectures requiring long-term retention, regulatory compliance archiving, or ransomware-isolated backup. Tape provides the only truly air-gapped data protection option — ejected tape cartridges are physically isolated from network-connected systems.',
    ],
    features: [
      'LTO-8 and LTO-9 tape technology support',
      'Scalar i3, i6, and i6000 models (mid-range to petabyte)',
      'LTFS for file-level access without backup software',
      'Integration with Veritas, Veeam, Commvault, and IBM Spectrum',
      'AES-256 hardware encryption on tape drives',
      'Active IQ for predictive monitoring and support',
      'Air-gap capability for ransomware isolation',
    ],
    specs: [
      { label: 'Tape generation', value: 'LTO-8, LTO-9 (up to 45TB native/cart)' },
      { label: 'Models', value: 'Scalar i3, i6, i6000' },
      { label: 'Encryption', value: 'AES-256 hardware (T10 DIF)' },
      { label: 'Air-gap', value: 'Yes — physically ejected cartridges' },
      { label: 'LTFS', value: 'Yes — open file access' },
    ],
    useCases: ['Long-term archive', 'Ransomware-isolated air-gap backup', 'Regulatory retention'],
    related: ['Quantum DXi Series', 'Spectra Logic Tape Libraries', 'Tandberg Data Tape Libraries'],
  },
  'Spectra Logic Tape Libraries': {
    partner: 'Spectra Logic', cat: 'Data Protection & Recovery',
    tagline: 'Petabyte-scale deep archive with BlackPearl object storage integration.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'Spectra Logic tape libraries — the TFinity and T950 — provide deep archive storage at petabyte scale with AES-256 encryption and WORM media support for compliance archiving. The BlackPearl object storage gateway allows applications to write directly to tape using an S3-compatible interface, eliminating the need for traditional backup software for archive workflows.',
      'STME deploys Spectra Logic libraries for clients in government, energy, and healthcare that require decades-long retention with tamper-proof WORM media. The BlackPearl integration allows modern cloud-native applications to write directly to tape archive without middleware.',
    ],
    features: [
      'TFinity (exabyte-scale) and T950 (petabyte) models',
      'BlackPearl object storage gateway (S3-compatible)',
      'WORM media for tamper-proof compliance archive',
      'AES-256 hardware encryption on all drives',
      'Multi-generation LTO and TS11xx drive support',
      'Glacier-like deep archive with intelligent tiering',
    ],
    specs: [
      { label: 'Models', value: 'TFinity (exabyte), T950 (petabyte)' },
      { label: 'Interface', value: 'BlackPearl (S3), SCSI, FC' },
      { label: 'WORM', value: 'Yes — hardware-enforced' },
      { label: 'Encryption', value: 'AES-256 hardware' },
      { label: 'Drive support', value: 'LTO-9, IBM TS1160' },
    ],
    useCases: ['Government data archive', 'Healthcare long-term retention', 'Deep cold archive at petabyte scale'],
    related: ['Quantum Tape Libraries', 'Quantum StorNext', 'BlackPearl object storage'],
  },
  'Tandberg Data Tape Libraries': {
    partner: 'Tandberg Data', cat: 'Data Protection & Recovery',
    tagline: 'Cost-effective LTO tape automation for mid-market archive and backup.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'Tandberg Data provides a complete range of LTO tape automation — from the RDX removable disk system for small environments to the NEOxl series tape libraries for mid-market organizations. Tandberg tape products offer cost-effective, reliable secondary storage and offline backup for organizations that do not require the scale of enterprise tape libraries.',
      'STME deploys Tandberg tape libraries and RDX drives for mid-market clients across the GCC, typically as the tape tier in D2D2T architectures. Tandberg NEOxl libraries integrate with Veritas Backup Exec and other SMB-focused backup platforms.',
    ],
    features: [
      'NEOxl series tape libraries (mid-range)',
      'RDX removable disk cartridge system',
      'LTO-8 and LTO-9 drive support',
      'Integration with Veritas Backup Exec, Veeam, and others',
      'AES-256 hardware encryption',
      'Barcode reader for automated media management',
    ],
    specs: [
      { label: 'Library models', value: 'NEOxl 40, NEOxl 80, NEOxl 200+' },
      { label: 'Removable disk', value: 'RDX (USB 3.0, up to 5TB/cart)' },
      { label: 'Tape generation', value: 'LTO-8, LTO-9' },
      { label: 'Encryption', value: 'AES-256 hardware' },
    ],
    useCases: ['Mid-market tape archive', 'SMB backup to tape', 'Offline backup cartridges'],
    related: ['Quantum Tape Libraries', 'Veritas Backup Exec', 'Quantum DXi Series'],
  },
  'NetApp MetroCluster': {
    partner: 'NetApp', cat: 'High Availability & DR',
    tagline: 'Synchronous mirroring for continuous availability — automatic failover, zero data loss.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80',
    overview: [
      'NetApp MetroCluster provides synchronous mirroring of ONTAP data between two data center sites, with automatic failover in the event of a site failure. Unlike SnapMirror which requires manual intervention, MetroCluster provides continuous availability — the surviving site takes over automatically within seconds, with RPO=0.',
      'STME deploys MetroCluster for tier-one banking applications, stock exchanges, and payment processing environments where the regulatory or commercial cost of downtime is unacceptable. MetroCluster is validated for SAMA business continuity requirements and CBUAE operational resilience frameworks.',
    ],
    features: [
      'Synchronous mirroring — RPO=0 at both sites simultaneously',
      'Automatic failover without manual intervention',
      'Stretch and fabric-attached MetroCluster configurations',
      'Support for all ONTAP-based workloads (NAS, SAN, object)',
      'Mediator-based quorum for split-brain prevention',
      'Integration with ONTAP native data management features',
    ],
    specs: [
      { label: 'Mirroring type', value: 'Synchronous — RPO=0' },
      { label: 'Failover time', value: 'Seconds (automatic)' },
      { label: 'Max distance', value: '~300km (latency dependent)' },
      { label: 'Quorum', value: 'ONTAP Mediator' },
      { label: 'Supported platforms', value: 'AFF, FAS, ONTAP Select' },
    ],
    useCases: ['Banking core system HA', 'Payment processing continuity', 'Zero-data-loss regulatory compliance'],
    related: ['NetApp SnapMirror', 'HDS TruCopy', 'Veritas Storage Foundation HA/DR'],
  },
  'HDS Universal Volume Manager': {
    partner: 'Hitachi Vantara', cat: 'Virtualization',
    tagline: 'Virtualize third-party storage behind HDS VSP for simplified management.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview: [
      'HDS Universal Volume Manager (UVM) allows the Hitachi VSP to virtualize storage volumes from third-party arrays — including EMC, NetApp, HP, and IBM — presenting them to hosts as VSP-managed volumes. This enables organizations to manage heterogeneous storage environments through a single VSP management interface and apply HDS software features (replication, tiering, snapshots) to non-HDS storage.',
      'STME uses UVM in data center consolidation programs where clients have multi-vendor storage environments and want to standardize on a single management platform. UVM also enables non-disruptive data migration from legacy storage to new VSP arrays.',
    ],
    features: [
      'Virtualize third-party arrays behind HDS VSP',
      'Apply HDS replication features to external storage',
      'Non-disruptive migration from external to internal VSP storage',
      'Single management interface for all storage',
      'Supports EMC, HP, IBM, NetApp, and other arrays as external',
      'Full VSP feature set available on virtualized volumes',
    ],
    specs: [
      { label: 'Supported externals', value: 'EMC, HP, IBM, NetApp, others' },
      { label: 'Migration', value: 'Non-disruptive (host unaware)' },
      { label: 'Management', value: 'Hitachi Ops Center (unified)' },
      { label: 'Feature access', value: 'All VSP features on external vols' },
    ],
    useCases: ['Heterogeneous storage consolidation', 'Non-disruptive migration', 'Multi-vendor management simplification'],
    related: ['HDS Dynamic Provisioning', 'HDS Universal Replicator', 'Cisco UCS'],
  },
  'VMware Capacity Planner': {
    partner: 'VMware', cat: 'Virtualization',
    tagline: 'Pre-virtualization assessment — right-size your vSphere deployment before you buy.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'VMware Capacity Planner collects performance data from physical servers over 2–4 weeks and models the consolidation ratios, resource requirements, and ROI of virtualizing those workloads onto VMware vSphere. The output is a detailed sizing report that gives procurement committees the evidence they need to approve virtualization investments.',
      'STME uses Capacity Planner at the beginning of every VMware engagement to right-size the vSphere deployment. Accurate sizing prevents over-purchasing of compute resources and ensures the virtualization environment is sized for actual workload needs rather than theoretical peak capacity.',
    ],
    features: [
      '2–4 week data collection from physical servers',
      'CPU, memory, disk I/O, and network utilization analysis',
      'Consolidation ratio modeling (physical-to-virtual)',
      'vSphere sizing recommendations',
      'ROI and TCO analysis for management approval',
      'Integration with vSphere deployment planning tools',
    ],
    specs: [
      { label: 'Collection period', value: '2–4 weeks (recommended)' },
      { label: 'Metrics', value: 'CPU, RAM, disk I/O, network' },
      { label: 'Output', value: 'Sizing report, consolidation model, ROI' },
      { label: 'OS support', value: 'Windows, Linux (agent-based and agentless)' },
    ],
    useCases: ['Pre-virtualization sizing', 'Data center consolidation planning', 'Refresh cycle ROI analysis'],
    related: ['VMware ESXi', 'VMware vCenter Converter', 'Cisco UCS'],
  },
  'VMware ESXi': {
    partner: 'VMware', cat: 'Virtualization',
    tagline: 'Enterprise hypervisor — the foundation of VMware vSphere private cloud.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'VMware ESXi is the bare-metal hypervisor that forms the foundation of VMware vSphere — the world\'s leading virtualization platform. ESXi runs directly on server hardware without a general-purpose operating system, providing a thin, secure virtualization layer that maximizes the resources available to virtual machines.',
      'STME is a VMware Solution Provider with certified engineers across the GCC. STME designs, deploys, and manages VMware vSphere environments for enterprise clients — from initial ESXi cluster design and deployment through to ongoing managed operations and capacity management.',
    ],
    features: [
      'Bare-metal hypervisor — no host OS overhead',
      'Support for Windows, Linux, and other guest OS families',
      'vSphere vMotion for live VM migration between hosts',
      'vSphere HA for automatic VM restart on host failure',
      'vSphere DRS for automated workload balancing',
      'NSX integration for software-defined networking',
      'vSAN integration for hyper-converged storage',
    ],
    specs: [
      { label: 'Type', value: 'Type-1 bare-metal hypervisor' },
      { label: 'Max vCPUs/VM', value: '768 (vSphere 8)' },
      { label: 'Max RAM/VM', value: '24TB (vSphere 8)' },
      { label: 'Clustering', value: 'vSphere HA, DRS, vMotion' },
      { label: 'Management', value: 'vCenter Server' },
    ],
    useCases: ['Private cloud infrastructure', 'Data center consolidation', 'Virtual desktop infrastructure (VDI)'],
    related: ['VMware Capacity Planner', 'VMware vCenter Converter', 'Cisco UCS'],
  },
  'VMware vCenter Converter': {
    partner: 'VMware', cat: 'Virtualization',
    tagline: 'Migrate physical servers to VMware VMs — live, with no downtime.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'VMware vCenter Converter enables physical-to-virtual (P2V) and virtual-to-virtual (V2V) migration — converting live Windows and Linux servers into VMware virtual machines without requiring downtime. Converter performs a hot clone of the running source system, enabling migration during business hours.',
      'STME uses vCenter Converter extensively in data center consolidation and server refresh programs. The ability to migrate running systems without downtime windows is particularly valuable for GCC clients with 24/7 operational requirements who cannot schedule maintenance windows for physical server decommissioning.',
    ],
    features: [
      'Hot P2V migration — no source server downtime required',
      'V2V migration between VMware and other hypervisors',
      'Concurrent migration of multiple servers',
      'Resizing of virtual disks during conversion',
      'Support for Windows and Linux source systems',
      'Network throttling for low-impact production migration',
    ],
    specs: [
      { label: 'Migration type', value: 'P2V, V2V (hot, no downtime)' },
      { label: 'Source OS', value: 'Windows 2008+, RHEL, CentOS, Ubuntu' },
      { label: 'Target', value: 'VMware vSphere (ESXi)' },
      { label: 'Concurrency', value: 'Multiple simultaneous jobs' },
    ],
    useCases: ['Server refresh without downtime', 'Data center consolidation', 'Hypervisor migration'],
    related: ['VMware ESXi', 'VMware Capacity Planner', 'Cisco UCS'],
  },
  'IoT Platform & Infrastructure': {
    partner: 'Multiple', cat: 'IoT Solutions',
    tagline: 'Enterprise IoT infrastructure — connecting edge devices to enterprise data platforms.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&q=80',
    overview: [
      'STME designs and deploys IoT infrastructure for GCC enterprises — connecting edge sensors, industrial gateways, and smart devices to centralized data platforms. Deployments span smart city infrastructure, utilities monitoring, industrial equipment telemetry, and building management systems.',
      'STME\'s IoT practice integrates hardware, connectivity, data ingestion, and platform layers into a complete solution. Edge gateways process and filter data locally before transmitting to central platforms, reducing bandwidth requirements and enabling real-time local response for time-critical applications.',
    ],
    features: [
      'IoT gateway deployment and management',
      'Edge computing for local data processing',
      'Connectivity management (4G, 5G, LoRaWAN, Wi-Fi)',
      'Data ingestion platform design and deployment',
      'Integration with enterprise data management platforms',
      'Device lifecycle management',
      'Security by design — device authentication and encryption',
    ],
    specs: [
      { label: 'Edge compute', value: 'Ruggedized industrial gateways' },
      { label: 'Connectivity', value: '5G, 4G LTE, LoRaWAN, Wi-Fi 6' },
      { label: 'Protocols', value: 'MQTT, OPC-UA, Modbus, AMQP' },
      { label: 'Platforms', value: 'Microsoft Azure IoT, AWS IoT, on-premise' },
    ],
    useCases: ['Smart city infrastructure', 'Industrial equipment monitoring', 'Building management systems'],
    related: ['IoT Connectivity & Edge Computing', 'Enterprise Networks', 'Cybersecurity'],
  },
  'IoT Connectivity & Edge Computing': {
    partner: 'Multiple', cat: 'IoT Solutions',
    tagline: '5G and edge computing for industrial and remote IoT deployments.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80',
    overview: [
      'STME provides ruggedized edge compute and 5G/LTE connectivity solutions for IoT deployments in industrial and remote environments. Edge computing brings processing power to the source of data — reducing latency for real-time decisions, minimizing data transfer costs, and enabling operations in locations with limited connectivity.',
      'For GCC energy operators with remote field sites, STME deploys industrial edge gateways with local compute, 5G connectivity, and OPC-UA integration for SCADA systems. Data is processed and filtered at the edge before selective transmission to central platforms.',
    ],
    features: [
      'Ruggedized industrial edge compute (DIN-rail, rack-mount)',
      '5G/LTE connectivity with failover to satellite',
      'OPC-UA for industrial equipment integration',
      'Local analytics and ML inference at the edge',
      'Zero-touch provisioning and remote management',
      'SD-WAN for multi-site connectivity management',
    ],
    specs: [
      { label: 'Compute', value: 'Industrial edge (fanless, -40 to +85°C)' },
      { label: 'Connectivity', value: '5G, LTE, Wi-Fi 6, satellite failover' },
      { label: 'Industrial protocols', value: 'OPC-UA, Modbus, PROFINET' },
      { label: 'Management', value: 'Cloud-based zero-touch provisioning' },
    ],
    useCases: ['Remote oil field monitoring', 'Industrial SCADA integration', 'Smart grid edge computing'],
    related: ['IoT Platform & Infrastructure', 'Enterprise Networks', 'SD-WAN'],
  },
  'Security Vision & Strategy': {
    partner: 'STME', cat: 'Security Solutions',
    tagline: 'Define your security posture — vision, strategy, and architecture aligned to your risk profile.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'STME security consultants work with CISOs, IT directors, and risk leadership to define a security vision and strategy aligned to business objectives and regulatory requirements. The engagement begins with an independent risk assessment against the applicable framework — SAMA cybersecurity framework, NCA ECC, CBUAE, or BMA — and produces a prioritized security roadmap.',
      'Security Vision & Strategy engagements are deliberately vendor-neutral. STME\'s recommendation is based on the client\'s risk profile and regulatory obligations — not the available margin on any product. The output is a document the client\'s team can own and present to their board or regulator.',
    ],
    features: [
      'Independent risk assessment against regulatory frameworks (SAMA, NCA, CBUAE)',
      'Security vision and strategy definition',
      'Security architecture design (zero trust, defense-in-depth)',
      'Prioritized security roadmap with cost estimates',
      'Gap analysis against current controls',
      'Board-level security reporting framework',
      'CISO advisory retainer options',
    ],
    specs: [
      { label: 'Frameworks', value: 'SAMA CSF, NCA ECC, CBUAE, BMA, ISO 27001' },
      { label: 'Duration', value: '4–12 weeks (scope dependent)' },
      { label: 'Output', value: 'Strategy document, roadmap, gap analysis' },
      { label: 'Delivery', value: 'Workshop + documentation' },
    ],
    useCases: ['Pre-regulation audit preparation', 'Post-incident security strategy', 'New CISO onboarding'],
    related: ['Security Services Offerings', 'Palo Alto Networks NGFW', 'IBM Security QRadar'],
  },
  'Security Services Offerings': {
    partner: 'STME', cat: 'Security Solutions',
    tagline: 'End-to-end security services — assessment, deployment, and managed operations.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'STME security services span the full lifecycle: independent assessment, architecture design, technology deployment, and ongoing managed security operations. With the highest security accreditation in the Middle East, STME delivers security programs that combine vendor-certified technology expertise with deep regional regulatory knowledge.',
      'Managed security services are operated from STME\'s regional operations center — with 24/7 SOC coverage, monthly security reporting, and direct escalation paths to vendor engineering. STME holds active certifications with Palo Alto Networks, Fortinet, IBM Security, and FireEye.',
    ],
    features: [
      'Security assessment and gap analysis',
      'Penetration testing and vulnerability management',
      'Security technology deployment (NGFW, SIEM, EDR, IAM)',
      'SOC design and implementation',
      'Managed SOC services (24/7)',
      'Incident response planning and retainer',
      'Regulatory compliance audit support',
    ],
    specs: [
      { label: 'Certifications', value: 'Palo Alto PCNSA/PCNSE, Fortinet NSE, IBM Security' },
      { label: 'SOC hours', value: '24/7 — regional operations center' },
      { label: 'SLA', value: 'Up to 15-minute response' },
      { label: 'Compliance', value: 'SAMA, NCA, CBUAE, ISO 27001' },
    ],
    useCases: ['Full security program delivery', 'Managed SOC for organisations without CISO', 'Regulatory audit support'],
    related: ['Security Vision & Strategy', 'Palo Alto Networks NGFW', 'FireEye Threat Intelligence'],
  },
  'Palo Alto Networks NGFW': {
    partner: 'Palo Alto Networks', cat: 'Security Solutions',
    tagline: 'Next-generation firewall with application awareness, threat prevention, and zero trust.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'Palo Alto Networks Next-Generation Firewalls deliver application-aware policy enforcement, threat prevention, URL filtering, and user-ID integration in a single platform. Unlike traditional firewalls that control traffic by port and protocol, PAN-OS inspects the actual application using App-ID technology — regardless of port or SSL encryption.',
      'STME deploys Palo Alto Networks NGFW for GCC financial institutions and government agencies, with Panorama centralized management enabling consistent policy across multi-site deployments. STME holds Palo Alto Networks certifications (PCNSA, PCNSE) and delivers both deployment and managed firewall services.',
    ],
    features: [
      'App-ID for application-aware policy enforcement',
      'Threat Prevention — IPS, anti-malware, anti-C2',
      'URL Filtering with PAN-DB cloud intelligence',
      'User-ID for identity-based access control',
      'SSL/TLS decryption and inspection',
      'Panorama for centralized multi-site management',
      'Cortex XDR integration for extended detection',
    ],
    specs: [
      { label: 'Platform', value: 'PA-Series hardware, VM-Series, CN-Series' },
      { label: 'Management', value: 'Panorama (centralized)' },
      { label: 'Throughput', value: 'PA-200 to PA-7000 series' },
      { label: 'Certifications', value: 'PCNSA, PCNSE (STME-certified)' },
    ],
    useCases: ['Data center perimeter security', 'Zero trust network segmentation', 'Encrypted traffic inspection'],
    related: ['Fortinet Security Fabric', 'IBM Security QRadar', 'Security Services Offerings'],
  },
  'Fortinet Security Fabric': {
    partner: 'Fortinet', cat: 'Security Solutions',
    tagline: 'Integrated security platform — firewall, endpoint, wireless, and SIEM in one fabric.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'The Fortinet Security Fabric integrates FortiGate next-generation firewalls with FortiAnalyzer (SIEM), FortiManager (centralized management), FortiClient (endpoint), FortiAP (wireless), and FortiSandbox (sandboxing) into a coordinated security platform. Shared threat intelligence across all components enables automated, coordinated threat response.',
      'STME deploys Fortinet Security Fabric as a cost-effective, integrated security platform for mid-market GCC enterprises that need enterprise-grade security capabilities without the complexity of a multi-vendor best-of-breed approach. STME holds Fortinet NSE certifications across the Fabric portfolio.',
    ],
    features: [
      'FortiGate NGFW — application control, IPS, SSL inspection',
      'FortiAnalyzer — SIEM with AI-driven threat analytics',
      'FortiManager — centralized policy management',
      'FortiClient — endpoint detection and response (EDR)',
      'FortiSandbox — zero-day threat detonation',
      'Automated threat response across Fabric components',
      'SD-WAN integration in FortiGate',
    ],
    specs: [
      { label: 'Core platform', value: 'FortiGate (NGFW + SD-WAN)' },
      { label: 'SIEM', value: 'FortiAnalyzer' },
      { label: 'Endpoint', value: 'FortiClient EMS' },
      { label: 'Certifications', value: 'NSE 4, NSE 7 (STME-certified)' },
    ],
    useCases: ['Integrated security for mid-market', 'Branch office security', 'SD-WAN with integrated security'],
    related: ['Palo Alto Networks NGFW', 'IBM Security QRadar', 'FireEye Threat Intelligence'],
  },
  'IBM Security QRadar': {
    partner: 'IBM', cat: 'Security Solutions',
    tagline: 'Enterprise SIEM with AI-powered threat detection and compliance reporting.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'IBM Security QRadar is the SIEM platform of choice for GCC enterprises requiring compliance-grade log management and advanced threat detection. QRadar normalizes and correlates security events from thousands of sources — network devices, servers, applications, cloud — and applies AI-powered analytics to detect threats that rule-based systems miss.',
      'STME deploys and manages QRadar for financial institutions and government agencies across the GCC, integrating with SAMA circular reporting requirements and NCA ECC compliance documentation. STME\'s managed SOC team operates QRadar as part of its 24/7 security operations service.',
    ],
    features: [
      'Log management and event correlation at scale',
      'AI-powered anomaly detection (QRadar Advisor with Watson)',
      'Network flow analysis for insider threat detection',
      'Compliance reporting (SAMA, NCA, PCI-DSS, ISO 27001)',
      'Integration with 700+ security products via DSM',
      'QRadar SOAR for automated incident response',
      'Cloud deployment options (SaaS, on-premise, hybrid)',
    ],
    specs: [
      { label: 'Events/second', value: 'Thousands to millions (scalable)' },
      { label: 'AI component', value: 'QRadar Advisor with Watson' },
      { label: 'Integration', value: '700+ DSMs (device support modules)' },
      { label: 'Compliance', value: 'SAMA, NCA, PCI-DSS, ISO 27001' },
    ],
    useCases: ['SOC operations center platform', 'SAMA compliance reporting', 'Insider threat detection'],
    related: ['Palo Alto Networks NGFW', 'Fortinet Security Fabric', 'FireEye Threat Intelligence'],
  },
  'FireEye Threat Intelligence': {
    partner: 'FireEye', cat: 'Security Solutions',
    tagline: 'Nation-state-grade threat intelligence and advanced threat detection.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
    overview: [
      'FireEye combines signature-based and behavior-based threat detection with Mandiant intelligence — the world\'s leading threat intelligence organization. The FireEye platform detects advanced persistent threats (APTs) and nation-state actors that evade traditional security controls, using virtual execution environments to detonate and analyze suspicious content.',
      'STME deploys FireEye for GCC clients operating in high-risk threat environments — critical national infrastructure, financial services, and government agencies that are targets for sophisticated threat actors. FireEye\'s Mandiant intelligence includes active threat actor tracking from incident response engagements worldwide.',
    ],
    features: [
      'Multi-vector threat detection (email, web, endpoint, network)',
      'Virtual execution environment (MVX) for zero-day detection',
      'Mandiant threat intelligence integration',
      'APT and nation-state actor detection',
      'FireEye Helix SIEM/SOAR platform',
      'Incident response retainer (Mandiant)',
      'Threat intelligence sharing and feeds',
    ],
    specs: [
      { label: 'Detection engine', value: 'MVX (multi-vector virtual execution)' },
      { label: 'Intelligence', value: 'Mandiant (real-world IR intelligence)' },
      { label: 'Coverage', value: 'Email, web, network, endpoint' },
      { label: 'Response', value: 'Mandiant IR retainer available' },
    ],
    useCases: ['Critical infrastructure protection', 'APT detection for financial services', 'Nation-state threat defense'],
    related: ['IBM Security QRadar', 'Palo Alto Networks NGFW', 'Security Services Offerings'],
  },
};

function ProductDetail({ product, onBack, onContact, onNavigate }) {
  const prod = product || { name: 'HDS Universal Replicator', cat: 'Data Availability', partner: 'Hitachi Vantara' };
  const d = PRODUCT_DETAILS[prod.name] || PRODUCT_DETAILS['HDS Universal Replicator'];
  const [activeSection, setActiveSection] = useState('Overview');
  const sections = ['Overview', 'Features', 'Specifications', 'Use cases'];

  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 420, background: '#0E0E10', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,14,16,0.2) 0%, rgba(14,14,16,0.85) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: '120px 32px 56px', width: '100%' }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 20, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} style={{ color: 'inherit', textDecoration: 'none' }}>Products &amp; Solutions</a>
            <span>/</span>
            <span>{d.cat}</span>
          </div>
          <div style={{ display: 'inline-block', background: 'var(--orange)', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', marginBottom: 16, fontFamily: 'var(--font-mono)' }}>{d.partner}</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: '#fff', maxWidth: '20ch', margin: '0 0 16px' }}>{prod.name}</h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: '52ch', lineHeight: 1.55 }}>{d.tagline}</p>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <div style={{ borderBottom: '1px solid var(--hairline)', position: 'sticky', top: 72, zIndex: 10, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px', display: 'flex', gap: 0 }}>
          {sections.map((sec) => (
            <button key={sec} onClick={() => { setActiveSection(sec); stmeScrollTo(stmeSlug(sec)); }} style={{
              background: 'none', border: 0, padding: '16px 24px', fontSize: 13, fontWeight: 600,
              cursor: 'pointer', color: activeSection === sec ? 'var(--ink)' : 'var(--mute)',
              borderBottom: `2px solid ${activeSection === sec ? 'var(--ink)' : 'transparent'}`,
              marginBottom: -1, fontFamily: 'var(--font-sans)',
            }}>{sec}</button>
          ))}
          <button className="btn btn--primary" onClick={onContact} style={{ marginLeft: 'auto', alignSelf: 'center', fontSize: 13, padding: '10px 20px' }}>
            Enquire <Icon name="arrow" size={13} />
          </button>
        </div>
      </div>

      {/* Body */}
      <section className="detail-body">
        <div className="detail-body__inner">
          {/* Sidebar */}
          <aside>
            <div className="eyebrow-row" style={{ marginBottom: 16 }}>Product info</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--hairline)' }}>
              {[
                { label: 'Partner', value: d.partner },
                { label: 'Category', value: d.cat },
              ].map((item) => (
                <div key={item.label} style={{ padding: '14px 16px', borderBottom: '1px solid var(--hairline)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 4, fontFamily: 'var(--font-mono)' }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{item.value}</div>
                </div>
              ))}
            </div>
            <button className="btn btn--primary" onClick={onContact} style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>
              Request a quote <Icon name="arrow" size={14} />
            </button>
            <button className="btn btn--secondary" onClick={onBack} style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
              ← All products
            </button>
          </aside>

          {/* Main content */}
          <div>
            <h2 id={stmeSlug('Overview')}>Overview</h2>
            {d.overview.map((para, i) => <p key={i}>{para}</p>)}

            <h2 id={stmeSlug('Features')} style={{ marginTop: 56 }}>Key features</h2>
            <ul className="bullets">
              {d.features.map((f) => <li key={f}>{f}</li>)}
            </ul>

            <h2 id={stmeSlug('Specifications')} style={{ marginTop: 56 }}>Specifications</h2>
            <div style={{ border: '1px solid var(--hairline)', marginTop: 8 }}>
              {d.specs.map((sp, i) => (
                <div key={sp.label} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 0, borderBottom: i < d.specs.length - 1 ? '1px solid var(--hairline)' : 'none' }}>
                  <div style={{ padding: '14px 20px', background: 'var(--soft)', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--mute)', fontFamily: 'var(--font-mono)', borderRight: '1px solid var(--hairline)' }}>{sp.label}</div>
                  <div style={{ padding: '14px 20px', fontSize: 14, fontWeight: 500 }}>{sp.value}</div>
                </div>
              ))}
            </div>

            <h2 id={stmeSlug('Use cases')} style={{ marginTop: 56 }}>Use cases</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {d.useCases.map((uc) => (
                <span key={uc} style={{ padding: '8px 16px', background: 'var(--soft)', border: '1px solid var(--hairline)', fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>{uc}</span>
              ))}
            </div>

            {/* Related products */}
            <h2 style={{ marginTop: 56 }}>Related products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--hairline)', borderRight: 'none', marginTop: 8 }}>
              {d.related.map((name) => {
                const rel = PRODUCT_DETAILS[name];
                return (
                  <div key={name} onClick={() => onNavigate && onNavigate('product', { name, cat: rel ? rel.cat : '', partner: rel ? rel.partner : '' })}
                    style={{ borderRight: '1px solid var(--hairline)', padding: '20px', cursor: 'pointer', transition: 'background var(--dur-base) var(--ease)' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--soft)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: 6, fontFamily: 'var(--font-mono)' }}>{rel ? rel.partner : ''}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ProductDetail = ProductDetail;
