<?php 

// filter unwanted categories

add_filter('pre_get_category_args',function ($args) {
     $excludeCats = ['blogs', 'subjects', 'platform'];

     foreach($excludeCats as $currentCat) {
          $cat = get_category_by_slug($currentCat);
          array_push($args['exclude'], $cat->cat_ID);
     }


     return $args;
}, 10, 2);


// add_action('iol_get_posts_from_categories', $post_type, $category, );

