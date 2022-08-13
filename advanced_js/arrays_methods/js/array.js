"use strict";

let users = ["aNn", "alEX", "MaxiM", "Selina"];

//filter  works with logical oparators , and return new array with filtered items

let filtUsers = users.filter((user) => user.length > 4);
console.log(filtUsers);

//map  works on arrayItems and change them , return new array with changed items

let mapUsers = users.map((user) => user.toLowerCase());
console.log(mapUsers);

// some/every   someOne true or everyOne true

let someUsers = users.some((user) => user.length < 4);
let everyUsers = users.every((user) => user.length < 4);
console.log(someUsers);
console.log(everyUsers);

// reduce

let reduceUser = users.reduce((a, b) => a + ", " + b);
console.log(reduceUser);

let num = [1, 5, 3, 4, 3];

let reduceNum1 = num.reduce((a, b) => a + b);
console.log(reduceNum1);
let reduceNum2 = num.reduce((a, b) => a - b);
console.log(reduceNum2);
let reduceNum3 = num.reduce((a, b) => a * b);
console.log(reduceNum3);

const obj = {
  ivan: "person",
  avva: "person",
  dog: "animal",
  cat: "animal",
};
console.log(Object.keys(obj).filter((key) => obj[key] === "person"));
