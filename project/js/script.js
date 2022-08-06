/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";
document.addEventListener("DOMContentLoaded", () => {
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
    interActiveList = document.querySelector(".promo__interactive-list"),
    form = document.querySelector(".add"),
    addingInput = form.querySelector(".adding__input"),
    checkbox = form.querySelector("[type='checkbox']");

  advImg.forEach((item) => item.remove());
  document.querySelector(".promo__genre").textContent = "ДРАМА";
  document.querySelector(".promo__bg").style.backgroundImage =
    "url('img/bg.jpg')";

  function addMovies(parent, arr) {
    parent.innerHTML = "";

    arr
      .join(",")
      .toUpperCase()
      .split(",")
      .sort()
      .forEach((item, i) => {
        parent.innerHTML += `
           <li class="promo__interactive-item">${i + 1}  ${item}
                 <div  class="delete "></div>
           </li>`;
      });
    // document.querySelectorAll(".delete").forEach((btn, i) => {
    //   btn.addEventListener("click", () => {
    //     btn.parentElement.remove();
    //     arr.splice(i, 1);
    //     addMovies(parent, arr);
    //   });
    // });
  }
  addMovies(interActiveList, movieDB.movies);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkbox.checked) {
      console.log("favorite film");
    }
    let newFilm = addingInput.value;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = newFilm.slice(0, 20) + "...";
      }
      movieDB.movies.push(newFilm);
      addMovies(interActiveList, movieDB.movies);
    }
    e.target.reset();
  });

  interActiveList.addEventListener("click", (e) => {
    movieDB.movies.forEach((movei, i) => {
      if (
        movei.toUpperCase() ===
          e.target.parentElement.textContent.replace(/[0-9]/g, "").trim() ||
        movei.toUpperCase() ===
          e.target.textContent.replace(/[0-9]/g, "").trim()
      ) {
        movieDB.movies.splice(i, 1);
        addMovies(interActiveList, movieDB.movies);
      }
    });
  });
});
