let i = 0;
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const index = Math.floor(arr.length / 2);
    const fulcrum = arr[index];
    const less = arr.filter((item) => item < fulcrum);
    const greater = arr.filter((item) => item > fulcrum);
    i++;
    console.log(fulcrum);
    return [...quickSort(less), fulcrum, ...quickSort(greater)];
  }
}
// console.log(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(quickSort([5, 7, 3, 9, 4, 8, 2, 1, 6]));
console.log(i);
// console.log([5, 7, 3, 11, 9, 4, 25, 8, 2, 1, 6].sort((a, b) => a - b));
