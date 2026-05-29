<?php
/**
 * STME Elementor Header Part
 *
 * For use as an Elementor Pro Theme Builder Custom Header.
 * Go to: Elementor > Theme Builder > Header > Add New,
 * then import or paste this template, or use it as a reference
 * for building the header inside the Elementor editor.
 *
 * When used as a Theme Builder part, Elementor renders this
 * file instead of header.php for the header location.
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>
<!-- ===================== ELEMENTOR HEADER PART ===================== -->
<header class="nav" id="stme-nav">
  <div class="nav__inner">
    <div class="nav__left">
      <a href="<?php echo esc_url( home_url('/') ); ?>" class="nav__logo" aria-label="<?php bloginfo('name'); ?> home">
        <?php echo stme_logo(); ?>
      </a>
      <nav class="nav__links" aria-label="Primary navigation">

        <button class="mega-trigger" data-mega="about" aria-expanded="false">
          <span class="t-en">About</span><span class="t-ar">عن الشركة</span>
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>

        <button class="mega-trigger" data-mega="services" aria-expanded="false">
          <span class="t-en">Services</span><span class="t-ar">الخدمات</span>
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>

        <button class="mega-trigger" data-mega="products" aria-expanded="false">
          <span class="t-en">Products &amp; Solutions</span><span class="t-ar">المنتجات والحلول</span>
          <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </button>

        <a href="<?php echo esc_url( home_url('/partners') ); ?>">
          <span class="t-en">Partners</span><span class="t-ar">الشركاء</span>
        </a>
        <a href="<?php echo esc_url( home_url('/insights') ); ?>">
          <span class="t-en">Insights</span><span class="t-ar">الأخبار</span>
        </a>
        <a href="<?php echo esc_url( home_url('/contact') ); ?>">
          <span class="t-en">Contact</span><span class="t-ar">اتصل بنا</span>
        </a>
      </nav>
    </div>

    <div class="nav__right">
      <div class="lang-toggle">
        <button class="lang-btn is-active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="ar">ع</button>
      </div>
      <button class="btn btn--primary stme-contact-trigger">
        <span class="t-en">Talk to sales</span><span class="t-ar">تواصل معنا</span>
        <svg class="icon" width="14" height="14" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>

  <!-- About mega menu -->
  <div class="mega" id="mega-about">
    <div class="mega__inner">
      <div class="mega__feature">
        <div>
          <div class="eyebrow">About STME</div>
          <h3>Heritage of commitment &amp; delivery.</h3>
          <p>Founded in 1982. 400+ enterprise clients. Eight markets. One Smart Solution.</p>
        </div>
        <a href="<?php echo esc_url( home_url('/about') ); ?>" class="uline">Our story →</a>
      </div>
      <div class="mega__col">
        <h4>Company</h4>
        <a href="<?php echo esc_url( home_url('/about') ); ?>">About us</a>
        <a href="<?php echo esc_url( home_url('/about') ); ?>">Heritage &amp; history</a>
        <a href="<?php echo esc_url( home_url('/about') ); ?>">Our offices</a>
      </div>
      <div class="mega__col">
        <h4>Recognition</h4>
        <a href="<?php echo esc_url( home_url('/awards') ); ?>">STME awards</a>
        <a href="<?php echo esc_url( home_url('/awards') ); ?>">Industry accolades</a>
        <a href="<?php echo esc_url( home_url('/awards') ); ?>">Partner certifications</a>
      </div>
      <div class="mega__col">
        <h4>Customers</h4>
        <a href="<?php echo esc_url( home_url('/customers') ); ?>">Our customers</a>
        <a href="<?php echo esc_url( home_url('/customers') ); ?>">Banking &amp; finance</a>
        <a href="<?php echo esc_url( home_url('/customers') ); ?>">Government</a>
        <a href="<?php echo esc_url( home_url('/customers') ); ?>">Oil &amp; gas</a>
      </div>
    </div>
  </div>

  <!-- Services mega menu -->
  <div class="mega" id="mega-services">
    <div class="mega__inner">
      <div class="mega__feature">
        <div>
          <div class="eyebrow">Services</div>
          <h3>Built for enterprise. Backed for 35 years.</h3>
          <p>Storage, security, and cloud delivered across eight markets.</p>
        </div>
        <a href="<?php echo esc_url( home_url('/services') ); ?>" class="uline">Explore capabilities →</a>
      </div>
      <div class="mega__col">
        <h4>Cloud &amp; Storage</h4>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Cloud') ); ?>">Cloud infrastructure</a>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Storage') ); ?>">Storage solutions</a>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Backup') ); ?>">Backup &amp; disaster recovery</a>
      </div>
      <div class="mega__col">
        <h4>Security</h4>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Security') ); ?>">Cybersecurity</a>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Security') ); ?>">IAM &amp; identity</a>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Security') ); ?>">SIEM &amp; SOC</a>
      </div>
      <div class="mega__col">
        <h4>Networks &amp; AI</h4>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Networks') ); ?>">Enterprise networks</a>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=Networks') ); ?>">SD-WAN</a>
        <a href="<?php echo esc_url( home_url('/service-detail?cat=AI+%26+Data') ); ?>">AI &amp; data analytics</a>
      </div>
    </div>
  </div>

  <!-- Products mega menu -->
  <div class="mega" id="mega-products">
    <div class="mega__inner">
      <div class="mega__feature">
        <div>
          <div class="eyebrow">Portfolio</div>
          <h3>30+ vendor products. One trusted partner.</h3>
          <p>Best-in-class products from HDS, NetApp, Veritas, Cisco, VMware and more.</p>
        </div>
        <a href="<?php echo esc_url( home_url('/products') ); ?>" class="uline">View all products →</a>
      </div>
      <div class="mega__col">
        <h4>Storage &amp; Data</h4>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Data availability</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Data management</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Data protection &amp; recovery</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">High availability &amp; DR</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">ILM &amp; archiving</a>
      </div>
      <div class="mega__col">
        <h4>Infrastructure</h4>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Server hardware &amp; SAN</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Virtualization</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">IoT solutions</a>
      </div>
      <div class="mega__col">
        <h4>Security</h4>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Security solutions</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Palo Alto Networks</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">Fortinet</a>
        <a href="<?php echo esc_url( home_url('/products') ); ?>">IBM Security</a>
      </div>
    </div>
  </div>
</header>
<!-- ===================== /ELEMENTOR HEADER PART ===================== -->
