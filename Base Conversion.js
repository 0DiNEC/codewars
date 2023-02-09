let Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};


let number = 15;
let answer = "";


const convert = (input, sourse, target) => {
  let number = 0;
  if (sourse === Alphabet.DECIMAL) {
    number = input;
  }
  else {
    for (let i = input.length - 1; i >= 0; i--) {
      const element = input[i];
      const multiple = Math.pow(sourse.length, input.length - 1 - i);

      number += sourse.indexOf(element) * multiple;
    }
  }

  while (true) {
    if (number >= 0) {
      answer += target[number % target.length];
      if ((number % target.length) === 1)
        number = Math.floor((number - 1) / target.length);
      else
        number = Math.floor(number / target.length);
      if (number === 0)
       break;
    }
    else
      break;
  }

  return answer.split("").reverse().join("");
}


console.log(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER));

