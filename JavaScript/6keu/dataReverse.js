const dataReverse = function (data) {
  if (data.length===0) return []
  const arrayBytes = [];
  const tam = data.length / 8;
  for (var i = 0; i < tam; i++) {
    arrayBytes.push(data.splice(0, 8));
  }

  let retArr = arrayBytes.reverse().join('').split(',').map(i => parseInt(i));
  return retArr;
}


const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
console.log(dataReverse(data3));