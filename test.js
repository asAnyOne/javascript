// console.log(calc(15, 59));
// function calc(a, b) {
//   return a * b;
// }
// let c;
// function calcWithoutReturn(a, b) {
//   c = a * b;
// }

// console.log(calcWithoutReturn(5, 6));
// console.log(c);

// // callback functions

// const callback = function () {
//   setTimeout(() => {
//     console.log("I am callback");
//   }, 2000);
// };

// function main(arg, callback) {
//   console.log(arg);
//   callback();
// }

// main("I'm argument", callback);

// const obj = {
//   name: "Item",
//   itemColor: "red",
//   itemHeight: 100,
//   itemwidth: 300,
// };
// const objToArr = [];
// for (let keys in obj) {
//   objToArr.push(keys);
// }
// console.log(objToArr, objToArr.length);
// console.log(Object.keys(obj), Object.keys(obj).length);

// const obj1 = {
//   a: 5,
//   b: 6,
// };
// const copyObj1 = obj1;
// obj1.a = 66;
// console.log(obj1, copyObj1);

// const obj2 = {
//   a: 1,
//   b: 3,
//   c: {
//     d: 4,
//     f: 5,
//   },
// };
// const spred = { ...obj2 };
// spred.c.f = 7;
// spred.a = 9;
// const objClone = Object.assign({}, obj2);
// objClone.c.d = 6;
// objClone.a = 6;
// console.log(obj2);
// console.log(objClone);
// console.log(spred);
// // ------------

// let num = 5;
// showNum();
// function showNum() {
//   console.log(num);
// }
// num = 6;
// showNum();
// num = 8;
// showNum();

//----------------
function count() {
  let counter = 0;

  const scoupCount = function () {
    counter = counter + 1;

    return counter;
  };
  return scoupCount;
}
// const expCount = count;
// console.log(expCount()());
// console.log(expCount()());
// console.log(expCount()());
// console.log(expCount()());
// console.log(count()());
// console.log(count()());
// ----------------------
const expCount = count();
console.log(expCount());
console.log(expCount());
console.log(expCount());
console.log(expCount());
console.log(count()());
console.log(count()());
