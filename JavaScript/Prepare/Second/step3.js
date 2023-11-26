let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};


const arr = [32, 12, 12, 10, 46, 93, 2, 9, 0];
const sortMethod = (a, b) => a - b;


const flatArr = [1, [2, [3, [4, [5, [6, [7]]]]]]]
const flattenArray = arr => arr.flatMap(item => Array.isArray(item) ? flattenArray(item) : item);

console.log(flattenArray(flatArr))

