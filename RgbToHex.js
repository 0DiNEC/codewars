const HEX = { HEXA_DECIMAL: '0123456789ABCDEF' };

const convert = (number) => {
  let anwser = "";
  if (number === 0 || number < 0)
    return "00";
  if (number > 255)
    number = 255;
  if (number <= 15)
    anwser += "0";

  anwser += number.toString(16);
  return anwser;
}

function rgb(r, g, b) {
  return (convert(r) + convert(g) + convert(b)).toUpperCase();
}

console.log(rgb(241,2,221));

