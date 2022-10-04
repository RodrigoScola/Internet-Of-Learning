   <!-- <div class="center-items mr-2">

        <i class="bi  bi-check-lg mr-02 border border-circle border-lightgreen bg-teal   text-title text-md bold ph-03 pv-03 yellow"></i>
        <p class="align-center ">Your Information</p>
   </div> -->

   <section class="flex flex-row w-100 ">
        <?php
          $currentId = get_the_ID();
          $pages = new WP_Query([
               'posts_per_page' => -1,
               'post_type' => 'services',
               'order' => 'asc'
          ]);
          $count = 1;
          while ($pages->have_posts()) {
               $pages->the_post();

               if ($currentId <= get_the_ID()) {
          ?>

                  <div class="align mr-2">
                       <p class=" mr-03 border border-circle border-lightgreen bg-lightgreen darkgray  text-title text-md bold ph-04 pv-01 white"><?php echo $count ?></p>
                       <p class="align-center <?php echo $currentId == get_the_ID() ?  'black' : 'gray' ?> w-fit"><?php the_title() ?></p>
                  </div>


             <?php
               } else { ?>
                  <div class="center-items mr-2">
                       <i class="bi  bi-check-lg mr-02 border border-circle border-lightgreen bg-teal   text-title text-md bold ph-02 pv-01 yellow"></i>
                       <p class="align-center "><?= the_title() ?></p>
                  </div>

        <?php }
               $count++;
          }
          wp_reset_postdata();
          ?>
   </section>