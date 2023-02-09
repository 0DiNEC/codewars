function getCard() {
  let bingoArray = new Array();
  let collumnArray = ['B', 'I', 'N', 'G', 'O'];
  let min = 1;
  let max = 15

  for (let i = 0; i < collumnArray.length; i++) {
    const element = collumnArray[i];
    bingoArray = bingoArray.concat(PushRandomCard(element, i === 2 ? 4 : 5, min, max));
    min += 15;
    max += 15;
  }
  
  return bingoArray
}


const PushRandomCard = (char, length, min, max) => {
  let columnArray = new Array();
  for (let i = 0; i < length; i++) {
    let cardNum = `${char}${getRandomCard(min, max)}`;
    if (!columnArray.includes(cardNum)) {
      columnArray.push(cardNum);
    } else { i-- }
  }
  return columnArray;
}

const getRandomCard = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getCard().length);
console.log(getCard());