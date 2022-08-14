"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"),
    checkbox = form.querySelector("#checkbox"),
    color = document.querySelector("#color");

  if (window.localStorage.getItem("bg")) {
    form.style.backgroundColor = "red";
  }
  if (window.localStorage.getItem("isChecked")) {
    checkbox.checked = true;
  }

  checkbox.addEventListener("input", () => {
    let status = checkbox.checked;
    if (status === true) {
      window.localStorage.setItem("isChecked", status);
    } else {
      window.localStorage.removeItem("isChecked");
    }

    console.log(status);
  });

  color.addEventListener("click", () => {
    if (window.localStorage.getItem("bg")) {
      form.style.backgroundColor = "";
      window.localStorage.removeItem("bg");
    } else {
      form.style.backgroundColor = "red";
      window.localStorage.setItem("bg", "red");
    }
  });
});
