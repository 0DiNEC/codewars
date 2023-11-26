// create
function objectCreatePolyfill(proto) {
  function Func() {}
  Func.prototype = proto;

  return new Func();
}
