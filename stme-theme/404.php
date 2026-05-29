<?php get_header(); ?>
<section class="page-hero">
  <div class="page-hero__inner">
    <h1>Page not found.</h1>
    <p class="page-hero__sub">The page you are looking for does not exist or has been moved.</p>
    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn--primary" style="margin-top:24px;display:inline-flex">Return home →</a>
  </div>
</section>
<?php get_footer(); ?>
