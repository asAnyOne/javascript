import calcScroll from "./calcScroll";

const modals = () => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      closeBtn = modal.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();

    function closeModal() {
      windows.forEach((item) => (item.style.display = "none"));
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
    function showModal(e) {
      e.preventDefault();
      windows.forEach((item) => (item.style.display = "none"));
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    }

    trigger.forEach((item) =>
      item.addEventListener("click", (e) => e.target && showModal(e))
    );
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener(
      "click",
      (e) => e.target === modal && closeClickOverlay && closeModal()
    );
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  bindModal(".phone_link", ".popup", ".popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  showModalByTime(".popup", 60000);
};
export default modals;
