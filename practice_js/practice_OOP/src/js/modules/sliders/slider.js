export default class Slider {
  constructor({
    container = null,
    nextBtns = null,
    prevBtns = null,
    next = null,
    prev = null,
    activeClass = "",
    animate,
    autoplay,
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (error) {}
    this.nextBtns = document.querySelectorAll(nextBtns);
    this.prevBtns = document.querySelectorAll(prevBtns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
