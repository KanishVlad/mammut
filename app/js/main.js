$(function () {

  // $('.testimonials__inner').slick({
  //   dots: true,
  //   prevArrow: '<button type="button" class="slick-prev"><svg class="slick-icon" width="37" height="37"><use href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
  //   nextArrow: '<button type="button" class="slick-next"><svg class="slick-icon" width="37" height="37"><use href="images/sprite.svg#icon-next-arrow"></use></svg></button>',
  //   infinite: false,
  // });

  // $('.recent__content').slick({
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  // });

  $(".menu__scroll").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');
    var target = $(id);

    if (target.length) {
      event.preventDefault();
      var top = target.offset().top - 120;

      $('body,html').animate({ scrollTop: top }, 1000);
    }
  });


  var $range = $(".filter-price__pricing"),
    $inputFrom = $(".filter-price__from"),
    $inputTo = $(".filter-price__to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  $('.catalog__style').styler();


  try {
    mixitup('.popular__list', {
      animation: {
        duration: 500,
        nudge: false,
      },
    });
  } catch (error) {
  }

  $(document).ready(function () {
    function toggleMenu() {
      $('.mobile').toggleClass('mobile--active');
      $('.overlay').toggleClass('overlay--show');
      $('body').toggleClass('lock-display');
    }

    $('.burger, .mobile__list a').on('click', toggleMenu);

    $('.close-btn, .mobile-logo').on('click', function () {
      toggleMenu();
    });
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    }
  });

  $(window).on("load resize", function () {
    if ($(window).width() < 577) {
      $(".restaurant__list:not(.slick-initialized), .action__list:not(.slick-initialized)").slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $(".restaurant__list.slick-initialized, .action__list.slick-initialized").slick("unslick");
    }
  });

  $('.catalog__filters-btn').on('click', function () {
    $('.catalog__filters').toggleClass('catalog__filters--active');
    $('.overlay').toggleClass('overlay--show');
    $('body').toggleClass('lock-display');
  })

  $('.catalog__close-btn').on('click', function () {
    $('.catalog__filters').removeClass('catalog__filters--active');
    $('.overlay').removeClass('overlay--show');
    $('body').removeClass('lock-display');
  })



})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

var swiper = new Swiper(".recent__content", {
  slidesPerView: 5,
  spaceBetween: 30,
  
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });