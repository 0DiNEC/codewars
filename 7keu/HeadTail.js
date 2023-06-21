const tail = (args) => {
  args.shift();
  return args;
};

const tail1 = array => array.slice(1)

const init = (args) => {
  args.pop();
  return args;
};

console.log(init([24,37,3,9,31,4,17,4,45,3]));
