<?php


function formatAtts($atts = [], $defaultAtts = [])
{
     $df = [
          'class' => '',
          'id' => '',
     ];
     $defaultAtts = wp_parse_args($defaultAtts, $df);
     $atts = array_change_key_case((array)$atts, CASE_LOWER);
     $nats = shortcode_atts($defaultAtts, $atts);
     return $nats;
}

class Shortcode
{
     public $defaultAtts;


     public function formatAtts($atts = [], $defaultAtts = [])
     {
          if ($defaultAtts == []) {
               $defaultAtts = $this->defaultAtts;
          }
          $atts = array_change_key_case((array)$atts, CASE_LOWER);
          $nats = shortcode_atts($this->defaultAtts, $atts);
          return $nats;
     }
     public function classHtml($atts, $content)
     {
          return null;
     }
     public function renderHtml($atts = [], $content = false)
     {
          $nats = formatAtts($atts, $this->defaultAtts);
          ob_start();
          $this->classHtml($nats, $content);
          return ob_get_clean();
     }
}
add_shortcode('LastPageS', 'renderLastPage');

function renderLastPage($atts = null, $content)
{
     ob_start();

?>
     <input style="display: none;" type='radio' name='last_page' value='<?php sanitize_text_field(get_query_var('path')) ?>' checked />


<?php
     $temp = ob_get_clean();
     return $temp;
}
add_shortcode('UserData', 'renderUserData');
function renderUserData($atts = null)
{
     $userdat = new User();

     $nats = shortcode_atts([
          'type' => ''
     ], $atts);

     return esc_attr($userdat->info[$nats['type']]);
}
