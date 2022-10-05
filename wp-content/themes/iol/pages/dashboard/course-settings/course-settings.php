         <?php
          $currUser = new User();
          $courseId = sanitize_key(get_query_var('courseid'));
          if ($courseId && $currUser->isPostAuthor($courseId)) {
               $course = get_post(sanitize_key(get_query_var('courseid')));
          }
          if (!$course) {
               $allCourses = new WP_Query([
                    'post_type' => 'courses',
                    'author' => get_current_user_id(),
                    'orderby' => 'date'
               ]);
               // if (!$allCourses->have_posts()) wp_redirect('/dashboard');
               $allCourses->the_post();
               $course = $allCourses->post;
          }
          set_query_var('courseid', get_the_ID());
          wp_reset_postdata();





          ?>
         <div id='course-settings' class='dsboard main-content mv-4 <?php echo $course->ID ? "courseid={$course->ID} postauthor={$course->post_author}" : '' ?>  main-content'>
              <?php init_posts() ?>

              <?php
               echo get_template_part('/components/nav/nav', 'dashboard');
               ?>

              <article class="course-settings">

                   <section>
                        <h1 class='text-title bold '>Course Settings</h1>
                        <p class='text-sm'>
                             course name
                        </p>
                   </section>
                   <section>
                        <p class="text-title text-xsm bold">About the course</p>
                        <p class="text-sm ">Fill in all the information related to the course</p>
                   </section>
                   <form class='gridcol-2 formInput'>
                        <label class='griditem-1-2 '>
                             <p class='text-title text-xsm bold'>Course Name</p>

                             <input placeholder="What is the name of the course?" required />
                        </label>
                        <label>
                             <p class='text-title text-xsm bold'>Course Publisher</p>

                             <input placeholder="Is the course self published or part of a platfrom" required />
                        </label>
                        <label>
                             <p class='text-title text-xsm bold'>Course Image</p>
                             <div class="inputIcon">
                                  <input type="file" class='input-file' accept="image/*" id='courseimage' required />
                                  <label for='courseimage' class='right btn p-1 ml-1 btn-yellow'>
                                       <svg width="14" class="right" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z" fill="#282828" />
                                       </svg>

                                  </label>
                             </div>
                        </label>
                        <label class="griditem-1-2">
                             <p class='text-title text-xsm bold'>Course Link</p>
                             <input placeholder="Is the course self published or part of a platfrom" />
                        </label>
                        <label>
                             <p class='text-title text-xsm bold'>
                                  Course Category
                             </p>
                             <select>
                                  <option>Other</option>
                             </select>
                        </label>
                        <label>
                             <p class='text-title text-xsm bold'>
                                  Course Parent Category
                             </p>
                             <select>
                                  <option>Other</option>
                             </select>
                        </label>
                        <label>
                             <p class='text-title text-xsm bold'>
                                  Course Entry Level
                             </p>
                             <select>
                                  <option>Beginner</option>
                                  <option>Standard</option>
                                  <option>Veteran</option>
                             </select>
                        </label>
                        <label>
                             <p class='text-title text-xsm bold'>Time Investment</p>
                             <input type="number" min="1" placeholder="How many hours does the course take to complete" />
                        </label>
                        <label class="griditem-1-2">
                             <p class='text-title text-xsm bold'>
                                  Add a description of your course (limited to 280 characters)
                             </p>
                             <textarea>

                    </textarea>
                             <!-- add characters  -->
                        </label>
                        <label class='griditem-1-2'>
                             <p class='text-title text-xsm bold'>
                                  What value your course is for its students
                             </p>
                             <input placeholder="Decribe in one senctence what value your course is providing " />

                        </label>
                        <label class='griditem-1-2'>
                             <p class='text-title text-xsm bold'>
                                  What is outcome most ex-students have from taking the course
                             </p>
                             <input placeholder="Decribe what the outcome is for most of the students finishing the course" />

                        </label>
                        <!-- add non js way and js way -->
                        <label class="griditem-1-2">
                             <p class='text-title text-xsm bold'>
                                  Name up to six highlights of the course
                             </p>
                             <div class="inputIcon">
                                  <input placeholder="reason..." required />
                                  <label for='courseimage' class='right btn p-1 ml-1 btn-blue'>
                                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                                       </svg>
                                  </label>
                             </div>
                        </label>
                        <section class="griditem-1-2 ">

                             <p class='text-title text-xsm bold'>
                                  About the Instructor(s)
                             </p>
                             <p class='text-sm  '>Here you can add information related to the instructor(s)</p>
                        </section>

                        <label>
                             <p class='text-title pt-1 text-xsm bold'>
                                  What is the name of the Instructor
                                  <input placeholder="What is the name(s) of the instructors (add a comma to separate them)" />
                             </p>
                        </label>
                        <label>
                             <p class='text-title text-xsm bold'>Instructor Image</p>
                             <div class="inputIcon">
                                  <input type="file" class='input-file' accept="image/*" id='courseimage' required />
                                  <label for='courseimage' class='right btn p-1 ml-1 btn-yellow'>
                                       <svg width="14" class="right" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z" fill="#282828" />
                                       </svg>
                                  </label>
                             </div>
                        </label>
                        <label class="griditem-1-2">
                             <p class='text-title text-xsm bold'>
                                  Descibe the experience the instructor(s) of the course have
                                  <input placeholder="Describe the instructor(s) experience with the course subject" />
                             </p>
                        </label>
                        <div class=" griditem-2 flex w-100 mh-2 flexa-row flex-between">
                             <!-- <span class="transparent"></span> -->
                             <div>
                                  <button class='btn btn-blue-hollow blue bold  ' type="submit">Delist this course</button>
                                  <button class='btn btn-yellow bold' type="submit">save changes </button>
                             </div>
                        </div>
                   </form>
              </article>
         </div>