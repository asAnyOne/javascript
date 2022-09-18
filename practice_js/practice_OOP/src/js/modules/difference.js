export default class Differnce {
  constructor(officer) {
    try {
      this.officerItems = document.querySelector(officer).children;
      this.addBtn = this.officerItems[this.officerItems.length - 1];
    } catch (error) {}

    this.indexShow = 1;
  }

  addClass(elem, ...clas) {
    elem.classList.add(...clas);
  }

  displayElem(elem, displayState) {
    elem.style.display = displayState;
  }

  hideOfficer() {
    this.officerItems.forEach((item, i) => {
      this.addClass(item, "animated", "fadeIn");

      if (i !== 0 && i !== this.officerItems.length - 1) {
        this.displayElem(item, "none");
      }
    });
  }

  bindTrigger(items, index, btn) {
    this.addBtn.addEventListener("click", () => {
      this.displayElem(btn, "none");
      this.displayElem(items[index], "flex");

      if (index !== items.length - 2) {
        setTimeout(() => this.displayElem(btn, "flex"), 300);
      }
      index++;
    });
  }

  init() {
    try {
      this.bindTrigger(this.officerItems, this.indexShow, this.addBtn);
      this.hideOfficer();
    } catch (error) {}
  }
}
