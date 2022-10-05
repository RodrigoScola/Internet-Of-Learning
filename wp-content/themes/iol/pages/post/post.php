<div id='single-post' class='ph-3 post main-content'>
     <?php init_posts() ?>

     <?php
     while (have_posts()) {
          the_post();

     ?>
          <h1 class="text-title text-center bold"><?php echo esc_attr(get_the_title()) ?></h1>

     <?php


          the_content();

          get_template_part('/components/cards/author-card');
     }

     ?>
</div>