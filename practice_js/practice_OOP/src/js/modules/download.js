export default class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = "assets/img/Bitmap.jpg";
  }

  download(path) {
    const elem = document.createElement("a");
    elem.style.display = "none";
    elem.setAttribute("href", path);
    elem.setAttribute("download", "laptop picture");
    document.body.appendChild(elem);
    elem.click();
    elem.remove();
  }

  init() {
    this.btns.forEach((btn) => {
      btn.style.cursor = "pointer";
      btn.addEventListener("click", () => this.download(this.path));
    });
  }
}
