export function initTabsType1() {
  const tabsParents = document.querySelectorAll('.js-tabs-tipe-1');
  if (!tabsParents.length) return;

  tabsParents.forEach((parent) => {
    const buttons = parent.querySelectorAll('.js-tabs-tipe-1-btn');
    const boxes = parent.querySelectorAll('.js-tabs-tipe-1-box');

    if (!buttons.length || !boxes.length) return;
    if (buttons.length !== boxes.length) return;

    boxes.forEach((box, index) => {
      box.style.display = index === 0 ? '' : 'none';
    });

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        boxes.forEach((box) => {
          box.style.display = 'none';
        });

        boxes[index].style.display = '';
      });
    });
  });
}
