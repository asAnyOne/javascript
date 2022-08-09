"use strict";
const now = new Date();
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(new Date(now.getTime()));
// ----------

console.log(now);
console.log(new Date(now.setHours(10)));
console.log(new Date(now.setHours(-20)));
console.log(new Date(now.setHours(-10)));
//------------
let start = new Date();

for (let i = 0; i < 100000000; i++) {
  let a = i ** 100;
}
let end = new Date();
console.log(`circle have been done for ${end - start} ms`);
