const graph = { a: ['b, c, d'], b: ['c, d'], c: ['d'] };



const findPath = (graph, from, to) => {
  const stack = [from];
  const router = new Map();
  router.set(from, [from]);

  console.log(router.get())

  return 'no way';
}

console.log(findPath(graph, 'a', 'd'));