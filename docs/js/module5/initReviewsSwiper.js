export function initReviewsSwiper() {
  const swiperContainers = document.querySelectorAll('.swiper-reviews-product')

  if (swiperContainers) {
    swiperContainers.forEach(container => {
      new Swiper(container, {
        slidesPerView: 1.1,
        spaceBetween: 12,
        breakpoints: {
          710: {
            slidesPerView: 1.6,
            spaceBetween: 16
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 16,
          }
        },
        navigation: {
          nextEl: '.swiper-reviews-product .swiper-student-reviews__btn.--next',
          prevEl: '.swiper-reviews-product .swiper-student-reviews__btn.--prev',
        },
      })
    })
  }
}