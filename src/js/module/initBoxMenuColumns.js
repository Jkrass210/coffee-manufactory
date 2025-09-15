export function initBoxMenuColumns() {
  const boxMenu = document.querySelector('.box-menu');
  const columns = document.querySelectorAll('.box-menu__column');

  // Проверяем, что элементы существуют
  if (!boxMenu || columns.length < 3) {
    return;
  }

  const firstColumn = columns[0];
  const secondColumn = columns[1];
  const thirdColumn = columns[2];

  // Флаг для отслеживания копирования
  let isCopied = false;

  // Функция для копирования элементов
  function copyElements() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 1100 && !isCopied) {
      // Находим все li во втором столбце
      const secondColumnItems = secondColumn.querySelectorAll('li');

      if (secondColumnItems.length >= 5) {
        // Берем первые 3 элемента
        const firstThreeItems = Array.from(secondColumnItems).slice(0, 3);
        // Берем оставшиеся 2 элемента
        const lastTwoItems = Array.from(secondColumnItems).slice(3);

        // Копируем и добавляем первые 3 элемента в конец первого столбца
        const firstColumnList = firstColumn.querySelector('.box-menu__list-col');
        firstThreeItems.forEach(item => {
          const clone = item.cloneNode(true);
          clone.classList.add('copied-item');
          firstColumnList.appendChild(clone);
        });

        // Копируем и добавляем оставшиеся 2 элемента в начало третьего столбца
        const thirdColumnList = thirdColumn.querySelector('.box-menu__list-col');
        const firstThirdItem = thirdColumnList.querySelector('li:first-child');
        lastTwoItems.reverse().forEach(item => {
          const clone = item.cloneNode(true);
          clone.classList.add('copied-item');
          thirdColumnList.insertBefore(clone, firstThirdItem);
        });

        // Скрываем второй блок
        secondColumn.style.display = 'none';
        isCopied = true;
      }
    } else if (viewportWidth > 1100 && isCopied) {
      // Возвращаем исходное состояние при ширине больше 1100px
      restoreOriginalState();
    }
  }

  // Функция для восстановления исходного состояния
  function restoreOriginalState() {
    if (isCopied) {
      // Удаляем скопированные элементы
      const copiedItems = document.querySelectorAll('.copied-item');
      copiedItems.forEach(item => item.remove());

      // Показываем второй блок
      secondColumn.style.display = '';
      isCopied = false;
    }
  }

  // Функция для обработки ресайза с debounce
  function handleResize() {
    clearTimeout(window.boxMenuResizeTimeout);
    window.boxMenuResizeTimeout = setTimeout(copyElements, 250);
  }

  // Инициализация
  function init() {
    copyElements();

    // Добавляем обработчики событий
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', copyElements);
  }

  // Запускаем инициализацию
  init();

  // Возвращаем функцию для ручного управления (опционально)
  return {
    copyElements,
    restoreOriginalState
  };
}