<?php
/**
 * Template Name: Insights
 */
get_header(); ?>

<section class="page-hero">
  <div class="page-hero__inner">
    <div class="eyebrow-row">News &amp; updates</div>
    <h1>From the field.</h1>
    <p class="page-hero__sub">News, announcements, product launches, and awards from STME — a regional IT leader since 1982.</p>
  </div>
</section>

<section class="section">
  <div class="section__inner">
    <div class="insight-grid">
      <?php
      $types = ['News','Announcement','Product launch','Award','Case study'];
      $insights = new WP_Query(['post_type'=>'stme_insight','posts_per_page'=>12,'orderby'=>'date','order'=>'DESC']);
      if ($insights->have_posts()):
        while ($insights->have_posts()): $insights->the_post();
          $type  = get_post_meta(get_the_ID(),'_insight_type',true) ?: 'Note';
          $thumb = get_the_post_thumbnail_url(null,'large');
      ?>
      <article class="insight-item">
        <?php if ($thumb): ?>
        <div class="insight-item__thumb" style="background-image:url('<?php echo esc_url($thumb); ?>')"></div>
        <?php endif; ?>
        <div class="insight-item__meta">
          <span><?php echo get_the_date('d M Y'); ?></span>
          <span><?php echo esc_html($type); ?></span>
        </div>
        <h3><?php the_title(); ?></h3>
        <p><?php echo wp_trim_words(get_the_excerpt(),20); ?></p>
        <a href="<?php the_permalink(); ?>" class="insight-item__read uline">Read more →</a>
      </article>
      <?php endwhile; wp_reset_postdata();
      else:
        $static = [
          ['04 Nov 2018','News','https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80','STME concludes successful participation in GITEX Technology Week 2018.','STME participated in GITEX Technology Week 2018 in Dubai, showcasing enterprise storage, security and cloud solutions.'],
          ['20 Sep 2018','Announcement','https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=600&q=80','STME qualified by Saudi Exports to represent KSA in GITEX Technology 2018.','STME has been qualified by Saudi Exports to represent the Kingdom of Saudi Arabia in the 38th GITEX Technology Week.'],
          ['24 Jun 2018','Product launch','https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80','STME launches next-generation cloud solution for GDPR compliance.','STME launched a cloud solution to support enterprises\' data exchange and GDPR compliance needs across the Middle East.'],
          ['15 Jun 2018','Award','https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80','STME wins 4 prestigious accolades to reinforce market leadership.','Four industry accolades recognizing leadership in enterprise IT integration across the region.'],
          ['12 Dec 2017','Award','https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80','STME wins Ingram Micro Highest Transacting Cyber Security Award.','STME received the Ingram Micro Highest Transacting Cyber Security Award.'],
          ['18 Oct 2017','Award','https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&q=80','STME named System Integrator of the Year by ICT Achievement Awards 2017.','STME was named System Integrator of the Year, recognizing excellence in enterprise IT integration.'],
        ];
        foreach ($static as $it):
      ?>
      <article class="insight-item">
        <div class="insight-item__thumb" style="background-image:url('<?php echo esc_url($it[2]); ?>')"></div>
        <div class="insight-item__meta">
          <span><?php echo $it[0]; ?></span>
          <span><?php echo $it[1]; ?></span>
        </div>
        <h3><?php echo esc_html($it[3]); ?></h3>
        <p><?php echo esc_html($it[4]); ?></p>
        <span class="insight-item__read uline">Read more →</span>
      </article>
      <?php endforeach; endif; ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
