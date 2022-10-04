<?php

add_action('rest_api_init', 'iolsearchRoute');


function iolsearchRoute()
{
     register_rest_route('iol/v1', 'search', [
          'methods' => WP_REST_Server::READABLE,
          'callback' => 'searchResults'
     ]);
}


function searchResults($data)
{

    

     $maxPosts = 9;
     $courseLevel = rest_sanitize_array($data['courselevel']);
     $rating = rest_sanitize_array($data['rating']);
     $release_year = rest_sanitize_array($data['release_year'])[0];
     $searchterm = sanitize_text_field($data['term']);
     $categories = rest_sanitize_array($data['categories']);
     $page = sanitize_text_field(get_query_var($data['paged'], 0));
     if ($searchterm !== '') {

     $args = Courses::get_courses_query([
          'course_level' => $courseLevel,
          'rating' => $rating,
          'release_year' => $release_year,
          'paged' => $page,
          'term' => $searchterm,
          'categories' => $categories,
          'posts_per_page' => -1,
     ]);
     } else {

          $args = Courses::get_courses_query([
               'course_level' => $courseLevel,
               'rating' => $rating,
               'release_year' => $release_year,
               'paged' => $page,
               'categories' => $categories,
               'posts_per_page' => -1,
          ]);
       
     
     }



     $courses = new WP_Query($args);

     $count = 0;
     $coursesArr = [];
     while ($count !== $maxPosts && $courses->have_posts()) {
          $courses->the_post();
          // $post_meta = get_post_meta(get_the_ID());
          array_push($coursesArr, [
               'id' => get_the_ID(),
               'content' => get_the_content(),
               'permalink' => get_the_permalink(),
               'thumbnail_url' => get_the_post_thumbnail_url(null, 'card'),
               'excerpt' => get_the_excerpt(),
               'author' => get_the_author(),
               'title' => get_the_title(),
               'meta_input' => [
                    'average' => get_field('average'),
                    'total_reviews' => get_field('total_reviews'),
                    'time_investment' => get_field('time_investment'),
                    'course_link' => get_field('course_link'),
                    'level' => get_field('level'),
                    'course_highlights' => [get_field('course_highlights_1'), get_field('course_highlights_2'), get_field('course_highlights_3'), get_field('course_highlights_4'), get_field('course_highlights_5'), get_field('course_highlights_6')]
               ],
          ]);
          $count++;
     }


     return [
          'query' => $args,
          'total' => $courses->post_count,
          'max_num_pages' => ceil($courses->post_count / $maxPosts),
          'current_page' => (int)$page,
          'posts' => $coursesArr,
     ];
}
