<article class='account-settings  mv-4 ph-2 gridcol-5 main-content'>
     <?php init_posts() ?>

     <?php get_template_part('/components/nav/nav', 'dashboard');

     $currentUser = new User();


     if ($_POST) {
          $currentUser->updateUserInformation($_POST);
     }
     ?>
     <section class="dsboard-content mr-2 griditem-2  griditem-2-4">
          <h1 class="text-title bold text-lg">
               Account Settings
          </h1>
          <p>Your account details are listed here.</p>
          <section>
               <p class="text-title bold text-xsm">Account information</p>
               <form action='<?php esc_url(site_url() . '/dashboard/account-settings') ?>' method="POST" class="formInput">
                    <?php
                    if ($currentUser->account_type() == 'premium') { ?>
                         <label class='text-xsm text-title m-0 bold'>
                              Account Type
                              <input value='<?php echo $currentUser->account_type() ?>' class='input mb-1' disabled />
                         </label>
                         <button class="btn white btn-red bold">Cancel Subscription</button>
                    <?php } else { ?>
                         <label class='text-xsm text-title m-0 bold'>
                              Account Type
                              <input value='<?php echo  $currentUser->account_type() ?>' class='input mb-1' disabled />
                         </label>
                         <button class="btn  btn-yellow">Upgrade Account Type</button>
                    <?php } ?>
                    <p class="text-title text-xsm bold">Your information</p>
                    <label class='text-xsm text-title m-0 bold'>
                         First Name
                         <input name='first_name' value='<?php echo $currentUser->info['first_name'] ?>' class='input mb-1' required />
                    </label>
                    <label class='text-xsm text-title m-0 bold'>
                         last Name
                         <input name='last_name' value='<?php echo $currentUser->info['last_name'] ?>' class='input mb-1' required />
                    </label>
                    <label class='text-xsm text-title m-0 bold'>
                         Email
                         <input disabled value='<?php echo $currentUser->info['email'] ?>' class='input mb-1' type="email" required />
                    </label>
                    <!-- <label class='text-xsm text-title m-0 bold'>
                         Phone Number
                         <input value='+314596033030494' class='input mb-1' type="tel" required />
                    </label> -->
                    <!-- <label class='text-xsm text-title m-0 bold'>
                         Password
                         <input value='James@gmail.com' class='input mb-1' type="password" required />
                    </label> -->
                    <div class="clearfix">
                         <button type="submit" class="right btn btn-yellow mr-3 m-0 bold">Submit Information</button>
                         <a href='<?php echo esc_url(site_url('/password-reset')) ?>' class=" btn btn-blue-hollow mv-3 mr-1 bold">Change Password</a>
                    </div>
               </form>
          </section>
     </section>
</article>