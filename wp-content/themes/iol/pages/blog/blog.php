<div class='search-page main-content'>
     <?php init_posts() ?>

     <?php
     $type = sanitize_text_field($_GET['type']);
     $currentCategory = get_category(get_query_var('cat'));

     ?>
     <?php get_template_part('/components/nav/nav-cat-post') ?>

     <div class="details">
          <aside class="clearfix">
               <p>
                    <?php $totalPosts = wp_count_posts('courses')->publish;
                    echo $totalPosts; ?> result<?php echo $totalPosts > 1 ? 's' : ''  ?>
               </p>
               <div class="flex flex-row flex-between center-items">
                    <h3 class="text-title text-md bold">Our Blog</h3>


                    [ChangeMode]


               </div>
          </aside>
          <section class="changeMode courses gridcol-3 gap-2">
               <?php
               while (have_posts()) {
                    the_post();
                    get_template_part('/components/list/blog-list');
               }
               wp_reset_postdata();
               ?>

          </section>
          <?php echo renderPagination()  ?>
     </div>

</div>