const countBits = (number) => {
  return number.toString(2).split('1').length - 1;
};


console.log(countBits(5));