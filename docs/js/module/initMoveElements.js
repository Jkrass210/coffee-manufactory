export function initMoveElements(selectors) {
    const {
        sourceSelector,
        targetSelector,
        breakpoint = 1000
    } = selectors;

    const sourceElement = document.querySelector(sourceSelector);
    const targetElement = document.querySelector(targetSelector);

    // Строгая проверка элементов
    if (!sourceElement || !targetElement) {
        console.warn('MoveElements: Source or target element not found');
        return null;
    }

    // Проверяем, что элементы разные
    if (sourceElement === targetElement) {
        console.error('MoveElements: Source and target elements cannot be the same');
        return null;
    }

    // Состояние для отслеживания текущего положения
    let elementsInTarget = false;

    function isMobileView() {
        return window.innerWidth <= breakpoint;
    }

    function moveToTarget() {
        if (!elementsInTarget) {
            // Клонируем элементы для сохранения оригиналов
            const elementsToMove = Array.from(sourceElement.children);
            
            elementsToMove.forEach(element => {
                targetElement.appendChild(element.cloneNode(true));
            });
            
            // Очищаем исходный контейнер
            sourceElement.innerHTML = '';
            elementsInTarget = true;
        }
    }

    function moveBackToSource() {
        if (elementsInTarget) {
            // Возвращаем элементы обратно
            const elementsToReturn = Array.from(targetElement.children);
            
            elementsToReturn.forEach(element => {
                sourceElement.appendChild(element.cloneNode(true));
            });
            
            // Очищаем целевой контейнер
            targetElement.innerHTML = '';
            elementsInTarget = false;
        }
    }

    function handleMove() {
        if (isMobileView()) {
            moveToTarget();
        } else {
            moveBackToSource();
        }
    }

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

    function init() {
        // Начальная проверка и перемещение
        handleMove();

        const debouncedHandleMove = debounce(handleMove, 250);
        window.addEventListener('resize', debouncedHandleMove);

        return () => {
            window.removeEventListener('resize', debouncedHandleMove);
            // Возвращаем элементы при уничтожении
            if (elementsInTarget) {
                moveBackToSource();
            }
        };
    }

    return init();
}