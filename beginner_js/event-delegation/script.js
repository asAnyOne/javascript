"use strict";

const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".delegation");

btns[3].classList.add("big", "red", "some", "againSome");
btns[3].classList.remove("some");
btns[1].addEventListener("click", () => {
  if (btns[1].classList.contains("red")) {
    btns[1].classList.remove("red");
    btns[1].innerText = "click-me";
    btns[1].style.cssText = "color:gray; font-size:20px";
  } else {
    btns[1].classList.add("red");
    btns[1].innerText = "class-added";
    btns[1].style.cssText = "color:black; font-size:30px";
  }
});
btns[0].innerText = "click-me";
btns[1].innerText = "click-me";
btns[2].innerText = "toggle 5-button";
btns[3].innerText = "change 6-button";
btns[0].addEventListener("click", () => btns[3].classList.toggle("red"));
btns[2].addEventListener("click", () => btns[4].classList.toggle("hidden"));
btns[3].addEventListener("click", () => btns[5].classList.toggle("big"));

wrapper.addEventListener("click", (e) => {
  if (
    e.target &&
    e.target.tagName == "BUTTON" &&
    (e.target.textContent == "a" ||
      e.target.textContent == "c" ||
      e.target.textContent == "f")
  ) {
    btns[11].textContent = `clicked on button --- "${e.target.textContent.toUpperCase()}"`;
  } else if (
    e.target &&
    e.target.tagName == "BUTTON" &&
    (e.target.textContent == "b" || e.target.textContent == "d")
  ) {
    const newBtn = document.createElement("button");
    newBtn.textContent = "a new button";
    wrapper.append(newBtn);
  } else if (
    e.target &&
    e.target.tagName === "BUTTON" &&
    e.target.textContent === "a new button"
  ) {
    document.querySelectorAll("button").forEach((btn) => {
      if (btn.textContent == "a new button") {
        btn.remove();
      }
    });
    const newBtn = document.createElement("button");
    newBtn.textContent = "event delegation done successfully !";
    wrapper.append(newBtn);
  } else {
    document.querySelectorAll("button").forEach((btn) => {
      if (btn.textContent == "event delegation done successfully !") {
        btn.remove();
      }
    });
  }
});
