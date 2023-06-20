function squaresNeeded(grains){
  let i = 0;
  let square = 2 ** i;
  while (square <= grains) {
    i++;
    square = 2 ** i;
  }
  return i;
}

console.log(squaresNeeded(1))