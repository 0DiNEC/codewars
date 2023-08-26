function vowelOne (s) {
  const vowel_list = 'aeiouAEIOU';
  let anwser = '';

  for (let i = 0; i < s.length; i++) { anwser += vowel_list.indexOf(s[i]) !== -1 ? '1' : '0'; }

  return anwser;
}
