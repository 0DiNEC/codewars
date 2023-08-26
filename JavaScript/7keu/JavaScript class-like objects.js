let Animal = class {
  constructor (name, type) {
    this.name = name
    this.type = type
  }

  toString () {
    return `${this.name} is a ${this.type}`
  }
}

const dog = new Animal('Max', 'dog')
console.log(dog)
console.log(dog.toString())
dog.name = 'Lox';
console.log(dog.name);