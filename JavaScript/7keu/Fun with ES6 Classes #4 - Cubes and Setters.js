class Cube {
  constructor (length) {
    this.length = length;
  }

  get volume () {
    return this.length ** 3;
  }

  set volume (value) {
    this.length = Math.cbrt(value);
  }

  get surfaceArea () {
    return (this.volume / this.length) * 6;
  }

  set surfaceArea (value) {
    this.length = Math.sqrt(value / 6);
  }
}

const figure = new Cube(1)
console.log(figure.length)
console.log(figure.surfaceArea)
console.log(figure.volume)

figure.length = 2
console.log(figure.length)
console.log(figure.surfaceArea)
console.log(figure.volume)

figure.volume = 125
console.log(figure.length)
console.log(figure.surfaceArea)
console.log(figure.volume)
