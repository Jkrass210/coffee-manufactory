/*export function initExpandableText() {
  const containers = document.querySelectorAll('.card-student-reviews__bottom');

  containers.forEach(container => {
    const descElement = container.querySelector('.card-student-reviews__main-desc');
    const buttonElement = container.querySelector('.card-student-reviews__btn');

    // Проверяем наличие элементов
    if (!descElement || !buttonElement) {
      return;
    }

    // Проверяем высоту элемента
    const descHeight = descElement.scrollHeight;
    const maxHeight = 90;

    if (descHeight > maxHeight) {
      // Если высота превышает 90px - добавляем класс и вешаем обработчик
      descElement.classList.add('hidden-desc');

      buttonElement.addEventListener('click', function () {
        const isHidden = descElement.classList.contains('hidden-desc');

        if (isHidden) {
          // Открываем текст
          descElement.classList.remove('hidden-desc');
          buttonElement.textContent = 'Скрыть';
        } else {
          // Закрываем текст
          descElement.classList.add('hidden-desc');
          buttonElement.textContent = 'Подробнее';
        }
      });
    } else {
      // Если высота меньше 90px - скрываем кнопку
      buttonElement.classList.add('hidden');
    }
  });
}*/

export function initExpandableText() {
  const containers = document.querySelectorAll('.card-student-reviews__bottom');
  let currentlyOpenContainer = null;

  containers.forEach(container => {
    const descElement = container.querySelector('.card-student-reviews__main-desc');
    const buttonElement = container.querySelector('.card-student-reviews__btn');

    // Проверяем наличие элементов
    if (!descElement || !buttonElement) {
      return;
    }

    // Проверяем высоту элемента
    const descHeight = descElement.scrollHeight;
    const maxHeight = 90;

    if (descHeight > maxHeight) {
      // Если высота превышает 90px - добавляем класс и вешаем обработчик
      descElement.classList.add('hidden-desc');

      buttonElement.addEventListener('click', function () {
        const isHidden = descElement.classList.contains('hidden-desc');

        if (isHidden) {
          // Закрываем предыдущий открытый блок
          if (currentlyOpenContainer && currentlyOpenContainer !== container) {
            const prevDesc = currentlyOpenContainer.querySelector('.card-student-reviews__main-desc');
            const prevButton = currentlyOpenContainer.querySelector('.card-student-reviews__btn');

            if (prevDesc && prevButton) {
              prevDesc.classList.add('hidden-desc');
              prevButton.textContent = 'Подробнее';
            }
          }

          // Открываем текущий текст
          descElement.classList.remove('hidden-desc');
          buttonElement.textContent = 'Скрыть';
          currentlyOpenContainer = container;
        } else {
          // Закрываем текущий текст
          descElement.classList.add('hidden-desc');
          buttonElement.textContent = 'Подробнее';
          currentlyOpenContainer = null;
        }
      });
    } else {
      // Если высота меньше 90px - скрываем кнопку
      buttonElement.classList.add('hidden');
    }
  });
}