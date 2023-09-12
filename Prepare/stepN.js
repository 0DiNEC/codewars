class User {
  constructor
  #password = '123';
  age = 23;
  static gender = 'man';

  output() {
   console.log(this.#password) 
   console.log(this.age) 
  }
}
class Person extends User {

}

const user = new User();
const person = new Person();

console.log(person.password)
person.output()