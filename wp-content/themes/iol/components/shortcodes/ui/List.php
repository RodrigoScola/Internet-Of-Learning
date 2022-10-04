<?php

add_shortcode("List", 'listShortCode');


function listShortCode($atts = [], $content)
{

     $atts = array_change_key_case((array)$atts, CASE_LOWER);

     $nats = shortcode_atts([
          'items' => '',
          'icon' => '',
          'min' => '',
     ], $atts);

     ob_start(); ?>
     <ul class="min-list<?php echo $nats['min'] == 'true' ? '-sm' : ''  ?>">
          <?php
          $items = explode(',', $nats['items']);
          foreach ($items as $item => $v) { ?>
               <li class="align-center  center-items">
                    <div>
                         <?php echo do_shortcode('[' . $nats['icon'] . ']') ?></div>
                    <p class="pl-03"><?php echo sanitize_text_field($v) ?></p>
               </li>



          <?php
          }


          ?>
     </ul>

<?php
     $temp = ob_get_contents();
     ob_end_clean();
     return $temp;
}
