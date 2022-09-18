import Differnce from "./modules/difference";
import Download from "./modules/download";
import Forms from "./modules/forms";
import VideoPlayer from "./modules/playVideo";
import ShowInfo from "./modules/showInfo";
import SliderMain from "./modules/sliders/slider-main";
import SliderMini from "./modules/sliders/slider-mini";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  new SliderMain({ container: ".page", nextBtns: ".next" }).render();

  new SliderMain({
    container: ".moduleapp",
    nextBtns: ".next",
    prevBtns: ".prev",
  }).render();

  new SliderMini({
    container: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active",
    animate: true,
  }).init();

  new SliderMini({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  }).init();

  new SliderMini({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  }).init();

  new VideoPlayer(".showup .play", ".overlay").init();
  new VideoPlayer(".module__video-item .play", ".overlay").init();

  new Differnce(".officerold").init();
  new Differnce(".officernew").init();
  new Forms("form").init();
  new ShowInfo(".module__info-show").init();
  new Download(".download").init();
});
