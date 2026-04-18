// smooth-scroll.js
export function initSmoothScroll(
  linkSelector = '.card-master-class__link',
  scrollSpeed = 1000 // скорость скролла в миллисекундах
) {
  const links = document.querySelectorAll(linkSelector);

  // Проверяем наличие элементов
  if (links.length === 0) {
    console.warn(`Ссылки с селектором "${linkSelector}" не найдены`);
    return;
  }

  // Функция плавного скролла
  function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      console.warn(`Элемент с id "${targetId}" не найден`);
      return;
    }

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, scrollSpeed);

      window.scrollTo(0, run);

      if (timeElapsed < scrollSpeed) {
        requestAnimationFrame(animation);
      }
    }

    // Функция плавности easeInOutQuad
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Обработчики клика на ссылки
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const href = link.getAttribute('href');

      if (href && href.startsWith('#')) {
        smoothScrollTo(href);
      }
    });
  });

  console.log(`Инициализирован плавный скролл для ${links.length} ссылок`);
}