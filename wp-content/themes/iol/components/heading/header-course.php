   <!-- <div class="center-items mr-2">

        <i class="bi  bi-check-lg mr-02 border border-circle border-lightgreen bg-teal   text-title text-md bold ph-03 pv-03 yellow"></i>
        <p class="align-center ">Your Information</p>
   </div> -->

   <section class="flex flex-row w-100 ">
  


        <?php
          if (get_the_title() == 'your-information') { ?>

             <div class="align mr-2">
                  <p class=" mr-03 border border-circle border-lightgreen bg-lightgreen darkgray  text-title text-md bold ph-05 pv-02 white">1</p>
                  <p class="align-center w-fit">Your Information</p>
             </div>
        <?php  } else { ?>
             <div class="center-items mr-2">
                  <i class="bi  bi-check-lg mr-02 border border-circle border-lightgreen bg-teal   text-title text-md bold ph-03 pv-03 yellow"></i>
                  <p class="align-center ">Your Information</p>
             </div>
        <?php }
          ?>

<?php  if (get_the_title() == 'Order Review') { ?>

   <div class="center-items mr-2">

        <i class="bi  bi-check-lg mr-02 border border-circle border-lightgreen bg-teal   text-title text-md bold ph-03 pv-03 yellow"></i>
        <p class="align-center ">Order Payment</p>
   </div>
<?php 
} else { ?>

        <div class="align mr-2">

             <p class=" mr-03 border border-circle border-lightgreen bg-lightgreen darkgray  text-title text-md bold ph-05 pv-02 white">2</p>
             <p class="align-center gray w-fit">Order Payment</p>
        </div>
<?php } ?>


   
        <div class="align mr-2">

             <p class=" mr-03 border border-circle border-lightgreen bg-lightgreen darkgray  text-title text-md bold ph-05 pv-02 white">3</p>
             <p class="align-center gray w-fit">Order Review</p>
        </div>


   </section>