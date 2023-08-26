function explode(s) {
  let cout = "";
  for (let i = 0; i < s.length; i++) {
    const element = parseInt(s[i]);
    if (element > 0) for (let j = 1; j <= element; j++) cout += s[i];
  }
  return cout;
}

console.log(explode("123"));
