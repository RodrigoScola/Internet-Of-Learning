<?php 

class ButtonShortCode {
     public $buttonName;
     private $buttonOptions;
     function __construct($name, $options = [
          'class' => '',
          'href' => '#',
          'text' => ''
     ])
     {
          $this->buttonName = $name;
          $this->buttonOptions = $options;
          add_shortcode($name, [$this, 'buttonInit']);
     }
     function buttonInit() {
          return '<a class=" ' . $this->buttonOptions['class'] .  '" href="' . $this->buttonOptions['href'] . '" >' . $this->buttonOptions['text'] . '</a>'; 
     }
}

function buttonShortCodes() {
     new ButtonShortCode('ListCourse', [
          'class' => 'btn btn-yellow bold',
          'href' => esc_url(site_url()) . '/new-course',
          'text' => 'List My Course'
     ]);
}
add_action('init', 'buttonShortCodes');
