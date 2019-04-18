function minimumSwaps (arr) {
  let count = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
      i--;
      count++;
    }
  }
  return count
}

minimumSwaps([7,1,3,2,4,5,6])
minimumSwaps([1,3,5,2,4,6,7])
minimumSwaps([4,3,1,2])

// if you really have to swap the elements...
// function minimumSwaps (arr) {
//   let count = 0;
//   let n = arr.length;
//
//   for (let ordNum = 0; ordNum < n; ordNum++) {
//     for (let inordNum = 0; inordNum < n; inordNum++) {
//       if ((ordNum === inordNum) && (ordNum+1 !== arr[inordNum])) {
//         const index = arr.findIndex(orderedNumber => orderedNumber === ordNum+1);
//         arr.splice(inordNum, 1, arr.splice(index, 1, arr[inordNum])[0]);
//         console.log(arr)
//         count++;
//       }
//     }
//   }
//   return count
// }
