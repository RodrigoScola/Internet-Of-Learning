<?php
while (have_posts()) {
     the_post(); ?>
     <div id='test-page' class='test ph-3 '>
          <h1 class="text-title text-center ">Icons</h1>
          <section class=" gridcol-5 b">
               <?php




               $f = new Formatting();
               $levels = ['all_levels', 'beginner', 'advanced', 'intermediate'];
               $colors = ['yellow', 'blue', 'gray', 'red', 'white', 'teal', 'lightgray', 'lightblue', 'greenwhite', 'lightgreen', 'darkgray', 'darkblue'];
               $iconNames = ['IconSettings', 'IconCheck', 'IconCheckFilled', 'IconCheckMark', 'IconAvatar', 'IconFilter', 'IconList', 'IconStarFilled', 'IconSearch', 'IconDifficulty1', 'IconDifficulty2', 'IconDifficulty3', 'IconDifficulty4', 'IconClose', 'IconPlus', 'IconMinus', 'IconUpload', 'IconNext', 'IconLast', 'IconFirst', 'IconPrevious', 'IconGlobe', 'IconClock', 'IconEye', 'IconList', 'IconPlay', 'IconGrid', 'IconTable', 'ArrowDown', 'ArrowUp', 'IconHat', 'IconWidget', 'IconChat'];

               foreach ($iconNames as $key) { ?>
                    <div>
                         <?php echo '[' . $key . ']' . ' ' . $key ?>
                    </div>

               <?php
               }
               ?>
          </section>
          <h1 class="text-center text-title">Stars</h1>

          <section class="gridcol-5">
               <div class="flex flex-col">
                    <p class="text-title">Review display</p>
                    <?php renderStars(1) ?>
                    <?php renderStars(2) ?>
                    <?php renderStars(3) ?>
                    <?php renderStars(4) ?>
                    <?php renderStars(5) ?>
               </div>
               <section class="griditem-2-3">
                    <p class="text-title ">Review Input</p>
                    [StarReviews initialScore=3]
               </section>
               <section>
                    <p class="text-title">Review Score</p>
                    <?php renderReviewCount(5, 3) ?>
                    <?php renderReviewCount(0) ?>
               </section>
          </section>
          <section>
               <h1 class="text-title text-center ">Buttons</h1>
               <section class="gridcol-4 gap">
                    <?php
                    foreach ($colors as $color) { ?>
                         <div>

                              <a class="mb-03 btn btn-<?php echo $color ?>">
                                   Sample
                              </a>
                              <button class="btn mb-03 btn-<?php echo $color ?>-hollow">
                                   Sample
                              </button>
                              <a class="mb-03 btn btn-<?php echo $color ?>-dt">
                                   Sample
                              </a>
                         </div>
                    <?php
                    } ?>


               </section>
               <section class="gridcol-5">

                    <section>
                         <p class="text-title">action buttons</p>
                         <a class="btn btn-blue p-07 m-04 white">[IconPlus]</a>
                         <a class="btn btn-blue p-07 m-04 white">[IconMinus]</a>
                         <a class="btn btn-yellow p-07 m-04 ">[IconUpload]</a>
                    </section>
                    <section>
                         <p class="text-title ">View type Button</p>
                         <a class="btn btn-blue white p-07 m-04">[IconGrid]</a>
                         <a class="btn btn-blue white p-07 m-04">[IconList]</a>
                    </section>
               </section>
               <section>
                    <h1 class="text-title text-center bold">Tags</h1>
                    <section>
                         <p>Course Verification</p>
                         <section class="gridcol-4">
                              [TagVerified ]
                              <div class='divider'></div>
                              [TagPremiumMember]
                              <div class='divider'></div>
                              [TagCourseClaimed]
                              <div class='divider'></div>
                              [Tag text='Category' tagclass='bg-blue ' ]
                         </section>
                    </section>
               </section>
          </section>
          <section>
               <h1 class='text-title text-center'>Inputs</h1>
               <section>
                    <form class="formInput">


                         [InputText text='name' ]

                         [InputText text='Image Input (display only)' icon='IconUpload' iconClass=' btn-yellow' ]

                         [InputText text='Input Add (display only)' icon='IconPlus' iconClass='white btn-blue' ]
                         [InputText text='Input Remove (display only)' icon='IconMinus' iconClass='white btn-red' ]
                         [InputText text='input close (display only)' icon='IconClose' ]
                    </form>
               </section>
          </section>
          <section>
               <h1 class="text-title text-center ">Posts</h1>
               <section class="gridcol-3 gap">
                    <?php $posts = new WP_Query([
                         'post_type' => 'courses',
                         'order' => 'asc',
                         'posts_per_page' => '1'
                    ]);
                    while ($posts->have_posts()) {
                         $posts->the_post();
                         get_template_part('components/list/course-list');
                    }
                    wp_reset_postdata();

                    get_template_part('/components/cards/card', 'addmorecourses');
                    ?>
                    <div class="container ">
                         <div class="align flex-between">
                              <p class="text-title pl-03 pt-03  bold">Name course</p>
                              <p class="bg-blue p-03 btn-round_semi white mr-03">Subcategory</p>
                         </div>
                         <div class="flex flex-row align m-0 p-0 flex-left">
                              <p class="text-title pl-03 pb-03 m-0 bold ">0.0</p>
                              <?= renderStars(4) ?>
                         </div>
                    </div>

               </section>
               <?php $res = searchResults([
                    'courselevel' => 'beginner',
               ]);
               ?>
               <section class="changeMode ">
                    <?php
                    renderCourseCard($res[0], ['type' => 'list']);
                    ?>
               </section>
               <section>
                    <h1 class="text-title text-center">Levels</h1>
                    <?
                    foreach ($levels as $item) {
                         echo '[' . $item . ']';
                    }
                    ?>
               </section>
          </section>
          <section>
               <h1>Forms</h1>
               <section>
                    [ultimatemember form_id="9209"]
               </section>
          </section>
          <section>
               <aside>
                    <h1>Information</h1>
                    <p>Details</p>
                    [Details]
                    this is the content that i so love
                    [/Details]
               </aside>
               <div class="gridcol-2">

                    <aside>
                         [List items='Get monthly traffic boosts to your course listings,Get 24/7 priority support at every step of the way,Upload webinars or sales video,Market your courses effectively, Reach a global community of dedicated learners,Ratings and review widgets' icon='IconCheckMark' ]
                    </aside>
                    <aside>
                         [List min='true' items='Get monthly traffic boosts to your course listings,Get 24/7 priority support at every step of the way,Upload webinars or sales video,Market your courses effectively, Reach a global community of dedicated learners,Ratings and review widgets' icon='IconCheckMark' ]
                    </aside>
               </div>
               <aside>
                    <?php
                    $pages = new WP_Query([
                         'paged' => get_query_var('paged', 1),

                         'post_type' => 'page',
                         'posts_per_page' => 2,

                    ]);
                    wp_reset_postdata();
                    echo get_query_var('paged');
                    ?>
                    <p>Pagination</p>
                    <?php renderPagination($pages) ?>
               </aside>
          </section>
          <section>
               <h1 class="text-title text-center">Jsx</h1>
               <div id='jsx'></div>
          </section>

     </div>
<?php
}
