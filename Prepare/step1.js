// Static Methods

class Animal {
  static Say() {
    console.log('meaw');
  }
}
Animal.Go = function() {
  console.log('goooo');
}
 Animal.Say();
 Animal.Go();

/// ----------------------------------------------------------------

// Flags and descriptors

// Get properties
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {}

Object.defineProperty(user, 'name', {
  value: 'John',
  "configurable": false,
  'writable': false
})

console.log(user.name)
user.name = "Pete"; 

console.log(user.name)
