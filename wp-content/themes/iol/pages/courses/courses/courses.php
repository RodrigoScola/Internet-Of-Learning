<div class='search-page  main-content'>

     <?php
     $type = sanitize_text_field($_GET['type']);
     $currentCategory = get_category(get_query_var('cat'));
     ?>
     <?php get_template_part('/components/nav/nav-cat', get_query_var('type', 'courses')) ?>

     <div class="someCoursesss"'>
        
          <aside class="flex mv-05 flex-row mb-1 flex-between">
               <p>
                   <?php $totalPosts = wp_count_posts('courses')->publish;
                    echo $totalPosts; ?>  result<?php echo $totalPosts > 1 ? 's' : ''  ?>
               </p>
               <div class="flex flex-row flex-right align center-items">
                  [SortPosts]
                    <a id=' change-mode' class="bg-blue p-06 btn-round_semi inlineblock mh-1">
          <span class="dashicons dashicons-align-right white"></span>
          </a>
     </div>
     </aside>
     <section class="changeMode courses gridcol-3 gap-1">
          <?php
          while (have_posts()) {
               the_post();
               get_template_part('/components/list/course-list');
          }
          wp_reset_postdata();
          ?>

     </section>
     <?php echo renderPagination()  ?>
</div>

</div>