<?

use Automattic\Jetpack\Sync\Modules\Comments;

function reviewRoute() {
     register_rest_route('iol/v1','review',[
          'methods' => "POST",
          'callback' => "createReview",
     ]);
     register_rest_route('iol/v1', 'review/(?P<id>[\\d]+)', [
          'methods' => "GET",
          'callback' => "getReview",
     ]);
     register_rest_route('iol/v1', 'review', [
          'methods' => "DELETE",
          'callback' => "deleteReview",
     ]);
     register_rest_route('iol/v1', 'resetreview', [
          'methods' => WP_REST_Server::READABLE,
          'callback' => "resetReviews",
     ]);
     register_rest_route('iol/v1', 'review_to_comment', [
          'methods' => "GET",
          'callback' => 'reviewToComment'
     ]);
     
}


function reviewToComment($data)
{
     $allReviews = new WP_Query([
          'post_type' => 'reviews',
          'posts_per_page' => -1
     ]);
     $comments = [];
     while ($allReviews->have_posts()) {
          $allReviews->the_post();
          
          $score = get_field('score');

          $post_id = (int)get_the_title();
          $author_id = (int)get_the_author_meta('ID');

          $content = esc_attr(get_the_content());

          $commentExists = get_comments([
               'user_id' => $author_id,
               'comment_post_ID' => get_the_title(),
             
          ]);
          array_push($comments, $commentExists);
               if ($commentExists == 0) {

          wp_insert_comment([
               'comment_post_ID' => $post_id,
               'user_id' => $author_id,
               'comment_author' => get_the_author_meta('display_name'),
               'comment_content' => $content,
               'comment_meta' => [
                    'score_full' => $score,
                    'score' => $score
               ]
          ]);
               }
     }
     return $comments;
}


function getReview($data) {
     return get_post($data['id']);
}
function resetReviews() {
     $allReviews = new WP_Query([
          'post_type' => 'reviews',
          'posts_per_page' => '-1',
          'orderby' => 'title',
          'order' => 'ASC',
     ]);
     $posts = [
          
     ];
     while($allReviews->have_posts()) {
          $allReviews->the_post();
          $lastInd = count($posts) ;
          $currPost = $posts[$lastInd - 1];
          if ($posts[$lastInd - 1]['id'] !== get_the_title()) {
               array_push($posts,[
                    'id' => get_the_title(),
                    'count' => 1,
                    'total_score' => get_field("score") ** 2,
                    'score' => get_field('score')
               ]);
          } else {
               $newCount = $posts[$lastInd - 1]['count'] + 1;

               if ($currPost['total_score'] >= (int)get_field('score')) {
                    $newScore = $posts[$lastInd - 1]['total_score'] - (int)get_field('score') ** 1.04;

               } else {


               $newScore = $posts[$lastInd - 1]['total_score'] + (int)get_field('score') << 2;

               }
               $posts[$lastInd - 1] = [
                    'id' => get_the_title(),
                    'count' => $newCount,
                    'total_score' => $newScore,
                    'total' => $currPost['score'] + (int)get_field('score')
               ];
          }
     }


     $excludeids =  array_reduce($posts, function($curr,$next) {
          if (!in_array($next['id'], $curr)) {
               array_push($curr, (int)$next['id']);
          }
          return $curr;
     },[]);

     $newPosts = new WP_Query([
          'post_type' => 'courses',
          'post__not_in' => $excludeids,
          'posts_per_page' => -1,

     ]);
     while($newPosts->have_posts()) {
          $newPosts->the_post();
          wp_update_post([
               'id' => get_the_ID(),
               'meta_input' => [
                    'review_score' => 0,
                    'total_reviews' => 0,
                    'average' => 0
               ]
          ]);
     }
     wp_reset_postdata();


     foreach($posts as $post) {
          wp_update_post([
               'ID' => $post['id'],
               'meta_input' => [
                    'review_score' => $post['total_score'],
                    'total_reviews' => $post['count'],
                    'average' => $post['score'] / $post['count']
               ]
          ]);
          

     }

     return $posts;





}




function deleteReview($data) {
     $courseId = sanitize_text_field($data['course_id']);



     $userId = $data['user_id'] ? sanitize_text_field($data['user_id']) : get_current_user_id();
     $course = get_post($courseId);
   
     if (!$course) die('invalid course');

     $review = new WP_Query([
          'post_type' => "reviews",
          'title' => $courseId,
          'author' => $userId,

     ]);
     
     if ($review->found_posts == 0) return 0;


          
          $review->the_post();

     $deleted = wp_delete_post(get_the_ID());
     wp_reset_postdata();
     return $deleted;     
   
}



function createReview($data) {
     $courseId = sanitize_text_field($data['course_id']);
     $score = (int)sanitize_text_field($data['score']);
     $userId = sanitize_text_field($data['user_id']) ?: get_current_user_id();
     $content = sanitize_text_field($data['content']);
     $success = 0;
     if (is_user_logged_in()) {
     $course = get_post($courseId);
     if (!$course) die('invalid course id');

// if user already has an review
          $existQuery = new WP_Query(array(
                    'author' => get_current_user_id(),
                    'post_type' => 'reviews',
                    
                    'title' => $courseId,
                  
               ));


          $existQuery->the_post();
          $curr = (int)get_field('score');
 if ($existQuery->found_posts == 1 and get_post_type($courseId) == 'courses') {
            $success =  wp_update_post(array(
                    'ID' => get_the_ID(),
                    'post_content'   => $content,
                    'post_title' => $courseId,
                    'meta_input' => array(
                         'score_full' => $score,
                         'score' => $score,
                    )
               ));
               
          }
    
     }
          if ($existQuery->found_posts == 0 and get_post_type($courseId) == 'courses') {
             $success =    wp_insert_post(array(
                    'post_type' => 'reviews',
                    'post_status' => 'publish',
                    'post_title' => $courseId,
                    'post_content'   => $content,
                    'meta_input' => array(
                         'score_full' => $score,
                         'score' => $score ,
                    )
               ));
               
        

         
     }
     if ($success) {
          $diff = $curr - $score;
          
     $coursemeta = get_post_meta($courseId);
          $newReviewScore = (int)$coursemeta['review_score'][0] - $diff;


     $total =   new WP_Query([
          'title' => (string)$courseId,
          'posts_per_page' => -1,
          'post_type' => 'reviews',

     ]);


     return     wp_update_post([
          'ID' => $courseId,
          'post_title' => $course->post_title,
          'post_content' => $course->post_content,
          'meta_input' => [
               'review_score' => $newReviewScore,
               'total_reviews' => $total->found_posts,
               'average' => $newReviewScore / $total->found_posts,
          ],
     ]);
     
     }
 
}



add_action('rest_api_init', 'reviewRoute');


add_action('before_delete_post', 'changeScore', 99, 2);
function changeScore($post_id, $post)
{
     $courseId = $post->post_title;
     $course = get_post((int)$courseId);



     $score = get_field('score', $post_id);
     $coursemeta = get_post_meta($course->ID);
     $newReviewScore = (int)$coursemeta['review_score'][0] - $score;
     $total = new WP_Query([
          'post_title' => $courseId,
          'posts_per_page' => -1,
          'post_type' => 'reviews'
     ]);


     return wp_update_post([
          'ID' => $courseId,
          'post_title' => $course->post_title,
          'post_content' => $course->post_content,
          'meta_input' => [
               'review_score' => $newReviewScore,
               'total_reviews' => $total->found_posts,
               'average' => $newReviewScore / $total->found_posts,
          ],
     ]);
}