function multiply(a) {
  return function performWith(b) {
    return a * b
  }
}


function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }

    return function continueCurrying(...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}

const curriedMultiply = curry(multiply)
const double = curriedMultiply((2)(10));
const result = curriedMultiply(2, 10)
console.log(double)
console.log(result);
