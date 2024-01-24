import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { imageSequence } from '../helpers';

export const uspAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        markers: false,
    });

    let mm = gsap.matchMedia();

    const uspAnimations = [
        {
            canvas: "#onscroll-usp1",
            numImages: 100,
            trigger: "#set-height-1",
            parentContainer: ".usp-scroll_canvas",
        },
        {
            canvas: "#onscroll-usp2",
            numImages: 100,
            trigger: "#set-height-2",
            parentContainer: ".usp-scroll_canvas",
        },
        {
            canvas: "#onscroll-usp3",
            numImages: 100,
            trigger: "#set-height-3",
            parentContainer: ".usp-scroll_canvas",
        },
    ]


    mm.add("(min-width: 992px)", () => {

        for (let i = 0; i < uspAnimations.length; i++) {
            const { canvas, numImages, trigger, parentContainer } = uspAnimations[i];

            if (!document.querySelector(canvas)) {
                continue; // Skip to the next iteration if the element is not found
            }

            imageSequence({
                urls: Array.from({ length: numImages }, (_, k) => `https://expandable.ams3.digitaloceanspaces.com/frames/WebP_Export_Srollanim_USP/2023032_USP_Scrollanim_${String(i * numImages + k).padStart(5, "0")}.webp`),
                canvas, // <canvas> object to draw images to
                parentContainer,
                scrollTrigger: {
                    trigger,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });
        }
    });

    mm.add("(max-width: 991px)", () => {

        for (let i = 0; i < uspAnimations.length; i++) {
            const { canvas, numImages, trigger, parentContainer } = uspAnimations[i];

            if (!document.querySelector(canvas)) {
                continue; // Skip to the next iteration if the element is not found
            }

            imageSequence({
                urls: Array.from({ length: numImages }, (_, i) => `https://expandable.ams3.digitaloceanspaces.com/frames/WebP_Export_Srollanim_USP/2023032_USP_Scrollanim_${String(i).padStart(5, "0")}.webp`),
                canvas, // <canvas> object to draw images to
                parentContainer,
                scrollTrigger: {
                    trigger,
                    start: 'top-=20% center',
                    end: 'bottom bottom',
                    scrub: 0.5,
                }
            });
        }
    });

};
