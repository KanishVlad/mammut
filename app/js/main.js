$(function(){

  $('.testimonials__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-icon" width="37" height="37"><use href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-icon" width="37" height="37"><use href="images/sprite.svg#icon-next-arrow"></use></svg></button>',
    infinite: false,
  })

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    }
  });
 
  var mixer = mixitup('.popular__list', {
    "animation": {
      "duration": 700,
      "nudge": false,
    }
  });


})