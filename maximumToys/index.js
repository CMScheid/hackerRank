function maximumToys (prices, k) {

  let result = 0;
  let count = 0;

  prices.sort(function(a, b){
    return a-b
  });
  for (let i = 0; i < prices.length; i++) {
    if ((result + prices[i]) < k) {
      result = result + prices[i];
      count++
    }
  }
  return count;
}

maximumToys([1, 12, 5, 111, 200, 1000], 70)
maximumToys([2,1,10,12,34,3000,2000,1000], 30)
