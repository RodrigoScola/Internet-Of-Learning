<article class='account-settings main-content'>
     <?php init_posts() ?>
     <div class=' mv-4 ph-2 gridcol-5 '>

          <?php get_template_part('/components/nav/nav', 'dashboard');

          $currentUser = new User();


          if ($_POST) {
               $currentUser->updateUserInformation($_POST);
          }
          ?>
          <?php

          while (have_posts()) {
               the_post();
               the_content();
          }

          ?>
     </div>
</article>