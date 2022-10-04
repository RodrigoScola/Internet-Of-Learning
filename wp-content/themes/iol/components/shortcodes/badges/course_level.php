<?php 



          // add_shortcode($iconname, [$this, 'iconinit']);

class Level {
     public $level;
     public $icon;

     function __construct($level, $icon)
     {
          $this->level = $level;
          $this->icon = $icon;

          add_shortcode($this->level, [$this, 'initlevel']);
     }
     function initLevel() {

          ob_start();
          ?>
          <div class=''>
             <?php echo do_shortcode('[' . $this->icon . ']') ?> <?php echo ucfirst(str_replace('_', ' ', $this->level)) ?>
          </div>
<?php 
     $temp = ob_get_contents();
          ob_end_clean();
          return $temp;
     }
}
new Level('all_levels', 'IconDifficulty1');
new Level('beginner', 'IconDifficulty2');
new Level('intermediate','IconDifficulty3');
new Level('advanced', 'IconDifficulty4');
