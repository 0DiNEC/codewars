// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let str = "";
  for (let i = 0; i < word.length; i++) {
    const element = word[i].toLowerCase();
    const firstIndex = word.toLowerCase().indexOf(element);
    const lastIndex = word.toLowerCase().lastIndexOf(element);
    if (firstIndex < lastIndex) str += ")";
    else str += "(";
  }

  return str;
}

console.log(duplicateEncode("Supralapsarian"));
// )()))()))))()(