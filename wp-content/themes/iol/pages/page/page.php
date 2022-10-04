<div class='page main-content'>
     <?php while (have_posts()) {

          $ph = new PageHandler();
          $params = $ph->get_page_params();
          if ($params['act'] == 'reset_password') {
               echo '<div class="password-reset-options">ssa</div>';
          }

          the_post();



          echo '<div class="divider-lg"></div>';

          the_content();
     } ?>
</div>