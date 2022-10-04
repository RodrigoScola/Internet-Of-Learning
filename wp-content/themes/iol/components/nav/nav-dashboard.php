    <?php

     //     lit 
     //    <button class="btn w-fit btn-round_semi btn-blue white">Dashboard</button> 

     //     not
     //     <a href="" style="box-shadow: none" class="btn btn-transparent w-fit greenwhite">Account Settings</a>


     $courseid = sanitize_key(get_query_var('courseid'));

     $pageTitle = [
          ['title' => 'My Courses', 'slug' => 'my-courses', 'icon' => 'IconHat'],
          ['title' => 'Account Settings', 'slug' => 'account-settings', 'icon' => 'IconSettings'],
          // ['title' => 'Course Settings', 'slug' => 'course-settings', 'icon' => 'ArrowUp'],

     ];

     global $post;
     $current_slug = $post->post_name;
?>
    <section class="nav-dashboard text-left ">
         <?php if (!is_single()) { ?>

              <div id='dashboard' class="btn  btn-round_semi text-left btn-blue white">[IconDashboard class='pr-03']
                  </div>

         <?php } else { ?>
              <a  href="/dashboard" style="box-shadow: none" class="btn btn-transparent greenwhite">[IconDashboard id='dashboard' class='pr-03']</a>
              <?php }


          foreach ($pageTitle as $item) {
               if ($current_slug == $item['slug'] && is_single()) { ?>

                   <button class="btn  btn-round_semi btn-blue white"><?php echo '[' . $item['icon'] . ' class="pr-03" id="' .$item['slug'].  '" ]' ?></button>

              <?php } else { ?>
                   <a href="/dashboard/<?php echo $item['slug'] ?>" style="box-shadow: none" class="btn btn-transparent greenwhite"><?php echo '[' . $item['icon'] . ' class="pr-03 " id="' . $item['slug'] . '" ]' ?></a>

         <?php }
          }
          if ($courseid || $current_slug == 'course-settings') {
               get_template_part('/components/nav/nav-dashboard-course');
          }
          ?>

         <a href='/logout' class="btn  btn-round_semi  btn-red-hollow ">
          [IconClose id='logout' ] </a>
         <!-- logout button -->

    </section>