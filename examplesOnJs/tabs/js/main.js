"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // Tabs--------------
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tabcontent"),
    contentActive = "tabcontent__active",
    tabActive = "tabheader__item_active";

  function addActiveClass(items, itemClass, i = 0) {
    items[i].classList.add(itemClass);
  }
  function removeActiveClass(items, itemClass) {
    items.forEach((item) => item.classList.remove(itemClass));
  }

  addActiveClass(tabs, tabActive);
  addActiveClass(tabContents, contentActive);

  tabs.forEach((item, i) => {
    item.addEventListener("click", () => {
      removeActiveClass(tabs, tabActive);
      removeActiveClass(tabContents, contentActive);
      addActiveClass(tabs, tabActive, i);
      addActiveClass(tabContents, contentActive, i);
    });
  });

  // timer------------

  const deadLine = "2022-09-20";

  function getTimeRemaining(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(time / (1000 * 60 * 60 * 24)),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((time / (1000 * 60)) % 60),
      seconds = Math.floor((time / 1000) % 60);
    return {
      time,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setTimer(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer() {
      const t = getTimeRemaining(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.time <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setTimer(".timer", deadLine);

  // -------modal------

  const modal = document.querySelector(".modal"),
    btn = document.querySelectorAll("[data-modal]");

  function toggleModal() {
    modal.classList.toggle("show");
    document.body.classList.toggle("hidden");
  }

  modal.addEventListener("click", (e) => {
    if (
      (e.target && e.target.classList.contains("modal")) ||
      (e.target && e.target.classList.contains("modal__close"))
    ) {
      toggleModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      toggleModal();
    }
  });
  btn.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });
});
