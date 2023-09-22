// repeating
String.prototype.repeating = function (times) {
  if (times <= 0) {
    return '';
  }
  return this + this.repeating(times - 1);
};

