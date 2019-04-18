function staircase (n) {


  for (let row = 0; row < n; row++) {
    //for each row, an empty string:
    let stair = "";

    for (let column = 0; column < n; column++) {

      if (row + column >= n - 1) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair)
  }
}

staircase(4);
staircase(6);
staircase(10)
