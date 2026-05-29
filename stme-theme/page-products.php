<?php get_header(); ?>

<section class="page-hero">
  <div class="page-hero__inner">
    <div class="eyebrow-row">Products &amp; Solutions</div>
    <h1>The right tools<br>for every challenge.</h1>
    <p class="page-hero__sub">Best-in-class products from the world's leading technology vendors — deployed and supported by STME across the Middle East since 1982.</p>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <?php
    $categories = [
      ['Data Availability', 'database', 'Replication and mirroring solutions for continuous data availability.', [
        ['Hitachi', 'HDS Universal Replicator', 'Asynchronous remote replication for HDS VSP arrays — journal-based consistency groups for DR across long distances.'],
        ['NetApp',  'NetApp SnapMirror',         'Policy-based replication for ONTAP environments, supporting block, file, and object data.'],
        ['Hitachi', 'HDS TruCopy',               'Synchronous remote replication for HDS VSP — zero-data-loss protection for tier-one applications requiring RPO=0.'],
      ]],
      ['Data Management', 'database', 'Storage management, tiering, and optimization platforms.', [
        ['Hitachi', 'HDS Dynamic Provisioning',     'Thin provisioning for HDS VSP arrays — maximize utilization, eliminate waste.'],
        ['Hitachi', 'HDS Tiered Storage Manager',   'Automated data tiering across SSD, SAS, and SATA without application downtime.'],
        ['Quantum', 'Quantum StorNext',              'High-performance shared storage for media, energy, and research workloads.'],
        ['Veritas', 'Veritas Storage Foundation HA/DR','Enterprise storage and HA management for heterogeneous environments.'],
      ]],
      ['Data Protection & Recovery', 'hdd', 'Backup, recovery, and tape solutions for enterprise data protection.', [
        ['Veritas',  'Veritas NetBackup',        'Enterprise backup and recovery platform — the industry standard for GCC financial and government environments.'],
        ['Veeam',    'Veeam Backup',             'Modern data protection for virtual, physical, and cloud workloads with fast recovery.'],
        ['Commvault','Commvault',                'Unified data protection and management across on-premise and cloud environments.'],
        ['Quantum',  'Quantum DXi Series',       'Disk-based backup with inline deduplication and WAN-efficient replication.'],
        ['Quantum',  'Quantum Tape Libraries',   'Scalar tape automation for enterprise archive and air-gapped ransomware protection.'],
        ['Spectra',  'Spectra Logic Libraries',  'Petabyte-scale deep archive with BlackPearl object storage integration.'],
        ['Tandberg', 'Tandberg Tape Libraries',  'Cost-effective LTO tape automation for mid-market archive and backup.'],
      ]],
      ['Virtualization', 'cloud', 'Virtualization platforms and management tools.', [
        ['Hitachi', 'HDS Universal Volume Manager', 'Virtualize third-party storage behind HDS VSP for simplified management.'],
        ['VMware',  'VMware ESXi',                  'Enterprise bare-metal hypervisor — the foundation of VMware vSphere.'],
        ['VMware',  'VMware vCenter Converter',     'Migrate physical servers to VMware VMs live, with no downtime.'],
        ['VMware',  'VMware Capacity Planner',      'Pre-virtualization assessment — right-size your vSphere deployment before you buy.'],
      ]],
      ['Security Solutions', 'shield', 'Comprehensive security portfolio spanning strategy, architecture, and technology.', [
        ['Palo Alto', 'Palo Alto Networks NGFW',   'Next-generation firewall with application awareness, threat prevention, and zero trust.'],
        ['Fortinet',  'Fortinet Security Fabric',  'Integrated security platform — firewall, endpoint, wireless, and SIEM in one fabric.'],
        ['IBM',       'IBM Security QRadar',       'Enterprise SIEM with AI-powered threat detection and compliance reporting.'],
        ['FireEye',   'FireEye Threat Intelligence','Nation-state-grade threat intelligence and advanced threat detection.'],
      ]],
    ];
    $icons_svg = [
      'database' => '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
      'hdd'      => '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 12h6"/>',
      'cloud'    => '<path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6 18h11z"/>',
      'shield'   => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    ];
    foreach ($categories as $cat):
    ?>
    <div style="margin-bottom:80px">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;padding-bottom:20px;border-bottom:1px solid var(--hairline)">
        <div style="color:var(--orange)">
          <svg class="icon" width="24" height="24" viewBox="0 0 24 24"><?php echo $icons_svg[$cat[1]]; ?></svg>
        </div>
        <div>
          <h2 style="font-size:24px;font-weight:700;letter-spacing:-0.02em;margin:0;line-height:1.1"><?php echo esc_html($cat[0]); ?></h2>
          <p style="font-size:14px;color:var(--mute);margin:6px 0 0;line-height:1.5"><?php echo esc_html($cat[2]); ?></p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);border-left:1px solid var(--hairline)">
        <?php foreach ($cat[3] as $prod): ?>
        <div style="border-right:1px solid var(--hairline);border-bottom:1px solid var(--hairline);padding:28px;display:flex;flex-direction:column;gap:10px">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--orange);font-family:var(--font-mono)"><?php echo esc_html($prod[0]); ?></div>
          <h3 style="font-size:16px;font-weight:600;letter-spacing:-0.01em;line-height:1.2;margin:0"><?php echo esc_html($prod[1]); ?></h3>
          <p style="font-size:14px;color:var(--mute);line-height:1.6;margin:0;flex:1"><?php echo esc_html($prod[2]); ?></p>
          <button class="btn btn--secondary stme-contact-trigger" style="font-size:12px;padding:8px 14px;margin-top:8px;align-self:flex-start">Enquire →</button>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</section>

<section class="section section--dark">
  <div class="section__inner">
    <div class="cta-banner">
      <div>
        <div class="eyebrow-row" style="color:rgba(255,255,255,0.45)">Ready to deploy</div>
        <h2>Need a product scoped for your environment?</h2>
      </div>
      <div class="cta-banner__actions">
        <button class="btn btn--invert stme-contact-trigger">Talk to a specialist →</button>
        <a class="btn btn--secondary" href="<?php echo esc_url(home_url('/partners')); ?>" style="border-color:rgba(255,255,255,0.3);color:#fff">View all partners</a>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
