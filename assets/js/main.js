jQuery(document).ready(function($) {
  
  // aos
  AOS.init();

  // rellax
  var rellax = new Rellax('.rellax', {
    center:true
  });

  // slider
  $('.podcast-slider').not('.slick-initialized').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    dots: true,
    customPaging : function() {
      return '<div class="slick-dot"></div>';
    },
  });

  // burgermenu
  $('.burgermenu-open, .burgermenu-close').on('click', function() {
    $('.burgermenu').toggleClass('active');
  });

})