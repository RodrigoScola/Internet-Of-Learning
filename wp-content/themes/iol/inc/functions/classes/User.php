<?php 
class User {
     public $userId;
     public $info;
  
     public $permissions;
     function __construct($idorUsername = null)
     {
          $this->userId = is_int($idorUsername) ? $idorUsername : null;
          $this->info = [];
          
         $this->searchInfo($idorUsername);
     }
     private function checkUserId ($userId = null) {
          if (!$userId) {
               $userId = $this->userId ?: get_current_user_id();
          }
          if (empty($this->info)) {
               $this->searchInfo($userId);
          }
          return $userId;
     }
     function getPosts($atts = [
         'post_type' => ['courses', 'reviews'],
         'post_status' => ['publish','draft'],
       'user_id' => null,
       'paged' => '',
     //   'returns' => ['id'],
     ]) {
        
          $userId = $this->checkUserId($atts['user_id']);
          $args = [
               'post_type' =>  $atts['post_type']  ,
               'author' => $userId,
               'post_status' => $atts['post_status'] ,
               'posts_per_page' => '-1',
          ];
          $allPosts = new Wp_Query($args);
          $posts = [
               "courses" => [],
               "reviews" => []
          ];
          if (!$allPosts->have_posts)
               return $posts;
          while($allPosts->have_posts()) {
               $allPosts->the_post();

               array_push($posts[get_post_type()], get_the_ID());
          }

          return $posts;


     }
     function account_type() {
          return $this->info['roles'][0] == 'um_free' ? 'free' : $this->info['roles'][0];
     }
     function getStripeAccount($returnId = false, $userId =null) {
          $userId = $this->checkUserId($userId);
          $stripeIds = get_user_meta($userId, 'stripe_account', true);
          if (!$stripeIds)
               return [];


          if ($returnId) {

          if (is_array($stripeIds) && count($stripeIds) > 1) {
               $stripeIds = $stripeIds[max(count($stripeIds) - 1,0)];
          }
          return $stripeIds;
          }
          return $stripeIds;

     }
     function addStripeAccount($stripeId, $userId = null) {
          $userId = $this->checkUserId($userId);
          $currentids = $this->getStripeAccount();
          if ($currentids) {

          if (!in_array($stripeId,(array)$currentids)) {
                    $currentids = (array)$currentids;
               array_push($currentids,$stripeId);
          }
               // return var_dump($currentids);
         return  update_user_meta($userId,'stripe_account',$currentids);
          } else {
               return add_user_meta($userId, 'stripe_account', $stripeId);
          }
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
               'roles' => $user->roles,
               
          ];
               


                    $this->userId = $user->ID;

        
         }
          } else if (is_int($idorUsername)) {
               $user = get_user_by('id',$idorUsername);
               if ($user) {
                    $this->info = [
                         'username' => $user->display_name,
                         'email' => $user->user_email,
                         'status' => $user->user_status,
                         'registered' => $user->user_registered,
                         'first_name' => $user->first_name,
                         'last_name' => $user->last_name,
                         'roles' => $user->roles,
                         'avatar_image' => get_avatar_url($user->ID)
                    ];
               $this->userId = $user->ID;
          $this->info['posts'] = $this->getPosts(['user_id' => $this->userId, 'pluck' => 'id']);
          $this->permissions['courses']['can_add_courses'] = $this->canAddCourse();
          $this->info['account_type'] = $this->account_type();
                    $this->info['payments'] = [
                         'id' => $this->getStripeAccount(true),
                         'all_ids' => $this->getStripeAccount(),

                    ];
               }
          }
          return $this->info;
         
     }
     function checkUserInfo() {
          if (is_user_logged_in() || current_user_can('administrator')  )return true;
          return false;
     }
     function isPostAuthor($postid, $userId = null) {
          $userId = $this->checkUserId($userId);
          $currPost = get_post($postid);
          return $currPost->post_author == $userId;
     
     }
     function canAddCourse($userId = null) {
          $userId = $this->checkUserId($userId);
          $posts = $this->getPosts();
          if (strtolower($this->account_type()) == 'free' && count($posts['courses']) == 1) {
               return false;
          }

          return true;

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