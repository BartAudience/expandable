export const uspLoop = () => {
    const elements = document.querySelectorAll('.features-tabs_link');
    const navOverlay = document.querySelector('.w-nav-overlay');

    if (elements.length <= 0) return;

    if (elements.length > 0) {
        let currentIndex = 1;
        let intervalId;
        let isPaused = false;

        function isNavOverlayVisible() {
            // Check if the .w-nav-overlay is visible (display: block)
            return navOverlay && getComputedStyle(navOverlay).display === 'block';
        }

        function clickElement() {

            isPaused = isNavOverlayVisible();
            if (!isPaused) {
                const elementId = `w-tabs-0-data-w-tab-${currentIndex}`;
                try {
                    document.getElementById(elementId).click();
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
            element.addEventListener('mouseenter', () => {
                isPaused = true;
            });
            element.addEventListener('mouseleave', () => {
                isPaused = false;
            });
        });

    }
};
