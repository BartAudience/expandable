export const uspLoop = () => {
    const elements = document.querySelectorAll('.features-tabs_link');
    const navOverlay = document.querySelector('.w-nav-overlay');
    const featuresTab = document.querySelector('.features-tabs_component'); // The .features-tabs element

    if (elements.length <= 0 || !featuresTab) return;

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
                document.getElementById(elementId).click();
            } catch (error) {
                console.error(`Error clicking element with ID ${elementId}:`, error);
                clearInterval(intervalId);
            }
            currentIndex = (currentIndex + 1) % elements.length;
        }
    }

    const tabPanes = document.querySelectorAll('.cases_tabs-content');
    tabPanes.forEach(element => {
        element.addEventListener('mouseenter', () => isPaused = true);
        element.addEventListener('mouseleave', () => isPaused = false);
    });

    // IntersectionObserver setup
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelectorAll('.features-tabs_link-line_accent');

                //if any progressBar has width 100% clickElement
                progressBar.forEach((progress) => {
                    if (progress.style.width === '100%') {
                        clickElement();
                    }
                })

                intervalId = setInterval(clickElement, 4500); // Start interval when in view
            } else {
                clearInterval(intervalId); // Clear interval when out of view
            }
        });
    }, { threshold: [0.5] }); // Adjust threshold as needed

    observer.observe(featuresTab); // Observe the .features-tabs element
};
