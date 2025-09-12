// swiper-why.js
/*export function initSwiperWhy() {
  const swiperContainers = document.querySelectorAll('.swiper-why');

  swiperContainers.forEach(container => {
    const wrapper = container.querySelector('.swiper-wrapper');
    const pagination = container.querySelector('.swiper-why-pagination');

    // Проверяем наличие всех необходимых элементов
    if (!wrapper || !pagination) {
      console.warn('Swiper elements not found in container:', container);
      return;
    }

    // Проверяем ширину viewport
    if (window.innerWidth > 850) {
      return;
    }

    // Проверяем, есть ли слайды
    const slides = wrapper.querySelectorAll('.swiper-slide');
    if (slides.length === 0) {
      console.warn('No slides found in swiper wrapper');
      return;
    }

    // Инициализируем Swiper
    new Swiper(container, {
      slidesPerView: 1.1,
      spaceBetween: 8,
      pagination: {
        el: pagination,
        clickable: true,
      },
      // Дополнительные настройки для лучшей производительности
      watchOverflow: true,
      resistance: true,
      resistanceRatio: 0,
      observeParents: true,
      observer: true,
      // Отключаем ненужные функционал
      navigation: false,
      scrollbar: false,
      keyboard: false,
      mousewheel: false,
    });
  });
}

// Обработчик изменения размера окна с троттлингом
let resizeTimeout;
function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const swiperContainers = document.querySelectorAll('.swiper-why');
    swiperContainers.forEach(container => {
      const swiperInstance = container.swiper;
      if (swiperInstance) {
        if (window.innerWidth > 850) {
          swiperInstance.destroy(true, true);
        } else if (!swiperInstance.initialized) {
          initSwiperWhy();
        }
      }
    });
  }, 250);
}

// Добавляем обработчик ресайза
window.addEventListener('resize', handleResize);*/

// swiper-why.js (упрощенный рабочий вариант)
const BREAKPOINT = 850;
let resizeTimeout;

export function initSwiperWhy() {
    const containers = document.querySelectorAll('.swiper-why');
    
    containers.forEach((container, index) => {
        // Пропускаем если уже инициализирован
        if (container.swiper && container.swiper.initialized) {
            return;
        }
        
        const wrapper = container.querySelector('.swiper-wrapper');
        const pagination = container.querySelector('.swiper-why-pagination');
        
        if (!wrapper || !pagination) return;
        
        // Проверяем ширину viewport
        if (window.innerWidth > BREAKPOINT) {
            return;
        }
        
        // Инициализируем Swiper
        try {
            new Swiper(container, {
                slidesPerView: 1.1,
                spaceBetween: 8,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                watchOverflow: true,
                observer: true,
            });
        } catch (error) {
            console.error('Swiper error:', error);
        }
    });
}

// Функция для обработки ресайза
function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const containers = document.querySelectorAll('.swiper-why');
        
        containers.forEach(container => {
            if (container.swiper && container.swiper.initialized) {
                // Уничтожаем если перешли в десктопный режим
                if (window.innerWidth > BREAKPOINT) {
                    container.swiper.destroy(true, true);
                }
            } else {
                // Инициализируем если перешли в мобильный режим
                if (window.innerWidth <= BREAKPOINT) {
                    initSwiperWhy();
                }
            }
        });
    }, 250);
}

// Добавляем обработчик
window.addEventListener('resize', handleResize);

// Экспортируем функцию для ручного вызова
export { initSwiperWhy };