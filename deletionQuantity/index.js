// Karl has an array of integers. He wants to reduce the
// array until all remaining elements are equal.
// Determine the minimum number of elements to delete to reach his goal.
// For example, if his array is arr = [1,2,2,3], we see that
// he can delete the 2 elements 1 and 3 leaving arr = [2,2].
// He could also delete both twos and either
// the 1 or the 3, but that would take 3 deletions.
// The minimum number of deletions is 2.

function deletionQuantity(arrayLength, maxRepeated) {
  return arrayLength - maxRepeated;
}

function equalizeArray(arr) {
  let totalRepeated = new Map();
  let maxRepeated = 0;

  // CONVERT ARRAY IN AN OBJECT:
  for (let i of arr) {
    if (totalRepeated[i]) {
      totalRepeated[i]++;
    } else {
      totalRepeated[i] = 1;
    }
  }

  let repeatedNum = 0;

  for (let prop in totalRepeated) {
    if (totalRepeated[prop] > maxRepeated) {
      repeatedNum = prop;
      maxRepeated = totalRepeated[prop]
    }
  }

  let repeatedArray = []

  for (let i = 0; i < maxRepeated; i++) {
    repeatedArray.push(repeatedNum)
  }

  console.log(repeatedArray)

  if (maxRepeated === 1) {
    return deletionQuantity(arr.length, maxRepeated);
  }

  return deletionQuantity(arr.length, maxRepeated);
}
equalizeArray([1,2,2,3,5,6,6,7,8,8,8,9])
