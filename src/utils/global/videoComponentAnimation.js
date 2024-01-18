import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { imageSequence } from '../helpers';

export const videoComponentAnimation = (name) => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    markers: false,
  });

  let mm = gsap.matchMedia();

  const animateElement = (triggerSelector, targetSelector) => {
    const triggerElement = document.querySelector(triggerSelector);
    const targetElement = document.querySelector(targetSelector);

    const tlGrow = gsap.timeline({
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
  };

  const numImages = 100;

  const canvas = document.getElementById('onscroll-video');
  if (!canvas) return;
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  const ctx = canvas.getContext("2d");
  const parentContainer = document.querySelector('.home-video_wrapper')
  canvas.width = parentContainer.offsetWidth;
  canvas.height = parentContainer.offsetHeight;

  mm.add("(min-width: 992px)", () => {
    animateElement('.home-video_component', '.home-video_wrapper');
    animateElement('.logo-header_track', '.logo-header_footage');

    imageSequence({
      urls: Array.from({ length: numImages }, (_, i) => `https://onscroll-demo.vercel.app/WebP_Export/2023032_Markets_Scroll_Anim_${String(i).padStart(5, "0")}.webp`),
      canvas: "#onscroll-video", // <canvas> object to draw images to
      scrollTrigger: {
        trigger: ".home-video_component",
        start: 'top center',
        end: 'bottom bottom',
        scrub: 0.5,
      }
    });

  });

  mm.add("(max-width: 991px)", () => {

    imageSequence({
      urls: Array.from({ length: numImages }, (_, i) => `https://onscroll-demo.vercel.app/WebP_Export/2023032_Markets_Scroll_Anim_${String(i).padStart(5, "0")}.webp`),
      canvas: "#onscroll-video", // <canvas> object to draw images to
      scrollTrigger: {
        trigger: ".home-video_component",
        start: 'top-=20% center',
        end: window.innerHeight * 0.8,
        scrub: 0.5,
        markers: false,
      }
    });
  });

};
