// Description:
// Have you solved the simple version and the challenge version? Now, the ultimate version is coming :]. The difference between this version and the challenge version is:

// the element of range from [start,end] into [start,end,num]
// That is, before we calculate the sum value, we need to replace the element with num at the start index.

// Task
// Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1,num1],[start2,end2,num2],...], start and end are the index of arr and start always less than end. Your task is replace the value of arr[start] with num, and then calculte the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.

// For example:

// Given arr = [1,-2,3,4,-5,-4,3,2,1],
//       range = [[1,3,5],[0,4,2],[6,8,1]]
// should return 12

// calculte process:
// step 1:
// replace arr[1] with 5
// then arr = [1,5,3,4,-5,-4,3,2,1]
// range[1,3] = arr[1]+arr[2]+arr[3] = 5 + 3 + 4 = 12

// step 2:
// replace arr[0] with 2
// then arr = [2,5,3,4,-5,-4,3,2,1]
// range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
//            = 2 + 5 + 3 + 4 + -5 = 9
// step 3:
// replace arr[6] with 1
// then arr = [2,5,3,4,-5,-4,1,2,1]
// range[6,8] = arr[6]+arr[7]+arr[8] = 1 + 2 + 1 = 4

// So the maximum sum value is 12

function maxSum(arr, ranges) {
  let result = null; // number | null
  for (let range of ranges) {
    const startPos = range[0];
    const endPos = range[1];
    const replaceValue = range[2];

    const curResult = arr
      .slice(startPos + 1, endPos + 1)
      .reduce((sum, element) => sum + element, replaceValue);
    result = result === null ? curResult : Math.max(result, curResult);
    arr[startPos] = replaceValue;
  }
  return result;
}

maxSum(
  [1, -2, 3, 4, -5, -4, 3, 2, 1],
  [
    [1, 3, 5],
    [0, 4, 2],
    [6, 8, 1],
  ],
);

