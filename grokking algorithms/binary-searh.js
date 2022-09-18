function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  let i = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    i++;
    if (item > list[high]) {
      return "not found";
    } else if (guess == item) {
      return `the function has been invoked ${i} time  , ${item} is by index ${mid}`;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}

const arr = [];
for (let i = 1; i <= 100000000; i++) {
  arr.push(i);
}
console.log(binarySearch(arr, 100000000));
