<main id='course' class='main-content'>
     <?php while (have_posts()) {
          the_post(); ?>
          <?php
          $instructorImageURL = sanitize_url(get_field('instructor_image'));

          if (!$instructorImageURL) {
               $instructorImageURL = sanitize_url(get_avatar_url(get_the_author_meta()));
          }
          esc_url($bannerImg['url']);

          if (get_field('course_banner')) {
               $bannerImg = get_field('course_banner');
          } else {
               $bannerImg = esc_url(get_the_post_thumbnail_url());
          }

          $existQuery = new WP_Query(array(
               'title' => get_the_ID(),
               'post_type' => 'reviews',
               'meta_query' => array(
                    array(
                         'key' => 'user_id',
                         'compare' => '=',
                         'value' => get_user_meta('id'),
                    )
               )
          ));
          ?>
          <article class='course'>

               <article class='content'>
                    <!-- breadcrums navigation -->
                    <h1 class='text-title bold w-70 text-md'>
                         <?php the_title() ?>

                    </h1>
                    <aside class='flex flex-row flex-left'>

                         <?php echo renderReviewCount(get_field('average'), min(0, get_field('total_reviews'))) ?>

                         <div class="ph-03">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z" fill="#282828" />
                              </svg>
                              <?php echo the_field('time_investment') ?> hours
                         </div>
                         <div>
                              <?php echo get_difficulty_level() ?>

                         </div>
                         <div class="ph-03">
                              <span class="dashicons dashicons-admin-site-alt3"></span>
                              <?php echo(  get_field('language_setting')) ?>
                         </div>
                    </aside>
                    <aside class=" mv-1">
                         Course teacher:
                    </aside>
                    <section class='mb-1'>
                         <button class='btn p-08 btn-blue btn-round_semi white'>
                              The Course
                         </button>
                         <a href="#the_instructor" class='p-08 greenwhite'>
                              The Instructor
                         </a>
                         <a href='#reviews' class=' p-08 greenwhite'>
                              Reviews
                         </a>
                    </section>
                    <img id='main-course-image' class=' ml-07 container container-sharp p-06' src='<?php the_post_thumbnail_url('landscape') ?>' />
                    <section class='container'>
                         <p class='text-title text-sm bold ph-1 '>
                              What are you going to get
                         </p>
                         <ul class='min-list pl-1 gridcol-2 w-80'>
                              <?php for ($i = 1; $i <= 6; $i++) {
                                   $currField =
                                        get_field("course_highlights_{$i}");
                                   if ($currField) {

                              ?>
                                        <li class="">
                                             <span class="icon mr-02 dashicons blue dashicons-yes-alt"></span><?php echo $currField ?>
                                        </li>
                              <?php }
                              }
                              ?>
                         </ul>
                    </section>
                    <div class="w-100 h-20 mv-2 bg-gray image-fit ">
                         <img class='w-100' src="<?php echo $bannerImg ?>" />
                    </div>
                    <section class='container p-1'>
                         <p class='text-title bold text-sm pt-01 '>
                              Course description
                         </p>
                         <p>
                              <?php the_content();
                              foreach (['course_outcome', 'course_value'] as $field) {
                                   $exists = get_field($field);
                                   if ($exists) {
                                        echo '<br />';
                                        echo $exists;
                                        echo '<br />';
                                   }
                              }



                              ?>

                         </p>
                    </section>
                    <section id='the_instructor' class='container p-1 mv-1'>
                         <p class='text-title text-sm  bold'>
                              About the Instructor
                         </p>
                         <div class='profile-card'>
                              <?php $image = get_field('instructor_image') ?>
                              <img class='profile-image ' src='<?php echo $instructorImageURL ?>'>
                              <?php echo the_field('instructor_description') ?>
                              </p>
                         </div>
                    </section>
                    <section class="clearfix mb-2">
                         <!-- <select class='right'> -->
                              <!-- <option>Latest Reviews</option> -->
                         <!-- </select> -->
                    </section>

                    <div class=' container p-03 container-sharp'>

                         <div class='inlineflex w-100 inlineflex-between'>

                              <div id='reviews' class="h-8  mt-06 ">
                                   <p class='text-title bold text-sm p-0 m-0 '>Reviews</p>
                                   <?php echo renderReviewCount(get_field('average'), get_field('total_reviews')) ?>
                              </div>
                              <!-- <button class="btn btn-yellow addReview ">
                              Write a review
                         </button> -->
                              <!-- <noscript> -->
                              <div id='addReview' data-class="btn btn-yellow" class='addReview '>
                              </div>
                              <!-- </noscript> -->
                         </div>
                         <article class="clearfix ph-1">
                              <?php
                              $comments = new WP_Query([
                                   'posts_per_page' => 3,
                                   'post_type' => 'reviews',
                                   'title' => get_the_ID()
                              ]);

                              while ($comments->have_posts()) {
                                   $comments->the_post();

                                   get_template_part('/components/comments/comment', 'course');
                              }
                              wp_reset_postdata();
                              ?>
                         </article>
                    </div>
                    <?php echo renderPagination($comments) ?>
                    <h3 class='text-title text-md  bold'>
                         Similar courses
                    </h3>
                    <section id='similar-courses' class="gridcol-3 mb-2 gap">
                         <?php

                         $similarCourses = new WP_Query([
                              'post_type' => 'courses',
                              'posts_per_page' => 3,
                              'post_category' => get_the_category(),
                         ]);

                         while ($similarCourses->have_posts()) {
                              $similarCourses->the_post();

                              get_template_part('/components/list/course-list');
                         }
                         wp_reset_postdata();
                         ?>

                    </section>
               </article>
               <article class='navigation-bar'>
                    <aside class='container container-sharp pv-2'>
                         <p class='text-title text-center bold text-xsm'>
                              Did you enjoy the course?
                         </p>
                         <div class="flex flex-center">

                              <div data-class="btn btn-blue center white" class=' addReview center white'>

                              </div>
                         </div>
                    </aside>

                    <section class='mt-2 p-1 container  container-sharp'>

                         <img src='<?php echo the_post_thumbnail_url('landscape') ?>' />
                         <div class='inlineflex mv-1'>
                              <?php echo renderReviewCount(get_field('average')) ?>
                         </div>

                         <div class='flex flex-between mt-03'>
                              <div>
                                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z" fill="#282828" />
                                   </svg>
                                   <?php echo get_field('time_investment') ?> hours

                              </div>
                              <div>
                                   <?= get_difficulty_level() ?>

                              </div>
                              <div>
                                   <span class="dashicons dashicons-admin-site-alt3"></span>
                                   <?= get_field('language_setting') ?>
                              </div>
                         </div>

                         <section>
                              <p class='text-title text-xsm bold left'>
                                   What are you going to learn
                              </p>
                              <ul class='list list-sm p-0'>
                                   <?php for ($i = 1; $i <= 6; $i++) {
                                        $currField =
                                             get_field("course_highlights_{$i}");
                                        if ($currField) {

                                   ?>
                                             <li class="">
                                                  <span class="icon mr-02 dashicons blue dashicons-yes-alt"></span><?php echo $currField ?>
                                             </li>
                                   <?php }
                                   }
                                   ?>
                              </ul>
                              <aside>
                                   <p class='text-title text-xsm bold left'>
                                        Actions
                                   </p>
                                   <p class='subtitle subtitle-xsm  left'>
                                        Links
                                   </p>
                                   <div class="flex flex-col flex-left">

                                  <?php
     $links = get_field('external_links');
     if ($links) {
          foreach($links as $currentField) {
               if ($currentField) {
                    ?>
<a class="blue underline mv-03" href="<?= sanitize_url($currentField['link']) ?>">
<?php echo url_to_icon($currentField['link']) ?><?= sanitize_text_field($currentField['label']) ?></a>
                    <?php 

               }
          }
     }                                 

                                 ?>

                                   </div>

                              </aside>
                         </section>
                         <div class="flex flex-center mt-2">

                              <a href='<?php echo the_field('course_link') ?>' class='btn btn-yellow text-center bold '>
                                   Go to the course
                              </a>
                         </div>
                    </section>
               </article>
          </article>




     <?php } ?>
</main>