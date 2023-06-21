// Function.prototype.bind = function (thisArg) {
//   const func = this;
//   return function (...args) {
//     const that = this === global ? thisArg : this;
//     var re;
//     re._
//   };
// };

Function.prototype.bind = function (rootContext) {
  return (childContext = rootContext) => this.call(childContext, childContext);
};

var func = function () {
  console.log(this.prop);
  return this.prop;
};
var obj1 = { prop: 1 },
  obj2 = { prop: 2 };

func = func.bind(obj1);
func(); // Will produce 1

func = func.bind(obj2);
func(); // Will also produce 1 :(
