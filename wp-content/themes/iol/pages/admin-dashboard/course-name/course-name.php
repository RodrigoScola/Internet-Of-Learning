<?php

while (have_posts()) {
     the_post(); ?>
     <div class='admin-dashboard gridcol-6 main-content'>
          <?php get_template_part('components/nav/nav', 'admin-dashboard-user')     ?>
          <section class="griditem-2-5 mh-2 mb-2">
               <h1 class="text-title text-lg bold">Course Details</h1>
               <?php $currpage = get_the_ID();
  
    echo  do_shortcode('[ListPages post_id=' . $currpage . ']');
               ?>
               <?php
               $courses = new WP_Query([
                    'author' => 1,
                    'post_type' => 'courses',
               ]);

               while ($courses->have_posts()) {
                    $courses->the_post(); ?>
                    <p class="text-title text-sm bold">Course Information</p>
                    <form class="formInput gridcol-2 gap container ph-2 pv-3">
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Course name
                              <input value="<?php the_title() ?>" class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Publish date
                              <input disabled value="" class='input mb-1' required />
                         </label>
                         <div class="griditem-1-3 gridcol-3 gap">
                              <label class='clearfix text-xsm text-title m-0 bold'>
                                   Number of Views
                                   <input class='input mb-1' required />
                              </label>
                              <label class='clearfix text-xsm text-title m-0 bold'>
                                   Number of Reviews
                                   <input disabled value="<?php echo get_field('total_reviews') ?>" class='input mb-1' required />
                              </label>
                              <label class='clearfix text-xsm text-title m-0 bold'>
                                   Number of clickouts
                                   <input class='input mb-1' required />
                              </label>
                         </div>
                         <p class="text-title text-sm bold griditem-1-3">Widget interaction</p>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Using Widgets
                              <input class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Visits from Widgets
                              <input class='input mb-1' required />
                         </label>
                         <div class="griditem-2 mt-2">
                              <button class="right btn btn-blue-hollow">De-list Course</button>
                              <button class="right btn btn-yellow mr-2 bold ">Priority List Course</button>
                         </div>
                    </form>
               <?php }
               wp_reset_postdata() ?>

          </section>
     </div>
     <div class='admin-dashboard gridcol-6 main-content'>
          <?php get_template_part('components/nav/nav', 'admin-dashboard-user')     ?>
          <section class="griditem-2-5 mh-2 mb-2">
               <h1 class="text-title text-lg bold">Course Details (premium)</h1>
               <p class="text-title text-sm bold">Course Information</p>
               <form class="formInput gridcol-2 gap container ph-2 pv-3">
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Course name
                         <input class='input mb-1' required />
                    </label>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Publish date
                         <input class='input mb-1' required />
                    </label>
                    <div class="griditem-1-3 gridcol-3 gap">
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of Views
                              <input class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of Reviews
                              <input class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of clickouts
                              <input class='input mb-1' required />
                         </label>
                    </div>
                    <p class="text-title text-sm bold griditem-1-3">Widget interaction</p>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Using Widgets
                         <input class='input mb-1' required />
                    </label>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Visits from Widgets
                         <input class='input mb-1' required />
                    </label>
                    <div class="griditem-2 mt-2">
                         <button class="right btn btn-blue-hollow">De-list Course</button>
                         <button class="right btn btn-yellow mr-2 bold ">Priority List Course</button>
                    </div>
               </form>
          </section>
          <section class="griditem-2-5 mh-2 mb-2">
               <h1 class="text-title text-lg bold">Course Details (premium)</h1>
               <p class="text-title text-sm bold">Course Information</p>
               <form class="formInput gridcol-2 gap container ph-2 pv-3">
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Course name
                         <input class='input mb-1' required />
                    </label>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Publish date
                         <input class='input mb-1' required />
                    </label>
                    <div class="griditem-1-3 gridcol-3 gap">
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of Views
                              <input class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of Reviews
                              <input class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of clickouts
                              <input class='input mb-1' required />
                         </label>
                    </div>
                    <p class="text-title text-sm bold griditem-1-3">Widget interaction</p>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Using Widgets
                         <input class='input mb-1' required />
                    </label>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Visits from Widgets
                         <input class='input mb-1' required />
                    </label>
                    <div class="griditem-2 mt-2">
                         <button class="right btn btn-blue-hollow">De-list Course</button>
                         <button class="right btn btn-yellow mr-2 bold ">Priority List Course</button>
                    </div>
               </form>
          </section>
          <section class="griditem-2-5 mh-2 mb-2">
               <h1 class="text-title text-lg bold">Course Details (premium)</h1>
               <p class="text-title text-sm bold">Course Information</p>
               <form class="formInput gridcol-2 gap container ph-2 pv-3">
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Course name
                         <input class='input mb-1' required />
                    </label>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Publish date
                         <input class='input mb-1' required />
                    </label>
                    <div class="griditem-1-3 gridcol-3 gap">
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of Views
                              <input class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of Reviews
                              <input class='input mb-1' required />
                         </label>
                         <label class='clearfix text-xsm text-title m-0 bold'>
                              Number of clickouts
                              <input class='input mb-1' required />
                         </label>
                    </div>
                    <p class="text-title text-sm bold griditem-1-3">Widget interaction</p>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Using Widgets
                         <input class='input mb-1' required />
                    </label>
                    <label class='clearfix text-xsm text-title m-0 bold'>
                         Visits from Widgets
                         <input class='input mb-1' required />
                    </label>
                    <div class="griditem-2 mt-2">
                         <button class="right btn btn-blue-hollow">De-list Course</button>
                         <button class="right btn btn-yellow mr-2 bold ">Priority List Course</button>
                    </div>
               </form>
          </section>
     </div>
<?php
}
