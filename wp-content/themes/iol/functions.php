<?php

add_filter('widget_text', 'do_shortcode');
// require_once get_theme_file_path('/vendor/autoload.php');
require_once get_theme_file_path('/inc/functions/getBrain.php');
require_once get_theme_file_path('/inc/functions/renderStars.php');
require_once get_theme_file_path('/components/cards/course-card.php');
require_once get_theme_file_path('/components/shortcodes/index.php');
// require_once get_theme_file_path('/components/cards/blog-card.php');
require_once get_theme_file_path('/components/list/widget-list.php');
require_once get_theme_file_path('/inc/functions/inputs.php');
require_once get_theme_file_path('/inc/functions/uploadPostThumb.php');
require_once get_theme_file_path('/inc/functions/classes/index.php');
require_once get_theme_file_path('/inc/functions/utils.php');
require_once get_theme_file_path('/pageComponent.php');

require_once get_theme_file_path('/inc/routes/index.php');
require_once get_theme_file_path('/inc/hooks/index.php');




define("SCRIPT_DEBUG", true);

function IOL_favicon()
{
?>
     <link rel='shortcut icon' href="<? echo get_theme_file_uri('/images/logo/favicon.svg') ?>">
<?php
}
add_action('wp_head', 'IOL_favicon');

add_filter('register_url', 'custom_register_url');
function custom_register_url($register_url)
{
     wp_redirect(esc_url(site_url('/register')));
     exit;
}



function um_login_url($login_url, $redirect)
{
     $page_id = UM()->options()->get('core_login');
     if (get_post($page_id)) {
          $login_url = add_query_arg('redirect_to', urlencode($redirect), get_permalink($page_id));
     }
     return $login_url;
}
add_filter('login_url', 'um_login_url', 10, 2);

function createFolder($path = 'pages/newPage')
{
     if (!file_exists(get_theme_file_path($path))) {
          mkdir(get_theme_file_path($path), 0777, true);
     }
}
function createFile($path = 'pages/newPage.php', $content, $atts = [])
{
     if ($atts['title'] !== '') {
          $lastDash = strrpos($path, '/');
          $path = substr($path, 0, $lastDash + 1) . $atts['title'];
     }
     if (!file_exists(get_theme_file_path($path))) {
          $fp = fopen(get_theme_file_path($path), 'wb');
          fwrite($fp, $content);
          fclose($fp);
     }
}



add_filter('pre_get_posts', 'query_post_type');
function query_post_type($query)
{
     global $wp_query;

     if ($wp_query->is_main_query() && !is_admin()) {


          if (is_category() || is_post_type_archive('courses')) {
               $post_type = sanitize_text_field(get_query_var('type', 'courses'));

               $query->set('post_type', $post_type);
               $sortVar = sanitize_text_field(get_query_var('sort'));

               if ($sortVar == 'latest') {
                    $query->set('order', 'DESC');
                    $query->set('orderby', 'ID');
               } else if ($post_type == 'courses' && is_search()) {
                    $query->set('orderby', 'meta_value_num');
                    $meta_query = (array)$query->get('meta_query');
                    $meta_query[] = Courses::get_courses_query([
                         'rating' => get_query_var('rating', []),
                         'course_level' => get_query_var('course_level', []),
                         'release_year' => get_query_var('release_year'),
                         'paged' => get_query_var('paged'),
                         'categories' => get_query_var('categories'),

                    ]);
                    $query->set('meta_query', $meta_query);
               }
               return $query;
          }
     }
}


