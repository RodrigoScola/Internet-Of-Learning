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
'menu_icon' => 'dashicons-heart'
));
}
add_action('init', 'eventTypes');