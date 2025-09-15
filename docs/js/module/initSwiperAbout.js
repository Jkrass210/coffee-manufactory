export function initSwiperAbout(containerClass = '.swiper-about') {
  // Проверяем, что Swiper доступен
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library is not loaded');
    return;
  }

  const containers = document.querySelectorAll(containerClass);

  if (!containers.length) return;

  containers.forEach((container, index) => {
    try {
      // Поиск элементов внутри контейнера
      const wrapper = container.querySelector('.swiper-wrapper');
      const slides = container.querySelectorAll('.swiper-slide');
      const prevBtn = container.querySelector('.swiper-about-btn.--prev');
      const nextBtn = container.querySelector('.swiper-about-btn.--next');

      // Строгая проверка наличия всех необходимых элементов
      const isValid = wrapper && slides.length > 0 && prevBtn && nextBtn;
      if (!isValid) {
        console.warn(`Swiper container #${index} is missing required elements`);
        return;
      }

      // Инициализация Swiper
      const swiper = new Swiper(container, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: false,
        watchOverflow: true,
        effect: 'fade', // Включаем fade эффект
        fadeEffect: {
          crossFade: true // Одновременное перекрытие слайдов
        },
        speed: 500,

        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },

        on: {
          init: function () {
            this.navigation.update();
          }
        }
      });

    } catch (error) {
      console.error(`Error initializing swiper #${index}:`, error);
    }
  });
}