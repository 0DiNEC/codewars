// bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    let fn = this;
    let args = Array.prototype.slice.call(arguments, 1);

    return function () {
      let bindArgs = Array.prototype.slice.call(arguments);
      return fn.apply(context, args.concat(bindArgs));
    };
  };
}

