const graph = { a: ['b, c, d'], b: ['c, d'], c: ['d'] };

const router = new Map();
router.set(graph.a, [graph.a]);

console.log(router)