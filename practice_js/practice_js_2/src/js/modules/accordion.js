const accordion = (selector) => {
  const accParent = document.querySelector(selector),
    accTitles = accParent.querySelectorAll("p"),
    accDescrs = accParent.querySelectorAll("div");

  accDescrs.forEach((item) => {
    item.classList.add("animated", "fadeInDown");
    item.style.display = "none";
  });

  let act = false;

  accTitles.forEach((title) => {
    title.addEventListener("click", () => {
      act = !act;
      title.classList.toggle("active-style");
      title.nextElementSibling.style.display = act ? "block" : "none";
    });
  });
};

export default accordion;
