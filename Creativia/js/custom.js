
jQuery(function ($) {
  $(document).ready(function () {
    $(".slider").slick({
      autoplay: true,
      arrows: true,
      infinite: false,
      prevArrow: ".slider-arrow__prev",
      nextArrow: ".slider-arrow__next",
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,

          }
        }
      ]

    });
  });

});
jQuery(function ($) {
  $(document).ready(function () {
    $(".clients-slider-wrap").slick({
      autoplay: true,
      dots: true,
      arrows: false,

    });
  });
});
$(document).on('click', '.hide-nav', function () {

  //вставляем в переменную hide-nav
  let hideNav = $('.hide-nav');

  //вставляем в переменную меню которое будет искать
  let nav = $('.nav-menu');

  //При нажатие на hide-nav добавляется класс active
  $(hideNav).toggleClass('active');

  // Делаем условие : if=если меню не видно и оно скрыто то при нажатие будет вскрываться
  if (nav.is(':visible')) {
    nav.slideUp();

    // в противном случае оно будет прятаться 
  } else {
    nav.slideDown();
  }
});


