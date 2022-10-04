<?php 

function renderCourseComment() { ?>


<div class='comment '>
     <img class="comment-image" src="<?php echo get_theme_file_uri('/images/profile/profileimage.png') ?>" />
     <p class='comment-username title title-xsm left'>Rodrigo Scola</p>
     <br />
     <div class='comment-review'>
          <?php echo renderReviewCount(3) ?>
     </div>
     <p class="comment-date">
          Jan 04 2022
     </p>
     <p class="comment-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris mattis, fermentum justo quis, congue metus. Nullam dictum, dui in rutrum fermentum, dolor orci tempus augue, vitae consectetur leo tellus a tellus. Ut ac odio sodales, tempus dui ac, gravida nisl. Donec turpis sapien, sodales vel erat ac, tincidunt gravida dui.
     </p>
</div>
<?php }