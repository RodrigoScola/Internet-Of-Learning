<main class="main-content">
     <?php init_posts() ?>

     <div class="hero">
          <div class='hero-left'>
               <h1 class='text-title bold text-lg'>

                    Trying to find the right course to level up your career and personal life?
               </h1>
               <p class='text text-md'>
                    Internet of learning will make your search <span class='text-md blue bold'>easier</span> and <span class='blue text-md bold'>hassle free</span>
               </p>
          </div>
          <div>
               <div class='hero-right'>
                    <img src="<?php echo get_theme_file_uri('images/svgs/hero-image.png') ?>" alt='#' />
               </div>
          </div>
     </div>
     <div>
          <h1 class='text-sm bold text-center  text-title '>We list the best courses from world-class educators to help you find the perfect career fit</h1>
     </div>


     <form method="GET" action="<?php echo esc_url(site_url('/search')) ?>" class="search-tab align center-items">
          <div class="border border-gray" style='width: 70%'>
               <i class="bi yellow bi-search ph-03"></i>
               <input class='input' name='term' type="search" placeholder="What do you want to learn?" />
          </div>
          <button class='search-button-text btn btn-sm btn-yellow btn-round_right w-20' type="submit"><i class="searchicon bi bi-search"></i></button>
     </form>

     <div class='divider--lg'></div>
     <article class="">
          <h1 class='text-title text-md text-center bold '>Search a Course by Category</h1>
          <h2 class='text-center text-xsm'>Don’t know where to start? Pick your category below and choose the best course from the various options available!
          </h2>
          <section class='flex flex-row ph-9 '>
               <?php
               $categories = get_categories(array(
                    'orderby'             => 'name',
                    'style'               => 'list',
               ));




               foreach ($categories as $category) {
                    // var_dump($category);

                    if ($category->post_count['courses'] > 0) {
                         echo '<button class="btn zoom-in_hover m-05 btn-teal white btn-round"><a href="' . esc_url(site_url('/' . $category->slug)) . '">' . $category->name . '</a></button>';
                    }
               }
               wp_reset_postdata() ?>

               <a href="<?php echo esc_url(site_url('/courses')) ?>" class='btn m-05 btn-blue white btn-round'>Show all Courses</a>


          </section>
     </article>
     <h4 class="text-title text-md bold text-center">Choose The Right Course To Upskill Your Career & Personal Life</h4>
     <article class="cards w-100">
          <section class="card  ">
               <div class="card-image"><img src="<?php echo get_theme_file_uri('images/svgs/card1.png') ?>" /></div>
               <h2 class="card-title">Acess to high-quality courses</h2>
               <p class='card-subtitle'>We list only the best courses on our platform so that you can be assured of getting a quality education.</p>
          </section>
          <section class='card maxh'>
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
     <div class='hero mv-3'>
          <div class=''>
               <h1 class='text-title bold text-md'>
                    Take The First Step Towards Success
               </h1>
               <p class='text w-90'>
                    Whether you are looking for courses in business, technology, health & fitness, or art, we have you covered. Find the best course to upskill your career and accomplish personal goals.
               </p>
               <img class='center-image' src='<?php echo get_theme_file_uri('/images/svgs/globeframe.png') ?>' />
          </div>
          <div class='mt-3'>
               <ul class=' list_brain'>
                    <li class='list-item'>
                         <p>
                              Get access to the courses on our platform from anywhere in the world.
                         </p>
                    </li>
                    <br />
                    <li>
                         <p>

                              Courses listed on our platform are highly affordable so that you can get a quality education without breaking the bank
                         </p>
                    </li>
                    <br />

                    <li>

                         <p>95% of the course listed on our website offers a money-back guarantee so that you can be sure that you are satisfied with your purchase
                         </p>
                    </li>
                    <br />
                    <li>

                         <p>We offer a platform for you to connect with like-minded students and educators so that you can network and learn from each other.
                         </p>
                    </li>
                    <br />

                    <li>
                         <p>
                              Expand your knowledge with our blog section where you can read about the latest trends in education, find articles on a variety of topics related to education and learning and learn tips and tricks on how to be a successful student.
                         </p>
                    </li>
               </ul>
          </div>
     </div>

     <section>
          <h1 class="text-title text-md bold text-center">9/10 Students Were Able to Find the Right Course and Level Up Their Personal and Professional Life<h1>

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
     </section>
     <article class=" pb-1 mb-3">
          <h1 class='text-title  text-center bold '>Here’s The List Of Top-Rated Courses Recommended By Students</h1>
          <h2 class='text-center text-xsm'>See the best reviewed courses on our platform
          </h2>
          [Slider class='']
          <?php
          $courses = new Courses();
          $top  = $courses->getTopPosts();
          while ($top->have_posts()) {
               $top->the_post();
          ?>

               [Slide class='m-auto ']
               <?php get_template_part('components/list/course-list');
               ?>
               [/Slide] <?php
                    }
                         ?>

          [/Slider]


     </article>








</main>