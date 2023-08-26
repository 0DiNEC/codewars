function cache(func) {
  let calls = {};
  return (...args) => {
    const n = JSON.stringify(args);
    if (n in calls) {
      return calls[n];
    }
    else {
      let result = func(n);
      calls[n] = result;
      return result;
    }
  }
}