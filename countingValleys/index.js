// Function Description
// Complete the countingValleys function in the editor below.
// It must return an integer that denotes the number of valleys Gary traversed.
// countingValleys has the following parameter(s):
// n: the number of steps the person takes
// s: a string describing his path

function countingValleys(n, s) {
  let steps = 0;
  let sum = [0]
  let valley = 0;
  const path = s.split("")

  for (let i=0; i<=path.length; i++) {
    if (path[i] === "U") {
      steps++;
      sum.push(steps);
      } else if (path[i] === "D") {
      steps--;
      sum.push(steps);
    }
  }

  for (let i=0; i<=sum.length; i++) {
    if (sum[i] === 0 && sum[i+1] < 0) {
    valley++;
    }
  }
  return valley
}
countingValleys(8, "UDDDUDUU")
