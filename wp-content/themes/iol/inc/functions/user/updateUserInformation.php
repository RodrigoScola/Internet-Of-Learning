<?php 
function updateUserInformation($userId,$newInfo) {
     if ($userId !== get_current_user_id() || !current_user_can('administrator') ) return null;

     $currentUserInfo = new WP_User($userId );

     $updated = wp_update_user([
          "ID" => $currentUserInfo->ID,
          'display_name' => "admin",
          'first_name' => $newInfo['first_name'] ? sanitize_text_field($newInfo['first_name']) : $currentUserInfo->first_name,
          'last_name' => $newInfo['last_name'] ? sanitize_text_field($newInfo['last_name']) : $currentUserInfo->last_name,
          'email' => $newInfo['email'] ? sanitize_text_field($newInfo) : $currentUserInfo->user_email,         
     ]);
     return $updated;
}