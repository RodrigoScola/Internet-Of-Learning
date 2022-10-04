<?php


               $results = searchResults([
                    'term' => sanitize_text_field(get_query_var('term')),
                    'rating' => sanitize_text_field(get_query_var('rating')),
                    // 'release_year' => '2022',
                    // 'categories' => '0',
                    // 'courselevel' => 'beginner'
               ]);

               ?>

<div class='search-page main-content'>
     <nav class='navigation-bar pl-2'>
          <h1 class='text-title bold'>
               Categories
          </h1>
          <?php
          global $s;

          $categories = get_categories(array(
               'hide_empty'          => 0,
               'hide_title_if_empty' => false,
               'orderby'             => 'name',
               'style'               => 'list',
              
          ));


          foreach ($categories as $category) { ?>
               <p><a class="" href='<?= '/category/' . $category->slug ?>'><?php echo "{$category->name} ({$category->category_count})" ?></a></p>
          <?php } ?>


          <details class='details'>
               <summary class="bold ">Level</summary>
               <label class="inlineflex ">
                    <input class='checkbox mr-05' type="checkbox" /> All

               </label>
               <label class="inlineflex ">
                    <input class='checkbox mr-05' type="checkbox" /> Beginner
               </label> <label class="inlineflex ">
                    <input class='checkbox mr-05' type="checkbox" /> Advanced
               </label> <label class="inlineflex ">
                    <input class='checkbox mr-05' type="checkbox" /> Master
               </label>
          </details>
          <details class='details mt-1'>
               <summary class="bold mb-09 pl-02">Release date</summary>
               <a>2022</a>
               <a>2021</a>
               <a>2020</a>
               <a>2019</a>
          </details>
          <details class='details'>
               <summary class="bold  ">Rating</summary>

               <label class="inlineflex ">
                    <input class='checkbox mr-05 mb-03' type="checkbox" /> <?php echo renderStars(1) ?>
               </label> <label class="inlineflex ">
                    <input class='checkbox mr-05 mb-03' type="checkbox" /> <?php echo renderStars(2) ?>
               </label> <label class="inlineflex ">
                    <input class='checkbox mr-05 mb-03' type="checkbox" /> <?php echo renderStars(3) ?>
               </label>
               <label class="inlineflex ">
                    <input class='checkbox mr-05 mb-03' type="checkbox" /> <?php echo renderStars(4) ?>
               </label>
               <label class="inlineflex ">
                    <input class='checkbox mr-05 mb-03' type="checkbox" /> <?php echo renderStars(5) ?>
               </label>
          </details>
     </nav>

     <div class="searchlist">
          <p class="text-title text-sm bold  mv-05">
               "<?= sanitize_text_field(get_query_var('s')) ?>" in all courses
          </p>
          <aside class="flex-row flex mb-1 w-100 flex-between">
               <!-- <p>
                   <?php $allsearch = new WP_Query("s=$s&showposts=-1"); echo $allsearch->found_posts; ?> Courses Found
               </p> -->
               <?= get_query_var('username') ?>
               <p>432 Courses found </p>
               <div class="align-center ">
                    <select class="">
                         <option>
                              Best Reviews
                         </option>
                    </select>
                    <a id='change-mode' href='' class="bg-blue  p-06 btn-round_semi inlineblock mh-1">
                         <span class="dashicons dashicons-align-right white"></span>
                    </a>
               </div>
          </aside>
              
          <section class="changeMode gridcol-3 ">
               <?php 
                    foreach($results as $item) {
     // renderCourseCard($item);
    
                    }
               
               
                ?>

          </section>
          
          <aside class='pagination w-100  '>
               <span class="selected">1</span>
               <span>2</span>
               <span>3</span>
               <span>4</span>
               <span>5</span>
               <span class="icon dashicons dashicons-arrow-right-alt2"></span>
               <span class="icon ml-01 dashicons dashicons-arrow-right-alt2"></span>

          </aside>
     </div>


</div>