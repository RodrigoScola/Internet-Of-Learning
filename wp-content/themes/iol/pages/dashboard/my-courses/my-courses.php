<article class='my-courses  mr-2 mv-4 gridcol-5 main-content'>
     <?php init_posts() ?>

     <?php get_template_part('/components/nav/nav', 'dashboard');

     $currentUser = new User();


     $posts = new WP_Query([
          'paged' => get_query_var('paged', 1),
          'post_type' => 'courses',
          'author' => get_current_user_id(),
          'post_status' => ['draft', 'publish', 'private'],
          'posts_per_page' => 3,
          'meta_query' => [
               'relation' => "OR",
               [
                    'key' => 'review_score',
                    'compare' => 'NOT EXISTS',
                    'value' => '',
               ],
               [
                    'key' => 'review_score',
                    'compare' => '>=',
                    'value' => "0"
               ]
          ],
          'orderby' => 'meta_value_num'
     ]);

     ?>
     <section class="dsboard-content mr-2 griditem-2 griditem-2-4">
          <h1 class='text-title text-center bold'>My Courses</h1>
          <section class="courses gap-2">
               <?php
               while ($posts->have_posts()) {

                    $posts->the_post();
                    get_template_part('/components/cards/card-dashboard');
               }



               ?>
          </section>
          <?php echo renderPagination($posts) ?>
     </section>
</article>