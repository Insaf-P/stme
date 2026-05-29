<?php get_header(); ?>

<section class="page-hero page-hero--split">
  <div class="page-hero__inner">
    <div class="page-hero__text">
      <div class="eyebrow-row">Careers</div>
      <h1>Build the region's<br>critical infrastructure.</h1>
      <p class="page-hero__sub">Join 120+ engineers and specialists delivering enterprise IT across eight markets. STME has been the Right Hands for the region's most demanding clients since 1982.</p>
    </div>
    <div class="page-hero__side-img" style="background-image:url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1400&q=80')"></div>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Why STME</div><h2>The right environment to grow.</h2></div>
      <p>STME combines the depth of a specialist with the reach of a regional integrator — 35 years of enterprise delivery across eight markets.</p>
    </div>
    <div class="pillars">
      <?php
      $reasons = [
        ['01','Regional scale, local roots',  'Work across eight markets — KSA, UAE, Bahrain, Egypt, Kuwait, Jordan, Pakistan, and the UK — while staying close to the communities and clients you serve.'],
        ['02','Vendor-certified expertise',   '60+ certified experts hold the highest accreditations in the Middle East in data management and security. STME invests in continuous certification across all major technology platforms.'],
        ['03','Enterprise clients',           'Deliver projects for the region\'s largest banks, government agencies, and energy operators. The infrastructure you build and run keeps critical systems operational.'],
        ['04','35+ years of stability',       'Founded in 1982, STME has operated through multiple technology cycles. A stable, growing company with long-term client relationships and a track record that speaks for itself.'],
      ];
      foreach ($reasons as $r):
      ?>
      <div class="pillar">
        <div class="pillar__num"><?php echo $r[0]; ?></div>
        <h3><?php echo esc_html($r[1]); ?></h3>
        <p><?php echo esc_html($r[2]); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Open positions</div><h2>Current opportunities.</h2></div>
      <p>STME is continuously growing its engineering, project management, and sales teams across the region.</p>
    </div>
    <div style="border-top:1px solid var(--hairline)">
      <?php
      // WP Jobs custom post type
      $jobs = new WP_Query(['post_type'=>'stme_job','posts_per_page'=>20,'orderby'=>'date','order'=>'DESC']);
      if ($jobs->have_posts()):
        while ($jobs->have_posts()): $jobs->the_post();
          $dept     = get_post_meta(get_the_ID(),'_job_dept',true) ?: 'Engineering';
          $location = get_post_meta(get_the_ID(),'_job_location',true) ?: 'Riyadh, KSA';
      ?>
      <div style="display:grid;grid-template-columns:1fr 2fr 1fr;gap:32px;align-items:center;padding:28px 0;border-bottom:1px solid var(--hairline)">
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--orange);margin-bottom:6px;font-family:var(--font-mono)"><?php echo esc_html($dept); ?></div>
          <h3 style="font-size:18px;font-weight:600;letter-spacing:-0.01em;line-height:1.2;margin:0"><?php the_title(); ?></h3>
        </div>
        <p style="font-size:14px;color:var(--mute);line-height:1.6;margin:0"><?php echo wp_trim_words(get_the_excerpt(),20); ?></p>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
          <span style="font-size:13px;color:var(--mute);font-family:var(--font-mono)"><?php echo esc_html($location); ?></span>
          <a href="<?php the_permalink(); ?>" class="btn btn--secondary" style="font-size:13px;padding:8px 16px">
            View role →
          </a>
        </div>
      </div>
      <?php endwhile; wp_reset_postdata();
      else:
        $static_jobs = [
          ['Engineering','Senior Storage Engineer','Riyadh, KSA','Design and deploy enterprise storage environments across Hitachi and NetApp platforms for banking and government clients.'],
          ['Engineering','Security Solutions Architect','Dubai, UAE','Lead security architecture engagements across network, endpoint, and identity layers aligned to SAMA and NCA frameworks.'],
          ['Engineering','Cloud & Virtualization Engineer','Riyadh, KSA','Deploy and manage VMware vSphere, Cisco UCS, and private cloud environments for enterprise clients.'],
          ['Services','Managed Services NOC Engineer','Jeddah, KSA','Operate 24/7 NOC services for managed storage and infrastructure clients.'],
          ['Project Management','IT Project Manager (PMO)','Riyadh, KSA','Lead infrastructure deployment projects applying the STME PMO methodology.'],
          ['Sales','Account Manager — Enterprise','Dubai, UAE','Manage and grow enterprise accounts across the UAE.'],
        ];
        foreach ($static_jobs as $j):
      ?>
      <div style="display:grid;grid-template-columns:1fr 2fr 1fr;gap:32px;align-items:center;padding:28px 0;border-bottom:1px solid var(--hairline)">
        <div>
          <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--orange);margin-bottom:6px;font-family:var(--font-mono)"><?php echo esc_html($j[0]); ?></div>
          <h3 style="font-size:18px;font-weight:600;letter-spacing:-0.01em;line-height:1.2;margin:0"><?php echo esc_html($j[1]); ?></h3>
        </div>
        <p style="font-size:14px;color:var(--mute);line-height:1.6;margin:0"><?php echo esc_html($j[3]); ?></p>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
          <span style="font-size:13px;color:var(--mute);font-family:var(--font-mono)"><?php echo esc_html($j[2]); ?></span>
          <button class="btn btn--secondary stme-contact-trigger" style="font-size:13px;padding:8px 16px">Apply →</button>
        </div>
      </div>
      <?php endforeach; endif; ?>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="section__inner">
    <div class="cta-banner">
      <div>
        <div class="eyebrow-row" style="color:rgba(255,255,255,0.45)">Don't see your role?</div>
        <h2>Send us your CV directly.</h2>
      </div>
      <div class="cta-banner__actions">
        <button class="btn btn--invert stme-contact-trigger">Get in touch →</button>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
