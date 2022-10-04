<?php 

add_shortcode('InputSelect', 'selectShortcode');

function selectShortcode($atts = []) {
     $atts = array_change_key_case((array)$atts, CASE_LOWER);
     $newAtts = shortcode_atts([
          'label' => "",
          'options' => [
               [
               'text' => '',
               'value' => '',
               'name' => '',
               ]
          ],
          
     ], $atts);


ob_start();
?>
     <label>

     <select>
          <option></option>
     </select>
     </label>
<?php 
$temp = ob_get_contents();
ob_end_clean();

return $temp;



}