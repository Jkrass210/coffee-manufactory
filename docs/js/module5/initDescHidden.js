// descHidden.js
/*export function initDescHidden() {
  const blocks = document.querySelectorAll('.js-desc-hidden');
  if (!blocks.length) return;

  blocks.forEach(block => {
    const box = block.querySelector('.js-desc-hidden-box');
    const btn = block.querySelector('.js-desc-hidden-btn');

    if (!box || !btn) return;

    const styles = getComputedStyle(box);
    let lineHeight = parseFloat(styles.lineHeight);

    // FIX: если line-height = normal
    if (Number.isNaN(lineHeight)) {
      const fontSize = parseFloat(styles.fontSize);
      lineHeight = fontSize * 1.2; // стандартный коэффициент
    }

    const clampLines = 7;
    const clampHeight = lineHeight * clampLines;

    // если текст помещается — скрываем кнопку
    if (box.scrollHeight <= clampHeight + 1) {
      btn.style.display = 'none';
      return;
    }

    btn.addEventListener('click', () => {
      const isOpen = box.classList.toggle('open');

      if (isOpen) {
        box.style.webkitLineClamp = 'unset';
        box.style.display = 'block';
        btn.classList.add('active')
        btn.querySelector(".text").textContent = 'Скрыть';
      } else {
        box.style.webkitLineClamp = clampLines;
        box.style.display = '-webkit-box';
        btn.classList.remove('active')
        btn.querySelector(".text").textContent = 'Показать полностью';
      }
    });
  });
}*/

export function initDescHidden() {
  const blocks = document.querySelectorAll('.js-desc-hidden');
  if (!blocks.length) return;

  blocks.forEach(block => {
    const box = block.querySelector('.js-desc-hidden-box');
    const btn = block.querySelector('.js-desc-hidden-btn');

    if (!box || !btn) return;

    const styles = getComputedStyle(box);
    let lineHeight = parseFloat(styles.lineHeight);

    // FIX: если line-height = normal
    if (Number.isNaN(lineHeight)) {
      const fontSize = parseFloat(styles.fontSize);
      lineHeight = fontSize * 1.2;
    }

    const clampLines = 7;   // сколько показываем
    const maxLines = 13;    // порог, после которого включаем механику

    const clampHeight = lineHeight * clampLines;
    const maxHeight = lineHeight * maxLines;

    const contentHeight = box.scrollHeight;

    //  если текста <= 13 строк → ничего не делаем
    if (contentHeight <= maxHeight + 1) {
      btn.style.display = 'none';
      box.classList.remove('desc-hidden-box')
      return;
    }

    //  если текста > 13 строк → включаем обрезку
    box.style.webkitLineClamp = clampLines;
    box.style.display = '-webkit-box';

    btn.addEventListener('click', () => {
      const isOpen = box.classList.toggle('open');

      if (isOpen) {
        box.style.webkitLineClamp = 'unset';
        box.style.display = 'block';
        btn.classList.add('active');
        btn.querySelector(".text").textContent = 'Скрыть';
      } else {
        box.style.webkitLineClamp = clampLines;
        box.style.display = '-webkit-box';
        btn.classList.remove('active');
        btn.querySelector(".text").textContent = 'Показать полностью';
      }
    });
  });
}
