<?php get_header(); ?>

<!-- HERO -->
<section class="hero">
  <div class="hero__img" style="background-image:url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2200&q=80')"></div>
  <div class="hero__scrim"></div>
  <div class="hero__inner">
    <div class="eyebrow-row" style="color:rgba(255,255,255,0.7)">One Smart Solution</div>
    <h1>Leading the Future of Technology in the <em>Middle East.</em></h1>
    <p class="hero__sub">For over 40 years, we have been the leader in enterprise systems integration — connecting the latest global technologies to build smart solutions that make a difference.</p>
    <div class="hero__cta">
      <button class="btn btn--invert stme-contact-trigger">Talk to sales →</button>
      <a class="btn btn--secondary" href="<?php echo esc_url(home_url('/services')); ?>" style="border-color:rgba(255,255,255,0.3);color:#fff;">View services</a>
    </div>
  </div>
  <div class="hero__meta">
    <span>Since 1982 · KSA · UAE · BH · EG · KW · JO · PK · UK</span>
    <span>Scroll ↓</span>
  </div>
</section>

<!-- SERVICES -->
<section class="section" id="services">
  <div class="section__inner">
    <div class="section__head">
      <div>
        <div class="eyebrow-row">Services</div>
        <h2>What we build, run, and protect.</h2>
      </div>
      <p>Assessment, consulting, deployment, management, and support across data management, security, and cloud.</p>
    </div>
    <div class="services" style="grid-template-columns:repeat(3,1fr)">
      <?php
      $services = [
        ['01','Cloud',    'cloud',    'Cloud Infrastructure',               'Design and publish secure, flexible, and scalable cloud environments.',           ['Private Cloud','Hybrid Cloud']],
        ['02','Security', 'shield',   'Cybersecurity',                      'Comprehensive solutions to protect your organization from cyber threats.',        ['IAM','SIEM','Firewall']],
        ['03','Storage',  'database', 'Storage Solutions',                  'Enterprise storage with high performance, scalability, and reliability.',          ['Cloud Storage','NAS','SAN']],
        ['04','AI & Data','ai',       'Artificial Intelligence & Data',     'Advanced data analytics and AI for smarter decisions.',                            ['Analytics','Big Data','AI/ML']],
        ['05','Backup',   'hdd',      'Backup & Disaster Recovery',         'Comprehensive strategies to protect data and ensure business continuity.',         ['BaaS','BCP','DR']],
        ['06','Networks', 'network',  'Enterprise Networks',                'Advanced SD-WAN and network solutions for secure, reliable connectivity.',         ['5G','LAN/WAN','SD-WAN']],
      ];
      $icons = [
        'cloud'    => '<path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6 18h11z"/>',
        'shield'   => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
        'database' => '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
        'ai'       => '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
        'hdd'      => '<rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none"/><path d="M6 12h6"/>',
        'network'  => '<rect x="9" y="2" width="6" height="4" rx="1"/><rect x="2" y="17" width="6" height="4" rx="1"/><rect x="16" y="17" width="6" height="4" rx="1"/><path d="M12 6v4M12 10H7v7M12 10h5v7"/>',
      ];
      foreach ($services as $s):
        $url = esc_url(home_url('/service-detail?cat='.urlencode($s[1])));
      ?>
      <a href="<?php echo $url; ?>" class="service" style="text-decoration:none">
        <div class="service__num"><span><?php echo $s[0]; ?> / <?php echo esc_html($s[1]); ?></span><span class="arrow">↗</span></div>
        <div class="service__icon">
          <svg class="icon" width="32" height="32" viewBox="0 0 24 24"><?php echo $icons[$s[2]]; ?></svg>
        </div>
        <h3><?php echo esc_html($s[3]); ?></h3>
        <p><?php echo esc_html($s[4]); ?></p>
        <div class="service__tags"><?php foreach($s[5] as $t) echo '<span>'.esc_html($t).'</span>'; ?></div>
      </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- STATS -->
