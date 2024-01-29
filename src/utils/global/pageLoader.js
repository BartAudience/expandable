import gsap from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export const pageLoader = () => {
    const pageLoaderWrapper = document.querySelector('.page-loader');

    if (!pageLoaderWrapper) return;
    pageLoaderWrapper.style.display = 'block';

    //get first svg item in the page loader
    const svgPath = pageLoaderWrapper.getElementsByTagName('path')[0];

    gsap.set(svgPath, {
        drawSVG: '0% 0%',
        fill: 'none',
        strokeWidth: 2,
    });

    // In a central file that's included in your project
    window.imageLoader = {
        totalImages: 0,
        loadedImages: 0,
        registerImageLoad: function () {
            this.loadedImages++;

            gsap.to(svgPath, {
                drawSVG: `0% ${this.loadedImages * 10}%`,
                duration: 1.5,
                ease: 'power3.inOut',
            })

            if (this.loadedImages * 100 === this.totalImages) {
                const tl = gsap.timeline({
                    defaults: {
                        duration: 1.5,
                        ease: 'power2.inOut',
                    }
                });

                tl.to(svgPath, {
                    fill: '#465c58',
                    ease: 'power3.inOut',
                    duration: 1,
                    delay: 1,
                })

                tl.to(pageLoaderWrapper, {
                    yPercent: 100,
                    ease: 'power3.inOut',
                    duration: 1.5,
                    onComplete: () => {
                        pageLoaderWrapper.style.display = 'none';
                    }
                })

            }
        },
        addImages: function (count) {
            this.totalImages += count;
        }
    };
}