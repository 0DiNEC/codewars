function toWeirdCase(string) {
  let returnString = "";
  let newStringArr = string.split(' ');

  for (let j = 0; j < newStringArr.length; j++) {
    let stringElement = newStringArr[j];
    let newString = "";
    for (let i = 0; i < stringElement.length; i++) {
      if ((i + 1) % 2 !== 0)
        newString += stringElement[i].toUpperCase();
      else
        newString += stringElement[i];
    }
    returnString += newString + " ";
  }
  return returnString.trim();
}

console.log(toWeirdCase('This is a test'))