<section class="section section--soft">
  <div class="section__inner">
    <div class="stats">
      <div class="stat"><div class="stat__num">35+</div><div class="stat__label">Years delivering enterprise IT</div></div>
      <div class="stat"><div class="stat__num">400+</div><div class="stat__label">Enterprise customers served</div></div>
      <div class="stat"><div class="stat__num">120+</div><div class="stat__label">Qualified staff across 8 markets</div></div>
      <div class="stat"><div class="stat__num"><em>24/7</em></div><div class="stat__label">Regional support coverage</div></div>
    </div>
  </div>
</section>

<!-- PARTNERS -->
<section class="section">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Partners</div><h2>Built on the platforms enterprises already trust.</h2></div>
      <p>Long-standing alliances with the world-leading storage, security, and platform vendors.</p>
    </div>
    <div class="partners" style="grid-template-columns:repeat(10,1fr)">
      <?php
      $partners = ['Hitachi','NetApp','Veritas','Cisco','VMware','Quantum','Spectra Logic','Palo Alto','Fortinet','Veeam'];
      foreach ($partners as $p) echo '<div class="partner">'.esc_html($p).'</div>';
      ?>
    </div>
  </div>
</section>

<!-- INSIGHTS -->
<section class="section section--soft">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Notes &amp; updates</div><h2>From the field.</h2></div>
      <p>Briefs, customer stories, and field notes from the team.</p>
    </div>
    <div class="insights">
      <?php
      $insights_query = new WP_Query(['post_type'=>'stme_insight','posts_per_page'=>3]);
      if ($insights_query->have_posts()):
        while ($insights_query->have_posts()): $insights_query->the_post();
          $type = get_post_meta(get_the_ID(),'_insight_type',true) ?: 'Note';
      ?>
      <article class="insight">
        <div class="insight__date">
          <strong><?php echo get_the_date('d'); ?></strong>
          <span><?php echo get_the_date('M Y'); ?></span>
          <span style="margin-left:auto"><?php echo esc_html($type); ?></span>
        </div>
        <h3><?php the_title(); ?></h3>
        <p><?php echo wp_trim_words(get_the_excerpt(),20); ?></p>
        <a href="<?php the_permalink(); ?>" class="insight__more uline">Read more →</a>
      </article>
      <?php endwhile; wp_reset_postdata();
      else:
        // Fallback static items
        $static = [
          ['04','Nov 2018','News','STME concludes successful participation in GITEX Technology Week 2018.','STME showcased the latest enterprise storage, security and cloud solutions at GITEX 2018 in Dubai.'],
          ['24','Jun 2018','Product launch','STME launches next-generation cloud solution for GDPR compliance.','STME launched a cloud solution to support enterprises\' data exchange and GDPR compliance needs.'],
          ['15','Jun 2018','Award','STME wins 4 prestigious accolades to reinforce market leadership.','Four industry accolades recognizing leadership in enterprise IT integration across the region.'],
        ];
        foreach ($static as $it):
      ?>
      <article class="insight">
        <div class="insight__date">
          <strong><?php echo $it[0]; ?></strong>
          <span><?php echo $it[1]; ?></span>
          <span style="margin-left:auto"><?php echo $it[2]; ?></span>
        </div>
        <h3><?php echo esc_html($it[3]); ?></h3>
        <p><?php echo esc_html($it[4]); ?></p>
        <a href="<?php echo esc_url(home_url('/insights')); ?>" class="insight__more uline">Read more →</a>
      </article>
      <?php endforeach; endif; ?>
    </div>
  </div>
</section>

<!-- OFFICES -->
<section class="section">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Where we are</div><h2>Eight markets. One operating model.</h2></div>
      <p>Local teams, regional engineering, and a single delivery model from Riyadh to London.</p>
    </div>
    <div class="region-tabs" id="region-tabs">
      <?php
      $regions = ['Saudi Arabia','United Arab Emirates','Bahrain','Egypt','Kuwait','Jordan','Pakistan','United Kingdom'];
      foreach ($regions as $i => $r):
      ?>
      <button class="region-tab<?php echo $i===0?' is-active':''; ?>" data-region="<?php echo esc_attr($r); ?>"><?php echo esc_html($r); ?></button>
      <?php endforeach; ?>
    </div>
    <div class="region-offices" id="region-offices">
      <!-- Filled by JS -->
    </div>
  </div>
</section>

<?php get_footer(); ?>
