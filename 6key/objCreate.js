Object.create = function(prototype, prop) {
  if (typeof prototype !== 'object' && prototype !== null) 
  throw TypeError('Cannot create');
    const result = {
      __proto__: prototype,
    };

    if (typeof prop !== "undefined") {
      Object.defineProperties(result, prop);
    }
    return result
}