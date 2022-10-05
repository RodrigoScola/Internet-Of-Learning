<?php

function slidePart($atts = [], $content = null)
{
     $atts = formatAtts($atts);
     ob_start();
?>
     <div class="<?php echo $atts['class'] ?>">
          <div class="hero-slider__slide ">
               <div class=" hero-slider__interior ">
                    <div class=" hero-slider__overlay ">
                         <?php echo $content ?>
                    </div>
               </div>
          </div>
     </div>
<?php
     $temp = ob_get_contents();
     ob_end_clean();
     return $temp;
}
add_shortcode('Slide', 'slidePart');


function sliderContainer($atts = [], $content = null)
{
     $defaultAtts = [
          'class' => '',
          'id' => ""
     ];
     $nats = formatAtts($atts, $defaultAtts);
     ob_start();
?>
     <div class="<?php echo $nats['class'] ?> ">

          <div id='<?php echo $nats['id'] ?>' class="hero-slider ">
               <div data-glide-el="track" class="glide__track">
                    <div class="glide__slides ">
                         <?php echo do_shortcode($content) ?>
                    </div>
                    <!-- <div class="slider__bullets glide__bullets" data-glide-el="controls[nav]">  -->
               </div>
          </div>
     </div>
     </div>
<?php
     $temp = ob_get_contents();
     ob_end_clean();
     return $temp;
}
add_shortcode('Slider', 'sliderContainer');
