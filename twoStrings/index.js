function twoStrings(s1, s2) {

  for (let char1 of s1) {
    for (let char2 of s2) {
      if (char1 === char2) {
        return console.log("YES");
      }
    }
  }
  return console.log("NO")
};

twoStrings("amarelo", "fun");
twoStrings("cara", "luiz");
twoStrings("abd", "3215");
twoStrings("scheid", "montibeller");
twoStrings("hello", "world")
twoStrings("hi", "world");
twoStrings("pacaba", "lololo")
