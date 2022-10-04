<?php


function get_nav_template()
{
     if (is_category()) {
          get_template_part('/components/nav/nav-cat', get_query_var('type', 'courses'));
     }
}


function get_component(string $component_name)
{
     $mobile = wp_is_mobile() ? "_mobile" : '';

     get_template_part('/components' . $component_name, $mobile);
}