function iolFile()
{
     wp_enqueue_script('main-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
     wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
     wp_enqueue_style('animations_css', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
     wp_enqueue_style('custom-font', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
     wp_enqueue_style('main', get_theme_file_uri('build/style-index.css'));
     wp_enqueue_style('main-extra', get_theme_file_uri('build/index.css'));
     wp_localize_script('main-js', 'ioldata', array(
          'root_url' => get_site_url(),
          'nonce' => wp_create_nonce('wp_rest'),
          'post_id' => get_the_ID(),
          'slug' => str_replace(' ', '-', get_the_title()),
          'user_id' => get_current_user_id(),
          'is_mobile' => wp_is_mobile(),
     ));
}
function iolFeatures()
{

     add_theme_support('post-thumbnails');
     add_image_size('card', 400, 260, true);
     add_image_size('landscape', 1000, 800, true);
     add_theme_support('title-tag');
     add_theme_support('editor-styles');
     add_editor_style([
          'build/style-index.css', 'build/index.css',
     ]);
}


// redirect logged in users 
function redirectFromAdmin()
{
     $currentUser = wp_get_current_user();
     if (count($currentUser->roles) == 1 && $currentUser->roles[0] == 'subscriber') {
          wp_redirect(site_url('/'));
          exit;
     }
}
function subscriberFunc()
{
     $currentUser = wp_get_current_user();
     if (!current_user_can('administrator')) {
          show_admin_bar(false);
     }
}
// customize login screen 
add_action('wp_enqueue_scripts', 'iolFile');
add_action('after_setup_theme', 'iolFeatures');


// php rendered blocks
// when creating a new block, has to be inside a folder and have 2 files, a .js file and a .php file with the exact same name

class PlaceholderBlock
{
     function __construct($name, $rendercallback = false)
     {
          $this->name = $name;
          add_action('init', [$this, 'onInit']);
          $this->renderCallback = $rendercallback;
     }
     function ourRenderCallback($attributes, $content)
     {

          ob_start();
          require get_theme_file_path("/blocks/{$this->name}/{$this->name}.php");
          wp_enqueue_script('my-theme-frontend', get_stylesheet_directory_uri() . '/build/frontend.js', ['wp-element']);
          // the parent element will still be rendered, and the react component will be treated as its child 
          return ob_get_clean();
     }
     function onInit()
     {
          $args = [
               'editor_script' => $this->name,
          ];
          wp_register_script($this->name, get_stylesheet_directory_uri() . "/blocks/{$this->name}/{$this->name}.js", array('wp-blocks', 'wp-editor'));
          if ($this->renderCallback) {
               $args['render_callback'] =     [$this, 'ourRenderCallback'];
          }
          register_block_type("iolblock/{$this->name}",  $args);
     }
}
new PlaceholderBlock('header', true);
new PlaceholderBlock('footer', true);
new PlaceholderBlock('confirmationsingle', true);


flush_rewrite_rules(false);


// blocks that have interactivity
// when creating a new block, has to be inside a folder and have 2 files, a .js file and a .php file with the exact same name





class JSXBlock
{
     function __construct($name, $callRender = null, $data = null)
     {
          $this->name = $name;
          $this->data = $data;

          $this->renderCallBack = $callRender;
          add_action('init', [$this, 'onInit']);
     }
     function ourRenderCallback($attributes, $content)
     {

          wp_enqueue_script('my-theme-frontend', get_stylesheet_directory_uri() . '/build/frontend.js', ['wp-element']);

          ob_start();
          require get_theme_file_path("/blocks/" . $this->name . ".php");
          return ob_get_clean();
     }
     function onInit()
     {
          $args =
               [
                    'editor_script' => $this->name
               ];
          if ($this->renderCallBack) {
               $args['render_callback'] = [$this, 'ourRenderCallback'];
          }


          wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
          if ($this->data) {
               wp_localize_script($this->name, $this->name, $this->data);
          }
          register_block_type("iolblock/{$this->name}", $args);
     }
}
new JSXBlock('genericbutton');
new JSXBlock('generictext', true);
new JSXBlock('genericinput');


function custom_course_params()
{


     register_rest_field('courses', 'image_slug', [
          'get_callback' => function () {
               $items = [];
               foreach (get_intermediate_image_sizes() as $item => $value) {
                    $items[$value] = get_the_post_thumbnail_url(null, $value);
               }
               return $items;
          }
     ]);
}
add_action('rest_api_init', 'custom_course_params');


function admin_routes()
{
     add_rewrite_rule('admin-dashboard/users/([a-z0-9]+)/courses/?', 'index.php?pagename=courses&username=$matches[1]', 'top');
     add_rewrite_rule('admin-dashboard/users/([a-z0-9]+)[/]?$', 'index.php?username=$matches[1]', 'top');
}

add_action('init', 'admin_routes');





add_filter('query_vars', function ($query_vars) {
     $query_vars[] = 'username';
     $query_vars[] = 'courseid';
     $query_vars[] = 'courses';
     $query_vars[] = 'path';
     $query_vars[] = 'pagename';
     $query_vars[] = 'orderby';
     $query_vars[] = 'sort';
     $query_vars[] = 's';
     $query_vars[] = 'term';
     $query_vars[] = 'dashboardpage';
     $query_vars[] = "type";
     $query_vars[] = "course_level";
     $query_vars[] = "rating";
     $query_vars[] = "release_year";
     $query_vars[] = "paged";
     $query_vars[] =     "categories";


     return $query_vars;
});

add_action('template_include', function ($template) {

     if (get_query_var('username') == true && get_query_var('pagename') == 'courses') {
          return
               get_template_directory() . '/pages/admin-dashboard/course-name/courses.php';
     }
     if (get_query_var('username')) {

          return get_template_directory() . '/pages/admin-dashboard/username/username.php';
     }
     return $template;
});

function search_fitler_post_types($query)
{
     if (!$query->is_admin && $query->is_search) {
          $query->set('post_type', array('courses'));

          // $query->set('s', 'car');
     }
     return $query;
}
add_filter('pre_get_posts', 'search_fitler_post_types');
function remove_uncategorized_links($categories)
{

     foreach ($categories as $cat_key => $category) {
          if (1 == $category->term_id) {
               unset($categories[$cat_key]);
          }
     }

     return $categories;
}
add_filter('get_the_categories', 'remove_uncategorized_links', 1);


function ww_load_dashicons()
{
     wp_enqueue_style('dashicons');
}
add_action('wp_enqueue_scripts', 'ww_load_dashicons', 999);


add_filter('um_change_password_page_hidden_fields', 'renderPasswordChangeText');

function renderPasswordChangeText()
{
?>
     <section class='black'>
          <h1 class="black text-title text-lg text-center bold">Change your Password</h1>
          <p class='text-center  text-sm'>In order to <span class='bold'>protect your account</span>, make sure your password:</p>
          <ul class='min-list'>
               <li style='list-item' class='flex flex-row flex-left align-center '>
                    [IconCheckMark ]
                    <p class='mt-03 text-sm'>Has to be 8 items</p>
               </li>
               <li>
                    [IconCheckMark]
                    <p class='mt-03 text-sm'>Should not match or significantly contain parts of your email</p>
               </li>
               <li>
                    [IconCheckMark]
                    <p class='mt-03 text-sm'>Is not reused on this or any other account</p>
               </li>
          </ul>
     </section>
<?php
}

add_action('template_redirect', 'um_restrict_login_page_logged_in');
function um_restrict_login_page_logged_in()
{
     if (um_is_core_page('login') && is_user_logged_in()) {
          wp_redirect('/dashboard');
          exit;
     }
}

class MessedUp
{
     public static function deleteTrashedPosts()
     {
          $trashed = new WP_Query([
               'post_status' => 'trash',
               'post_type' => 'any',
               'posts_per_page' => -1
          ]);
          while ($trashed->have_posts()) {
               $trashed->the_post();
               wp_delete_post(get_the_ID(), true);
          }
     }
     public static function resetTodaysPosts()
     {
          $today = getdate();
          $everything = new WP_Query([
               'posts_per_page' => -1,
               'post_type' => 'any',
               'orderby' => 'rand',
               'date_query' => array(
                    array(
                         'year'  => $today['year'],
                         'month' => $today['mon'],
                         //     'day'   => $today['mday'],
                    ),
               ),

          ]);
          while ($everything->have_posts()) {
               $everything->the_post();
               if (get_the_ID() !== 8554) {

                    wp_delete_post(get_the_ID());
               }
          }
     }
}


function get_cat_list()
{
     return get_categories([
          'fields' => 'names',
          'hide_empty' => false,
          'exclude' => [0, 1],
     ]);
}


// category post count
add_action('wp_insert_post', 'updateCatCount', 99, 2);
add_action('before_delete_post', 'updateCatCount', 99, 2);
function updateCatCount($post_id, $post, $update = false)
{

     if (($post->post_type !== 'courses' && $post->post_type !== 'post')  || $update == true) {
          return;
     }

     $categories = wp_get_post_categories($post_id, [
          'fields' => 'ids'
     ]);

     foreach ($categories as $currentCategory) {
          $totalPosts = new WP_Query([
               'post_type' => $post->post_type,
               'cat' => $currentCategory,
          ]);
          update_term_meta($currentCategory, $post->post_type . '_count', $totalPosts->post_count);
     }
}



add_filter('um_register_form_button_one', function ($btntext) {
     return 'Confirm Sign Up';
}, 10, 2);

add_filter('um_login_form_button_two_url', 'um_redirectToPasswordReset', 10, 2);
function um_redirectToPasswordReset($btn_url)
{
     $btn_url = esc_url(site_url('/password-reset'));
     return $btn_url;
}
add_action('um_after_email_notification_sending', 'um_redirect_confirmation_page_email_sent', 10, 2);
function um_redirect_confirmation_page_email_sent($user_emai, $template)
{
     if ("resetpw_email" == $template && um_is_core_page("password-reset")) {
          $email = email_exists($_REQUEST['username_b']);
          $username = username_exists($_REQUEST['username_b']);
          var_dump($email);
          if (!$email && !$username) {
               wp_redirect(get_site_url() . '/confirmation/your-recovery-link-has-been-sent');
          } else {
               wp_redirect(get_site_url() . '/confirmation/your-recovery-link-has-been-sent');
          }
          exit;
     }
}
add_action('um_after_changing_user_password', 'redirect_confirmation_password_change', 10, 2);
function redirect_confirmation_password_change($user_id)
{
     wp_redirect(site_url('/confirmation/password-has-changed'));
}


add_action('iol_before_confirmation_post', function (WP_Post $post) {
?>

     <h3><?php echo $post->post_name ?>asdf</h3>
<?php
});
