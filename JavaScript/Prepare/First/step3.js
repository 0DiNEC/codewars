class User {
  #password;
  age;
  gender;

  constructor(...props) {
    this.#password = props.password;
    this.age = props.age;
    this.gender = props.gender;
  }

  output() {
    console.log(this.#password);
    console.log(this.age);
  }
}
class Person extends User {}

const user = new User();
const person = new Person();

console.log(person.password);
person.output();
