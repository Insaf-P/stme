<?php get_header(); ?>

<main>
  <?php if (have_posts()): while (have_posts()): the_post(); ?>
  <section class="page-hero">
    <div class="page-hero__inner">
      <h1><?php the_title(); ?></h1>
    </div>
  </section>
  <section class="section">
    <div class="section__inner">
      <div class="detail-body">
        <div class="detail-body__inner">
          <aside></aside>
          <div class="article-body">
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </div>
  </section>
  <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
