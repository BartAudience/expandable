import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { imageSequence } from '../helpers';

export const productAnimation = (name) => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        markers: false,
    });

    let mm = gsap.matchMedia();

    const animateElement = (triggerSelector, targetSelector) => {
        const triggerElement = document.querySelector(triggerSelector);
        const targetElement = document.querySelector(targetSelector);

        if (!triggerElement || !targetElement) return;
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
                y: '-8rem'
            })
            .to(
                targetElement,
                {
                    duration: 3,
                    width: '80svw',
                    height: '80svh',
                    borderRadius: '3rem',
                    y: '0rem'
                },
                '+=2'
            );
    };

    mm.add("(min-width: 992px)", () => {
        animateElement('.logo-header_component', '.logo-header_footage');
    });

    const numImages = 100;


    const canvas = document.getElementById('onscroll-products');

    if (!canvas) return;
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    mm.add("(min-width: 992px)", () => {

        imageSequence({
            urls: Array.from({ length: numImages }, (_, i) => `https://onscroll-demo.vercel.app/WebP_Export/2023032_Markets_Scroll_Anim_${String(i).padStart(5, "0")}.webp`),
            canvas: "#onscroll-products", // <canvas> object to draw images to
            scrollTrigger: {
                trigger: ".logo-header_component",
                start: 'top center',
                end: 'bottom bottom',
                scrub: 0.5,
            },
            parentContainer: '.products-video_video'
        });

    });

    mm.add("(max-width: 991px)", () => {

        imageSequence({
            urls: Array.from({ length: numImages }, (_, i) => `https://onscroll-demo.vercel.app/WebP_Export/2023032_Markets_Scroll_Anim_${String(i).padStart(5, "0")}.webp`),
            canvas: "#onscroll-products", // <canvas> object to draw images to
            scrollTrigger: {
                trigger: ".logo-header_component",
                start: 'top-=20% center',
                end: window.innerHeight * 0.8,
                scrub: 0.5,
                markers: false,
            },
            parentContainer: '.products-video_video'
        });
    });

};
