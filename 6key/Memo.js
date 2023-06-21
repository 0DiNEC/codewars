function memo(fn) {
  let cache = {};
  return (...args) =>  {
    const n = typeof args[0] === 'object' ? JSON.stringify(args) : args[0];
    if (n in cache) return cache[n];
    else {
      const result = fn(...args);
      cache[n] = result;
      return result;
    }
  }
}