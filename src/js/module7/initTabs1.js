export function initTabs1() {
  const tabs = document.querySelectorAll('.js-tabs-1');

  // Проверка наличия табов
  if (!tabs.length) return;

  tabs.forEach(tab => {
    const btns = tab.querySelectorAll('.js-tabs-1-btn');
    const boxes = tab.querySelectorAll('.js-tabs-1-box');

    // Проверка структуры
    if (!btns.length || !boxes.length) return;
    if (btns.length !== boxes.length) return;

    // Функция очистки активных классов
    const clearActive = () => {
      btns.forEach(btn => btn.classList.remove('active'));
      boxes.forEach(box => box.classList.remove('active'));
    };

    // Назначаем обработчики
    btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        clearActive();
        btn.classList.add('active');
        boxes[index].classList.add('active');
      });
    });

    // Активируем первый таб при загрузке
    clearActive();
    btns[0].classList.add('active');
    boxes[0].classList.add('active');
  });
}