<aside id='author-card' class='author-card'>
     <img alt="post author image" class="author-card-image" src="<?php echo esc_url(get_avatar_url(get_the_author())) ?>" />
     <div class='author-card-content '>

<h3 class="author-card-title text-title bold">About <?php echo get_the_author_meta('display_name') ?></h3>
     <p class="card-title-description"><?php echo esc_attr(get_the_author_meta('description')) ?></p>
     </div>
</aside>