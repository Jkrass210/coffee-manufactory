export function initHorizontalWheelScroll(
  selector = '.x2_j_filter-top__list-bottom'
) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  elements.forEach(el => {
    el.addEventListener(
      'wheel',
      e => {
        // если нет горизонтального переполнения — не мешаем странице
        if (el.scrollWidth <= el.clientWidth) return;

        if (e.deltaY !== 0) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      },
      { passive: false }
    );
  });
}
