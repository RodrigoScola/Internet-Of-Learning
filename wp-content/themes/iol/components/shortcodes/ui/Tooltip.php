<?php
add_shortcode('Tooltip', 'renderTooltip');


function renderTooltip($atts, $content)
{
     $atts = array_change_key_case($atts, CASE_LOWER);
     $nats = shortcode_atts([
          'text' => '',
          'helper_text' => '',
          'color' => 'gray',
          'position' => '',
          'text_color' => 'black',
     ], $atts);

     ob_start();
?>
     <div class="tp"><?= $content ?: $nats['text'] ?>
          <span class=" tp-text_<?php echo $nats['position']  ?> bg-<?php echo $nats['color'] . ' ' . $nats['text_color']?>  zoom-in"><?php echo $nats['helper_text'] ?></span>
     </div>
<?php
     $temp = ob_get_contents();
     ob_get_clean();
     return $temp;
}
