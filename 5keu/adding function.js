function add(num) {
  function addInner(value) {
    return add(num + value);
  }

  addInner.toString = function () {
    return num;
  }

  return addInner;
}

var addTwo = add(2);
console.log(addTwo); // Output: 2
console.log(addTwo + 5); // Output: 7
console.log(addTwo(3)); // Output: 5
console.log(addTwo(3)(5)); // Output: 10
