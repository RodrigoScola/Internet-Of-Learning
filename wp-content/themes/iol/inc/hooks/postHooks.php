<?php


add_filter('get_the_excerpt', 'filter_get_the_excerpt', 10, 2);

/**
 * Filters the retrieved post excerpt.
 *
 * @param string   $post_excerpt The post excerpt.
 * @param \WP_Post $post         Post object.
 * @return string The post excerpt.
 */
function filter_get_the_excerpt(string $post_excerpt, \WP_Post $post): string
{
     $dots = strlen($post_excerpt) > 180 ? "..." : "";
     return sanitize_text_field(substr($post_excerpt, 0, min(180, strlen($post_excerpt) - 5))) . $dots;
}
add_action('iol_before_post', function () {

     add_breadcums();
}, 10, 2);

// iol_before_post
// iol_before_post_{post-type}


add_filter('um_profile_navbar_classes', function () {
     return 'bg';
}, 10, 2);


add_action('iol_before_post_category_business', function () {
}, 10, 2);

function init_posts()
{
     global $post;
     do_action('iol_before_post', $post);

     do_action('iol_before_post_' . $post->post_type);
     if ($catid = get_query_var('cat')) {

          $cat = get_category($catid);
          do_action('iol_before_post_category_' . $cat->slug, $cat);
     }
}
