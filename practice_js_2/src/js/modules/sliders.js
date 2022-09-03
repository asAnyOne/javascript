const sliders = (slideSelector, prev, next, dir) => {
  const slides = document.querySelectorAll(slideSelector);

  let slideIndex = 1,
    paused = false;

  function showSlide(n) {
    n > slides.length && (slideIndex = 1);
    n < 1 && (slideIndex = slides.length);

    slides.forEach((slide) => {
      slide.classList.add("animated");
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";
  }

  showSlide(slideIndex - 1);

  function changeSlides(i) {
    showSlide((slideIndex += i));
  }

  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    prevBtn.addEventListener("click", () => {
      changeSlides(-1);
      slides[slideIndex - 1].classList.remove("slideInLeft");
      slides[slideIndex - 1].classList.add("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      changeSlides(1);
      slides[slideIndex - 1].classList.remove("slideInRight");
      slides[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (error) {}

  function activateAnimation() {
    if (dir === "vertical") {
      paused = setInterval(() => {
        changeSlides(1);
        slides[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(() => {
        changeSlides(1);
        slides[slideIndex - 1].classList.remove("slideInRight");
        slides[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }
  activateAnimation();

  slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener("mouseleave", activateAnimation);
};
export default sliders;
