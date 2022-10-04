<?php

//this is a prototype, not the live thing



function newReview($data)
{
     $postId = $data['course_id'];
     $score = (int)$data['score'];
     $user_id = $data['user_id'] ? $data['user_id'] : get_current_user_id();
     $content = $data['content'];
     $currentUser = new User($user_id);

     $course = get_post($postId);

     if ($currentUser->info['username'] || !comments_open($postId))
          return null;

     $userComment = get_comments([
          'post_id' => $postId,
          'user_id' => $user_id,
          'number' => '1'
     ]);

     if ($userComment == 0) {
          // create
          wp_insert_comment([
               'comment_post_ID' => $postId,
               'comment_content' => $content,
               'user_id' => $user_id,
               'comment_author' => $currentUser->info['full_name'],
               'comment_author_email' => $currentUser->info['email'],
               'comment_meta' => [
                    'score_full' => $score,
                    'score' => $score,
               ]
          ]);
     } else {
          // update
          foreach ($userComment as $currentComment) {
               wp_update_comment([
                    'comment_id' => $currentComment->comment_ID,
                    'post_id' => $currentComment->comment_post_ID,
                    'comment_meta' => [
                         'score_full' => $score,
                         'score' => $score
                    ]
               ]);
          }
     }
}



add_action('comment_post', function ($comment_id, $comment) {
     $comment = get_comment($comment_id);
     $courseId = $comment->comment_post_ID;

     $course = new WP_Query([
          'post_type' => 'courses',
          'p' => $courseId,

     ]);
     $course->the_post();

     $average = get_field('average');
     $total_reviews = (int)wp_count_comments($courseId);
     $reviewScore = (int)get_field('review_score');

     $commentScore = (int)get_field('score', $comment_id);

     if ($average >= $commentScore) {
          $reviewScore -= $commentScore ** 1.04;
     } else {


          $reviewScore  +=  $commentScore << 2;
     }

     wp_update_post([
          'ID' => $courseId,
          'post_title' => get_the_title(),
          'post_content' => get_the_content(),
          'meta_input' => [
               'review_score' => $reviewScore,
               'total_reviews' => $total_reviews + 1,
               'average' => $reviewScore / $total_reviews + 1,
          ],
     ]);

     wp_reset_postdata();
});

add_filter('edit_comment', function ($commentID) {
     $currentComment = get_comment($commentID);

     $courseId = $currentComment->comment_post_ID;
     $course = get_post($courseId);

     if ($course->post_type == 'courses') {
          $allComments = get_comments([
               'post_id' => $courseId,

          ]);
          $allScore = [
               'value' => 0,
               'count' => 0
          ];
          foreach ($allComments as $singleComment) {
               $score = get_field('score', $singleComment->comment_ID);

               if ($allScore['value'] > $score) {
                    $allScore['value'] -= $score ** 1.08;
               } else {
                    $allScore['value'] += $score << 1;
               }
               $allScore['count']++;
          }

          wp_update_post([
               'ID' => $courseId,
               'post_title' => $course->post_title,
               'post_content' => $course->post_content,
               'meta_input' => [
                    'average' => $allScore['value'] / $allScore['count'],
                    'total_reviews' => $allScore['count'],
                    'review_score' => $allScore['value'],
               ]
          ]);
     }
}, 10, 2);