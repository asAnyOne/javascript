"use strict";

// this always obj in  methods. an exemplar(instance) in constructors.

const user = {
  name: "John",
  age: 39,
  greating: function () {
    console.log(`Hello my name is ${this.name} ! I am ${this.age} yers old.`);
    // function question() {
    //     console.log(`Where are you ${this.name} ?`);    ------------------ERROR because  this.name = undefined
    //   }
    const question = () => console.log(`Where are you ${this.name} ?`);

    question();
  },
};
user.greating(); // obj =this

function User(name, age) {
  this.name = name;
  this.age = age;
  this.greating = function () {
    console.log(`Hello my name is ${this.name} ! I am ${this.age} yers old.`);
  };
}
const user1 = new User("Ann", 30),
  user2 = new User("Mike", 28);
user1.greating(); //exemplar=this
user2.greating(); //exemplar=this

// there are 3 ways , functons as method in objects  manualy 2 is calling and binding

function greating(arg1, arg2, arg3) {
  console.log(
    `Hello my name is ${this.name} ! I am ${this.age} yers old. ${arg1} , ${arg2} , ${arg3} are friends`
  );
}

const user3 = {
  name: "Maya",
  age: 35,
};

greating.apply(user3, ["Ann", "Mike", "John"]);
greating.call(user3, "Ann", "Mike", "John");
greating.bind(user3)("Ann", "Mike", "John");
const greatingBybBind = greating.bind(user3);
greatingBybBind(2, 3, 4);
greatingBybBind("lsjfk", "lfjsk", "lsfjfs");
greatingBybBind(false, true, null);
