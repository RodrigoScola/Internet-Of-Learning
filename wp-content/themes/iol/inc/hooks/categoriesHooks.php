<?php

// filter unwanted categories

add_filter('pre_get_category_args', function ($args) {
     $excludeCats = ['blogs', 'subjects', 'platform'];




     foreach ($excludeCats as $currentCat) {
          $cat = get_category_by_slug($currentCat);
          array_push($args['exclude'], $cat->cat_ID);
     }
     return $args;
}, 10, 2);

function get_categories_filter_posts($args = [])
{
     $defaults = array(
          'post_type' => 'post'
     );
     $args     = wp_parse_args($args, $defaults);
     if ($args['post_type'] !== 'post' || $args['post_type'] !== 'courses') {
          $args['post_type'] = 'post';
     }
     $cat = get_categories($args);
     $post_type = $args['post_type'];
     $cattarr = [];
     foreach ($cat as $category) {
          if ($category->post_count[$post_type] == 0) {
               array_push($cattarr, $category);
          }
     }
     return $cattarr;
}
// add_action('iol_get_posts_from_categories', $post_type, $category, );
// get_categories()