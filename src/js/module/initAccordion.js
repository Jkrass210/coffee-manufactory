export function initAccordion(containerClass, btnClass, contentClass) {
  const containers = document.querySelectorAll(`.${containerClass}`);
  
  // Проверяем существование элементов
  if (!containers.length) return;
  
  let activeContainer = null;
  
  // Функция для закрытия всех аккордеонов
  function closeAllAccordions() {
    containers.forEach(container => {
      const btn = container.querySelector(`.${btnClass}`);
      const content = container.querySelector(`.${contentClass}`);
      
      if (btn && content) {
        btn.classList.remove('active');
        content.classList.remove('active');
      }
    });
    activeContainer = null;
  }
  
  // Функция для открытия конкретного аккордеона
  function openAccordion(container) {
    const btn = container.querySelector(`.${btnClass}`);
    const content = container.querySelector(`.${contentClass}`);
    
    if (btn && content) {
      btn.classList.add('active');
      content.classList.add('active');
      activeContainer = container;
    }
  }
  
  // Функция для переключения аккордеона
  function toggleAccordion(container) {
    const btn = container.querySelector(`.${btnClass}`);
    const content = container.querySelector(`.${contentClass}`);
    
    if (!btn || !content) return;
    
    // Если кликаем по уже активному аккордеону - закрываем
    if (container === activeContainer) {
      closeAllAccordions();
      return;
    }
    
    // Закрываем все и открываем текущий
    closeAllAccordions();
    openAccordion(container);
  }
  
  // Добавляем обработчики для каждого контейнера
  containers.forEach(container => {
    const btn = container.querySelector(`.${btnClass}`);
    
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleAccordion(container);
      });
    }
  });
  
  // Обработчик клавиши Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeContainer) {
      closeAllAccordions();
    }
  });
  
  // Закрытие при клике вне аккордеона (опционально)
  document.addEventListener('click', function(e) {
    if (activeContainer && !activeContainer.contains(e.target)) {
      closeAllAccordions();
    }
  });
}