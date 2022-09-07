const filters = (
  tabsParentSelector,
  tabContentsParentSelector,
  notYetClass,
  active
) => {
  const tabsParent = document.querySelector(tabsParentSelector),
    tabContentsParent = document.querySelector(tabContentsParentSelector),
    notYet = document.querySelector(notYetClass),
    tabs = tabsParent.childNodes;
  function filterContents(e) {
    const contents = tabContentsParent.childNodes;

    contents.forEach(
      (content) =>
        content.classList &&
        ((content.style.display = "none") ||
          content.classList.remove("animated", "fadeIn"))
    );
    const filteredContents = Array.from(contents).filter(
      (content) =>
        content.classList && content.classList.contains(e.target.classList)
    );
    filteredContents.forEach(
      (content) =>
        (content.style.display = "block") &&
        content.classList.add("animated", "fadeIn")
    );
    if (filteredContents.length) {
      notYet.style.display = "none";
      notYet.classList.remove("animated", "fadeIn");
    } else {
      notYet.style.display = "block";
      notYet.classList.add("animated", "fadeIn");
    }
  }

  tabs.forEach((tab) => {
    tab.classList &&
      tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => tab.classList && tab.classList.remove(active));
        filterContents(e);
        e.target.classList.add(active);
      });
  });
};
export default filters;
