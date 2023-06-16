Array.prototype.filter = function (func, thisArg) {
  let newArr = [];

  if (thisArg) func = func.bind(thisArg);

  for (let i = 0; i < this.length; i++)
    if (i in this)
      if (func(this[i], i, this))
        newArr.push(this[i]);

  return newArr;
};

Array.prototype.filter = function (fun, that) {
  let out = [];

  if (that) {
    fun = fun.bind(that);
  }

  let t = this;
  let len = t.length;
  for (let i = 0; i < len; i++) {
    if (i in t) {
      if (fun(t[i], i, t)) {
        out.push(t[i]);
      }
    }
  }
  return out;
};

const empty_array = [];
const single_array = [1];
const base_array = ["0", "1", "2", "3", "4", "00", "01"];

const newArr = base_array.filter((x) => true);

console.log(newArr);
