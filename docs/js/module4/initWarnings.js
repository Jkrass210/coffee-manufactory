export function initWarnings() {
  const warnings = document.querySelectorAll('.js-warning');

  if (!warnings.length) return;

  warnings.forEach(warning => {
    const closeBtn = warning.querySelector('.js-close');

    if (!closeBtn) return;

    closeBtn.addEventListener('click', () => {
      warning.style.display = 'none';
    });
  });
}
