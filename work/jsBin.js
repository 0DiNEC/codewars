function sostavChisla(digitArr, searchNumber) {
  digitArr = digitArr.sort((a, b) => a - b);
  const result = [];

  const nextDigit = (curVal, index, setDigitArr) => {
    const copyArr = [...setDigitArr];
    for (index; index < digitArr.length; index++) {
      const value = curVal + digitArr[index];
      if (value === searchNumber) {
        result.push([...setDigitArr, digitArr[index]])
        return;
      }
      if (value < searchNumber) {
        setDigitArr.push(digitArr[index]);
        nextDigit(value, index + 1, setDigitArr)
        break;
      }
      if (value > searchNumber)
        continue;
    }
    if (index < digitArr.length)
      nextDigit(curVal, index + 1, copyArr);
  }
  for (let i = 0; i < digitArr.length; i++) {
    const curVal = digitArr[i];
    if (curVal > searchNumber) continue;
    if (curVal === searchNumber) {
      result.push([curVal]);
      continue;
    }

    const setDigitArr = [curVal];
    nextDigit(curVal, i + 1, setDigitArr);
  }

  //result.forEach(item => console.log(item))

  return result;
}

//sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 15)