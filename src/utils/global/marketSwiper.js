import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import gsap from 'gsap';

export const marketSwiper = () => {
  var menu = [
    'Sports & Hospitality',
    'Mobile Work & Learning',
    'Film & Production Support',
    'Events & Roadshow',
    'Sales & Promotion',
    'Living & LIfestyle',
  ];

  var currentSlideIndex = 0; // Initialize with the first slide index

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
        return '<a class="' + className + '"> <div class="button_text"> ' + menu[index] + ' <div class="button_underline" style="width: 0%; height: 1px;"></div> </div> </a>';
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
    on: {
      slideChange: function () {
        currentSlideIndex = this.activeIndex;
        // only on mobile
        if (window.innerWidth > 1000) return;
        var activeSlideIndex = this.activeIndex;
        var paginationWrapper = document.querySelector('.swiper-pagination');
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');

        // Calculate the new left position based on activeSlideIndex
        var newBullet = bullets[activeSlideIndex];
        var newBulletWidth = 180 + 12;
        var newLeftPosition = newBulletWidth * activeSlideIndex;

        gsap.to(paginationWrapper, {
          duration: 0.3,
          x: -newLeftPosition,
          ease: 'power2.inOut',
        });
      },
    },
  });


  $('.button.is-icon.is-white.w-inline-block').hover(function () {

    // Apply the hover effect to the specific slide
    $('.markets-slider_image-item').css('transform', 'scale(1)');
    $('.markets-slider_image-item').eq(currentSlideIndex).css('transform', 'scale(1.03)');

    $('.markets-slider_image').css('transform', 'scale(1)');
    $('.markets-slider_image').eq(currentSlideIndex).css('transform', 'scale(0.993)');

  }, function () {
    // Remove the hover effect when mouse leaves
    $('.markets-slider_image-item').css('transform', 'scale(1)');
    $('.markets-slider_image').css('transform', 'scale(1)');
  });


  $('.swiper-pagination').css('overflow', 'visible');
  $('.swiper-pagination').css('grid-column-gap', '12px');

  //only on mobile
  if (window.innerWidth < 1000) {
    $('.swiper-pagination-bullet').css('width', '180px');
  } else {
    $('.swiper-pagination-bullet').css('width', 'auto');
  }

  $('.markets-slider_image-item').removeClass('is-hover');
  $('.markets-slider_image').removeClass('is-hover');

  $('.button-box_markets-slider').on('mouseenter mouseleave', function () {
    $('.markets-slider_image').toggleClass('is-hover');
    $('.markets-slider_image-item').toggleClass('is-hover');
  });

  $('.swiper-pagination-bullet').each(function () {
    $(this).css('text-align', 'start');
    $('.button_text', this).css('position', 'relative');
    $(this).on('mouseover', function () {
      $('.button_underline', this).css('background-color', '#292929');
      //animate this underline width to 100% with ease with gsap
      gsap.to($('.button_underline', this), {
        duration: 0.3,
        width: '100%',
        ease: 'power2.inOut',
      });
    });

    $(this).on('mouseout', function () {
      //animate this underline width to 100% with ease with gsap
      gsap.to($('.button_underline', this), {
        duration: 0.3,
        width: '0%',
        ease: 'power2.inOut',
      });
    });
  });

};
