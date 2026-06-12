export function initMoveElements(selectors) {
  const {
    sourceSelector,
    targetSelector,
    breakpoint = 1000,
  } = selectors;

  function getElements() {
    const sourceElement = document.querySelector(sourceSelector);
    const targetElement = document.querySelector(targetSelector);
    return { sourceElement, targetElement };
  }

  const { sourceElement, targetElement } = getElements();

  if (!sourceElement || !targetElement) {
    console.warn('MoveElements: Source or target element not found');
    return null;
  }

  if (sourceElement === targetElement) {
    console.error('MoveElements: Source and target elements cannot be the same');
    return null;
  }

  function isMobileView() {
    return window.innerWidth <= breakpoint;
  }

  /** Синхронизация по DOM, без флага — не «залипает» после пустого первого запуска */
  function syncPosition() {
    const { sourceElement: source, targetElement: target } = getElements();
    if (!source || !target || source === target) return;

    if (isMobileView()) {
      const toMove = Array.from(source.children);
      if (!toMove.length) return;

      target.replaceChildren(...toMove);
      return;
    }

    const toReturn = Array.from(target.children);
    if (!toReturn.length) return;

    source.replaceChildren(...toReturn);
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  const debouncedSync = debounce(syncPosition, 150);
  const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

  function onBreakpointChange() {
    syncPosition();
  }

  function init() {
    syncPosition();
    requestAnimationFrame(syncPosition);

    window.addEventListener('resize', debouncedSync);
    window.addEventListener('load', syncPosition);
    mediaQuery.addEventListener('change', onBreakpointChange);

    return () => {
      window.removeEventListener('resize', debouncedSync);
      window.removeEventListener('load', syncPosition);
      mediaQuery.removeEventListener('change', onBreakpointChange);

      const { sourceElement: source, targetElement: target } = getElements();
      if (!source || !target) return;

      const toReturn = Array.from(target.children);
      if (toReturn.length) {
        source.replaceChildren(...toReturn);
      }
    };
  }

  return init();
}

export function initMoveElementsOnLoad(selectors) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMoveElements(selectors));
  } else {
    return initMoveElements(selectors);
  }
}
