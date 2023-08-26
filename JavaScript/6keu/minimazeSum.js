arr1 = [5, 4, 2, 3];
arr2 = [12, 6, 10, 26, 3, 24];
arr3 = [9, 2, 8, 7, 5, 4, 0, 6]

function minSum(arr) {
  arr.sort((a,b) => { return a - b });
  let sum = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    let min = arr[i];
    let max = arr[j];
    sum += min * max;
  }

  return sum;
}

console.log(minSum(arr3));
