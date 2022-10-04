<?php

add_shortcode("Details", 'detailsShortCode');


function detailsShortCode($atts = [], $content)
{

     $atts = array_change_key_case((array)$atts, CASE_LOWER);

     $nats = shortcode_atts([
          'title' => 'Sample title',

     ], $atts);

     ob_start(); ?>
     <details class='accordion p-1 '>
          <summary class='text-title  bold text-sm'><?php echo $nats['title'] ?></summary>
          <div class='accordion-panel'>
               <p class='subtitle-sm left'>
                    <?php echo esc_textarea($content) ?>
               </p>
          </div>
     </details>

<?php
     $temp = ob_get_contents();
     ob_end_clean();
     return $temp;
}
