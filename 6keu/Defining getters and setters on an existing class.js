class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName () {
    return this.firstName + ' ' + this.lastName;
  }
}

// set name (value) {
//   this.firstName = value.split(' ')[0];
//   this.lastName = value.split(' ')[1];
// }

Object.defineProperty(Person.prototype, 'name', {
  get: function () {
    return this.getName();
  },
  set: function (value) {
    this.firstName = value.split(' ')[0];
    this.lastName = value.split(' ')[1];
  }
});

const augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'
