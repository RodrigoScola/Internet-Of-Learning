<?

class Courses  {
     public static function get_base_meta_query($array = []) {
          $defaults = [
               'hide_empty' => true
          ];
          $args = wp_parse_args($array, $defaults);

          $base = [
               'relations' => "and",
               [
                    [
                         'relation' => "OR",
                         
                         [
                              'key' => 'review_score',
                              'compare' => '>',
                              'value' => "0"
                         ]
                    ]
                    
          ],
          
         ];

         if ($args['hide_empty'] == false) {
               array_push($base[0][0], [
                    'key' => 'review_score',
                    'compare' => 'NOT EXISTS',
                    'value' => ''
               ]);
               array_push($base[0][0], [
                    'key' => 'review_score',
                    'compare' => '=',
                    'value' => '0'
               ]);

         }


          return $base;
     }
     public static function get_courses_query($search){
          $defaults = [
               'course_level' => [],
               'rating' => [],
               'release_year' => 0,
               'paged' => 0,
               'categories' => '',
               'term' => '',
               'orderby' => "meta_value_num",

          ];
          $args = wp_parse_args($search, $defaults);

          $initial = [
               'post_type' => 'courses',
               'posts_per_page' => 6,
               'paged' => max($args['paged'], 0),
               'meta_query' => Courses::get_base_meta_query([
                    'hide_empty' => false,
               ]),
          ];

          if ($args['term']) {
               $initial['s'] = $args['term'];
          }

          if ($args['rating']) {
               array_push($initial['meta_query'], [
                    'key' => 'average',
                    'compare' => "IN",
                    'value' => $args['rating']
               ]);
          }
          if ($args['course_level'][0]) {
               array_push($initial['meta_query'], [
                    'key' => 'level',
                    'compare' => 'in',
                    'value' => $args['course_level'],
               ]);
          }
          if ($args['release_year']) {
               $initial['date_query'] = [
                    
                         [
                              'after' => [
                                   'year' => $args['release_year']
                              ],
                              'before' => [
                                   'year' => $args['release_year'],
                              ],
                              'inclusive' => true
                         ]

               ];
          }
          if ($args['categories'][0]) {
               $initial['category__in'] = $args['categories'];
          }
          if ($initial['meta_query']) {
               $initial['orderby'] = "meta_value_num";
          }
          return $initial;

     }
     public static function getTopPosts()
     {
          if (!$data = wp_cache_get('top_posts','courses')) {
               $data = new WP_Query([
                    'post_type' => 'courses',
                    'orderby' => 'meta_value_num',
                    'order' => "DESC",
                    'meta_key' => 'review_score',
                    'meta_query' => [
                         [
                              'key' => 'review_score',
                              'compare' => '>',
                              'value' => '0'
                         ]
                    ],
               ]);
               wp_cache_add('top_posts', 'courses');

          }
          return $data;
     }
      
}
