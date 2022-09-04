import calc from "./modules/calc";
import checkTextInputs from "./modules/checkTextInputs";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modal";
import showMoreStyles from "./modules/showMoreStyles";
import sliders from "./modules/sliders";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modals();
  sliders(".feedback-slider-item", ".main-prev-btn", ".main-next-btn");
  sliders(".main-slider-item", "", "", "vertical");
  forms();
  mask("[name=phone]");
  checkTextInputs("[name=text]");
  checkTextInputs("[name=message]");
  showMoreStyles();
  calc("#size", "#material", "#options", "input.promocode", ".calc-price");
});
