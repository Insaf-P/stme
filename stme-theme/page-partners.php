<?php get_header(); ?>

<section class="page-hero page-hero--split">
  <div class="page-hero__inner">
    <div class="page-hero__text">
      <div class="eyebrow-row">Partners</div>
      <h1>Built on the platforms<br>enterprises already trust.</h1>
      <p class="page-hero__sub">Long-standing alliances with world-leading storage, security, networking and cloud vendors across the Middle East.</p>
    </div>
    <div class="page-hero__side-img" style="background-image:url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80')"></div>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Core alliance partners</div><h2>Primary technology stack.</h2></div>
      <p>STME holds the highest accreditations in the Middle East in data management and data security across these core technology partnerships.</p>
    </div>
    <div class="partner-grid-full">
      <?php
      $partners = [
        ['Hitachi',       'Primary storage',         'STME is a long-standing Hitachi Vantara partner for the GCC. We deploy the VSP family across enterprise storage estates with certified support across all eight STME markets.',             ['VSP One','VSP 5000','HNAS']],
        ['NetApp',        'Data management',          'NetApp AFF and FAS arrays form the primary storage layer for STME\'s banking and government clients. ONTAP\'s capabilities underpin hybrid cloud migration programs.',                       ['AFF A-Series','FAS','ONTAP','StorageGRID']],
        ['Veritas',       'Data protection',          'Veritas NetBackup is STME\'s primary data protection platform, delivering backup, recovery, and compliance-grade archive across heterogeneous environments.',                               ['NetBackup','Backup Exec','Enterprise Vault']],
        ['Cisco',         'Network & compute',        'Cisco networking and UCS compute underpin STME\'s hybrid cloud and security practices. STME is a Cisco Certified Partner with deployments of Catalyst, Nexus, and UCS X-Series.',           ['Catalyst','Nexus','UCS X-Series','Firepower']],
        ['VMware',        'Virtualization & cloud',   'VMware vSphere, NSX, and vSAN form the virtualization layer across STME\'s private cloud deployments. STME holds VMware Solution Provider status.',                                          ['vSphere','NSX','vSAN','Aria']],
        ['Quantum',       'Scale-out & archive',      'Quantum Scalar tape libraries and StorNext scale-out storage serve STME\'s energy and media clients requiring high-capacity, long-term archive.',                                            ['Scalar','StorNext','DXi','ActiveScale']],
        ['Spectra Logic', 'Deep archive',             'Spectra Logic tape automation platforms deliver petabyte-scale long-term archive for government, energy, and broadcast clients with AES-256 encryption and WORM compliance.',               ['TFinity','T950','BlackPearl']],
        ['Tandberg',      'Tape drives & autoloaders','Tandberg tape drives and autoloaders complement STME\'s data management stack for mid-market clients offering cost-effective secondary storage and offline backup.',                         ['LTO-9','NEOxl','RDX']],
      ];
      foreach ($partners as $p):
      ?>
      <div class="partner-card">
        <div class="partner-card__logo"><?php echo esc_html($p[0]); ?></div>
        <div class="partner-card__role"><?php echo esc_html($p[1]); ?></div>
        <p><?php echo esc_html($p[2]); ?></p>
        <div class="partner-card__tags"><?php foreach($p[3] as $t) echo '<span>'.esc_html($t).'</span>'; ?></div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="section__inner">
    <div class="cta-banner">
      <div>
        <div class="eyebrow-row" style="color:rgba(255,255,255,0.45)">New to the region</div>
        <h2>Looking for a delivery partner?</h2>
      </div>
      <div class="cta-banner__actions">
        <button class="btn btn--invert stme-contact-trigger">Contact us →</button>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
