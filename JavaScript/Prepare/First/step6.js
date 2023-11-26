// reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback.call(undefined, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }

  return acc;
};

