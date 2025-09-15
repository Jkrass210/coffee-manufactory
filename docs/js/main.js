import { initBurgerMenu } from './module/initBurgerMenu.js';
import { initAccordion } from './module/initAccordion.js';
import { testWebP } from './module/testWebP.js';
import { initSwiperWhy } from './module/initSwiperWhy.js';
import { initSwiperHero } from './module/initSwiperHero.js';
import { initSwiperAbout } from './module/initSwiperAbout.js';
import { initSwiperNews } from './module/initSwiperNews.js';
import { initMoveElements } from './module/initMoveElements.js';

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
    console.log("выполнился webp")
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

if (document.querySelector('.burger')) {
  initBurgerMenu('burger', 'burger-menu', 'nav__link');
}

if (document.querySelectorAll('.dropDownFooter1').length) {
  initAccordion('dropDownFooter1', 'dropDownFooter1__btn', 'dropDownFooter1__box-list');
}

if (document.querySelectorAll('.swiper-why').length && window.innerWidth <= 1000) {
  initSwiperWhy()
}

if (document.querySelectorAll('.swiper-hero').length) {
  initSwiperHero()
}

if (document.querySelectorAll('.swiper-about').length) {
  initSwiperAbout()
}

if (document.querySelectorAll('.swiper-news').length) {
  initSwiperNews()
}

if (document.querySelector('.header__container .brn-group') && document.querySelector('.mobile-hiddem-menu__line-btns')) {
  const moveConfig = {
    sourceSelector: '.header__container .brn-group',
    targetSelector: '.mobile-hiddem-menu__line-btns',
    breakpoint: 1000 // опционально, по умолчанию 1000
  };
  initMoveElements(moveConfig);
}