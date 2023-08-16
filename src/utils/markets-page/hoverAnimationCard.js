import gsap from 'gsap';

export const hoverAnimationCard = () => {
    const animateOnHover = ($headingBox) => {
        const $parent = $headingBox.closest('.markets-overview_item-content');
        const $image = $parent.find('.markets-overview_image');
        const $imageItem = $parent.find('.markets-overview_image-item');
        const $subtitle = $headingBox.find('.heading-box__subtitle');

        gsap.to([$image, $imageItem], {
            duration: 0.5,
            scale: 0.994,
            ease: 'power2.out',
        });

        gsap.to($imageItem, {
            duration: 0.5,
            scale: 1.03,
            ease: 'power2.out',
        });

        $subtitle.addClass('is-hover');
    };

    const animateOnHoverEnd = ($headingBox) => {
        const $parent = $headingBox.closest('.markets-overview_item-content');
        const $image = $parent.find('.markets-overview_image');
        const $imageItem = $parent.find('.markets-overview_image-item');
        const $subtitle = $headingBox.find('.heading-box__subtitle');

        gsap.to([$image, $imageItem], {
            duration: 0.5,
            scale: 1,
            ease: 'power2.out',
        });

        $subtitle.removeClass('is-hover');
    };

    $('.heading-box.is-markets-markets').hover(
        function () {
            animateOnHover($(this));
        },
        function () {
            animateOnHoverEnd($(this));
        }
    );
};
