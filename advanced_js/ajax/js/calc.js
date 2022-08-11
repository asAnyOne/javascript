"use strict";

const inputUsd = document.querySelector("#usd"),
  inputRub = document.querySelector("#rub");

inputRub.addEventListener("input", (e) => {
  if (!isNaN(inputRub.value) && inputRub.value.trim() !== "") {
    const request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      if (request.status === 200) {
        const data = JSON.parse(request.response);
        inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
      } else {
        inputUsd.value = "something goes wrong";
      }
    });
  } else {
    inputRub.value = "";
  }
});
