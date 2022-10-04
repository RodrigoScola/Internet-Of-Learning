<article class="w-70 m-auto main-content">
     <?php $currUser = new User()  ?>
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
     <section class="mt-4">
          <h1 class="text-title bold text-sm">Your Information</h1>
          <form class="formInput">
               <?php newInput('*First Name', 'text',[
                    'default_value' => $currUser->info['first_name']
               ]) ?>
               <?php newInput('*Last Name','text', [
                    'default_value' => $currUser->info['last_name']
               ])  ?>
               <?php newInput('*Email', 'email', [
                    'default_value' => $currUser->info['email']
               ]) ?>
               <?php newInput('*Phone Number ', 'tel') ?>
               <div class="clearfix">
                    <a type="submit" class="right btn btn-yellow ml-1 p-08 bold">NEXT STEP</a>
                    <a href='<?php echo site_url() ?>' class="right btn btn-blue-hollow p-08 bold">CANCEL ORDER</a>
               </div>
          </form>
     </section>
     <div class="divider-lg"></div>
</article>