function getLengthOfMissingArray(arrayOfArrays) {
  const arrLen = (arrayOfArrays || [])
    .map((item) => (item ? item.length : 0))
    .sort((a, b) => a - b);

  if (arrLen.includes(0)) return 0;

  for (let i = 0; i < arrLen.length - 1; i++)
    if (arrLen[i] + 1 !== arrLen[i + 1]) return arrLen[i] + 1;
  return 0;
}