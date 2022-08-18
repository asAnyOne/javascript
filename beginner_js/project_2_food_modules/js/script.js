"use strict";
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import cards from "./modules/cards";
import calcCalorie from "./modules/caloriesCalc";
import timer from "./modules/timer";
import form from "./modules/form";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  tabs();
  modal();
  cards();
  timer();
  calcCalorie();
  form();
  slider({
    selSlides: ".offer__slide",
    selPrev: ".offer__slider-prev",
    selNext: ".offer__slider-next",
    selCurrent: "#current",
    selTotal: "#total",
    selSliderWrapper: ".offer__slider-wrapper",
    selSliderInner: ".offer__slider-inner",
  });
});
