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
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">'+
       '<path d="M-0.171626 6.16432C-0.116664 5.9946 0.0295582 5.87091 0.205598 5.84529L5.15101 5.12451L7.36273 0.629933C7.44143 0.469933 7.60392 0.368652 7.7818 0.368652C7.95971 0.368652 8.12216 0.469933 8.2009 0.629933L10.4127 5.12451L15.358 5.84529C15.534 5.87091 15.6803 5.9946 15.7353 6.16429C15.7903 6.334 15.7444 6.52028 15.617 6.64481L12.0386 10.1434L12.8832 15.0834C12.9133 15.2593 12.8412 15.437 12.6973 15.5419C12.6159 15.6012 12.5195 15.6314 12.4226 15.6314C12.3482 15.6314 12.2735 15.6136 12.2052 15.5776L7.78183 13.2451L3.35868 15.5775C3.20117 15.6606 3.0104 15.6467 2.86648 15.5419C2.72256 15.437 2.65043 15.2593 2.6805 15.0834L3.5254 10.1434L-0.0533829 6.64478C-0.180755 6.52028 -0.22665 6.334 -0.171626 6.16432Z" fill="#FFB800" />'+
      '</svg>',
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

