export function initSyncNavigation() {
  const navLinks = document.querySelectorAll('.js-nav-link-1, .js-nav-link-2');
  const points = document.querySelectorAll('.js-point-box');

  if (!navLinks.length || !points.length) return;

  const pointsMap = new Map();

  points.forEach(point => {
    const id = point.dataset.id;
    if (id) pointsMap.set(id, point);
  });

  // ===== КЛИК ПО НАВИГАЦИИ =====
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.js-nav-link-1, .js-nav-link-2');
    if (!link) return;

    e.preventDefault(); // ← ВАЖНО: сразу

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetId = href.slice(1);
    const target = pointsMap.get(targetId);
    if (!target) return;

    const offset = 20; // если есть фиксированная шапка — увеличь

    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });

  // ===== ACTIVE ПРИ СКРОЛЛЕ =====
  const onScroll = () => {
    let currentPoint = null;

    points.forEach(point => {
      const rect = point.getBoundingClientRect();

      if (rect.top <= 150) {
        currentPoint = point;
      }
    });

    if (!currentPoint) return;

    const id = currentPoint.dataset.id;

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${id}`
      );
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}