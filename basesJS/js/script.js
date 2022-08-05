"use strict";

const personalMovieDB = {
  start: function () {
    personalMovieDB.count = prompt(
      "How much movies you have seen? \n max 9999 ",
      ""
    );
    while (
      isNaN(+personalMovieDB.count) ||
      +personalMovieDB.count <= 0 ||
      personalMovieDB.count.length > 4
    ) {
      personalMovieDB.count = prompt(
        "How much movies you have seen? \n max 9999 ",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt(
        "The last one from movies you have seen . \n max symbol 50!",
        ""
      ).trim();
      while (
        a === null ||
        a.length > 50 ||
        a.length < 2 ||
        a === "" ||
        a === 0
      ) {
        a = prompt(
          "The last one from movies you have seen . \n max symbol 50!",
          ""
        ).trim();
      }
      let b = prompt(
        "How much you raited it? \n Please enter from 1 to 10",
        ""
      );
      while (isNaN(+b) || +b <= 0 || b > 10) {
        b = prompt("How much you raited it? \n Please enter from 1 to 10", "");
      }
      personalMovieDB.movies[a] = b;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count <= 10) {
      alert("Less movies you have watchen!");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
      alert("You are classic movie watcher!");
    } else if (personalMovieDB.count > 30) {
      alert("You are a kinoman!");
    } else {
      alert("Something is wrong!");
    }
  },
  writeYourGenres: function (db) {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Enter your favorite genre number ${i + 1}`, "");
      if (genre === null || genre.trim() === "") {
        i--;
      } else {
        // db.genres.push(prompt(`Enter your favorite genre number ${i + 1}`, ""));
        db.genres[i] = genre.trim();
      }
    }
    personalMovieDB.genres.forEach((genre, i) => {
      console.log(`Movie '${genre}'  #${i + 1}`);
    });
  },
  showMyDB: function (db) {
    if (!db.privat) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function (db) {
    if (db.privat) {
      db.privat = true;
    } else {
      db.privat = false;
    }
  },
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres(personalMovieDB);

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
