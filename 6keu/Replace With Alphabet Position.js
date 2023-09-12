function alphabetPosition(text) {
  return([...text].reduce((acc, cur) => {
    const charCode = cur.toUpperCase().charCodeAt(0);
    return charCode >= 65 && charCode <= 90
      ? acc + `${charCode - 64} `
      : acc;
  }, '').trim());
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));