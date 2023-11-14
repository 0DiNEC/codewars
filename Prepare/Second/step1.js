// true + false
// 12 / "6" -- 2
// "number" + 15 + 3 -- number153
// 15 + 3 + "number" -- 18number
// [1] > null -- true
// "foo" + + "bar" -- fooNaN
// 'true' == true -- false
// false == 'false' -- false
// null == '' --false
// !!"false" == !!"true" -- true
// [‘x’] == ‘x’ -- true
// [] + null + 1 -- null1
// 0 || "0" && {} -- {}
// [1,2,3] == [1,2,3] -- false
// {}+[]+{}+[1] -- [object Object][object Object]1
// !+[]+[]+![] -- truefalse
// new Date(0) - 0 -- 0
// new Date(0) + 0
///|| 

console.log([] == ![]);
