// 1 -> 0
// 2 -> 0 + 1
// 3 -> 0 + 1 + 2

function nthFibo(n) {
  return n === 1 ? 0 : n === 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
}

console.log(nthFibo(1));
