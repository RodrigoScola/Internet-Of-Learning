<div id='page-password-reset' class='center-items confirmation-page main-content'>
     <?php 
          while(have_posts()) {
     the_post();

     ?>
     <section>

     <h1 class="text-title  bold">Forgot Your Password?</h1>
     <?php 

     the_content();

          }
     
     
      ?>

     </section>


</div>