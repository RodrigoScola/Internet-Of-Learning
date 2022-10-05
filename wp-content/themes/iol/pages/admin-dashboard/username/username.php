    <?php get_template_part('/blocks/header/header'); ?>
    <link rel="stylesheet" href="<?php echo get_theme_file_uri('build/index.css') ?>">
    <link rel="stylesheet" href="<?php echo get_theme_file_uri('build/style-index.css') ?>">
    <div class='admin-dashboard main-content gridcol-6'>
         <?php init_posts() ?>

         <?php get_template_part('components/nav/nav', 'admin-dashboard-user')     ?>
         <?php
          $userdata = new User(sanitize_key(get_query_var('username')));

          if ($userdata->userId == null) {
               echo 'this user doesnt exist';
          }
          $account_type = $userdata->account_type();
          // var_dump(get_query_var('pagename'));



          ?>
         <section class="griditem-2-5 mh-2 mb-2">
              <h1 class="text-title text-lg bold"><?php echo $userdata->info['full_name'] ?> (free)</h1>
              <p class="text-title text-sm bold">User Information</p>
              <form class="formInput gridcol-2 gap">
                   <label class='text-xsm text-title m-0 bold'>
                        *First name
                        <input value="<?php echo $userdata->info['first_name'] ?>" class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Last name
                        <input value="<?php echo $userdata->info['last_name'] ?>" class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Email
                        <input type="email" value="<?php echo $userdata->info['email'] ?>" class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Phone Number
                        <input type="tel" class='input mb-1' required />
                   </label>
                   <p class="text-title text-sm bold griditem-1-2">Account Information</p>
                   <label class='text-xsm text-title m-0 bold'>
                        *Account Type
                        <input type="" value="<?php echo $account_type ?>" disabled class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Account Created at
                        <input type="" value="<?php echo date('d/m/Y', strtotime($userdata->info['registered'])); ?>" class='input mb-1' required />
                   </label>
                   <label class='clearfix text-xsm text-title m-0 bold'>
                        User profile Image
                        <input type="file" class='input mb-1' required value="<?php echo esc_url(get_avatar_url($userdata->userId)) ?>" />
                        <button class="btn btn-red btn-round_semi white bold right">Remove</button>

                   </label>
                   <label>
                        <p class="text-title text-sm bold">Preview</p>
                        <img class='profile-image' src='<?php echo esc_url(get_avatar_url($userdata->userId)) ?>' />
                   </label>
                   <div class="griditem-1-2 mt-3 center">

                        <button class=" btn btn-yellow bold">
                             Submit information
                        </button>
                   </div>
              </form>
         </section>
    </div>
    <div class='main-content admin-dashboard gridcol-6'>
         <?php get_template_part('components/nav/nav', 'admin-dashboard-user')     ?>
         <section class="griditem-2-5 mh-2 mb-2">
              <h1 class="text-title text-lg bold"><?php echo $userdata->info['full_name'] ?> (premium)</h1>
              <p class="text-title text-sm bold">User Information</p>
              <form class="formInput gridcol-2 gap">
                   <label class='text-xsm text-title m-0 bold'>
                        *First name
                        <input class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Last name
                        <input class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Email
                        <input class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Phone Number
                        <input type="tel" class='input mb-1' required />
                   </label>
                   <p class="text-title text-sm bold griditem-1-2">Account Information</p>
                   <label class='text-xsm text-title m-0 bold'>
                        *Account Type
                        <input class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Account Created at
                        <input type="number" value='' class='input mb-1' required />
                   </label>
                   <label class='clearfix text-xsm text-title m-0 bold'>
                        User profile Image
                        <input type="file" class='input mb-1' required />
                        <button class="btn btn-red btn-round_semi white bold right">Remove</button>
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Subscription Expriation date
                        <input type="date" class='input mb-1' required />
                   </label>
                   <label class='text-xsm text-title m-0 bold'>
                        *Payment type
                        <input type="" class='input mb-1' required />
                   </label>
                   <div class="griditem-1-2 mt-3 center">

                        <button class=" btn btn-yellow bold">
                             Submit information
                        </button>
                        <button class=" btn btn-red bold white">
                             Cancel Subscription
                        </button>
                   </div>
              </form>
         </section>
    </div>
    <?php get_template_part('/blocks/footer/footer'); ?>