function sockMerchant(n, ar) {
  let obj = {}
  let allSocks = [];
  let pairSocks = 0;

  // for': to create a { key:value } from the array
  for (let i of ar) {
    if (!obj[i]) {
    obj[i] = 1
    } else {
    obj[i] = obj[i] + 1;
    }
  }

  for (let i in obj) {
    if (obj[i]>=2) {
    allSocks.push(obj[i])
    }
  }
  return allSocks
}

sockMerchant(12, [10, 10, 10, 10, 20, 20, 10, 10, 30, 50, 10, 20]);
