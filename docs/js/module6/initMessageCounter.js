export function initMessageCounter() {
  const boxes = document.querySelectorAll('.js-box-message');

  if (!boxes.length) return;

  boxes.forEach((box) => {
    const textarea = box.querySelector('.js-textarea-message');
    const counter = box.querySelector('.js-count-message');

    if (!textarea || !counter) return;

    const MAX = 2000;

    // чтобы не вешать обработчик повторно (важно для AJAX)
    if (textarea.dataset.counterInitialized) return;
    textarea.dataset.counterInitialized = 'true';

    const updateCounter = () => {
      let value = textarea.value;

      if (value.length > MAX) {
        value = value.slice(0, MAX);
        textarea.value = value;
      }

      counter.textContent = MAX - value.length;
    };

    // начальное значение
    updateCounter();

    textarea.addEventListener('input', updateCounter);
  });
}