<header class='page-header'>
     <?php
     $ph = new PageHandler();
     $ph->redirectIfNotLogged();
     $userdata = new User();

     $url = "/components/heading/header";
     // if(wp_is_mobile()) {
     // $url .= '_mobile';
     // }
     get_template_part($url . '_mobile');
     ?>




</header>