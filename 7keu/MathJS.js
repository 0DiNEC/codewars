const calculate =
  (...args) =>
  (...args2) => {
    return Array()
      .concat(args, args2)
      .reduce((acc, cur) => acc + cur);
  };

console.log(calculate(1)(1));
