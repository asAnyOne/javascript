import Slider from "./slider";

export default class SliderMini extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlide() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });
    this.slides[0].classList.add(this.activeClass);

    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlide();
    this.slides.forEach((slide) => {
      if (slide.tagName === "BUTTON") {
        this.container.appendChild(slide);
      }
    });
  }

  bindTrigger() {
    this.next.addEventListener("click", () => this.nextSlide());
    this.prev.addEventListener("click", () => {
      this.slides.forEach((slide) => {
        if (slide.tagName === "BUTTON") {
          this.container.appendChild(slide);
        }
      });
      const lastElem = this.slides[this.slides.length - 3];
      this.container.insertBefore(lastElem, this.slides[0]);
      this.decorizeSlide();
    });
  }

  init() {
    try {
      this.container.style.cssText = `
     display:flex;
     flex-wrap:wrap;
     overflow:hidden;
     align-items: flex-start;
     `;
      this.bindTrigger();
      this.decorizeSlide();
      if (this.autoplay) {
        setInterval(() => this.nextSlide(), 5000);
      }
    } catch (error) {}
  }
}
