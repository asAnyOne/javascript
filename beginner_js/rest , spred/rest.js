"use strict";

function rest(a, b, ...rest) {
  console.log(a, b, rest);
}

rest(3, 4, 5, 6, 7); // 3 4 (3)-> [5, 6, 7]

/////////////////////

const arr = [1, 2, 3, 4];
const obj = { a: 1, b: 2 };

function spred(spred) {
  const { a, b } = obj;
  const [c, d, e, f] = arr;

  console.log(...spred);
  console.log({ ...spred });
  console.log({ ...obj });

  console.log(a, b); // 1 2                   destructuring
  console.log(c, d, e, f); // 1 2 3 4         destructuring
}

spred(arr); // 1 2 3 4
// spred(obj); // Uncaught TypeError: Found non-callable @@iterator
