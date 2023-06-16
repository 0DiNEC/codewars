Array.prototype.map = function (func, thisArg) {
  var newArr = [];
  newArr.length = this.length;

  for (var item in this) {
    if (isNaN(Number(item))) continue;
    newArr[item] = func.call(thisArg, this[item], Number(item), this);
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
