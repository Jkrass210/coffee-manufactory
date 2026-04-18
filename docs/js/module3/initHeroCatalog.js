export function initHeroCatalog() {
  const sliderHeroCatalogs = document.querySelectorAll('.swiper-hero-catalog');

  if (sliderHeroCatalogs.length === 0) {
    console.warn('Слайдеры .swiper-hero-catalog не найдены');
    return;
  }

  // Проверяем, загружена ли библиотека Swiper
  if (typeof Swiper === 'undefined') {
    console.error('Swiper не загружен');
    return;
  }

  sliderHeroCatalogs.forEach(function (container, index) {
    const prevButton = container.querySelector('.--prev');
    const nextButton = container.querySelector('.--next');

    // Проверяем наличие кнопок навигации ДЛЯ КАЖДОГО контейнера
    if (!prevButton || !nextButton) {
      console.warn('Не найдены кнопки навигации для слайдера ' + (index + 1));
      return; // Пропускаем этот слайдер, но продолжаем с другими
    }

    // Инициализация Swiper для каждого контейнера
    new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  });
}