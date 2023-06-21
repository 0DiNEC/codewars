Array.prototype.square = function() {
  const replaceArr = [];
  for (let i = 0; i < this.length; i++) {
    replaceArr.push(this[i]*this[i]);
  }
  return replaceArr;
}

Array.prototype.cube = function() {
  const replaceArr = [];
  for (let i = 0; i < this.length; i++) {
    replaceArr.push(this[i]**3);
  }
  return replaceArr;
}

Array.prototype.average = function() {
  let sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
}

Array.prototype.sum = function() {
  let sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

Array.prototype.even = function() {
  const replaceArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) 
      replaceArr.push(this[i]);
  }
  return replaceArr;
}

Array.prototype.odd = function() {
  const replaceArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) 
      replaceArr.push(this[i]);
  }
  return replaceArr;
}


const numbers = [1, 2, 3, 4, 5];
console.log(numbers.even());
