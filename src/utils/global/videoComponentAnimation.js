/* eslint-disable no-console */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const videoComponentAnimation = (name) => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    markers: false,
  });

  $('.home-video_component').each(function (index, element) {
    let triggerElement = element;
    let targetElement = $('.home-video_wrapper');

    // Timeline for growing animation
    let tlGrow = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    });

    tlGrow
      .to(targetElement, {
        duration: 2,
        width: '100svw',
        height: '100svh',
        borderRadius: '0rem',
      })
      .to(
        targetElement,
        {
          duration: 3,
          width: '80svw',
          height: '80svh',
          borderRadius: '3rem',
        },
        '+=2'
      );
  });
};
