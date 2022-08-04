"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
let numberOfFilms;

function start() {
  numberOfFilms = prompt("How much movies you have seen? \n max 9999 ", "");
  while (
    isNaN(+numberOfFilms) ||
    +numberOfFilms <= 0 ||
    numberOfFilms.length > 4
  ) {
    numberOfFilms = prompt("How much movies you have seen? \n max 9999 ", "");
  }
  personalMovieDB.count = +numberOfFilms;
}

start();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt(
      "The last one from movies you have seen . \n max symbol 50!",
      ""
    );
    while (a === null || a.length > 50 || a.length < 2 || a === "" || a === 0) {
      a = prompt(
        "The last one from movies you have seen . \n max symbol 50!",
        ""
      );
    }
    let b = prompt("How much you raited it? \n Please enter from 1 to 10", "");
    while (isNaN(+b) || +b <= 0 || b > 10) {
      b = prompt("How much you raited it? \n Please enter from 1 to 10", "");
    }
    personalMovieDB.movies[a] = b;
  }
}

// rememberMyFilms();

// for (let i = 0; i < 2; i++) {
//   const a = prompt(
//       "The last one from movies you have seen . \n max symbol 50!",
//       ""
//     ),
//     b = prompt("How much you raited it? \n Please enter from 1 to 10", "");
//   if (
//     a !== null &&
//     a !== "" &&
//     a.length < 50 &&
//     a.length > 2 &&
//     a !== 0 &&
//     !isNaN(+b) &&
//     +b > 0 &&
//     b <= 10
//   ) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     i--;
//   }
// }
function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    alert("Less movies you have watchen!");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("You are classic movie watcher!");
  } else if (personalMovieDB.count > 30) {
    alert("You are a kinoman!");
  } else {
    alert("Something is wrong!");
  }
}
// detectPersonalLevel();

function writeYourGenres(db) {
  for (let i = 0; i < 3; i++) {
    // db.genres.push(prompt(`Enter your favorite genre number ${i + 1}`, ""));
    db.genres[i] = prompt(`Enter your favorite genre number ${i + 1}`, "");
  }
}
writeYourGenres(personalMovieDB);

function showMyDB(db) {
  if (!db.privat) {
    console.log(db);
  }
}
showMyDB(personalMovieDB);
