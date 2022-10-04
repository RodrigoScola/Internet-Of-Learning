     <div class='comment '>
          <img class="comment-image" src="<?php echo get_avatar_url(get_the_author_meta('ID')) ?>" />
          <p class='comment-username text-title bold text-xsm left'><?php the_author() ?></p>
          <br />
          <div class='comment-review'>
               <?php echo renderReviewCount(get_field('score')) ?>
          </div>
          <p class="comment-date">
               <?php echo the_date() ?>
          </p>
          <div class="comment-content">
               <?php echo the_content() ?>
          </div>
     </div>

