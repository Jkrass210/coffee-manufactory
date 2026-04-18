export function initShadowScroll() {
  const elements = document.querySelectorAll('.js-shadow-scroll');
  if (!elements.length) return;

  elements.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;

    const updateClasses = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      el.classList.toggle('start-scroll', scrollLeft === 0);
      el.classList.toggle(
        'end-scroll',
        scrollLeft + clientWidth >= scrollWidth
      );
    };

    updateClasses();
    el.addEventListener('scroll', updateClasses, { passive: true });
  });
}
