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
            // Сохраняем оригинальные элементы перед перемещением
            const elementsToMove = Array.from(sourceElement.children);
            
            // Очищаем целевой контейнер перед добавлением новых элементов
            targetElement.innerHTML = '';
            
            elementsToMove.forEach(element => {
                targetElement.appendChild(element);
            });
            
            elementsInTarget = true;
        }
    }

    function moveBackToSource() {
        if (elementsInTarget) {
            // Возвращаем элементы обратно
            const elementsToReturn = Array.from(targetElement.children);
            
            // Очищаем исходный контейнер перед добавлением элементов
            sourceElement.innerHTML = '';
            
            elementsToReturn.forEach(element => {
                sourceElement.appendChild(element);
            });
            
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
        // Начальная проверка и перемещение при загрузке
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

    // Вызываем init() и возвращаем функцию для очистки
    return init();
}

// Альтернативный вариант - если нужно гарантировать выполнение после полной загрузки DOM
export function initMoveElementsOnLoad(selectors) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => initMoveElements(selectors));
    } else {
        return initMoveElements(selectors);
    }
}