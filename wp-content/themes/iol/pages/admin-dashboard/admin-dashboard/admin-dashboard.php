<div class='admin-dashboard gridcol-6 main-content'>
     <?php init_posts() ?>

     <?php get_template_part('/components/nav/nav-admin-dashboard') ?>
     <section class="griditem-2-5">
          <h1 class="text-title text-lg bold">Dashboard</h1>
          <p>Courses global information</p>
          <section class="gridcol-5 gap">
               <div class="container ph-2 pv-1">
                    <h2 class="text-title text-lg teal bold p-0 m-0"><?php echo wp_count_posts('courses')->publish ?></h2>
                    <p>Number of courses</p>

               </div>
               <div class="container ph-2 pv-1">
                    <h2 class="text-title text-lg teal bold p-0 m-0"><?php echo count_users('time')['total_users'] ?></h2>
                    <p>Number of Free Educators</p>
               </div>
               <div class="container ph-2 pv-1">
                    <h2 class="text-title text-lg teal bold p-0 m-0">00</h2>
                    <p>Number of Premium educators</p>
               </div>
               <div class="container ph-2 pv-1">
                    <h2 class="text-title text-lg teal bold p-0 m-0"><?php echo wp_count_posts('reviews')->publish ?></h2>
                    <p>Number of Reviews</p>
               </div>
               <div class="container ph-2 pv-1">
                    <h2 class="text-title text-lg teal bold p-0 m-0"><?php echo $users['students'] ?></h2>
                    <p>Number of Students</p>
               </div>
          </section>
          <?php $allUsers = new WP_User_Query([
               'role__not_in' => 'administrator',
          ]);
          $currInfo = new User(get_current_user_id());
          ?>
          <section class="mb-5">
               <h2 class="text-title bold text-lg ">Latest Users </h2>
               <table class="">
                    <tr class="text-title bold">
                         <th>Name</th>
                         <th>Organization</th>
                         <th>Courses</th>
                         <th>Account Type</th>
                         <th>Actions</th>
                    </tr>
                    <?php
                    foreach ($allUsers->get_results() as $curruser) {

                         $account_type = 'free';
                    ?>
                         <tr>
                              <td><?php echo $curruser->first_name ?></td>
                              <td>Oranization name</td>
                              <td><?php echo count_user_posts($curruser->ID, 'courses') ?></td>
                              <td><?php echo $account_type ?></td>
                              <td><a href="/admin-dashboard/users/<?php echo $curruser->user_nicename ?>" class="btn btn-yellow btn-md ">Account Details</a></td>
                         </tr>
                    <?php } ?>

               </table>
          </section>
     </section>
</div>