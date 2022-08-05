/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";
const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
const promoAdv = document.querySelector(".promo__adv "),
  advImg = promoAdv.querySelectorAll("img"),
  interActiveList = document.querySelector(".promo__interactive-list");

advImg.forEach((item) => item.remove());
document.querySelector(".promo__genre").textContent = "ДРАМА";
document.querySelector(".promo__bg").style.backgroundImage =
  "url('img/bg.jpg')";

interActiveList.innerHTML = "";

movieDB.movies.sort().forEach((item, i) => {
  interActiveList.innerHTML += `
         <li class="promo__interactive-item">${i + 1}  ${item}
               <div class="delete"></div>
         </li>`;

  //   const li = document.createElement("li");
  //   li.classList.add("promo__interactive-item");
  //   li.innerHTML = `${i + 1}  ${item}
  //       <div class="delete"></div>`;
  //   interActiveList.append(li);
});
