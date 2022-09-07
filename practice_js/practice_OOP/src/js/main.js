import Slider from "./modules/Slider";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const slider = new Slider(".page", ".next");
  slider.render();
});
