<?php


class Tag
{
     public $tagName;
     private $presets;
     function __construct($iconname, $presets = [
          'text' => '',
          'icon' => '',
          'iconClass' => '',
          'tagclass' => ''
     ])
     {
          $this->tagName = $iconname;
          $this->presets = $presets;
          add_shortcode($iconname, [$this, 'iconinit']);
     }

     function iconinit($atts = [])
     {

          $atts = array_change_key_case((array)$atts, CASE_LOWER);
          $nats = shortcode_atts([
               'class' => '',
               'text' => $this->presets['text'],
               'icon' => $this->presets['icon'],
               'tagclass' => $this->presets['tagclass'],
          ], $atts);


          ob_start();
?>

          <div class='tag  <?php echo $this->tagName ?>'>
               <?php if ($nats['icon']) { ?>
                    <div class="tag-icon <?php echo $this->presets['iconClass'] ?>"> <?php echo do_shortcode('[' . $nats['icon'] . ']') ?>
                    </div>
               <?php } ?>

               <div class="tag-text <?php echo $nats['tagclass'] ?>"><?php echo $nats['text'] ?></div>
          </div>

     <?php
          return ob_get_clean();
     }
}

class DifficultyTag extends Shortcode
{
     public $defaultAtts = [
         'level' => ''
     ];
     // needs to have that blank space
     // for nofill the code is IconDifficulty0
     private static  $allLevels = ['','beginner', 'intermediate', 'advanced'];
     public $iconName;
     public static function getIcon($level) {
          $item = 'IconDifficulty';
          $lvl = array_search(strtolower($level), DifficultyTag::$allLevels);
          return do_shortcode('['.$item . $lvl .']');
     }
     function __construct($iconName)
     {
          $this->iconName = $iconName;
          add_shortcode($this->iconName, [$this, 'renderHtml']);
     }
     function classHtml($atts, $content)
     {
          $level = $atts['level'];
          ?>
          <a><?php echo DifficultyTag::getIcon($level) . ucfirst($level) ?></a>
          <?php 
     }
}
function get_difficulty_level($level = null, $post_id = null) {
     if ($level == null) {
          $level = get_field('level', $post_id ? $post_id : null);
     }
     // [DifficultyTag level='<?= get_field('level')']
 echo    do_shortcode('[DifficultyTag level="' . $level . '" ]');
}



function initTags()
{
     new DifficultyTag('DifficultyTag');
     new Tag('Tag');
     new Tag('TagVerified', [
          'text' => "IOL Verified",
          'icon' => "IconCheckFilled class='yellow'",
          'iconClass' => 'bg-teal_dt'
     ]);
     new Tag('TagPremiumMember', [
          'text' => 'Premium Member',
          'icon' => "IconCheckFilled class='yellow'",
          'iconClass' => "bg-blue_dt"
     ]);
     new Tag('TagCourseClaimed', [
          'text' => 'Course Claimed'
     ]);
}
add_action('init', 'initTags');


add_shortcode('LastPage', 'returnLastPageType');
