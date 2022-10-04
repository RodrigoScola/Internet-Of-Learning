<?php 

function eventTypes()
{

register_post_type('confirmation', array(
          'show_in_rest'       => true,
'public' => true,
'show_ui' => true,
"has_archive" => true,
'labels' => array(
'name' => 'Confirmation',
'add_new_item' => 'Add New Confirmation type',
'edit_item' => 'Edit Confirmation',
'all_items' => 'All Confirmations',
'singular_name' => 'Confrimation'
),
'menu_icon' => 'dashicons-admin-network'
));
register_post_type('dashboard', array(
     'show_in_rest'       => true,
     'public' => true,
     'show_ui' => true,
     "has_archive" => true,
     'labels' => array(
          'name' => 'Dashboard',
          'add_new_item' => 'Add New dashboard page',
          'edit_item' => 'Edit page',
          'all_items' => 'All dashboard pages',
          'singular_name' => 'dashboard'
     ),
     'menu_icon' => 'dashicons-dashboard'
));
register_post_type('admin-dashboard', array(
     'show_in_rest' => true,
     'public' => true,
     'show_ui' => true,
     "has_archive" => true,
          'capability_type' => 'page',
          'hierarchical' => true,
          'menu_position' => null,
          'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'page-attributes'),
     'labels' => array(
          'name' => 'admin-dashboard',
          'add_new_item' => 'Add New admin page',
          'edit_item' => 'Edit admin page',
          'all_items' => 'All admin pages',
          'singular_name' => 'admin_page'
     ),
     'menu_icon' => 'dashicons-dashboard'
));
register_post_type('services', array(
     'show_in_rest' => true,
     'public' => true,
     'show_ui' => true,
     "has_archive" => true,
     'capability_type' => 'page',
     'hierarchical' => true,
     'menu_position' => null,
     'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'page-attributes'),
     'labels' => array(
          'name' => 'services',
          'add_new_item' => 'Add New Order Step',
          'edit_item' => 'Edit Order page step',
          'all_items' => 'All Order Pages',
          'singular_name' => 'cart-page'
     ),
     'menu_icon' => 'dashicons-cart'
));

     register_post_type('courses', array(
          'show_in_rest' => true,
          'public' => true,
          'show_ui' => true,
          'capability_type' => 'course',
          'map_meta_cap' => true,
     
          "has_archive" => true,
          'hierarchical' => true,
          'menu_position' => null,
          'taxonomies'          => array('category'),
          'supports' => array('title', 'editor', 'author', 'comments','thumbnail', 'excerpt'),
          'labels' => array(
               'name' => 'courses',
               'add_new_item' => 'Add New course',
               'edit_item' => 'Edit course',
               'all_items' => 'All courses',
               'singular_name' => 'course'
          ),
          'menu_icon' => 'dashicons-welcome-learn-more'
     ));

     register_post_type('reviews', array(
          'show_in_rest' => true,
          'capability_type' => 'review',
          'map_meta_cap' => true,
     
          'show_ui' => true,
          "has_archive" => false,
          'menu_position' => null,
          'supports' => array('title', 'editor','excerpt','author'),
          'labels' => array(
               'name' => 'reviews',
               'add_new_item' => 'Add New review',
               'edit_item' => 'Edit review',
               'all_items' => 'All reviews',
               'singular_name' => 'review'
          ),
          'menu_icon' => 'dashicons-welcome-write-blog'
     ));

}
add_action('init', 'eventTypes');


//     $people_label = array(
//         'name' => 'People',
//         'singular_name' => 'People',
//         'add_new' => 'Add People',
//         'add_new_item' => 'Add New People',
//         'edit_item' => 'Edit People',
//         'new_item' => 'New People',
//         'all_items' => 'All People',
//         'view_item' => 'View People',
//         'search_items' => 'Search People',
//         'not_found' => 'No People found',
//         'not_found_in_trash' => 'No People found in Trash',
//         'parent_item_colon' => '',
//         'menu_name' => 'People',
//     );
//     $people_args = array (
//         'labels' => $people_label,
//         'public' => true,
//         'publicly_queryable' => true,
//         'show_ui' => true,
//         'show_in_menu' => true,
//         'query_var' => true,
//         'rewrite' => array( 'slug' => 'our-people'),
//         'capability_type' => 'page',
//         'has_archive' => true,
//         'hierarchical' => true,
//         'menu_position' => null,
//         'menu_icon' => get_template_directory_uri() . '/images/icons/people.png',
//         'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt','page-attributes'),
//     );

//     register_post_type('people', $people_args);
// }