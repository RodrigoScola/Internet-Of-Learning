<?php

function add_breadcums()
{
     if (function_exists('yoast_breadcrumb')) {
          yoast_breadcrumb('<p id="breadcrumbs">', '</p>');
     }
}


function array_to_object(array $array, $defaults)
{
     $narr = [];

     foreach ($array as $item) {
          $narr[$item] = $defaults;
     }
     return $narr;
}




class PageHandler
{
     public $pageParams;
     public $post_id;
     public static $loggedInProtectedPages = ['dashboard', 'admin-dashboard', 'reviews', 'new-course',];
     public static $logInTypePages = ['register', 'login',];
     function get_page_params($post_id = null)
     {
          if (!$post_id) {
               global $post_id;
          }
          $this->post_id = $post_id;
          $params = [];
          foreach ($_GET as $key => $value) {
               if (gettype($value) == 'string') {

                    if (str_contains($value, ',')) {
                         $value = explode(',', $value);
                    }
               }

               $params[$key] = $value;
          }
          $this->pageParams = $params;
          return $params;
     }
     public  function LogOutIfLoggedIn($post_id = null)
     {
          if ($post_id == null) {
               $post_id = $this->post_id ? $this->post_id : get_the_ID();
          }
          $post = get_post($post_id);
          if (array_search($post->post_name, PageHandler::$logInTypePages)) {
               wp_logout();
          }
     }
     function redirectIfNotLogged($post_id = null)
     {
          if ($post_id == null) {
               $post_id = $this->post_id;
          }
          $post = get_post($post_id);
          $format = new Formatting();
          if (($format->some($this::$loggedInProtectedPages, [$post->post_type, $post->post_name])) && !is_user_logged_in()) {
               wp_safe_redirect(wp_registration_url());
               exit;
          }
     }
     public static function listPages($post_id = null)
     {
          if ($post_id == null) {
               $post_id = get_the_ID();
          }
          $firstParentId = wp_get_post_parent_id($post_id);
          function recurParentPage($id, $all = [])
          {
               if ($all == []) {
                    array_unshift($all, $id);
               }
               $parentPage = wp_get_post_parent_id($id);
               if (!$parentPage) {
                    return $all;
               }
               array_unshift($all, $parentPage);
               return recurParentPage($parentPage, $all);
          }
          $p = recurParentPage($firstParentId);
          echo '<div class="align">';
          foreach ($p as $id) {
               $post = get_post($id);

?>
               <a href="<?php echo esc_url(get_post_permalink($id)) ?>"><?php echo str_replace("-", ' ', ucfirst($post->post_title)) ?><?php echo $id == $firstParentId ? "" : do_shortcode('[IconNext class="ph-02  mv-3"]') ?> </a>
<?php

          }
          echo "</div>";
     }


     public static function getQueryParams()
     {
          global $wp;
          return array_merge(['url' => home_url('/') . $wp->request . '/?'], array_filter($wp->query_vars, function ($item) {
               return $item;
          }));
     }

     public  function toQuery($arr = [])
     {
          if (!$arr) {
               $arr = $this->get_page_params();
          }
          $str = '/?';
          foreach ($arr as $key => $value) {
               if ($key !== 'url') {
                    if (gettype($value) == 'array') {
                         foreach ($value as $currentValue) {
                              $str .= $key . '=' . $currentValue . '&';
                         }
                    } else {


                         $str .= $key . '=' . $value . '&';
                    }
               } else {
                    $str .= $value;
               }
          }
          return substr_replace($str, '', -1);;
     }
}
class Formatting
{

     function some(array $array, $item)
     {
          if (gettype($item) == 'array') {
               foreach ($item as $currItem) {
                    if (in_array($currItem, $array)) {
                         return true;
                    }
               }
          } else {
               if (in_array($item, $array)) {
                    return true;
               }
          }
          return false;
     }
}
