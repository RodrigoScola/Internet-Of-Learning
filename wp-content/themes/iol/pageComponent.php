<?php

class Page
{
     public $pageType;
     public $htmlname;
     private $url;
     public $createFolder;
   
     function __construct($name, $options = [
          'htmlname' => 'page-',
          "page_type" => 'pages',
          'has_jsx' => false,
          'create_folder' => false
     ])
     {
          $this->createFolder = $options['create_folder'];
          $this->name = $name;
          add_action('init', [$this, 'onInit']);
          $this->htmlname = $options['htmlname'];
          $this->pageType = $options['page_type'];
          $this->url = "/pages";
          $this->hasjsx = $options['has_jsx'];
          // add nonce later
          if ($this->pageType !== 'pages') {
               $this->url = "/pages/{$this->pageType}";
          }
     }
     function ourRenderCallback($attributes, $content)
     {
          ob_start();
          require get_theme_file_path("{$this->url}/{$this->name}/{$this->name}.php");
          return ob_get_clean();
     }
     
     function onInit()
     {
          $url = "/pages";
          if ($this->pageType !== 'pages') {
               $url = "/pages/{$this->pageType}";
          }
          if ($this->createFolder == true) {

          createFolder("{$url}/{$this->name}");
          createFile("{$url}/{$this->name}/{$this->name}.js", "wp.blocks.registerBlockType('iolblock/{$this->name}', {title: '{$this->name} Component',edit: () => {return wp.element.createElement('div',{className:'our-placeholder-block',},'{$this->name} Component render')},save: () => {return null},})            
               ");
          createFile("{$url}/{$this->name}/{$this->name}.php", "<div id='{$this->htmlname}{$this->name}' class='{$this->name} main-content'></div>");

          createFile("/templates/" . "{$this->htmlname}" . $this->name . ".html", "<!-- wp:iolblock/footer -->\n<!-- wp:iolblock/{$this->name} -->\n<!--  wp:iolblock/header -->");

          }



          if ($this->hasjsx) {
               createFile("/src/pages/{$this->name}.js", "import React from 'react'\nimport ReactDom from 'react-dom'\n window.addEventListener('load', () => {\n	const div = document.querySelectorAll('#{$this->htmlname}{$this->name}')\n	div.forEach((elem) => {		\nconsole.log(elem)	\n	ReactDom.render(<RenderComponent />, elem)\n	}) }) \n function RenderComponent() {\n return ( <>\n<h1>Works</h1>\n</>\n	)}");

               if (!is_admin()) {

                    wp_enqueue_script('attention' . $this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", ['wp-element', 'wp-api-fetch']);
               }
          }

          wp_register_script($this->name, get_stylesheet_directory_uri() . "{$url}/{$this->name}/{$this->name}.js", array('wp-blocks', 'wp-editor'));

          register_block_type("iolblock/{$this->name}",  [
               'editor_script' => $this->name,
               'render_callback' => [$this, 'ourRenderCallback']
          ]);
     }
}


new Page('password-reset');
new Page('test', [
'has_jsx' => true,
     'page_type' => 'test',
     'htmlname' => 'archive-'
]);
new page('component404', [
     'htmlname' => 'page-',
]);
new Page('about-us');
new Page('for-students');
new Page('for-educators');
new Page('listing');
new Page('privacy-policy');
new Page('terms-and-conditions');
new Page('demo-course');
new Page('search', [
     'has_jsx' => true
]);
new Page('archive',[
     'htmlname' => '',
     'page_type' => 'archive'
]);
new Page('blog');
new Page('search-list');
new Page('demo-blog');
new Page('demo-review');
new Page('sign-in');
new Page('sign-up', [
     'has_jsx' => true,
]);
new Page('register');
new Page('login');
new Page('new-course', [
     'has_jsx' => true
]);
new Page('front-page', [
     'htmlname' => 'page-',
     "page_type" => "page",
]);
new Page('confirmation', [
     'htmlname' => 'single-',
     'page_type' => 'confirmation'
]);
new Page('thank-you-for-signing-up', [
     'htmlname' => 'single-confirmation-',
     'page_type' => 'confirmation'
]);
new Page('password-has-changed', [
     'page_type' => 'confirmation',
     'htmlname' => "single-confirmation-",
]);
new Page('dsboard');
new Page('course-settings', [
     'htmlname' => 'single-dashboard-',
     'page_type' => 'dashboard',
     'has_jsx' => true
]);
new Page('my-courses', [
     'htmlname' => 'single-dashboard-',
     'page_type' => 'dashboard'
]);
new Page('course-reviews', [
     'htmlname' => 'single-dashboard-',
     'page_type' => 'dashboard'
]);
new Page('course-widgets', [
     'htmlname' => 'single-dashboard-',
     'page_type' => 'dashboard'
]);
new Page('account-settings', [
     'htmlname' => 'single-dashboard-',
     'page_type' => 'dashboard'
]);
new Page('admin-dashboard', [
     'htmlname' => 'archive-',
     'page_type' => 'admin-dashboard'
]);
new Page('users', [
     'htmlname' => 'single-admin-dashboard-',
     'page_type' => 'admin-dashboard'
]);
new Page('username', [
     'htmlname' => 'single-admin-dashboard-',
     'page_type' => "admin-dashboard"
]);
new Page('course-name', [
     'htmlname' => 'single-admin-dashboard-',
     'page_type' => "admin-dashboard"
]);

new Page('your-information', [
     'htmlname' => 'single-services-',
     'page_type' => "services"
]);
new Page('order-payment', [
     'htmlname' => 'single-services-',
     'page_type' => "services"
]);
new Page('courses', [
     'htmlname' => 'archive-',
     'page_type' => "courses"
]);
new Page('course', [
     'htmlname' => 'single-',
     'page_type' => 'courses',
     'has_jsx' => true
]);


new Page("category", [
     'htmlname' => '',
     'page_type' => 'archive'
]);
new Page("page", [
     'htmlname' => '',
]);

new Page('animations', [
     'htmlname' => 'single-test-',
     'page_type' => 'test'

]);
new Page('inputs', [
     'htmlname' => 'single-test-',
     'page_type' => 'test',
]);
new Page('test-functions', [
     'htmlname' => "single-test-",
     'page_type' => 'test'
]);
new Page('toast',[
     'htmlname' => "single-test-",
     'page_type' => 'test',
     'has_jsx' => true,
]);

new page('post', [
     'htmlname' => 'single-',

]);
