import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

export const clientCasesSwiper = () => {
  // Initialize Swiper
  var mySwiper = new Swiper('#cases-clients', {
    modules: [Autoplay],
    slidesPerView: 1.1,
    spaceBetween: 40,
    speed: 3000,
    drag: false,
    allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */ slidesPerView: 1.1,
        spaceBetween: 32,
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */ slidesPerView: 2,
        spaceBetween: 32,
      },
      767: {
        /* when window >= 767px - webflow tablet */ slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        /* when window >= 988px - webflow desktop */ slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};
