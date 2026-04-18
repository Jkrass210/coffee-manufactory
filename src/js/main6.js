import { initModal } from './module6/initModal.js';
import { initMessageCounter } from './module6/initMessageCounter.js';
import { initReviewsSwipers } from './module6/initModalReviewsSwiper.js';

if (document.querySelectorAll(".modal").length) {
  initModal();
}

if (document.querySelectorAll(".js-box-message").length) {
  initMessageCounter();
}

if (document.querySelectorAll(".swiper-modal-reviews-product").length) {
  initReviewsSwipers();
}