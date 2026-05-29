<?php get_header(); ?>

<main>
<?php if (have_posts()): while (have_posts()): the_post(); ?>
<?php endwhile; endif; ?>
</main>

<!-- Awards -->
<section style="background:#0E0E10;color:#fff;padding:140px 32px 100px;position:relative;overflow:hidden">
  <div style="position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1800&q=80');background-size:cover;background-position:center;opacity:0.08"></div>
  <div style="max-width:var(--container);margin:0 auto;position:relative;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:end">
    <div>
      <div class="eyebrow-row" style="color:rgba(255,255,255,0.4)">Recognition</div>
      <h1 style="font-size:clamp(48px,7vw,88px);font-weight:800;letter-spacing:-0.03em;line-height:0.95;color:#fff;margin:20px 0 0">STME<br><span style="color:var(--orange)">Awards.</span></h1>
    </div>
    <div>
      <p style="font-size:17px;color:rgba(255,255,255,0.65);line-height:1.65;margin-bottom:40px">Two decades of industry recognition — from vendor partner awards to independent analyst accolades across the Middle East and EMEA.</p>
      <div style="display:flex;gap:0">
        <?php foreach ([['35+','Awards'],['20+','Years'],['12+','Vendors']] as $i => $s): ?>
        <div style="padding:20px 32px 16px;border:1px solid rgba(255,255,255,0.15);margin-right:-1px">
          <div style="font-size:32px;font-weight:800;letter-spacing:-0.02em;color:var(--orange);line-height:1"><?php echo $s[0]; ?></div>
          <div style="font-size:11px;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:0.1em;font-family:var(--font-mono);margin-top:6px"><?php echo $s[1]; ?></div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<section style="padding:0 32px 120px;background:var(--soft)">
  <div style="max-width:var(--container);margin:0 auto">
    <?php
    $years = [
      ['2019', [['Partner','Customer Satisfaction Award 2019','Veritas'],['Industry','Top SI – Security Services 2019','GEC Security Symposium & Cisco']]],
      ['2018', [['Partner','Renewal Partner of the Year','Veritas'],['Partner','Middle East Re-seller of the Year FY18','Commvault'],['Partner','Middle East Services Partner of the Year FY18','Commvault'],['Industry','Cloud & Cyber Security Highest Trusted Reseller in MEA','Ingram Micro']]],
      ['2017', [['Industry','System Integrator of the Year','ICT Achievement Awards'],['Partner','Regional Partner of the Year','Hitachi']]],
      ['2016', [['Industry','"Best Enterprises" in the Field of Technology','Oxford Summit of Leaders'],['Partner','Enterprise Partner of the Year','Veritas'],['Industry','Backup & Storage System Integrator of the Year','GEC Award'],['Partner','Overall Partner of the Year','Hitachi'],['Partner','Regional STAR Partner','NetApp'],['Industry','Storage Integrator of the Year','The Integrator / VAR'],['Partner','FlexPod Premium Partner','NetApp'],['Partner','SE Lifetime Contribution Award','NetApp']]],
      ['2013–2012', [['Partner','Middle East System Integrator of the Year','NetApp'],['Industry','Best Storage Integrator of the Year','Reseller ME'],['Partner','Software Partner of the Year CEEMEAT','Hitachi Data Systems'],['Partner','Excellence Achievement Award APAC/ME','Tandberg Data'],['Partner','SUN Systems Partner of the Year MENA','Sun Microsystems']]],
      ['2007–2002', [['Partner','Data Centre Partner of the Year — Gulf, Levant, KSA & Pakistan','Cisco Partner Summit'],['Partner','Storage Partner of the Year (GCC) 2005','Cisco Partner Summit'],['Partner','Master Reseller of the Year','Veritas Partner Program'],['Industry','MEED Business Excellence Awards Finalist','MEED']]],
    ];
    foreach ($years as $yr):
    ?>
    <div style="display:grid;grid-template-columns:140px 1fr;border-bottom:1px solid var(--hairline);padding-top:32px">
      <div style="padding:0 32px 32px 0;border-right:1px solid var(--hairline)">
        <div style="font-size:42px;font-weight:800;letter-spacing:-0.03em;line-height:1;color:var(--orange)"><?php echo $yr[0]; ?></div>
        <div style="font-size:11px;color:var(--mute);font-family:var(--font-mono);text-transform:uppercase;letter-spacing:0.08em;margin-top:8px"><?php echo count($yr[1]); ?> awards</div>
      </div>
      <div style="padding:32px 0 32px 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;align-content:start">
        <?php foreach ($yr[1] as $aw): ?>
        <div style="background:var(--paper);border:1px solid var(--hairline);border-top:3px solid <?php echo $aw[0]==='Partner'?'var(--orange)':'#3FA8E0'; ?>;padding:20px;display:flex;flex-direction:column;gap:8px">
          <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:<?php echo $aw[0]==='Partner'?'var(--orange)':'#3FA8E0'; ?>;font-family:var(--font-mono)"><?php echo $aw[0]; ?> Award</div>
          <div style="font-size:14px;font-weight:600;line-height:1.35;letter-spacing:-0.01em"><?php echo esc_html($aw[1]); ?></div>
          <div style="font-size:12px;color:var(--mute);padding-top:6px;border-top:1px solid var(--hairline)"><?php echo esc_html($aw[2]); ?></div>
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
        <div class="eyebrow-row" style="color:rgba(255,255,255,0.45)">Work with a recognised leader</div>
        <h2>35 years of commitment and delivery.</h2>
      </div>
      <div class="cta-banner__actions">
        <button class="btn btn--invert stme-contact-trigger">Talk to a specialist →</button>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
