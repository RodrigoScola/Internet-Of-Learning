<?php $curruser = new User(); ?>

<div class='main-content confirmation-page thank-you-for-signing-up center-items '>
     <?php init_posts() ?>

     <?php
     while (have_posts()) {
          the_post(); ?>
          <section>
               <h1 class="text-title text-center bold">
                    Thank You <?php echo $curruser->info['username'] ?> For Signing Up!
               </h1>
               <figure>
                    <img alt='thank you for signing up page' class="center-image" src="<?php echo esc_url(get_theme_file_uri('images/svgs/confirmationImage.png')) ?>" />
               </figure>
               <p>
                    Check your e-mail. We have send you a autentication link to access your account. Please also check your spam folder. After setting up your account you can begin adding your course(s).
               </p>
          </section>
     <?php
     }  ?>
</div>