<?php

function renderStars($count = 3)
{?>
     <div class='mh-03 mt-01 stars-<?php echo floor($count) ?>'>
          <?php 
               for($i = 1 ; $i <= 5; $i++) {
                    echo "<span class='star-{$i}'>[IconStarFilled]</span>";
               }
           ?>
     </div>
<?php } 



 function renderReviewCount($count = 3, $total = null) {
    
     ?>
     <div class='stars-component align'>
          <?php echo  floor($count) ?>
          <?php echo renderStars($count) ?>
          <?php echo $total ? '(' . $total . ')' : '' ?>
     </div>

<?php 
     

} 