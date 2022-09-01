import calcScroll from "./calcScroll";

const images = () => {
  const works = document.querySelector(".works");
  const imgPopup = document.createElement("div");
  const bigImage = document.createElement("img");
  const scroll = calcScroll();
  imgPopup.style.cssText = `background:rgba(0,0,0,0.7);
       justify-content:center;
        align-items:center `;

  imgPopup.classList.add("popup_engineer");
  works.appendChild(imgPopup);
  imgPopup.appendChild(bigImage);

  works.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      bigImage.setAttribute("src", e.target.parentNode.getAttribute("href"));
      document.body.style.marginRight = scroll + "px";
      document.body.style.overflow = "hidden";
    }

    if (e.target.parentNode.classList.contains("works") && e.target) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = 0;
    }

    console.log(scroll);
  });
};
export default images;
