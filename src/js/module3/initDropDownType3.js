let isInit = false;

export function initDropDownType3({
                                    rootClass,
                                    btnClass,
                                    boxClass,
                                    itemClass,
                                    activeClass = 'active',
                                    disabledClass = 'disabled'
                                  }) {

  const roots = document.querySelectorAll(rootClass);
  if (!roots.length) return;

  // глобальные обработчики — ТОЛЬКО 1 раз
  if (!isInit) {
    document.addEventListener('click', e => {
      const clickedInside = [...document.querySelectorAll(rootClass)]
          .some(root => root.contains(e.target));
      if (!clickedInside) closeAll();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAll();
    });

    isInit = true;
  }

  function closeAll() {
    document.querySelectorAll(rootClass).forEach(root => {
      const btn = root.querySelector(btnClass);
      const box = root.querySelector(boxClass);

      btn?.classList.remove(activeClass);
      box?.classList.remove(activeClass);
    });
  }

  // инициализация ТОЛЬКО новых элементов
  roots.forEach(root => {
    if (root.dataset.dropdownInit) return;
    root.dataset.dropdownInit = 'true';

    const btn = root.querySelector(btnClass);
    const box = root.querySelector(boxClass);
    const btnText = btn?.querySelector('.text');
    const items = box?.querySelectorAll(itemClass);

    if (!btn || !box || !btnText || !items?.length) return;

    // начальная установка disabled
    items.forEach(item => {
      item.classList.toggle(
          disabledClass,
          item.textContent.trim() === btnText.textContent.trim()
      );
    });

    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains(activeClass);
      closeAll();

      if (!isOpen) {
        btn.classList.add(activeClass);
        box.classList.add(activeClass);
      }
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains(disabledClass)) return;

        btnText.textContent = item.textContent.trim();

        items.forEach(i => i.classList.remove(disabledClass));
        item.classList.add(disabledClass);

        btn.classList.remove(activeClass);
        box.classList.remove(activeClass);
      });
    });
  });
}