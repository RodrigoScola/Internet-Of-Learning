    <?php get_template_part('/blocks/header/header'); ?>
    <link rel="stylesheet" href="<?php echo get_theme_file_uri('build/index.css') ?>">
    <link rel="stylesheet" href="<?php echo get_theme_file_uri('build/style-index.css') ?>">
    <div class='admin-dashboard main-content gridcol-6'>
         <?php init_posts() ?>

         <?php get_template_part('components/nav/nav', 'admin-dashboard-user')     ?>
         <?php
          $userdata = new User(sanitize_key(get_query_var('username')));
          // var_dump($userdata);

          $account_type = get_field('account_type', 'user_' . 2);
          // var_dump(get_query_var('pagename'));
          if ($_POST['visibility_type'] && $_POST['courseId']) {
               changeVisibility($_POST);
          }
          ?>


         <section class="griditem-2-5 mh-2 mb-2">
              <h1 class="text-title text-lg bold">Course Details</h1>


              <?php
               $courses = new WP_Query([
                    'author' => $userdata->userId,
                    'post_type' => 'courses',
                    'order' => "DESC",
                    'meta_key' => "review_score",
                    'orderby' => 'meta_key_value_num',
                    'post_status' => ['draft', 'publish', 'private']
               ]);

               while ($courses->have_posts()) {
                    $courses->the_post(); ?>

                   <p class="text-title text-sm bold">Course Information</p>
                   <form action='/admin-dashboard/users/<?php echo get_query_var('username') . '/courses' ?>' method="POST" class="formInput gridcol-2 gap container ph-2 pv-3">
                        <input class="invisible" name="visibility_type" value="<?php echo get_post_status() == 'draft' ? "publish" : 'draft' ?>" ?>
                        <label class='clearfix text-xsm text-title m-0 bold'>
                             Course name
                             <input value="<?php the_title() ?>" class='input mb-1' required />
                        </label>
                        <label class='clearfix text-xsm text-title m-0 bold'>
                             Publish date
                             <input disabled value="<?php echo get_the_date('d-m-Y') ?>" class='input mb-1' required />
                        </label>
                        <div class="griditem-1-3 gridcol-3 gap">
                             <label class='clearfix text-xsm text-title m-0 bold'>
                                  Number of Views
                                  <input disabled class='input mb-1' />
                             </label>
                             <label class='clearfix text-xsm text-title m-0 bold'>
                                  Number of Reviews
                                  <input disabled value="<?php echo get_field('total_reviews') ?>" class='input mb-1' />
                             </label>
                             <label class='clearfix text-xsm text-title m-0 bold'>
                                  Number of clickouts
                                  <input disabled class='input mb-1' required />
                             </label>
                        </div>
                        <p class="text-title text-sm bold griditem-1-3">Widget interaction</p>
                        <label class='clearfix text-xsm text-title m-0 bold'>
                             Using Widgets
                             <input disabled class='input mb-1' />
                        </label>
                        <label class='clearfix text-xsm text-title m-0 bold'>
                             Visits from Widgets
                             <input disabled class='input mb-1' />
                        </label>
                        <div class="griditem-1-2  p-1 mv-01">

                             <div class="right ">

                                  <button type="submit" value="<?php echo get_the_ID() ?>" name='courseId' class="btn  btn-blue-hollow"><?php echo get_post_status() == 'draft' ? 'List Course' : 'De-list Course' ?></button>
                                  <button name='courseId' class="btn h-fit bold  btn-yellow">Priority List Course</button>
                             </div>
                        </div>
                   </form>
              <?php }
               wp_reset_postdata() ?>

         </section>
    </div>

    <?php get_template_part('/blocks/footer/footer'); ?>