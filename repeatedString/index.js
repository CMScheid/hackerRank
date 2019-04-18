function sockMerchant(n, ar) {
   let allSocks = {}
   let twinSocks = 0;

  // convert array into {key:value}
   for (let i of ar) {
      if (!allSocks[i]) {
      allSocks[i] = 1
      } else {
      allSocks[i] = allSocks[i] + 1;
      }
   }

  for (let i in allSocks) {

// if the allSocks[i](value) is bigger than 2 and its remainder, when divided by 2 is not
// equal to zero, then remove extra item, to make it a pair:
    if (allSocks[i]>=2 && allSocks[i]%2 !== 0) {
     allSocks[i] = allSocks[i]-1
    }
// If the allSocks[i](value) is bigger than 2 and its remainder is equal to zero (pair),
// then add it to socks.
    if (allSocks[i] >= 2 && allSocks[i]%2 === 0) {
     twinSocks = twinSocks + allSocks[i]
    }
  }
  return twinSocks / 2
}

sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20]);

// { '10': 4, '20': 7, '30': 1, '50': 1 }
// { '10': 4, '20': 6, '30': 1, '50': 1 }
// { '10': 4, '20': 6, '30': 1, '50': 1 }
// { '10': 4, '20': 6, '30': 1, '50': 1 }
// 5
//
// obj: { '10': 4, '20': 6, '30': 1, '50': 1 }
// i is the key {'10', '20', '30', '50'}
// obj[i]: is the value 4, 6, 1, 1
