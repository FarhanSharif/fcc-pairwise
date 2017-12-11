
function pairwise(arr, arg) {
  
  var curr; // current static
  var shuffle; // number after curr shuffled through until either sum found or end reached
  var sum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    curr = arr[i];
    
    for (var j = i+1; j < arr.length; j++) {
      shuffle = arr[j];
      if (curr + shuffle == arg) {
        sum += i + j;
        break;
      }
    }
    
  }
  
  console.log(sum);
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);
