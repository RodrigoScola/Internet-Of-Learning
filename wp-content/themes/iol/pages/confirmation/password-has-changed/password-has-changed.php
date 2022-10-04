<?php $curruser = new User(); ?>
<div class='main-content confirmation-page thank-you-for-signing-up center-items '>
     <?php
     while (have_posts()) {
          the_post();
     global $post;
     do_action('iol_before_confirmation_post', $post);
          
          
           ?>

          <section>
               <h1 class="text-title text-center bold">
                    <?php echo get_the_title() ?>
               </h1>
               <figure>
                    <img alt='thank you for signing up page' class="center-image" src="<?php echo esc_url(get_theme_file_uri('images/svgs/confirmationImage.png')) ?>" />
               </figure>
               <p class="text text-center text-md">
                    <?php echo get_the_content() ?>
               </p>
               <div class="center">

               <a href='<?php echo esc_url(site_url('/login')) ?>' class="btn btn-yellow zoom-in_hover bold">Click Here To Log In!</a>
               </div>
          </section>
     <?php
     }  ?>



</div>