// add
const add = function (a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
};
const result = add(5)(9);

console.log(result());

