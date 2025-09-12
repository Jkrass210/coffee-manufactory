import { initBurgerMenu } from './module/initBurgerMenu.js';
import { initAccordion } from './module/initAccordion.js';
import { testWebP } from './module/testWebP.js';
import { initSwiperWhy } from './module/initSwiperWhy.js';

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

if (document.querySelectorAll('.swiper-why').length && window.innerWidth <= 850) {
  initSwiperWhy()
}