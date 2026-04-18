export function initFilterTopSwipers() {
  const sliders = document.querySelectorAll('.x2_j_swiper-filter-top');

  // Проверка наличия слайдеров
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const wrapper = slider.querySelector('.swiper-wrapper');
    const slides = slider.querySelectorAll('.swiper-slide');

    // Проверка всех обязательных элементов
    if (!wrapper || !slides.length) return;

    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 8,
    });
  });
}