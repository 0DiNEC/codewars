// eslint-disable-next-line no-extend-native
Array.prototype.reduce = function (process, initial) {
  for (let i = 0; i < this.length; i++) {
    if (typeof initial === 'undefined') initial = this[i];
    else initial = process(initial, this[i]);
  }

  return initial;
};
