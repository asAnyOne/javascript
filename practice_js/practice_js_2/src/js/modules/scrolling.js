const scrolling = (scrollSelector, iconSelector = ".pageup") => {
  const scrollIcons = document.querySelectorAll(scrollSelector);
  scrollIcons.forEach((scrollIcon) => {
    if (scrollSelector === iconSelector) {
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 1500) {
          scrollIcon.classList.add("animated", "fadeIn");
          scrollIcon.classList.remove("fadeOut");
        } else {
          scrollIcon.classList.remove("fadeIn");
          scrollIcon.classList.add("fadeOut");
        }
      });
    }

    // Scrolling with requestAnimationFrame

    let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.2;
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        let scrollTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;

        requestAnimationFrame(frame);

        function frame(time) {
          if (start === null) {
            start = time;
          }
          let progress = time - start,
            dir =
              toBlock < 0
                ? Math.max(scrollTop - progress / speed, scrollTop + toBlock)
                : Math.min(scrollTop + progress / speed, scrollTop + toBlock);
          document.documentElement.scrollTo(0, dir);
          if (dir != scrollTop + toBlock) {
            requestAnimationFrame(frame);
          } else {
            location.hash = hash;
          }
        }
      });
    });

    // //Pure JS scrolling

    // const element = document.documentElement,
    //   body = document.body;

    // const calcScroll = () => {
    //   scrollIcon.addEventListener("click", function (e) {
    //     let scrollTop = Math.round(element.scrollTop || body.scrollTop);
    //     if (this.hash !== "") {
    //       e.preventDefault();
    //       let hashElement = document.querySelector(this.hash),
    //         hashElementTop = 0;
    //       while (hashElement.offsetParent) {
    //         hashElementTop = hashElementTop + hashElement.offsetTop;
    //         hashElement = hashElement.offsetParent;
    //       }
    //       hashElementTop = Math.round(hashElementTop);
    //       smoothScroll(scrollTop, hashElementTop, this.hash);
    //       console.log(hashElement.offsetTop);
    //       console.log(hashElement.offsetParent);
    //     }
    //   });
    // };
    // const smoothScroll = (from, to, hash) => {
    //   let timeInterval = 1,
    //     prevScrollTop,
    //     speed;
    //   if (to > from) {
    //     speed = 30;
    //   } else {
    //     speed = -30;
    //   }
    //   let stopInterval = setInterval(function () {
    //     let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //     if (
    //       prevScrollTop === scrollTop ||
    //       (to > from && scrollTop >= to) ||
    //       (to < from && scrollTop <= to)
    //     ) {
    //       clearInterval(stopInterval);
    //       history.replaceState(
    //         history.state,
    //         document.title,
    //         location.href.replace(/#.*$/g, "") + hash
    //       );
    //     } else {
    //       body.scrollTop = body.scrollTop + speed;
    //       element.scrollTop = element.scrollTop + speed;
    //       prevScrollTop = scrollTop;
    //     }
    //   }, timeInterval);
    // };
    // calcScroll();
  });
};
export default scrolling;
