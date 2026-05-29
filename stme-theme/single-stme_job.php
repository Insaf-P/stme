<?php get_header(); ?>
<?php if (have_posts()): while (have_posts()): the_post(); ?>
<section class="page-hero section--soft" style="padding-bottom:0">
  <div class="page-hero__inner">
    <div class="crumbs"><a href="<?php echo esc_url(get_post_type_archive_link('stme_job')); ?>">Careers</a><span>/</span><span><?php echo esc_html(get_post_meta(get_the_ID(),'_job_dept',true)?:'Engineering'); ?></span></div>
    <h1><?php the_title(); ?></h1>
    <div style="display:flex;gap:24px;margin-top:24px;padding-bottom:48px;border-bottom:1px solid var(--hairline)">
      <?php foreach ([get_post_meta(get_the_ID(),'_job_dept',true)?:'Engineering', get_post_meta(get_the_ID(),'_job_location',true)?:'Riyadh, KSA','Full-time'] as $tag): ?>
      <span style="font-size:13px;font-family:var(--font-mono);letter-spacing:0.06em;text-transform:uppercase;color:var(--mute)"><?php echo esc_html($tag); ?></span>
      <?php endforeach; ?>
    </div>
  </div>
</section>
<section class="detail-body">
  <div class="detail-body__inner">
    <aside>
      <div class="eyebrow-row">Apply</div>
      <button class="btn btn--primary stme-contact-trigger" style="margin-top:24px;width:100%;justify-content:center">Apply now →</button>
      <a href="<?php echo esc_url(get_post_type_archive_link('stme_job')); ?>" class="btn btn--secondary" style="margin-top:12px;width:100%;justify-content:center">← All roles</a>
    </aside>
    <div class="article-body"><?php the_content(); ?></div>
  </div>
</section>
<?php endwhile; endif; ?>
<?php get_footer(); ?>
