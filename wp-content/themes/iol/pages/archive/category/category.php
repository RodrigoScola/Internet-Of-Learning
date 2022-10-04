<div class='search-page main-content'>

     <?php
     global $post;
     $type = sanitize_text_field($_GET['type']);
     $currentCategory = get_category(get_query_var('cat'));
     $totalPosts = get_term_meta(get_query_var('cat'), $type . '_count', true );
// var_dump($currentCategory);
     ?>
<?php get_nav_template() ?>
     <div class="details">
        
               <h3 class="text-title text-md text-left bold"><?php echo $currentCategory->name ?></h3>
          <aside class="flex mv-05 flex-row mb-1 flex-between">
               <p>
                   <?php
                    echo $totalPosts ?>  result<?php echo $totalPosts > 1 ? 's' : ''  ?>
               </p>
               <div class="flex flex-row flex-right align center-items">
                  <?php 
                    if ($post->post_type == 'courses') {
                         ?>
                         [SortPosts]
                         <?php 
                    }
                  
                  
                   ?>
                    [ChangeMode]
               </div>
          </aside>
     <section class="changeMode courses gridcol-3 gap-2">
          <?php
          while (have_posts()) {
               the_post();
               if ($type == 'post') {
                    get_template_part('/components/list/blog-list');

               } else {
                    get_template_part('/components/list/course-list');
               }
          }
          wp_reset_postdata();
          ?>

     </section>
     <?php echo renderPagination()  ?>
</div>

<!-- <button id='change-mode' class="btn btn-yellow  ">click me</button> -->
</div>