<main class="main-content">
<?php
$currUser = new User();
     $sanitizedId = sanitize_key($_POST['courseId']);
     if (!empty($sanitizedId)) {
     uploadFiles($_FILES, $sanitizedId);
     }
     if ($sanitizedId || !$currUser->canAddCourse() ) {
          wp_redirect('/dashboard');
     }
?>


     <div data-author="<?php echo $currUser->info['avatar_image'] ?>" class="new-course">
     </div>
</main>