function jumpingOnClouds(c) {
 let count = 0


 console.log(c)
 for (let i = 0; i < c.length; i++) {
   if (c[i] === 1) {
   } else if (c[i] === 0 && c[i+2] === 0) {
     count++
     i++;
   } else {
     count++;
   }
 }
 count--;
 console.log(count)
 return count;
}

// Count-- ao fim, pois o primeiro elemento não é contabilizado

jumpingOnClouds([0,0,1,0,0,0,0,0,0,0,0,1,0])
