<?php 
class User {
   
     function __construct($idorUsername = null)
     {
          $this->userId = is_int($idorUsername) ? $idorUsername : null;
          $this->info;

         $this->searchInfo($idorUsername);
     }
     public function addCourse($courseId, $userId = null) {
          if (!$userId) {
               $userId = $this->userId ?: get_current_user_id();     
          }
          // return $this->info;
          // return 'asfd';
          $currentCourses = get_user_meta('1', 'course_author')[0];

          // if (!$this->isPostAuthor($courseId) || ($this->account_type() == 'free' && count($currentCourses) == 1))
               // die('you cant do that');
              

          array_push($currentCourses, $courseId);

          update_user_meta($userId, 'course_author', $currentCourses);

          return get_user_meta($userId, 'course_author');


     }
     function account_type() {
          return array_reduce($this->info['roles'], function($curr, $item){
               if ($item == 'premium' || $item == 'free' || $item == 'student') {
                   if (($curr !== 'premium' && $item == 'free' )|| $item == 'premium' || ($curr == '' && $item == 'student')) {
                         $curr = $item;
                   }
               }
               return $curr;
          }, '');
     }

     function searchInfo ($idorUsername = null) {
          if ($idorUsername == null) {
               $idorUsername = get_current_user_id();
          }
          if (is_string($idorUsername)) {
         $user = get_user_by('login',$idorUsername);
         if ($user) {
          // var_dump($user);
          $this->info = [
               'ID' => $user->ID,
               'username' => $user->user_nicename,
               'display_name' => $user->display_name,
               'full_name' => $user->first_name . ' ' . $user->last_name,
               'email' => $user->user_email,
               'status' => $user->user_status,
               'registered' => $user->user_registered,
               'first_name' => $user->first_name,
               'last_name' => $user->last_name,
               'roles' => $user->roles
          ];
                    $this->userId = $user->ID;

        
         }
          } else if (is_int($idorUsername)) {
               $user = get_user_by('id',$idorUsername);
               if ($user) {
                    $this->info = [
                         // 'username' => $user->username
                         'display_name' => $user->display_name,
                         'email' => $user->user_email,
                         'status' => $user->user_status,
                         'registered' => $user->user_registered,
                         'first_name' => $user->first_name,
                         'last_name' => $user->last_name,
                         'roles' => $user->roles
                    ];
               $this->userId = $user->ID;
               }
          }

          return $this->info;
         
     }
     function checkUserInfo() {
          if (is_user_logged_in() || current_user_can('administrator')  )return true;
          return false;
     }
     function isPostAuthor($postid, $userId = null) {
          $currPost = get_post($postid);
          return $currPost->post_author == (string)get_current_user_id();
     
     }
function updateUserInformation($newInfo, $userId = null) {
    if (!$this->checkUserInfo()) die('you cant do that');

     if (!$userId) {
          $userId = get_current_user_id();
     }

     $currentUserInfo = new WP_User($userId );

     $updated = wp_update_user([
          "ID" => $currentUserInfo->ID,
          'first_name' => $newInfo['first_name'] ? sanitize_text_field($newInfo['first_name']) : $currentUserInfo->first_name,
          'last_name' => $newInfo['last_name'] ? sanitize_text_field($newInfo['last_name']) : $currentUserInfo->last_name,
          'email' => $newInfo['email'] ? sanitize_text_field($newInfo) : $currentUserInfo->user_email,         
     ]);
     return $updated;
}
     
}