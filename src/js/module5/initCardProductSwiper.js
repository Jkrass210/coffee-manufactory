export function initCardProductSwiper() {
  const swiperContainers = document.querySelectorAll('.swiper-card-product')

  if (swiperContainers) {
    swiperContainers.forEach(container => {
      new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 28,
          }
        },
        
        navigation: {
          nextEl: '.swiper-card-product .swiper-student-reviews__btn.--next',
          prevEl: '.swiper-card-product .swiper-student-reviews__btn.--prev',
        },
        
      })
    })
  }
}