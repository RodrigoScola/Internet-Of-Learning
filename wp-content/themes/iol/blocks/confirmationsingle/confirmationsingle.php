<section class="main-content ph-10 ">

     <div class='ph-3 pv-5'>
          <h1 class="text-title bold text-lg">
               <?php
               $newTitle = str_replace("-", " ", sanitize_title(get_the_title()));
               ?>
               <?php echo $newTitle ?>
          </h1>
          <?php echo the_content() ?>
     </div>
     
</section>