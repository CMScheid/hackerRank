function diagonalDifference(arr) {

  let n = arr.length
  let difference = 0;
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      if (row === column) {
        leftToRightSum += arr[row][column];
      }
    }
  }
  arr.reverse();

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      if (row === column) {
        rightToLeftSum += arr[row][column];
      }
    }
  }
  difference = Math.abs(leftToRightSum - rightToLeftSum)

  return difference;
};

diagonalDifference ([[1,2,3],
                     [4,5,6],
                     [7,8,9]])

diagonalDifference ([[1,2,3,4],
                     [4,5,6,7],
                     [3,6,9,10],
                     [7,8,9,-11]])

                     // function diagonalDifference(arr) {
                     //
                     //   let n = arr.length;
                     //   let difference = 0;
                     //   let leftToRightSum = 0;
                     //   let rightToLeftSum = 0;
                     //
                     //   for (let row = 0; row < n; row++) {
                     //     for (let column = 0; column < n; column++) {
                     //       if (row === column) {
                     //         leftToRightSum += arr[row][column];
                     //       }
                     //
                     //       if (row+column === n-1) {
                     //         rightToLeftSum += arr[row][column]
                     //       }
                     //     }
                     //   }
                     //   difference = Math.abs(leftToRightSum - rightToLeftSum)
                     //
                     //   return difference;
                     // };
