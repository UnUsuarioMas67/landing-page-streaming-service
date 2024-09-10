const slidesContainer = document.querySelector('.img-slider .slides-container');
const slideButtons = document.querySelectorAll('.img-slider .slide-btn');

slideButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.classList.contains('prev') ? -1 : 1;
    const scrollAmount = slidesContainer.clientWidth * direction;
    slidesContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
