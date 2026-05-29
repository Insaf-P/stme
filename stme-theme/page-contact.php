<?php get_header(); ?>

<section class="page-hero">
  <div class="page-hero__inner">
    <div class="eyebrow-row">Contact</div>
    <h1>Get in touch<br>with STME.</h1>
    <p class="page-hero__sub">Whether you have an infrastructure project, a support question, or a partnership enquiry — the right team is ready to respond.</p>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start">

      <!-- Contact form -->
      <div>
        <div class="eyebrow-row" style="margin-bottom:32px">Send a message</div>
        <form id="stme-page-contact-form" style="display:flex;flex-direction:column;gap:20px">
          <?php wp_nonce_field('stme_contact','stme_nonce'); ?>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <div class="field"><label>Full name *</label><input name="name" type="text" placeholder="Ahmed Al-Rashid" required /></div>
            <div class="field"><label>Company *</label><input name="company" type="text" placeholder="National Bank of..." required /></div>
            <div class="field"><label>Job title</label><input name="title" type="text" placeholder="Head of IT Infrastructure" /></div>
            <div class="field">
              <label>Country</label>
              <select name="country">
                <option value="">Select country</option>
                <?php foreach (['Saudi Arabia','United Arab Emirates','Bahrain','Egypt','Kuwait','Jordan','Pakistan','United Kingdom','Other'] as $c): ?>
                <option><?php echo esc_html($c); ?></option>
                <?php endforeach; ?>
              </select>
            </div>
            <div class="field"><label>Email *</label><input name="email" type="email" placeholder="ahmed@company.com" required /></div>
            <div class="field"><label>Phone</label><input name="phone" type="tel" placeholder="+966 11..." /></div>
          </div>
          <div class="field">
            <label>Area of interest</label>
            <select name="interest">
              <option value="">Select topic</option>
              <?php foreach (['Storage & data management','Network & data security','Cloud & virtualization','Professional services','Managed services & support','Careers','Partnership enquiry','Other'] as $i): ?>
              <option><?php echo esc_html($i); ?></option>
              <?php endforeach; ?>
            </select>
          </div>
          <div class="field"><label>Message</label><textarea name="message" rows="5" placeholder="Describe your project or question..."></textarea></div>
          <button type="submit" class="btn btn--primary" style="align-self:flex-start">
            Send message
            <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </form>
        <div id="stme-page-form-success" style="display:none;padding:48px 40px;background:var(--soft);border:1px solid var(--hairline);text-align:center;margin-top:24px">
          <strong style="font-size:22px;font-weight:700">Message received.</strong>
          <p style="color:var(--mute);margin-top:12px">A member of the STME team will be in touch within one business day.</p>
        </div>
      </div>

      <!-- Support info -->
      <div style="padding-top:56px;border-top:1px solid var(--hairline)">
        <div class="eyebrow-row" style="margin-bottom:20px">24/7 Support lines</div>
        <?php foreach (['KSA'=>'800 246 0006','UAE'=>'800 8810','Email'=>'supportline@stme.com'] as $label => $val): ?>
        <div style="display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--hairline);font-size:15px">
          <span style="color:var(--mute);font-weight:500"><?php echo $label; ?></span>
          <span style="font-weight:600"><?php echo esc_html($val); ?></span>
        </div>
        <?php endforeach; ?>

        <div style="margin-top:40px">
          <div class="eyebrow-row" style="margin-bottom:16px">Follow STME</div>
          <div style="display:flex;gap:16px">
            <a href="https://www.linkedin.com/company/stme" target="_blank" class="btn btn--secondary" style="padding:10px 16px;font-size:13px">LinkedIn</a>
            <a href="https://twitter.com/STMELtd" target="_blank" class="btn btn--secondary" style="padding:10px 16px;font-size:13px">Twitter</a>
            <a href="https://www.facebook.com/STMELtd/" target="_blank" class="btn btn--secondary" style="padding:10px 16px;font-size:13px">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Offices -->
<section class="section section--soft">
  <div class="section__inner">
    <div class="section__head">
      <div><div class="eyebrow-row">Offices</div><h2>Eight markets. Find your local team.</h2></div>
      <p>STME operates from offices across KSA, UAE, Bahrain, Egypt, Kuwait, Jordan, Pakistan, and the United Kingdom.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--hairline);border-left:1px solid var(--hairline)">
      <?php
      $offices = [
        ['Kingdom of Saudi Arabia', [
          ['Riyadh',   'King Fahd Rd, Olaya District',      '+966 11 461 0006','https://maps.google.com/?q=King+Fahd+Road+Olaya+Riyadh'],
          ['Jeddah',   'Al Madinah Rd, Al Andalus',         '+966 12 668 0006','https://maps.google.com/?q=Al+Madinah+Road+Jeddah'],
          ['Al Khobar','King Faisal St, Al Aqrabia',        '+966 13 882 0006','https://maps.google.com/?q=King+Faisal+Street+Al+Khobar'],
        ]],
        ['United Arab Emirates', [
          ['Dubai',    'Sheikh Zayed Rd, Trade Centre 1',   '+971 4 397 0006','https://maps.google.com/?q=Sheikh+Zayed+Road+Dubai'],
          ['Abu Dhabi','Corniche Rd, Al Markaziyah',        '+971 2 627 0006','https://maps.google.com/?q=Corniche+Road+Abu+Dhabi'],
        ]],
        ['Bahrain',         [['Manama',      'Diplomatic Area, Building 218','+973 17 530 006','https://maps.google.com/?q=Diplomatic+Area+Manama']]],
        ['Egypt',           [['Cairo',       'Nile Corniche, Maadi',         '+20 2 252 0006','https://maps.google.com/?q=Nile+Corniche+Maadi+Cairo']]],
        ['Kuwait',          [['Kuwait City', 'Al Sour St, Salhiya',          '+965 2245 0006','https://maps.google.com/?q=Al+Sour+Street+Kuwait+City']]],
        ['Jordan',          [['Amman',       'Zahran St, Abdoun',            '+962 6 559 0006','https://maps.google.com/?q=Zahran+Street+Abdoun+Amman']]],
        ['Pakistan',        [['Karachi',     'Shahrah-e-Faisal, Block 6',    '+92 21 343 0006','https://maps.google.com/?q=Shahrah-e-Faisal+Karachi']]],
        ['United Kingdom',  [['London',      'Cannon Street, EC4N',          '+44 20 7283 0006','https://maps.google.com/?q=Cannon+Street+London']]],
      ];
      foreach ($offices as $o):
      ?>
      <div style="border-right:1px solid var(--hairline);border-bottom:1px solid var(--hairline);padding:32px 28px;display:flex;flex-direction:column;gap:20px">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--orange);font-family:var(--font-mono)"><?php echo esc_html($o[0]); ?></div>
        <?php foreach ($o[1] as $c): ?>
        <div style="display:flex;flex-direction:column;gap:6px;padding-top:4px;border-top:1px solid var(--hairline)">
          <div style="font-weight:700;font-size:16px"><?php echo esc_html($c[0]); ?></div>
          <div style="font-size:13px;color:var(--mute);line-height:1.5"><?php echo esc_html($c[1]); ?></div>
          <div style="font-size:12px;font-family:var(--font-mono)"><?php echo esc_html($c[2]); ?></div>
          <a href="<?php echo esc_url($c[3]); ?>" target="_blank" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--orange);text-decoration:none;margin-top:4px">
            <svg class="icon" width="12" height="12" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            View on Map
          </a>
        </div>
        <?php endforeach; ?>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
