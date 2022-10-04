<?php

function renderWidgetList($text = 4)
{ ?>
     <div class="container ph-1 pb-1 mb-2 ">
          <h1 class="text-title text-sm bold">Widget Name</h1>
          <div class="pv-02 border border-gray flex flex-row maxh-3 ">
               <p class="mt-01 "><?php echo $text ?></p>
               <?php echo renderStars(4) ?>
               <img class="mt-02 h-1"  src='<?php echo get_theme_file_uri('/images/logo/logoxsm.png') ?>' />
          </div>
          <div>
               <p class="text-title text-xsm bold">Best practices</p>
               <p>Responsive (min. 64 px x 24 px, max. 100% x 24 px of 48 px)
                    <br />
                    <br />
                    Works on mobile, tablet and desktop
               </p>
               <div class="flex flex-row flex-left flex-top">

               <details>
                    <summary class="btn tar btn-yellow btn-sm">Generate code</summary>

                    <textarea class="bg-lightgray mt-2 max-w-600 mb-02 w-100">

                    </textarea>
                    <button class="btn btn-yellow btn-sm">Submit</button>
               </details>
               <select class="p-03 mb-1 left ml-2">
                    <option>Small</option>
               </select>
               </div>
          </div>
     </div>
<?php }
