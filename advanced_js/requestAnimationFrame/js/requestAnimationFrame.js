"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button"),
    box = document.querySelector(".box");
  let x = 0;
  let side = "left";
  let bool = true;

  btn.addEventListener("click", () => requestAnimationFrame(myAnimation));

  function myAnimation() {
    if (bool) {
      box.style.cssText = `top:${x}px; ${side}:${x}px`;
      x++;

      if (x === 448) {
        requestAnimationFrame(myAnimation);
        bool = !bool;
      } else if (x < 448) {
        requestAnimationFrame(myAnimation);
      }
    } else {
      box.style.cssText = `top:${x}px; ${side}:${448}px`;
      x--;

      if (x === -2) {
        if (side === "left") {
          side = "right";
        } else {
          side = "left";
        }
        requestAnimationFrame(myAnimation);
        x = 0;
        bool = !bool;
      } else if (x > -2) {
        requestAnimationFrame(myAnimation);
      }
    }
  }
});
