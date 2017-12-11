
function pairwise(arr, arg) {
  
  var curr; // current static
  var shuffle; // number after curr shuffled through until either sum found or end reached
  var sum = 0;
  var alreadyUsed = makeZeroArray(arr.length); //array of indexes (1 - used, 0 - not)
  
  for (var i = 0; i < arr.length; i++) {
    
    // if 1, then index already used and cannot be used again
    if (alreadyUsed[i] != 0)
      continue;

    curr = arr[i];
    
    for (var j = i+1; j < arr.length; j++) {

      // if 1, then index already used and cannot be used again
      if (alreadyUsed[j] != 0)
        continue;

      shuffle = arr[j];
      if (curr + shuffle == arg) {
        alreadyUsed[i] = 1; // index now has been used
        alreadyUsed[j] = 1; // index now has been used
        sum += i + j;
        break;
      }
    }
    
  }
  
  console.log(sum);
  return sum;
}

function makeZeroArray(length) {
  
  var arr = [];
  for (var i = 0; i < length; i++)
    arr[i] = 0;

  return arr;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);
