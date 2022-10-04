<?php 

function userroute() {
     register_rest_route('iol/v1', 'users/(?P<userid>\d+)', [
          'callback' => 'getuser',
          'methods' => WP_REST_Server::READABLE,
          'args' => [
               'id' => [
                    'validate_callback' => 'is_numeric'
               ]
          ],
          
     ]);
     register_rest_route('iol/v1', 'usermeta', [
          'callback' => 'getusermeta',
          'methods' => WP_REST_Server::READABLE,
          'args' => [
               'id' => [
                    'validate_callback' => 'is_numeric'
               ]
          ],

     ]);
     register_rest_route('iol/v1', 'usermeta/(?P<userid>\d+)', [
          'callback' => 'getusermeta',
          'methods' => WP_REST_Server::READABLE,
          'args' => [
               'id' => [
                    'validate_callback' => 'is_numeric'
               ]
          ],

     ]);
     register_rest_route('iol/v1', 'resetusersmeta', [
          'callback' => 'resetUsersMeta',
          'methods' => WP_REST_Server::READABLE,
          

     ]);
}

function resetUsersMeta($data) {
     $users = get_users();
     $allIds = [];
     $currUser = new User();
     foreach($users as $user) {
          $ids = $currUser->getPosts([
               'user_id' => $user->ID,
               
          ]);
          $allIds[$user->ID] = $ids;
          update_user_meta($user->ID, 'posts', $ids);
     }
     return $allIds;
}


function getusermeta($data) {
     if ($data['userid']) {

     return get_user_meta((int)$data['userid'], 'posts');
     }
     $allusers = get_users();
     $allposts = [];
     foreach($allusers as $user) {
          $usermeta = get_user_meta($user->ID, 'posts',true);
           $allposts[$user->ID] = $usermeta;
     }
     return $allposts;
}
function getuser($data) {
     $curruser = new User((int)$data['userid']);
     return $curruser;
}



add_action('rest_api_init', 'userroute');

