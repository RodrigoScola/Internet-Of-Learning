    <?php

     //     lit 
     //    <button class="btn w-fit btn-round_semi btn-blue white">Dashboard</button> 

     //     not
     //     <a href="" style="box-shadow: none" class="btn btn-transparent w-fit greenwhite">Account Settings</a>

     $pageTitle = [
          ['title' => 'reviews', 'slug' => 'course-reviews', 'icon' => 'IconChat'],
          ['title' => 'widgets', 'slug' => 'course-widgets', 'icon' => 'IconWidget'],
     ];

     global $post;
     $current_slug = $post->post_name;
     ?>
    <section class=" ">
         <?php
          foreach ($pageTitle as $item) {
               if ($current_slug == $item['slug'] && is_single()) { ?>

                   <button class="btn w-fit btn-round_semi btn-blue white"><?php echo '[' . $item['icon'] . ']' .  $item['title'] ?></button>

              <?php } else { ?>
                   <a href=" <?= esc_url(site_url()) ?>/dashboard/course-settings/course-reviews/?courseid=<?php echo sanitize_key(get_query_var('courseid')) ?>" style="box-shadow: none" class="btn align btn-transparent w-fit greenwhite"><?php echo '[' . $item['icon'] . ']' .  $item['title'] ?></a>
         <?php }
          }
          ?>
    </section>