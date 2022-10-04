<?php

$f = new PageHandler();
$for = new Formatting();

$f->get_page_params();

if ($f->pageParams['term']) {
  $results = searchResults($f->pageParams);
}




$catArr = explode(',', $f->pageParams['categories']);
$ratingArr = explode(',', $f->pageParams['rating']);
$levelArr = explode(',', $f->pageParams['course_level']);
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
      ?>



      <?php
      foreach ($categories as $category) {


      ?>

        <p><label class="inlineflex ">
            <input <?php echo $for->some($catArr, $category->cat_ID) ? "checked" : '' ?> name='categories[]' value='<?php echo $category->cat_ID ?>' class='checkbox mr-05' type="checkbox" /> <?php echo "{$category->name}" ?>
          </label>
        </p>

      <?php
      } ?>


      <details class='details'>
        <summary class="bold ">Level</summary>
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
      </details>
      <details class='details mt-1'>
        <summary class="bold mb-09 pl-02">Release date</summary>
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
      </details>
      <details class='details'>
        <summary class="bold  ">Rating</summary>

        <?php
        for ($i = 1; $i <= 5; $i++) { ?>

          <label class="inlineflex ">
            <input <?= $for->some($ratingArr, $i)  ? 'checked' : '' ?> name='rating[]' value='<?= $i ?>' class='checkbox mr-05 mb-03' type="checkbox" /> <?php echo renderStars($i) ?>
          </label>


        <?php
        } ?>

      </details>
      <!-- <noscript> -->
      <div id="search-container" class="center mv-05">

        <button id='search-button' class="btn btn-yellow bold pb-06 w-90">[IconSearch class=" "]</button>
      </div>
      <!-- </noscript> -->
    </nav>
  </form>
  <div class="searchlist">
    
    <aside class="flex-row flex mb-1 w-100 flex-between">
    
      
      <div class="align-center ">
     
        <a id='change-mode' href='' class="bg-blue  p-06 btn-round_semi inlineblock mh-1">
          <span class="dashicons dashicons-align-right white"></span>
        </a>
      </div>
    </aside>

    <section class="changeMode courses gridcol-3 gap-2">
      <?php 
        while(have_posts()) {
  the_post();
  get_template_part('/components/cards/blog-card');

        }
      
      
      
       ?>

    </section>
    <div class="ph-3">

      <?php echo renderSearchPagination() ?>
    </div>
  </div>


</div>