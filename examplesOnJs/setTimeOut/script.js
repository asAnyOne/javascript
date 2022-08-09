"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button"),
    box = document.querySelector(".box");

  btn.addEventListener("click", animation);
  function animation() {
    let i = 0;
    const timerId = setInterval(moveBox, 6);
    function moveBox() {
      if (i === 448) {
        clearInterval(timerId);
      } else {
        box.style.cssText = `top:${i}px;left:${i}px`;
        i++;
      }
    }
  }
});
