import { videoComponentAnimation } from './utils/global/videoComponentAnimation';
import { lenisScroll } from './utils/global/lenisScroll';
import { smallCustomCode } from './utils/global/smallCustomCode';
import { marketSwiper } from './utils/global/marketSwiper';

import { productSwipers } from './utils/product-page/productSwipers';
import { aboutSwiper } from './utils/about-page/aboutSwiper';
import { clientCasesSwiper } from './utils/client-cases-page/clientCasesSwiper';
import { newsItemHover } from './utils/news-page/newsItemHover';

window.Webflow ||= [];
window.Webflow.push(() => {
    //global
    videoComponentAnimation();
    lenisScroll();
    smallCustomCode();
    marketSwiper();

    productSwipers();
    aboutSwiper();
    clientCasesSwiper();
    newsItemHover();
});
