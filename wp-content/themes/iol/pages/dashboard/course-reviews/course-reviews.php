<div id='course-reviews' class='dsboard mv-4 main-content course-reviews'>
     <?php init_posts() ?>

     <?php
     while (have_posts()) {
          the_post();



          $userdata = new User(get_current_user_id());
          $courseid = sanitize_text_field(get_query_var('courseid'));
          if (!$courseid) {
               $courseid = $userdata->getPosts([
                    'post_type' => 'courses',
                    'pluck' => 'id'
               ])['courses'][0];
          }
          if (!($userdata->isPostAuthor($courseid))) {
               wp_safe_redirect('/');
          }

          get_template_part('/components/nav/nav', 'dashboard');
     ?>
          <article class="mr-3">
               <div class="mt-3"> <?= PageHandler::listPages() ?></div>
               <h1 class="text-title text-lg bold">Reviews</h1>
               <p>Course Name</p>
               <?php
               ?>
               <div class=" clearfix">
                    <a id='change-mode' href='' class="bg-blue p-06 btn-round_semi inlineblock mh-1 mt-05 right">
                         <span class="dashicons dashicons-align-right white"></span>
                    </a>
                    <select class="right">
                         <option>Latest Added</option>

                    </select>
               </div>
               <section>
                    <?php

                    $courseComments = new WP_Query([
                         'post_type' => "reviews",
                         'title' => $courseid

                    ]);

                    while ($courseComments->have_posts()) {
                         $courseComments->the_post();

                    ?>
                         <div class="clearfix container p-1 mv-1">
                              <?php get_template_part('/components/comments/comment', 'course'); ?>
                              <button class="btn btn-red white bold right ">Report Review</button>
                         </div>
                    <?php }
                    wp_reset_postdata(); ?>


               </section>
               <?php renderPagination($courseComments) ?>
          </article>
     <?php } ?>
</div>