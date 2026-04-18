import { initDetailProductSwiper } from './module5/initDetailProductSwiper.js';
import { initScrollingView } from './module5/initScrollingView.js';
import { initDescHidden } from './module5/initDescHidden.js';
import { initExpertAsses } from './module5/initExpertAsses.js';
import { initShadowScroll } from './module5/initShadowScroll.js';
import { initRecipeSwiper } from './module5/initRecipeSwiper.js';
import { initTabsType1 } from './module5/initTabsType1.js';
//import { initReviewsSwiper } from './module5/initReviewsSwiper.js';
//import { initCardReviewModal } from './module5/initCardReviewModal.js';
import { initSyncNavigation } from './module5/initSyncNavigation.js';
import { initCardProductSwiper } from './module5/initCardProductSwiper.js';

if (document.querySelectorAll(".x2_j_product-top__box-swiper").length) {
  initDetailProductSwiper();
}

if (document.querySelector(".js-scrolling-fixed")) {
  initScrollingView();
}

if (document.querySelectorAll(".js-desc-hidden").length) {
  initDescHidden();
}

if (document.querySelector(".box-expert-asses")) {
  initExpertAsses();
}

if (document.querySelectorAll(".js-shadow-scroll").length) {
  initShadowScroll();
}

if (document.querySelectorAll(".swiper-recipe").length) {
  initRecipeSwiper();
}

if (document.querySelectorAll(".js-tabs-tipe-1").length) {
  initTabsType1();
}
/*
if (document.querySelectorAll(".swiper-reviews-product").length) {
  initReviewsSwiper();
}
*/
/*if (document.querySelectorAll(".card-review").length) {
  initCardReviewModal();
}*/

if (document.querySelector(".js-point-box")) {
  initSyncNavigation();
}

if (document.querySelectorAll(".swiper-card-product").length) {
  initCardProductSwiper();
}