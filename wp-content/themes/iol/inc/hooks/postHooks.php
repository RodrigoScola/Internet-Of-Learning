<?php 


add_filter('get_the_excerpt', 'filter_get_the_excerpt', 10, 2);

/**
 * Filters the retrieved post excerpt.
 *
 * @param string   $post_excerpt The post excerpt.
 * @param \WP_Post $post         Post object.
 * @return string The post excerpt.
 */
function filter_get_the_excerpt( string $post_excerpt, \WP_Post $post ) : string {
     return sanitize_text_field(substr($post_excerpt, 0, min(180, strlen($post_excerpt) - 5))) . '...';
}
