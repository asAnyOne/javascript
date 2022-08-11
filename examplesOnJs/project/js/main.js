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
    btn = document.querySelectorAll("[data-modal]"),
    timerId = setTimeout(toggleModal, 100000);

  function toggleModal() {
    modal.classList.toggle("show");
    document.body.classList.toggle("hidden");
    clearTimeout(timerId);
  }

  modal.addEventListener("click", (e) => {
    if (
      (e.target && e.target.classList.contains("modal")) ||
      (e.target && e.target.classList.contains("modal__close"))
    ) {
      toggleModal();
    }
  });

  function showModalOnPageEnd() {
    if (
      document.documentElement.clientHeight +
        document.documentElement.scrollTop ==
      document.documentElement.scrollHeight
    ) {
      toggleModal();
      window.removeEventListener("scroll", showModalOnPageEnd);
    }
  }

  window.addEventListener("scroll", showModalOnPageEnd);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      toggleModal();
    }
  });
  btn.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  //---------class Menu{}

  const menuField = document.querySelector(".menu__field"),
    menuContainer = menuField.querySelector(".container"),
    current = 22;

  const itemsData = {
    data1: [
      "vegy.jpg",
      "Фитнес",
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это  абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      10,
    ],
    data2: [
      "elite.jpg",
      "Премиум",
      "   В меню “Премиум” мы используем не только красивый дизайн упаковки,  но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
      20,
    ],
    data3: [
      "post.jpg",
      "Постное",
      "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
      15,
    ],
  };

  class MenuCard {
    constructor(img, title, descr, price, parent) {
      this.img = img;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.convert(current);
      this.parent = menuContainer;
    }
    convert(curr) {
      this.price = Math.round(this.price * curr);
    }
    render() {
      const card = document.createElement("div");
      card.classList.add("menu__item");
      card.innerHTML = ` 
      <img src="img/tabs/${this.img} " alt="vegy" />
      <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
      <div class="menu__item-descr">${this.descr} </div> 
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total">
          <span>${this.price}
          </span> 
        грн/день
        </div>
      </div>
    `;
      this.parent.append(card);
    }
  }

  new MenuCard(...itemsData.data1).render();
  new MenuCard(...itemsData.data2).render();
  new MenuCard(...itemsData.data3).render();
});
