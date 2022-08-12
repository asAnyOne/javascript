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

  //---------class MenuCards{}

  const menuField = document.querySelector(".menu__field"),
    menuContainer = menuField.querySelector(".container"),
    current = 22;

  const itemsData = {
    data1: [
      "vegy.jpg",
      "Фитнес",
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овоще ценой и высоким качеством!',
      10,
    ],
    data2: [
      "elite.jpg",
      "Премиум",
      'В меню "Премиум" мы используем не только красивый дизайн упаковки,  но и качественнпохода в ресторан!',
      20,
    ],
    data3: [
      "post.jpg",
      "Постное",
      'Меню "Постное"- это тщательный подбор ингредиентов: побелков за счет тофу и импортных вегетарианских стейков.',
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

  //Form--------post/request; fetch API

  const forms = document.querySelectorAll("form");

  const statusMessage = {
    loading: "img/form/spinner.svg",
    success: "Your message sended successfully! We callback you soon!",
    error: "Something goes wrong",
  };

  function sendForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const spinner = document.createElement("img");
      spinner.src = statusMessage.loading;
      spinner.style.cssText = "margin:0 auto;display:block";
      form.insertAdjacentElement("afterend", spinner);

      const formData = new FormData(form);
      const obj = {};
      formData.forEach((key, value) => {
        obj[key] = value;
      });

      fetch("data.php", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((data) => data.text())
        .then((data) => {
          console.log(data);
          warn(statusMessage.success);
          spinner.remove();
        })
        .catch((e) => {
          warn(statusMessage.error);
        })
        .finally(() => form.reset());

      function warn(message) {
        const formM = modal.querySelector("form");
        formM.style.display = "none";
        modal.classList.add("show");

        const tempModal = document.createElement("div");
        tempModal.innerHTML = `
        <div class="modal__close">×</div>
        <div class="modal__title">${message} </div>        
        `;

        modal.lastElementChild.lastElementChild.append(tempModal);

        setTimeout(() => {
          tempModal.remove();
          document.querySelector("body").className = "";
          modal.classList.remove("show");
          formM.style.display = "";
        }, 4000);
      }
    });
  }
  forms.forEach((form) => sendForm(form));
});
