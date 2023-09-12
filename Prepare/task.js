/** @format */

// bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      return fn.apply(context, args.concat(bindArgs));
    };
  };
}

// create
function objectCreatePolyfill(proto) {
  function Func() {}
  Func.prototype = proto;

  return new Func();
}

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

// repeating
String.prototype.repeating = function (times) {
  if (times <= 0) {
    return '';
  }
  return this + this.repeating(times - 1);
};

// myFunc

function myFunc(delimiter, ...args) {
  const copyArgs = args
    .slice(0, args.length - 1)
    .map((num) => `${num}${delimiter}`)
    .join('');
  return [...copyArgs, args.at(-1)].join('');
}

// add
const add = function (a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
};
const result = add(5)(9);

console.log(result());

