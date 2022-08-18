function modal() {
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
}
export default modal;
