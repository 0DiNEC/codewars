const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

// eslint-disable-next-line no-extend-native
Object.prototype.hash = function (string) {
  const propArr = string.split('.');
  let currentObj = this;

  for (let i = 0; i < propArr.length; i++) {
    const prop = propArr[i];
    if (!Object.prototype.hasOwnProperty.call(currentObj, prop)) {
      return undefined;
    }
    currentObj = currentObj[prop];
  }

  return currentObj;
}

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined
