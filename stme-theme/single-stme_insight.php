<?php get_header(); ?>
<?php if (have_posts()): while (have_posts()): the_post(); ?>
<section class="page-hero">
  <div class="page-hero__inner">
    <div class="crumbs"><a href="<?php echo esc_url(get_post_type_archive_link('stme_insight')); ?>">Insights</a><span>/</span><span><?php echo esc_html(get_post_meta(get_the_ID(),'_insight_type',true)?:'Note'); ?></span></div>
    <h1><?php the_title(); ?></h1>
  </div>
</section>
<?php if (has_post_thumbnail()): ?>
<div class="article-hero-img" style="background-image:url('<?php echo esc_url(get_the_post_thumbnail_url(null,'full')); ?>')"></div>
<?php endif; ?>
<div class="article-wrap">
  <div class="article-layout">
    <aside class="article-sidebar">
      <div class="eyebrow-row">Published</div>
      <p style="font-size:14px;color:var(--mute);margin-top:12px"><?php echo get_the_date(); ?></p>
    </aside>
    <div class="article-body"><?php the_content(); ?></div>
  </div>
</div>
<?php endwhile; endif; ?>
<?php get_footer(); ?>
