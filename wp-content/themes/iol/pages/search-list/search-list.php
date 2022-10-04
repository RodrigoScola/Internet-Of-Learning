<?php

$for = new Formatting();

$f = new PageHandler();
$f->get_page_params();

$results = searchResults($f->pageParams);


$release_year = get_query_var('release_year', 0)[0];
$catArr = get_query_var('categories', []);
$ratingArr = get_query_var('rating', []);
$levelArr = get_query_var('courselevel', []);
?>

<div class='search-page main-content pb-4 ph-03'>
     <form method="GET">
          <input type="hidden" name="term" value="<?php echo $f->pageParams['term'] ?: "" ?>" />


          <nav class='navigation-bar pl-2'>
               <h1 class='text-title bold'>
                    Categories
               </h1>
               <?php
               global $s;

               $categories = get_categories(array(
                    'orderby'             => 'name',
                    'style'               => 'list',

               ));

               foreach ($categories as $category) {
                    $coursesCount = (int)get_term_meta($category->term_id,  'courses_count', true);

                    if ($coursesCount) {

               ?>

                         <p><label class="inlineflex ">
                                   <input <?php echo $for->some($catArr, $category->cat_ID) ? "checked" : '' ?> name='categories[]' value='<?php echo $category->cat_ID ?>' class='checkbox mr-05' type="checkbox" /> <?php echo "{$category->name}" ?>
                              </label>
                         </p>

               <?php
                    }
               } ?>


               <div class='flex flex-col'>
                    <p class="bold ">Level</p>
                    <label class="inlineflex ">
                         <input checked class='checkbox mr-05' type="checkbox" /> All

                    </label>
                    <label class="inlineflex ">
                         <input name='courselevel[]' value="beginner" class='checkbox mr-05' type="checkbox" /> Beginner
                    </label> <label class="inlineflex ">
                         <input name="courselevel[]" value='intermediate' class='checkbox mr-05' type="checkbox" /> intermediate
                    </label>
                    <label class="inlineflex ">
                         <input name='courselevel[]' value='Advanced' class='checkbox mr-05' type="checkbox" /> Advanced
                    </label>
               </div>
               <div class='flex flex-col'>
                    <p class="bold mb-09 pl-02">Release date</p>
                    <label class="inlineflex ">
                         <input <?php echo $release_year == '2022' ? 'checked' : '' ?> name='release_year[]' value='2022' class='checkbox mr-05 mb-03' type="checkbox" /> 2022
                    </label>
                    <label class="inlineflex ">
                         <input <?php echo $release_year == '2021' ? 'checked' : '' ?> name='release_year[]' value='2021' class='checkbox mr-05 mb-03' type="checkbox" /> 2021
                    </label>
                    <label class="inlineflex ">
                         <input <?php echo $release_year == '2020' ? 'checked' : '' ?> name='release_year[]' value='2020' class='checkbox mr-05 mb-03' type="checkbox" /> 2020
                    </label>
                    <label class="inlineflex ">
                         <input <?php echo $release_year == '2019' ? 'checked' : '' ?> name='release_year[]' value='2019' class='checkbox mr-05 mb-03' type="checkbox" /> 2019
                    </label>
                    </d>
                    <div class='flex flex-col'>
                         <p class="bold  ">Rating</p>

                         <?php
                         for ($i = 1; $i <= 5; $i++) { ?>

                              <label class="inlineflex ">
                                   <input <?= $for->some($ratingArr, $i)  ? 'checked' : '' ?> name='rating[]' value='<?= $i ?>' class='checkbox mb-03' type="checkbox" /> <?php echo renderStars($i) ?>
                              </label>


                         <?php
                         } ?>

                         </d>
                         <!-- <noscript> -->
                         <div id="search-container" class="m-auto  w-100 ">

                              <button id='search-button' class="btn btn-yellow bold pb-06 w-100 ">[IconSearch class=" "]</button>
                         </div>
                         <!-- </noscript> -->
          </nav>
     </form>
     <div class="searchlist">
          <p class="text-title text-sm bold  mv-05">
               "<?= esc_attr(strip_tags(get_query_var('term'))) ?>" in all courses
          </p>
          <aside class="flex-row flex mb-1 w-100 flex-between">
               <!-- <p>
                   <?php $allsearch = new WP_Query("s=$s&showposts=-1");
                    echo $allsearch->found_posts; ?> Courses Found
               </p> -->
               <p><?php echo $results['total'] ?> Course<?php echo $results['total'] > 0 ? '' : 's' ?> found </p>
               <div class="align-center ">
                    [SortPosts]
                    [ChangeMode]
               </div>
          </aside>

          <section class="changeMode courses gridcol-3 gap-2">
               <?php
               $posts = $results['posts'];
               if ($posts) {

                    foreach ($posts as $item) {
                         renderCourseCard($item);
                    }
               }
               ?>

          </section>
          <div class="p-3">

               <?php echo renderSearchPagination([
                    'max_num_pages' => $results['max_num_pages'],
                    'current' => get_query_var('paged', 1)
               ]) ?>
          </div>
     </div>


</div>