function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let n = arr.length

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative ++;
    } else {
      zero++;
    }
  }

  positive = positive/n;
  negative = negative/n;
  zero = zero/n;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zero.toFixed(6));
  return;
}

plusMinus([1,2,4,6,-7,-8, 0])
