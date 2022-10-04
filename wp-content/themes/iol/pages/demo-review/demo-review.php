<section class=" ph-7 main-content">
     <div class="review">
          <?php

          $post = new WP_Query([
              'p' => get_query_var('courseid') ? get_query_var('courseid') : 8554,
              'post_type' => 'courses'
          ]);

          ?>

<?php
     
 while($post->have_posts()) {
     $post->the_post()
     ?>
          <h1 class="text-title text-lg bold">

          <?= the_title() ?>
          </h1>
          <p class="">
               Write down your experience with the course and the educator. You are helping The Internet of Learning and The Course a lot!
          </p>

          <form class="formInput">
               <label class='title left m-0 title-xsm bold'>
                    *Rating
               </label>
               <select class="mb-2">
                    <!-- add more bzass for jsx -->
                    <option value="">Number of stars</option>
                    <option value="0">0 </option>
                    <option value="1">1 </option>
                    <option value="2">2 </option>
                    <option value="3">3 </option>
                    <option value="4">4 </option>
                    <option value="5">5 </option>
               </select>
               <label class='title left m-0 title-xsm bold'>
                    *Write your experience with the course (280 characters max)
               </label>
               <textarea id='review-experience' maxlength="280"></textarea>
               <p id='remaining-characters'> (280) characters remaining</p>
          </form>

          <button id='review-submit' class="btn btn-yellow right  btn-lg ">
               SUBMIT REVIEW
          </button>
          <div class="clearfix divider-lg">

          </div>
     </div>

<?php } ?>
</section>