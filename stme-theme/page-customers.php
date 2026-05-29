<?php get_header(); ?>

<section style="background:var(--ink-2);color:#fff;padding:120px 32px 72px;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80');background-size:cover;background-position:center;opacity:0.2"></div>
  <div style="max-width:var(--container);margin:0 auto;position:relative">
    <div class="eyebrow-row" style="color:rgba(255,255,255,0.5)">Our customers</div>
    <h1 style="font-size:clamp(40px,6vw,72px);font-weight:800;letter-spacing:-0.03em;line-height:0.98;color:#fff;margin:24px 0">400+ enterprise clients across the region.</h1>
    <p style="font-size:18px;color:rgba(255,255,255,0.7);max-width:52ch;line-height:1.55;margin-bottom:48px">STME serves the most demanding organisations in the Middle East — from central banks to national oil companies.</p>
    <div style="display:flex;gap:0;flex-wrap:wrap">
      <?php foreach ([['400+','Enterprise customers'],['8','Markets served'],['35+','Years of trust'],['4','Key sectors']] as $s): ?>
      <div style="padding:28px 40px 24px;border:1px solid rgba(255,255,255,0.15);margin-right:-1px;margin-bottom:-1px">
        <div style="font-size:40px;font-weight:800;letter-spacing:-0.02em;color:var(--orange);line-height:1"><?php echo $s[0]; ?></div>
        <div style="font-size:12px;color:rgba(255,255,255,0.55);letter-spacing:0.08em;text-transform:uppercase;font-family:var(--font-mono);margin-top:6px"><?php echo $s[1]; ?></div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <?php
    $sectors = [
      'Banking & Finance' => ['SAMA','NCB','Al Rajhi Bank','Riyad Bank','ANB','Banque Saudi Fransi','Emirates NBD','ADCB','FAB','Mashreq','NBB','KFH','NBE','Bank AlJazira'],
      'Government'        => ['MOI KSA','MOF KSA','GACA','GOSI','DEWA','MOI UAE','Bahrain GOV','Saudi Post','Abu Dhabi Gov','ECIDSSC'],
      'Oil & Gas'         => ['Saudi Aramco','SABIC','SEC','ADNOC','TAQA','Kuwait Oil Co.','Bapco','EGPC','Sonatrach'],
      'Telecom & Others'  => ['STC','Mobily','Zain KSA','du Telecom','Etisalat','Ooredoo','Gulf Air','Saudi Airlines','KFSH','KAUST'],
    ];
    $colors = ['Banking & Finance'=>'#3FA8E0','Government'=>'#1F8A5B','Oil & Gas'=>'#F26B1F','Telecom & Others'=>'#6B6B70'];
    foreach ($sectors as $sector => $clients):
    ?>
    <div style="margin-bottom:64px">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid var(--hairline)">
        <div style="width:20px;height:3px;background:<?php echo $colors[$sector]; ?>"></div>
        <h2 style="font-size:20px;font-weight:700;letter-spacing:-0.01em;margin:0"><?php echo esc_html($sector); ?></h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid var(--hairline);border-left:1px solid var(--hairline)">
        <?php foreach ($clients as $c): ?>
        <div style="border-right:1px solid var(--hairline);border-bottom:1px solid var(--hairline);aspect-ratio:2/1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:16px;cursor:default" title="<?php echo esc_attr($c); ?>">
          <div style="font-size:16px;font-weight:800;letter-spacing:-0.02em;text-align:center"><?php echo esc_html($c); ?></div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</section>

<section class="section section--soft">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Why they trust STME</div><h2>Dedicated to serving you, end to end.</h2></div>
      <div>
        <p style="margin-bottom:20px">STME has been the infrastructure partner of choice for the region's most critical organisations since 1982 — because of one thing: we do what we say we will do.</p>
        <button class="btn btn--primary stme-contact-trigger">Become a customer →</button>
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

<?php get_footer(); ?>
