function sherlockAndAnagrams(s) {
  let count = 0;
  let theWord = []

  for (let i of s) {
    for (let j of s) {
      if (i === j) {
        theWord.push(j);
        console.log(theWord)
        count++;
      }
    }
  }
  console.log(count);
};

// sherlockAndAnagrams("abba");
// sherlockAndAnagrams("abab")
sherlockAndAnagrams("ifailuhkqq")
