function checkNumber(value) {
  return typeof value == "number";
}

function typeCheck(f, checks) {
  return function () {
    for (var i = 0; i < arguments.length; i++) {
      if (!checks[i](arguments[i])) {
        console.log("Error element is:" + i);
        return;
      }
    }
    return f.apply(this, arguments);
  }
}

function sum(a,b) {
  return a + b;
}

sum = typeCheck(sum, [checkNumber, checkNumber]);

console.log(sum(1,2));
console.log(sum(1,'4'));
 console.log(sum(1,'fuck'));
