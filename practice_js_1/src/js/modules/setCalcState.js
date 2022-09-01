const setCalcState = (state) => {
  const formsWindow = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  const getValue = (items, event, type) => {
    items.forEach((item, i) =>
      item.addEventListener(event, (e) => {
        switch (e.target.type) {
          case "radio":
            state[type] = e.target.nextElementSibling.id;
            break;
          case "text":
            item.value = item.value.replace(/\D/, "");
            state[type] = item.value;
            break;
          default:
            (type === "type" && (state[type] = i)) ||
              (type === "window-type" && (state[type] = item.value));
        }
      })
    );
  };

  getValue(formsWindow, "click", "type");
  getValue(windowHeight, "input", "height");
  getValue(windowWidth, "input", "width");
  getValue(windowType, "change", "window-type");
  getValue(windowProfile, "change", "profile");
};
export default setCalcState;
