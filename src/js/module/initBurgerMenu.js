/*export function initBurgerMenu(burgerBtnClass, menuClass, linkClass) {
  const burgerBtn = document.querySelector(`.${burgerBtnClass}`);
  const menu = document.querySelector(`.${menuClass}`);
  
  // Проверяем существование элементов
  if (!burgerBtn || !menu) return;
  
  // Находим все ссылки внутри меню
  const menuLinks = menu.querySelectorAll(`.${linkClass}`);
  
  // Функция для переключения меню
  function toggleMenu() {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Управляем overflow на body
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  // Функция для закрытия меню
  function closeMenu() {
    burgerBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Обработчик клика по кнопке бургера
  burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });
  
  // Обработчики клика по ссылкам меню
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
  
  // Обработчик клавиши Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // Закрытие при клике вне меню (опционально)
  document.addEventListener('click', function(e) {
    if (menu.classList.contains('active') && 
        !menu.contains(e.target) && 
        !burgerBtn.contains(e.target)) {
      closeMenu();
    }
  });
}*/

export function initBurgerMenu(burgerBtnClass, menuClass, linkClass, closeBtnClass = 'close') {
  const burgerBtn = document.querySelector(`.${burgerBtnClass}`);
  const menu = document.querySelector(`.${menuClass}`);
  
  // Проверяем существование элементов
  if (!burgerBtn || !menu) return;
  
  // Находим все ссылки внутри меню
  const menuLinks = menu.querySelectorAll(`.${linkClass}`);
  
  // Находим кнопку закрытия внутри меню
  const closeButton = menu.querySelector(`.${closeBtnClass}`);
  
  // Функция для переключения меню
  function toggleMenu() {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Управляем overflow на body
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  // Функция для закрытия меню
  function closeMenu() {
    burgerBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Обработчик клика по кнопке бургера
  burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });
  
  // Обработчик клика по кнопке закрытия (если она существует)
  if (closeButton) {
    closeButton.addEventListener('click', function(e) {
      e.stopPropagation();
      closeMenu();
    });
  }
  
  // Обработчики клика по ссылкам меню
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
  
  // Обработчик клавиши Esc
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // Закрытие при клике вне меню
  document.addEventListener('click', function(e) {
    if (menu.classList.contains('active') && 
        !menu.contains(e.target) && 
        !burgerBtn.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Возвращаем функцию для ручного закрытия меню (опционально)
  return {
    closeMenu,
    toggleMenu
  };
}