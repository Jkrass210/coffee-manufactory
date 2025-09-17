export default class DropSearch {
  constructor(containerClass, btnOpenClass, boxClass) {
    this.container = document.querySelector(`.${containerClass}`);
    if (!this.container) return;

    this.btnOpen = this.container.querySelector(`.${btnOpenClass}`);
    this.box = this.container.querySelector(`.${boxClass}`);
    
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Клик по кнопке открытия
    this.btnOpen.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleSearch();
    });

    // Клик по документу (закрытие при клике вне области)
    document.addEventListener('click', (e) => {
      if (this.isActive() && !this.container.contains(e.target)) {
        this.closeSearch();
      }
    });

    // Нажатие Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isActive()) {
        this.closeSearch();
      }
    });

    // Предотвращаем закрытие при клике внутри бокса
    this.box.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  toggleSearch() {
    if (this.isActive()) {
      this.closeSearch();
    } else {
      this.openSearch();
    }
  }

  openSearch() {
    this.btnOpen.classList.add('active');
    this.box.classList.add('active');
  }

  closeSearch() {
    this.btnOpen.classList.remove('active');
    this.box.classList.remove('active');
  }

  isActive() {
    return this.box.classList.contains('active');
  }

  // Метод для удаления обработчиков (опционально)
  destroy() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleKeydown);
    this.btnOpen.removeEventListener('click', this.handleBtnClick);
    this.box.removeEventListener('click', this.handleBoxClick);
  }
}