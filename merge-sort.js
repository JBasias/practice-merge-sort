// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(A) {


  if (A.length <= 1) return A;

  const mid = Math.floor(A.length / 2);
  let L = A.slice(0, mid);
  let R = A.slice(mid);

  L = mergeSort(L);
  R = mergeSort(R);
  //const sortedL = mergeSort(L);
  //const sortedR = mergeSort(R);

  return merge(L,R);

  // return merge(sortedL, sortedR);



  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {



  let ret =[];

  let i=0; let j=0; let n=arrA.length; let m=arrB.length;


  while(i<n || j<m)
  {
     if(i === n)
     {
      ret.push(arrB[j]);
      j++;
     }
     else if(j === m)
     {
       ret.push(arrA[i]);
       i++;
     }
     else
     {
       if(arrA[i]<arrB[j])
       {
         ret.push(arrA[i]);
         i++;
       }
       else
       {
         ret.push(arrB[j]);
         j++;
       }
     }

  }

  return ret;


  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

}

module.exports = [merge, mergeSort];
