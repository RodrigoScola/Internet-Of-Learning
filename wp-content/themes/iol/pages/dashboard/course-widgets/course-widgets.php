<div class='main-content dsboard mv-4 course-widgets'>

     <section class="navigarion-bar ph-2">
          <button onclick="location.href = `<?php echo site_url() . '/dashboard' ?>` " style='border: none' class=" greenwhite bg-transparent mv-02 p-2">Back to list</button>
          <button onclick="location.href = `<?php echo site_url() . '/dashboard/reviews' ?>` " style='border: none' class=" greenwhite bg-transparent mv-02 p-2">Course settings</button>
          <button onclick="location.href = `<?php echo site_url() . '/dashboard/account-settings' ?>` " style='border: none' class=" greenwhite bg-transparent mv-02 p-2">Reviews</button>
          <button class="btn btn-blue white btn-round_semi ">Widget</button>
     </section>
     <article class="w-70">
          <section>
               <h1 class="text-title text-lg bold">Widget</h1>
               <p>Name Course</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris mattis, fermentum justo quis, congue metus. Nullam dictum, dui in rutrum fermentum, dolor orci tempus augue, vitae consectetur leo tellus a tellus. Ut ac odio sodales, tempus dui ac, gravida nisl. Donec turpis sapien, sodales vel erat ac, tincidunt gravida dui.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris mattis, fermentum justo quis, congue metus. Nullam dictum, dui in rutrum fermentum, dolor orci tempus augue, vitae consectetur leo tellus a tellus. Ut ac odio sodales, tempus dui ac, gravida nisl. Donec turpis sapien, sodales vel erat ac, tincidunt gravida dui.</p>
          </section>
          <section>
               <?php echo renderWidgetList() ?>
               <?php echo renderWidgetList('Excellent') ?>
               <?php echo renderWidgetList('<span class="teal">123</span> reviews') ?>
               <?php echo renderWidgetList('check out our <span class="teal">123</span> reviews') ?>
               <?php echo renderWidgetList() ?>
               <?php echo renderWidgetList() ?>
               <?php echo renderWidgetList() ?>
               <?php echo renderWidgetList() ?>
               <?php echo renderWidgetList() ?>
               <?php echo renderWidgetList() ?>
          </section>
          <aside class='pagination '>
               <span class="selected">1</span>
               <span>2</span>
               <span>3</span>
               <span>4</span>
               <span>5</span>
               <span class="icon dashicons dashicons-arrow-right-alt2"></span>
               <span class="icon ml-01 dashicons dashicons-arrow-right-alt2"></span>

          </aside>
     </article>
</div>