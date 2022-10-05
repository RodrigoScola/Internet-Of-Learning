<div id="page-register" class='main-content '>
     <?php init_posts() ?>

     <?php
     if (is_user_logged_in()) {
          wp_redirect(esc_url(site_url('/dashboard')));
     }
     while (have_posts()) {




          the_post();
     ?>
          <h1 class="text-title text-center text-lg bold">Sign up to Internet of Learning</h1>
          <p class="">If you want to leave a review or list your course on Internet of Learning you first need to set up your account</p>


          <div>

               <?php the_content() ?>
               <p>Already a member? <a href="<?php echo esc_url(site_url('/login')) ?>" class="blue">Log in here</a></p>
          </div>
     <?php
     } ?>
</div>