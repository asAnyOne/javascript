console.log(calc(15, 59));
function calc(a, b) {
  return a * b;
}
let c;
function calcWithoutReturn(a, b) {
  c = a * b;
}

console.log(calcWithoutReturn(5, 6));
console.log(c);
