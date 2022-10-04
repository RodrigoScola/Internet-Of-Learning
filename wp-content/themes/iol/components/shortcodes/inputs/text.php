


 <?php


     class Input
     {
          public $inputName;
          private $options;

          function __construct($name)
          {
               $this->inputName = $name;
               add_shortcode($name, [$this, 'renderHtml']);
          }
          function renderHtml($atts = [])
          {
               $atts = array_change_key_case((array)$atts, CASE_LOWER);
               $buttonAtts = shortcode_atts([
                    'text' => '',
                    'icon' => '',
                    'iconclass' => '',
               ], $atts);

               ob_start();
     ?>
           <label className="clearfix ">
                <p class="text-title text-xsm bold"><?php echo $buttonAtts['text'] ?></p>
                <div class="center-items">
                     <?php
                         if ($atts['icon']) { ?>
                          <input class="input" />
                          <button class="btn p-06 m-04 <?php echo $buttonAtts['iconclass'] ?>">
                              <?php echo do_shortcode('[' . $buttonAtts['icon'] . ']') ?>
                          </button>
                     <?php
                         } else { ?>
                          <input class="input" />


                     <?php
                         } ?>
                </div>
           </label>

 <?php
               $temp = ob_get_contents();
               ob_end_clean();
               return $temp;
          }
     }

new Input('InputText');