"use strict";

// getter and setter works together

const person = {
  name: "alex",
  age: 49,
  get getAge() {
    return this.age;
  },
  set getAge(num) {
    this.age = num;
  },
};

person.getAge = 50; //setter worked
console.log(person.age);
console.log(person.getAge);
