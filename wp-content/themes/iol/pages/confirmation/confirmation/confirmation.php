<?php $curruser = new User(); ?>
<div class='main-content confirmation-page thank-you-for-signing-up center-items '>
     <?php
     while (have_posts()) {
          the_post(); ?>


          <?php do_action('iol_before_confirmation_post',$post) ?>

          <section>
               <h1 class="text-title text-center bold">
                    Your Password has changed
               </h1>
               <figure>
                    <img alt='thank you for signing up page' class="center-image" src="<?php echo esc_url(get_theme_file_uri('images/svgs/confirmationImage.png')) ?>" />
               </figure>
               <p class="text text-center text-md">
               <?php echo get_the_content() ?>
               </p>
          </section>
     <?php
     }  ?>



</div>