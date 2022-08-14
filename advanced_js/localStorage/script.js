"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form"),
    checkbox = form.querySelector("#checkbox"),
    color = document.querySelector("#color");

  if (localStorage.getItem("bg")) {
    form.style.backgroundColor = "red";
  }
  if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
  }

  checkbox.addEventListener("input", () => {
    let status = checkbox.checked;
    if (status === true) {
      localStorage.setItem("isChecked", status);
    } else {
      localStorage.removeItem("isChecked");
    }

    console.log(status);
  });

  color.addEventListener("click", () => {
    if (localStorage.getItem("bg")) {
      form.style.backgroundColor = "";
      localStorage.removeItem("bg");
    } else {
      form.style.backgroundColor = "red";
      localStorage.setItem("bg", "red");
    }
  });
});
