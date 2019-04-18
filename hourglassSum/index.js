function genericHourglassSum(arr, i, j) {
  return arr[i][j] + arr[i][j+1] + arr[i][j+2] +
         arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
}

function hourglassSum(arr) {
  let resultArray = []

  for (let i = 0; i < arr.length-2; i++) {
    for (let j = 0; j < arr.length-2; j++) {
      resultArray.push(genericHourglassSum(arr, i, j))
    }
  }
  return resultArray.reduce(function(a, b) {
    return Math.max(a, b);
  })
}

console.log(hourglassSum([[1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6],
              [1, 2, 3, 4, 5, 6]]))

console.log(hourglassSum([[1, 1, 1, 1],
              [2, 2, 2, 2],
              [3, 3, 3, 3],
              [4, 4, 4, 4]]))
