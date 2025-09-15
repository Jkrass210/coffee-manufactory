export function initSwiperNews() {
  // Проверяем, что Swiper доступен
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library is not loaded');
    return;
  }

  // Ищем все контейнеры слайдеров
  const swiperContainers = document.querySelectorAll('.swiper-news.swiper');

  if (!swiperContainers.length) return;

  swiperContainers.forEach((container, index) => {
    try {
      // Ищем элементы внутри контейнера
      const wrapper = container.querySelector('.swiper-wrapper');
      const slides = container.querySelectorAll('.swiper-slide');

      // Ищем кнопки навигации - они могут быть вне контейнера слайдера
      const prevBtn = document.querySelector('.swiper-news-btn.--prev');
      const nextBtn = document.querySelector('.swiper-news-btn.--next');

      // Проверяем наличие всех необходимых элементов
      if (!wrapper || slides.length === 0 || !prevBtn || !nextBtn) {
        console.warn(`Swiper news #${index} is missing required elements`);
        return;
      }

      // Инициализация Swiper
      new Swiper(container, {
        slidesPerView: 1.1,
        spaceBetween: 12,
        speed: 300,
        loop: false,
        watchOverflow: true,
        allowTouchMove: true,

        // Навигация
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
          disabledClass: 'swiper-button-disabled'
        },

        // Адаптивные брейкпоинты
        breakpoints: {
          // Мобильные (до 767px) - значения по умолчанию
          710: {
            slidesPerView: 2.2,
            spaceBetween: 24
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 28
          }
        },

        // События для обновления навигации
        on: {
          init: function (swiper) {
            updateNavigation(swiper);
          },
          slideChange: function (swiper) {
            updateNavigation(swiper);
          },
          resize: function (swiper) {
            updateNavigation(swiper);
          }
        }
      });

    } catch (error) {
      console.error(`Error initializing swiper news #${index}:`, error);
    }
  });

  // Функция обновления состояния кнопок навигации
  function updateNavigation(swiper) {
    const prevBtn = document.querySelector('.swiper-news-btn.--prev');
    const nextBtn = document.querySelector('.swiper-news-btn.--next');

    if (!prevBtn || !nextBtn) return;

    const { isBeginning, isEnd } = swiper;

    // Обновляем состояние кнопок
    prevBtn.disabled = isBeginning;
    nextBtn.disabled = isEnd;
    prevBtn.setAttribute('aria-disabled', isBeginning);
    nextBtn.setAttribute('aria-disabled', isEnd);
  }
}