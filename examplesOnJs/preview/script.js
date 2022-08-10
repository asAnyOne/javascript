"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".progress"),
    box = document.querySelector(".box"),
    paragraphs = box.querySelectorAll(".paragraphs"),
    nav = box.querySelector(".nav"),
    navItems = nav.querySelectorAll("span"),
    btn = document.querySelector("button");

  console.log(box.clientHeight);
  console.log(box.offsetHeight);
  console.log(box.scrollHeight);
  console.log(box.scrollTop);
  console.log(box.getBoundingClientRect());
  //   console.log(window.getComputedStyle(box));
  console.log(paragraphs[0].getBoundingClientRect());
  console.log(paragraphs[1].getBoundingClientRect());
  console.log(paragraphs[2].getBoundingClientRect());

  function toggleSize() {
    if (box.style.height === box.scrollHeight + "px") {
      box.style.height = "";
    } else {
      box.style.height = box.scrollHeight + "px";
    }
  }
  btn.addEventListener("click", toggleSize);
  box.addEventListener("scroll", () => {
    progress.textContent =
      Math.floor(
        (box.scrollTop / (box.scrollHeight - box.clientHeight)) * 100
      ) + " %";
  });
  function addStyle(elem) {
    elem.style.cssText =
      "font-weght:bold; font-size:1.5em ;background-color:gray;padding:2px";
  }
  addStyle(navItems[0]);

  nav.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "SPAN") {
      navItems.forEach((item) => {
        item.style = "";
      });
      let y =
        paragraphs[e.target.textContent - 1].getBoundingClientRect().y -
        paragraphs[0].getBoundingClientRect().y +
        10;
      box.scrollTo(0, y);
      addStyle(e.target);
    }
  });
});
