<?php



function renderStarReviews($atts = [])
{

     $atts = array_change_key_case((array)$atts, CASE_LOWER);
     $nats = shortcode_atts([
          'initialscore' => 0,

     ], $atts);

     ob_start();

?>

     <div id='starReviews' data-initialscore="<?php echo $nats['initialscore'] ?>">
          <label data-star="1" class="reviewStar <?php echo $nats['initialscore'] >= 1 ? 'yellow' : 'gray' ?>" for="star1"><?php echo do_shortcode('[IconStarFilled]') ?></label>
          <input style="display: none;" id='star1' value="star1" name="stars" type="radio"></input>
          <label data-star="2" class="reviewStar <?php echo $nats['initialscore'] >= 2 ? 'yellow' : 'gray' ?>" for="star1"><?php echo do_shortcode('[IconStarFilled]') ?></label>
          <input style="display: none;" id='star2' value="star2" name="stars" type="radio"></input>
          <label data-star="3" class="reviewStar <?php echo $nats['initialscore'] >= 3 ? 'yellow' : 'gray' ?>" for="star1"><?php echo do_shortcode('[IconStarFilled]') ?></label>
          <input style="display: none;" id='star3' value="star3" name="stars" type="radio"></input>
          <label data-star='4' class="reviewStar <?php echo $nats['initialscore'] >= 4 ? 'yellow' : 'gray' ?>" for="star1"><?php echo do_shortcode('[IconStarFilled]') ?></label>
          <input style="display: none;" id='star4' value="star4" name="stars" type="radio"></input>
          <label data-star='5' class="reviewStar <?php echo $nats['initialscore'] >= 5 ? 'yellow' : 'gray' ?>" for="star1"><?php echo do_shortcode('[IconStarFilled]') ?></label>
          <input style="display: none;" id='star5' value="star5" name="stars" type="radio"></input>
          </form>
     <?php

     $temp = ob_get_contents();
     ob_end_clean();
     return $temp;
}
add_shortcode('StarReviews', 'renderStarReviews');
