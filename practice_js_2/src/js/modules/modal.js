import calcScroll from "./calcScroll";

const modals = () => {
  const scroll = calcScroll();
  const handleTimeout = setTimeout(
    () => showModalByTime(".popup-consultation", 4),
    5000000
  );

  function closeModal(windows) {
    windows.forEach((item) => (item.style.display = "none"));
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
    document.querySelector(".fixed-gift") &&
      (document.querySelector(".fixed-gift").style.marginRight = `0px`);
  }
  function showModal(e, windows, modal) {
    e.preventDefault();
    windows.forEach(
      (item) =>
        (item.style.display = "none") &&
        item.classList.add("animated", "fadein")
    );
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
    document.querySelector(".fixed-gift") &&
      (document.querySelector(".fixed-gift").style.marginRight = `${scroll}px`);
    e.target.classList.contains("fixed-gift") &&
      window.removeEventListener("scroll", showModalByScroll);
  }

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroyTrigger = false
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      closeBtn = modal.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((item) =>
      item.addEventListener(
        "click",
        (e) =>
          (e.target && showModal(e, windows, modal)) ||
          clearInterval(handleTimeout) ||
          (destroyTrigger && e.target.remove())
      )
    );
    closeBtn.addEventListener("click", () => closeModal(windows));
    modal.addEventListener(
      "click",
      (e) => e.target === modal && closeModal(windows)
    );
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
      document.querySelector(".fixed-gift").style.marginRight = `${scroll}px`;
    }, time);
  }
  function showModalByScroll() {
    if (
      window.pageYOffset + window.innerHeight ===
      document.body.clientHeight
    ) {
      document.querySelector(".popup-gift").style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
      document.querySelector(".fixed-gift").remove();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  bindModal(".button-design", ".popup-design", ".popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-close", true);
};
export default modals;
