$(function () {


  // $(".interection__rating").rateYo({
  //   rating: 5,
  //   starWidth: "16px",
  //   normalFill: "#rgba(193, 193, 193, 0.3)",
  //   ratedFill: "#FFB800",
  //   readOnly: true,

  // });

  $(".interection__reviews-rating, .star").rateYo({
    "starSvg":
      '<svg>' +
      '<use href="../images/sprite.svg#icon-star"></use>' +
      '</svg >',
    starWidth: "16px",
    spacing: "6px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    readOnly: true,
    // data-rateyo-read-only="true"
  });

  $('.interection__link').on('click', function (e) {
    e.preventDefault();
    $('.interection__link').removeClass('current');
    $(this).addClass('current');
    $('.interection__content-item').removeClass('interection__content-item--active');
    $($(this).attr('href')).addClass('interection__content-item--active');
  })

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

  $('.catalog__style, .description__num').styler();


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


  // $('.product__swiper').magnificPopup({
  //   type: 'image',
  //   delegate: 'a',
  //   gallery: {
  //     enabled: true,
  //     // arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', 
  //     // tPrev: 'Previous (Left arrow key)',
  //     // tNext: 'Next (Right arrow key)',
  //     // tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
  //   },
  // });

  $('.product__img').on('click', function () {
    $('.modal--active').addClass('modal');
    $('.modal--active').removeClass('modal--active');
    $('.overlay').toggleClass('overlay--show');
    $('body').toggleClass('lock-display');

  });

  $('.modal__btn').on('click', function () {
    $('.modal').toggleClass('modal--active');
    $('.overlay').removeClass('overlay--show');
    $('body').removeClass('lock-display');
  });



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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },

    300: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 2,
    },
  },
});

var swiper = new Swiper(".product__box", {
  slidesPerView: 1,
  spaceBetween: 70,
  effect: "cube",
  loop: true,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 1000,
  },
  navigation: {
    nextEl: ".product__btn-next",
    prevEl: ".product__btn-prev",
  },
});

var swiper = new Swiper(".modal__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".modal__pagination",
  },
  navigation: {
    nextEl: ".modal__btn-next",
    prevEl: ".modal__btn-prev",
  },
});

