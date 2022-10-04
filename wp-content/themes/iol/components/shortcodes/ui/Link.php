<?php


class Link extends Shortcode
{
     public $defaultAtts = [
          'class' => 'green underline',
          'href' => '#post_start',

     ];
     // needs to have that blank space
     // for nofill the code is IconDifficulty0
     public $iconName;

     function __construct($iconName)
     {
          $this->iconName = $iconName;
          add_shortcode($this->iconName, [$this, 'renderHtml']);
     }
     function classHtml($atts, $content)
     {
?>
          <a href="<?php echo $atts['href'] ?>" class="<?php echo $atts['class'] ?>"><?php echo $content ?></a>
     <?php
     }
}
new Link('Link');

class Target extends Shortcode
{
     public $defaultAtts = [
          'class' => '',
          'id' => 'post_start',
          'new_page' => "false"
     ];
     // needs to have that blank space
     // for nofill the code is IconDifficulty0
     public $iconName;

     function __construct($iconName)
     {
          $this->iconName = $iconName;
          add_shortcode($this->iconName, [$this, 'renderHtml']);
     }
     function classHtml($atts, $content)
     {
     ?>
          <a <?php echo $atts['new_page'] == 'true' ? 'target="_blank" rel="noreferrer noopener"' : '' ?> id="<?php echo $atts['id'] ?>" class="<?php echo $atts['class'] ?>"><?php echo $content ?></a>
<?php
     }
}
new Target('Target');
