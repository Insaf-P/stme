<?php get_header(); ?>

<section class="page-hero page-hero--split">
  <div class="page-hero__inner">
    <div class="page-hero__text">
      <div class="eyebrow-row">Services</div>
      <h1>What we build,<br>run, and protect.</h1>
      <p class="page-hero__sub">Assessment, consulting, deployment, management, and support across data management, security, and cloud — for the work that has to keep running.</p>
    </div>
    <div class="page-hero__side-img" style="background-image:url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80')"></div>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <div class="services" style="grid-template-columns:repeat(3,1fr)">
      <?php
      $services = [
        ['01','Cloud',    'cloud',    'Cloud Infrastructure',           'Design and publish secure, flexible, and scalable cloud environments.',          ['Private Cloud','Hybrid Cloud']],
        ['02','Security', 'shield',   'Cybersecurity',                  'Comprehensive solutions to protect your organization from cyber threats.',       ['IAM','SIEM','Firewall']],
        ['03','Storage',  'database', 'Storage Solutions',              'Enterprise storage with high performance, scalability, and reliability.',         ['Cloud Storage','NAS','SAN']],
        ['04','AI & Data','ai',       'AI & Data',                     'Advanced data analytics and AI for smarter decisions.',                           ['Analytics','Big Data','AI/ML']],
        ['05','Backup',   'hdd',      'Backup & Disaster Recovery',    'Comprehensive strategies to protect data and ensure business continuity.',        ['BaaS','BCP','DR']],
        ['06','Networks', 'network',  'Enterprise Networks',            'Advanced SD-WAN and network solutions for secure, reliable connectivity.',        ['5G','LAN/WAN','SD-WAN']],
      ];
      $icons = [
        'cloud'    => '<path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6 18h11z"/>',
        'shield'   => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
        'database' => '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
        'ai'       => '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
        'hdd'      => '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 12h6"/>',
        'network'  => '<rect x="9" y="2" width="6" height="4" rx="1"/><rect x="2" y="17" width="6" height="4" rx="1"/><rect x="16" y="17" width="6" height="4" rx="1"/><path d="M12 6v4M12 10H7v7M12 10h5v7"/>',
      ];
      foreach ($services as $s):
        $url = esc_url(home_url('/service-detail?cat='.urlencode($s[1])));
      ?>
      <a href="<?php echo $url; ?>" class="service" style="text-decoration:none">
        <div class="service__num"><span><?php echo $s[0]; ?> / <?php echo esc_html($s[1]); ?></span><span class="arrow">↗</span></div>
        <div class="service__icon"><svg class="icon" width="32" height="32" viewBox="0 0 24 24"><?php echo $icons[$s[2]]; ?></svg></div>
        <h3><?php echo esc_html($s[3]); ?></h3>
        <p><?php echo esc_html($s[4]); ?></p>
        <div class="service__tags"><?php foreach($s[5] as $t) echo '<span>'.esc_html($t).'</span>'; ?></div>
      </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">How we work</div><h2>Assessment to managed operations.</h2></div>
      <p>Every STME engagement follows the same four-stage model across all service areas.</p>
    </div>
    <div class="process-grid">
      <?php
      $steps = [
        ['01','Assess', 'An independent audit of your existing environment — infrastructure inventory, gap analysis, and objective mapping.'],
        ['02','Design', 'Architecture documentation and vendor selection. A design your team can challenge, own, and take to procurement.'],
        ['03','Deploy', 'Phased delivery by STME-certified engineers, with zero-downtime cut-over windows and knowledge transfer.'],
        ['04','Run',    '24/7 NOC operations, monthly performance reporting, and an annual technology health review.'],
      ];
      foreach ($steps as $step):
      ?>
      <div class="process-step">
        <div class="process-step__num"><?php echo $step[0]; ?></div>
        <h3><?php echo esc_html($step[1]); ?></h3>
        <p><?php echo esc_html($step[2]); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="section__inner">
    <div class="cta-banner">
      <div>
        <div class="eyebrow-row" style="color:rgba(255,255,255,0.45)">Get started</div>
        <h2>Dedicated to serving you, end to end.</h2>
      </div>
      <div class="cta-banner__actions">
        <button class="btn btn--invert stme-contact-trigger">Talk to a specialist →</button>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
