import { initStudentReviewsSlider } from './module2/initStudentReviewsSlider.js';
import { initExpandableText } from './module2/initExpandableText.js';
import { initAnswersTabs } from './module2/initAnswersTabs.js';
import { initSmoothScroll } from './module2/initSmoothScroll.js';
import { initCounter } from './module2/initCounter.js';

if (document.querySelectorAll(".swiper-student-reviews").length) {
  initStudentReviewsSlider();
}

if (document.querySelectorAll(".card-student-reviews__bottom").length) {
  initExpandableText();
}

if (document.querySelectorAll(".card-answers-tab").length) {
  initAnswersTabs();
}

if (document.querySelectorAll(".card-master-class__link").length) {
  initSmoothScroll();
}

if (document.querySelectorAll(".card-courses-p-s").length) {
  initCounter();
}