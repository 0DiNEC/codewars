function numberCompose(digitArr, searchNumber) {
  const result = [];

  const nextDigit = (curVal, index, setDigitArr) => {
    const copyArr = [...setDigitArr];
    for (index; index < digitArr.length; index++) {
      const value = curVal + digitArr[index];
      if (value === searchNumber) {
        result.push([...setDigitArr, digitArr[index]])
        return true;
      }
      if (value < searchNumber) {
        setDigitArr.push(digitArr[index]);
        if (nextDigit(value, index + 1, setDigitArr))
          return true;
        break;
      }
      if (value > searchNumber)
        continue;
    }
    if (index < digitArr.length)
      nextDigit(curVal, index + 1, copyArr);

    return false;
  }
  for (let i = 0; i < digitArr.length; i++) {
    const curVal = digitArr[i];
    if (curVal > searchNumber) continue;
    if (curVal === searchNumber) {
      result.push(curVal);
      continue;
    }

    const setDigitArr = [curVal];
    nextDigit(curVal, i + 1, setDigitArr);
  }

  result.forEach(item => console.log(item))

  return result;
}

numberCompose([1, 2, 3, 4, 5, 6, 7, 8], 8)