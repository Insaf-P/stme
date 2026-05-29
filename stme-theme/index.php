<?php get_header(); ?>
<section class="page-hero">
  <div class="page-hero__inner">
    <?php if (is_search()): ?>
    <div class="eyebrow-row">Search results</div>
    <h1>Results for: "<?php echo esc_html(get_search_query()); ?>"</h1>
    <?php else: ?>
    <h1><?php wp_title(''); ?></h1>
    <?php endif; ?>
  </div>
</section>
<section class="section">
  <div class="section__inner">
    <?php if (have_posts()): while (have_posts()): the_post(); ?>
    <article style="padding:24px 0;border-bottom:1px solid var(--hairline)">
      <h3 style="margin-bottom:8px"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <p style="color:var(--mute);font-size:14px"><?php the_excerpt(); ?></p>
    </article>
    <?php endwhile; else: ?>
    <p>No posts found.</p>
    <?php endif; ?>
  </div>
</section>
<?php get_footer(); ?>
