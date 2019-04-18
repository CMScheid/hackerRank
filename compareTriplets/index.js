function compareTriplets(a, b) {
  let arr = [0,0]

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i === j) {
        if (a[i] > b[j]) {
          arr[0] = arr[0] + 1;

        } else if (a[i] < b[j]) {
          arr[1] = arr[1] + 1;

        }
      }
    }
  }
  console.log(arr)
  return arr
}

compareTriplets([1,2,3,8], [3,2,5,1])
