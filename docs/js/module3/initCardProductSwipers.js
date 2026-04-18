export function initCardProductSwipers() {
  const sliders = document.querySelectorAll('.x2_j_swiper-card-product');

  // Проверка наличия слайдеров
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const wrapper = slider.querySelector('.swiper-wrapper');
    const slides = slider.querySelectorAll('.swiper-slide');
    const pagination = slider.querySelector('.x2_j_swiper-card-product-pagination');

    // Проверка всех обязательных элементов
    if (!wrapper || !slides.length || !pagination) return;

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: pagination,
        clickable: false,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      breakpoints: {
        1000: {
          allowTouchMove: false, // hover-only поведение
          pagination: {
            clickable: true,
          },
        }
      },
    });

    // Кастомный hover по пагинации
    pagination.querySelectorAll('.swiper-pagination-bullet')
      .forEach((bullet, index) => {
        bullet.addEventListener('mouseenter', () => {
          swiper.slideTo(index);
        });
      });
  });
}