

const disemvowel = (str) => {
  const vowel = 'aeiou';
  return str.split('').filter(e => !vowel.includes(e.toLowerCase())).join('');
}

console.log(disemvowel(`LoX'EBANNIY`));
