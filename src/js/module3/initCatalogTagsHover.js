export function initCatalogTagsHover({
  listSelector = '.x2_j_box-catalog__list',
  cardSelector = '.x2_j_card-product',
  tagsBoxSelector = '.x2_j_card-product__tags',
  tagSelector = '.x2_j_tag',
  activeClass = 'color-tag'
} = {}) {
  const list = document.querySelector(listSelector);
  if (!list) return;

  const cards = list.querySelectorAll(cardSelector);
  if (!cards.length) return;

  // Удаляем ТОЛЬКО добавленные классы
  const clearClasses = () => {
    list.classList.remove(activeClass);

    list.querySelectorAll(tagSelector).forEach(tag => {
      tag.classList.forEach(cls => {
        if (cls !== tagSelector.replace('.', '')) {
          list.classList.remove(cls);
        }
      });
    });
  };

  cards.forEach(card => {
    const tagsBox = card.querySelector(tagsBoxSelector);
    const tags = tagsBox?.querySelectorAll(tagSelector);
    if (!tags?.length) return;

    card.addEventListener('mouseenter', () => {
      clearClasses();
      list.classList.add(activeClass);

      tags.forEach(tag => {
        tag.classList.forEach(cls => {
          if (cls !== tagSelector.replace('.', '')) {
            list.classList.add(cls);
          }
        });
      });
    });

    card.addEventListener('mouseleave', clearClasses);
  });
}
