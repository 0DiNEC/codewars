function factory(x){
  return function(args) {
    return args.map((item) => item * x);
  }
}

var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
console.log(fives(myArray));      