import { aboutSwiper } from './utils/about-page/aboutSwiper';
import { clientCasesSwiper } from './utils/client-cases-page/clientCasesSwiper';
import { lenisScroll } from './utils/global/lenisScroll';
import { marketSwiper } from './utils/global/marketSwiper';
import { customMenuTheme } from './utils/global/customMenuTheme';
import { smallCustomCode } from './utils/global/smallCustomCode';
import { videoComponentAnimation } from './utils/global/videoComponentAnimation';
import { newsItemHover } from './utils/news-page/newsItemHover';
import { productSwipers } from './utils/product-page/productSwipers';
import { hoverAnimationCard } from './utils/markets-page/hoverAnimationCard';
import { uspAnimation } from './utils/global/UspAnimation';
import { productAnimation } from './utils/global/productAnimation';
import { pageLoader } from './utils/global/pageLoader';
import { uspLoop } from './utils/global/uspLoop';

window.Webflow ||= [];
window.Webflow.push(() => {
  pageLoader();

  //global
  videoComponentAnimation();
  lenisScroll();
  smallCustomCode();
  marketSwiper();
  customMenuTheme();
  uspAnimation();
  productAnimation();
  uspLoop();

  productSwipers();
  aboutSwiper();
  clientCasesSwiper();
  newsItemHover();
  hoverAnimationCard();
});
