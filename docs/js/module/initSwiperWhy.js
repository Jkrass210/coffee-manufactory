const BREAKPOINT = 1000;
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

