<?php 

class Set {
     public array $elements = [];
     public int $size = 0;
     function __construct($items)
     {
          foreach ($items as $currentItem) {
               $this->add_set($currentItem);
          }
     }
     public function add_set($item) {
          if ($this->has_item($item)) {
               $this->size++;
               return $this->elements[$item];
          }
          return $this->elements[$item] = true;
     }    
     public function has_item($item) {
          return $this->elements[$item] !== null;
     }
     public function remove_item($item) {
          if ($this->has_item($item)) {
               unset($this->elements[$item]);
          }
     }

}
