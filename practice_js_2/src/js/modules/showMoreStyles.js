import { getData } from "../services/requests";

const showMoreStyles = (selector) => {
  const styles = document.querySelector("#styles>div>div"),
    newStyles = styles.querySelectorAll(
      ".hidden-lg.hidden-md.hidden-sm.hidden-xs.styles-2"
    ),
    addBtn = document.querySelector(".button-transparent.button-styles");
  function createNewStyles(data) {
    data.forEach(({ src, title, link }) => {
      const card = document.createElement("div");
      const stylesBlock = `
                    <div class="styles-block">
						<img src=${src} alt="">
						<h4>${title}</h4>
						<a href=${link}>Подробнее</a>
					</div> `;
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
      card.innerHTML = stylesBlock;
      styles.appendChild(card);
    });
  }
  addBtn.addEventListener("click", () => {
    getData("assets/db.json")
      .then((res) => createNewStyles(res.styles))
      // getData("http://localhost:3000/styles")
      // .then(createNewStyles)
      .then(() => addBtn.remove())
      .catch((e) => console.log(e));
  });
};
export default showMoreStyles;
