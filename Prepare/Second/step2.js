const a = {
  a: {
    ab: {
      abc: {},
    },
  },
  b: {
    bc: {
      bcd: {
        e: {},
      },
    },
  },
};

const hasOwnInObject = (obj, searchProp) => {
  if (obj.hasOwnProperty(searchProp)) return true;

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key]) {
      if (hasOwnInObject(obj[key], searchProp)) return true;
    }
  }
  return false;
};

const findMaxObjDepth = (obj) => {
  let maxDepth = 0;

  const findDepth = (obj, depth = 0) => {
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key]) {
        findDepth(obj[key], depth + 1);
      }
    }
    if (depth > maxDepth) {
      maxDepth = depth;
    }
  };

  findDepth(obj);
  return maxDepth;
};

console.log(hasOwnInObject(a, 'bcd'));
console.log(findMaxObjDepth(a.a));

