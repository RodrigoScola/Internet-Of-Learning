<?


add_shortcode('SortPosts', 'sortPostsRender');

function sortPostsRender()
{
     ob_start();
?>
     <form method="GET" class='select_box'>
          <select name='sort' onchange="this.form.submit()">
               <?php
               if (get_query_var('sort') == 'latest') {
               ?>
                    <option value="latest">
                         Latest Courses
                    </option>
                    <option value="best">
                         Best Reviews
                    </option>
               <?php
               } else {
               ?>
                    <option value="best">
                         Best Reviews
                    </option>
                    <option value="latest">
                         Latest Courses
                    </option>
               <?php
               }
               ?>
          </select>
     </form>

<?php
     $temp = ob_get_clean();
     ob_end_clean();
     return $temp;
}
