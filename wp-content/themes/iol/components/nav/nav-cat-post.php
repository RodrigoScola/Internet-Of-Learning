<nav class='navigation-bar   pl-1'>
     <h3 class=' text-title bold title-md '>
          Categories
     </h3>
     <?php
     global $wp_query;
     $currentCategory = $wp_query->query_vars['category_name'];

     $categories = get_categories(array(
          'order'               => 'ASC',
          'orderby'             => 'name',
          'style'               => 'list',
          'hide_empty' => 0,
          'taxonomy'            => 'category',
     ));

     foreach ($categories as $category) {
          $coursesCount = $category->post_count['post'];
          // var_dump($coursesCount);
          if ($coursesCount > 0) {
     ?>
               <p>
                    <a class="<?= $currentCategory == strtolower($category->name) ?  "bg-blue round" : "" ?> p-04 zoom-in_hover" href="<?php echo site_url('/' . $category->slug . '/?type=post') ?>"><?php echo "{$category->name} ({$coursesCount})" ?></a>
               </p>
     <?php }
     }
     wp_reset_postdata() ?>
</nav>