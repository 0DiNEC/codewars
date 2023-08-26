function deepCount(arr, c = 0) {
  let count = c;
  
  for (const element of arr) {
    const e = element;
    const len = e.length ? e.length : 1;
    count += Array.isArray(e) ? deepCount(e, 1) : 0;
  }
  
  return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));


// return arr
  // .reduce((acc, val) => {
  //   return acc + (Array.isArray(val) ? deepCount(val) : 0);
  // }, arr.length);