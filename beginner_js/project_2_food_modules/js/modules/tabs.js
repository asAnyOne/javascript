function tabs() {
  // Tabs--------------
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tabcontent"),
    contentActive = "tabcontent__active",
    tabActive = "tabheader__item_active";

  function addActiveClass(items, itemClass, i = 0) {
    items[i].classList.add(itemClass);
  }
  function removeActiveClass(items, itemClass) {
    items.forEach((item) => item.classList.remove(itemClass));
  }

  addActiveClass(tabs, tabActive);
  addActiveClass(tabContents, contentActive);

  tabs.forEach((item, i) => {
    item.addEventListener("click", () => {
      removeActiveClass(tabs, tabActive);
      removeActiveClass(tabContents, contentActive);
      addActiveClass(tabs, tabActive, i);
      addActiveClass(tabContents, contentActive, i);
    });
  });
}
export default tabs;
