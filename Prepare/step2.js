/** @format */

// For in
const items = {
  first: new Date(),
  second: 2,
  third: 'test',
};

for (const key in items) {
  if (items.hasOwnProperty(key)) {
    console.log(`${key}: ${items[key]}`);
  }
}

// Object.keys
console.log('Object keys');
const courses = {
  java: 10,

  javascript: 55,

  nodejs: 5,

  php: 15,
};

const keys = Object.keys(courses);

keys.forEach((key) => console.log(`${key}: ${courses[key]}`));

// Object.values
console.log('Object.values');
const animals = {
  tiger: 1,

  cat: 2,

  monkey: 3,

  elephant: 4
};

Object.values(animals).forEach((val) => console.log(val))

//Object.entries()
console.log('Object.entries()');

const entries = Object.entries(animals);
console.log(entries)

