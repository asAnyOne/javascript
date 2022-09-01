const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      closeBtn = modal.querySelector(closeSelector);

    function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
    function showModal(e) {
      e.preventDefault();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }

    trigger.forEach((item) =>
      item.addEventListener("click", (e) => e.target && showModal(e))
    );
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => e.target === modal && closeModal());
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  bindModal(".phone_link", ".popup", ".popup_close");
  showModalByTime(".popup", 60000);
};
export default modals;
