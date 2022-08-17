"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button"),
    box = document.querySelector(".box");
  let i = 0;
  let y = 448;
  let j = 0;
  let s = 448;

  btn.addEventListener("click", () => requestAnimationFrame(myAnimation));

  function myAnimation() {
    box.style.cssText = `top:${i}px;left:${i}px`;
    i++;
    s = 448;

    if (i === 448) {
      requestAnimationFrame(up);
    } else if (i < 448) {
      requestAnimationFrame(myAnimation);
    }
  }
  function supe() {
    box.style.cssText = `top:${s}px;right:${448}px`;
    s--;
    j = 0;
    if (s === -2) {
      requestAnimationFrame(myAnimation);
    } else if (s > -2) {
      requestAnimationFrame(supe);
    }
  }
  function down() {
    box.style.cssText = `top:${j}px;right:${j}px`;
    j++;
    y = 448;

    if (j === 448) {
      requestAnimationFrame(supe);
    } else if (j < 448) {
      requestAnimationFrame(down);
    }
  }
  function up() {
    box.style.cssText = `top:${y}px;left:${448}px`;
    y--;
    i = 0;

    if (y === -2) {
      requestAnimationFrame(down);
    } else if (y > -2) {
      requestAnimationFrame(up);
    }
  }
});
