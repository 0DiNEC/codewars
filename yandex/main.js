const queue = require("./queue");

queue.push(0);
queue.push(1);
queue.push(4999999);

console.log(queue.min());