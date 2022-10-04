<div class='course-card mv-1 '>
     <img class='course-card-image ' src='<?php echo get_the_post_thumbnail_url() ?>' />
     <div class="body">
          <h5 class='clearfix text-title text-xsm bold left'>
               <?= esc_textarea(get_the_title()) ?>
          </h5>

          
          <div class='inlineflex mt-1'>
         
               <div class="ph-1 mb-02">
                    <?php echo get_difficulty_level() ?>
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
       
     </div>

</div>