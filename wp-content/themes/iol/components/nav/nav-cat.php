<nav class='navigation-bar pl-2'>
          <h1 class=' subtitle subtitle-xsm left '>
               Categories 
          </h1>
          <?php

          $categories = get_categories(array(
               'order'               => 'ASC',
               'orderby'             => 'name',
               'style'               => 'list',
               'hide_empty' => 0,
               'taxonomy'            => 'category',
          ));

          foreach ($categories as $category) {
     $coursesCount = (int)get_term_meta($category->term_id, get_post_type() . '_count', true);
     // var_dump($coursesCount);
     if ($coursesCount > 0) {


               ?>
               <p>

                    <a href="<?php echo site_url() . '/category/' . $category->slug ?>"><?php echo "{$category->name} ({$coursesCount})" ?></a>
               </p>
          <?php } } wp_reset_postdata() ?>
     


         
     </nav>