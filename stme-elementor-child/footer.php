  </div><!-- #content .site-content -->
</div><!-- #page .site -->

<!-- ===================== CONTACT DRAWER ===================== -->
<div class="drawer-scrim" id="stme-drawer-scrim"></div>
<div class="drawer" id="stme-contact-drawer">
  <div class="drawer__head">
    <h2>Get in touch.</h2>
    <button class="drawer__close" id="stme-drawer-close">✕ Close</button>
  </div>
  <div class="drawer__body">
    <form id="stme-contact-form">
      <?php wp_nonce_field('stme_contact','stme_nonce'); ?>
      <div class="field"><label>Full name *</label><input name="name" type="text" placeholder="Ahmed Al-Rashid" required /></div>
      <div class="field"><label>Company *</label><input name="company" type="text" placeholder="National Bank of..." required /></div>
      <div class="field"><label>Job title</label><input name="title" type="text" placeholder="Head of IT Infrastructure" /></div>
      <div class="field"><label>Email *</label><input name="email" type="email" placeholder="ahmed@company.com" required /></div>
      <div class="field"><label>Phone</label><input name="phone" type="tel" placeholder="+966 11..." /></div>
      <div class="field">
        <label>Area of interest</label>
        <select name="interest">
          <option value="">Select topic</option>
          <option>Storage &amp; data management</option>
          <option>Network &amp; data security</option>
          <option>Cloud &amp; virtualization</option>
          <option>Professional services</option>
          <option>Managed services &amp; support</option>
          <option>Careers</option>
          <option>Partnership enquiry</option>
          <option>Other</option>
        </select>
      </div>
      <div class="field"><label>Message</label><textarea name="message" rows="4" placeholder="Describe your project or question..."></textarea></div>
    </form>
    <div id="stme-form-success" style="display:none; padding:32px; background:var(--soft); border:1px solid var(--hairline); text-align:center;">
      <strong style="font-size:22px; font-weight:700; letter-spacing:-0.01em;">Message received.</strong>
      <p style="color:var(--mute); margin-top:12px;">A member of the STME team will be in touch within one business day.</p>
    </div>
  </div>
  <div class="drawer__foot">
    <span class="meta">24/7 support: 800 246 0006</span>
    <button class="btn btn--primary" id="stme-form-submit">
      Send message
      <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </button>
  </div>
</div>
<!-- ===================== /CONTACT DRAWER ===================== -->

<!-- ===================== FOOTER ===================== -->
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__top">
      <div class="footer__cta">
        <h3>Have an infrastructure project on the desk?</h3>
        <button class="btn btn--invert stme-contact-trigger">
          Talk to sales
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a class="uline" href="<?php echo esc_url( home_url('/services') ); ?>">Services</a></li>
          <li><a class="uline" href="<?php echo esc_url( home_url('/products') ); ?>">Products &amp; Solutions</a></li>
          <li><a class="uline" href="<?php echo esc_url( home_url('/partners') ); ?>">Partners</a></li>
          <li><a class="uline" href="<?php echo esc_url( home_url('/insights') ); ?>">Insights</a></li>
          <li><a class="uline" href="<?php echo esc_url( home_url('/about') ); ?>">About</a></li>
          <li><a class="uline" href="<?php echo esc_url( home_url('/careers') ); ?>">Careers</a></li>
          <li><a class="uline" href="<?php echo esc_url( home_url('/contact') ); ?>">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>KSA <span style="color:rgba(255,255,255,0.6)">800 246 0006</span></li>
          <li>UAE <span style="color:rgba(255,255,255,0.6)">800 8810</span></li>
          <li><a class="uline" href="mailto:supportline@stme.com">supportline@stme.com</a></li>
        </ul>
      </div>
      <div>
        <h4>News &amp; Updates</h4>
        <p style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:14px;">Quarterly briefs on the GCC infrastructure market.</p>
        <form class="footer__sub" onsubmit="event.preventDefault()">
          <input type="email" placeholder="you@company.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 1982–<?php echo date('Y'); ?> Storage Technology Middle East. One Smart Solution.</span>
      <div style="display:flex;gap:24px;">
        <a href="<?php echo esc_url( get_privacy_policy_url() ); ?>">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>
<!-- ===================== /FOOTER ===================== -->

<?php wp_footer(); ?>
</body>
</html>
