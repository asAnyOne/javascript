function cards() {
  //---------class MenuCards{}

  const menuField = document.querySelector(".menu__field"),
    menuContainer = menuField.querySelector(".container"),
    current = 22;

  const itemsData = {
    data1: [
      "vegy.jpg",
      "Фитнес",
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овоще ценой и высоким качеством!',
      10,
    ],
    data2: [
      "elite.jpg",
      "Премиум",
      'В меню "Премиум" мы используем не только красивый дизайн упаковки,  но и качественнпохода в ресторан!',
      20,
    ],
    data3: [
      "post.jpg",
      "Постное",
      'Меню "Постное"- это тщательный подбор ингредиентов: побелков за счет тофу и импортных вегетарианских стейков.',
      15,
    ],
  };

  class MenuCard {
    constructor(img, title, descr, price, parent) {
      this.img = img;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.convert(current);
      this.parent = menuContainer;
    }
    convert(curr) {
      this.price = Math.round(this.price * curr);
    }
    render() {
      const card = document.createElement("div");
      card.classList.add("menu__item");
      card.innerHTML = ` 
    <img src="img/tabs/${this.img} " alt="vegy" />
    <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
    <div class="menu__item-descr">${this.descr} </div> 
    <div class="menu__item-price">
      <div class="menu__item-cost">Цена:</div>
      <div class="menu__item-total">
        <span>${this.price}
        </span> 
      грн/день
      </div>
    </div>
  `;
      this.parent.append(card);
    }
  }

  new MenuCard(...itemsData.data1).render();
  new MenuCard(...itemsData.data2).render();
  new MenuCard(...itemsData.data3).render();
}
export default cards;
