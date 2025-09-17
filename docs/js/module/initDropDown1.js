export function initAccordion(containerClass, btnClass, contentClass) {
    const BREAKPOINT = 1000;
    const containers = document.querySelectorAll(`.${containerClass}`);

    // Проверяем существование элементов
    if (!containers.length) return;

    let activeContainer = null;
    let eventHandlers = [];

    // Проверка мобильного вида
    function isMobileView() {
        return window.innerWidth <= BREAKPOINT;
    }

    // Функция для закрытия всех аккордеонов
    function closeAllAccordions() {
        containers.forEach(container => {
            const btn = container.querySelector(`.${btnClass}`);
            const content = container.querySelector(`.${contentClass}`);

            if (btn && content) {
                btn.classList.remove('active');
                content.classList.remove('active');
            }
        });
        activeContainer = null;
    }

    // Функция для переключения аккордеона
    function toggleAccordion(container, event) {
        // Работаем только в мобильном виде
        if (!isMobileView()) return;

        // Отменяем стандартное поведение для ссылок
        if (event && event.preventDefault) {
            event.preventDefault();
            event.stopPropagation();
        }

        const btn = container.querySelector(`.${btnClass}`);
        const content = container.querySelector(`.${contentClass}`);

        if (!btn || !content) return;

        // Если кликаем по уже активному аккордеону - закрываем
        if (container === activeContainer) {
            closeAllAccordions();
            return;
        }

        // Закрываем все и открываем текущий
        closeAllAccordions();
        btn.classList.add('active');
        content.classList.add('active');
        activeContainer = container;
    }

    // Инициализация обработчиков
    function initHandlers() {
        // Очищаем предыдущие обработчики
        removeHandlers();

        // Добавляем обработчики для каждого контейнера
        containers.forEach(container => {
            const btn = container.querySelector(`.${btnClass}`);

            if (btn) {
                const clickHandler = function (e) {
                    toggleAccordion(container, e);
                };
                btn.addEventListener('click', clickHandler);
                eventHandlers.push({ element: btn, type: 'click', handler: clickHandler });
            }
        });

        // Обработчик клавиши Esc
        const escapeHandler = function (e) {
            if (e.key === 'Escape' && activeContainer && isMobileView()) {
                closeAllAccordions();
            }
        };
        document.addEventListener('keydown', escapeHandler);
        eventHandlers.push({ element: document, type: 'keydown', handler: escapeHandler });
    }

    // Удаление обработчиков
    function removeHandlers() {
        // Удаляем все сохраненные обработчики
        eventHandlers.forEach(({ element, type, handler }) => {
            element.removeEventListener(type, handler);
        });
        eventHandlers = [];
        
        closeAllAccordions();
    }

    // Функция управления состоянием
    function manageAccordion() {
        if (isMobileView()) {
            console.log('Mobile view - initializing accordion');
            initHandlers();
        } else {
            console.log('Desktop view - removing accordion handlers');
            removeHandlers();
        }
    }

    // Debounce функция
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Инициализация при загрузке
    manageAccordion();

    // Обработчик ресайза
    const debouncedResize = debounce(function() {
        console.log('Resize detected, managing accordion...');
        manageAccordion();
    }, 250);
    
    window.addEventListener('resize', debouncedResize);

    // Возвращаем функцию для очистки
    return function destroy() {
        window.removeEventListener('resize', debouncedResize);
        removeHandlers();
    };
}

// Автоматическая инициализация для dropDown1
export function initDropDown1() {
    return initAccordion('dropDown1', 'dropDown1__main-link', 'dropDown1__box-list');
}

// Автоматическая инициализация при загрузке DOM
function autoInit() {
    // Проверяем, есть ли на странице элементы dropDown1
    const hasDropDown1 = document.querySelectorAll('.dropDown1').length > 0;
    
    if (!hasDropDown1) {
        console.log('No dropDown1 elements found');
        return;
    }
    
    console.log('Initializing dropDown1 accordion...');
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => initDropDown1(), 100);
        });
    } else {
        setTimeout(() => initDropDown1(), 100);
    }
}

// Запускаем автоматическую инициализацию
autoInit();