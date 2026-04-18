export function initFilterScrollState() {
  const container = document.querySelector('.x2_j_filter-top__list-bottom');

  // Проверка наличия элемента
  if (!container) return;

  const updateScrollState = () => {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // В начале
    if (scrollLeft <= 0) {
      container.classList.add('scroll-start');
      container.classList.remove('scroll-end');
      return;
    }

    // В конце
    if (scrollLeft >= maxScrollLeft - 1) {
      container.classList.add('scroll-end');
      container.classList.remove('scroll-start');
      return;
    }

    // В процессе скролла (между)
    container.classList.remove('scroll-start', 'scroll-end');
  };

  // Инициализация
  updateScrollState();

  // Слежение за скроллом
  container.addEventListener('scroll', updateScrollState, { passive: true });
}
