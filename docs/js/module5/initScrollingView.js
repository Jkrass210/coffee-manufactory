export function initScrollingView() {
  const fixedEl = document.querySelector('.js-scrolling-fixed');
  const viewEl = document.querySelector('.js-scrolling-view');

  // Проверка на наличие всех нужных элементов
  if (!fixedEl || !viewEl) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        viewEl.classList.add('open');
      } else {
        viewEl.classList.remove('open');
      }
    },
    {
      threshold: 0
    }
  );

  observer.observe(fixedEl);
}
