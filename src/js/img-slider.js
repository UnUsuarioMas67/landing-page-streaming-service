const slidesContainer = document.querySelector('.img-slider .slides-container');
const slideButtons = document.querySelectorAll('.img-slider .slide-btn');
const sliderScrollbar = document.querySelector('.img-slider .slider-scrollbar');
const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb');

window.addEventListener('load', initSlider);

function initSlider() {
  slideButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.classList.contains('prev') ? -1 : 1;
      const scrollAmount = slidesContainer.clientWidth * direction;
      slidesContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });

  const handleSliderButtons = function () {
    slideButtons[0].style.display = slidesContainer.scrollLeft <= 0 ? 'none' : 'flex';
    slideButtons[1].style.display = slidesContainer.scrollLeft >= getSliderMaxScrollLeft() ? 'none' : 'flex';
  };

  const updateScrollThumbPosition = function () {
    const scrollPosition = slidesContainer.scrollLeft;
    const thumbPosition =
      (scrollPosition / getSliderMaxScrollLeft()) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  slidesContainer.addEventListener('scroll', () => {
    handleSliderButtons();
    updateScrollThumbPosition();
  });

  handleSliderButtons();
}

function getSliderMaxScrollLeft() {
  return slidesContainer.scrollWidth - slidesContainer.clientWidth;
}
