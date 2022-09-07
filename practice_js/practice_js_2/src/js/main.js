import accordion from "./modules/accordion";
import burger from "./modules/burger";
import calc from "./modules/calc";
import checkTextInputs from "./modules/checkTextInputs";
import drop from "./modules/drop";
import filters from "./modules/filters";
import forms from "./modules/forms";
import hoverImages from "./modules/hoverImages";
import mask from "./modules/mask";
import modals from "./modules/modal";
import scrolling from "./modules/scrolling";
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
  filters(".portfolio-menu", ".portfolio-wrapper", ".portfolio-no", "active");
  hoverImages(".sizes-block");
  accordion("#accordion");
  burger(".burger", ".burger-menu");
  scrolling(".pageup");
  //                        //Pure JS scrolling
  // scrolling(".toPortfolio");
  // scrolling(".toStyles");
  // scrolling(".toFAQ");
  drop();
});
