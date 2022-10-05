<?php

class ButtonShortCode extends Shortcode
{
     public $buttonName;

     public $defaultAtts;
     function __construct($name, $options = [
          'class' => '',
          'href' => '#',
          'text' => '',
          'callback' => '',
          'id' => ''
     ])
     {

          $this->buttonName = $name;
          $options['id'] = $options['id'] == '' ? $name : $options['id'];
          $this->defaultAtts = $options;
          add_shortcode($name, [$this, 'buttonInit']);
     }
     function buttonInit($atts = [], $content)
     {
          $this->defaultAtts = apply_filters('iol_button_change_atts', $this->formatAtts($atts));


          return '<a id=' . $this->defaultAtts['id'] . ' class=" ' . $this->defaultAtts['class'] .  '" href="' . $this->defaultAtts['href'] . '" >' . $this->defaultAtts['text'] . '</a>';
     }
}

class ChangeMode extends ButtonShortCode
{
     function __construct($name, $options = [
          'class' => '',
          'href' => '#',
          'text' => '',
          'id' => ''
     ])
     {

          $this->buttonName = $name;
          $this->defaultAtts = $options;
          add_shortcode($name, [$this, 'buttonInit']);
     }
     function buttonInit($atts = [], $content)
     {






          ob_start();
?>
          <a id='<?= $this->defaultAtts["id"] ?>' class="<?php echo $this->defaultAtts['class'] ?> bg">
               <span class="dashicons dashicons-align-right white"></span>
          </a>
<?php
          $temp = ob_get_contents();
          ob_end_clean();
          return $temp;
     }
}




function buttonShortCodes()
{
     add_shortcode('ChangeMode', 'render_change_mode_shortcode');

     new ChangeMode('ChangeMode', [
          'class' => 'bg-blue white p-06 btn-round_semi  mh-1',
          'id' => 'change-mode',

     ]);

     new ButtonShortCode('ListCourse', [
          'class' => 'btn btn-yellow bold',
          'href' => esc_url(site_url()) . '/new-course',
          'text' => 'List My Course',
          'id' => 'list_course'
     ]);
     new ButtonShortCode('FindMyCourse', [
          'class' => 'btn bg bold ',
          'href' => esc_url(site_url('/courses')),
          'text' => "FIND MY COURSE"
     ]);
     new ButtonShortCode('LogoutButton', [
          'class' => "btn btn-red-hollow",
          'href' => esc_url(site_url('/logout')),
          'text' => "Log out"
     ]);
}
add_action('init', 'buttonShortCodes');

add_filter('iol_button_change_atts', function ($atts) {
     if ($atts['id'] == 'list_course' && !is_user_logged_in()) {
          $atts['href'] = esc_url(site_url('/register/?path=educator'));
     }

     return $atts;
}, 10, 2);
