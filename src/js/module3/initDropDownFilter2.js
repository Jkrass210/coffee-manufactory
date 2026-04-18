export function initDropDownFilter2({
  rootSelector = '.drop-down-filter-2',
  btnSelector = '.drop-down-filter-2__btn',
  boxSelector = '.drop-down-filter-2__box',
  inputSelector = '.drop-down-filter-2__input',
  textSelector = '.text',
  counterSelector = 'i',
  activeClass = 'active',
  selectedClass = 'selected'
} = {}) {
  const dropdowns = document.querySelectorAll(rootSelector);
  if (!dropdowns.length) return;

  const closeAll = () => {
    dropdowns.forEach(dd => {
      dd.querySelector(btnSelector)?.classList.remove(activeClass);
      dd.querySelector(boxSelector)?.classList.remove(activeClass);
    });
  };

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(btnSelector);
    const box = dropdown.querySelector(boxSelector);
    const inputs = box?.querySelectorAll(inputSelector);
    const text = button?.querySelector(textSelector);
    const counter = text?.querySelector(counterSelector);

    if (!button || !box || !inputs?.length || !text || !counter) return;

    const updateState = () => {
      const checked = box.querySelectorAll(
        `${inputSelector}:checked`
      ).length;

      counter.textContent = checked;
      button.classList.toggle(selectedClass, checked > 0);
    };

    const open = () => {
      closeAll();
      button.classList.add(activeClass);
      box.classList.add(activeClass);
      document.addEventListener('click', onOutsideClick);
      document.addEventListener('keydown', onEsc);
    };

    const close = () => {
      button.classList.remove(activeClass);
      box.classList.remove(activeClass);
      document.removeEventListener('click', onOutsideClick);
      document.removeEventListener('keydown', onEsc);
    };

    const onOutsideClick = e => {
      if (!dropdown.contains(e.target)) {
        close();
      }
    };

    const onEsc = e => {
      if (e.key === 'Escape') {
        close();
      }
    };

    button.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      button.classList.contains(activeClass) ? close() : open();
    });

    inputs.forEach(input => {
      input.addEventListener('change', () => {
        updateState();

        // если radio — закрываем сразу
        if (input.type === 'radio') {
          close();
        }
      });
    });

    updateState();
  });
}
