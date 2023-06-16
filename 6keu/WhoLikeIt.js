function likes(names) {
  let countOther = names.length > 3 ? names.length - 2 : 0;
  let length = names.length;
  let answerWhoLike = "";
  if (length > 0) {
    let newNames = new Array();
    for (let i = 0; i < length - countOther; i++)
      newNames.push(names[i]);


    if (length === 1)
      answerWhoLike = newNames.join('');
    if (length === 2)
      answerWhoLike = newNames.join(' and ');
    if (length > 2) {
      answerWhoLike = newNames[0] + ", " + newNames[1];
      if (countOther === 0)
      answerWhoLike += " and " + newNames[2];
    }

    if (countOther > 0)
      answerWhoLike += ` and ${countOther} others`;

  }
  else
    answerWhoLike = "no one"
  answerWhoLike = answerWhoLike.split('  ');
  return length < 2 ? answerWhoLike + " likes this" : answerWhoLike + " like this";
}

console.log(likes(['Petter', 'Alex', 'Andrew', "Yan"]));