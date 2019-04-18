function minimumBribes(queue){
    let bribes = 0;
    for (let person = queue.length - 1; person >= 0; person--) {
        if (queue[person] - (queue + 1) > 2) {
            console.log ("Too chaotic");
            return;
        }
        for (let j = Math.max(0, queue[person] - 2); j < person; j++){
          if (queue[j] > queue[person]) {
            bribes++
          };
        }
    }
    console.log(bribes);
}

// function minimumBribes(q) {
//   let bribes = 0;
//   let qLength = q.length;
//
//   for (let person = 0; person < qLength-1; person++) {
//     let plusElement = person + 1;
//
//
//     if (q[person] - plusElement > 2) {
//       return console.log("Too chaotic");
//     }
//
//     if (q[person] > q[person+1] && q[person] > q[person+2]) {
//       bribes = bribes + (q[person] - q[person+1]);
//     } else if (q[person] > q[person+1]) {
//       bribes = bribes + (q[person] - q[person+1])
//     } else if (q[person] > q[person+2]) {
//       bribes = bribes + (q[person] - q[person+2])
//     }
//   }
//     console.log(bribes)
//     return bribes;
// }

minimumBribes([1,2,5,3,7,8,6,4])
// minimumBribes([5,2,1,3,4])
// minimumBribes([2,1,5,3,4])
// minimumBribes([4,2,3,1,5])
// minimumBribes([1,2,5,3,4,7,8,6])
// minimumBribes([6,4,3,2,5,1])
// minimumBribes([6,4,3,2,5,1])
// minimumBribes([4,3,2,5,1])
// minimumBribes([2,4,3,6,5,1])
