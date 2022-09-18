export default class ShowInfo {
  constructor(triggers) {
    this.infoBtns = document.querySelectorAll(triggers);
  }

  init() {
    this.infoBtns.forEach((btn) => {
      const infoText = btn.nextElementSibling;
      infoText.classList.add("animated", "fadeIn");
      let active = false;
      btn.addEventListener("click", () => {
        active = !active;
        infoText.style.display = active ? "block" : "none";

        btn.lastElementChild.firstElementChild.firstElementChild.firstElementChild.style.display =
          active ? "none" : "block";
      });
    });
  }
}
