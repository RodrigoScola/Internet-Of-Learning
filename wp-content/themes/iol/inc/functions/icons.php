<?php 


class Icon {
     private $iconHtml;
     public $iconName;
     function __construct($iconname, $iconhtml){
          $this->iconName = $iconname;
          $this->iconHtml = $iconhtml;

          add_shortcode($iconname, [$this, 'iconinit']);
     }

     function iconinit($atts = []) {

          $atts = array_change_key_case((array)$atts, CASE_LOWER);
          $buttonAtts = shortcode_atts([
               'class' => '',

          ],$atts);


ob_start();
?>
<i class="<?php echo $buttonAtts['class'] ?>"><?php echo $this->iconHtml ?></i>

<?php 





          return ob_get_clean();
     }
}

function initIcons() {
     new Icon('IconSettings', '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.7 20L7.2 16.85C6.88333 16.7333 6.55 16.575 6.2 16.375C5.85 16.175 5.54167 15.9667 5.275 15.75L2.325 17.1L0 13L2.7 11.025C2.66667 10.875 2.64583 10.7042 2.6375 10.5125C2.62917 10.3208 2.625 10.15 2.625 10C2.625 9.85 2.62917 9.67917 2.6375 9.4875C2.64583 9.29583 2.66667 9.125 2.7 8.975L0 7L2.325 2.9L5.275 4.25C5.54167 4.03333 5.85 3.825 6.2 3.625C6.55 3.425 6.88333 3.275 7.2 3.175L7.7 0H12.3L12.8 3.15C13.1167 3.26667 13.4542 3.42083 13.8125 3.6125C14.1708 3.80417 14.475 4.01667 14.725 4.25L17.675 2.9L20 7L17.3 8.925C17.3333 9.09167 17.3542 9.27083 17.3625 9.4625C17.3708 9.65417 17.375 9.83333 17.375 10C17.375 10.1667 17.3708 10.3417 17.3625 10.525C17.3542 10.7083 17.3333 10.8833 17.3 11.05L20 13L17.675 17.1L14.725 15.75C14.4583 15.9667 14.1542 16.1792 13.8125 16.3875C13.4708 16.5958 13.1333 16.75 12.8 16.85L12.3 20H7.7ZM10 13.25C10.9 13.25 11.6667 12.9333 12.3 12.3C12.9333 11.6667 13.25 10.9 13.25 10C13.25 9.1 12.9333 8.33333 12.3 7.7C11.6667 7.06667 10.9 6.75 10 6.75C9.1 6.75 8.33333 7.06667 7.7 7.7C7.06667 8.33333 6.75 9.1 6.75 10C6.75 10.9 7.06667 11.6667 7.7 12.3C8.33333 12.9333 9.1 13.25 10 13.25ZM10 11.75C9.51667 11.75 9.10417 11.5792 8.7625 11.2375C8.42083 10.8958 8.25 10.4833 8.25 10C8.25 9.51667 8.42083 9.10417 8.7625 8.7625C9.10417 8.42083 9.51667 8.25 10 8.25C10.4833 8.25 10.8958 8.42083 11.2375 8.7625C11.5792 9.10417 11.75 9.51667 11.75 10C11.75 10.4833 11.5792 10.8958 11.2375 11.2375C10.8958 11.5792 10.4833 11.75 10 11.75ZM8.9 18.5H11.1L11.45 15.7C12 15.5667 12.5208 15.3583 13.0125 15.075C13.5042 14.7917 13.95 14.45 14.35 14.05L17 15.2L18 13.4L15.65 11.675C15.7167 11.3917 15.7708 11.1125 15.8125 10.8375C15.8542 10.5625 15.875 10.2833 15.875 10C15.875 9.71667 15.8583 9.4375 15.825 9.1625C15.7917 8.8875 15.7333 8.60833 15.65 8.325L18 6.6L17 4.8L14.35 5.95C13.9667 5.51667 13.5333 5.15417 13.05 4.8625C12.5667 4.57083 12.0333 4.38333 11.45 4.3L11.1 1.5H8.9L8.55 4.3C7.98333 4.41667 7.45417 4.61667 6.9625 4.9C6.47083 5.18333 6.03333 5.53333 5.65 5.95L3 4.8L2 6.6L4.35 8.325C4.28333 8.60833 4.22917 8.8875 4.1875 9.1625C4.14583 9.4375 4.125 9.71667 4.125 10C4.125 10.2833 4.14583 10.5625 4.1875 10.8375C4.22917 11.1125 4.28333 11.3917 4.35 11.675L2 13.4L3 15.2L5.65 14.05C6.05 14.45 6.49583 14.7917 6.9875 15.075C7.47917 15.3583 8 15.5667 8.55 15.7L8.9 18.5Z" fill="currentColor"/>
</svg>                   ');
     new Icon("IconCheck", '<svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M19.77 3.02995L21.17 4.42995L8.43 17.17L2.83 11.57L4.23 10.17L8.43 14.37L19.77 3.02995ZM19.77 0.199951L8.43 11.54L4.23 7.33995L0 11.57L8.43 20L24 4.42995L19.77 0.199951Z" fill="currentColor"/>
</svg>
');
     new Icon("IconCheckFilled", '<svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8.60004 17.6L0.333374 9.33338L2.60004 7.06672L8.60004 13.0667L21.3667 0.300049L23.6334 2.56672L8.60004 17.6Z" fill="currentColor"/>
</svg>
');
     new Icon("IconAvatar", '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3.55 15.625C4.6 14.8917 5.64167 14.3292 6.675 13.9375C7.70833 13.5458 8.81667 13.35 10 13.35C11.1833 13.35 12.2958 13.5458 13.3375 13.9375C14.3792 14.3292 15.425 14.8917 16.475 15.625C17.2083 14.725 17.7292 13.8167 18.0375 12.9C18.3458 11.9833 18.5 11.0167 18.5 10C18.5 7.58333 17.6875 5.5625 16.0625 3.9375C14.4375 2.3125 12.4167 1.5 10 1.5C7.58333 1.5 5.5625 2.3125 3.9375 3.9375C2.3125 5.5625 1.5 7.58333 1.5 10C1.5 11.0167 1.65833 11.9833 1.975 12.9C2.29167 13.8167 2.81667 14.725 3.55 15.625ZM10 10.75C9.03333 10.75 8.22083 10.4208 7.5625 9.7625C6.90417 9.10417 6.575 8.29167 6.575 7.325C6.575 6.35833 6.90417 5.54583 7.5625 4.8875C8.22083 4.22917 9.03333 3.9 10 3.9C10.9667 3.9 11.7792 4.22917 12.4375 4.8875C13.0958 5.54583 13.425 6.35833 13.425 7.325C13.425 8.29167 13.0958 9.10417 12.4375 9.7625C11.7792 10.4208 10.9667 10.75 10 10.75ZM10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 18.5C10.9167 18.5 11.8125 18.3667 12.6875 18.1C13.5625 17.8333 14.425 17.3667 15.275 16.7C14.425 16.1 13.5583 15.6417 12.675 15.325C11.7917 15.0083 10.9 14.85 10 14.85C9.1 14.85 8.20833 15.0083 7.325 15.325C6.44167 15.6417 5.575 16.1 4.725 16.7C5.575 17.3667 6.4375 17.8333 7.3125 18.1C8.1875 18.3667 9.08333 18.5 10 18.5ZM10 9.25C10.5667 9.25 11.0292 9.07083 11.3875 8.7125C11.7458 8.35417 11.925 7.89167 11.925 7.325C11.925 6.75833 11.7458 6.29583 11.3875 5.9375C11.0292 5.57917 10.5667 5.4 10 5.4C9.43333 5.4 8.97083 5.57917 8.6125 5.9375C8.25417 6.29583 8.075 6.75833 8.075 7.325C8.075 7.89167 8.25417 8.35417 8.6125 8.7125C8.97083 9.07083 9.43333 9.25 10 9.25Z" fill="currentColor"/>
</svg>
');
     new Icon("IconFilter", '<svg width="18" height="16" viewBox="0 0 18 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16C7.71666 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V9L1.025 1.375C0.791665 1.09167 0.758331 0.791667 0.924998 0.475C1.09166 0.158333 1.35 0 1.7 0H16.3C16.65 0 16.9083 0.158333 17.075 0.475C17.2417 0.791667 17.2083 1.09167 16.975 1.375L11 9V15C11 15.2833 10.9042 15.5208 10.7125 15.7125C10.5208 15.9042 10.2833 16 10 16H8ZM9 9.1L15 1.5H3L9 9.1Z" fill="currentColor"/>
</svg>
');
     new Icon('IconList', '<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 13.85C4.7 13.85 4.875 13.775 5.025 13.625C5.175 13.475 5.25 13.3 5.25 13.1C5.25 12.9 5.175 12.725 5.025 12.575C4.875 12.425 4.7 12.35 4.5 12.35C4.3 12.35 4.125 12.425 3.975 12.575C3.825 12.725 3.75 12.9 3.75 13.1C3.75 13.3 3.825 13.475 3.975 13.625C4.125 13.775 4.3 13.85 4.5 13.85ZM4.5 9.75C4.7 9.75 4.875 9.675 5.025 9.525C5.175 9.375 5.25 9.2 5.25 9C5.25 8.8 5.175 8.625 5.025 8.475C4.875 8.325 4.7 8.25 4.5 8.25C4.3 8.25 4.125 8.325 3.975 8.475C3.825 8.625 3.75 8.8 3.75 9C3.75 9.2 3.825 9.375 3.975 9.525C4.125 9.675 4.3 9.75 4.5 9.75ZM4.5 5.65C4.7 5.65 4.875 5.575 5.025 5.425C5.175 5.275 5.25 5.1 5.25 4.9C5.25 4.7 5.175 4.525 5.025 4.375C4.875 4.225 4.7 4.15 4.5 4.15C4.3 4.15 4.125 4.225 3.975 4.375C3.825 4.525 3.75 4.7 3.75 4.9C3.75 5.1 3.825 5.275 3.975 5.425C4.125 5.575 4.3 5.65 4.5 5.65ZM7.8 13.85H13.9V12.35H7.8V13.85ZM7.8 9.75H13.9V8.25H7.8V9.75ZM7.8 5.65H13.9V4.15H7.8V5.65ZM1.5 18C1.1 18 0.75 17.85 0.45 17.55C0.15 17.25 0 16.9 0 16.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H16.5C16.9 0 17.25 0.15 17.55 0.45C17.85 0.75 18 1.1 18 1.5V16.5C18 16.9 17.85 17.25 17.55 17.55C17.25 17.85 16.9 18 16.5 18H1.5ZM1.5 16.5H16.5V1.5H1.5V16.5ZM1.5 1.5V16.5V1.5Z" fill="currentColor"/>
</svg>
');
     new Icon('IconStarFilled', '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8 12.4298L11.9892 15.3326C12.6217 15.8029 13.4811 15.1704 13.2379 14.4245L11.7135 9.73793L15.6541 6.9325C16.3028 6.47844 15.9785 5.45681 15.1839 5.45681H10.3514L8.77839 0.559465C8.53514 -0.186488 7.48108 -0.186488 7.23783 0.559465L5.64863 5.45681H0.816148C0.0215454 5.45681 -0.302782 6.47844 0.345873 6.9325L4.28645 9.73793L2.76211 14.4245C2.51887 15.1704 3.37833 15.7866 4.01077 15.3326L8 12.4298Z" fill="currentColor"/>
</svg>
');
     new Icon('IconSearch', '<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
</svg>
');
     new Icon('IconDifficulty1', '<svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2_208" fill="white">
<path d="M0 8H4V12H0V8Z"/>
<path d="M6 4H10V12H6V4Z"/>
<path d="M12 0H16V12H12V0Z"/>
</mask>
<path d="M0 8V7H-1V8H0ZM4 8H5V7H4V8ZM4 12V13H5V12H4ZM0 12H-1V13H0V12ZM6 4V3H5V4H6ZM10 4H11V3H10V4ZM10 12V13H11V12H10ZM6 12H5V13H6V12ZM12 0V-1H11V0H12ZM16 0H17V-1H16V0ZM16 12V13H17V12H16ZM12 12H11V13H12V12ZM0 9H4V7H0V9ZM3 8V12H5V8H3ZM4 11H0V13H4V11ZM1 12V8H-1V12H1ZM6 5H10V3H6V5ZM9 4V12H11V4H9ZM10 11H6V13H10V11ZM7 12V4H5V12H7ZM12 1H16V-1H12V1ZM15 0V12H17V0H15ZM16 11H12V13H16V11ZM13 12V0H11V12H13Z" fill="currentColor" mask="url(#path-1-inside-1_2_208)"/>
</svg>
');
     new Icon('IconDifficulty2', '<svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2_212" fill="white">
<path d="M0 8H4V12H0V8Z"/>
<path d="M6 4H10V12H6V4Z"/>
<path d="M12 0H16V12H12V0Z"/>
</mask>
<path d="M0 8V7H-1V8H0ZM4 8H5V7H4V8ZM4 12V13H5V12H4ZM0 12H-1V13H0V12ZM6 4V3H5V4H6ZM10 4H11V3H10V4ZM10 12V13H11V12H10ZM6 12H5V13H6V12ZM12 0V-1H11V0H12ZM16 0H17V-1H16V0ZM16 12V13H17V12H16ZM12 12H11V13H12V12ZM0 9H4V7H0V9ZM3 8V12H5V8H3ZM4 11H0V13H4V11ZM1 12V8H-1V12H1ZM6 5H10V3H6V5ZM9 4V12H11V4H9ZM10 11H6V13H10V11ZM7 12V4H5V12H7ZM12 1H16V-1H12V1ZM15 0V12H17V0H15ZM16 11H12V13H16V11ZM13 12V0H11V12H13Z" fill="currentColor" mask="url(#path-1-inside-1_2_212)"/>
</svg>

');
     new Icon('IconDifficulty3', '<svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2_216" fill="white">
<path d="M0 8H4V12H0V8Z"/>
<path d="M6 4H10V12H6V4Z"/>
<path d="M12 0H16V12H12V0Z"/>
</mask>
<path d="M0 8V7H-1V8H0ZM4 8H5V7H4V8ZM4 12V13H5V12H4ZM0 12H-1V13H0V12ZM6 4V3H5V4H6ZM10 4H11V3H10V4ZM10 12V13H11V12H10ZM6 12H5V13H6V12ZM12 0V-1H11V0H12ZM16 0H17V-1H16V0ZM16 12V13H17V12H16ZM12 12H11V13H12V12ZM0 9H4V7H0V9ZM3 8V12H5V8H3ZM4 11H0V13H4V11ZM1 12V8H-1V12H1ZM6 5H10V3H6V5ZM9 4V12H11V4H9ZM10 11H6V13H10V11ZM7 12V4H5V12H7ZM12 1H16V-1H12V1ZM15 0V12H17V0H15ZM16 11H12V13H16V11ZM13 12V0H11V12H13Z" fill="currentColor" mask="url(#path-1-inside-1_2_216)"/>
</svg>

');
new Icon("IconMenu", '<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 6.75V0H18V6.75H9.75ZM0 9.75V0H8.25V9.75H0ZM9.75 18V8.25H18V18H9.75ZM0 18V11.25H8.25V18H0ZM1.5 8.25H6.75V1.5H1.5V8.25ZM11.25 16.5H16.5V9.75H11.25V16.5ZM11.25 5.25H16.5V1.5H11.25V5.25ZM1.5 16.5H6.75V12.75H1.5V16.5Z" fill="currentColor"/>
</svg>
');
new Icon('IconDifficulty4', '<svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_2_220" fill="white">
<path d="M0 8H4V12H0V8Z"/>
<path d="M6 4H10V12H6V4Z"/>
<path d="M12 0H16V12H12V0Z"/>
</mask>
<path d="M0 8V7H-1V8H0ZM4 8H5V7H4V8ZM4 12V13H5V12H4ZM0 12H-1V13H0V12ZM6 4V3H5V4H6ZM10 4H11V3H10V4ZM10 12V13H11V12H10ZM6 12H5V13H6V12ZM12 0V-1H11V0H12ZM16 0H17V-1H16V0ZM16 12V13H17V12H16ZM12 12H11V13H12V12ZM0 9H4V7H0V9ZM3 8V12H5V8H3ZM4 11H0V13H4V11ZM1 12V8H-1V12H1ZM6 5H10V3H6V5ZM9 4V12H11V4H9ZM10 11H6V13H10V11ZM7 12V4H5V12H7ZM12 1H16V-1H12V1ZM15 0V12H17V0H15ZM16 11H12V13H16V11ZM13 12V0H11V12H13Z" fill="currentColor" mask="url(#path-1-inside-1_2_220)"/>
</svg>

');
     new Icon("IconClose", '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="currentColor"/>
</svg>
');

     new Icon('IconPlus', '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="currentColor"/>
</svg>
');
     new Icon('IconMinus', '<svg width="14" height="2" viewBox="0 0 14 2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H0V0H14V2Z" fill="currentColor"/>
</svg>
');
     new Icon("IconUpload", '<svg width="14" height="17" viewBox="0 0 14 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z" fill="currentColor"/>
</svg>
');
     new Icon('IconNext', '<svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z" fill="currentColor"/>
</svg>
');
     new Icon("IconLast", '<svg width="13" height="12" viewBox="0 0 13 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0.589966 1.41L5.17997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0L0.589966 1.41ZM11 0H13V12H11V0Z" fill="currentColor"/>
</svg>
');
     new Icon('IconFirst', '<svg width="13" height="12" viewBox="0 0 13 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.41 10.59L7.82 6L12.41 1.41L11 0L5 6L11 12L12.41 10.59ZM0 0H2V12H0V0Z" fill="currentColor"/>
</svg>
');
     new Icon('IconPrevious', '<svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="currentColor"/>
</svg>
');
     new Icon('IconGlobe', '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM16.92 6H13.97C13.65 4.75 13.19 3.55 12.59 2.44C14.43 3.07 15.96 4.35 16.92 6ZM10 2.04C10.83 3.24 11.48 4.57 11.91 6H8.09C8.52 4.57 9.17 3.24 10 2.04ZM2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12H2.26ZM3.08 14H6.03C6.35 15.25 6.81 16.45 7.41 17.56C5.57 16.93 4.04 15.66 3.08 14V14ZM6.03 6H3.08C4.04 4.34 5.57 3.07 7.41 2.44C6.81 3.55 6.35 4.75 6.03 6V6ZM10 17.96C9.17 16.76 8.52 15.43 8.09 14H11.91C11.48 15.43 10.83 16.76 10 17.96ZM12.34 12H7.66C7.57 11.34 7.5 10.68 7.5 10C7.5 9.32 7.57 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.96 15.65 14.43 16.93 12.59 17.56V17.56ZM14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12H14.36Z" fill="currentColor"/>
</svg>
');
     new Icon('IconClock', '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z" fill="currentColor"/>
</svg>
');
     new Icon('IconEye', '<svg width="22" height="15" viewBox="0 0 22 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" fill="currentColor"/>
</svg>
');
     new Icon('IconList', '<svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="currentColor"/>
</svg>
');
     new Icon("IconPlay", '<svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0667 18.1334L18.1334 13L10.0667 7.86671V18.1334ZM13 25.6667C11.2667 25.6667 9.62782 25.3334 8.08337 24.6667C6.53893 24 5.19448 23.0945 4.05004 21.95C2.9056 20.8056 2.00004 19.4612 1.33337 17.9167C0.666707 16.3723 0.333374 14.7334 0.333374 13C0.333374 11.2667 0.666707 9.62782 1.33337 8.08337C2.00004 6.53893 2.9056 5.19448 4.05004 4.05004C5.19448 2.9056 6.53893 2.00004 8.08337 1.33337C9.62782 0.666707 11.2667 0.333374 13 0.333374C14.7334 0.333374 16.3723 0.666707 17.9167 1.33337C19.4612 2.00004 20.8056 2.9056 21.95 4.05004C23.0945 5.19448 24 6.53893 24.6667 8.08337C25.3334 9.62782 25.6667 11.2667 25.6667 13C25.6667 14.7334 25.3334 16.3723 24.6667 17.9167C24 19.4612 23.0945 20.8056 21.95 21.95C20.8056 23.0945 19.4612 24 17.9167 24.6667C16.3723 25.3334 14.7334 25.6667 13 25.6667ZM13 24.1667C16.0667 24.1667 18.6945 23.0723 20.8834 20.8834C23.0723 18.6945 24.1667 16.0667 24.1667 13C24.1667 9.93337 23.0723 7.3056 20.8834 5.11671C18.6945 2.92782 16.0667 1.83337 13 1.83337C9.93337 1.83337 7.3056 2.92782 5.11671 5.11671C2.92782 7.3056 1.83337 9.93337 1.83337 13C1.83337 16.0667 2.92782 18.6945 5.11671 20.8834C7.3056 23.0723 9.93337 24.1667 13 24.1667Z" fill="currentColor"/>
</svg>
');
     new Icon("IconGrid", '<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8.25V0H8.25V8.25H0ZM0 18V9.75H8.25V18H0ZM9.75 8.25V0H18V8.25H9.75ZM9.75 18V9.75H18V18H9.75ZM1.5 6.75H6.75V1.5H1.5V6.75ZM11.25 6.75H16.5V1.5H11.25V6.75ZM11.25 16.5H16.5V11.25H11.25V16.5ZM1.5 16.5H6.75V11.25H1.5V16.5Z" fill="currentColor"/>
</svg>
');
     new Icon("IconTable", '<svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14V0H18V14H0ZM1.5 4.175H4.15V1.5H1.5V4.175ZM5.65 4.175H16.5V1.5H5.65V4.175ZM5.65 8.325H16.5V5.675H5.65V8.325ZM5.65 12.5H16.5V9.825H5.65V12.5ZM1.5 12.5H4.15V9.825H1.5V12.5ZM1.5 8.325H4.15V5.675H1.5V8.325Z" fill="currentColor"/>
</svg>
');
     new Icon("ArrowDown", '<svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z" fill="currentColor"/>
</svg>
');
     new Icon("ArrowUp", '<svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" fill="currentColor"/>
</svg>
');
     new Icon('IconHat', '<svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10.975 18L3.725 14.025V8.025L0 6L10.975 0L22 6V13.925H20.5V6.875L18.225 8.025V14.025L10.975 18ZM10.975 10.3L18.85 6L10.975 1.775L3.15 6L10.975 10.3ZM10.975 16.3L16.725 13.125V8.925L10.975 12L5.225 8.875V13.125L10.975 16.3Z" fill="currentColor"/>
</svg>
');
     new Icon("IconWidget", '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M13.975 11.35L8.65 6.02495L13.975 0.699951L19.3 6.02495L13.975 11.35ZM0 9.54995V2.02495H7.525V9.54995H0ZM10.45 20V12.475H17.975V20H10.45ZM0 20V12.475H7.525V20H0ZM1.5 8.04995H6.025V3.52495H1.5V8.04995ZM14.05 9.32495L17.275 6.09995L14.05 2.87495L10.825 6.09995L14.05 9.32495ZM11.95 18.5H16.475V13.975H11.95V18.5ZM1.5 18.5H6.025V13.975H1.5V18.5Z" fill="currentColor"/>
</svg>
');
     new Icon('IconChat', '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12.6L11.4 9.4L14.6 8L11.4 6.6L10 3.4L8.6 6.6L5.4 8L8.6 9.4L10 12.6ZM0 20V1.5C0 1.11667 0.15 0.770833 0.45 0.4625C0.75 0.154167 1.1 0 1.5 0H18.5C18.8833 0 19.2292 0.154167 19.5375 0.4625C19.8458 0.770833 20 1.11667 20 1.5V14.5C20 14.8833 19.8458 15.2292 19.5375 15.5375C19.2292 15.8458 18.8833 16 18.5 16H4L0 20ZM1.5 16.375L3.375 14.5H18.5V1.5H1.5V16.375ZM1.5 1.5V16.375V1.5Z" fill="currentColor"/>
</svg>
');
}
add_action('init', 'initIcons');