export function initStudentReviewsSlider() {
  const sliderContainers = document.querySelectorAll('.swiper-student-reviews');

  // Проверяем наличие элементов
  if (sliderContainers.length === 0) {
    console.warn('Слайдеры .swiper-student-reviews не найдены');
    return;
  }

  sliderContainers.forEach(function (container, index) {
    const prevButton = container.querySelector('.swiper-student-reviews__btn.--prev');
    const nextButton = container.querySelector('.swiper-student-reviews__btn.--next');

    // Проверяем наличие кнопок навигации
    if (!prevButton || !nextButton) {
      console.warn('Не найдены кнопки навигации для слайдера ' + (index + 1));
      return;
    }

    // Проверяем, загружена ли библиотека Swiper
    if (typeof Swiper === 'undefined') {
      console.error('Swiper не загружен');
      return;
    }

    // Инициализация Swiper
    new Swiper(container, {
      loop: true, // бесконечная прокрутка
      slidesPerView: 1, // 3 слайда на ПК
      spaceBetween: 16, // расстояние 28px на ПК
      centeredSlides: false, // Центральный слайд всегда активный
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      breakpoints: {
        // На мобильных устройствах
        320: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        // На планшетах
        710: {
          slidesPerView: 2.35,
          spaceBetween: 16,
        },
        // На десктопе
        1100: {
          slidesPerView: 3,
          spaceBetween: 28,
          centeredSlides: true, // Центральный слайд всегда активный
        }
      }
    });

    console.log('Инициализирован слайдер ' + (index + 1));
  });
}
