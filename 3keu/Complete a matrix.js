// We get
// [ 10 ,null, 3  ],
// [ 4  ,null, 16 ],
// [null, 12 ,null]

// the answer is
// [10, 8, 3],
// [ 4, 1,16],
// [ 7,12, 2]

function completeMatrix(matrix) {
  nullPositions = [
    /*{
      row: 
      col:
    }*/
  ]
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === null)
        nullPositions.push({ row: i, col: j });
    }
  }
  
  return null;
}

var matrix = [
  [10, null, 3],
  [4, null, 16],
  [null, 12, null],
];

completeMatrix(matrix);

