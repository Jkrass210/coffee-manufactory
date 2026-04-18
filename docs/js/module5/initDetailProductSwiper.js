export function initDetailProductSwiper() {
  const swiperContainers = document.querySelectorAll('.x2_j_product-top__box-swiper');

  if (!swiperContainers.length) return;

  swiperContainers.forEach((container, index) => {
    const swiperProjectTop = container.querySelector('.x2_j_detail-product-swiper-main');
    const swiperProjectBottom = container.querySelector('.x2_j_detail-product-swiper-preview');

    const prevBtn = container.querySelector('.group-btn-swiper-type-3-btn.--prev ');
    const nextBtn = container.querySelector('.group-btn-swiper-type-3-btn.--next');

    if (!swiperProjectTop || !swiperProjectBottom) {
      console.warn(`В контейнере #${index} отсутствует один из слайдеров`);
      return;
    }

    // Превью-слайдер
    const previewSwiper = new Swiper(swiperProjectBottom, {
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      spaceBetween: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });

    // Основной слайдер
    const mainSwiper = new Swiper(swiperProjectTop, {
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: previewSwiper,
      },
      controller: {
        control: previewSwiper,
      },
    });

    // Клик по превью
    previewSwiper.slides.forEach((slide, slideIndex) => {
      slide.addEventListener('click', () => {
        mainSwiper.slideTo(slideIndex);
      });
    });
  });
}