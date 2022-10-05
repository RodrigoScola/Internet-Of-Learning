<div class="main-content ph-2">
     <?php init_posts() ?>

     <div class="hero">
          <div class='hero-left w-100 pb-2 '>
               <h1 class='text-title text-ld bold'>
                    About Us
               </h1>
               <p class='text-md subtitle'>
                    The number one marketplace to list your course in and reach a wider potential audience without breaking the bank.
               </p>
               <p class='text-md'>
                    Internet of Learning not only provides educators with a platform to create and share their courses but also allows them to connect with students from all over the world.
               </p>

               <p class='text-sm'>

                    Additionally, because the website is free to use, educators can find audiences for their courses without worrying about spending millions on leads while students can also easily access education.
               </p>

               <p class='text-sm'>

                    We also have custom-made packages for educators who want to use our marketplace to host their courses and get access to some of the most in-demand features to make their courses irresistible and evergreen and we’re always happy to help them with anything they need.
               </p>
               <div id='list_course_button' class="">

                    <a href="<?php echo esc_url(site_url('/new-course')) ?>" class='btn bold btn-lg btn-yellow bg text-center'>
                         LIST MY COURSE
                    </a>
               </div>
          </div>

          <div class='hero-right hero-image align-center'>
               <img src='<?php echo get_theme_file_uri('/images/svgs/illustration.png') ?>' alt='About us hero image' />
          </div>
     </div>
     <div class='divider'></div>
     <div>
          <h1 class='text-title text-center bold'>Join 1000s Of Educators Who Are Achieving Their Business Goals</h1>
          <div class="listing">
               <div class="listing-left">
                    <p class="listing-left-title  text-title  text-gnt blue bold"><?php echo wp_count_posts('courses')->publish ?></p>
                    <p class="listing-left-subtitle text-sm">Number of courses successfully listed</p>
               </div>
               <div class="listing-right">
                    <p class="listing-right-title text-title text-gnt bold teal">90%</p>
                    <p class="listing-right-subtitle text-sm">Of the educators see a drastic
                         increase in their course sales</p>
               </div>

          </div>
     </div>
     <article class='hero'>
          <section class="hero-left w-90">
               <h1 class='text-title bold'>Generate More Course Sales And Reach Your Ideal Audience Faster

               </h1>
               <p class='subtitle'>
                    A perfect marketplace for educators who want to share their knowledge with students from all corners of the globe. With our easy-to-use course listing website, and most in-demand features, you can list your courses and reach a wider potential audience in no time.
               </p>
               <img class="center-image" src='<?php echo get_theme_file_uri('/images/svgs/callframe.png') ?>' />
          </section>
          <section class='hero-right mt-3'>
               <ul class='list_brain'>

                    <li>
                         <p class="ml-1">
                              Reach a larger audience of potential students to boost your course sales and get a better return on your investment.
                         </p>
                    </li>

                    <li>

                         <p class="ml-1">Since our platform is available 24/7, you can list your course and let the students around the world find you. We handle all the marketing and promotion for you so that you can focus on creating great content. And, of course, you'll earn money every time a student signs up for your course.
                         </p>
                    </li>
                    <li>

                         <p class="ml-1">The Internet of learning makes it easy for educators to reach students around the world without spending a lot of money on marketing or promotion
                         </p>
                    </li> <br />
                    <li>

                         <p class="ml-1">By listing your courses on our platform, you'll be able to reach more students and build a reputation as a go-to educator in your field.
                         </p>
                    </li> <br />
                    <li>

                         <p class="ml-1">Make your course listing more appealing to potential students by including photos, videos, and detailed descriptions. Our listing platform makes it easy for you to showcase your course and attract more students.
                         </p>
                    </li>

               </ul>
          </section>
     </article>
     <div class="divider"></div>
</div>