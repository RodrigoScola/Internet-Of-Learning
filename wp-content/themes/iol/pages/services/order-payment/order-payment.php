<article class="w-70 main-content ">
     <?php init_posts() ?>

     <?php get_template_part('/components/heading/header', 'services') ?>
     <div style="height: 3px;" class="w-100 m-auto bg-lightgray"></div>
     <h1 class="text-title text-lg bold text-center ">Your Order</h1>
     <section class="container flex flex-row flex-between ph-2 pb-1">
          <div>
               <p class="text-title bold text-sm">Your Order</p>
               <p>Internet of learning Premium Subscription</p>
          </div>
          <div>
               <p class="text-title bold text-sm">Price</p>
               <p>$12.34</p>

          </div>
     </section>
     <section>
          <h1 class="text-title text-sm bold">Payment Options</h1>
          <form class="formInput gap-2">
               <div class=" gridcol-3 gap-2">

                    <label class="center-items ph-03 container flex-between">
                         <p class="p-0">
                              <input type='radio' value='creditCard' class="w-fit mt-03" name='payment' />
                              Credit Card
                         </p>
                         <img style='' class="right" src='<?php echo get_theme_file_uri('/images/payment/creditcard.png') ?>' />
                    </label>
                    <label class="center-items ph-03 container flex-between">
                         <p class="p-0">
                              <input type='radio' value='paypall' class="w-fit mt-03" name='payment' />
                              Paypall
                         </p>
                         <img style='' class="right" src='<?php echo get_theme_file_uri('/images/payment/paypall.png') ?>' />
                    </label>
                    <label class="center-items ph-03 container flex-between">
                         <p class="p-0">
                              <input type='radio' value='stripe' class="w-fit mt-03" name='payment' />
                              Stripe
                         </p>
                         <span class="btn btn-round_sharp btn-xsm btn-lightblue-hollow">Powered by <span class="bold">stripe</span></span>
                    </label>
                    <div></div>

               </div>
               <div id='payment-options'>
               </div>
               <div class="flex flex-row mt-1 flex-right ">

                    <button class="btn btn-blue-hollow  ">CANCEL ORDER</button>
                    <button class="btn btn-yellow ml-3 ">Confirm Order</button>
               </div>
          </form>
     </section>
     <div class="divider-lg"></div>
</article>