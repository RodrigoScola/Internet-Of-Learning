<main>
     <?php
     $message = [
          'type' => null,
          'payload' => null,
          'content' => null,
          "header" => null,
     ];

     // types
     // recoverysent - when the user receives an recovery email
     // passwordchange - when the user successfully changes password
     // signup - when the user signs up 

     // to do, change to receive the user id and then look it up and not send the information by url
     if ($_GET['type']) {
          $message['type'] = sanitize_text_field($_GET['type']);
          if ($message['type'] == 'recoverysent') {
               $message['email'] = sanitize_text_field($_GET['email']);
          } else if ($message['type'] == 'signup') {
               $message['email'] = sanitize_text_field($_GET['email']);
               $message['name'] =
                    sanitize_text_field($_GET['username']);
          }
     }
     switch ($message['type']) {
          case 'recoverysent  ':
               $message['header'] = "Your recovery link has been send!";
               $message['content'] = "We have sent a recovery link to {$message['email']}. Please make sure to also check your spam folder in case it didn`t land in your inbox.";
               break;
          case 'signup':
               $message['header'] = "Thank you {$message['name']} For Signing up";
               $message['content'] = "Check your e-mail {$message['email']}. We have send you a autentication link to access your account. Please also check your spam folder.";
               break;
          case "passwordchange":
               $message['header'] = 'Your password has been changed';
               $message['content'] = 'You can now use your new password to log in';
               break;
          default:
               $message['content'] = 'something went wrong';
     }



     ?>
     <section>
          <div class='divider-lg'></div>
          <h1 class='title'><?php echo $message['header'] ?></h1>
          <img src='<?php echo get_theme_file_uri('/images/svgs/hero-image.png') ?>' />
          <p class="subtitle subtitle-sm">
               <?php echo $message['content'] ?>
          </p>
          <?php
          if ($message['type'] == 'passwordchange') {
          ?>
               <button class="btn btn-lg btn-yellow bold">LOGIN INTO MY ACCOUNT</button>
          <?php } ?>

     <?php echo get_stylesheet_directory_uri(__FILE__) . '/build/front.js' ?>

     </section>
     <div class='divider-lg'></div>
</main>