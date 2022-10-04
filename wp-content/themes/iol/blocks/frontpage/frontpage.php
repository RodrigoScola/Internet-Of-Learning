<main>
     <div class="hero">
          <div class='hero-left'>
               <h1 class='title title-lg'>
                    Trying to find the right course to level up your career and personal life?
               </h1>
               <p class='subtitle'>
                    Internet of learning will make your search <span class='blue bold'>easier</span> and <span class='blue bold'>hassle free</span>
               </p>
          </div>
          <div>
               <div class='hero-right'>
                    <img src="<?php echo get_theme_file_uri('images/svgs/hero-image.png') ?>" alt='#' />
               </div>
          </div>
     </div>
     <div>
          <h3 class='title-sm'>We list the best courses from world-class educators to help you find the perfect career fit</h3>
     </div>
     <form>

          <div class="search ">
               <div class="border border-gray" style='width: 70%'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <input class='input' placeholder="What do you want to learn?" />
               </div>
               <button class='btn btn-sm btn-yellow btn-round_right ' type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00000" class="bi bi-search" viewBox="0 0 16 16">
                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg><span>Find my course</span></button>
          </div>

     </form>
     <div class='divider--lg'></div>
     <article class="courses">
          <h1 class='title-sm '>Here’s The List Of Top-Rated Courses Recommended By Students</h1>
          <h2 class='subtitle-sm'>See the best reviewed courses on our platform</h2>
          <section class='flex'>
               <?php
               $courses = new WP_Query([
                    "posts_per_page" => -1,
                    'post_type' => 'categories'
               ]);
               while ($courses->have_posts()) {
                    $courses->the_post(); ?>
                    <button class='btn btn-teal white btn-round '><?php the_title() ?></button>
               <?php }
               wp_reset_postdata();
               ?>
               <button class='btn btn-blue white btn-round'>Show all Courses</button>

          </section>
          <div>
               <h1>Choose the right course to upskill your career & personal life</h1>
               <article class="cards">
                    <section class="card">
                         <div class="card-image"><img src="<?php echo get_theme_file_uri('images/svgs/card1.png') ?>" /></div>
                         <h2 class="card-title">Acess to high-quality courses</h2>
                         <p class='card-subtitle'>We list only the best courses on our platform so that you can be assured of getting a quality education.</p>
                    </section>
                    <section class='card'>
                         <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card2.png') ?>" /></div>

                         <h2 class="card-title">Learn From expert educators</h2>
                         <p class='card-subtitle'>With our platform, you can be sure to find courses led by expert educators. This way, you can get the most out of your learning experience.</p>
                    </section>
                    <section class='card'>
                         <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card3.png') ?>" /></div>

                         <h2 class='card-title'>Gain In-demand skills</h2>
                         <p class='card-subtitle'>Explore courses that help you build in-demand and sought after skills by employers. This will give you a leg up when you are applying for jobs.
                         </p>
                    </section>
                    <section class='card'>
                         <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card4.png') ?>" /></div>

                         <h2 class='card-title'>Kick-start your career</h2>
                         <p class='card-subtitle'>The Internet of Learning can help you get started in your chosen career. By taking courses on the platform, you can gain the skills and knowledge that you need to be successful in your field.
                         </p>
                    </section>

                    <section class="card">
                         <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card5.png') ?>" /></div>

                         <h2 class='card-title'>Land lucrative opportunities</h2>
                         <p class='card-subtitle'>With the in-demand skills that you will learn from the courses on our platform, you will be able to land a job or kick-start a business in your chosen field.
                         </p>
                    </section>

               </article>
          </div>
          <div class='container '>
               <div class='w50'>
                    <h1 class='title title-lg'>
                         Take The First Step Towards Success
                    </h1>
                    <p class='subtitle'>
                         Whether you are looking for courses in business, technology, health & fitness, or art, we have you covered. Find the best course to upskill your career and accomplish personal goals.
                    </p>
               </div>
               <div class='w50'>
                    <ul class='min-list'>
                         <li class='list-item'>
                              <div class='list-icon'><?php echo getBrain() ?></div>
                              <p>
                                   Get access to the courses on our platform from anywhere in the world.
                              </p>
                         </li>
                         <br />
                         <li>
                              <?php echo getBrain() ?>
                              <p>

                                   Courses listed on our platform are highly affordable so that you can get a quality education without breaking the bank
                              </p>
                         </li>
                         <br />

                         <li>
                              <?php echo getBrain() ?>

                              <p>95% of the course listed on our website offers a money-back guarantee so that you can be sure that you are satisfied with your purchase
                              </p>
                         </li>
                         <br />
                         <li>
                              <?php echo getBrain() ?>

                              <p>We offer a platform for you to connect with like-minded students and educators so that you can network and learn from each other.
                              </p>
                         </li>
                         <br />

                         <li>
                              <?php echo getBrain() ?>
                              <p>

                                   Expand your knowledge with our blog section where you can read about the latest trends in education, find articles on a variety of topics related to education and learning and learn tips and tricks on how to be a successful student.
                              </p>
                         </li>
                    </ul>
               </div>
          </div>

          <div>
               <h1>9/10 Students Were Able to Find the Right Course and Level Up Their Personal and Professional Life<h1>
          </div>
          <article class="cards ">
               <section class='card'>
                    <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card6.png') ?>" /></div>

                    <h2 class='card-title'>Boost Earning Potential</h2>
                    <p class='card-subtitle'>Courses designed to help you get high-paying jobs or establish your own 6-figure business.
                    </p>
               </section>
               <section class='card'>
                    <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card7.png') ?>" /></div>

                    <h2 class='card-title'>Gain an Edge in the Job Market</h2>
                    <p class='card-subtitle'>Develop the skills that employers are looking for and get ahead of your competition.
                    </p>
               </section>
               <section class='card'>
                    <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card8.png') ?>" /></div>

                    <h2 class='card-title'>Become a Certified Expert</h2>
                    <p class='card-subtitle'>Most of the courses listed on the Internet of Learnings offer certification to help you become a certified expert in your field.
                    </p>
               </section>
               <section class='card'>
                    <div class='card-image'><img src="<?php echo get_theme_file_uri('images/svgs/card9.png') ?>" /></div>

                    <h2 class='card-title'>Fast-Track a Successful Career</h2>
                    <p class='card-subtitle'>Gain the in-demand skills needed to kick-start a lucrative career and land better job opportunities.
                    </p>
               </section>
          </article>
          <article class="courses ">
               <h1 class="title title-sm">Here’s The List Of Top-Rated Courses Recommended By Students</h1>
               <h2>See the best reviewed courses on our platform</h2>
               <section class='flex'>
                    <?php
                    $courses = new WP_Query([
                         "posts_per_page" => -1,
                         'post_type' => 'categories'
                    ]);
                    while ($courses->have_posts()) {
                         $courses->the_post(); ?>
                         <button class='btn btn-teal white btn-round'><?php the_title() ?></button>
                    <?php }
                    wp_reset_postdata();
                    ?>
                    <button class='btn btn-blue white btn-round'>Show all Courses</button>

               </section>
          </article>
     </article>
     
</main>