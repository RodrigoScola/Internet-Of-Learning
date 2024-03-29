<?php function renderCourseCard($data, $options = [
     'type' => 'grid'
])
{ ?>
     <div class='course-card <?php echo $options['type'] == 'list' ? 'course-card_list' : '' ?> mv-1 '>
          <img class='course-card-image ' src='<?php echo esc_url($data['thumbnail_url']) ?>' />
          <div class="body">
               <h1 class='clearfix text-title text-xsm bold left'>
                    <?= esc_attr($data['title']) ?>
               </h1>

               <?php echo renderReviewCount($data['meta_input']['average'], esc_attr($data['meta_input']['total_reviews'])) ?>
               <div class='inlineflex mt-1'>
                    <div>
                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z" fill="#282828" />
                         </svg>
                         <?php echo esc_attr($data['meta_input']['time_investment']) ?> hours
                    </div>
                    <div class="ph-1 mb-02">
                         <?php echo get_difficulty_level($data['meta_input']['level']) ?>
                    </div>
                    <div>
                         <span class="dashicons dashicons-admin-site-alt3"></span>
                         English
                    </div>
               </div>
               <p class="body_description p-0 m-0">
                    <?php echo esc_attr($data['excerpt']) ?>
               </p>
          </div>

          <div class="button-group mv-1 flex  flex-col">
               <a href='<?= esc_url(get_the_permalink($data['id'])) ?>' class='btn btn-blue w-100 white p-05'>
                    Read more
               </a>
               <a href='<?php echo esc_url(get_field('course_link')) ?>' class='btn w-100 mt-1 p-05 btn-yellow'>
                    Go to course
               </a>
          </div>

     </div>
<?php }
