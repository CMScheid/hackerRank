// left Rotation
// https://www.hackerrank.com/challenges/ctci-array-
// left-rotation/problem?h_l=interview&playlist_
// slugs%5B%5D=interview-preparation-kit&playlist_
// slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

function rotLeft(a, d) {

  let leftElements = a.splice(0, d)

  let newArray = a.concat(leftElements)

  return newArray
}
console.log(rotLeft([1,2,3,4,5],1))
console.log(rotLeft([1,2,3,4,5],2))
console.log(rotLeft([1,2,3,4,5],3))
