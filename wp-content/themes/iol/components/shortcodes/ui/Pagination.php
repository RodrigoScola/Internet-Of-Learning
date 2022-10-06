<?php

function changePageTo($num)
{
     $ph = new PageHandler;
     $query = $ph->getQueryParams([
          'url', 'paged'
     ]);
     $query['paged'] = $num;
     return $ph->toQuery($query);
}
function renderSearchPagination($args = [
     'max_num_pages' => '',
     'current' => 0
])
{

     $currPage = max($args['current'], 1);


?>

     <div class="flex flex-row center-items flex-center">
          <div class="pagination-icons ph-04">
               <a class="<?php echo $currPage == 1 ? 'disabled' : 'pl-05' ?>" href='<?php echo changePageTo(1) ?>'>[IconFirst]</a>
               <?php echo $currPage == 1  ? '<a class="ph-1 disabled">  ' . do_shortcode('[IconPrevious]') . '</a>' : '<a href="' . changePageTo(-1) . '">' . do_shortcode('[IconPrevious]') . '</a>' ?>
          </div>
          <?php for ($i = max($currPage - 3, 1); $i <= min($args['max_num_pages'], $currPage + 3); $i++) {
               if ($i == $currPage) { ?>
                    <span aria-current="page" class="page-numbers current"><?= $i ?></span>
               <?php
               } else { ?>

                    <a class="page-numbers" href="<?php echo changePageTo($i) ?>"><?php echo $i ?></a>
          <?php
               }
          }
          ?>
          <div class="pagination-icons ph-04">
               <?php echo $currPage == $args['max_num_pages']  ? '<a class="ph-1 disabled">  ' . do_shortcode('[IconNext]') . '</a>' : '<a href="' . changePageTo($currPage + 1) . '">' . do_shortcode('[IconNext]') . '</a>' ?>
               <a class="<?php echo $currPage == $args['max_num_pages'] ? 'disabled' : 'pl-05' ?>" href='<?php echo changePageTo($args['max_num_pages']) ?>'>[IconLast]</a>
          </div>
     </div>
     <?php }

function renderPagination($pages = null, $options = [
     'base' => ''
])
{
     $permalink = get_permalink();
     if (!$pages) {
          global $wp_query;
          $pages = $wp_query;
          wp_reset_postdata();
     }
     $args = [
          'current' => max(1, get_query_var('paged')),
          'total' => $pages->max_num_pages,
          'mid_size' => 2,

          'end_size' => 0,
          'next_text' => do_shortcode('[IconNext]'),
          'prev_text' => do_shortcode('[IconPrevious]'),
     ];
     if ($options['base']) {
          $args['base'] = get_permalink() . '%_%';
     }
     if (get_query_var('cat')) {
          $permalink = get_category_link(get_query_var('cat'));
     }

     $pagenum = get_query_var('paged');

     if ($pages->max_num_pages > 1) {


     ?>

          <div class="flex flex-row center-items mv-2 flex-center">
               <div class="pagination-icons ph-04">
                    <a href="<?php echo $permalink ?>" class="<?php echo $pagenum == 1 ? 'disabled' : "" ?>">[IconFirst]</a>
                    <?php if (get_query_var('paged', 1) == 1) { ?>
                         <a class="ph-1 disabled">[IconPrevious]</a>
                    <?php
                    } ?>
               </div>
               <?php echo paginate_links($args);

               ?>
               <div class="pagination-icons ph-04">
                    <?php echo get_query_var('paged') == $pages->max_num_pages ? '<a class="ph-1 disabled">  ' . do_shortcode('[IconNext]') . '</a>' : "" ?>
                    <a class="<?php echo get_query_var('paged') == $pages->max_num_pages ? 'disabled' : 'pl-05' ?>" href='<?php echo $permalink . 'page/' . $pages->max_num_pages ?>'>[IconLast]</a>
               </div>
          </div>
<?php
     }
}
