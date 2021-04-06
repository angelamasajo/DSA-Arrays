function mergeArrays(arr1,arr2){
  let mergedArr = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;
  while(current < (arr1.length + arr2.length)) {
    
    let depleted1 = (index1 >= arr1.length);
    let depleted2 = (index2 >= arr2.length);

    //if next item comes from arr1
    if(!depleted1 && (depleted2 || (arr1[index1] < arr2[index2]))) {
      mergedArr.push(arr1[index1]);
      index1++;
    //if next item comes from arr2
    } else {
      mergedArr.push(arr2[index2]);
      index2++;
    }
    current++;
  }

  return mergedArr;
}

const answer = mergeArrays([1, 3, 6, 9], [2, 4, 5]);
console.log(answer);
//answer2 = [1,2,3,4,5,6]
//O(n)