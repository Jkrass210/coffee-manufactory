export function initRecipeSwiper() {
  const swiperContainers = document.querySelectorAll('.swiper-recipe')

  if (swiperContainers) {
    swiperContainers.forEach(container => {
      new Swiper(container, {
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-recipe-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: '.swiper-recipe .swiper-student-reviews__btn.--next',
          prevEl: '.swiper-recipe .swiper-student-reviews__btn.--prev',
        },
      })
    })
  }
}