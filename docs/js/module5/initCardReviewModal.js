export function initCardReviewModal() {
  const CARD_SELECTOR = '.card-review';
  const BTN_SELECTOR = '.card-review__btn[data-id="card-review"]';

  // Проверка наличия карточек и кнопок
  if (!document.querySelector(CARD_SELECTOR) || !document.querySelector(BTN_SELECTOR)) {
    return;
  }

  // Делегирование клика
  document.addEventListener('click', (e) => {
    const btn = e.target.closest(BTN_SELECTOR);
    if (!btn) return;

    const card = btn.closest(CARD_SELECTOR);
    if (!card) return;

    openModal(card);
  });

  function openModal(card) {
    // Клонируем карточку
    const cardClone = card.cloneNode(true);

    // Создаём модалку
    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.innerHTML = `
      <div class="modal__body">
        <button class="modal__close btn-reset">
          <span class="text">Закрыть</span>
          <span class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M0.499396 11.8137L11.8131 0.499994M0.499396 0.499994L11.8131 11.8137"
                stroke="currentColor" stroke-linecap="round" />
            </svg>
          </span>
        </button>
        <div class="modal__window"></div>
      </div>
    `;

    modal.querySelector('.modal__window').append(cardClone);
    document.body.append(modal);

    // Закрытие
    const closeModal = () => {
      modal.remove();
      document.removeEventListener('keydown', onEsc);
    };

    const onEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    modal.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('modal') ||
        e.target.closest('.modal__close')
      ) {
        closeModal();
      }
    });

    document.addEventListener('keydown', onEsc);
  }
}
