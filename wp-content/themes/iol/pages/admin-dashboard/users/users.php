<div class='main-content admin-dashboard gridcol-6'>
     <?php get_template_part('components/nav/nav', 'admin-dashboard')     ?>
     <section class="griditem-2-5 mr-4">
          <h1 class="text-title text-lg bold">Users</h1>
          <form method="GET" action="<?= esc_url(site_url('/admin-dashboard/users/')) ?>" class="search-tab search-tab-full w-60">

               <div class="search-input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input class='input' name='user' type="search" class="w-100" placeholder="username" />
               </div>
               <button class='btn btn-sm btn-yellow btn-round_right' type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00000" class="bi bi-search" viewBox="0 0 16 16">
                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg><span>Find Users</span></button>
          </form>
          <div class="clearfix mt-2">
               <a id='change-mode' href='' class="bg-blue p-06 btn-round_semi right inlineblock mt-05 mh-02">
                    <span class="dashicons dashicons-align-right right  white"></span>
               </a>
               <select class="right">
                    <option>Educator Free</option>
               </select>
          </div>
          <section class="mv-5">
               <?php
               $username = sanitize_key($_GET['user']);
               $args = [
                    'role__not_in' => 'administrator'
               ];
               if ($username) {
                    $args['search'] = $username;
                    $args['search_columns'] = [
                         'user_login',
                         'user_nicename',
                         'user_email',
                         'user_url',
                    ];
               }
               $user_query = new WP_User_Query($args);
               $courseQ = new WP_Query([
                    'post_type' => 'courses',
                    's' => $username,
               ])
               ?>
               <table class="">
                    <tr class="text-title bold">
                         <th>Name</th>
                         <th>Organization</th>
                         <th>Courses</th>
                         <th>Account Type</th>
                         <th>Actions</th>
                    </tr>
                    <?php if (!empty($user_query->get_results())) {
                         foreach ($user_query->get_results() as $user) {
                              $currUser = new User($user->ID);

                    ?>

                              <tr>
                                   <td><?= $user->display_name ?></td>
                                   <td>Oranization name</td>
                                   <td>2</td>
                                   <td><?php echo $currUser->account_type() ?></td>
                                   <td><a href="/admin-dashboard/users/<?php echo $user->user_nicename ?>" class="btn btn-yellow btn-md ">Account Details</a><button class="ml-02 btn btn-red white bold btn-md">Remove</button></td>
                              </tr>
                         <?php }
                    }
                    wp_reset_postdata();
echo '<h1>Courses</h1>'; 
                    while ($courseQ->have_posts()) {
                         $courseQ->the_post();
                         ?>

                         <tr>
                              <td><?= the_title() ?></td>
                              <td>Oranization name</td>
                              <td><?php echo get_field('average') ?></td>
                              <td><?php echo get_field('total_reviews') ?></td>
                              <td><a href="/admin-dashboard/users/<?php echo $user->user_nicename ?>" class="btn btn-yellow btn-md ">Account Details</a><button class="ml-02 btn btn-red white bold btn-md">Remove</button></td>
                         </tr>

                    <?php    } ?>



               </table>
          </section>
     </section>
</div>