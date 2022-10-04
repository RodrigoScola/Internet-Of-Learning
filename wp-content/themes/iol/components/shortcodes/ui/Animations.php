<?php

class IOL_ANIMATION extends Shortcode
{
     public $defaultAtts = [
          'direction' => 'down'
     ];
     function __construct($animationName, $defaultAtts = [])
     {
          if ($defaultAtts) {
               $this->defaultAtts = $defaultAtts;
          }
          add_shortcode($animationName, [$this, 'renderHtml']);
     }
     public function classHtml($atts, $content = false)
     {
?>
          <div class='slide-<?php echo $atts['direction'] ?> w-10 h-10'>
               <div class="slide-<?php echo $atts['direction'] ?>-element">
                    <?php echo $content ?>
               </div>
          </div>
<?php
     }
}


new IOL_ANIMATION('SlideDown');
new IOL_ANIMATION('SlideUp', [
     'direction' => 'up'
]);
new IOL_ANIMATION('SlideLeft', [
     'direction' => 'left'
]);
new IOL_ANIMATION('SlideRight',[
     'direction' => "right"
]);