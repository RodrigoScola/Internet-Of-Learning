<article class=''>

     <div class="">
          <?php
          $currentUser = new User();



          if (!is_user_logged_in()) {
               // wp_redirect(wp_login_url());
          }
          $orderby = sanitize_key(get_query_var('orderby'));

          $coursesArr = [
               'paged' => get_query_var('paged', 1),
               'post_type' => 'courses',
               'author' => get_current_user_id(),
               'post_status' => ['draft', 'publish', 'private'],
               'posts_per_page' => 9,
               'orderby' => 'id',

          ];
          if (get_query_var('sort') !== 'latest') {
               $coursesArr['meta_query'] = [
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
               ];
               $coursesArr['orderby'] = 'meta_value_num';
          }


          $userCourses = new WP_Query($coursesArr);
          ?>



          <section class="mb-6 ">

               <div class="flex flex-row flex-right flex-between">

                    <div class="flex right flex-row flex-right align center-items">
                         [SortPosts]
                         [ChangeMode]
                    </div>
               </div>
               <section class="changeMode courses gridcol-3 gap-2">

                    <?php
                    while ($userCourses->have_posts()) {
                         $userCourses->the_post();
                         get_template_part('/components/cards/card-dashboard');
                    }
                    wp_reset_postdata();




                    ?>
               </section>
          </section>
     </div>
     <?php

     echo renderSearchPagination([
          'max_num_pages' => $userCourses->max_num_pages,
          'current' => get_query_var('paged', 1)
     ]);
     ?>
</article>