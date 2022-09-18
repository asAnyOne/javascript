function fact(j) {
  if (j == 1) {
    return j;
  } else {
    return j * fact(j - 1);
  }
}

console.log(fact(5));

const arrRec = [];
for (let i = 1; i <= 100; i++) {
  arrRec.push(i);
}

// let i = 0;
let total = 0;
// function sum(arr) {
//   // total = total + arr[i];
//   // i++;
//   // if (i !== arr.length) {
//   //   sum(arr);
//   // }
//   total = total + arr[arr.length - 1];
//   arr.pop();
//   // console.log(total);
//   if (arr.length) {
//     sum(arr);
//   }
// }
function sum(i, arr) {
  total = total + arr[i];
  i--;
  if (i >= 0) {
    sum(i, arr);
  }
}
sum(arrRec.length - 1, arrRec);
console.log(total);
