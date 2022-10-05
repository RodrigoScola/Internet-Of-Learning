<div id='page-login' class='login main-content'>
     <?php init_posts() ?>

     <?php

     add_action('um_login_form_button_two', function ($text, $args) {

     ?>

     <?php
          return $text;
     }, 10, 2);


     while (have_posts()) {
          the_post();

     ?>

          <h1 class="text-title text-lg text-center bold">Sign In to Internet Of Learning</h1>
          <p class="text-center text-sm">To write a review, you need to set up an account on The Internet of Learning.</p>
     <?php


          the_content();
     }
     ?>
     <p>New to Internet of Learning? <a href="<?php echo esc_url(site_url('/register')) ?>" class="blue">Create an account here</a></p>
</div>