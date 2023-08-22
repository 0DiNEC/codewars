module.exports = {
  queue: [],
  minVal: Infinity,
  maxVal: 0,
  push(x) {
    this.queue.push(x);
    if (x < this.minVal) {
      this.minVal = x;
    }
    if (x > this.maxVal || this.maxVal === 0) {
      this.maxVal = x;
    }
  },
  shift() {
    if (this.queue.length === 0)
      return 0;
    const shifted = this.queue.shift();
    if (shifted === this.minVal) {
      this.minVal = Math.min(...this.queue);
    }
    if (shifted === this.maxVal) {
      this.maxVal = Math.max(...this.queue);
    }
    return shifted;
  },
  min() {
    if (this.queue.length === 1)
      return 0;
    return this.minVal;
  },
  max() {
    if (this.queue.length === 0)
      return 0
    return this.maxVal;
  }
};