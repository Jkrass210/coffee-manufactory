/**
 * Поиск в шапке: открытие по кнопке, закрытие по клику вне dropSearch__wrapper,
 * по Esc, по кнопке .js-close внутри box. Обработчики на document + перезапрос
 * контейнера при событии — работает после частичного AJAX без повторного new.
 */
export default class DropSearch {
  /**
   * @param {string} containerClass — корневой блок (например dropSearch)
   * @param {string} btnOpenClass — кнопка открытия
   * @param {string} boxClass — выпадающая панель
   * @param {string} [wrapperClass='dropSearch__wrapper'] — «безопасная» зона клика (не закрывает)
   */
  constructor(containerClass, btnOpenClass, boxClass, wrapperClass = 'dropSearch__wrapper') {
    this.containerClass = containerClass;
    this.btnOpenClass = btnOpenClass;
    this.boxClass = boxClass;
    this.wrapperClass = wrapperClass;

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);

    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('keydown', this.handleKeydown);
  }

  getContainer() {
    return document.querySelector(`.${this.containerClass}`);
  }

  getBtnOpen() {
    const c = this.getContainer();
    return c ? c.querySelector(`.${this.btnOpenClass}`) : null;
  }

  getBox() {
    const c = this.getContainer();
    return c ? c.querySelector(`.${this.boxClass}`) : null;
  }

  /** Область, клик по которой не закрывает панель (перечитывается после AJAX) */
  getWrapper() {
    const box = this.getBox();
    return box ? box.querySelector(`.${this.wrapperClass}`) : null;
  }

  handleDocumentClick(e) {
    const container = this.getContainer();
    if (!container) return;

    if (!container.contains(e.target)) {
      if (this.isActive()) this.closeSearch();
      return;
    }

    const closeBtn = e.target.closest('.js-close');
    if (closeBtn) {
      const box = this.getBox();
      if (box && box.contains(closeBtn)) {
        e.preventDefault();
        e.stopPropagation();
        this.closeSearch();
      }
      return;
    }

    const btnOpen = this.getBtnOpen();
    if (btnOpen && btnOpen.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();
      this.toggleSearch();
      return;
    }

    if (!this.isActive()) return;

    const wrapper = this.getWrapper();
    const box = this.getBox();
    const safeZone = wrapper || box;
    if (safeZone && safeZone.contains(e.target)) return;

    this.closeSearch();
  }

  handleKeydown(e) {
    if (e.key === 'Escape' && this.isActive()) {
      this.closeSearch();
    }
  }

  toggleSearch() {
    if (this.isActive()) {
      this.closeSearch();
    } else {
      this.openSearch();
    }
  }

  openSearch() {
    const btnOpen = this.getBtnOpen();
    const box = this.getBox();
    if (btnOpen) btnOpen.classList.add('active');
    if (box) box.classList.add('active');
  }

  closeSearch() {
    const btnOpen = this.getBtnOpen();
    const box = this.getBox();
    if (btnOpen) btnOpen.classList.remove('active');
    if (box) box.classList.remove('active');
  }

  isActive() {
    const box = this.getBox();
    return !!(box && box.classList.contains('active'));
  }

  destroy() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleKeydown);
  }
}
