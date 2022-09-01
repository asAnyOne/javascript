const tabs = (
  tabsWrapperSelector,
  tabsSelector,
  contentSelectors,
  activeClass,
  display = "block"
) => {
  const tabsWrapper = document.querySelector(tabsWrapperSelector),
    tabs = document.querySelectorAll(tabsSelector),
    content = document.querySelectorAll(contentSelectors);

  function hideContent() {
    tabs.forEach((item) => item.classList.remove(activeClass));
    content.forEach((item) => (item.style.display = "none"));
  }
  function showContent(i = 0) {
    tabs[i].classList.add(activeClass);
    content[i].style.display = display;
  }
  hideContent();
  showContent();

  tabsWrapper.addEventListener("click", (e) => {
    if (
      (e.target &&
        e.target.classList.contains(tabsSelector.replace(/\./, ""))) ||
      e.target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))
    ) {
      tabs.forEach((item, i) => {
        if (item === e.target || item === e.target.parentNode) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
};
export default tabs;
