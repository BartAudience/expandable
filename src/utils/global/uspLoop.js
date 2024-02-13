export const uspLoop = () => {
    const elements = document.querySelectorAll('.features-tabs_link');
    const navOverlay = document.querySelector('.w-nav-overlay');

    if (elements.length <= 0) return;

    let currentIndex = 1;
    let intervalId;
    let isPaused = false;

    function isNavOverlayVisible() {
        return navOverlay && getComputedStyle(navOverlay).display === 'block';
    }

    function clickElement() {
        isPaused = isNavOverlayVisible();
        if (!isPaused) {
            const elementId = `w-tabs-0-data-w-tab-${currentIndex}`;
            try {
                const element = document.getElementById(elementId);
                if (element && element.isInViewport) {
                    element.click();
                    console.log('click')
                }
            } catch (error) {
                console.error(`Error clicking element with ID ${elementId}:`, error);
                clearInterval(intervalId);
            }

            currentIndex = (currentIndex + 1) % elements.length;
        }
    }

    intervalId = setInterval(clickElement, 4500);

    const tabPanes = document.querySelectorAll('.cases_tabs-content');
    tabPanes.forEach(element => {
        element.addEventListener('mouseenter', () => isPaused = true);
        element.addEventListener('mouseleave', () => isPaused = false);
    });

    // IntersectionObserver setup
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.isInViewport = true;
            } else {
                entry.target.isInViewport = false;
            }
        });
    }, { threshold: [0.5] }); // Adjust threshold as needed

    elements.forEach(element => {
        element.isInViewport = false; // Initialize with false
        observer.observe(element);
    });
};
