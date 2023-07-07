$(function(){

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