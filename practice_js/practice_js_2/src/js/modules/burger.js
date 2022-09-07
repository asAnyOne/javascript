const burger = (btnSelector, menuSelector) => {
  const burgerBtn = document.querySelector(btnSelector),
    burgerMenu = document.querySelector(menuSelector);

  let toggleMenu = false;

  burgerBtn.addEventListener("click", () => {
    toggleMenu = !toggleMenu;
    burgerMenu.style.display =
      toggleMenu && window.screen.availWidth < 993 ? "block" : "none";
  });
  window.addEventListener(
    "resize",
    () => window.screen.availWidth > 992 && (burgerMenu.style.display = "none")
  );
};
export default burger;
