(function () {
const slides = [
    '<img src="img/car1.webp" alt="Available car" >',
    '<img src="img/car2.webp" alt="Available car" >',
    '<img src="img/car3.webp" alt="Available car" >',
    '<img src="img/car4.webp" alt="Available car" >',
    '<img src="img/car5.webp" alt="Available car" >',
    '<img src="img/car6.webp" alt="Available car" >',

  ];

  let currentSlide = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".carousel_container .content_container");
    let html = '';
    html = slides[currentSlide];
    const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
    html += slides[nextSlide];
    const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
    html += slides[next2Slide];
    slideContainer.innerHTML = html;
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
  }

  showCurrentSlide();

  const btnNext = document.querySelector(".slide-next");
    btnNext.addEventListener("click", nextSlide);
  
    const btnPrev = document.querySelector(".slide-prev");
    btnPrev.addEventListener("click", prevSlide);
})();