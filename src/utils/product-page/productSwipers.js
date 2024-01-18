import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

export const productSwipers = () => {
  // Initialize Swiper
  var mySwiper = new Swiper('#alternating', {
    // If we need pagination
    modules: [Navigation, Pagination, Keyboard],
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
        slidesPerView: 1.5,
        spaceBetween: 32,
      },
      // when window width is >= 1279px
      1279: {
        slidesPerView: 2.25,
        spaceBetween: 32,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next-1',
      prevEl: '.swiper-prev-1',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });


  // Initialize Swiper
  var mySwiper = new Swiper('#applications', {
    // If we need pagination
    modules: [Navigation, Pagination],
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
        slidesPerView: 1.5,
        spaceBetween: 32,
      },
      // when window width is >= 1279px
      1279: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next-2',
      prevEl: '.swiper-prev-2',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  // Initialize Swiper
  var mySwiper = new Swiper('#cases', {
    // If we need pagination
    modules: [Navigation, Pagination],
    slidesPerView: 1.1,
    spaceBetween: 32,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next-3',
      prevEl: '.swiper-prev-3',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
};
