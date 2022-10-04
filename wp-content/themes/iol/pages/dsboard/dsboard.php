<article class='gridcol-5 mv-4 main-content '>
     <?php


     $currentUser = new User();
     get_template_part('/components/nav/nav', 'dashboard');
     if (!is_user_logged_in()) {
          // wp_redirect(wp_login_url());
     }
     $orderby = sanitize_key(get_query_var('orderby'));

$coursesArr = [
     'paged' => get_query_var('paged', 1),
     'post_type' => 'courses',
     'author' => get_current_user_id(),
     'post_status' => ['draft', 'publish', 'private'],
     'posts_per_page' => 6,
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

     <section class="griditem-2-4 griditem-2 mh-2">
          <h1 class="text-title bold text-lg">
               Your Courses
          </h1>
          <div class="flex flex-row flex-between">
               <?php
               if ($userCourses->found_posts == 1 && $currentUser->account_type() == 'free') { ?>
                    <a href='#' class='btn disabled '>List a course</a>;
               <?php } else { ?>
                    <a href='<?php echo site_url() . '/new-course' ?>' class="btn btn-yellow bold ">List a course</a>


<?php                }


               ?>

               <div class="flex flex-row flex-right align center-items">
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

               if ($currentUser->account_type() == 'free' && $userCourses->post_count > 0) {
                    get_template_part('/components/cards/card', 'addmorecourses');
               }


               ?>
          </section>
          <?php

          echo renderPagination($userCourses, [
               'base' => 'my-courses'
          ]);
          ?>
     </section>
</article>