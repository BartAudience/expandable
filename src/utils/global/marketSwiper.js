import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const marketSwiper = () => {
  var menu = [
    'Sports & Hospitality',
    'Mobile Work & Learning',
    'Film & Production Support',
    'Events & Roadshow',
    'Sales & Promotion',
    'Living & LIfestyle',
  ];
  var mySwiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    // If we need pagination
    slidesPerView: 1.1,
    spaceBetween: 32,
    breakpoints: {
      // when window width is >= 479px
      479: {
        slidesPerView: 1.1,
        spaceBetween: 32,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 1.1,
        spaceBetween: 32,
      },
      // when window width is >= 1279px
      1279: {
        slidesPerView: 1.1,
        spaceBetween: 64,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + menu[index] + '</span>';
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  $('.markets-slider_image-item').removeClass('is-hover');
  $('.markets-slider_image').removeClass('is-hover');

  $('.button-box_markets-slider').on('mouseenter mouseleave', function () {
    $('.markets-slider_image').toggleClass('is-hover');
    $('.markets-slider_image-item').toggleClass('is-hover');
  });
};
