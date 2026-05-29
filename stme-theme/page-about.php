<?php get_header(); ?>

<section class="page-hero page-hero--split">
  <div class="page-hero__inner">
    <div class="page-hero__text">
      <div class="eyebrow-row">About STME</div>
      <h1>Heritage of commitment<br>and delivery.</h1>
      <p class="page-hero__sub">Storage Technology Middle East — a regional system integrator founded in 1982, headquartered in Riyadh. One Smart Solution across eight markets.</p>
    </div>
    <div class="page-hero__side-img" style="background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80')"></div>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Our purpose</div><h2>Vision &amp; mission.</h2></div>
      <div>
        <p style="margin-bottom:24px"><strong style="display:block;margin-bottom:8px;color:var(--ink)">Vision</strong>To be one of the IT system integration leaders by pioneering the deployment of the latest innovative technologies that help our clients to smoothly address their most complex business challenges.</p>
        <p><strong style="display:block;margin-bottom:8px;color:var(--ink)">Mission</strong>To use our extensive IT consulting experience to deliver tangible business results, enabling our clients to profit from the advanced use of the technology.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Project management office</div><h2>The right everything.</h2></div>
      <p>Four principles that describe every STME engagement — from the first assessment call to the last support ticket closed.</p>
    </div>
    <div class="pillars">
      <?php
      $pillars = [
        ['01','The right hands',       'Excellent highly skilled team with long experience in IT integration and highest industry standard certificates. 60+ certified experts with 15–20 years average experience.'],
        ['02','The right approach',    'Extracted from decades of IT integration lessons learned. An independent assessment before any recommendation — STME carries no quota for any single vendor.'],
        ['03','The right tools',       'Utilizing best tools according to Gartner IT Project Management Services, and partnering with world-leading manufacturers — Hitachi, NetApp, Veritas, Cisco, VMware, and more.'],
        ['04','The right environment', 'Ideally aligned organizational processes to support trouble-free project execution. 24/7 enterprise-class support center with up to 15-minute SLA response.'],
      ];
      foreach ($pillars as $p):
      ?>
      <div class="pillar">
        <div class="pillar__num"><?php echo $p[0]; ?></div>
        <h3><?php echo esc_html($p[1]); ?></h3>
        <p><?php echo esc_html($p[2]); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Why STME</div><h2>Since 1982.</h2></div>
      <div style="font-size:17px;line-height:1.7;color:var(--mute)">
        <p style="margin-bottom:16px">STME is a 35+ year old regional system integrator, IT solutions and services provider. Founded in 1982, with head office based in Riyadh, STME operates across KSA, the Gulf, Egypt and the Levant.</p>
        <p style="margin-bottom:16px">Specialized in Information Management, Information Security and Cloud &amp; Virtual Computing — STME is focused on providing high quality 24/7 support services with up to 15-minute SLA. The first IT company ISO Certified in the region in 2000 (ISO 9001:2000).</p>
        <p>Today, 120+ qualified staff deliver services to 400+ enterprise customers across the Middle East.</p>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><div class="stat__num">35+</div><div class="stat__label">Years delivering enterprise IT</div></div>
      <div class="stat"><div class="stat__num">400+</div><div class="stat__label">Enterprise customers served</div></div>
      <div class="stat"><div class="stat__num">120+</div><div class="stat__label">Qualified staff across 8 markets</div></div>
      <div class="stat"><div class="stat__num"><em>24/7</em></div><div class="stat__label">Regional support coverage</div></div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="section__inner">
    <div class="cta-banner">
      <div>
        <div class="eyebrow-row" style="color:rgba(255,255,255,0.45)">Work with us</div>
        <h2>Dedicated to serving you, end to end.</h2>
      </div>
      <div class="cta-banner__actions">
        <button class="btn btn--invert stme-contact-trigger">Talk to a specialist →</button>
        <a class="btn btn--secondary" href="<?php echo esc_url(home_url('/services')); ?>" style="border-color:rgba(255,255,255,0.3);color:#fff">View services</a>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
