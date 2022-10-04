    <?php

     //     lit 
     // <button class="btn w-fit btn-round_semi btn-blue white">Dashboard</button> 

     //     not
     //     <a href="" style="box-shadow: none" class="btn btn-transparent w-fit greenwhite">Account Settings</a>
     $username = sanitize_text_field(get_query_var('username'));

     $pageTitle = [
          ['title' => 'user details', 'slug' => 'users/' . $username],
          ['title' => 'User Courses', 'slug' => 'users/' . $username .'/courses'],
         
     ];

     global $post;

     $current_slug = $post->post_name;
     ?>
    <section class="griditem-1 pl-1 mt-2 ">
         <?php if ($current_slug == 'dashboard') { ?>

              <button class="btn w-fit btn-round_semi btn-blue white">dashboard</button>

         <?php } else { ?>
              <a href="/admin-dashboard" style="box-shadow: none" class="btn btn-transparent w-fit greenwhite">dashboard</a>
              <?php }


          foreach ($pageTitle as $item) {
               if ($current_slug == $item['slug']) { ?>

                   <button class="btn w-fit btn-round_semi btn-blue white"><?php echo $item['title'] ?></button>

              <?php } else { ?>
                   <a href="/admin-dashboard/<?php echo $item['slug'] ?>" style="box-shadow: none" class="btn btn-transparent w-fit greenwhite"><?php echo $item['title'] ?></a>
         <?php }
          }

          ?>



    </section>