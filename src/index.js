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

window.Webflow ||= [];
window.Webflow.push(() => {
  //global
  videoComponentAnimation();
  lenisScroll();
  smallCustomCode();
  marketSwiper();
  customMenuTheme();

  productSwipers();
  aboutSwiper();
  clientCasesSwiper();
  newsItemHover();
  hoverAnimationCard();
});
