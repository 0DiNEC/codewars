// [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
// function sortByBit(arr) {
//   const bitNumber = new Array();

//   for (let i = 0; i < arr.length; i++)
//     bitNumber.push({
//       value: arr[i],
//       bits: arr[i].toString(2).split("0").join("").length,
//     });

//   bitNumber.sort((a, b) => {
//     if (a.bits == b.bits) return a.value > b.value ? 1 : -1;
//     return a.bits > b.bits ? 1 : -1;
//   });

//   return bitNumber;
// }

// console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));

function sortByBit(arr) {
  function bitOnNumber(num) {
    return num.toString(2).split("0").join("").length;
  }

  return arr.sort((a, b) => {
    if (bitOnNumber(a) == bitOnNumber(b)) return a - b;
    return bitOnNumber(a) - bitOnNumber(b);
  });
}
