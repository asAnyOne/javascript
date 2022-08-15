"use strict";

function Constructor(name, age) {
  this.name = name;
  let userAge = age;
  this.getAge = function () {
    return userAge;
  };
  this.setAge = function (num) {
    if (typeof num === "number" && num > 0 && num < 110) {
      userAge = num;
    } else {
      console.log("You are type a wrong symbol!");
    }
  };
}

const ivan = new Constructor("Ivan", 30);

console.log(ivan.getAge());
ivan.setAge(45);
ivan.setAge(500);
ivan.setAge(-500);
ivan.setAge("lsfl");
console.log(ivan.getAge());

class Clasz {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #age = 90;

  set getAge(num) {
    if (typeof num === "number" && num > 0 && num < 110) {
      this.#age = num;
    } else {
      console.log("You type wrong symbols");
    }
  }

  get getAge() {
    return this.#age;
  }
}

const alex = new Clasz("Alex", 50);

alex.getAge = 55;
console.log(alex.getAge);
