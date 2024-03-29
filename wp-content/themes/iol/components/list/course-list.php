<div class='course-card mv-1 m-auto zoom-in_hover'>
     <img class='course-card-image ' src='<?php echo get_the_post_thumbnail_url() ?>' />
     <div class="body">
          <a href="<?php esc_url(get_the_permalink()) ?>" class='clearfix mv-1 text-title text-xsm bold left'>
               <?= sanitize_text_field(get_the_title()) ?>
          </a>

          <?php echo renderReviewCount(get_field('average'), get_field('total_reviews')) ?>
          <div class='inlineflex mt-1'>
               <div>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5 0C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10C7.75 10 10 7.75 10 5C10 2.25 7.75 0 5 0ZM7.1 7.1L4.5 5.5V2.5H5.25V5.1L7.5 6.45L7.1 7.1Z" fill="#282828" />
                    </svg>
                    <?= get_field('time_investment') ?> hours
               </div>
               <div class="ph-1 mb-02">
                    <?php echo get_difficulty_level() ?>
               </div>
               <div>
                    <span class="dashicons dashicons-admin-site-alt3"></span>
                    <?php echo get_field('language_setting') ?>
               </div>
          </div>
          <p class="p-0 m-0">
               <?= sanitize_text_field(get_the_excerpt()) ?>
          </p>
     </div>

     <div class="button-group mv-1 flex flex-col">
          <a href='<?= esc_url(get_the_permalink()) ?>' class='btn btn-blue w-100 white p-05'>
               Read more
          </a>
          <a href='<?php echo esc_url(get_field('course_link')) ?>' class='btn w-100 mt-1 p-05 btn-yellow'>
               Go to course
          </a>
     </div>

</div>