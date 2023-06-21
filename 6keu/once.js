function once(func) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return func.apply(this, args);
    }
  };
}

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect