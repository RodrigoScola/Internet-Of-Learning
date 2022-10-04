<?

function courseRoute()
{
     register_rest_route('iol/v1', 'courses', [
          'methods' => "POST",
          'callback' => "createCourse",
     ]);
     register_rest_route('iol/v1', 'course-visibility', [
          'methods' => "POST",
          'callback' => "changeVisibility",
     ]);
     register_rest_route('iol/v1', 'courses/top', [
          'methods' => WP_REST_Server::READABLE,
          'callback' => "getTopCourses"
     ]);
     register_rest_route('iol/v1', 'courses/meta', [
          'methods' => WP_REST_Server::READABLE,
          'callback' => "getCourseMeta"
     ]);
     register_rest_route('iol/v1', 'courses', [
          'methods' => "DELETE",
          'callback' => "deleteCourse",
     ]);
     register_rest_route('iol/v1', 'courses/count', [
          'methods' => "GET",
          'callback' => "updateCatAllPosts",
     ]);
}

function updateCatAllPosts() {
     $allCats = array_to_object(get_terms([
          'taxonomy' => 'category',
          'hide_empty' => false,
          'fields' => 'ids',
     ]), [
          'courses' => 0,
          'post' => 0
     ]);
     $allPosts = new WP_Query([
          'post_type' => ['courses', 'post'],
          'posts_per_page' => '-1',

     ]);
     
     while($allPosts->have_posts()) {
          $allPosts->the_post();
          $postCat = wp_get_post_categories(get_the_ID(), [
               'fields' => "ids"
          ]);
          foreach($postCat as $currentCat) {
               $allCats[$currentCat][get_post_type()] += 1;
          }
     }
     wp_reset_postdata();
    
     foreach($allCats as $currentCat => $value) {
          update_term_meta($currentCat, 'post_count', $value['post']);
          update_term_meta($currentCat, 'courses_count', $value['courses']);
          // array_push($va, $value[]);
     }
     return $allCats;
}


function getCourseMeta() {
    
     $score = get_field('score_full', 9323);
     return [
          'score' => $score & 1 << 0 | $score & 1 << 1 | $score&1<<2,
          'claimed' => $score&1<<3,
     ];
}
function getTopCourses($data) {
     $courses = new Courses();
     return $courses->getTopPosts();
}

function changeVisibility($data) {
     $userInfo = new User();
     if (!$userInfo->checkUserInfo()) die('you cant do that');
     $post_id = sanitize_key($data['courseId']);
     $current_post = get_post($post_id, 'ARRAY_A');
     if ($userInfo->isPostAuthor($post_id)){

     $visibility_type = sanitize_text_field($data['visibility_type']);
     $current_post['post_status'] = $visibility_type;
     return wp_update_post($current_post);
     }
     return 0;
}
function deleteCourse($data) {
 
     return changeVisibility([
          'courseId' => $data['courseId'],
          'visibility_type' => 'private'
     ]);
     
     
}
function createCourse($data)
{
     $userInformation = new User(get_current_user_id());
     if (!$userInformation->checkUserInfo()) die('you cant do that');
     $updateId = sanitize_text_field($data['courseId']);
     $userInfo = get_userdata(get_current_user_id());

     $accountType = $userInformation->account_type();


     $course = [
          'post_type' => 'courses',
          'post_status' => 'publish',
          'post_title' => sanitize_text_field($data['courseName']),
          'post_content' => sanitize_text_field($data['courseDescription']),
          'post_category' => $data['courseCategory'],
          'meta_input' => [
               'level' => sanitize_text_field($data['courseEntryLevel']),
               'time_investment' => sanitize_key($data['courseTimeInvestment']),
               'course_link' => sanitize_url($data['courseLink']),
               'course_value' => sanitize_text_field($data['courseValue']),
               'course_banner' => '',
               'course_outcome' => sanitize_text_field($data['courseOutcome']),
               'instructor_image' => get_avatar_url(get_current_user_id()),
               'instructor_description' => sanitize_text_field($data['instructorExperience']) ?  sanitize_text_field($data['instructorExperience']) : $userInfo->description,
               'instructor_name' => sanitize_text_field($data['instructorName']) ?: $userInfo->display_name,
               'course_highlights_1' => sanitize_text_field($data['courseHighlights']['0']['value']),
               'course_highlights_2' => sanitize_text_field($data['courseHighlights']['1']['value']),
               'course_highlights_3' => sanitize_text_field($data['courseHighlights']['2']['value']),
               'course_highlights_4' => sanitize_text_field($data['courseHighlights']['3']['value']),
               'course_highlights_5' => sanitize_text_field($data['courseHighlights']['4']['value']),
               'course_highlights_6' => sanitize_text_field($data['courseHighlights']['5']['value']),
          ],
     ];
 


          if (!$userInformation->account_type()) die('you cant do that');

          $existQuery = new WP_Query(array(
               'post_type' => 'courses',
               'post_status' => ['draft', 'publish'],
               'author' => $userInformation->userId,
          ));

          if ($existQuery->found_posts && $userInformation->isPostAuthor($updateId)) {
                    $course['ID'] = $updateId;

                 return wp_update_post($course);
          }
          if (($existQuery->found_posts == 0 && $accountType == 'free') || $accountType == 'premium' || current_user_can('administrator')) {
               $postId = wp_insert_post($course);
          return $postId;
          }

 
}



add_action('rest_api_init', 'courseRoute');
