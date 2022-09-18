import Slider from "./slider";

export default class SliderMain extends Slider {
  constructor(nextBtns, prevBtns) {
    super(nextBtns, prevBtns);
  }
  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    try {
      if (n === 3) {
        this.lazyBlock.style.opacity = 0;
        this.lazyBlock.classList.add("animated");
        setTimeout(() => {
          this.lazyBlock.style.opacity = 1;
          this.lazyBlock.classList.add("slideInUp");
        }, 3000);
      } else {
        this.lazyBlock.classList.remove("slideInUp");
      }
    } catch (error) {}

    this.slides.forEach((slide) => (slide.style.display = "none"));

    this.slides[this.slideIndex - 1].style.display = "block";
  }

  bindTriggers() {
    this.nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.plusSlide(1);
      });
      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.plusSlide(-1);
      });
    });
  }

  plusSlide(n) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    if (this.container) {
      try {
        this.lazyBlock = document.querySelector(".hanson");
      } catch (error) {}
      this.bindTriggers();

      this.showSlides(this.slideIndex);
    }
  }
}
