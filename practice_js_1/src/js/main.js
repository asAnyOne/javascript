import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import setCalcState from "./modules/setCalcState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  const calcState = {};
  const deadline = "2022-10-01";

  setCalcState(calcState);
  modals();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content>div>div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img>img",
    "do_image_more",
    "inline-block"
  );
  forms(calcState);
  timer(deadline);
  images();
});
