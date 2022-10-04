<div id='logoandSearch' class="w-70  gridcol-6 center-items  ">
     <a class="griditem-1" id='iollogo' href="/">

          <h1 class='text-title bold'>I<?php echo getBrain('white') ?>L</h1>
     </a>

     <form method="GET" action='<?= esc_url(site_url('/search')) ?>' class="griditem-2-5 w-100 ">
          <div class="w-100 search-tab">

               <div class="search-input  w-60">
                    <i class="searchicon bi bi-search yellow"></i>
                    <input id='search_input' autocomplete="off" type="search" name='term' class='' placeholder="What do you want to learn?" />
               </div>
               <button id='header-search-button' class='btn btn-sm btn-yellow btn-round_right w-30' type="submit"><i class="searchicon bi bi-search"></i></button>
          </div>
     </form>

</div>
<div class='page-header-container  center-items'>
     <!-- <select class='shadow'>
               <option>For Educators</option>
          </select> -->
     <a href='<?= is_user_logged_in() ?  esc_url(site_url('/new-course')) : esc_url(site_url('/register')) ?>' class='btn btn-md btn-yellow zoom-in_hover'>Claim Course</a>
     <?php
     if (!is_user_logged_in()) { ?>
          <a href='<?php echo wp_login_url() ?>' class='btn btn-md btn-yellow-hollow '>Log in</a>
     <?php } else { ?>
          <a href='<?php echo sanitize_url(site_url('/dashboard')) ?>' class='btn btn-md btn-yellow-hollow '>Dashboard</a>
          <!-- <div class="select_box"> -->

          <!-- <select> -->
          <!-- <option><?php echo $userdata->info['username']  ?></option> -->
          <!-- </select> -->
          <!-- </div> -->
     <?php } ?>
</div>