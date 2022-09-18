export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector(".close");
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  handleTriggers() {
    this.btns.forEach((btn, i) => {
      if (i % 2) {
        btn.setAttribute("data-blocked", true);
      }

      btn.addEventListener("click", () => {
        if (!btn.getAttribute("data-blocked")) {
          try {
            this.activeBtn = btn;
            this.nextBtn = btn.parentNode.nextElementSibling.lastElementChild;
            this.nextBtnParent = btn.parentNode.nextElementSibling;
          } catch (error) {}

          if (document.querySelector("iframe#frame")) {
            this.overlay.style.display = "flex";
            if (this.path !== btn.getAttribute("data-url")) {
              this.path = btn.getAttribute("data-url");
              this.player.loadVideoById({ videoId: this.path });
            }
          } else {
            this.path = btn.getAttribute("data-url");
            this.createPlayer(this.path);
          }
        }
      });
    });
  }

  handleClose() {
    this.close.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: url,
      events: { onStateChange: this.onPlayerStateChange },
    });
    this.overlay.style.display = "flex";
  }
  onPlayerStateChange(state) {
    if (state.data === 0) {
      if (this.nextBtnParent) {
        this.nextBtn.innerHTML = this.activeBtn.innerHTML;
        this.nextBtn.removeAttribute("data-blocked");
        this.nextBtnParent.style.cssText = "filter:none; opacity:1;";
      }
    }
  }

  init() {
    if (this.btns.length) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.handleTriggers();
      this.handleClose();
    }
  }
}
