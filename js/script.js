"use strict";

const numberOfFilms = prompt("How much films you have seen? ", "");
const movies1 = prompt("One of lastest film from watching films", "");
const raiting1 = prompt("How hi you raited it?", "");
const movies2 = prompt("One of lastest film from watching films", "");
const raiting2 = prompt("How hi you raited it?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {
    [movies1]: raiting1,
    [movies2]: raiting2,
  },
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMovieDB);
