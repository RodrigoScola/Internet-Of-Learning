<div class='course-card mv-1 '>
     <img class='course-card-image ' src='<?php echo get_the_post_thumbnail_url() ?>' />
     <div class="body">
          <a href="<?php echo esc_url(get_the_permalink()) ?>" class='clearfix text-title text-xsm bold left'>
               <?= sanitize_text_field(get_the_title()) ?>
          </a>


          <p class="p-0 m-0">
               <?php echo get_the_excerpt() ?>
          </p>
     </div>

     <div class="button-group mv-1 flex flex-col">
          <a href='<?= esc_url(get_the_permalink()) ?>' class='btn btn-yellow black h-min w-100 white p-05'>
               Read more
          </a>

     </div>

</div>