<?php

$f = new PageHandler();
$for = new Formatting();

$f->get_page_params();




$catArr = explode(',', $f->pageParams['categories']);
$ratingArr = $f->pageParams['rating'] ? $f->pageParams['rating'] : [];
$levelArr = explode(',', $f->pageParams['course_level']);
?>

<form method="GET">

     <nav class='navigation-bar  pl-2'>
          <h1 class='text-title bold'>
               Categories
          </h1>
           <?php
          $categories = get_categories(array(
               'order'               => 'ASC',
               'orderby'             => 'name',
               'style'               => 'list',
               'hide_empty' => 0,
               'taxonomy'            => 'category',
          ));

          foreach ($categories as $category) {
               $coursesCount = (int)get_term_meta($category->term_id, get_post_type() . '_count', true);
               // var_dump($coursesCount);
               if ($coursesCount > 0) {


          ?>
                    <p>

                         <a href="<?php echo site_url() . '/category/' . $category->slug ?>"><?php echo "{$category->name} ({$coursesCount})" ?></a>
                    </p>
          <?php }
          }
          wp_reset_postdata()
          ?> 


               <div class="flex flex-col">
               <p class="bold ">Level</p>

               <label class="inlineflex ">
                    <input checked class='checkbox mr-05' type="checkbox" /> All

               </label>
               <label class="inlineflex ">
                    <input name='courselevel[]' value="beginner" class='checkbox mr-05' type="checkbox" /> Beginner
               </label> <label class="inlineflex ">
                    <input name="courselevel[]" value='advanced' class='checkbox mr-05' type="checkbox" /> Advanced
               </label>
               <label class="inlineflex ">
                    <input name='courselevel[]' value='master' class='checkbox mr-05' type="checkbox" /> Master
               </label>
               </div>
               <div class='flex flex-col'>

               <p class="bold mb-09 pl-02">Release date</p>
               <label class="inlineflex ">
                    <input name='release_year[]' value='2022' class='checkbox mr-05 mb-03' type="checkbox" /> 2022
               </label>
               <label class="inlineflex ">
                    <input name='release_year[]' value='2021' class='checkbox mr-05 mb-03' type="checkbox" /> 2021
               </label>
               <label class="inlineflex ">
                    <input name='release_year[]' value='2020' class='checkbox mr-05 mb-03' type="checkbox" /> 2020
               </label>
               <label class="inlineflex ">
                    <input name='release_year[]' value='2019' class='checkbox mr-05 mb-03' type="checkbox" /> 2019
               </label>
               </div>
               <div class="flex flex-col">

               <p class="bold  ">Rating</p>

               <?php
               for ($i = 1; $i <= 5; $i++) { ?>

                    <label class="inlineflex ">
                         <input <?= $for->some($ratingArr, $i)  ? 'checked' : '' ?> name='rating[]' value='<?= $i ?>' class='checkbox  mb-03' type="checkbox" /> <?php echo renderStars($i) ?>
                    </label>


               <?php
               } ?>
               </div>

          <!-- <noscript> -->
          <div id="search-container" class="center mv-05">

               <button id='search-button' class="btn btn-yellow bold pb-06 w-90">[IconSearch class=" "]</button>
          </div>
          <!-- </noscript> -->
     </nav>
</form>