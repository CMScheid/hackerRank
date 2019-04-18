function twoArrays(k, A, B) {

 function sortingA (a,b) { return a-b }
 A.sort(sortingA);

 function sortingB (a,b) { return b-a }
 B.sort(sortingB);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (i === j && A[i] + B[j] !== k) {
        return "NO";
      }
    }
  }
  return "YES";
}

twoArrays(10, [7,8,9],[3,2,1]);

twoArrays(10, [7,8,9],[1,2,3]);
twoArrays(10, [7,7,9],[3,2,4])
twoArrays(5, [3,2,2,1], [3,3,3,4])
