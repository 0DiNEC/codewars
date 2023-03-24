Array.prototype.map = function (func, thisArg = this) {
  newArr = [];
  newArr.length = this.length;

  for (let index = 0; index < this.length; index++) {
    if (isNaN(Number(this[index]))) continue;
    newArr[index](func.call(thisArg, this[index], index, this));
  }

  return newArr;
};

var base_array = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

var mapped_array = base_array.map(function (x) {
  return x;
});

console.log(mapped_array);
