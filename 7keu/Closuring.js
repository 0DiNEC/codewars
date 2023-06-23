function generateOdds(len) {
  if (len < 1) return null;
  const addOdd = (arr) => {
    if (arr.length < len) {
      arr.push(arr[arr.length - 1] + 2);
      addOdd(arr);
    }
    return [...arr];
  };
  return addOdd([1]);
}