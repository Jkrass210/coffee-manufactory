// counter.js
/*export function initCounter(
  containerSelector = '.card-courses-p-s',
  countSelector = '.x2_j_count',
  inputSelector = '.x2_j_count__input',
  minusBtnSelector = '.x2_j_count__btn.minus',
  plusBtnSelector = '.x2_j_count__btn.plus',
  priceSelector = '.x2_j_count__price .actual'
) {
  const containers = document.querySelectorAll(containerSelector);

  // Проверяем наличие контейнеров
  if (containers.length === 0) {
    console.warn(`Контейнеры с селектором "${containerSelector}" не найдены`);
    return;
  }

  containers.forEach(container => {
    const countBlock = container.querySelector(countSelector);
    const input = container.querySelector(inputSelector);
    const minusBtn = container.querySelector(minusBtnSelector);
    const plusBtn = container.querySelector(plusBtnSelector);
    const priceElement = container.querySelector(priceSelector);


    // Проверяем наличие всех элементов в контейнере
    if (!countBlock || !input || !minusBtn || !plusBtn || !priceElement) {
      console.warn('Не все элементы счетчика найдены в контейнере');
      return;
    }

    // Получаем базовую цену из текста
    const basePriceText = priceElement.textContent.trim();
    const basePrice = parseInt(basePriceText.replace(/\s/g, '').replace('₽', ''));

    // Функция обновления состояния кнопок и цены
    function updateCounter() {
      const currentValue = parseInt(input.value);

      // Обновляем состояние кнопок
      minusBtn.classList.toggle('disabled', currentValue === 1);
      plusBtn.classList.toggle('disabled', currentValue === 6);

      // Пересчитываем цену
      const totalPrice = basePrice * currentValue;
      priceElement.textContent = totalPrice.toLocaleString('ru-RU') + '₽';
    }

    // Обработчик для кнопки "+"
    plusBtn.addEventListener('click', () => {
      const currentValue = parseInt(input.value);
      if (currentValue < 6) {
        input.value = currentValue + 1;
        updateCounter();
      }
    });

    // Обработчик для кнопки "-"
    minusBtn.addEventListener('click', () => {
      const currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1;
        updateCounter();
      }
    });

    // Инициализация при загрузке
    updateCounter();
  });
}*/

// counter.js
export function initCounter({
  containerSelector = '.card-courses-p-s',
  countSelector = '.x2_j_count',
  inputSelector = '.x2_j_count__input',
  minusBtnSelector = '.x2_j_count__btn.minus',
  plusBtnSelector = '.x2_j_count__btn.plus',
  priceSelector = '.x2_j_count__price .actual',
  min = 1,
  max = 6
} = {}) {
  const containers = document.querySelectorAll(containerSelector);
  if (!containers.length) return;

  containers.forEach(container => {
    const countBlock = container.querySelector(countSelector);
    const input = container.querySelector(inputSelector);
    const minusBtn = container.querySelector(minusBtnSelector);
    const plusBtn = container.querySelector(plusBtnSelector);
    const priceElement = container.querySelector(priceSelector);

    if (!countBlock || !input || !minusBtn || !plusBtn || !priceElement) return;

    const basePrice = parseInt(
      priceElement.textContent.replace(/\s|₽/g, ''),
      10
    );

    const updateCounter = () => {
      let value = parseInt(input.value, 10);

      if (isNaN(value)) value = min;
      if (value < min) value = min;
      if (value > max) value = max;

      input.value = value;

      minusBtn.classList.toggle('disabled', value === min);
      plusBtn.classList.toggle('disabled', value === max);

      priceElement.textContent =
        (basePrice * value).toLocaleString('ru-RU') + '₽';
    };

    plusBtn.addEventListener('click', () => {
      if (parseInt(input.value, 10) < max) {
        input.value++;
        updateCounter();
      }
    });

    minusBtn.addEventListener('click', () => {
      if (parseInt(input.value, 10) > min) {
        input.value--;
        updateCounter();
      }
    });

    // защита от ручного ввода
    input.addEventListener('input', updateCounter);

    updateCounter();
  });
}