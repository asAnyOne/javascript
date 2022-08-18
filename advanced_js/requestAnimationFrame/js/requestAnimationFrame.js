"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button"),
    box = document.querySelector(".box");
  let x = 0;
  let side = "left";
  let bool = false;

  btn.addEventListener("click", () => requestAnimationFrame(down));

  function down() {
    box.style.cssText = `top:${x}px; ${side}:${x}px`;
    x++;

    if (x === 448) {
      requestAnimationFrame(up);
    } else if (x < 448) {
      requestAnimationFrame(down);
    }
  }

  function up() {
    box.style.cssText = `top:${x}px; ${side}:${448}px`;
    x--;

    if (x === -2) {
      if (side === "left") {
        side = "right";
      } else {
        side = "left";
      }
      requestAnimationFrame(down);
      x = 0;
    } else if (x > -2) {
      requestAnimationFrame(up);
    }
  }
});
