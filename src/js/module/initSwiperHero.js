// Функция для инициализации Swiper слайдеров
export function initSwiperHero(swiperClass = 'swiper-hero', paginationClass = 'swiper-hero-pagination') {
  // Находим все контейнеры слайдеров на странице
  const swiperContainers = document.querySelectorAll(`.${swiperClass}`);

  // Если Swiper не загружен, выводим предупреждение
  if (typeof Swiper === 'undefined') {
    console.error('Swiper не загружен. Убедитесь, что подключили библиотеку Swiper.');
    return;
  }

  // Инициализируем каждый найденный слайдер
  swiperContainers.forEach(container => {
    // Находим пагинацию внутри текущего контейнера
    const paginationEl = container.querySelector(`.${paginationClass}`);

    // Инициализируем Swiper
    new Swiper(container, {
      effect: 'fade', // Включаем fade эффект
      fadeEffect: {
        crossFade: true // Одновременное перекрытие слайдов
      },
      speed: 500, // Скорость перехода в ms
      // Указываем, что всегда отображается один слайд
      slidesPerView: 1,
      // Отключаем расстояние между слайдами
      spaceBetween: 0,
      // Добавляем пагинацию
      pagination: {
        el: paginationEl,
        clickable: true,
      },
      // Опционально: добавляем дополнительные параметры для лучшего UX
      /*loop: true, // Бесконечная прокрутка
      speed: 500, // Скорость анимации
      autoplay: {
        delay: 5000, // Автопрокрутка каждые 5 секунд
        disableOnInteraction: false,
      },*/
    });
  });
}

