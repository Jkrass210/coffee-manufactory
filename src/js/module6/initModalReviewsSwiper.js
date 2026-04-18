export function initReviewsSwipers() {
  const previewSliders = document.querySelectorAll('.swiper-reviews-product');

  if (!previewSliders.length) return;

  previewSliders.forEach((previewContainer) => {
    // ищем связанный modal слайдер (например, в одном родителе)
    const parent = previewContainer.closest('.parent-swaipers-reviews-product'); // ОБЯЗАТЕЛЬНО общий родитель
    if (!parent) return;

    const modalContainer = parent.querySelector('.swiper-modal-reviews-product');
    if (!modalContainer) return;

    // защита от повторной инициализации (AJAX)
    if (previewContainer.dataset.swiperInit) return;
    previewContainer.dataset.swiperInit = 'true';
    modalContainer.dataset.swiperInit = 'true';

    // PREVIEW
    const previewSwiper = new Swiper(previewContainer, {
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
        nextEl: previewContainer.querySelector('.--next'),
        prevEl: previewContainer.querySelector('.--prev'),
      },
    });

    // MAIN (modal)
    const modalSwiper = new Swiper(modalContainer, {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: modalContainer.querySelector('.--next'),
        prevEl: modalContainer.querySelector('.--prev'),
      },
    });

    // 🔗 СИНХРОНИЗАЦИЯ (как ты хотел)
    previewSwiper.on('click', function (swiper) {
      const index = swiper.clickedIndex;

      if (index !== undefined) {
        modalSwiper.slideTo(index);
      }
    });

  });
}