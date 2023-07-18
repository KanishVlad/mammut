$(function () {

  // $('.testimonials__inner').slick({
  //   dots: true,
  //   prevArrow: '<button type="button" class="slick-prev"><svg class="slick-icon" width="37" height="37"><use href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
  //   nextArrow: '<button type="button" class="slick-next"><svg class="slick-icon" width="37" height="37"><use href="images/sprite.svg#icon-next-arrow"></use></svg></button>',
  //   infinite: false,
  // });

  $(document).ready(function () {
    // Отримуємо поточний URL сторінки
    var currentUrl = window.location.href;

    // Знаходимо всі посилання з класом "nav-link"
    var navLinks = $('.menu__link, .mobile__link');

    // Перевіряємо кожне посилання, чи співпадає його URL з поточним URL
    navLinks.each(function () {
      var linkUrl = $(this).attr('href');

      // Якщо URL посилання співпадає з поточним URL, додаємо клас "active"
      if (currentUrl.indexOf(linkUrl) !== -1) {
        $(this).addClass('current');
      }
    });
  });

  
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

  var mixer = mixitup('.popular__list', {
    "animation": {
      "duration": 700,
      "nudge": false,
    }
  });


  $(window).on("load resize", function () {
    if ($(window).width() < 577) {
      $(".restaurant__list:not(.slick-initialized)").slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      });

    }
    else {
      $(".restaurant__list.slick-initialized").slick("unslick");
    }
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