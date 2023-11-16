// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// Test.assertDeepEquals(towerBuilder(1), ["*"]);
// Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
// Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);

function towerBuilder(nFloors) {
  if (!nFloors || nFloors <= 0) return [];

  let floor = '*';
  const result = [floor];

  for (let i = 1; i < nFloors; i++) {
    const lastElement = result[result.length - 1];
    result.forEach((element, i) => {
      result[i] =` ${element} `;
    });
    result.push(`*${lastElement}*`);
  }

  return result;
}

console.log(towerBuilder(4));
