<section class="griditem-1 pl-1 mt-2 left">
     <?php
global $current_user;
if (!in_array('administrator', $current_user->roles)) {
wp_redirect('/');
}

      ?>
     <button class="btn btn-round_semi btn-blue white">Back to user list</button>
     <button style="box-shadow: none" class="btn btn-transparent greenwhite">User details</button>
     <button style="box-shadow: none" class="btn btn-transparent greenwhite">Course details</button>
</section>