// bind

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      return fn.apply(context, args.concat(bindArgs));
    };
  };
}

