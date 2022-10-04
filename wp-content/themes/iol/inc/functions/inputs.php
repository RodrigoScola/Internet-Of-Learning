<?php


function newInput($name, $type = 'text', $options = [
     'default_value' => '',

])
{ ?>

     <label class='text-xsm text-title m-0 bold'>
         <?php echo sanitize_text_field($name) ?>
          <input value="<?php echo $options['default_value'] ?>" type='<?php echo $type ?>' class='input mb-1' required />
     </label>

<?php }
